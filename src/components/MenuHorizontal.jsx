import { useState } from "react";

function MenuHorizontal(){
    const [seccion, setSeccion] = useState("");
    

    return (
        <div className = "bg-black bg-opacity-40">
            <button 
                className = "text-white w-1/3 p-4 uppercase font-semibold hover:bg-gray-400 "
                //onClick = { setSeccion("aboutme") }
                >About me
            </button>
            <button 
                className = "text-white w-1/3 p-4 border-x-solid border-x-2 border-x-white uppercase font-semibold hover:bg-gray-400"
                //onClick = { setSeccion("post") }
                >Post
            </button>
            <button 
                className = "text-white w-1/3 p-4 uppercase font-semibold hover:bg-gray-400"
              //  onClick = { setSeccion("forecast") }
                >Forecast
           </button>
        </div>
    )
}

export default MenuHorizontal;