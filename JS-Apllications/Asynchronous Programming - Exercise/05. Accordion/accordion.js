async function solution() {

   const mainArea = document.querySelector("#main");
   infoArr =null;
   await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
   .then((data)=>data.json())
   .then((data)=>infoArr=data)

   let inner =""
   for (const info of infoArr) {
    inner+=`<div class="accordion">
            <div class="head">
                <span>${info.title}</span>
                <button class="button" id="${info._id}">More</button>
            </div>
            <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>
        </div>`
   }
   mainArea.innerHTML=inner

   for (const btn of Array.from(document.querySelectorAll("button"))) {
        btn.addEventListener("click",async(e)=>{
            if(e.target.textContent==="More"){
                e.target.parentElement.parentElement.querySelector(`div[class="extra"]`).style.display="block"
                await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`)
                .then((data)=>data.json())
                .then((data)=>{
                    e.target.parentElement.parentElement.querySelector(`div[class="extra"] p`).textContent = data.content
                    e.target.textContent = "Less"
                })
            }else{
                e.target.parentElement.parentElement.querySelector(`div[class="extra"]`).style.display="none"
                e.target.parentElement.parentElement.querySelector(`div[class="extra"] p`).textContent = ""
                e.target.textContent = "More"
            }
        })

   }


}
solution()