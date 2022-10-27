import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Display from './Display';

const SecondHome = () => {
    const data = useLoaderData()
    return (
        <div className='md:ml-10 md:grid grid-cols-2 gap-10'>
            {
                data.map(dt => <Display key={dt.id} data={dt}></Display>)
            }
        </div>
    );
};

export default SecondHome;