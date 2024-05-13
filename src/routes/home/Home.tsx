import "./styles.css";
import Header from "../components/Header";
import Card from "../components/Card";
import SpaIcon from '@mui/icons-material/Spa';

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header title="Franco Barría" sex="men" />  
        <Card>
          Como se puede observar este es un ejemplo de tarjeta
        </Card>
        <Card>
          A lo largo de cada vista pueden haber muchas, demasiadas, tarjetas, lorem ipsum y cosas,
          este es un texto de prueba para demostrar los estirables que son estas tarjetas
        </Card>

        <Card>
          <SpaIcon fontSize="large"/>
          tambien pueden ir imagenes
        </Card>
        <Card>
          A lo largo de cada vista pueden haber muchas, demasiadas, tarjetas, lorem ipsum y cosas,
          este es un texto de prueba para demostrar los estirables que son estas tarjetas, si lo repeti
          para que se vea que se estira la pagina 
        </Card>
      </div>
    </div>
  );
}
