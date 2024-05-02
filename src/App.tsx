import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./routes/login/Login'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route
                            index
                            element={<Login />}
                        />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
