import './Header.css';
import { Link } from 'react-router-dom';

function Header({ storeName, cartCount }) {
  return (
    <header className="app-header">
      <h1 className="store-name">{storeName}</h1>

      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/category" className="nav-link">Category</Link>

        <div className="cart-container">
          <Link to="/cart" className="nav-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
