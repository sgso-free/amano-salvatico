
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar></Navbar> 
            {/*Permite la navegación*/}
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>   
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;