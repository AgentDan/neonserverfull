import React from 'react';
import {Link} from "react-router-dom";

const Constructor = () => {
    return (
        <>
            <div className="absolute h-[20px] bg-green-300 text-red-600 font-extrabold">
                Constructor
            </div>

            <Link to={"/card"} className="absolute mt-24 w-[100px] h-[100px] bg-orange-400">
                <div className="bg-blue-400 h-[100px]">
                    Card
                </div>
            </Link>
        </>
    );
};

export default Constructor;