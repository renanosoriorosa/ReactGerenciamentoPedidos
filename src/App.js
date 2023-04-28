import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import IsAuthenticated from './services/Autenticacao/auth';

function App() {
  /* const [isAutenticado, setIsAutenticado] = useState(false);

  function SetIsAutenticado(isAutenticado) {
    setIsAutenticado(isAutenticado);
  } */
  
  // Faz logout do usuário removendo o token de autenticação do localStorage
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  };

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={false ? <Home /> : <Navigate to="/login" />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
