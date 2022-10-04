import { connect, useSelector } from "react-redux";
import User from "./User";

function AllUsers({ deleteUser, handleEdit }) {
  const { users } = useSelector((store) => store);
  return (
    <>
      <div className="container" style={{marginTop: "1.2em"}}>
        <div className="row">
          {users.map((item, index) => {
            return (
              <User
                key={index}
                userData={item}
                deleteUser={deleteUser}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
// const mapState = (state) => {
//   return {
//     users: state.users,
//   };
// };

// export default connect(mapState)(AllUsers);

export default AllUsers;
