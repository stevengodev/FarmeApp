// LoginForm.js
import React, { useState } from 'react';
import { auth } from "../../services/firebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
// import AlertMessages from '../AlertMessages/AlertMessages.jsx';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
      console.log("inicio de sesion correctamente")
    } catch (error) {

      if (error.code === 'auth/invalid-email') {
        alert("Email invalido")
      } else if (error.code === 'auth/missing-password') {
         alert("Missing password")
      } else if (error.code === 'auth/invalid-credential') {
         alert("Credenciales incorrectas")
       }else{
        alert("Error interno")
        console.log(error.code)
       }
       
    }

  };

  return (

    <div>

      {/* {alertMessage && <AlertMessages type={alertMessage.type} message={alertMessage.message} />} */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email:</label>
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
