import "./styles.css";
import AquaplantsLogo from "../../assets/Logo_AquaPlants_letraverde_fondotransparente.png"
export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <img class="heading" src={AquaplantsLogo} width="200px" style={{marginTop: "100px", marginBottom: "50px"}}></img>
        <form class="form-wrapper">

          <input class="input" id="email" placeholder="Usuario" type="email" />

          <input
            class="input"
            id="password"
            placeholder="Cnotraseña"
            type="password"
          />
          <div class="space">
            <a class="changePassword">¿Olvidaste la contraseña?</a>
          </div>
          <div class="lower-form">
            <button class="button">Entrar</button>
            <span>
              <a class="register" href="#">
                ¿Aún no eres Aquaplanter?
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
