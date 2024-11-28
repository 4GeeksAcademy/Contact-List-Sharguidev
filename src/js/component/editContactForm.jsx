import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import { func } from "prop-types";
import { toast } from 'react-hot-toast';

export const EditContactForm = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();//obtener el id del contacto

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function editContact(event) {
        event.preventDefault();
        if (name.trim() === "" || phone.trim() === "" || email.trim() === "" || address.trim() === "") {
            toast.error("All fields are required ⛔");
            return null;
        }

        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };


        actions.updateContact(payload, id);


        navigate("/");
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
    }

    useEffect(() => {
        if (id && store.contactList.length > 0) {
            const contact = store.contactList.find(contact => contact.id === id);
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
            setAddress(contact.address);
        }
    }, [id, store.contactList]);







    return (
        <div className="container py-5 mt-5" style={{ maxWidth: "400px", Height: "500px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <h1 className="mb-4">Update Contact</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder={name} onChange={(e) => setName(e.target.value)} value={name} required />
                <label >Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control " placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                <label >Email Adress</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control " placeholder={address} onChange={(e) => setAddress(e.target.value)} />
                <label >Adress</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
                <label >Number</label>
            </div>
            <div className="btn btn-success mt-4 w-100 mb-4" onClick={editContact} >Update Contact</div>
            <Link to="/" className="text-decoration-none d-flex justify-content-center"> Or go to contacts</Link>
        </div>
    );

};

