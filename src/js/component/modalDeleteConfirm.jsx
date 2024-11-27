import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ModalDeleteConfirm = () => {

    const [show, setShow] = useState(false);
    const { actions, store } = useContext(Context);


    const eliminarContacto = ({ contacts }) => {

        actions.deleteContact(contacts.id)
    }

    return (
        <>
            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShow(true)}>
                🗑️
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this contact, you won't be able to recover it</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-info" data-bs-dismiss="modal" onClick={() => setShow(false)}>Close</button>
                            <button type="button" className="btn btn-outline-danger" onClick={() => {
                                setShow(false);
                                eliminarContacto;
                            }}>Delete</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ModalDeleteConfirm;