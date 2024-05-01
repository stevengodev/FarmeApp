// RegistrationForm.js
import React, { useState } from 'react';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase.js";

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para registrar usuario

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      alert("Usuario creado correctamente")
    } catch (error) {

      console.log(error.code)

      if (error.code === 'auth/email-already-in-use') {
         alert("Email already in use")
      } else if (error.code === 'auth/invalid-email') {
         alert("Invalid email", "error")
      } else if (error.code === 'auth/weak-password') {
         alert("Contraseña debil, debe tener 8 caracteres")
       } else if (error.code) {
         alert("Something went wrong", "error")
      }
    }

    console.log('Registrar usuario con:', { email, password });
  };

  return (
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
  );
};

export default RegistrationForm;

