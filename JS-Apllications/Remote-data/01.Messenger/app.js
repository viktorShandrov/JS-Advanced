function attachEvents() {
    const url = "http://localhost:3030/jsonstore/messenger";
    document.querySelector("#submit").addEventListener("click",sendData)
    document.querySelector("#refresh").addEventListener("click",getData)
    const textArea = document.querySelector("#messages")

    async function sendData(){
        const authorName = document.querySelector("input[name=author]").value
        const msgText = document.querySelector("input[name=content]").value
        const newObject = {
            author: authorName,
            content: msgText,
        }
        const options ={
            method:"post",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(newObject)
        }
        await fetch(url,options)
    }
    async function getData(){
        await fetch("http://localhost:3030/jsonstore/messenger")
            .then((data)=>data.json())
            .then((data)=>{
                for (const info of Object.values(data)) {
                    textArea.textContent+=`\n${info.author}: ${info.content}`
                }
                textArea.textContent=textArea.textContent.substring(1,)
            })
    }
}

attachEvents();