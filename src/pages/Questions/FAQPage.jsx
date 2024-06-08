import React from 'react';
import FAQItem from '../../components/Questions/FAQItem';
import NavbarHome from '../../components/Home/NavBarHome';

const faqData = [
    {
        question: "¿Qué es nuestra aplicación de negocios?",
        answer: "Nuestra aplicación de negocios es una plataforma integral que ayuda a las empresas a gestionar sus operaciones, incluyendo ventas, marketing, finanzas y recursos humanos."
    },
    {
        question: "¿Cómo puedo registrarme en la aplicación?",
        answer: "Puedes registrarte en nuestra aplicación visitando nuestro sitio web y haciendo clic en el botón 'Registrarse'. Sigue las instrucciones para completar el proceso de registro."
    },
    {
        question: "¿Qué características ofrece la aplicación?",
        answer: "La aplicación ofrece una variedad de características, incluyendo gestión de proyectos, seguimiento de ventas, herramientas de marketing, análisis financiero y gestión de recursos humanos."
    },
    {
        question: "¿Es segura la aplicación?",
        answer: "Sí, nuestra aplicación utiliza encriptación de extremo a extremo y otras medidas de seguridad avanzadas para proteger tus datos y garantizar la privacidad."
    },
    {
        question: "¿Puedo acceder a la aplicación desde dispositivos móviles?",
        answer: "Sí, nuestra aplicación está disponible tanto en dispositivos móviles como en ordenadores de escritorio. Puedes descargar nuestra app desde la App Store o Google Play."
    },
    {
        question: "¿Qué opciones de soporte están disponibles?",
        answer: "Ofrecemos soporte 24/7 a través de chat en vivo, correo electrónico y teléfono. También puedes acceder a nuestra base de conocimientos en línea para encontrar respuestas a preguntas comunes."
    }
];

const FAQPage = () => {
    return (

        <>

            <style>
                {`
    .faq-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff; /* Fondo blanco para el contenedor */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
}
`}
            </style>

            <NavbarHome/>

            <div className="faq-page">
                <h1>Preguntas Frecuentes</h1>
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </>
    );
};

export default FAQPage;
