 import {html} from "../../node_modules/lit-html/lit-html.js"
 import { post } from "../api/api.js"
import { updateNav } from "../helpers/nav.js";
import { setUserData } from "../helpers/userData.js";
import page from "../../node_modules/page/page.mjs"
import { endpointsAPI } from "../app.js";


async function onSubmit(e){
    e.preventDefault();
    const {email,password,rePass} = Object.fromEntries(new FormData(e.target))
    if(email===""||password===""||password!==rePass){
        return alert("Invalid inputs!")
    }
    const response =  await post(endpointsAPI.register,{email,password});
    
    setUserData({email:response.email,password:response.password,accessToken:response.accessToken,id:response._id})
    page.redirect("/");
 }

    const registerViewTemplate=()=>html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit="${onSubmit}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
    `
 export async function registerView(ctx){
    ctx.render(registerViewTemplate())
}