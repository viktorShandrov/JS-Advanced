import {html} from "../../node_modules/lit-html/lit-html.js"
import { get } from "../api/api.js"
import { endpointsAPI } from "../app.js"

const furnitureCardTemplate=(furniture)=>html`
<div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${furniture.img.includes("http")?furniture.img:`../.${furniture.img}`}" />
                            <p>${furniture.description}</p>
                            <footer>
                                <p>Price: <span>${furniture.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`

const catalogViewTemplate=(allFurniture)=>html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${allFurniture.map(furnitureCardTemplate)}
        </div>
    </div>
`



export async function catalogView(ctx){
   const allFurniture = await get(endpointsAPI.catalog)
    ctx.render(catalogViewTemplate(allFurniture))
}