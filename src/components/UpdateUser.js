import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
let UpdateUser = () =>
{
    let location = useLocation();
    let findId = location.state.id;
    let [userTemp , setUser] = useState({
        id : '',
        first_name : '',
        last_name : '',
        email: ' '

    }); 

 useEffect(()=>{
    UserService.finduser(location.state.id).then((response)=>{
     setUser(response.data);
    }, ()=>{});
 }, []);   
    let navigate = useNavigate();
    let [id, setId] = useState('');
    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');
    let [email, setEmail] = useState('');

   
    let handleFirstName = (e) => { setFirstName(e.target.value)}
    let handleLastName = (e) => { setLastName(e.target.value)}
    let handleEmail = (e) => { setEmail(e.target.value)}

    let handleSubmit = (e) => {
       e.preventDefault();
       
       let user = {id : location.state.id, first_name : first_name, last_name : last_name, email: email }
    //    alert(JSON.stringify(user))
    UserService.addUser(user).then(()=>{
        alert("User has been updated successfully!")
        navigate({pathname : '/'});
    }, ()=>{
        alert("User creation failed")

    });
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                ID: <input type="text" value={id} className="form-control" placeholder={userTemp.id} disabled/>
                First Name: <input onChange={handleFirstName} type="text" value={first_name} className="form-control" placeholder={userTemp.first_name}/>
                Last Name: <input onChange={handleLastName} type="text" value={last_name} className="form-control" placeholder={userTemp.last_name}/>
                Email: <input onChange={handleEmail} type="text" value={email} className="form-control" placeholder={userTemp.email}/>
                
                <input type="submit" value="Submit" className="form-control bg-success"/>


            </label>
        </form>

        </>
    );
}
export default UpdateUser;