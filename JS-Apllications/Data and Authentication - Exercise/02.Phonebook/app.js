function attachEvents() {
    const loadBtn = document.querySelector("#btnLoad");
          loadBtn.addEventListener("click",loadData);
    document.querySelector("#btnCreate").addEventListener(("click"),createInfo);

    const personInput = document.querySelector("#person");
    const phoneInput = document.querySelector("#phone");
    const list  = document.querySelector("#phonebook");
    async function loadData(){
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        await fetch("http://localhost:3030/jsonstore/phonebook")
            .then((data)=>data.json())
            .then((info)=>{
                for (const infoElement of Object.values(info)) {
                    const li = document.createElement("li");
                    const deleteBtn = document.createElement("button");

                    deleteBtn.textContent = "Delete";
                    deleteBtn.setAttribute("id",infoElement._id);

                    li.textContent = `${infoElement.person}: ${infoElement.phone}`
                    li.appendChild(deleteBtn);
                    list.appendChild(li);

                    deleteBtn.addEventListener("click",deleteNumber)
                }
            })
    }
    async function deleteNumber(event){
        const key = event.target.getAttribute("id")
        await fetch(`http://localhost:3030/jsonstore/phonebook/${key}`,{
            method:"DELETE"
        })
        event.target.parentElement.parentElement.removeChild(event.target.parentElement)
    }

    async function createInfo(){
        const url = "http://localhost:3030/jsonstore/phonebook";
        const person = personInput.value;
        const phone =phoneInput.value;
        await fetch(url,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                "person": `${person}`,
                "phone": `${phone}`
            })
        })
        personInput.value = "";
        phoneInput.value = "";
        loadBtn.click()
    }
}

attachEvents();