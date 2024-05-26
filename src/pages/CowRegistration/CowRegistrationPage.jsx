import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import FormCows from '../../components/CowComponent/FormCows';

const CowRegistrationPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>

            <BusinessBar/>
            <FormCows />

      </div>
    )
  
}

export default CowRegistrationPage;