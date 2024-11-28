import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import { func } from "prop-types";
import { toast } from 'react-hot-toast';

export const EditContactForm = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();//obtener el id del contacto

    const [contact, setContact] = useState("");


    const editContact = async (event) => {
        event.preventDefault();

        const payload = {
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            address: contact.address
        };

        console.log(payload);


        await actions.updateContact(payload, id);
        navigate("/");

    }




    return (
        <div className="container py-5 mt-5" style={{ maxWidth: "400px", Height: "500px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <h1 className="mb-4">Update Contact {id}</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder="Nombre" onChange={(e) => setContact(e.target.value)} required />
                <label >Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control " placeholder="" onChange={(e) => setContact(e.target.value)} />
                <label >Email Adress</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder="" onChange={(e) => setContact(e.target.value)} />
                <label >Adress</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="" onChange={(e) => setContact(e.target.value)} />
                <label >Number</label>
            </div>
            <div className="btn btn-success mt-4 w-100 mb-4" onClick={editContact} >Update Contact</div>
            <Link to="/" className="text-decoration-none d-flex justify-content-center"> Or go to contacts</Link>
        </div>
    );

};

