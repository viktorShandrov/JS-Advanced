async function attachEvents() {
    const optionArea = document.querySelector("#posts")
   const posts = document.querySelector("#post-comments")
   const p =document.querySelector("#post-body")
   const postTitle = document.querySelector("#post-title")
    document.querySelector("#btnLoadPosts").addEventListener("click",async()=>{
        await fetch(`http://localhost:3030/jsonstore/blog/posts`)
        .then((data)=>data.json())
        .then((data)=>{
                    for (const info of Object.entries(data)) {
                        const opt = document.createElement("option")
                        opt.setAttribute("value",`${info[1].id}`)
                        opt.setAttribute("body",`${info[1].body}`)
                        opt.textContent =info[1].title
                        optionArea.appendChild(opt)
                    }
        })
    })
    document.querySelector("#btnViewPost").addEventListener("click",async()=>{
        postTitle.textContent = optionArea.selectedOptions[0].textContent
        p.textContent = optionArea.selectedOptions[0].getAttribute("body")
        const value1 = optionArea.selectedOptions[0].getAttribute("value")
        console.log(value1);
        await fetch(`http://localhost:3030/jsonstore/blog/comments`)
        .then((data)=>data.json())
        .then((data)=>{
            posts.innerHTML = ""
                for (const info of Object.entries(data)) {
                    if(info[1].postId===optionArea.selectedOptions[0].getAttribute("value")){
                        
                        posts.innerHTML+=`<li id="">${info[1].text}</li>`
                    }
                }
        })
    })
}

attachEvents();