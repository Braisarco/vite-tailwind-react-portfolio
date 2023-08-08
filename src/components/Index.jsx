import fotoBrais from '../fotoBrais.jpeg'

function Index (){
    return(
        <div className = "flex items-center w-full mt-32">
            <div className="w-1/2 ">
                <img className=" rounded-full w-96 ml-48" src={fotoBrais}/>
            </div>

            <div className="w-1/2 text-left">
                <p className = " text-white text-8xl font-bold">
                    Hello, welcome<br/> to my <span className = "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Portfolio</span>
                </p>
            </div>
                
        </div>
    )
}

export default Index;