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
import { useEffect } from 'react';
import { useUser } from '../../hooks/useUser'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const { email } = useUser(); // Usar el hook personalizado para obtener el correo electrónico

  useEffect(() => {
      // Mostrar el correo electrónico en la consola si está disponible
      if (email) {
          console.log('Correo electrónico del usuario:', email);
      }
  }, [email]);

  // Obtener el nombre para mostrar en el encabezado
  const nombreUsuario = (() => {
      // Aquí debes obtener el nombre y otros detalles del usuario desde el contexto o algún otro estado si es necesario
      // Por simplicidad, solo usaremos el correo electrónico en el saludo
      if (email) {
          return `Bienvenido ${email}`;
      } else {
          return 'Bienvenido Usuario';
      }
  })();

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
            <div style={{ color: "#f5f5f5" }}>Torre de 3 pisos</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <LocationOnIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Despacho a Antártica Chilena</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <StarsIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
            <div style={{ color: "#f5f5f5" }}>Plan de suscripción premium</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Mis pedidos</h2>
        <Card>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Orden:
            </div>
            <div>
              666
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Tipo:
            </div>
            <div>
              Refill de almácigos
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Estado:
            </div>
            <div>
              En proceso
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Fecha de entrega:
            </div>
            <div>
              30 de febrero 2025
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Comuna:
            </div>
            <div>
              Antártica Chilena
            </div>
          </div>
        </Card>
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
        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>Estado de tu producto:</h2>
        <Card>
          <Link to="/in/user/product">
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginBottom: "2.5%", margin: "0", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={planta} style={{ fontSize: "40px", color: "#2a653b", width: "45px" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold" }}>Torre AquaPlants 3 MINI</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InfoOutlinedIcon style={{ fontSize: "50px", color: "#2a653b", width: "30px" }} />
              </div>
            </div>
          </Link>
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
