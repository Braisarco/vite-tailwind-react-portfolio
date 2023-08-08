import { useState } from "react";
import { Link } from "react-router-dom";

function MenuHorizontal(){
    

    return (
        <nav className = "flex bg-black bg-opacity-40">
            <Link
                to = "/aboutme"
                className = "text-white text-center w-1/3 p-4 uppercase font-semibold hover:bg-gray-400 "
                >About me
            </Link>
            <Link
                to = "/blog"
                className = "text-white text-center w-1/3 p-4 border-x-solid border-x-2 border-x-white uppercase font-semibold hover:bg-gray-400"
                >Blog
            </Link>
            <Link
                to = "/forecast"
                className = "text-white text-center w-1/3 p-4 uppercase font-semibold hover:bg-gray-400"
                >Forecast
           </Link>
        </nav>
    )
}

export default MenuHorizontal;