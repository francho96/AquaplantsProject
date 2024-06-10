import React from 'react';
import Contador from '../components/Contador';
import '../styles.css';

interface CarritoProps {
  items: { name: string; quantity: number }[];
  onClose: () => void;
  addToCart: (name: string) => void;
  removeFromCart: (name: string) => void;
}

const Carrito: React.FC<CarritoProps> = ({ items, onClose, addToCart, removeFromCart }) => {
  return (
    <div className="carrito-popup">
      <div className="carrito-header">
        <button className="cerrar-btn" onClick={onClose}>x</button>
        <h2 className="carrito-title">Carrito de Compras</h2>
      </div>
      <div className="carrito-content">
        {items.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <div className="carrito-items">
            {items.map((item, index) => (
              <div key={index} className="carrito-item">
                <span className="item-name">{item.name}</span>
                <div className="item-contador">
                  <Contador
                    name={item.name}
                    initialQuantity={item.quantity}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="carrito-footer">
        <button className="aceptar-btn" onClick={onClose}>Aceptar</button>
      </div>
    </div>
  );
};

export default Carrito;
