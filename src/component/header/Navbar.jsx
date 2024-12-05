import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <h1> This is navbar</h1>
            <div style={{display:'flex',gap:'30px'}}>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/career">Career</Link>
                
            </div>
        
        </div>
    );
};

export default Navbar;