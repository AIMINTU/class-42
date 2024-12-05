import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer/Footer";



const Home = () => {

    return (
        <div>
            this is home component
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
    


export default Home;