import { Link } from "react-router-dom";

function Header(){


    return (
        <div className = "flex w-full bg-black bg-opacity-40 border-b-solid border-b-2 border-white"> 
            <div className = "w-2/5 p-8 text-center">
                <nav>
                    <Link to="/" className = " font-bold text-5xl text-purple-500">
                        Brais Pérez {' '}
                        <span className = "text-blue-500">Portfolio</span>
                    </Link> 
                </nav>
            </div>
            
            <div>

            </div>
        </div>
    )
}

export default Header;