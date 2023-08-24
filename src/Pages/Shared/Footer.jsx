import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-[#151515] py-24">
            <div className="grid lg:grid-cols-4 grid-cols-2 max-w-screen-xl mx-auto">
            <div className="space-y-4">
                <img src={logo} alt="" className='w-20'/>
                <p className="text-white">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className="flex space-x-6">
                <a href="#" className="bg-[#2C2C2C] w-8 h-8 rounded-full flex justify-center items-center text-white hover:text-gray-900 dark:hover:text-white">
                    <FaGoogle></FaGoogle>
                </a>
                <a href="#" className="bg-[#2C2C2C] w-8 h-8 rounded-full flex justify-center items-center text-white hover:text-gray-900 dark:hover:text-white">
                    <FaTwitter></FaTwitter>
                </a>
                <a href="#" className="bg-[#2C2C2C] w-8 h-8 rounded-full flex justify-center items-center text-white hover:text-gray-900 dark:hover:text-white">
                    <FaInstagram></FaInstagram>
                </a>
                <a href="#" className="bg-[#2C2C2C] w-8 h-8 rounded-full flex justify-center items-center text-white hover:text-gray-900 dark:hover:text-white">
                    <FaLinkedin></FaLinkedin>
                </a>
                <a href="#" className="bg-[#2C2C2C] w-8 h-8 rounded-full flex justify-center items-center text-white hover:text-gray-900 dark:hover:text-white">
                    <FaFacebook></FaFacebook>
                </a>
            </div>
            </div>
            <div className="text-white ml-40 space-y-10">
                <h3 className="text-lg font-bold">About</h3>
                <ul className="space-y-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
            <div className="text-white ml-40 space-y-10">
                <h3 className="text-lg font-bold">Company</h3>
                <ul className="space-y-4">
                    <li><Link to="/">Why car doctor</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
            <div className="text-white ml-40 space-y-10">
                <h3 className="text-lg font-bold">Support</h3>
                <ul className="space-y-4">
                    <li><Link to="/">Support center</Link></li>
                    <li><Link to="/">Feedback</Link></li>
                    <li><Link to="/">Accesblity</Link></li>
                </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;