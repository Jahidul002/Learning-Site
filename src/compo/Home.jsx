import React from 'react';
import { Link } from 'react-router-dom';
import Navber from './Navber';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <button>
                <Link to="/courses">get Start</Link>
            </button>
        </div>
    );
};

export default Home;