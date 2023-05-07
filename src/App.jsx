import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import NotFound from './pages/NotFound/NotFound';
import Produto from './pages/Produto/Produto';
import PrivateRoute from './services/PrivateRoute/PrivateRoute';
import { Provider } from "./shared/contexts";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <main>
        <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route exact path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
              <Route exact path="/produto" element={<PrivateRoute><Produto/></PrivateRoute>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="*" element={<NotFound/>} />
          </Routes>
        </Router>
      </main>
    </Provider>
  );
}

export default App;
