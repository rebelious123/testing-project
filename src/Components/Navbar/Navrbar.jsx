import React, { useEffect, useState } from "react";
import "./Navrbar.css";
import logo from "../../assets/logo.png";
import menu_icno from "../../assets/menu-icon.png";
import { Link } from "react-scroll";


const Navrbar = () => {

  const [sticky , setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky ? "dark_nav" : ""}`}>
      <img src={logo} alt="logo" className="nav_logo"/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li>
        <Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link>
        </li>
      </ul>
      <img src={menu_icno} alt="logo" className="menu_icon"/>

    </nav>
  );
};

export default Navrbar;
