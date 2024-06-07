// RegistrationForm.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase.js";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAlert from '../CustomAlert/CustomAlert.jsx';
import NavbarHome from '../Home/NavBarHome.jsx';
import AccessibilityButton from '../Accessibility/AccessibilityButton.jsx';


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

    <>

    <NavbarHome/>

      <section className="background-radial-gradient overflow-hidden">
        <style>
          {`
          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(650px circle at 0% 0%,
                hsl(218, 41%, 35%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%),
              radial-gradient(1250px circle at 100% 100%,
                hsl(218, 41%, 45%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%);
          }
  
          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
  
          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
  
          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
          }
        `}
        </style>
  
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
  
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
  
                  {alertMessage && (
                    <CustomAlert
                      message={alertMessage}
                      variant={alertVariant}
                      onClose={() => setAlertMessage(null)}
                    />
                  )}
  
                  <form onSubmit={handleSubmit}>


                    <h3>Registrarse</h3>

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
                    <button type="submit" className="btn btn-primary btn-block mb-4">Registrarse</button>
  
                    <div className="text-center">
                      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
                    </div>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <AccessibilityButton/>

      </>
  );
};

export default RegistrationForm;

