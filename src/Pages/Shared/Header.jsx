import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import logo from '../../assets/logo.svg';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
    const {user} =useContext(AuthContext);
    return (
        <header className="sticky top-0 z-50">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src={logo} className="mr-3 w-20" alt="Flowbite Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
                {
                    user ? <Link to="/profile" className="text-xl mr-2">
                    {
                        user && (user.email).split('@')[0]
                    }
                </Link>
                : <Link to="/login"><button className='bg-[#FF3811] px-5 py-2 rounded my-4 text-white font-bold'>Login</button></Link>
                }
                <Link to="/servicesCart" className="text-2xl mr-2">
                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                </Link>
                <a href="#" className="text-2xl mr-2">
                    <HiSearch></HiSearch>
                </a>
                <a href="#" className="text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Appointment</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink to="/" className={({isActive})=>
                        isActive ? "block py-2 pr-4 pl-3 lg:p-0 text-[#FF3811]"
                        :"block py-2 pr-4 pl-3 text-[#444444] lg:p-0 hover:text-[#FF3811]"
                    } aria-current="page">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className={({isActive})=>
                        isActive ? "block py-2 pr-4 pl-3 lg:p-0 text-[#FF3811]"
                        :"block py-2 pr-4 pl-3 text-[#444444] lg:p-0 hover:text-[#FF3811]"
                    } aria-current="page">About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/services" className={({isActive})=>
                        isActive ? "block py-2 pr-4 pl-3 lg:p-0 text-[#FF3811]"
                        :"block py-2 pr-4 pl-3 text-[#444444] lg:p-0 hover:text-[#FF3811]"
                    } aria-current="page">Srvices</NavLink>
                    </li>
                    <li>
                    <NavLink to="/blog" className={({isActive})=>
                        isActive ? "block py-2 pr-4 pl-3 lg:p-0 text-[#FF3811]"
                        :"block py-2 pr-4 pl-3 text-[#444444] lg:p-0 hover:text-[#FF3811]"
                    } aria-current="page">Blog</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className={({isActive})=>
                        isActive ? "block py-2 pr-4 pl-3 lg:p-0 text-[#FF3811]"
                        :"block py-2 pr-4 pl-3 text-[#444444] lg:p-0 hover:text-[#FF3811]"
                    } aria-current="page">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    );
};

export default Header;