import './Navbar.css';
import CartWidget from './CartWidget/CartWidget';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">OversizeLook</h1>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Articulos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
