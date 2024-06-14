import "./styles.css";
import { Link } from 'react-router-dom';
import Card from "../components/Card";
import fertilizante from "../../assets/Fertilizante.png";
import hoja from "../../assets/hoja.png";
import fertilizanteverde from "../../assets/Fertilizante-verde.png";
import hojaverde from "../../assets/hoja-verde.png";
import sol from "../../assets/sol.png";
import planta_nuevo from "../../assets/planta_otra_vez.png";


export default function App() {

  return (
    <div className="App">
      <div className="App">
        <div className="headerBackground" style={{}}>
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
              <strong>Torre AquaPlants 3 MINI</strong>
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
