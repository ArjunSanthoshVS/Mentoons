import { useRef } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img className="profile-pic" src="/logo.png" alt="logo" />
      <div className='right-side'>
        <nav ref={navRef}>
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass icon" style={{ "color": "#6b6b6b" }}></i>
            <input type="text" placeholder='Search on Mentoons' />
          </div>
          <i className="fa-solid fa-cart-plus" style={{ color: "#ffffff", fontSize: "47px" }} onClick={() => navigate('/cart')}></i>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Navbar
