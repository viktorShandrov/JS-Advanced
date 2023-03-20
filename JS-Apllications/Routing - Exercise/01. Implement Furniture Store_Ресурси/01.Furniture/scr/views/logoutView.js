import page from "../../node_modules/page/page.mjs"
import { get } from "../api/api.js";
import { endpointsAPI, endpointsVIEW } from "../app.js";
import { updateNav } from "../helpers/nav.js";
import { deleteUserData } from "../helpers/userData.js";

export async function logoutView(){
    await get(endpointsAPI.logout);
    deleteUserData();
    page.redirect(endpointsVIEW.login);
}