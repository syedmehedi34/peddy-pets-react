import { RxPerson } from "react-icons/rx";
import { FaPaw } from "react-icons/fa";

//
const Navbar = () => {
  return (
    <div>
      <header className="pt-2">
        <nav>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div role="button" className="btn btn-ghost md:hidden">
                  <img className="w-6 h-6" src="menuBar.svg" alt="" />
                </div>
                <ul className="menu menu-sm dropdown-content bg-base-100 text-text60 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Shop</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex btn btn-ghost hover:bg-white text-xl">
                {/* <i class="fa-solid fa-paw text-primary text-[32px]"></i> */}
                <span className="text-primary text-3xl">
                  <FaPaw />
                </span>

                <p className="text-text text-[2rem]">Peddy</p>
              </div>
            </div>
            <div className="navbar-center md:hidden">
              <div className="btn btn-ghost hover:bg-white text-xl">
                {/* <i class="fa-solid fa-paw text-primary text-[32px]"></i> */}
                <span className="text-primary text-3xl">
                  <FaPaw />
                </span>
                <p className="text-text text-[2rem]">Peddy</p>
              </div>
            </div>
            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-horizontal px-1 text-text60">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="btn hover:bg-white rounded-full bg-white border w-12 h-12 border-primary20">
                <span className="text-xl">
                  <RxPerson />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
