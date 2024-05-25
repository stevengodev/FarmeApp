import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BusinessRegistrationPage from './pages/BusinessRegistration/BusinessRegistrationPage'
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';
import StaffRegistrationPage from './pages/StaffRegistration/StaffRegistrationPage';
import TaskRegistrationPage from './pages/TaskRegistration/TaskRegistrationPage';
import ProductListPage from './pages/ProductRegistration/ProductListPage';
import TaskListPage from './pages/TaskRegistration/TaskListPage';
import StaffListPage from './pages/StaffRegistration/StaffListPage';
import BusinessInfoPage from './pages/BusinessRegistration/BusinessInfoPage';
import Store from './pages/Store/Store';
import ProductRegistration from './pages/ProductRegistration/ProductRegistration';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/business-registration" element={ <BusinessRegistrationPage/> } />
        <Route path='/login' element={ <AuthForm/> } />
        <Route path='/staff-registration' element={ <StaffRegistrationPage/> } />
        <Route path='/task-registration' element={ <TaskRegistrationPage/> } />
        <Route path='/products-list' element={ <ProductListPage/> } />
        <Route path='/task-list' element={ <TaskListPage/> } />
        <Route path='/employee-list' element={ <StaffListPage/> } />
        <Route path='/businessInfo-list' element={ <BusinessInfoPage/> } />
        <Route path='/tienda' element={ <Store/> } />
        <Route path='/product-create' element={ <ProductRegistration/> } />

      </Routes>
    </Router>

    <Footer/>
    </>
  );
}

export default App;
