import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../actions/userActions";

function User({ userData, deleteUser, handleEdit }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    dispatch(DeleteUser(userData.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            handleEdit={handleEdit}
            hide={handleClose}
            userData={userData}
          />
        </Modal.Body>
      </Modal>
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name: {userData.name}</h5>
          <h5 className="card-title">Student Id Number: {userData.studentidnumber}</h5>
          <h5 className="card-text">Project: {userData.project}</h5>
          <button
            className="btn btn-primary mr-3"
            onClick={handleShow}
          
          >
            Modify
          </button>
          <button
            className="btn btn-primary mr-3"
            onClick={handleDelete}
            
            style={{marginLeft: "1em"}}
          >
            Erase
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
