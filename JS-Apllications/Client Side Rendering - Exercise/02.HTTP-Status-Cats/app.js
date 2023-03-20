import { html,render } from"./node_modules/lit-html/lit-html.js";
import {cats} from "./catSeeder.js"
function renderList(data){
    const container = document.querySelector("#allCats")
    render(listTemplate(data),container)
}


const cardTemplate = (data)=> html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${onClick}>Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${data.statusCode}</h4>
                        <p>${data.statusMessage}</p>
                    </div>
                </div>
            </li>
 `

const listTemplate = (data)=>html`
<ul>
    ${data.map(cardTemplate)}
</ul>
`
function onClick(e){
    e.preventDefault();
    const catNode = e.target.parentNode;
    const display =  catNode.querySelector(".status").style.display;
    if(display==="block"){
        catNode.querySelector(".showBtn").textContent = "Show status code";
        catNode.querySelector(".status").style.display = "none";
    }else{
        catNode.querySelector(".showBtn").textContent = "Hide status code";
        catNode.querySelector(".status").style.display = "block";
    }
}

renderList(cats)