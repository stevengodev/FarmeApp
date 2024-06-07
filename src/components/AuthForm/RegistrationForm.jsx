// RegistrationForm.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase.js";
import AlertMessages from '../AlertMessages/AlertMessages.jsx';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAlert from '../CustomAlert/CustomAlert.jsx';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState('success');

  // Usa useNavigate para obtener la función de navegación
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para registrar usuario

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)

      const userId = userCredential.user.uid;

      // navigate(`/business-registration/${userId}`);

      // Redirigir a la página deseada después del registro exitoso

            // Guardar el userId en localStorage
            localStorage.setItem('userId', JSON.stringify({ userId }));

            // Para recuperar el userId desde localStorage
            const storedUser = JSON.parse(localStorage.getItem('userId'));
            const userIdLocalStorage = storedUser ? storedUser.userId : null;
            console.log('Recovered userId:', userIdLocalStorage);
      
            setAlertMessage("Usuario creado correctamente");
            setAlertVariant('success');
      
            setTimeout(() => {
              navigate(`/business-registration/${userId}`);
            }, 2000); // Espera 2 segundos antes de redirigir

    } catch (error) {

      let message;
      let type;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "Este correo ya esta en uso";
          type = "warning";
          break;
        case 'auth/invalid-email':
          message = "Correo invalido";
          type = "danger";
          break;
        case 'auth/weak-password':
          message = "Contraseña debe contener al menos 8 caracteres";
          type = "danger";
          break;
        default:
          message = "Error interno";
          type = "danger";
          break;
      }

      setAlertMessage("Credenciales incorrectas");
      setAlertVariant('danger');

    }

    console.log('Registrar usuario con:', { email, password });
  };

  return (

    <div>

      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          variant={alertVariant}
          onClose={() => setAlertMessage(null)}
        />
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
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
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

