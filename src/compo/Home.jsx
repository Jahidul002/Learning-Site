import React from 'react';
import { Link } from 'react-router-dom';
import Navber from './Navber';
import '../Css/Home.css'
import img from '../utilities/lod.png'


const Home = () => {
    return (
        <div>
            <Navber></Navber>

            <div className='md:grid grid-cols-3 setBG'>
                <div className='col-span-2 flex flex-col items-center justify-center mx-10'>
                    <h1 className='text-4xl'><span className='text-orange-400'>WelCome</span> To Our Website</h1>
                    <p className='font-thin'><small>Coding skills are highly sought-after by employers in a variety of industries, not just technology, and possessing these skills can help you on your way to a successful career path. Read on to find out more about the benefits of learning to code and the different programming languages that you can boost your job prospects.</small></p>
                    <button className="btn btn-outline">
                        <Link to="/courses">get Started</Link>
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;