import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: "",
    designation: "",
  });

  const handleSubmit = async () => {
    // let resp = await axios.post("/backend_url", user);
    navigate('/')
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        type="text"
        placeholder="enter your name"
      />

      <input
        onChange={(e) => {
          setUser({ ...user, age: e.target.value });
        }}
        type="text"
        placeholder="enter your age"
      />
      <input
        onChange={(e) => {
          setUser({ ...user, designation: e.target.value });
        }}
        type="text"
        placeholder="enter your designation"
      />

      <button onClick={handleSubmit}>Create user</button>
    </div>
  );
}

export default CreateUser;
