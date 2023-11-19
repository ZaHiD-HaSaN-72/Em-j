import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-black px-28 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className='hover:text-yellow-600'>Shop</a></li>
                    <li><Link to='/orders' className='hover:text-yellow-600'>Orders Now</Link></li>
                    <li><a className='hover:text-yellow-600'>Inventory</a></li>
                    <li><Link to='/login' className='hover:text-yellow-600'>Login</Link></li>
                    </ul>
                </div>
               <Link to='/home' > <img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-xl font-semibold ">
                    <li><a className='hover:text-yellow-600'>Shop</a></li>
                    <li><Link to='/orders' className='hover:text-yellow-600'>Orders Now</Link></li>
                    <li><a className='hover:text-yellow-600'>Inventory</a></li>
                    <li><Link to='/login' className='hover:text-yellow-600'>Login</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;