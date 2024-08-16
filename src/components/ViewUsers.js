import React, { useEffect, useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
let ViewUsers = () =>{
    let [state, setState] = useState({
        users: []
    });

    useEffect(()=>{
        UserService.getAllUsers().then((response)=>{
             setState({
                users: response.data
            });
    }, ()=>{});
   },[]); 
   console.log(JSON.stringify(state.users))
   let navigate = useNavigate();

   let handleAddUser = () =>{
    navigate({pathname: '/adduser'})

   }
   let handleUpdate = (id) =>{
    navigate('/updateuser', {state : {id}});

   }
   let handleDelete = (id) => {
    navigate('/deleteuser', {state : {id}});
    
   }

    return(
        <>
        <table className="table table-striped text-center">
            <thead className="bg-success">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {
                    state.users.map((user, i)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>

                                <td>
                                    <button className="btn btn-warning" onClick={()=>{handleUpdate(user.id)}}>Update</button>
                                    <button className="btn btn-info" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
        <button className="btn btn-success form-control" onClick={handleAddUser}>Add User</button>
        </>
    );
}
export default ViewUsers;