import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  // Estado para almacenar los valores de los campos del formulario
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log(e)
    //enviarDatos({ name, price });
    // Limpiar los campos después del envío del formulario
    setName('');
    setPrice('');
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div class="form-group">
          <label for="">Productos:</label>
          <select class="form-control" id="" name="">
            <option value="">Vaca xyz</option>
            <option value="">Vaca xxx</option>
            <option value="">Vaca lola</option>
            <option value="">Toto miura</option>
            <option value="">Toro peyo</option>
          </select>
        </div>

        <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <textarea class="form-control" id="descripcion" name="descripcion" rows="4" placeholder="Escribe una descripción aquí..."></textarea>
            </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>


        <button type="submit" className="btn btn-primary">Agregar</button>
        <button type="reset" className="btn btn-secondary">Cancelar</button>

      </form>
    </div>
  );
};

export default ProductForm;