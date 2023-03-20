import { del } from "../api/api.js";
import page from "../../node_modules/page/page.mjs"
import { endpointsAPI } from "../app.js";

export async function onDeleteClick(e){
   e.preventDefault();
   const isConfirmed = confirm("Are you sure you want to delete this item?");
   if(isConfirmed){
    del(`${endpointsAPI.catalog+ "/" + e.target.id}`);
    page.redirect("/");
   }
}