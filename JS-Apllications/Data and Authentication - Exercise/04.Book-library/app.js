async function solve(){
    const tbody =  document.querySelector("tbody")
    document.querySelector("#loadBooks").addEventListener("click",loadBooks)

    let id =null;
    async function loadBooks(){
        await fetch("http://localhost:3030/jsonstore/collections/books")
            .then((data)=>data.json())
            .then((info)=>{
                for (const infoElement of Object.entries(info)) {

                    const tr = document.createElement("tr");
                    const titleTD = document.createElement("td");
                    tr.appendChild(titleTD);
                    titleTD.textContent = infoElement[1].title;
                    const authorTD = document.createElement("td");
                    tr.appendChild(authorTD);
                    authorTD.textContent = infoElement[1].author;
                    const buttonsTD = document.createElement("td");
                    tr.appendChild(buttonsTD);
                    const editBtn =  document.createElement("button");
                    editBtn.setAttribute("data",infoElement[0])
                    editBtn.textContent = "Edit";
                    const deleteBtn =  document.createElement("button");
                    deleteBtn.setAttribute("data",infoElement[0])
                    deleteBtn.textContent = "Delete";
                    buttonsTD.appendChild(editBtn);
                    buttonsTD.appendChild(deleteBtn);
                    editBtn.addEventListener("click",async (e)=>{
                        const title = e.target.parentElement.parentElement.firstChild.textContent;
                        console.log(title)
                        const author = e.target.parentElement.parentElement.children[1].textContent;
                        const titleInput = document.querySelector("input[name=title]");
                        const authorInput = document.querySelector("input[name=author]");
                        titleInput.value = title;
                        authorInput.value = author;

                        document.querySelector("form h3").textContent = "Edit FORM"
                        document.querySelector("form button").textContent = "Save"
                        id = infoElement[0]


                    })
                    deleteBtn.addEventListener("click",async()=>{
                        id = infoElement[0]
                        await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
                            method:"DELETE"
                        })
                    })
                    tbody.appendChild(tr)

                }
            })
    }

    document.querySelector("form").addEventListener("submit",async (event)=>{
        event.preventDefault();
        const titleInput = event.target.querySelector("input[name=title]").value;
        const authorInput = event.target.querySelector("input[name=author]").value;
        if(titleInput===""||authorInput===""){
            return;
        }
        if(document.querySelector("form button").textContent === "Submit"){
        await fetch("http://localhost:3030/jsonstore/collections/books",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
            "author": authorInput,
            "title": titleInput
    })
        })


        }else{
            await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    "author": authorInput,
                    "title": titleInput
                })
            })

            document.querySelector("form button").textContent = "Submit";
            document.querySelector("form h3").textContent = "FORM"

        }


    })


}
solve();