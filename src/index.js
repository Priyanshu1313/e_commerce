import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Test from './Test';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './component/Footer';
import Header from './component/Header';
import store from './redux/reducer/store';
import { Provider } from 'react-redux';
import Cart from './pages/cart';
import 'bootstrap-icons/font/bootstrap-icons.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <Header/>
    <Routes>
      <Route path="/" element = {<Home/> }/>
      <Route path="/test" element = {<Test/> }/>
      <Route path="/aboutus" element ={<AboutUs/>}/>
      <Route path="/contactus" element ={<ContactUs/>}/>
      <Route path='/CART' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
