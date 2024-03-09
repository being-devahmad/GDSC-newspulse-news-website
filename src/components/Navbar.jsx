import { useState } from "react";
// import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between py-2 md:px-12 shadow-lg relative z-50 px-4">
            <div className="flex justify-normal items-center py-4">
                <Link to={'/'} className="text-cyan-700">
                    {/* <img src={logo} alt="books" className="w-12 h-12" /> */}
                    <p className=" font-bold text-lg text-[#393280]">NewsPulse</p>
                </Link>
            </div>
            <div>
                <ul className="DESKTOP-MENU hidden space-x-4 sm:flex">
                    <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                `py-1 font-medium ${isActive ? "text-orange-700" : "text-black"
                                }`
                            }

                        >
                            HOME
                        </NavLink>
                    </li>
                    <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
                    <li>
                        <NavLink
                            to="/news"
                            className={({ isActive }) =>
                                `py-1 font-medium ${isActive ? "text-orange-700" : "text-black"
                                }`
                            }
                        >
                            NEWS
                        </NavLink>
                    </li>
                    <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
                </ul>
            </div>
            <section className="flex justify-center items-center space-x-6">
                {/* mobile responsiveness */}
                <div className="MOBILE-MENU flex sm:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-1.5"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
                        <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
                        <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-4 py-4"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[60px]">
                            <li>
                                <NavLink to="/"
                                    className={({ isActive }) =>
                                        `py-1 font-medium ${isActive ? "text-orange-700" : "text-black"
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/news"
                                    className={({ isActive }) =>
                                        `py-1 font-medium ${isActive ? "text-orange-700" : "text-black"
                                        }`
                                    }
                                >
                                    NEWS
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
    .hideMenuNav {
        display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
        </div>
    );
}

export default Navbar;