import {createTopicElement} from "./helpers.js";




async function showSpecificPost(username,topicName,comment,date,id){

    const titleElement = document.querySelector(".theme-title h2")
    titleElement.textContent = topicName
    const topicContainer = document.querySelector(".comment")
    //const topicDiv =  createTopicElement("div",{class:"comment"},null)
        const headerDiv = createTopicElement("div",{class:"header"})
            const img = createTopicElement("img",{src:"./static/profile.png",alt:"avatar"})
            const creatorP = createTopicElement("p",null,null)
                creatorP.innerHTML=
                    `
                    <span>${username}</span> posted on <time>${new Date(date)}</time>
                `
            const creatorCommentP = createTopicElement("p",{class:"post-content"},comment)


    headerDiv.appendChild(img)
    headerDiv.appendChild(creatorP)
    headerDiv.appendChild(creatorCommentP)

    topicContainer.appendChild(headerDiv)

        //get all comments of post
        const responseFetch = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`)
            const fetchResponseData = await responseFetch.json();
            const commentIds = Object.values(fetchResponseData).filter(el=>el.topicId === id)
                const userCommentDiv =  createTopicElement("div",{id:"user-comment"})
                topicContainer.appendChild(userCommentDiv)

             for (const commentId of commentIds) {
                 const idTopic =  commentId._id
                 console.log(idTopic)
                const infoFromFetch = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${idTopic}`)
                 const info = await infoFromFetch.json();

                    const topicNameWarpDiv = createTopicElement("div",{class:"topic-name-wrapper"})
                        const topicNameDiv = createTopicElement("div",{class:"topic-name"})
                            const commentedP = createTopicElement("p")
                                commentedP.innerHTML =`
                                <strong>${info.username}</strong> commented on <time>${Date.now()}</time>
                                 `
                            const postContentDiv = createTopicElement("div",{class:"post-content"})
                                const text = createTopicElement("p",null,`${info.comment}`)
                 postContentDiv.appendChild(text);
                 topicNameDiv.appendChild(commentedP);
                 topicNameDiv.appendChild(postContentDiv);
                 topicNameWarpDiv.appendChild(topicNameDiv);
                 userCommentDiv.appendChild(topicNameWarpDiv);
            }
    /*
    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                <div class="post-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                        dolorem quam.</p>
                </div>
            </div>
        </div>
    </div>
     */
    //topicContainer.appendChild(topicDiv)


    const form  = document.querySelector("form");
    form.addEventListener("submit",getFormDataAndFetch)
    async function getFormDataAndFetch(e){
        e.preventDefault()
    const formData = new FormData(form);
    const formInfo = Object.fromEntries(formData);
        console.log(formInfo.postText)
        console.log(id)
    const options = {
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            username:formInfo.username,
            topicId:id,
            comment:formInfo.postText
        })
    }
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`,options)
        const data = await response.json()
        console.log(data)

        showSpecificPost()

    }


}

function loadHome(){
    async function createNewTopic(e){
        e.preventDefault();
        try {
            if(e.submitter.getAttribute("class")==="public") {
                const {topicName, username, postText} = Object.fromEntries(new FormData(e.target))
                if(topicName===""||username===""||postText===""){
                    throw  new Error("Invalid inputs!");
                }
                const options = {
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        topicName,
                        username,
                        postText,
                        id:Date.now(),
                    })
                }
                const response = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts",options);

                if(response.ok==false){
                    const error = await response.json();
                    throw new Error(error.message)
                }

                const data = await response.json()
                console.log(data)
            }

        }catch (error){
            alert(error.message)
        }

        e.target.reset();
        loadAllTopics();

    }
    document.querySelector("form").addEventListener("submit",createNewTopic)

    //loadAllTopics
    async function loadAllTopics(){
        const topicContainer = document.querySelector(".topic-container");
        //clear all previous topics
        topicContainer.innerHTML="";
        //add updated topics
        try {
            const response = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts")

            if(!response.ok){
                const error = await response.json()
                throw new Error(error.message)
            }

            const data = await response.json();
            for (const info of Object.values(data)) {
                const divWrapper = createTopicElement("div",{class:"topic-name-wrapper"})
                const topicNameDiv = createTopicElement("div",{class:"topic-name"})
                const anchorNormal = createTopicElement("a",{href:"#",class:"normal"})
                const h2 = createTopicElement("h2",null,info.topicName)
                    anchorNormal.addEventListener("click",async()=>{
                        //checking the id of the post
                        let infoData = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts")
                        const inf = await infoData.json();
                        let id=null;
                        for (const infoElement of Object.keys(inf)) {
                            console.log(inf[infoElement].topicName)
                            console.log(h2.textContent)
                            if(inf[infoElement].topicName===h2.textContent){
                                id=inf[infoElement]._id
                            }
                        }
                        localStorage.setItem("topicId",id)
                        window.location.href="http://localhost:63342/app.js/SPA/01.Forum/theme-content.html"





                    })
                const columnsDiv = createTopicElement("div",{class:"columns"})
                anchorNormal.appendChild(h2)
                topicNameDiv.appendChild(anchorNormal)
                topicNameDiv.appendChild(columnsDiv)
                divWrapper.appendChild(topicNameDiv)

                const justDiv = createTopicElement("div")
                   const p = createTopicElement("p",null,"Date:")
                        const time = createTopicElement("time",null,Date.now())
                p.appendChild(time)
                justDiv.appendChild(p)
                columnsDiv.appendChild(justDiv)

                   const nicknameDiv =createTopicElement("div",{class:"nick-name"})
                        const usernameP = createTopicElement("p",null,"Username:")
                            const span = createTopicElement("span",null,info.username)
                usernameP.appendChild(span)
                nicknameDiv.appendChild(usernameP)
                justDiv.appendChild(nicknameDiv)


                topicContainer.appendChild(divWrapper)
            }
        }catch (error){
            console.log(error)
            alert(error.message)

        }


    }
    loadAllTopics()
}

console.log(window.location.href)
if(window.location.href==="http://localhost:63342/app.js/SPA/01.Forum/theme-content.html"){
    const id = localStorage.getItem("topicId")
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
    const data = await response.json()
    showSpecificPost(data.username,data.topicName,data.postText,data.id,data._id)
}else{
    localStorage.setItem("topicId","")
    loadHome()
}
