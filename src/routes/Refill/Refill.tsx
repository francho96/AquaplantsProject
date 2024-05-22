import "./styles.css";
import { Link } from 'react-router-dom';
import Card from "../components/Card";
import fertilizante from "../../assets/Fertilizante.png";
import hoja from "../../assets/hoja.png";
import sol from "../../assets/sol.png";
import planta_nuevo from "../../assets/planta_otra_vez.png";

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
            <img src={planta_nuevo} width="60px" style={{ fontSize: "60px", color: "#ffffff" }} />
            <h2 style={{ color: "#f5f5f5" }}>Refill</h2>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ color: "#f5f5f5" }}>¡Recuerda que con tu suscripción puedes acceder a distintos beneficios!</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={hoja} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Refill de almácigos.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={fertilizante} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Refill de fertilizante.</div>
          </div>
        </div>
        <div className="wrapper">
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona la torre para realizar una recarga:</h2>
          <Card>
            <h4 style={{ marginTop: "0", marginBottom: "0", textAlign: "center" }}>Torre AquaPlants 3 MINI</h4>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", textAlign: "center" }}>
              <div style={{ width: "70%", display: "flex", gap: "10px", justifyContent: "center" }}>
                <Card>
                  <Link to="/in/refill/fertilizante" >
                    <div style={{ display: "flex", alignItems: "center", padding: "0px", backgroundColor: "#f5f5f5" }}>
                      <img src={fertilizante} width="35px" style={{ marginLeft: "0", filter: "opacity(0.5) drop-shadow(0 0 0 green)" }} />
                      <div style={{ fontSize: "75%", fontWeight: "bold" }}>Refill Fertilizante</div>
                    </div>
                  </Link>
                </Card>
                <Card>
                  <Link to="/in/refill/almacigo" >
                    <div style={{ display: "flex", alignItems: "center", padding: "0px", backgroundColor: "#f5f5f5" }}>
                      <img src={hoja} width="35px" style={{ marginLeft: "0", filter: "opacity(0.5) drop-shadow(0 0 0 green)" }} />
                      <div style={{ fontSize: "75%", fontWeight: "bold" }}>Refill Almácigos</div>
                    </div>
                  </Link>
                </Card>
              </div>
            </div>
          </Card>
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Ordenes en proceso:</h2>
          <Card>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <img src={sol} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
              <div>
                <h4 style={{ margin: "0", marginBottom: "5px" }}>Refill de almácigos:</h4>
                <ul style={{ margin: "0", padding: "0", listStyleType: "disc" }}>
                  <li>OS1234</li>
                  <li>En proceso</li>
                  <li>Entrega: 25/04/2024</li>
                  <li>Antartica</li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <img src={sol} style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
              <div>
                <h4 style={{ margin: "0", marginBottom: "5px" }}>Refill de fertilizantes:</h4>
                <ul style={{ margin: "0", padding: "0", listStyleType: "disc" }}>
                  <li>OS423443</li>
                  <li>En proceso</li>
                  <li>Entrega: 26/04/2024</li>
                  <li>Antartica</li>
                </ul>
              </div>
            </div>
          </Card>
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Historial:</h2>
          <Card>
            <ul style={{ marginTop: "0", marginBottom: "0", listStyleType: "disc" }}>
              <li>05/04/2024 - OS4429</li>
              <li>05/04/2024 - OS4429</li>
              <li>05/04/2024 - OS4429</li>
              <li>05/04/2024 - OS4429</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
