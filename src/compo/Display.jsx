import React from 'react';

const Display = ({ data }) => {
    console.log(data);
    const { img, name, price } = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <p>price:<span>{price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Display;