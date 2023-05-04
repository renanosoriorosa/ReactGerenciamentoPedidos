import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import NotFound from './pages/NotFound/NotFound';
import Produto from './pages/Produto/Produto';
import PrivateRoute from './services/PrivateRoute/PrivateRoute';

function App() {

  // Faz logout do usuário removendo o token de autenticação do localStorage
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  };

  return (
    <main>
      <Router>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute> } />
            <Route exact path="/produto" element={<Produto/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
