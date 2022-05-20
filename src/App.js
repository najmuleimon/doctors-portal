import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute';
import Signup from './pages/Login/Signup';
import Navbar from './pages/Shared/Navbar';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/appointment' element={
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
