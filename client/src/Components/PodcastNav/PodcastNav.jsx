import { useRef } from 'react';
import './PodcastNav.css'
import { useNavigate } from 'react-router-dom';
const PodcastNav = () => {
    const navigate = useNavigate()
    const navRef = useRef(null);
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <>
            <div className="podcast-navbar d-flex justify-content-between">
                <img className='podacst-logo m-3 ms-5' src="/logo.png" alt="" />
                <div className="right d-flex">
                    <nav ref={navRef}>
                        <div className="options d-flex">
                            <div className="text-container">
                                <p className='main-item px-4'>HOME</p>
                            </div>
                            <p className='item'>COMICS</p>
                            <p className='item'>AUDIO COMICS</p>
                            <p className='item'>PEPPERS</p>
                            <p className='item' style={{cursor:"pointer"}} onClick={() => { navigate('/') }}>PRODUCTS</p>
                        </div>
                        <div className="search ps-2 me-4">
                            <input type="text" />
                            <i className="fa-solid fa-magnifying-glass icon" style={{ "color": "#6b6b6b" }}></i>
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </nav>
                </div>
                <button className="nav-btn" onClick={showNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </>
    )
}

export default PodcastNav
