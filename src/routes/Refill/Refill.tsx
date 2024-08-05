import "./styles.css";
import { Link } from 'react-router-dom';
import Card from "../components/Card";
import fertilizante from "../../assets/Fertilizante.png";
import hoja from "../../assets/hoja.png";
import fertilizanteverde from "../../assets/Fertilizante-verde.png";
import hojaverde from "../../assets/hoja-verde.png";
import sol from "../../assets/sol.png";
import planta_nuevo from "../../assets/planta_otra_vez.png";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../hooks/useUser';

// Definir la interfaz para userData
interface UserData {
  torre: string | null;
  // Agrega aquí cualquier otra propiedad que esperes en userData
}

// Definir la interfaz para las órdenes en proceso
interface Orden {
  id: string;
  tipo: string;
  estado: string;
  entrega: string;
  ubicacion: string;
}

// Definir la interfaz para el historial
interface Historial {
  Direccion: string;
  Comuna_Ciudad: string;
  nro: string;
  status: string;
}

export default function App() {
  const { email } = useUser(); // Usar el hook personalizado para obtener el correo electrónico
  const [userData, setUserData] = useState<UserData | null>(null);
  const [ordenes, setOrdenes] = useState<Orden[]>([]); // Estado para las órdenes en proceso
  const [historial, setHistorial] = useState<Historial[]>([]); // Estado para el historial

  useEffect(() => {
    if (email) {
      // Obtener datos del usuario
      axios.post<UserData>(`${import.meta.env.VITE_APP_XDD}/userHome`, { email })
        .then(response => {
          setUserData(response.data);
          console.log('Datos del usuario:', response.data);
        })
        .catch(error => {
          console.error('Error al obtener los datos del usuario:', error);
        });

      // Obtener órdenes en proceso
      axios.post<Orden[]>(`${import.meta.env.VITE_APP_XDD}/ordenesRefillProceso`, { email })
        .then(response => {
          if (response.status === 200) {
            const uniqueOrdenes = Array.from(new Map(response.data.map(item => [item.id, item])).values());
            setOrdenes(uniqueOrdenes); // Elimina duplicados basados en `id`
            console.log('Órdenes en proceso:', uniqueOrdenes);
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            const errorMessage = error.response.data?.error;
            if (errorMessage === 'No se encontraron órdenes') {
              // Maneja el caso específico en el que no hay datos, pero no registras el error en consola
              console.log(errorMessage);
            }
          } else {
            // Registra cualquier otro error que no sea 404
            console.error('Error al obtener las órdenes en proceso:', error);
          }
        });
        

      // Obtener historial
      axios.post<Historial[]>(`${import.meta.env.VITE_APP_XDD}/ordenesRefill`, { email })
        .then(response => {
          if (response.status === 200) {
            const uniqueHistorial = Array.from(new Map(response.data.map(item => [item.nro, item])).values());
            setHistorial(uniqueHistorial); // Elimina duplicados basados en `nro`
            console.log('Historial:', uniqueHistorial);
          }
        })
        .catch(error => {
          console.error('Error al obtener el historial:', error);
        });
    }
  }, [email]);

  const torre = userData?.torre || null;

  return (
    <div className="App">
      <div className="headerBackground">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img src={planta_nuevo} width="60px" style={{ fontSize: "60px", color: "#ffffff" }} />
          <h2 style={{ color: "#f5f5f5" }}>Refill</h2>
        </div>
        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ color: "#f5f5f5" }}>¡Disfruta los beneficios de tu suscripción!</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "0px" }}>
            <img src={hoja} style={{ fontSize: "20px", color: "#ffffff", width: "25px" }} />
            <div style={{ color: "#f5f5f5" }}>Refill de almácigos.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={fertilizante} style={{ fontSize: "20px", color: "#ffffff", width: "25px", paddingTop: "0px" }} />
            <div style={{ color: "#f5f5f5" }}>Refill de fertilizante.</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona la torre para realizar una recarga:</h2>
        <Card>
          <div className="container">
            <strong>{torre || 'No hay torre disponible'}</strong>
            {torre && (
              <div className="inner-container">
                <div className="inner-div">
                  <Link to="/in/refill/fertilizante">
                    <div className="link-div">
                      <img src={fertilizanteverde} />
                      <div>Refill Fertilizante</div>
                    </div>
                  </Link>
                  <Link to="/in/refill/almacigo">
                    <div className="link-div">
                      <img src={hojaverde} />
                      <div>Refill Almácigos</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Card>
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Órdenes en proceso:</h2>
        <Card>
          {ordenes.length > 0 ? (
            ordenes.map(orden => (
              <div key={orden.id} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <img src={sol} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
                <div>
                  <h4 style={{ margin: "0", marginBottom: "5px" }}>{orden.tipo}:</h4>
                  <ul style={{ margin: "0", padding: "0", listStyleType: "disc" }}>
                    <li>{orden.id}</li>
                    <li>{orden.estado}</li>
                    <li>Entrega: {orden.entrega}</li>
                    <li>{orden.ubicacion}</li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div>No hay órdenes en proceso.</div>
          )}
        </Card>
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Historial:</h2>
        <Card>
          {historial.length > 0 ? (
            historial.map(item => (
              <div key={item.nro} style={{ marginBottom: "10px", marginLeft: "10px" }}>
                <h4>Orden N° {item.nro}</h4>
                <ul style={{ margin: "0", padding: "0", listStyleType: "disc" }}>
                  <li>Dirección: {item.Direccion}</li>
                  <li>Ciudad: {item.Comuna_Ciudad}</li>
                  <li>Estado: {item.status}</li>
                </ul>
              </div>
            ))
          ) : (
            <div>No hay historial disponible.</div>
          )}
        </Card>
      </div>
    </div>
  );
}
