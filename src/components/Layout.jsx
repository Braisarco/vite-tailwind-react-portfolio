import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuHorizontal from "./MenuHorizontal";

function Layout (){
    return(
        <div>
            <Header/>
            <MenuHorizontal/>
            <Outlet/>
        </div>
    )
}

export default Layout;