import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoureseData = () => {
    const allData = useLoaderData()
    console.log(allData);
    const { name, about, img, price, rating, title } = allData
    return (
        <div className='container mx-auto'>
            <h1>Thanks For purchase Our {name} Course</h1>
            <div className='flex flex-col justify-center items-center'>
                <img src={img} alt="" />
                <span className='text-3xl text-amber-700 font-semibold'> {name}</span>
            </div>
            <div>
                <h1 className='text-2xl font-thin'>About</h1>
                <p className='font-light text-purple-200'>{title}</p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-thin' >Advantage and DisAdvantage Of {name}</h1>
                <p className='font-semibold'>{about}</p>
            </div>
        </div>
    );
};

export default CoureseData;