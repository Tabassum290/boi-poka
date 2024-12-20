import { NavLink } from "react-router-dom";


const Navbar = () => {
const links = 
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listedbooks">Listed Books</NavLink></li>
    <li><NavLink to="/pages">Pages to Read</NavLink></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 bg-white">
     {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Boi Poka</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 font-semibold bg-white mx-8">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <a className="btn p-4 bg-[#23BE0A]  text-white">Sign In</a>
    <a className="btn p-4 bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;