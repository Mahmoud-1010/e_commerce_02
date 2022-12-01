import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import Navbar from "./component/Navbar"
import About from "./component/About";
import LogIn from "./component/LogIn";
import Footer from "./component/Footer";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        
        <Routes>
          <Route path="/" element={
            <ProductList />
          }/>

          <Route path="/about" element={
            <About/>
          }/>

          <Route path="/login" element={
                      <LogIn/>
                    }/>
          <Route path="product/:productId" element={<ProductDetails/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
