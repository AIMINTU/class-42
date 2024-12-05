import { Link } from "react-router-dom";


const SingleData = ({user1}) => {
    
    const {id,name,phone,username}=user1
    return (
        <div style={{border:'2px solid black', borderRadius:'10px'}}>
            <h3>Name:{name}</h3>
            <p>UserName:{username}</p>
            <p>Telephone:{phone}</p>
            <Link to={`/contact/${id}`}>Details</Link>
        </div>
    );
};

export default SingleData;