import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BusinessRegistrationPage from './components/BusinessRegistrationForm/BusinessRegistrationPage'
import ProductForm from './components/ProductManagement/ProductForm/ProductForm';
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/business-registration" element={ <BusinessRegistrationPage/> } />
        <Route path="/form-product" element={ <ProductForm/> } />
        <Route path='/login' element={ <AuthForm/> } />
        <Route path='/login' element={ <AuthForm/> } />
      </Routes>
    </Router>

    <Footer/>
    </>
  );
}

export default App;
