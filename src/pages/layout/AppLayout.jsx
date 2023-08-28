import { Outlet } from "react-router-dom"; // Outlet is used to render child routes
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <ToastContainer autoClose={1000} closeOnClick={true} />
                <Outlet />
            </div>
        </>
    );
};

export default AppLayout;
