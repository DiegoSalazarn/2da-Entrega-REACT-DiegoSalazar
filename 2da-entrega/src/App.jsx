import ItemListContainer from './components/navbar/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-content">
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    </>
  );
}

export default App;
