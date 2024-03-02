import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />}/>
      {/* <Route path='/men' element={<ShopCategory category = "men" />}/>
      <Route path='/women' element={<ShopCategory category = 'women' />}/>
      <Route path='/kids' element={<ShopCategory category = "kid" />}/> */}
      <Route path='/product' element = {<Products />}>
      <Route path = ":productId" element = {<Products />}/>
    </Route>
    <Route path='cart' element = {<Cart />}/>
    <Route path='login' element = {<LoginSignup />}/>
    </Routes>
   
    </BrowserRouter>
     
    </div>
  );
}

export default App;
