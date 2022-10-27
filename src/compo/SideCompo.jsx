import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SideDetails from "./SideDetails";


const SideCompo = () => {
    const theDAta = useLoaderData()
    return (
        <div>
            <h1 className="text-center text-2xl text-emerald-700 font-semibold">Our Courses</h1>
            {
                theDAta.map(dt => <SideDetails key={dt.id} data={dt}></SideDetails>)
            }
        </div>
    )
};

export default SideCompo;