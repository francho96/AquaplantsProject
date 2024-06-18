import './styles.css';
import AquaplantsLogo from '../../assets/Logo_AquaPlants_letraverde_fondotransparente.png';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function App() {
    const [entering, setEntering] = useState(false);
    const [showCover, setShowCover] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCover(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleEnter = async () => {
        setEntering(true);
        try {
            const url = `${import.meta.env.VITE_APP_API}/usuario`;
            const response = await axios.post(url, { email });

            if (response.status === 200) {
                localStorage.setItem('infoUsuario', JSON.stringify(response.data));
                navigate('/in');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError(true);
            } else {
                console.error('Error al obtener datos del usuario:', error);
            }
        } finally {
            setEntering(false);
        }
    };

    {/*
    const handleEnter = async () => {
        navigate('/in');
        try {
          const url = import.meta.env.VITE_APP_XDD;
          console.log(url)
          const { data } = await axios.post(url + "/login", {email, password});
          console.log(data);
          setEntering(!entering);
          setTimeout(() => {
              navigate('/in');
          }, 3000);
        } catch (error) {
          console.log("no funciono");
          setError(true);
        }
    };

    */}

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
                                {error && "Usuario o contraseña incorrectos"} &nbsp;
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
