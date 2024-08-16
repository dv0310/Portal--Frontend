import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
let DeleteUser = () =>
{
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(()=>{
        UserService.deleteUser(location.state.id).then((response)=>{
            alert("user ID" + location.state.id + "has been deleted successfully!")
            navigate({pathname: "/"})
        }, ()=>{});
    }, []);
    return(
        <>
       
        </>
    );
}
export default DeleteUser;