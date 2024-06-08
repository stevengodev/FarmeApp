import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
    console.log('Formulario enviado:', formData);
    // Reiniciar el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">

      <h3>Contacto</h3>
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="name" className="form-label">Nombre:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="form-control"
      required
    />
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="email" className="form-label">Correo electrónico:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-control"
      required
    />
  </div>
</div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
      <button type="reset" className="btn btn-secondary">Cancelar</button>

    </form>
  );
};

export default ContactForm;
