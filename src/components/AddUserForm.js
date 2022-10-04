import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [studentidnumber, setStudentIdNumber] = useState("");
  const [project, setProject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewUser({ name, studentidnumber,project, id: uuidv4() });
    setName("");
    setStudentIdNumber("");
    setProject("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Course Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          placeholder="Enter Course Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student ID Number</Form.Label>
        <Form.Control
          type="number"
          value={studentidnumber}
          placeholder="Enter Student ID Number"
          onChange={(e) => {
            setStudentIdNumber(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          value={project}
          placeholder="Enter Project Name"
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
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);