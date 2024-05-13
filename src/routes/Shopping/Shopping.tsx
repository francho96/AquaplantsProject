import "./styles.css";
import Header from "../components/Header";
import Card from "../components/Card";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header title="Franco Barría" sex="men" />  
        <Card>
          Aún no esta disponible la compra en la app
        </Card>

      </div>
    </div>
  );
}
