
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar></Navbar>   
          <ItemListContainer gretting="Lista de Productos Catalogo"/>
    </div>
  );
}

export default App;