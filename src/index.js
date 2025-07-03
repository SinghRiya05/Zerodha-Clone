import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing..page/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Landing..page/signup/Signup';
import AboutPage from './Landing..page/about/AboutPage';
import ProductPAge from './Landing..page/products/ProductPage';

import PricingPage from './Landing..page/pricing/PricingPage';
import SupportPage from './Landing..page/support/SupportPage';
import Navbar from './Landing..page/Navbar';
import Footer from './Landing..page/Footer';
import NotFound from './Landing..page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/product' element={<ProductPAge/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);



