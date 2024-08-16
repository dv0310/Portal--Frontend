import React, { useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
let AddUser = () =>
{
    let navigate = useNavigate();
    let [id, setId] = useState('');
    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');
    let [email, setEmail] = useState('');

    let handleId = (e) => { setId(e.target.value)}
    let handleFirstName = (e) => { setFirstName(e.target.value)}
    let handleLastName = (e) => { setLastName(e.target.value)}
    let handleEmail = (e) => { setEmail(e.target.value)}

    let handleSubmit = (e) => {
       e.preventDefault();
       
       let user = {id : id, first_name : first_name, last_name : last_name, email: email }
    //    alert(JSON.stringify(user))
    UserService.addUser(user).then(()=>{
        alert("User has been created successfully!")
        navigate({pathname : '/'});
    }, ()=>{
        alert("User creation failed")

    });
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                ID: <input onChange={handleId} type="text" value={id} className="form-control"/>
                First Name: <input onChange={handleFirstName} type="text" value={first_name} className="form-control"/>
                Last Name: <input onChange={handleLastName} type="text" value={last_name} className="form-control"/>
                Email: <input onChange={handleEmail} type="text" value={email} className="form-control"/>
                
                <input type="submit" value="Submit" className="form-control bg-success"/>


            </label>
        </form>

        </>
    );
}
export default AddUser;