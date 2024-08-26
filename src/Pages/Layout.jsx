import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
    return (
        <>
             <Navbar /> {/*   Shared piece of UI  */}
              <Outlet />    {/* actual pages will render */}
        </>
    )
}

export default MainLayout;