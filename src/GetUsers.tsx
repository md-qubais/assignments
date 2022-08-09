import {useState,useEffect} from "react"
import axios from "axios";
function GetUsers(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        // axios.get('get_backend_url').then((allUsers)=>{
        //     setUsers(allUsers)
        // })
    })
    return <>
    <h1>below are the users</h1>
    {users.map((user,id)=>{
        <div>
            {/* {user.name}
            {user.age}
            {user.designation} */}
        </div>
    })}
    </>
}

export default GetUsers;
