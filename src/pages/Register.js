import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
// import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handle = async(e) => {
    e.preventDefault();

    try{
      const user = await createUserWithEmailAndPassword(auth,email,password);
      navigate("/login", {replace: true});
      console.log(user);
    }catch(e) {
      console.log(e)
    };

    setEmail("");
    setPassword("");
  }
  
  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <h2>Register Here</h2>
              <br/>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  value={email}
                  placeholder="Enter email" 
                  onChange={ (e)=> {
                    setEmail(e.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  value={password}
                  placeholder="Password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }} 
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handle}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
