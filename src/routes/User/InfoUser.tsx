import { useState } from 'react';
import "../styles.css";
import Card from "../components/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import EditInfo from '../components/EditInfo';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';

interface InfoField {
      label: string;
      value: string;
}

export default function App() {
      const [fields, setFields] = useState<InfoField[]>([
            { label: 'Nombre', value: 'Franco Barría' },
            { label: 'Nickname', value: 'Francho' },
            { label: 'Correo Electrónico', value: 'franco.barria@usach.cl' },
            { label: 'Teléfono', value: '+123456789' },
            { label: 'Teléfono de respaldo', value: '+987654321' },
            { label: 'Fecha de nacimiento', value: '01/01/1880' },
            { label: 'Dirección', value: 'mi casa' },
            { label: 'Comuna', value: 'Santiago' },
            { label: 'País', value: 'Chile' }
      ]);

      const [popupVisible, setPopupVisible] = useState(false);
      const [currentField, setCurrentField] = useState<InfoField | null>(null);

      const handleFieldClick = (field: InfoField) => {
            setCurrentField(field);
            setPopupVisible(true);
      };

      const handleSave = (value: string) => {
            if (currentField) {
                  setFields(fields.map(field =>
                        field.label === currentField.label ? { ...field, value } : field
                  ));
            }
            setPopupVisible(false);
      };

      return (
            <div className="App">
                  <div className="headerBackground">
                        <Link to="/in/user">
                              <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
                        </Link>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                              <AccountCircleIcon style={{ fontSize: "60px", color: "#ffffff" }} />
                              <h2 style={{ color: "#f5f5f5" }}>Tu Información</h2>
                        </div>
                        <div style={{ fontSize: "0.9em", lineHeight: "1.5em" }}>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <div style={{ color: "#2a653b" }}>-</div>
                              </div>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <InfoIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
                                    <div style={{ color: "#f5f5f5" }}>Información personal.</div>
                              </div>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <EditIcon style={{ fontSize: "20px", color: "#ffffff", width: "30px" }} />
                                    <div style={{ color: "#f5f5f5" }}>Puedes editar tus datos.</div>
                              </div>
                        </div>
                  </div>
                  <div className="wrapper">
                        <Card>
                              <div className="info-section">
                                    {fields.map(field => (
                                          <div key={field.label} className="info-item" onClick={() => handleFieldClick(field)}>
                                                <strong>{field.label}:</strong> <span className="info-value">{field.value}</span>
                                          </div>
                                    ))}
                              </div>
                        </Card>
                  </div>
                  {popupVisible && currentField && (
                        <EditInfo
                              currentField={currentField.label}
                              currentValue={currentField.value}
                              onSave={handleSave}
                              onClose={() => setPopupVisible(false)}
                        />
                  )}
            </div>
      );
};


