import { FaShoppingCart } from "react-icons/fa";
import logo from "../Logo/logo.jpg"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
        <NavLink to="/">
          <img src={logo } alt="logo" className="h-14 ml-5"/>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200"/>
              <div>
                {
                  cart.length > 0 && 
                  (<div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</div>)
                }
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
