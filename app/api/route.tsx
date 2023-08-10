import axios from "axios";

const instance = axios.create({
    baseURL:"",
    timeout:3000,
    headers:{
        "Content-Type": "application/json",
        "charset": "utf8",
        "Accept": "*/*",
        "Connection": "keep-alive"
    }
});

export async function login(data: object) {
    try{
        const response = await axios.post("http://localhost:8080/members/login",data)
        console.log(response)
        
        return response;
    }
    catch(error){
    console.error(error)
  }
}

export async function signIn(data: object) {
    try{
        const response = await axios.post("http://localhost:8080/members",data);
    }catch(error){
        console.log(error)
    }
  
}