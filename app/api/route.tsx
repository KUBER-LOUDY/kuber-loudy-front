import axios from "axios";
import { Session } from "inspector";

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
        return response;
    }catch(error){
        console.log(error)
    }
  
}

export async function createIam(data : object){
    try{
        const response = await axios.post("http://localhost:8080/iam",data);
        return response;
    }catch(error){
        console.log(error)
    }
}

export async function getIamList() {
    try{
        const response = await axios.get("http://localhost:8080/iam");
        return response;
    }catch(error){
        console.log(error)
    }
    
}

export async function registIam(data:object){
    try{
        const response = await axios.post("http://ec2-15-165-138-102.ap-northeast-2.compute.amazonaws.com/iam/regist",data);
        return response;

    }catch(error){
        console.log(error)
    }
}

export async function getVPC(profile:string) {
    try{
        const response = await axios.post("http://ec2-15-165-138-102.ap-northeast-2.compute.amazonaws.com/vpc",profile);
        return response;
    }catch(error){
        console.log(error)
    }
    
}

export async function cretaeEc2(profile:string) {
    try{
        const response = await axios.post("http://ec2-15-165-138-102.ap-northeast-2.compute.amazonaws.com/ec2/start",profile);
        return response;
    }catch(error){
        console.log(error)
    }
    
}