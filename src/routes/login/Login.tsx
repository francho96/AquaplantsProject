import "./styles.css";
import AquaplantsLogo from "../../assets/Logo_AquaPlants_letraverde_fondotransparente.png"
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
export default function App() {

  const [entering, setEntering] = useState(false)
  const [showCover, setShowCover] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);
  
  const handleEnter = () => {
    setEntering(!entering);
    setTimeout(() => {
      navigate("/in");
    }, 3000);
  };

  return (
    <div className="App">
      {showCover && (
          <div className="green-screen"></div>
        )}
      <div className="wrapper">
        
        <div className={entering ? "dummyBackgroundEntering" : "dummyBackground"}>
          
        </div>
        <img className="heading" src={AquaplantsLogo} width="150px" style={{marginTop: "50px", marginBottom: "50px"}}></img>
          <div className={entering ? "disappear" : "appear"}>
            <Card>
              <div style={{padding: "10px"}}>
              <input className="input" id="email" placeholder="Email" type="email" style={{marginBottom: "10px"}} />

              <input
                className="input"
                id="password"
                placeholder="Contraseña"
                type="password"
              />
              <div className="space" style={{justifyContent: "end"}}>
                <a className="changePassword">¿Olvidaste la contraseña?</a>
              </div>
              <div className="lower-form">
              <button  className="button" style={{textAlign: "center"}} onClick={handleEnter}>
                Entrar
              </button>
                <span>
                  <a className="register" href="#">
                    ¿Aún no eres Aquaplanter?
                  </a>
                </span>
              </div>
              </div>
          </Card>
        </div>
        <div className={entering ? "dummyBackground2Entering" : "dummyBackground2"}></div>
      </div>
    </div>
  );
}
