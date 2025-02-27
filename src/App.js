import logo from './logo.svg';
import './App.css';
import DemoNavbar from './componets/DemoNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import Product from './componets/Product';

function App() {
  return (
    
      <>
      <BrowserRouter>
      <DemoNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
        
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
