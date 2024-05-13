import "./styles.css";
import Header from "../components/Header";
import Card from "../components/Card";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header title="Franco Barría" sex="men" />  
        <Card>
          La verdad no hay nada hecho aún
        </Card>
      </div>
    </div>
  );
}
