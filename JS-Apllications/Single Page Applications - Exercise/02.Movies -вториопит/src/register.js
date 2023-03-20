import { postData } from "./api/getData.js";
import { homeSection } from "./home.js";
import { helloEmail, logoutBtn } from "./nav.js";
import { setLocalUserData, showView } from "./utils.js";

const registerSection = document.querySelector("#form-sign-up");

const form = registerSection.querySelector("#register-form");

form.addEventListener("submit",async (e) => {
    e.preventDefault()
    console.log(1);
    const {email,password,repeatPassword} = Object.fromEntries(new FormData(form))
    try {
        if(email===""||password.length<6||password!==repeatPassword){
            throw new Error("Invalid inputs!")
        }
        const {accessToken,_id} = await postData("/users/register","POST",{email,password},true)

        setLocalUserData({email,password,accessToken,_id})
        showView(homeSection,[helloEmail,logoutBtn])
        form.reset() 

    } catch (error) {
        console.log(error);
        alert(error)
    }
})




export {
    registerSection
}