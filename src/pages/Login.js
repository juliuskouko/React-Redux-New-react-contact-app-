import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handle = async(e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };

  const google = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };
  
  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <h2>Login Here</h2>
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
                Login
              </Button>
              <Button variant="primary" type="submit" onClick={google}  style={{marginLeft: "3em"}}>
                Login with Google Account
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Login