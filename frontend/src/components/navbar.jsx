import React from 'react'
import "../styles/navbar.css"
import Logo from "../images/logoUdemy.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to={"/"}><img src={Logo} alt="" /></Link>
        </div>
        <div>
            <Link to={"/courses"}>Categories</Link>
        </div>
        <div>
            <input type="text" placeholder='Search for anything' />
        </div>
        <div>
            <p>Udemy Business</p>
        </div>
        <div>
            <p>Teach on Udemy</p>
        </div>
        <div><ion-icon name="cart-outline"></ion-icon></div>
        <div>
            <button><Link to={"/login"}>Log in</Link></button>
            <button><Link to={"/register"}>Sign up</Link></button>
            <button><ion-icon name="globe-outline"></ion-icon></button>
        </div>
    </nav>
  )
}

export default Navbar
