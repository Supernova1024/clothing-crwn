import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
    // onAuthStateChanged is used, so no context variable
    // setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
              : (<Link className="nav-link" to="/auth">
            SIGN IN
          </Link>)            
          }
          <CartIcon />
        </div>        
        { isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
