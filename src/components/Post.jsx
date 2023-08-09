import showmore from "../resources/icons/show_more.png"
import like from "../resources/icons/like.png"
import showless from "../resources/icons/show_less.png"
import { useState } from "react";

function Post (){
    const [expanded, setExpanded] = useState(false);

    return(
        <div className = "flex items-center justify-between bg-black border-solid border-purple-600 border-2 h-32 my-16 mx-20 rounded-xl shadow-md p-5">
            <div className = "">
                <span className = "text-white text-left text-2xl uppercase font-semibold">Aqui vai a ser o titulo</span>
            </div>
            <div className = "flex">
                <button className = "mx-5"><img className = "w-10 h-10" src = {like}/></button>
                <button className = "mx-5"><img className = "w-10 h-10" src={showmore}/></button>
            </div>
        </div>
    )
}

export default Post;