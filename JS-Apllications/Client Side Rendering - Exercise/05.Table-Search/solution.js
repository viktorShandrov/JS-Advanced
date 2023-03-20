import { html,render } from"./node_modules/lit-html/lit-html.js";
const input = document.querySelector("#searchField");
document.querySelector("#searchBtn").addEventListener("click",()=>onClick(input.value));
const tableBody = document.querySelector("tbody");
function onClick(text){
   for (const tr of tableBody.children) {
      if(tr.textContent.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&text!=""){
         tr.setAttribute("class","select")
      }else{
         tr.removeAttribute("class")
      }
   }
   input.value=""
}



const tableRowTemplate = (user)=>html`
<tr>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.course}</td>
               </tr>
               `


async function renderTable() {
   const users = Object.values(await getData());
   render(users.map(tableRowTemplate),tableBody)
}


async function getData(){
   const response = await fetch("http://localhost:3030/jsonstore/advanced/table");
   return await response.json();
}


renderTable()