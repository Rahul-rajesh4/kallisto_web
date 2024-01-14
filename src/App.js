import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './COMPONENTS/Home/Home';
import Imgdiv from './COMPONENTS/Home/Imgdiv';
import Navbar from './COMPONENTS/NAVEBAR/Navbar';
import Nav from './COMPONENTS/NAVEBAR/Nav';
import Footer from './COMPONENTS/FOOTER/Footer';
import Card from './COMPONENTS/card/Card';
import Login from './COMPONENTS/LOGIN/Login';
import Register from './COMPONENTS/LOGIN/Register';
import Men from './COMPONENTS/PRODUCTS/Men';
import Women from './COMPONENTS/PRODUCTS/Women';
import Kids from './COMPONENTS/PRODUCTS/Kids';
import Accessories from './COMPONENTS/PRODUCTS/Accessories';
import Fav from './COMPONENTS/FAV/Fav';
import Colordnav from './COMPONENTS/NAVEBAR/Colordnav';
import Booking from './COMPONENTS/CART/Booking';
import Admin from './COMPONENTS/ADMIN/Admin';
import View from './COMPONENTS/ADMIN/View';
import Viewproduct from './COMPONENTS/PRODUCTS/Viewproduct';
import Profile from './COMPONENTS/PROFILE/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/imgdiv' element={<Imgdiv/>}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path='/nav' element={<Nav />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/men/:filter' element={<Men />}/>
        <Route path='/women' element={<Women />}/>
        <Route path='/kids' element={<Kids />}/>
        <Route path='/acc' element={<Accessories />}/>
        <Route path='/Fav' element={<Fav />}/>
        <Route path='/colornav' element={<Colordnav />}/>
        <Route path='/Cart' element={<Booking />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/view' element={<View />}/>
        <Route path='/viewproduct/:productId' element={<Viewproduct />}/>
        <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
