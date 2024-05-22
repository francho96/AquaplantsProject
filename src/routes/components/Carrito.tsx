import React from 'react';


interface CarritoProps {
      items: { name: string; quantity: number }[];
      onClose: () => void;
}

const Carrito: React.FC<CarritoProps> = ({ items, onClose }) => {
      return (
            <div className="carrito-popup">
                  <div className="carrito-header">
                        <button className="cerrar-btn" onClick={onClose}>x</button>
                        <h2 style={{ color: "#2a653b", textAlign: "center", paddingTop: "20px" }}>Carrito de Compras</h2>
                  </div>
                  <div className="carrito-content">
                        {items.length === 0 ? (
                              <p>El carrito está vacío</p>) : (
                              <ul>
                                    {items.map((item, index: number) => (
                                          <li key={index}>{item.name} - {item.quantity}</li>
                                    ))}
                              </ul>
                        )}
                  </div>
                  <button className='aceptar-btn' onClick={onClose}>Aceptar</button>
            </div>
      );
};

export default Carrito;
