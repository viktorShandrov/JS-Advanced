import { getUserDataFromLocal } from "../utils.js";

async function getData(url){
const response = await fetch(`http://localhost:3030/data${url}`);

return  response.json()
}


async function postData(url,method,body,isLoginOrRegister){
    const options = {
        method,
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(body)
    }
    if(!isLoginOrRegister){
        options.headers["X-Authorization"]= getUserDataFromLocal().accessToken
    }
    const response = await fetch(`http://localhost:3030${url}`,options);

    return  response.json()
}

export{
    getData,
    postData
}