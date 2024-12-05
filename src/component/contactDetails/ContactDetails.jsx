import { useLoaderData } from "react-router-dom";


const ContactDetails = () => {
    const userId= useLoaderData()
    return (
        <div>
            <h1>{userId.name}</h1>
        </div>
    );
};

export default ContactDetails;