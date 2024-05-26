import ProductList from "../../components/ProductManagement/ProductList"
import { useNavigate } from 'react-router-dom';

import ProductForm from "../../components/ProductManagement/ProductForm"
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';

const ProductListPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (ruta) => {
      navigate(ruta);
    };

    return <>
    
    <h2>Lista de productos</h2>

        <div>
             <BusinessBar/>
             <ProductForm />
              
          </div>

    < ProductList />

    </>

}

export default ProductListPage;