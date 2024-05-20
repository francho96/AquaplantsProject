import "./styles.css";

import Card from "../components/Card";
import fertilizante from "../../assets/Fertilizante.png";
import hoja from "../../assets/hoja.png";
import relleno from "../../assets/Relleno.png"
import Contador from "../components/Contador"
import StarsIcon from '@mui/icons-material/Stars';

import { useEffect, useState } from "react";

export default function App() {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showCover && (
        <div className="green-screen"></div>
      )}
      <div className="App">
        <div className="headerBackground">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={fertilizante} width="60px" style={{ fontSize: "60px", color: "#ffffff" }} />
            <h2 style={{ color: "#f5f5f5" }}>Refill</h2>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ color: "#f5f5f5" }}>¡Aquí puedes seleccionar los distintos fertilizantes que tienes disponibles!</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={hoja} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>AquaPlants 3 MINI.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <StarsIcon style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Plan de suscripción premium.</div>
          </div>
        </div>
        <div className="wrapper">
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona el producto que desees:</h2>
          <Card>

            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <img src={relleno} width="35%" style={{ alignSelf: "center" }} />
              <div style={{ fontSize: "75%" }}>
                <div style={{ fontWeight: "bold" }}>
                  Fertilizante AyB Vegetativo (250 ml)
                </div>
                <div>
                  Promueve el rápido crecimiento en almácigos, proporcionando nutrientes esenciales para un desarrollo óptimo del cultivo.
                </div>

              </div>
              <Contador />
            </div>

          </Card>
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Historial de solicitudes:</h2>
          <Card>
            <ul style={{ marginTop: "0", marginBottom: "0", listStyleType: "disc" }}>
              <li>26/06/2023: Fertilizante AyB Vegetativo (500 ml)</li>
              <li>26/05/2023: Fertilizante AyB Vegetativo (250 ml)</li>
              <li>02/04/2023: Fertilizante AyB Vegetativo (500 ml)</li>
              <li>23/04/2032: Fertilizante AyB Vegetativo (250 ml)</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
