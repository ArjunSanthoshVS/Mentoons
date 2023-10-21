import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const apiUrl = "http://localhost:5000"
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user);
        try {
            const response = await axios.post(`${apiUrl}/login`, user)
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload()
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <div className="border border-5 card w-50 text-center p-5 m-auto mt-5">
            <img className="m-auto" src="/logo.png" alt="" />
            <h2><b>Login</b></h2>
            <form onSubmit={handleSubmit}>
                <div className="m-4">
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="m-4">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button className="btn bg-primary text-white px-5" type="submit">Login</button><br />
            </form>
            <button className=" w-25 m-auto p-1 btn btn-sm bg-secondary text-white mt-2" type="button" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
    )
}

export default Login
