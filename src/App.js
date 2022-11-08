import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../src/firebase/config";
import { useDispatch } from "react-redux";
import { AddNewUser } from "./actions/userActions";
import Routing from "./Routing";
import { newloginUser } from "./actions/authAction";
import { onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";

function App({}) {
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

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user)=> {
  //     if (user) dispatch(newloginUser(user));
  //     else {
  //       dispatch(newloginUser(null));
  //     }
  //     // this is connect
  //     // if (user) props.newloginUser(user)
  //     // else props.newloginUser(null)
  //   });
  // }),[];

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
    
      if(user)dispatch(newloginUser());
      else {dispatch(newloginUser(null));}

    })
  })

  // useEffect(() => {
	// 	auth.onAuthStateChanged((user) => {
	// 		if (user) {
	// 			dispatch(newloginUser(user));
	// 		} else {
	// 			dispatch(newloginUser(null));
	// 		}
	// 		console.log(user);
	// 	});
	// }, []);

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
      <Routing />
    </>
  );
}
const mapDispatchToProps = {
  newloginUser: newloginUser,
};

export default connect(null, mapDispatchToProps)(App);
