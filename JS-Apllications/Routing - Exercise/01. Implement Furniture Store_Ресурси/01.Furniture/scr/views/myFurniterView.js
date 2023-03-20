import {html} from "../../node_modules/lit-html/lit-html.js"
import { get, post } from "../api/api.js"
import { updateNav } from "../helpers/nav.js";
import { getUserID, setUserData } from "../helpers/userData.js";
import page from "../../node_modules/page/page.mjs"
import { endpointsAPI, endpointsVIEW } from "../app.js";


const furnitureCard=(specificFurniture)=>html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${specificFurniture.img}" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>${specificFurniture.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${specificFurniture._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`


const myFurnituretemplate=(furniture)=>html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furniture.map(furnitureCard)}
        </div>
    </div>
`
export async function myFurnitureViewRedirect(ctx){
    if(getUserID()){
        page.redirect(`/my-publication/${getUserID()}`)
    }else{
        page.redirect(endpointsVIEW.login)
    }
}

export async function myFurnitureView(ctx){
    const furniture = [...await get(endpointsAPI.catalog)].filter((el)=>el._ownerId===getUserID());
    console.log(furniture);
    
    ctx.render(myFurnituretemplate(furniture))
}

