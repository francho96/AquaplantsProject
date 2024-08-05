import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../components/Card';
import fertilizante from '../../assets/Fertilizante.png';
import fertilizante500 from '../../assets/fertilizante500.png';
import hoja from '../../assets/hoja.png';
import fertilizante250 from '../../assets/fertilizante250.png';
import Contador from '../components/Contador';
import Carrito from '../components/Carrito';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '../../assets/carrito.png';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useUser } from '../../hooks/useUser';

interface CartItem {
  name: string;
  quantity: number;
}

interface FertilizerOrder {
  Fcrea: string;
  title: string;
}

export default function App() {
  const [showCover, setShowCover] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [torre, setTorre] = useState<string | null>(null);
  const [fertilizerOrders, setFertilizerOrders] = useState<FertilizerOrder[]>([]);
  const { email } = useUser();
  const planSuscripcion = torre ? 'Plan de suscripción Premium' : 'Plan de suscripción no premium';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (email) {
      axios.post(`${import.meta.env.VITE_APP_XDD}/userHome`, { email })
        .then(response => {
          setTorre(response.data.torre); // Recuperar la torre del estado de respuesta
          console.log('Torre:', response.data.torre);
        })
        .catch(error => {
          console.error('Error al obtener los datos del usuario:', error);
        });

      axios.post(`${import.meta.env.VITE_APP_XDD}/ordenesFertilizantes`, { email })
        .then(response => {
          if (response.status === 200) {
            setFertilizerOrders(response.data);
            console.log('Historial de fertilizantes:', response.data);
          }
        })
        .catch(error => {
          console.error('Error al obtener el historial de fertilizantes:', error);
        });
    }
  }, [email]);

  const addToCart = (name: string) => {
    setCartItems(prevItems => {
      const totalQuantity = prevItems.reduce((acc, item) => acc + item.quantity, 0);
      if (totalQuantity >= 12) {
        alert('Has alcanzado el límite de 12 almácigos.');
        return prevItems;
      }

      const itemIndex = prevItems.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { name, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        if (updatedItems[itemIndex].quantity > 0) {
          updatedItems[itemIndex].quantity -= 1;
        }
        if (updatedItems[itemIndex].quantity === 0) {
          updatedItems.splice(itemIndex, 1);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      {showCover && <div className="green-screen"></div>}
      <div>
        <div className="headerBackground">
          <div className="header-content">
            <Link to="/in/refill">
              <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
            </Link>
            <img src={fertilizante} width="60px" />
            <h2>Refill</h2>
          </div>
          <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
            <div className="header-content">
              <div>¡Elige los fertilizantes disponibles aquí!</div>
            </div>
            <div className="header-content">
              <img src={hoja} width="20px" />
              <div>{torre ? `${torre}` : 'No hay torre disponible'}</div>
            </div>
            <div className="header-content">
              <StarsIcon style={{ fontSize: '30px', color: '#ffffff', width: '20px' }} />
              <div>{planSuscripcion}</div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2 style={{ color: '#444444', alignSelf: 'flex-start', marginTop: '20px' }}>Selecciona el producto que desees:</h2>
          <Card>
            <div className="card-container">
              <div className="card">
                <div className="card-title">Fertilizante AyB Vegetativo (250 ml)</div>
                <div className="card-content">
                  <img src={fertilizante250} />
                  <div style={{ fontSize: "80%" }}>Estimula el crecimiento de los almácigos con nutrientes esenciales.</div>
                  <Contador
                    name="Fertilizante AyB Vegetativo (250 ml)"
                    initialQuantity={cartItems.find(item => item.name === 'Fertilizante AyB Vegetativo (250 ml)')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>
              <div className="card" style={{ position: 'relative' }}>
                <div className="card-title">Fertilizante AyB Vegetativo (500 ml)</div>
                <div className="card-content">
                  <img src={fertilizante500} />
                  <div style={{ fontSize: "75%" }}>Estimula el crecimiento de los almácigos con nutrientes esenciales.</div>
                  <Contador
                    name="Fertilizante AyB Vegetativo (500 ml)"
                    initialQuantity={cartItems.find(item => item.name === 'Fertilizante AyB Vegetativo (500 ml)')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
                <div style={{ fontSize: "95%" }} className="overlay">No disponible con tu suscripción.</div>
              </div>
            </div>
          </Card>
          <h2 style={{ color: '#444444', alignSelf: 'flex-start', marginTop: '15px' }}>Historial de solicitudes:</h2>
          <Card>
            <ul style={{ marginTop: '0', marginBottom: '0', listStyleType: 'none', padding: '0' }}>
              {fertilizerOrders.map((order, index) => (
                <li key={order.Fcrea} style={{ paddingBottom: '10px' }}>
                  {new Date(order.Fcrea).toLocaleDateString()} - {order.title}
                  {index < fertilizerOrders.length - 1 && <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
      <div className="carrito-icon" onClick={handleCartToggle} style={{ marginBottom: "80px", marginRight: "7px" }}>
        <img src={ShoppingCartIcon} style={{ width: "65px" }} />
      </div>
      {isCartOpen && <Carrito items={cartItems} onClose={handleCartToggle} addToCart={addToCart} removeFromCart={removeFromCart} />}
    </div>
  );
}
