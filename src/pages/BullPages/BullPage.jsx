import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import FormBulls from "../../components/BullComponet/FormBulls";
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';

const BullPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>

            <BusinessBar/>
            <FormBulls/>

      </div>
    )
  
}

export default BullPage;