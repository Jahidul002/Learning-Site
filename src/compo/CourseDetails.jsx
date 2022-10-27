import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const alldata = useLoaderData()
    const { name, img, price, rating, title, id } = alldata
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl'>WelCome To Our <span className='text-red-700 underline text-3xl'>{name}</span> Course</h1>
            <div className='my-5'>
                <div className="card w-96 bg-stone-400 shadow-xl p-10">
                    <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p>{title}</p>
                        <p>Price:<span className='text-red-700 font-bold'>{price}</span></p>
                        <button className="btn text-red-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to={`/single/${id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;