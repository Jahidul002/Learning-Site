import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Navber from './Navber';

const Login = () => {
    const [error, setError] = useState('')
    const { googleLogIn, signIN } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()


    const handleGit = () => {
        googleLogIn(gitProvider)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    const handleSub = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        signIN(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleGoogle = () => {
        googleLogIn(provider)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div> <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <span className='text-red-500'> {error}</span>
                            <p><small>New User?<span className='underline text-blue-700 font-bold'><Link to="/register">Register here</Link></span></small></p>
                        </form>
                    </div>
                    <button onClick={handleGoogle} className="btn btn-wide btn-outline btn-info">GOOGLE</button>
                    <button onClick={handleGit} className="btn btn-wide btn-outline btn-secondary">GITHUB</button>
                </div>
            </div></div>
        </div>
    );
};

export default Login;