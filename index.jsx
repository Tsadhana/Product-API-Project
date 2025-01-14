import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter , Route , Routes } from "react-router";
import ProductDetails from './components/ProductDetail'
import Header from "./components/Header";
import { Home } from "./components/Home";


const root = createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
   <Routes>
      <Route element={<App />} >
            <Route path="/" element={<Home />}/>
            <Route path='productdetail' element={<ProductDetails />} />
       </Route> 
    </Routes>

  </BrowserRouter>
)