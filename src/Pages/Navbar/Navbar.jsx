import { Link, NavLink } from 'react-router-dom';
import '../../assets/style.css';
import { useEffect, useState } from 'react';
import moon from "../../assets/icons/moon.png";
import sun from '../../assets/icons/sun.svg';
import UseAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { logout, currentUser, loading } = UseAuth();
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "emerald"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("emerald");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
        })
    }
    const navItems = <>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> */}
        {/* {
        user?.email ? <>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
        </> 
         : <li><Link to="/login">Login</Link></li>
    } */}
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-[#3DD8A7] font-semibold text_hover_animaiton nav-link font-poppins text-lg" : " font-semibold text_hover_animaiton nav-link font-poppins text-lg text-black"
                }
            >
                <div className="relative inline-block menu-text">
                    <div className="relative inline-block">H</div>
                    <div className="relative inline-block">o</div>
                    <div className="relative inline-block">m</div>
                    <div className="relative inline-block">e</div>
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/all-assignment"
                className={({ isActive }) =>
                    isActive ? "text-[#3DD8A7] font-semibold text_hover_animaiton nav-link font-poppins text-lg" : " font-semibold text_hover_animaiton nav-link font-poppins text-lg text-black"
                }
            >
                <div className="relative inline-block menu-text">
                    <div className="relative inline-block">A</div>
                    <div className="relative inline-block">l</div>
                    <div className="relative inline-block">l</div>
                </div>
                <div className="relative inline-block menu-text">
                    <div className="relative inline-block">A</div>
                    <div className="relative inline-block">s</div>
                    <div className="relative inline-block">s</div>
                    <div className="relative inline-block">i</div>
                    <div className="relative inline-block">g</div>
                    <div className="relative inline-block">n</div>
                    <div className="relative inline-block">m</div>
                    <div className="relative inline-block">e</div>
                    <div className="relative inline-block">n</div>
                    <div className="relative inline-block">t</div>
                </div>
            </NavLink>
        </li>
        {
            currentUser?.email ? <>
                <li>
                    <NavLink to="/add-assignment"
                        className={({ isActive }) =>
                            isActive ? "text-[#3DD8A7] font-semibold text_hover_animaiton nav-link font-poppins text-lg" : " font-semibold text_hover_animaiton nav-link font-poppins text-lg text-black"
                        }
                    >
                         <div className="relative inline-block menu-text">
                    <div className="relative inline-block">A</div>
                    <div className="relative inline-block">d</div>
                    <div className="relative inline-block">d</div>
                </div>
                <div className="relative inline-block menu-text">
                    <div className="relative inline-block">A</div>
                    <div className="relative inline-block">s</div>
                    <div className="relative inline-block">s</div>
                    <div className="relative inline-block">i</div>
                    <div className="relative inline-block">g</div>
                    <div className="relative inline-block">n</div>
                    <div className="relative inline-block">m</div>
                    <div className="relative inline-block">e</div>
                    <div className="relative inline-block">n</div>
                    <div className="relative inline-block">t</div>
                </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={handleLogOut}
                        className={({ isActive }) =>
                            isActive ? "text-black font-semibold text_hover_animaiton nav-link font-poppins text-lg" : " font-semibold text_hover_animaiton nav-link font-poppins text-lg text-black"
                        }
                    >
                        <div className="relative inline-block menu-text">
                            <div className="relative inline-block">L</div>
                            <div className="relative inline-block">o</div>
                            <div className="relative inline-block">g</div>
                            <div className="relative inline-block">o</div>
                            <div className="relative inline-block">u</div>
                            <div className="relative inline-block">t</div>
                        </div>
                    </NavLink>
                </li>
            </> :
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-[#3DD8A7] font-semibold text_hover_animaiton nav-link font-poppins text-lg" : " font-semibold text_hover_animaiton nav-link font-poppins text-lg text-black"
                        }
                    >
                        <div className="relative inline-block menu-text">
                            <div className="relative inline-block">L</div>
                            <div className="relative inline-block">o</div>
                            <div className="relative inline-block">g</div>
                            <div className="relative inline-block">i</div>
                            <div className="relative inline-block">n</div>
                        </div>
                    </NavLink>
                </li>
        }


    </>

    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-12 h-12">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "emerald" ? false : true}
                        />
                        <img src={sun} alt="emerald" className="w-8 h-8 swap-on" />
                        <img src={moon} alt="dark" className="w-6 h-6 swap-off" />
                    </label>
                </button>
            </div>
        </div>
    );
}

export default Navbar;