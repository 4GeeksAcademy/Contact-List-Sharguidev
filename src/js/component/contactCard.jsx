import React, { useState, useEffect, useContext } from "react";
import ModalDeleteConfirm from "./modalDeleteConfirm.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContactCard = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContactList()
    }, []);

    const contactsList = store.contactList.map((contact) => (

        <div className="card-container d-flex justify-content-center">

            <div className="card mb-3" style={{ maxWidth: "700px" }} key={contact.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pravatar.cc/250" style={{ width: "200px" }} className="img-fluid rounded-circle mt-3 ms-2" alt="PacoelPaco" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className="card-text">{contact.name}</h5>
                                <div className="ms-auto ">
                                    <div className="btn btn-outline-success me-2"><Link to="/createContactForm" className="text-white text-decoration-none">✏️</Link></div>
                                    <ModalDeleteConfirm />
                                </div>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📍</p>
                                <p className="card-text">{contact.address}</p>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📞</p>
                                <p className="card-text">{contact.phone}</p>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📧</p>
                                <p className="card-text">{contact.email}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container">
            {contactsList}
        </div>
    );


};



