import "./styles.css";
import Card from "../components/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import raiz from "../../assets/raiz.png";
import fertilizante from "../../assets/Fertilizante.png";
import hoja from "../../assets/hoja.png";

export default function App() {


  return (
    <div className="App">
      <div className="headerBackground">
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <AccountCircleIcon style={{fontSize: "60px", color: "#ffffff"}}/>
          <h2 style={{color: "#f5f5f5"}}>Bienvenido<br/>Franco Barría</h2>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <img src={raiz} width="30px" style={{margin: "0 15px 0 15px"}}/>
          <div style={{color: "#f5f5f5"}}>Torre de 12 pisos</div>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <LocationOnIcon style={{fontSize: "30px", color: "#ffffff", width: "60px"}}/>
          <div style={{color: "#f5f5f5"}}>Despacho a Antártica Chilena</div>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <StarsIcon style={{fontSize: "30px", color: "#ffffff",  width: "60px"}}/>
          <div style={{color: "#f5f5f5"}}>Plan de suscripción premium</div>
        </div>
      </div>
      <div className="wrapper">
        <h2 style={{color: "#444444", alignSelf: "flex-start", marginTop: "20px"}}>Mis pedidos</h2>
        <Card>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
            Orden:
            </div>
            <div>
            666 
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
            Tipo:
            </div>
            <div>
            Refill de almácigos 
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
            Estado:
            </div>
            <div>
            En proceso 
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
              Fecha de entrega:
            </div>
            <div>
              30 de febrero 2025 
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
              Comuna:
            </div>
            <div>
              Antártica Chilena
            </div>
          </div>
        </Card>
        <div style={{width: "100%", display: "flex", gap: "20px"}}>
          <Card>
            <img src={fertilizante} width="50px" style={{margin: "auto", marginBottom: "10px", filter: "opacity(0.5) drop-shadow(0 0 0 green)"}}/>
            Refill Fertilizante
          </Card>
          <Card>
          <img src={hoja} width="50px" style={{margin: "auto" , marginBottom: "10px", filter: "opacity(0.5) drop-shadow(0 0 0 green)"}}/>
            Refill Almácigos
          </Card>
        </div>
        
      </div>
    </div>
  );
}
