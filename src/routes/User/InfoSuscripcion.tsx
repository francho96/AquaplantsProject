import "../styles.css";
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import EditOffIcon from '@mui/icons-material/EditOff';
import InfoIcon from '@mui/icons-material/Info';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowBack from '@mui/icons-material/ArrowBack';

export default function App() {

  return (
    <div className="App">
      <div className="headerBackground">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link to="/in/user">
            <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
          </Link>
          <StarsIcon style={{ fontSize: "60px", width: "60px", color: "f5f5f5", paddingLeft:"12px" }} />
          <h2>Suscripción</h2>
        </div>
        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ color: "#2a653b" }}>-</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <InfoIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Información de tu suscripción.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <EditOffIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>No puedes realizar ediciones.</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Card>
          <div >
            <div className="info-sus">
              <strong>Nombre del producto:</strong> KIT TORRE AQUAPLANTS 3
            </div>
            <div className="info-sus">
              <strong>Tipo de suscripción:</strong> Estándar
            </div>
            <div className="info-sus">
              <strong>Fecha de compra:</strong> 19/04/2024
            </div>
            <div className="info-sus">
              <strong>Fecha de renovación:</strong> 12/12/2024
            </div>
            <div className="info-sus">
              <strong>Valor de suscripción:</strong> $13.990
            </div>
            <div className="info-sus">
              <strong>Cantidad de torres:</strong> 1
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
