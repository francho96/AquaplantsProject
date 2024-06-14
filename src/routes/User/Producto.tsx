import "../styles.css";
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

import ArrowBack from '@mui/icons-material/ArrowBack';
import planta from '../../assets/raiz.png'
import SelectionButtons from '../components/EstadoPlantas';
export default function App() {

      return (
            <div className="App">
                 <div className="headerBackground">
                        <Link to="/in/user">
                              <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
                        </Link>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                              <Link to="/in/user">
                                    <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
                              </Link>
                              <img src={planta} style={{ fontSize: "60px", width: "60px", color: "f5f5f5" }} />
                              <h2>Tu Producto</h2>
                        </div>
                        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <div style={{ color: "#f5f5f5" }}>¡Cuéntanos sobre tu cultivo!</div>
                              </div>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <InfoIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
                                    <div style={{ color: "#f5f5f5" }}>Información del estado de tus almácigos.</div>
                              </div>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <EditIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
                                    <div style={{ color: "#f5f5f5" }}>Actualiza la información.</div>
                              </div>
                        </div>
                  </div>
                  <div className="wrapper">
                        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "20px" }}>KIT TORRE AQUAPLANTS 3</h2>
                        <Card>
                              
                              <div >
                                    <div style={{ marginBottom: "4px" }}>
                                          <strong>Fecha de compra:</strong> 19/04/2024
                                    </div>
                                    <div style={{ marginBottom: "4px" }}>
                                          <strong>Ultimo recambio de agua: </strong> <br />
                                          <input className="selector-fecha" type="date" id="fecha" name="fecha" ></input>
                                    </div>
                                    <div style={{ marginBottom: "4px" }}>
                                          <strong>Cantidad de agua: </strong><br />
                                          <select className="selector" name="opciones">
                                                <option value="1 Litro">1 Litro</option>
                                                <option value="5 Litros">5 Litros</option>
                                                <option value="10 Litros">10 Litros</option>
                                          </select>

                                    </div>
                              </div>
                        </Card>
                        <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop:"10px" }}>Cultivo actual</h2>
                        <Card>
                              <div>
                                    <p style={{ fontWeight: "bold", fontSize: "large",marginTop:"0px" }}>Piso 1: </p>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 1.1</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 1.2</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 1.3</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 1.4</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                              </div>
                              <div>
                                    <p style={{ fontWeight: "bold", fontSize: "large" }}>Piso 2: </p>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 2.1</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 2.2</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 2.3</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 2.4</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                              </div>
                              <div>
                                    <p style={{ fontWeight: "bold", fontSize: "large" }}>Piso 3: </p>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 3.1</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 3.2</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 3.3</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 3.4</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                              </div>
                              <div>
                                    <p style={{ fontWeight: "bold", fontSize: "large" }}>Piso 4: </p>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 4.1</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 4.2</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 4.3</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                                    <div className="almacigos">
                                          <p style={{ fontWeight: "450" }}>Almácigo 4.4</p>
                                          <select className="selector" name="opciones" defaultValue="">
                                                <option value="" disabled hidden> </option>
                                                <option value="Acelga">Acelga</option>
                                                <option value="Lechuga">Lechuga</option>
                                                <option value="Menta">Menta</option>
                                                <option value="Apio">Apio</option>
                                          </select>
                                          <SelectionButtons />
                                    </div>
                              </div>
                        </Card>
                  </div>
            </div>
      );
}
