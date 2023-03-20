import { html,render } from"./node_modules/lit-html/lit-html.js";

const input = document.querySelector("#towns");


const getValue = (input)=>input.value.split(", ");
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const value = getValue(input)
   renderComponentTowns(value);
})


const renderComponentTowns = (data) => {
    const container = document.querySelector("#root");
    render(cardTemplate(data),container)
}

const cardTemplate = (data)=> html`
<ul>
 ${data.map((item)=>html`<li>${item}</li>`)}
</ul>
`