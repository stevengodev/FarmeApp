// AuthForm.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{isLogin ? 'Inicio de Sesión' : 'Registro'}</h2>
          {isLogin ? <LoginForm /> : <RegistrationForm />}
          <p className="card-text">
            {isLogin
              ? "¿No tienes una cuenta? Regístrate "
              : "¿Ya tienes una cuenta? Inicia sesión "}
            <button className="btn btn-link p-0 registrarse" onClick={toggleForm}>
              {isLogin ? 'aquí' : 'aquí'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
