import { homeSection } from "./home.js";
import { loginSection } from "./login.js";
import { registerSection } from "./register.js";
import { getUserDataFromLocal, showView } from "./utils.js";

const nav = document.querySelector("nav");
const navBtnsContainer = nav.querySelector("ul")
const homeBtn = nav.querySelector("a");
const helloEmail = nav.querySelector("#welcome").parentElement;
const logoutBtn = nav.querySelector("#logout").parentElement;
const loginBtn = nav.querySelector("#login").parentElement;
const registerBtn = nav.querySelector("#register").parentElement;



loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    showView(loginSection,[loginBtn,registerBtn])
})

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    showView(registerSection,[loginBtn,registerBtn])
})

logoutBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear();
    showView(loginSection,[loginBtn,registerBtn])
})

homeBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(getUserDataFromLocal()){
        showView(homeSection,[helloEmail,logoutBtn])
    }else{
        showView(homeSection,[loginBtn,registerBtn])
    }
})







export{
    homeBtn,
    nav,
    registerBtn,
    loginBtn,
    logoutBtn,
    helloEmail,
    navBtnsContainer
}