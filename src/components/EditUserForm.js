import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";

function EditUserForm({ userData, deleteUser, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.name);
  const [studentIdNumber, setStudentIdNumber] = useState(userData.studentIdNumber);
  const [project, setProject] = useState(userData.project);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditUser({ id: userData.id, name, studentIdNumber, project }));
    setName("");
    setStudentIdNumber("");
    setProject("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Id Number</Form.Label>
        <Form.Control
          type="phoneNumber"
          placeholder="Enter Student Id Number"
          value={studentIdNumber}
          onChange={(e) => {
            setStudentIdNumber(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="location"
          placeholder="Enter Project Name"
          value={project}
          onChange={(e) => {
            setProject(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditUserForm;
