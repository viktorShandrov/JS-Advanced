function create(words) {
   words.forEach(word => {
     const div = document.createElement("div")
     div.addEventListener('click',showP)
     const p = document.createElement("p")
     p.textContent = word
     p.style.display = "none"
     div.appendChild(p)
     document.getElementById("content").appendChild(div)
   });
   function showP(event){
     event.target.children[0].style.display = "block"
   }

}