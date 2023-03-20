import { getData, postData } from "./api/getData.js";
import { addMovieBtn, homeSection } from "./home.js";
import { exampleSection } from "./movieExample.js";
import { movieSection } from "./movieView.js";
import { helloEmail, homeBtn, loginBtn, logoutBtn, nav, navBtnsContainer, registerBtn } from "./nav.js";
import {html,render} from "/node_modules/lit-html/lit-html.js"

const body = document.querySelector("body");

async function showView(section){
    body.replaceChildren(nav,section)
    if(getUserDataFromLocal()){
        helloEmail.innerHTML = `<a class="nav-link">Hello, ${getUserDataFromLocal().email}`
        navBtnsContainer.replaceChildren(helloEmail,logoutBtn)
    }else{
        navBtnsContainer.replaceChildren(loginBtn,registerBtn)
    }
    if(section===homeSection){  
        const movies = await getData("/movies");
        const cardHolder = homeSection.querySelector("#movies-list")
        if(getUserDataFromLocal()){
            addMovieBtn.style.display = "inline-block"
        }else{
            addMovieBtn.style.display = "none"
        }
        render(movies.map(createMovieCard),cardHolder)
    }
    
}

function getUserDataFromLocal(){
    return JSON.parse(localStorage.getItem("userInfo")) 
}


function setLocalUserData(user){
localStorage.setItem("userInfo",JSON.stringify(user))
}


const createMovieCard = (movie)=>html`
   <div class="card mb-4">
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body"> 
            <h4 class="card-title">${movie.title}</h4>
        </div>
        ${getUserDataFromLocal()?html`<div class="card-footer">
            <a data-id="${movie._id}" href="#">
                <button type="button" class="btn btn-info" @click=${async()=>{
                    const currMovie = await getMovie(movie._id)     
                    console.log(currMovie._ownerId)
                    console.log(getUserDataFromLocal()._id)
                    if(currMovie._ownerId===getUserDataFromLocal()._id){
                        render(await createMovieDetails(await getMovie(movie._id),true),exampleSection)
                        //showView(exampleSection,movie._id,true)
                    }else{
                        render(await createMovieDetails(await getMovie(movie._id),false),exampleSection)
                        //showView(exampleSection,movie._id,false)
                    }
                    showView(exampleSection)
                    }}>Details</button>
            </a>
        </div>`:null}

    </div>
`

 const createMovieDetails = async (movie,isUserTheCreator,isLiked)=>html`
<div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img class="img-thumbnail" src="${movie.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Desrcription</h3>
              <p>
                ${movie.description}
              </p>
              ${isUserTheCreator?html`
              <a class="btn btn-danger" href="#" @click=${()=>deleteMovie(movie._id)}>Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              `:!isLiked?html`<a class="btn btn-primary" href="#" @click=${async()=>{
                await postData("/data/likes","POST",{movieId:movie._id})
                await getData(`/likes?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${getUserDataFromLocal()._id}%22`);
                render(await createMovieDetails(await getMovie(movie._id),false,true),exampleSection) 
              }
              }>Like</a>`:null}
              <span class="enrolled-span">Liked ${await getData(`/likes?where=movieId%3D%22${movie._id}%22&distinct=_ownerId&count`)}</span>
            </div>
          </div>
        </div>

`


async function getMovie(id){
    const movie =[...await getData("/movies")].find(el=>el._id===id);
    return movie
}


async function deleteMovie(movieId){
    await postData(`/data/movies/${movieId}`,"DELETE",false)
    showView(homeSection)
}

export{
    showView,
    getUserDataFromLocal,
    setLocalUserData,
    deleteMovie
}