import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../components/Card';
import fertilizante from '../../assets/Fertilizante.png';
import hoja from '../../assets/hoja.png';
import Contador from '../components/Contador';
import Carrito from '../components/Carrito';
import raiz from '../../assets/raiz.png';
import ShoppingCartIcon from '../../assets/carrito.png';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import axios from 'axios';
// Almacigos
import milanesa from '../../assets/almacigos/lechuga-milanesa.png';
import marina from '../../assets/almacigos/lechuga-marina.png';
import canasta from '../../assets/almacigos/lechuga-canasta.png';
import acelga from '../../assets/almacigos/acelga.png';
import mizuna from '../../assets/almacigos/mizuna-verde.png';
import espinaca from '../../assets/almacigos/Espinaca.png';
import espanola from '../../assets/almacigos/Lechuga_Espanola.png';



interface CartItem {
  name: string;
  quantity: number;
}

interface SeedlingOrder {
  Fcrea: string;
  title: string;
}

export default function App() {
  const [showCover, setShowCover] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [torre, setTorre] = useState<string | null>(null);
  const [seedlingOrders, setSeedlingOrders] = useState<SeedlingOrder[]>([]);
  const { email } = useUser()

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

      axios.post(`${import.meta.env.VITE_APP_XDD}/ordenesAlmacigos`, { email })
        .then(response => {
          if (response.status === 200) {
            setSeedlingOrders(response.data);
            console.log('Historial de almacigos:', response.data);
          }
        })
        .catch(error => {
          console.error('Error al obtener el historial de almacigos:', error);
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
      <div >
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
              <div> ¡Elige los almácigos disponibles aquí!</div>
            </div>
            <div className="header-content">
              <img src={hoja} width="20px" />
              <div>{torre ? `${torre}` : 'No hay torre disponible'}</div>
            </div>
            <div className="header-content">
              <img src={raiz} style={{ fontSize: '20px', color: '#ffffff', width: '20px' }} />
              <div>Limite de 12 almácigos.</div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2 style={{ color: '#444444', alignSelf: 'flex-start', marginTop: '20px' }}>Selecciona el producto que desees:</h2>
          <Card>

            <div className="card-container">
              <div className="card">
                <div className="card-title">Lechuga Milanesa</div>
                <div className="card-content">
                  <img src={milanesa} />
                  <div style={{ fontSize: "80%" }}>
                    Compuesta por vitamina C, Omega 3 y Omega 6, además de incluir altos porcentajes de ácidos grasos.
                  </div>
                  <Contador
                    name="Lechuga Milanesa"
                    initialQuantity={cartItems.find(item => item.name === 'Lechuga Milanesa')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                  />

                </div>
              </div>

              <div className="card">
                <div className="card-title">Lechuga Marina Verde</div>
                <div className="card-content">
                  <img src={marina} />
                  <div style={{ fontSize: "80%" }}>
                    Rica en sodio, potasio, magnesio, yodo, aluminio, manganeso y níquel y contiene vitaminas A, B1 y C.
                  </div>
                  <Contador
                    name="Lechuga Marina Verde"
                    initialQuantity={cartItems.find(item => item.name === 'Lechuga Marina Verde')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

              <div className="card">
                <div className="card-title">Acelga</div>
                <div className="card-content">
                  <img src={acelga} />
                  <div style={{ fontSize: "80%" }}>
                    Fortalece tus huesos ya que es rica en Vitamina K, mejora la salud cardiovascular y aporta fibra dietética.
                  </div>
                  <Contador
                    name="Acelga"
                    initialQuantity={cartItems.find(item => item.name === 'Acelga')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

              <div className="card">
                <div className="card-title">Lechuga Canasta</div>
                <div className="card-content">
                  <img src={canasta} />
                  <div style={{ fontSize: "80%" }}>
                    Ricas en fibra y alto contenido de agua. Contiene vitamina A, potasio, vitamina C, calcio, hierro y cobre.
                  </div>
                  <Contador
                    name="Lechuga Canasta"
                    initialQuantity={cartItems.find(item => item.name === 'Lechuga Canasta')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

              <div className="card">
                <div className="card-title">Espinaca</div>
                <div className="card-content">
                  <img src={espinaca} />
                  <div style={{ fontSize: "80%" }}>
                    Fuente excelente de vitaminas K, A, C y ácido fólico. También es rica en manganeso, magnesio, hierro y vitamina B2.
                  </div>
                  <Contador
                    name="Espinaca"
                    initialQuantity={cartItems.find(item => item.name === 'Espinaca')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

              <div className="card">
                <div className="card-title">Lechuga Española</div>
                <div className="card-content">
                  <img src={espanola} />
                  <div style={{ fontSize: "80%" }}>
                    Cuida nuestro corazón porque contiene flavonoides, tiene la propiedad de disminuir el riesgo de enfermedades cardíacas.
                  </div>
                  <Contador
                    name="Lechuga Española"
                    initialQuantity={cartItems.find(item => item.name === 'Lechuga Española')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

              <div className="card">
                <div className="card-title">Mizuna Verde</div>
                <div className="card-content">
                  <img src={mizuna} />
                  <div style={{ fontSize: "80%" }}>
                    Aporta numerosos beneficios anticancerígenos y cantidades grandes de vitamina A y C, esenciales para que el sistema inmunológico funcione bien.
                  </div>
                  <Contador
                    name="Mizuna Verde"
                    initialQuantity={cartItems.find(item => item.name === 'Mizuna Verde')?.quantity || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart} />
                </div>
              </div>

            </div>
          </Card>
          <h2 style={{ color: '#444444', alignSelf: 'flex-start', marginTop: '15px' }}>Historial de solicitudes:</h2>
          <Card>
            <ul style={{ marginTop: '0', marginBottom: '0', listStyleType: 'none', padding: '0' }}>
              {seedlingOrders.map((order, index) => (
                <li key={`${order.Fcrea}-${index}`} style={{ paddingBottom: '10px' }}>
                  {new Date(order.Fcrea).toLocaleDateString()} - {order.title}
                  {index < seedlingOrders.length - 1 && <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />}
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
