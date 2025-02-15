import React from "react";
import axios from 'axios';
const getAllUsersUrl = "http://localhost:8080/getallusers";
const findUserUrl = "http://localhost:8080/getuser/";
const addUserUrl = "http://localhost:8080/saveuser";
const updtateUserUrl = "http://localhost:8080/updateuser";
const deleteUserUrl = "http://localhost:8080/deleteuser/";


class UserService{


    getAllUsers(){
     return axios.get(getAllUsersUrl);
    }
    finduser(id){
        return axios.get(findUserUrl+id);
    }
    addUser(user){

        return axios.post(addUserUrl, user) 
    }
    updateUser(){

    }
    deleteUser(id){
        return axios.delete(deleteUserUrl+id)

    }

}
export default new UserService();