function Playa () {


    return(
        <div className = "bg-gray-600 w-56 h-96 bg-opacity-60 mt-32  rounded-xl shadow-md p-5">
            <div>Nombre playa</div>
            <div className = "flex">
                <p>Weather icon </p>
                <p>Cº</p>
            </div>
            <div>wave height</div>
            <div>wave strength</div>
            <div>tide</div>
        </div>
    )
}

export default Playa;