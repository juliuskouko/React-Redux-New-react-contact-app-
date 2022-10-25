// import { v4 as uuidv4 } from "uuid";

// let initialState = {
//   users: [
    
//   ],
// };

// let UsersReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_NEW_USER":
//       return { ...state, users: action.payload };
//     case "DELETE_USER":
//       const tempUser = state.users.filter((user) => user.id !== action.payload);
//       return { ...state, users: tempUser };
//     case "EDIT_USER":
//       const temp = state.users.map((item) => {
//         if (item.id === action.payload.data.id) {
//           return action.payload.data;
//         } else {
//           return item;
//         }
//       });
//       return { ...state, users: temp };
//     default:
//       return state;
//   }
// };

// export default UsersReducers;


// import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: action.payload };
    case "DELETE_USER":
      const tempUser = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: tempUser };
    case "EDIT_USER":
      const temp = state.users.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, users: temp };
    default:
      return state;
  }
};

export default UsersReducers;