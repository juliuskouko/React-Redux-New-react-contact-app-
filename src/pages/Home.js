import React from "react";
import AllUsers from "../components/AllUsers";
import AddUserForm from "../components/AddUserForm";
import { auth } from "../firebase/config";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";

function Home() {
 
  // const logout = async(e) => {

  //   try {
  //     const loggingOut = await signOut(auth)
  //     }catch(e) {
  //     console.log(e)
  //   }
  // } 

  const logout = async(e)=> {
    e.preventDefault()
    try {signOut(auth)}catch(e) {
        console.log(e)
      }
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddUserForm
            // addUser={handleSubmit}
            />
          </div>
          <div className="col-md-6">
            <AllUsers
            //   userData={users}
            //   deleteUser={deleteUser}
            //   handleEdit={handleEdit}
            />
          </div>

          <Button
            variant="danger"
            onClick={logout}
            style={{ marginTop: "3em" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
