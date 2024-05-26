import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';

const StaffListPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>
        <h1>Listado de empleados</h1>

        <BusinessBar/>


        <StaffList/>

      </div>
    )
  
}

export default StaffListPage;