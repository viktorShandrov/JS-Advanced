import { getUserData } from "./userData.js";



export function updateNav(){
    const userNav = document.querySelector("#user");
    const guestNav = document.querySelector("#guest");
    
    if(getUserData()){
        userNav.style.display = "inline-block"; 
        guestNav.style.display = "none"; 
        //const myFutnBtn = document.querySelector("#profileLink");
        // myFutnBtn.addEventListener("click",()=>{
        //     page.redirect
        // })
    }else{
        userNav.style.display = "none"; 
        guestNav.style.display = "inline-block"; 
    }
}