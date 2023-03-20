import { html,render } from "./node_modules/lit-html/lit-html.js";
const body = document.querySelector("body");


function getIdFromRow(e){
return e.target.parentElement.parentElement.id
}
function getIdFromForm(e){
return e.target.id.id
}

const trTemplate = (book)=>html`
            <tr id =${book[0]}>
                <td>${book[1].title}</td>
                <td>${book[1].author}</td>
                <td>
                    <button @click=${async(e)=>{await showEditForm(getIdFromRow(e))}}>Edit</button>
                    <button>Delete</button>
                </td>
            </tr> 
            `

async function loadBooks(){
    const response = await fetch("http://localhost:3030/jsonstore/collections/books")
    const books = Object.entries(await response.json());
    render(books.map(trTemplate),tbody)
}


const editFormTemplate=(book)=>html`
        <input type="hidden" name="id" id="${book._id}">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="${book.title}">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value="${book.author}">
        <input type="submit" value="Save">
`

const pageTemplate = ()=>html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
            
            </tbody>
        </table>
        
        <form id="add-form">
            <h3>Add book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    
    <form id="edit-form">
       
    </form>
    `


render(pageTemplate(),body);
const tbody = document.querySelector("tbody");
const editForm = document.querySelector("#edit-form");
const addForm = document.querySelector("#add-form");
addForm.addEventListener("submit",createBook);
const loadBtn = document.querySelector("#loadBooks");
editForm.style.display="none"

loadBtn.addEventListener("click",loadBooks)


function deleteBook(){

}
async function editBook(id){
    const data = Object.fromEntries(new FormData(editForm));
    console.log(data);
   await postData(data,"PUT",true,id)
   await loadBooks();
   addForm.style.display = "block";
    editForm.innerHTML=""
}
async function createBook(e){
    e.preventDefault();
    const {title,author} = getCreateFormData();
    const response = await postData({title,author},"POST")
    loadBooks();
    

}

async function postData(data,method,isEdit,id){
 const response = await fetch(`http://localhost:3030/jsonstore/collections/books${isEdit?`/${id}`:""}`,{method:`${method}`,body:JSON.stringify({title: data.title,author:data.author})});
 return response.json()
}

function getCreateFormData(){
    try {
        const data = Object.fromEntries(new FormData(addForm));
        if(data.title===""||data.author===""){
            throw new Error("Invalid inputs!")
        }
        return data;
    } catch (error) {
        alert(error)
    }
}

async function showEditForm(id){
    const book = await getBook(id);
    console.log(book.title);
    render(editFormTemplate(book),editForm)
    addForm.style.display = "none";
    

    
    
    editForm.addEventListener("submit",async(e)=>{e.preventDefault(); await editBook(getIdFromForm(e))})
    
}



async function getBook(id){
    const response =  await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
    return response.json();

}