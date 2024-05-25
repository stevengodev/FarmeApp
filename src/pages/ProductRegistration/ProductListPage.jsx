import ProductList from "../../components/ProductManagement/ProductList"
import { useNavigate } from 'react-router-dom';


const ProductListPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (ruta) => {
      navigate(ruta);
    };

    return <>
    
    <h2>Lista de productos</h2>

        <div>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/employee-list')}>Empleados</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/task-list')}>Tareas</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Ganado</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Toros</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/product-create')}>Crear producto</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/tienda')}>Tienda</button>
            
            <button className="btn btn-secondary" onClick={() => handleNavigate('/')}>Volver</button>
          </div>

    < ProductList />

    </>

}

export default ProductListPage;