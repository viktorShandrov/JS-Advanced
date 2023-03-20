import { endpointsAPI } from "../app.js";
import { getUserData } from "../helpers/userData.js";

async function request(method,url,data){
    const host = "http://localhost:3030"
    const options = {
        method,
        headers : {}
    }
    if(data){
        options.headers["Content-type"] = "application/json";
        options.body = JSON.stringify(data);
    }
    if(getUserData()){
        options.headers["X-Authorization"] = getUserData().accessToken;  
    }
    const response = await fetch(host+url,options);
    if(!response.ok){
        alert("Problem with request");
        throw new Error("Problem with request");
    }
    if(url!==endpointsAPI.logout){
        return response.json();
    }
}


const methods ={
    GET:"GET",
    POST:"POST",
    DELETE:"DELETE",
    PUT:"PUT"
}

export const get = request.bind(null,methods.GET);
export const post = request.bind(null,methods.POST);
export const del = request.bind(null,methods.DELETE);
export const put = request.bind(null,methods.PUT);

