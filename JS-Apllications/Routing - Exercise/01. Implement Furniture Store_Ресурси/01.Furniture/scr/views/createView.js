import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { post } from "../api/api.js"
import { updateNav } from "../helpers/nav.js";
import { setUserData } from "../helpers/userData.js";
import page from "../../node_modules/page/page.mjs"
import { checkFields } from "../helpers/checking.js";


async function onSubmit(e){
    e.preventDefault();
    const {problematics,data} = checkFields(e);
    if(problematics.length===0){
        const response =  await post("/data/catalog",data);
        page.redirect("/");
    }else{
        render(createViewTemplate(problematics),document.querySelector("main"))
    }
 }

const createViewTemplate=(problematics)=>html`
<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit="${onSubmit}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${problematics.includes("make")?"is-invalid":"is-valid"}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${problematics.includes("model")?"is-invalid":"is-valid"}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${problematics.includes("year")?"is-invalid":"is-valid"}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${problematics.includes("description")?"is-invalid":"is-valid"}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${problematics.includes("price")?"is-invalid":"is-valid"}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${problematics.includes("img")?"is-invalid":"is-valid"}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    </div>
`


export async function createView(ctx){
    ctx.render(createViewTemplate([]))
}