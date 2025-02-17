import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import logo from '../images/img1.jpg';
import { Link, useNavigate } from 'react-router-dom'; 
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const { language, toggleLanguage } = useLanguage(); 
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(259200);

  const translations = {
    en: {
      home: 'Home',
      gameStore: 'Game Store',
      shop: 'Shop of goods',
      contacts: 'Contacts',
      scandinavia: 'Scandinavia',
      sparta: 'Sparta',
      kemet: 'Kemet',
      title: 'God of War',
      modalMessage: 'This section is under construction. Please wait 3 days.',
      backButton: 'Go Back'
    },
    ru: {
      home: 'Главная',
      gameStore: 'Магазин игр',
      shop: 'Магазин товаров',
      contacts: 'Контакты',
      scandinavia: 'Скандинавия',
      sparta: 'Спарта',
      kemet: 'Кемет',
      title: 'Бог войны',
      modalMessage: 'Этот раздел в разработке. Подождите 3 дня.',
      backButton: 'Назад'
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleLinkClick = (e) => {
    const allowedPaths = ['/','/game_store'];
    if (!allowedPaths.includes(e.target.getAttribute('href'))) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleGoBack = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <header>
      <div className={`header-container ${showModal ? 'hidden' : ''}`}>
        <div className="header-item1">
          <img src={logo} alt="Logo" onClick={toggleLanguage} />
          <h1>{translations[language].title}</h1>
        </div>
        <div className="header-item2">
          <Link to="/" className='link' onClick={handleLinkClick}>{translations[language].home}</Link>
          <Link to="/game_store" className='link' onClick={handleLinkClick}>{translations[language].gameStore}</Link>
          <Link to="/shop_of_goods" className='link' onClick={handleLinkClick}>{translations[language].shop}</Link>
          <Link to="/contacts" className='link' onClick={handleLinkClick}>{translations[language].contacts}</Link>
        </div>
        <div className="header-item3">
          <Link to="/scandinavia" className='link-btn btn1' onClick={handleLinkClick}>{translations[language].scandinavia}</Link>
          <Link to="/sparta" className='link-btn btn2' onClick={handleLinkClick}>{translations[language].sparta}</Link>
          <Link to="/egypt" className='link-btn btn3' onClick={handleLinkClick}>{translations[language].kemet}</Link>
        </div>
      </div>

      {showModal && (
        <div className="modal2">
          <div className="modal-content2">
            <p>{translations[language].modalMessage}</p>
            <p>Time remaining: {formatTime(timer)}</p>
            <button className="btn-back" onClick={handleGoBack}>
              {translations[language].backButton}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
