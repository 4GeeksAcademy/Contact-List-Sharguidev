import React from "react";


export const ContactCard = () => {
    return (
        <div className="card-container d-flex justify-content-center">

            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pravatar.cc/250" style={{ width: "200px" }} className="img-fluid rounded-circle mt-3 ms-2" alt="PacoelPaco" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className="card-text">Guillermo Obando</h5>
                                <div className="ms-auto ">
                                    <button className="btn btn-outline-info me-2">📝</button>
                                    <button className="btn btn-outline-danger ">🗑️</button>
                                </div>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📍</p>
                                <p className="card-text">Alajuela, Costa Rica</p>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📞</p>
                                <p className="card-text">+506 1234 5678</p>
                            </div>
                            <div className="d-flex">
                                <p className="card-text">📧</p>
                                <p className="card-text">Guille@4geeks.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}