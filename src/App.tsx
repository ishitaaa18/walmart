import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WarehouseToStore from './pages/WarehouseToStore';
import VenderToWarehousePage from './pages/VenderToWarehousePage';
import Customer from './pages/Customer';
import FeedbackForm from './pages/Feedback';
import StoreToCustomer from './pages/StoreToCustomer';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Driver from './pages/Driver';
import Start from './pages/getstarted';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/VenderToWarehousePage" element={<VenderToWarehousePage />} />
        <Route path="/WarehouseToStore" element={<WarehouseToStore />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/StoreToCustomer" element={<StoreToCustomer/>} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/getstarted" element={<Start />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
