import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import NotFound from './pages/NotFound/notFound';
import Produto from './pages/Produto/produto';
import PrivateRoute from './services/PrivateRoute/PrivateRoute';

function App() {

  // Faz logout do usuário removendo o token de autenticação do localStorage
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  };

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute> } />
            <Route exact path="/produto" element={<PrivateRoute><Produto/></PrivateRoute>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
