import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Navber from './Navber';

const Register = () => {
    const [error, setError] = useState()
    const { creatUser, UpdtUserProfile } = useContext(AuthContext)

    const handleSub = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const url = form.url.value;
        const password = form.password.value
        console.log(email, name, password, url);

        creatUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                setError('')
                form.reset()
                handleProfile(name, url)
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        UpdtUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }




    return (
        <div>
            <div><Navber></Navber></div>
            <div> <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img URL</span>
                                </label>
                                <input type="text" name='url' placeholder="URL" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary ">Registation</button>
                            </div>
                            <span className='text-red-500'> {error}</span>
                            <p><small>Already have an account?<span className='underline text-blue-700 font-bold'><Link to="/login">Log In</Link></span></small></p>
                        </form>
                    </div>
                </div>
            </div></div>
        </div>
    );
};

export default Register;