import { html,render } from"./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
const container = document.querySelector("#towns");
document.querySelector("button").addEventListener("click",search);

function renderTownList(towns){
   render(townListTemplate(towns),container)
}

const townListTemplate = (towns)=> html`
<ul>
   ${towns.map((town)=>html`<li id="${town}">${town}</li>`)}
</ul>
`

const searchTown = (towns,text)=>{
   return towns.filter(town=>{
      if(town.includes(text)){
         const townMatch = document.getElementById(`${town}`);
         townMatch.setAttribute("class","active");
         return town;
      }
   })
}

function search() {
   const searchField = document.querySelector("#searchText");
   const text = searchField.value;
   const matches = searchTown(towns,text)
   const resultHTML = document.querySelector("#result");
   resultHTML.textContent = `${matches.length} matches found`
}

renderTownList(towns);
