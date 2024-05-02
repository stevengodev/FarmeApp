import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BusinessRegistrationPage from './pages/BusinessRegistration/BusinessRegistrationPage'
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';
import StaffRegistrationPage from './pages/StaffRegistration/StaffRegistrationPage';
import TaskRegistrationPage from './pages/TaskRegistration/TaskRegistrationPage';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/business-registration" element={ <BusinessRegistrationPage/> } />
        <Route path='/login' element={ <AuthForm/> } />
        <Route path='/login' element={ <AuthForm/> } />
        <Route path='/staff-registration' element={ <StaffRegistrationPage/> } />
        <Route path='/task-registration' element={ <TaskRegistrationPage/> } />
      </Routes>
    </Router>

    <Footer/>
    </>
  );
}

export default App;
