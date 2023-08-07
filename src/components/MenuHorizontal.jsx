import { useState } from "react";

function MenuHorizontal(){
    const [seccion, setSeccion] = useState("");
    

    return (
        <div className = "bg-gray-100">
            <button 
                className = " w-1/3 p-4 uppercase font-semibold hover:bg-gray-400 "
                //onClick = { setSeccion("aboutme") }
                >About me
            </button>
            <button 
                className = "w-1/3 p-4 border-solid border-2 border-x-black uppercase font-semibold hover:bg-gray-400"
                //onClick = { setSeccion("post") }
                >Post
            </button>
            <button 
                className = "w-1/3 p-4 uppercase font-semibold hover:bg-gray-400"
              //  onClick = { setSeccion("forecast") }
                >Forecast
           </button>
        </div>
    )
}

export default MenuHorizontal;