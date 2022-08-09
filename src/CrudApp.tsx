import { Link } from "react-router-dom";
function CrudApp() {
  return (
    <div>
      <div>
        <Link to="/createUser">Create User</Link>
      </div>
      <div>
        <Link to="/updateUser">Update User</Link>
      </div>
      <div>
        <Link to="/deleteUser">Delete User</Link>
      </div>
      <div>
        <Link to="/getUsers">Get Users</Link>
      </div>
    </div>
  );
}

export default CrudApp;
