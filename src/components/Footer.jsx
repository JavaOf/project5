import React from 'react';
import '../styles/footer.css';
import { FaInstagramSquare,  FaTelegram, FaYoutube, FaWhatsappSquare,   } from "react-icons/fa";
import logo from '../images/img1.jpg';

export default function Footer() {

  return (
    <div>
      <footer>
        <div className="footer-item1">
          <h3>©2024 God of War Universe. Все права защищены</h3>
        </div>
        <div className="footer-item3">
          <img className='footer-logo' src={logo} alt="" />
        </div>
        <div className="footer-item2">
        <FaInstagramSquare />
        <FaTelegram />
        <FaYoutube />
        <FaWhatsappSquare />
        </div>
      </footer>
    </div>
  )
}
