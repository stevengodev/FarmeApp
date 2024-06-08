import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import FormCows from '../../components/CowComponent/FormCows';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";

const CowRegistrationPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>

            <NavbarGlobal/>
            <BusinessBar/>
            <FormCows />

      </div>
    )
  
}

export default CowRegistrationPage;