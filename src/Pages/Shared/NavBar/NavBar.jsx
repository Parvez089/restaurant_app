/** @format */

import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='/order'>Order</Link>
      </li>
    </>
  );
  return (
    <>
      <div className='navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'></div>
            <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {navOptions}
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>Bistro Boss</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn uppercase'>Get Started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
