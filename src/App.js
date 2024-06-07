import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BusinessRegistrationPage from './pages/BusinessRegistration/BusinessRegistrationPage';
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';
import StaffRegistrationPage from './pages/StaffRegistration/StaffRegistrationPage';
import ProductListPage from './pages/ProductRegistration/ProductListPage';
import TaskListPage from './pages/TaskRegistration/TaskListPage';
import StaffListPage from './pages/StaffRegistration/StaffListPage';
import Store from './pages/Store/Store';
import ProductRegistration from './pages/ProductRegistration/ProductRegistration';
import CowRegistrationPage from './pages/CowRegistration/CowRegistrationPage';
import BullPage from './pages/BullPages/BullPage';
import CowBabiesPage from './pages/CowBabies/CowBabiesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Preferences from './pages/UserPreferences/Preferences';
import FarmsListPage from './pages/Farms/FarmsListPage';
import { AuthProvider } from './components/AuthForm/AuthContext'; // Importa el contexto

function App() {
  return (
    <AuthProvider> {/* Envolvemos la aplicación con AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-registration/:userId" element={<BusinessRegistrationPage />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/staff-registration/:userId" element={<StaffRegistrationPage />} />
          <Route path="/products-list/:userId" element={<ProductListPage />} />
          <Route path="/task-list/:userId" element={<TaskListPage />} />
          <Route path="/employee-list/:userId" element={<StaffListPage />} />
          <Route path="/cows/:userId" element={<CowRegistrationPage />} />
          <Route path="/bulls/:userId" element={<BullPage />} />
          <Route path="/cowBabies/:userId" element={<CowBabiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product-create/:userId" element={<ProductRegistration />} />
          <Route path="/preferences/:userId" element={<Preferences />} />
          <Route path="/farms-list/:userId" element={<FarmsListPage />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
