import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import CowBabiesForm  from '../../components/CowBabiesComponet/CowBabiesForm';
import ContactForm from '../../components/ContactComponent/ContactForm';
const ContactPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>            
            <BusinessBar/>

            <ContactForm />

      </div>
    )
  
}

export default ContactPage;