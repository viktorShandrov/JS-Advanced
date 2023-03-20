export function getUserData(){
    return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(userData){
   localStorage.setItem("userData",JSON.stringify(userData));
}

export function deleteUserData(){
     localStorage.removeItem("userData");
}

export function getUserID(){
    console.log(getUserData().id);
    return getUserData().id;
}