import React from 'react';
import { Link } from 'react-router-dom';

const SideDetails = ({ data }) => {
    const { id, name, title } = data
    return (
        <div>
            <button className="btn btn-wide btn-outline ">
                <Link to={`/courses/${id}`}>{name}</Link></button>
        </div>
    );
};

export default SideDetails;