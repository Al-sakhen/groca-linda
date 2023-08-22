import { Outlet } from "react-router-dom"; // Outlet is used to render child routes
import Navbar from "./Navbar";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <div >
                <Outlet />
            </div>
        </>
    );
};

export default AppLayout;
