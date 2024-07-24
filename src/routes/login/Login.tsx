import './styles.css';
import AquaplantsLogo from '../../assets/Logo_AquaPlants_letraverde_fondotransparente.png';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useUser } from '../../hooks/useUser';

export default function App() {
    const [entering, setEntering] = useState(false);
    const [showCover, setShowCover] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();

    const { email, setEmail } = useUser();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCover(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEnter = async () => {
        if (!email || !password) {
            setInputError('Por favor ingresa correo y contraseña');
            return;
        }

        if (!validateEmail(email)) {
            setInputError('Por favor ingresa un correo válido');
            return;
        }

        setEntering(true);
        setInputError('');

        try {
            const url = `${import.meta.env.VITE_APP_XDD}/login`;
            const response = await axios.post(url, { email, password });

            if (response.status === 200) {
                setEmail(email);
                navigate('/in');
            }
        } catch (error) {
            if ((error as AxiosError).response && (error as AxiosError).response?.status === 404) {
                setError(true);
            } else {
                console.error('Error al obtener datos del usuario:', error);
            }
        } finally {
            setEntering(false);
        }
    };

    return (
        <div className="App">
            {showCover && <div className="green-screen"></div>}
            <div className="wrapper">
                <div
                    className={
                        entering ? 'dummyBackgroundEntering' : 'dummyBackground'
                    }
                ></div>
                <img
                    className="heading"
                    src={AquaplantsLogo}
                    width="150px"
                    style={{ marginTop: '50px', marginBottom: '50px' }}
                ></img>
                <div className={entering ? 'disappear' : 'appear'}>
                    <Card>
                        <div style={{ padding: '10px' }}>
                            <input
                                className="input"
                                id="email"
                                disabled={entering}
                                placeholder="Email"
                                type="email"
                                style={{ marginBottom: '10px' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                className="input"
                                id="password"
                                disabled={entering}
                                placeholder="Contraseña"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                style={{
                                    color: 'red',
                                    textAlign: 'left',
                                    marginTop: '10px',
                                }}
                            >
                                {inputError && inputError} {error && "Usuario o contraseña incorrectos"} &nbsp;
                            </div>
                            <div
                                className="space"
                                style={{ justifyContent: 'end' }}
                            >
                                <a className="changePassword">
                                    ¿Olvidaste la contraseña?
                                </a>
                            </div>
                            <div className="lower-form">
                                <button
                                    disabled={entering}
                                    className="button"
                                    style={{ textAlign: 'center' }}
                                    onClick={handleEnter}
                                >
                                    Entrar
                                </button>
                                <span>
                                    <a className="register" href="https://aquaplants.cl/web/">
                                        ¿Aún no eres Aquaplanter?
                                    </a>
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div
                    className={
                        entering
                            ? 'dummyBackground2Entering'
                            : 'dummyBackground2'
                    }
                ></div>
            </div>
        </div>
    );
}
