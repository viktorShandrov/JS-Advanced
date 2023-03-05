function search() {
   const list = document.getElementById("towns").children
   const searchElement = document.getElementById("searchText").value
   let matches = 0
   for (let i = 0; i<list.length;i++) {
      let element = list[i]
      if(element.textContent.includes(searchElement)){
       element.style.fontWeight  = "bold"
       element.style.textDecoration = "underline";
       matches++
      }else{
         element.style.fontWeight  = "normal"
       element.style.textDecoration = "none";
      }
   }
   document.getElementById("result").textContent = `${matches} matches found`
}
