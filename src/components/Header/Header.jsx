import React from 'react';
import Profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='border-b-2 border-gray-400 flex justify-between p-[20px]'>
            <h1 className='font-bold text-[40px]'>Knowledge Cafe</h1>
            <img src={Profile} alt="" className='border-black rounded-full border-2' />
        </div>
    );
};
export default Header;