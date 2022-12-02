import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import Navbar from "./component/Navbar"
import About from "./component/About";
import Login from "./component/authentication/Login";
import Dashboard from "./component/authentication/Dashboard"
import Register from "./component/authentication/Register"
import Reset from "./component/authentication/Reset"

import Footer from "./component/Footer";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
         
        <Routes>
          <Route path="/" element={<ProductList />}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="product/:productId" element={<ProductDetails/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>

        </Routes>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
