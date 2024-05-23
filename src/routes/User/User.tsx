import "../styles.css";
import Card from "../components/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import raiz from "../../assets/raiz.png";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function App() {

  const [showCover, setShowCover] = useState(true);
  const [entering, setEntering] = useState(true);


  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    setEntering(!entering);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
  return (
    <div className="App">
      {showCover && (
        <div className="green-screen"></div>
      )}
      <div className="headerBackground">
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <AccountCircleIcon style={{fontSize: "60px", color: "#ffffff"}}/>
          <h2 style={{color: "#f5f5f5"}}>Configuración<br/>Franco Barría</h2>
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
        <Card>
          En este sector deben aparecer los datos del cliente, los cuales pueden modificarse.
          <Button variant="contained" color="error" style={{margin: "10px"}} onClick={() => handleRedirect()}>
            Salir de la cuenta
          </Button>
        </Card>
      </div>
      <div className={entering ? "dummyBackground3Entering" : "dummyBackground3"}></div>
    </div>
  );
}
