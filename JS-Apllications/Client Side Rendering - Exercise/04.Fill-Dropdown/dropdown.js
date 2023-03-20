import { html,render } from"./node_modules/lit-html/lit-html.js";

const optionsContainer = document.querySelector("#menu");
const textInput =document.querySelector("#itemText");

document.querySelector("form").addEventListener("submit",addItem);

async function addItem(e) {
    e.preventDefault();
    await postData(textInput.value);
    const data = await getData();
    renderOptionsList(data)
}

const optionTemplate = (option)=> html`<option value="${option._id}">${option.text}</option>`

function renderOptionsList(data){
    render(Object.values(data).map(optionTemplate),optionsContainer)
}

async function loadData(){
     const data = await getData();
    renderOptionsList(data)
}

async function getData(){
    const response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
    return response.json();
}

async function postData(text){
    const options = {
        method:"POST",
        body:JSON.stringify({text})
    }
    await fetch("http://localhost:3030/jsonstore/advanced/dropdown",options);
}

loadData();