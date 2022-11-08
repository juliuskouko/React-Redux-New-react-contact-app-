import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";
import { doc, setDoc, serverTimestamp} from "firebase/firestore";
// import {
//   collection,
//   addDoc,
  
// } from "firebase/firestore";
import { db } from "../firebase/config";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [studentidnumber, setStudentIdNumber] = useState("");
  const [project, setProject] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // AddNewUser({ name, studentidnumber,project, id: uuidv4() });
    setName("");
    setStudentIdNumber("");
    setProject("");

    const items = {
      name,
      studentidnumber,
      project,
      timestamp: serverTimestamp(),
      id: uuidv4(),
    };

    // await setDoc(doc(db, "users", items.id),items);
    try {
      const docRef = await setDoc(doc(db, "student", items.id), items);
    } catch (e) {
      console.log(e);
    }
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

      <Button onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
}
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);
