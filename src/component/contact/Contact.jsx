
import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";


const Contact = () => {
    const users=useLoaderData()

    return (
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
            {
                users.map(user=><SingleData key={user.id} user1={user}></SingleData>)
            }
        </div>
    );
};

export default Contact;