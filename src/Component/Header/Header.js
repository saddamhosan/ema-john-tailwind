import React from 'react';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-16 bg-blue-600 py-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white text-xl flex'>
                <CustomLink className='ml-5' to='/'>Shop</CustomLink>
                <CustomLink className='ml-5' to='/order'>Order</CustomLink>
                <CustomLink className='ml-5' to='/inventory'>Inventory </CustomLink>
            </div>
        </div>
    );
};

export default Header;