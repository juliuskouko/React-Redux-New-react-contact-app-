import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    {
      name: "Computer Science",
      studentIdNumber: "#345678",
      project: "React ",
      id: uuidv4(),
    },
    {
      name: "UI/UX Design",
      studentIdNumber: "#00987654",
      project: "Firebase",
      id: uuidv4()
    },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };
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
