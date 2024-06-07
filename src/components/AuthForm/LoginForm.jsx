import React, { useState } from 'react';
import { auth } from "../../services/firebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/login.css';
import { useAuth } from './AuthContext'; // Importa el contexto

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();
  const { setUserId } = useAuth(); // Usa el contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredentials.user.uid;
      setUserId(userId); // Actualiza el userId en el contexto

      navigate(`/business-registration/${userId}`);
    } catch (error) {
      let message;
      let type;

      switch (error.code) {
        case 'auth/invalid-email':
          message = "Correo inválido";
          type = "danger";
          break;
        case 'auth/missing-password':
          message = "Falta la contraseña";
          type = "danger";
          break;
        case 'auth/invalid-credential':
          message = "Credenciales incorrectas";
          type = "danger";
          break;
        default:
          message = "Error interno";
          type = "danger";
          break;
      }

      setAlertMessage({ type, message });
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
