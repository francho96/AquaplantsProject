import "./styles.css";
import AquaplantsLogo from "../../assets/Logo_AquaPlants_letraverde_fondotransparente.png"
export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img className="heading" src={AquaplantsLogo} width="200px" style={{marginTop: "100px", marginBottom: "50px"}}></img>
        <form className="form-wrapper">

          <input className="input" id="email" placeholder="Usuario" type="email" />

          <input
            className="input"
            id="password"
            placeholder="Contraseña"
            type="password"
          />
          <div className="space">
            <a className="changePassword">¿Olvidaste la contraseña?</a>
          </div>
          <div className="lower-form">
            <button className="button">Entrar</button>
            <span>
              <a className="register" href="#">
                ¿Aún no eres Aquaplanter?
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
