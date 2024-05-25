import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';

const StaffListPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>
        <h1>Listado de empleados</h1>

        <div>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/employee-list')}>Empleados</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/task-registration')}>Crear Tareas</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Ganado</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Toros</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/product-create')}>Crear producto</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/tienda')}>Tienda</button>
            
            <button className="btn btn-secondary" onClick={() => handleNavigate('/')}>Volver</button>
          </div>

        <StaffList/>

      </div>
    )
  
}

export default StaffListPage;