import showmore from "../resources/icons/show_more.png"
import like from "../resources/icons/like.png"
import showless from "../resources/icons/show_less.png"
import { useState } from "react";

function Post (){
    const [expanded, setExpanded] = useState(false);

    const toggle = () =>{
        setExpanded(!expanded);
        console.log(expanded)
    }

    return(
        <div className = " bg-black border-solid border-purple-600 border-2 my-16 mx-20 rounded-xl shadow-md p-5">
            <div className="flex items-center justify-between">
                <div className = "">
                    <span className = "text-white text-left text-2xl uppercase font-semibold">Aqui vai a ser o titulo</span>
                </div>
                <div className = "flex">
                    <button className = "mx-5"><img className = "w-10 h-10" src = {like}/></button>
                    <button className = "mx-5" onClick={toggle}><img className = "w-10 h-10" src={showmore}/></button>
                </div>
            </div>
            <div className = "mt-5">
                {expanded?(
                        <div>
                            <p className = "text-white">
                                Aqui iria o resto do post supoño<br/><br/><br/><br/>e asi como vai o tamaño
                            </p>
                        </div>
                    ) : console.log("not expanded")}
            </div>
            
            
        </div>
    )
}

export default Post;