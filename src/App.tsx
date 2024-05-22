import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Shopping from './routes/Shopping/Shopping';
import Refill from './routes/Refill/Refill';
import User from './routes/User/User';
import Mail from './routes/mail/Mail';
import Fertilizante from './routes/Refill/Refill-Fertilizante';
import Almacigo from './routes/Refill/Refill-Almacigo';

const Login = lazy(() => import('./routes/login/Login'));
const Root = lazy(() => import('./routes/root'));
const Home = lazy(() => import('./routes/home/Home'));


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route
                        index
                        element={<Login />}
                    />
                    <Route path="/in" element={<Root />}>
                        <Route index element={<Home />} />
                        <Route path='shopping' element={<Shopping />} />
                        <Route path='user' element={<User />} />
                        <Route path='refill' element={<Refill />} />
                        <Route path='refill/fertilizante' element={<Fertilizante />} />
                        <Route path='refill/almacigo' element={<Almacigo />} />
                        <Route path='mail' element={<Mail />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
