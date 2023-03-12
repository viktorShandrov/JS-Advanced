const userData = JSON.parse(localStorage.getItem("userInfo"));
const allCatches = document.querySelector("#catches")


if(userData){
    const {accessToken} = JSON.parse(localStorage.getItem("userInfo"));
    document.querySelector(".email span").textContent = userData.email;
    const addBtn = document.querySelector("button.add")
    addBtn.disabled = false;
    const addForm = document.querySelector("#addForm")
    addForm.addEventListener("submit",async(e)=>{
        e.preventDefault()
        const formData = new FormData(addForm);
        const data = Object.fromEntries(formData.entries());
        try{
            if(Object.values(data).some(el=>el==="")){
                throw new Error("All fields must be full! ")
            }
        const response = await fetch("http://localhost:3030/data/catches",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "X-Authorization":accessToken
            },
            body:JSON.stringify({
                angler:data.angler,
                weight:data.weight,
                species:data.species,
                location:data.location,
                bait:data.bait,
                captureTime:data.captureTime,
                ownerId:accessToken,
            })
        })
            
            if(!response.ok){
                throw new Error("Problem with fetching")
            }
        }catch (error){
            alert(error.message);
        }
    await loadData();
    })

    await loadData();

    async function loadData(){
        while(allCatches.firstChild){
            allCatches.removeChild(allCatches.firstChild);
        }
        const res = await fetch("http://localhost:3030/data/catches")
        const data = await res.json();
        for (const datum of Object.values(data)) {
            const div =  document.createElement("div")
            div.classList.add("catch")
            div.appendChild(createElement("label",{},"Angler"))
            div.appendChild(createElement("input",{type:"text",class:"angler",value:datum.angler},""))
            div.appendChild(createElement("label",{},"Weight"))
            div.appendChild(createElement("input",{type:"text",class:"weight",value:datum.weight},""))
            div.appendChild(createElement("label",{},"Species"))
            div.appendChild(createElement("input",{type:"text",class:"species",value:datum.species},""))
            div.appendChild(createElement("label",{},"Location"))
            div.appendChild(createElement("input",{type:"text",class:"location",value:datum.location},""))
            div.appendChild(createElement("label",{},"Bait"))
            div.appendChild(createElement("input",{type:"text",class:"bait",value:datum.bait},""))
            div.appendChild(createElement("label",{},"Capture Time"))
            div.appendChild(createElement("input",{type:"number",class:"captureTime",value:datum.captureTime},""))
            //buttons
            if(datum.ownerId===accessToken){
                const editBTn = createElement("button",{"data-id":"number",class:"update",value:datum._id,},"Update")
                editBTn.addEventListener("click",async()=>{
                        const id = editBTn.getAttribute("value")
                        const [angler,weight,species,location,bait,captureTime] = editBTn.parentElement.querySelectorAll("input")

                        await fetch(`http://localhost:3030/data/catches/${id}`,{
                            method:"PUT",
                            headers:{
                                "Content-type":"application/json",
                                "X-Authorization":accessToken
                            },
                            body:JSON.stringify({
                                angler:angler.value,
                                weight:weight.value,
                                species:species.value,
                                location:location.value,
                                bait:bait.value,
                                captureTime:captureTime.value,
                                ownerId:accessToken
                            })
                        })
                         await loadData();
                })
                div.appendChild(editBTn)
                const deleteBtn = createElement("button",{"data-id":"number",class:"delete",value:datum._id,},"Delete")
                deleteBtn.addEventListener("click",async()=>{
                    const id = deleteBtn.getAttribute("value")
                    await fetch(`http://localhost:3030/data/catches/${id}`,{
                        method:"DELETE",
                        headers:{
                            "Content-type":"application/json",
                            "X-Authorization":accessToken
                        }
                    })
                    await loadData();
                })
                div.appendChild(deleteBtn)
            }else{
                div.appendChild(createElement("button",{"data-id":"number",class:"update",value:datum._id,disabled:null},"Update"))
                div.appendChild(createElement("button",{"data-id":"number",class:"delete",value:datum._id,disabled:null},"Delete"))
            }
            allCatches.appendChild(div)
        }
    }
}



function createElement(type,attr,value){
    const element = document.createElement(type);
    for (const elementElement of Object.entries(attr)) {
        if(elementElement[0]==="disabled"){
            element.setAttribute("disabled",null)
        }else{
            element.setAttribute(elementElement[0],elementElement[1])
        }
    }
    element.textContent = value;
    return element
}