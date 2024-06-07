import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal.jsx';

const StaffListPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>
        <NavbarGlobal/>
        <BusinessBar/>
        <StaffList/>

      </div>
    )
  
}

export default StaffListPage;