import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from './component/user/login/Login';
import Navbar from './component/Navbar';
import Product from './component/product/Product';
import Products from './component/products/Products';
import SignUp from './component/user/register/SignUp';
import Sqlusers from './component/users/sqlusers';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/admin' element={<Sqlusers />} />
      </Routes>
    </>
  );
}

export default App;


