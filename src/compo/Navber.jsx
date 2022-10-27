import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { BeakerIcon, UserCircleIcon } from '@heroicons/react/24/solid'


const Navber = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }


    return (
        <div className="navbar bg-emerald-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Course</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blog">BLOG</Link>
                    </ul>
                </div>
                <Link className='text-2xl font-mono bg-emerald-700 hover:bg-emerald-600 px-3 py-1 rounded-lg' to="/"><span className='text-amber-500'>Develop</span> MY <span className='text-amber-500'>Plots</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className='mx-2 bg-emerald-600 hover:bg-emerald-900 px-3 py-1 rounded-md font-semibold text-xl' to="/">Home</Link>
                    <Link className='mx-2 bg-emerald-600 hover:bg-emerald-900 px-3 py-1 rounded-md font-semibold text-xl' to="/courses">Course</Link>
                    <Link className='mx-2 bg-emerald-600 hover:bg-emerald-900 px-3 py-1 rounded-md font-semibold text-xl' to="/faq">FAQ</Link>
                    <Link className='mx-2 bg-emerald-600 hover:bg-emerald-900 px-3 py-1 rounded-md font-semibold text-xl' to="/blog">BLOG</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip={user?.displayName}>
                    {
                        user?.photoURL ?
                            <img className='h-8 w-8 rounded-full mx-1' src={user?.photoURL} alt="" /> :
                            <UserCircleIcon className="h-8 w-8 text-blue-500" />
                    }
                </div>
                {
                    user?.uid ? <button onClick={handleLogOut} class="btn btn-sm btn-outline ">Log Out</button> :
                        <>
                            <button className="btn btn-sm btn-outline "><Link className='text-black mx-1' to="/register">Register</Link></button>
                            <button className="btn btn-sm  btn-outline"><Link className='text-black' to="/login">Login</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navber;