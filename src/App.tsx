import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                        </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
