import {html} from "../../node_modules/lit-html/lit-html.js"
import { get, post } from "../api/api.js"
import { updateNav } from "../helpers/nav.js";
import { getUserData, setUserData } from "../helpers/userData.js";
import page from "../../node_modules/page/page.mjs"
import { onDeleteClick } from "./deleteView.js";
import { endpointsAPI } from "../app.js";




const detailsViewTemplate = (selectedFurniture)=>html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${selectedFurniture.img.includes("http")?selectedFurniture.img:`../.${selectedFurniture.img}`}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${selectedFurniture.make}</span></p>
                <p>Model: <span>${selectedFurniture.model}</span></p>
                <p>Year: <span>${selectedFurniture.year}</span></p>
                <p>Description: <span>${selectedFurniture.description}</span></p>
                <p>Price: <span>${selectedFurniture.price}</span></p>
                <p>Material: <span>${selectedFurniture.material}</span></p>
                <div>
                    ${getUserData()?selectedFurniture._ownerId===getUserData().id?html`<a href="/edit/${selectedFurniture._id}" class="btn btn-info" id="${selectedFurniture._id}">Edit</a><a href="javascript:void(0)" class="btn btn-red" id="${selectedFurniture._id}">Delete</a>`:null:null}
                </div>
            </div>
        </div>
    </div>
`

async function getDetails(id){
    return await get(`${endpointsAPI.catalog + "/" + id}`);
}

export async function detailsView(ctx){
    const selected = await getDetails(ctx.params.id);
    ctx.render(detailsViewTemplate(selected));
    if(document.querySelector(".btn-red")){
        document.querySelector(".btn-red").addEventListener("click",onDeleteClick);
    }
}


