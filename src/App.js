import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../src/firebase/config";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./actions/userActions";

function App() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async (e) => {
      const q = query(collection(db, "student"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const studentArr = [];
        querySnapshot.forEach((doc) => {
          studentArr.push(doc.data());
        });
        dispatch(AddNewUser(studentArr));
        // console.log(usersArr);
      });
    };
    readData();
  }, []);

  
  const handleSubmit = (user) => {
    setUsers([
      ...users,
      {
        name: user.name,
        studentidnumber: user.studentIdNumber,
        project: user.project,
        id: new Date().getTime().toString(),
      },
    ]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // edit user
  const handleEdit = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddUserForm addUser={handleSubmit} />
          </div>
          <div className="col-md-6">
            <AllUsers
              userData={users}
              deleteUser={deleteUser}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
