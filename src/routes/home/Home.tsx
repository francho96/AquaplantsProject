import { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import Card from "../components/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import raiz from "../../assets/raiz.png";
import fertilizanteverde from "../../assets/Fertilizante-verde.png";
import hojaverde from "../../assets/hoja-verde.png";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import planta from '../../assets/planta-verde.png';
import { Link } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import { useUser } from '../../hooks/useUser';

export default function App() {
  const { email } = useUser(); // Usar el hook personalizado para obtener el correo electrónico
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (email) {
      axios.post(`${import.meta.env.VITE_APP_XDD}/userHome`, { email })
        .then(response => {
          setUserData(response.data);
          console.log('Datos del usuario:', response.data);
        })
        .catch(error => {
          console.error('Error al obtener los datos del usuario:', error);
        });
    }
  }, [email]);

  const nombreUsuario = userData ? `Bienvenido ${userData.firstname}` : 'Bienvenido Usuario';
  const torre = userData && userData.torre ? userData.torre : null;
  const comuna = userData && userData.comuna ? userData.comuna : 'Comuna no establecida';

  const ordenes = userData ? userData.ordenes : [];
  const tieneOrdenes = ordenes.length > 0;

  return (
    <div className="App">
      <div className="headerBackground">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AccountCircleIcon style={{ fontSize: "60px", color: "#ffffff" }} />
          <h2 style={{ color: "#f5f5f5" }}>{nombreUsuario}</h2>
        </div>
        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={raiz} style={{ fontSize: "20px", color: "#ffffff", width: "25px" }} />
            <div style={{ color: "#f5f5f5" }}>{torre || 'No hay torre disponible'}</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <LocationOnIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Envío a {comuna}</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <StarsIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Plan de suscripción no premium</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Mis pedidos</h2>
        <Card>
          {tieneOrdenes ? (
            ordenes.map((orden: any, index: number) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>Orden:</div>
                  <div>{orden.nro}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>Tipo:</div>
                  <div>{orden.category}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>Estado:</div>
                  <div>{orden.status}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>Fecha de creación:</div>
                  <div>{orden.Fcrea ? new Date(orden.Fcrea).toLocaleDateString() : 'Fecha no disponible'}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>Comuna:</div>
                  <div>{orden.Comuna_Ciudad || 'Comuna no establecida'}</div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center" }}>No tienes órdenes.</div>
          )}
        </Card>
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona la torre para realizar una recarga:</h2>
        <Card>
          {torre ? (
            <div className="container">
              <strong>{torre}</strong>
              <div className="inner-container">
                <div className="inner-div">
                  <Link to="/in/refill/fertilizante" >
                    <div className="link-div">
                      <img src={fertilizanteverde} />
                      <div>Refill Fertilizante</div>
                    </div>
                  </Link>
                  <Link to="/in/refill/almacigo" >
                    <div className="link-div">
                      <img src={hojaverde} />
                      <div>Refill Almácigos</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>No tienes torres disponibles.</div>
          )}
        </Card>
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Estado de tu producto:</h2>
        <Card>
          {torre ? (
            <Link to="/in/user/product">
              <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginBottom: "2.5%", margin: "0", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={planta} style={{ fontSize: "40px", color: "#2a653b", width: "45px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ fontWeight: "bold" }}>{torre}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InfoOutlinedIcon style={{ fontSize: "50px", color: "#2a653b", width: "30px" }} />
                </div>
              </div>
            </Link>
          ) : (
            <div style={{ textAlign: "center" }}>No tienes torres disponibles.</div>
          )}
        </Card>
        <Card>
          <Link to="/in/mail">
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold" }}>¿Necesitas ayuda?</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <HelpIcon style={{ fontSize: "50px", color: "#2a653b", width: "40px" }} />
              </div>
            </div>
          </Link>
        </Card>
      </div>
    </div>
  );
}
