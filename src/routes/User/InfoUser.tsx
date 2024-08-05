import { useState, useEffect } from 'react';
import "../styles.css";
import Card from "../components/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import EditInfo from '../components/EditInfo';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useUser } from '../../hooks/useUser';
import axios from 'axios';

interface InfoField {
    label: string;
    value: string;
}

export default function App() {
    const { email } = useUser();
    const [fields, setFields] = useState<InfoField[]>([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentField, setCurrentField] = useState<InfoField | null>(null);
    const [userData, setUserData] = useState<any>(null);

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

    useEffect(() => {
        if (email) {
            axios.post(`${import.meta.env.VITE_APP_XDD}/usuario`, { email })
                .then(response => {
                    console.log('Datos del usuario:', response.data);
                    setUserData(response.data);
                    // Map the user data to the fields
                    setFields([
                        { label: 'Nombre', value: (response.data.firstname || '') + ' ' + (response.data.lastname || '') },
                        { label: 'Nickname', value: response.data.nickname || '' },
                        { label: 'Correo Electrónico', value: email },
                        { label: 'Teléfono', value: response.data.mobile || '' },
                        { label: 'Teléfono de respaldo', value: response.data.phone || '' },
                        { label: 'Fecha de nacimiento', value: response.data.birthday ? new Date(response.data.birthday).toLocaleDateString() : '' },
                        { label: 'Dirección', value: response.data.mailingstreet || '' },
                        { label: 'Comuna', value: response.data.comuna || '' },
                        { label: 'País', value: response.data.pais || '' }
                    ]);
                })
                .catch(error => {
                    console.error('Error al obtener los datos del usuario:', error);
                });
        }
    }, [email]);

    return (
        <div className="App">
            <div className="headerBackground">
                <Link to="/in/user">
                    <ArrowBack style={{ color: "white", width: "50px", position: "absolute", left: "0", top: "15" }} />
                </Link>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <AccountCircleIcon style={{ fontSize: "60px", color: "#ffffff", paddingLeft: "12px" }} />
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
}
