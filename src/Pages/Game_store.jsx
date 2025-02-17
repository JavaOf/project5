import React, { useState } from 'react';
import { games } from '../server/gamesData';
import '../styles/game_store.css';

export default function GameStore() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openModal = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const addToCart = (game) => {
    const gameWithNumberPrice = { 
      ...game, 
      price: parseFloat(game.price) || 0 
    };
    setCart((prevCart) => {
      const gameInCart = prevCart.find(item => item.id === game.id);
      if (gameInCart) {
        const newQuantity = Math.min(gameInCart.quantity + 1, 6); // Ограничение на количество товаров
        return prevCart.map(item =>
          item.id === game.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prevCart, { ...gameWithNumberPrice, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter(game => game.id !== gameId));
  };

  const decreaseQuantity = (gameId) => {
    setCart(cart.map(game =>
      game.id === gameId
        ? { ...game, quantity: game.quantity > 1 ? game.quantity - 1 : game.quantity }
        : game
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, game) => {
      const price = parseFloat(game.price);
      return total + (isNaN(price) ? 0 : price * game.quantity);
    }, 0);
  };

  return (
    <div className="game-store">
      <h1>Игры God of War</h1>

      <button onClick={openCartModal} className="open-cart-btn">Открыть корзину</button>

      {isCartModalOpen && (
        <div className="modal-overlay1" onClick={closeCartModal}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn1" onClick={closeCartModal}>X</button>
            <h2>Корзина</h2>
            <div className="cart-modal1">
              <div className="cart-items1">
                <ul>
                  {cart.map(game => (
                    <li key={game.id} className="cart-item1">
                      <img className="cart-item-image1" src={game.image} alt={game.title} />
                      <div className="cart-item-info1">
                        <span>{game.title} ({game.quantity})</span>
                        <span className="cart-item-price1">{(game.price * game.quantity).toFixed(2)} $</span>
                      </div>
                      <div className="cart-item-actions1">
                        <button onClick={() => decreaseQuantity(game.id)}>-</button>
                        <button onClick={() => removeFromCart(game.id)}>Удалить</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cart-total1">
                <p><strong>Общая стоимость:</strong> {getTotalPrice().toFixed(2)} $</p>
                <button className="clear-cart1" onClick={clearCart}>Очистить корзину</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="games-list">
        {games.map(game => (
          <div key={game.id} className="game-card" onClick={() => openModal(game)}>
            <img className="game-image" src={game.image} alt={game.title} />
            <div className="game-info">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <div className="meta">
                <div><strong>Цена:</strong> {game.price} $</div>
                <div><strong>Рейтинг:</strong> {game.rating}</div>
              </div>
              <a href={game.trailer} className="trailer-link" target="_blank" rel="noopener noreferrer">Смотреть трейлер</a>
              <button className="add-to-cart" onClick={(e) => {
                e.stopPropagation();
                addToCart(game);
              }}>
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>{selectedGame.title}</h2>
            <img src={selectedGame.image} alt={selectedGame.title} className="modal-image" />
            <p className="modal-desc">{selectedGame.description}</p>
            <div className="hr"></div>
            <div className="game-meta">
              <p><strong>Цена:</strong> {selectedGame.price} ₽</p>
              <p><strong>Рейтинг:</strong> {selectedGame.rating}</p>
              <p><strong>Жанры:</strong> {selectedGame.categories}</p>
              <p><strong>Языки:</strong> {selectedGame.language}</p>
              <p><strong>Дата релиза:</strong> {selectedGame.release_date}</p>
              <p><strong>Устройства:</strong> {selectedGame.devices}</p>
            </div>
            <div className="system-requirements">
              <h3>Системные требования:</h3>
              <ul>
                {selectedGame.system_Requirements && selectedGame.system_Requirements.map((requirement, index) => (
                  <li key={index}>
                    <strong>ОС:</strong> {requirement.OS} <br />
                    <strong>Процессор:</strong> {requirement.processor} <br />
                    <strong>Память:</strong> {requirement.memory} <br />
                    <strong>Графика:</strong> {requirement.graphics} <br />
                    <strong>Место на диске:</strong> {requirement.storage}
                  </li>
                ))}
              </ul>
              <a href={selectedGame.trailer} target="_blank" rel="noopener noreferrer" className="trailer-link">
                Смотреть трейлер
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
