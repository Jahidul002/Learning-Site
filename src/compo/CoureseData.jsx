import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navber from './Navber';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
};


const CoureseData = () => {
    const allData = useLoaderData()
    console.log(allData);
    const { name, about, img, price, rating, title } = allData
    return (
        <div>
            <Navber></Navber>
            <div className='text-right'>
                <Pdf targetRef={ref} options={options} filename={name}>
                    {({ toPdf }) => <button className='btn btn-wide' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div className='container mx-auto' ref={ref}>
                <button className='btn btn-outline btn-info'><Link to="/courses">Back</Link></button>
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
        </div>
    );
};

export default CoureseData;