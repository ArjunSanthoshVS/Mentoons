import axios from 'axios';
import './Category.css'
// import { useNavigate } from 'react-router-dom';
const Category = () => {
    // const navigate=useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user?.user?._id
    const addToCart = async (item) => {
        console.log(item);
        try {
            const response = await axios.post("http://localhost:5000/add_to_cart", { item, userId })
            console.log(response);
            // navigate('/cart')
        } catch (err) {
            alert("Already Existing..!")
        }
    }
    return (
        <>
            <img className="category-img" src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-10.png" alt="" />
            <div className="background">
                <div className="help">
                    <img className='help-you-img' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-11.png" alt="" />
                </div>
                <div className="banners">
                    <div className="image-container">
                        <img className='banner' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-24.png" alt="" /><br />
                        <button className="bn39 d-flex m-auto mt-3" onClick={() => addToCart({ product: 'Kalakriti Workshop', price: 500 })}><span className="bn39span">Add to Cart</span></button>
                    </div>
                    <div className="image-container">
                        <img className='banner' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-25.png" alt="" /><br />
                        <button className="bn39  d-flex m-auto mt-3" onClick={() => addToCart({ product: 'Hasyaras Workshop', price: 500 })}><span className="bn39span">Add to Cart</span></button>
                    </div>
                    <div className="image-container">
                        <img className='banner' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-26.png" alt="" /><br />
                        <button className="bn39  d-flex m-auto mt-3" onClick={() => addToCart({ product: 'Instatnt Kadha Workshop', price: 500 })}><span className="bn39span">Add to Cart</span></button>
                    </div>
                </div>
                <div className="starter-card">
                    <img className='starter-card-img' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-12.png" alt="" />
                    <img className='buy-now' src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-13.png" alt="" />
                </div>
                <div className="customer-reviews">
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-14.png" alt="" className="customer-reviews-img" />
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-15.png" alt="" className="deepanjali" />
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-16.png" alt="" className="view-all" />
                </div>
            </div>
            <div className="prep-pers">
                <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-23.png" alt="" className='prep-pers-img' />
            </div>
            <div className="top-section">
                <div className="customer-review-product">
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-19.png" alt="" className="customer-review-product-img" />
                </div>
                <div className="arrows">
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-17.png" alt="" className="left-arrow" />
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-18.png" alt="" className="right-arrow" />
                </div>
            </div>
            <div className="bottom-section">
                <div className="blue-card">
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-20.png" alt="" className="blue" />
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-21.png" alt="" className="rishi" />
                    <img src="/Welcome to MENTOONS shopping (1)/PNG/Welcome to MENTOONS shopping-22.png" alt="" className="girl" />
                </div>
            </div>
        </>
    )
}

export default Category
