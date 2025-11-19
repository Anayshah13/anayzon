import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const cartCount = cart && cart.cartItems ? cart.cartItems.length : 0;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="menu-button" onClick={openMenu} aria-label="Open menu">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <Link to="/" className="brand-link"> 
              <i className="fa fa-shopping-bag brand-icon" aria-hidden="true"></i>
              <span className="brand-text">anayzon</span>
            </Link>
          </div>
          <div className="header-links">
            <Link to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="link-text">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            {userInfo ? (
              <Link to="/profile">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="link-text">{userInfo.name}</span>
              </Link>
            ) : (
              <Link to="/signin">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                <span className="link-text">Sign In</span>
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <span className="link-text">Admin</span>
                </a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders"><i className="fa fa-list-alt" aria-hidden="true"></i> Orders</Link>
                    <Link to="/products"><i className="fa fa-box" aria-hidden="true"></i> Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">
                <i className="fa fa-tag" aria-hidden="true"></i>
                <span>Pants</span>
              </Link>
            </li>

            <li>
              <Link to="/category/Shirts">
                <i className="fa fa-tag" aria-hidden="true"></i>
                <span>Shirts</span>
              </Link>
            </li>
            <li>
              <Link to="/category/Accessories">
                <i className="fa fa-star" aria-hidden="true"></i>
                <span>Accessories</span>
              </Link>
            </li>
            <li>
              <Link to="/category/Sale">
                <i className="fa fa-bolt" aria-hidden="true"></i>
                <span>Sale</span>
              </Link>
            </li>
          </ul>
        </aside>
        {/* overlay shown when sidebar open - click to close */}
        <div className="screen-overlay" onClick={closeMenu} />
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
