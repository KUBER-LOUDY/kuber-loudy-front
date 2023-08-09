import { METHODS, get } from "http";
import { headers } from "next/dist/client/components/headers";

export async function login(data:object) {
    const response = await fetch("http://localhost:8080/members/login",{
        method:"POST",
        mode: "cors",
        cache:"no-cache",
        credentials:"same-origin",
        headers:{
           "Content-Type": "application/json",
           "charset":"utf8"
        },
        redirect:"follow",
        referrerPolicy:"no-referrer",
        body:JSON.stringify(data),
        })
        return response.json;
    }