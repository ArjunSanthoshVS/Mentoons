import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const apiUrl = "http://localhost:5000"
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${apiUrl}/register`, formData)
        console.log(response);
        navigate('/login')
    };

    return (
        <div className="border border-5 card w-50 text-center p-5 m-auto mt-5">
            <img className="m-auto" src="/logo.png" alt="" />
            <h2><b>Registration</b></h2>
            <form onSubmit={handleSubmit}>
                <div className="m-4">
                    <label htmlFor="name">First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="m-4">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="m-4">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn bg-primary text-white px-5" type="submit">Sign Up</button><br />
            </form>
            <button className=" w-25 m-auto p-1 btn btn-sm bg-secondary text-white mt-2" type="button" onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Register
