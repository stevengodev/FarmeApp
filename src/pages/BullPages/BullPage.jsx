import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../../components/Home/NavBarHome';

const BullPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>

            <NavbarHome/>

      </div>
    )
  
}

export default BullPage;