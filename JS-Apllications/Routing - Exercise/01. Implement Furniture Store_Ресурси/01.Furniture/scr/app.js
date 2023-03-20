import { get } from "./api/api.js"
import { getUserData } from "./helpers/userData.js"
import page from "../node_modules/page/page.mjs"
import { catalogView } from "./views/catalogView.js"
import { createView } from "./views/createView.js"
import { detailsView } from "./views/detailsView.js"
import { editView } from "./views/editView.js"
import { loginView } from "./views/loginView.js"
import { logoutView } from "./views/logoutView.js"
import { myFurnitureView, myFurnitureViewRedirect } from "./views/myFurniterView.js"
import { registerView } from "./views/registerView.js"
import {render,html} from "../../node_modules/lit-html/lit-html.js"
import { updateNav } from "./helpers/nav.js"
import { getMainSection } from "./helpers/sections.js"

export const endpointsAPI = {
    login:"/users/login",
    register:"/users/register",
    logout:"/users/logout",
    catalog:"/data/catalog",
    logout:"/users/logout"
}
export const endpointsVIEW = {
    login:"/login",
    register:"/register",
    logout:"/logout",
}




updateNav();



function middleware(ctx,next){
    updateNav();
    ctx.render = (template) =>render(template,getMainSection())
    next();
}
page(middleware);
page("/"||"",catalogView);
page("/create",createView);
page("/login",loginView);
page("/register",registerView);
page("/details/:id",detailsView);
page("/edit/:id",editView);
page("/my-publication",myFurnitureViewRedirect);
page("/my-publication/:id",myFurnitureView);
page("/logout",logoutView);
page.start();



