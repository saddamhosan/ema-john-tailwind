import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
      <div className="flex justify-between items-center px-16 bg-blue-600 py-2">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-white text-xl flex">
          <CustomLink className="ml-5" to="/">
            Shop
          </CustomLink>
          <CustomLink className="ml-5" to="/order">
            Order
          </CustomLink>
          <CustomLink className="ml-5" to="/inventory">
            Inventory
          </CustomLink>
          {user?.email ? (
            <button onClick={()=>signOut(auth)} className="ml-5">
              Log Out
            </button>
          ) : (
            <CustomLink className="ml-5" to="/login">
              Login
            </CustomLink>
          )}
        </div>
      </div>
    );
};

export default Header;