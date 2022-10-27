import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../compo/Footer';
import Navber from '../compo/Navber';
import SideCompo from '../compo/SideCompo';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className=' md:grid grid-cols-5'>
                <div>
                    <SideCompo></SideCompo>
                </div>
                <div className='col-span-4'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;