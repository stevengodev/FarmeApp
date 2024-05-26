import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import CowBabiesForm  from '../../components/CowBabiesComponet/CowBabiesForm';

const CowBabiesPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>            
            <BusinessBar/>

            <CowBabiesForm/>

      </div>
    )
  
}

export default CowBabiesPage;