import { postData } from "./api/getData.js";
import { homeSection } from "./home.js";
import { helloEmail, logoutBtn } from "./nav.js";
import { showView } from "./utils.js";

const createSection = document.querySelector("#add-movie");

const form = createSection.querySelector("#add-movie-form");

form.addEventListener("submit",async (e) => {
    e.preventDefault()
    const {title,description,image} = Object.fromEntries(new FormData(form))
    try {
        if(title==""||description==""||image==""){
            throw new Error("Invalid inputs!")
        }
       await postData("/data/movies","POST",{title,description,img:image})
        showView(homeSection,[helloEmail,logoutBtn])

    } catch (error) {
        alert(error)
    }
})


export{
    createSection
}