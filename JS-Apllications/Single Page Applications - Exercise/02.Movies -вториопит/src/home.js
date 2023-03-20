import { createSection } from "./create.js";
import { showView } from "./utils.js";

const homeSection = document.querySelector("#home-page");

const addMovieBtn = [...document.querySelectorAll("a")].find(el=>el.classList.contains("btn"))
addMovieBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    showView(createSection)
})

export{
    homeSection,
    addMovieBtn
}


