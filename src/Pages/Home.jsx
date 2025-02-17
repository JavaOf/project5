import React, { useRef, useState, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import audio from '../assets/audio/god_of_war_18. Salvation.mp3';
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [quote, setQuote] = useState('');

  const { language, toggleLanguage } = useLanguage(); // Access language and toggle function

  const quotes = [
    '"We must be better." - Kratos',
    '"Do not be sorry, be better." - Kratos',
    '"The cycle ends here." - Kratos',
    '"Close your heart to it." - Kratos',
  ];

  const translations = {
    en: {
      welcome: 'Welcome to the world of God of War!',
      explore: 'Explore a legendary universe where gods, titans, and monsters clash in epic battles. Learn the story of Kratos, the God of War, who seeks redemption and protection for his son.',
      startJourney: 'Start your journey',
      findOutMore: 'Find out more',
      musicStatus: isPlaying ? 'Music is playing' : 'Music is paused',
      meetGods: 'Meet the Gods and Monsters',
      legendaryWeapons: 'Legendary Weapons',
      timeline: 'Timeline of Events',
      realms: 'The Nine Realms',
      subscriptionPlans: 'Choose Your Path: Subscription Plans',
      comingSoon: 'Coming Soon: Exclusive Games & Merchandise',
      kratos: 'Kratos',
      atreus: 'Atreus',
      baldur: 'Baldur',
      thor: 'Thor',
      bladesOfChaos: 'Blades of Chaos',
      leviathanAxe: 'Leviathan Axe',
      fallOfOlympus: 'The Fall of Olympus',
      beginningOfNorseSaga: 'The Beginning of the Norse Saga',
      deathOfBaldur: 'The Death of Baldur',
      midgard: 'Midgard',
      asgard: 'Asgard',
      jotunheim: 'Jotunheim',
      basicPlan: 'Basic Plan',
      standardPlan: 'Standard Plan',
      premiumPlan: 'Premium Plan',
      priceBasic: '$5 / month',
      priceStandard: '$10 / month',
      pricePremium: '$20 / month',
      exclusiveWorlds: 'Access to exclusive worlds',
      earlyAccess: 'Early access to game updates',
      insiderInfo: 'Monthly newsletter with insider info',
      exclusiveDiscounts: 'Exclusive discounts on future game purchases',
      promoCode: 'Receive a promo code for merchandise',
      earlyAccessEvents: 'Early access to exclusive in-game events',
      gameDiscounts: 'Discounts on games and merchandise (up to 15%)',
      behindScenes: 'Exclusive behind-the-scenes content from the developers',
      vipSupport: 'VIP support and exclusive community events',
      firstAccess: 'First access to limited edition games, exclusive merchandise, and unique collectibles.',
    },
    ru: {
      welcome: 'Добро пожаловать в мир Бога Войны!',
      explore: 'Исследуйте легендарную вселенную, где боги, титаны и монстры сталкиваются в эпических битвах. Узнайте историю Кратоса, Бога Войны, который ищет искупление и защиту для своего сына.',
      startJourney: 'Начать путешествие',
      findOutMore: 'Узнать больше',
      musicStatus: isPlaying ? 'Музыка играет' : 'Музыка на паузе',
      meetGods: 'Познакомьтесь с Богами и Монстрами',
      legendaryWeapons: 'Легендарное Оружие',
      timeline: 'Хронология Событий',
      realms: 'Девять Царств',
      subscriptionPlans: 'Выберите свой путь: Планы подписки',
      comingSoon: 'Скоро: Эксклюзивные Игры и Мерчандайз',
      kratos: 'Кратос',
      atreus: 'Атрей',
      baldur: 'Бальдур',
      thor: 'Тор',
      bladesOfChaos: 'Клинки Хаоса',
      leviathanAxe: 'Топор Левиафана',
      fallOfOlympus: 'Падение Олимпа',
      beginningOfNorseSaga: 'Начало Нордической Саги',
      deathOfBaldur: 'Смерть Бальдура',
      midgard: 'Мидгард',
      asgard: 'Асгард',
      jotunheim: 'Йотунхейм',
      basicPlan: 'Базовый план',
      standardPlan: 'Стандартный план',
      premiumPlan: 'Премиум план',
      priceBasic: '5 $ / месяц',
      priceStandard: '10 $ / месяц',
      pricePremium: '20 $ / месяц',
      exclusiveWorlds: 'Доступ к эксклюзивным мирам',
      earlyAccess: 'Ранний доступ к обновлениям игры',
      insiderInfo: 'Ежемесячная рассылка с инсайдерской информацией',
      exclusiveDiscounts: 'Эксклюзивные скидки на будущие покупки игр',
      promoCode: 'Получите промокод на товары',
      earlyAccessEvents: 'Ранний доступ к эксклюзивным игровым событиям',
      gameDiscounts: 'Скидки на игры и товары (до 15%)',
      behindScenes: 'Эксклюзивный контент за кулисами от разработчиков',
      vipSupport: 'VIP поддержка и эксклюзивные мероприятия для сообщества',
      firstAccess: 'Первый доступ к ограниченным играм, эксклюзивным товарам и уникальным коллекционным предметам.',
    }
  };

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((e) => console.log('Ошибка воспроизведения музыки:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="home-container" onClick={toggleMusic}>
        <audio ref={audioRef} loop>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <h1>{translations[language].welcome}</h1>
        <p className="quote">{quote}</p>
        <p>{translations[language].explore}</p>
        <div className="parent-links">
          <Link to="/" className="home-btn">{translations[language].startJourney}</Link>
          <Link to="/about" className="home-btn btn4">{translations[language].findOutMore}</Link>
        </div>
        <p className="music-status">{translations[language].musicStatus}</p>
      </div>

      <div className="characters-section">
        <h2>{translations[language].meetGods}</h2>
        <div className="characters-grid">
          <div className="character-card">
            <h3>{translations[language].kratos}</h3>
            <p>The Ghost of Sparta, a warrior seeking redemption.</p>
          </div>
          <div className="character-card">
            <h3>{translations[language].atreus}</h3>
            <p>The son of Kratos, learning his divine heritage.</p>
          </div>
          <div className="character-card">
            <h3>{translations[language].baldur}</h3>
            <p>The invulnerable Norse god, relentless in pursuit.</p>
          </div>
          <div className="character-card">
            <h3>{translations[language].thor}</h3>
            <p>The mighty god of thunder, known for his immense power.</p>
          </div>
        </div>
      </div>

      <div className="weapons-section">
        <h2>{translations[language].legendaryWeapons}</h2>
        <div className="weapons-grid">
          <div className="weapon-card">
            <h3>{translations[language].bladesOfChaos}</h3>
            <p>Forged in the depths of Hades, these blades are a symbol of Kratos' past.</p>
          </div>
          <div className="weapon-card">
            <h3>{translations[language].leviathanAxe}</h3>
            <p>Crafted by the Huldra Brothers, this axe channels icy magic and brutal power.</p>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2>{translations[language].timeline}</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>{translations[language].fallOfOlympus}</h3>
            <p>Kratos' revenge against the Greek gods marks the end of the Olympus reign.</p>
          </div>
          <div className="timeline-item">
            <h3>{translations[language].beginningOfNorseSaga}</h3>
            <p>Kratos arrives in Midgard and faces the Norse gods, starting a new journey with his son, Atreus.</p>
          </div>
          <div className="timeline-item">
            <h3>{translations[language].deathOfBaldur}</h3>
            <p>Kratos and Atreus defeat Baldur, setting off the events that will lead to Ragnarok.</p>
          </div>
        </div>
      </div>

      <div className="realms-section">
        <h2>{translations[language].realms}</h2>
        <div className="realms-grid">
          <div className="realm-card">
            <h3>{translations[language].midgard}</h3>
            <p>The realm of mortals and the starting point of Kratos' new journey.</p>
          </div>
          <div className="realm-card">
            <h3>{translations[language].asgard}</h3>
            <p>Home to the Aesir gods, including Odin and Thor. A realm of immense power and conflict.</p>
          </div>
          <div className="realm-card">
            <h3>{translations[language].jotunheim}</h3>
            <p>Land of the giants, filled with mystery and ancient knowledge.</p>
          </div>
        </div>
      </div>

      <div className="subscription-section">
        <h2 className="subscription-title">{translations[language].subscriptionPlans}</h2>
        <div className="subscription-cards">
          <div className="subscription-card basic">
            <h3>{translations[language].basicPlan}</h3>
            <p className="price">{translations[language].priceBasic}</p>
            <ul>
              <li>{translations[language].exclusiveWorlds}</li>
              <li>{translations[language].earlyAccess}</li>
              <li>{translations[language].insiderInfo}</li>
              <li>{translations[language].exclusiveDiscounts}</li>
              <li>{translations[language].promoCode}</li>
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>

          <div className="subscription-card standard">
            <h3>{translations[language].standardPlan}</h3>
            <p className="price">{translations[language].priceStandard}</p>
            <ul>
              <li>{translations[language].exclusiveWorlds}</li>
              <li>{translations[language].earlyAccess}</li>
              <li>{translations[language].insiderInfo}</li>
              <li>{translations[language].exclusiveDiscounts}</li>
              <li>{translations[language].promoCode}</li>
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>

          <div className="subscription-card premium">
            <h3>{translations[language].premiumPlan}</h3>
            <p className="price">{translations[language].pricePremium}</p>
            <ul>
              <li>{translations[language].exclusiveWorlds}</li>
              <li>{translations[language].earlyAccess}</li>
              <li>{translations[language].insiderInfo}</li>
              <li>{translations[language].exclusiveDiscounts}</li>
              <li>{translations[language].promoCode}</li>
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        </div>

        <div className="future-merchandise">
          <h3>{translations[language].comingSoon}</h3>
          <p>{translations[language].firstAccess}</p>
        </div>
      </div>
    </div>
  );
}
