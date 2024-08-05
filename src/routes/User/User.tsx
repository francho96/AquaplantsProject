import "../styles.css";
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import planta from '../../assets/planta-verde.png';
import premium from '../../assets/premium.png';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useUser } from "../../hooks/useUser";
import axios from "axios";

export default function App() {
  const { email } = useUser();
  const [userData, setUserData] = useState<any>(null);
  const [entering, setEntering] = useState(true);

  const nombreUsuario = userData ? `Configuración ${userData.firstname}` : 'Configuración Usuario';
  const torre = userData && userData.torre ? userData.torre : null;

  const navigate = useNavigate();

  const handleRedirect = () => {
    setEntering(!entering);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

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

  return (
    <div className="App">
      <div className="headerBackground">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AccountCircleIcon style={{ fontSize: "60px", color: "#ffffff" }} />
          <h2 style={{ color: "#f5f5f5" }}>{nombreUsuario}</h2>
        </div>
        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ color: "#f5f5f5" }}>Revisa los detalles de tu cuenta aquí.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <InfoIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Tus torres, suscripción y más.</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <EditIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Puedes editar tus datos personales.</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Información de la cuenta:</h2>
        <Link to="/in/user/account">
          <Card>
            <div style={{ width: "90%", display: "flex", justifyContent: "space-around", alignSelf: "center" }}>
              <p style={{ textAlign: "center", color: "#444444" }}>Consulta y modifica la información de tu cuenta.</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoOutlinedIcon style={{ fontSize: "50px", color: "#2a653b", width: "40px" }} />
              </div>
            </div>
          </Card>
        </Link>
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona tu producto:</h2>
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
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Selecciona tu suscripción:</h2>
        <Card>
          {torre ? (
            <Link to="/in/user/suscription">
              <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginBottom: "2.5%", margin: "2px", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={premium} style={{ fontSize: "40px", color: "#2a653b", width: "40px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ fontWeight: "bold" }}>{torre}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div style={{ textAlign: "center" }}>No tienes suscripciones disponibles.</div>
          )}
        </Card>
        <Card>
          <Button variant="contained" color="error" style={{ margin: "10px" }} onClick={() => handleRedirect()}>
            Cerrar Sesión
          </Button>
        </Card>
      </div>
      <div className={entering ? "dummyBackground3Entering" : "dummyBackground3"}></div>
    </div>
  );
}
