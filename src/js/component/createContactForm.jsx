import React from "react";
import { Link } from "react-router-dom";

const CreateContactForm = () => {
    return (
        <div className="container py-5 mt-5" style={{ maxWidth: "400px", Height: "500px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <h1 className="mb-4">Create new contact</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder="guillermo Obando" />
                <label >Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control " placeholder="name@example.com" />
                <label >Email Adress</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder="name@example.com" />
                <label >Adress</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="Password" />
                <label >Number</label>
            </div>
            <div className="btn btn-success mt-4 w-100 mb-4">Save</div>
            <Link to="/" className="text-decoration-none d-flex justify-content-center"> Or go to contacts</Link>
        </div>
    );

};

export default CreateContactForm;