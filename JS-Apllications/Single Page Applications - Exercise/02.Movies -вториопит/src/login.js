import { postData } from "./api/getData.js";
import { homeSection } from "./home.js";
import { helloEmail, logoutBtn } from "./nav.js";
import { setLocalUserData, showView } from "./utils.js";

const loginSection = document.querySelector("#form-login");

const form = loginSection.querySelector("#login-form");

form.addEventListener("submit",async (e) => {
    e.preventDefault()
    const {email,password} = Object.fromEntries(new FormData(form))
    try {
        const {accessToken,_id} = await postData("/users/login","POST",{email,password},true)
        if(email===""||password.length<6||!accessToken){
            throw new Error("Invalid inputs!")
        }
        setLocalUserData({email,password,accessToken,_id})
        showView(homeSection,[helloEmail,logoutBtn])
        form.reset() 
    } catch (error) {
        console.log(error);
        alert(error)
    }
})

export{
    loginSection
}