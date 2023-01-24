function solve() {
  const input = Array.from(document.getElementById("input").value.split("."))
  input.pop()
  let outputHTML = ""
  while(input.length!==0){
    let textPerParagraph= ""
    
    for (let index = 1; input.length!==0; index++) {
      textPerParagraph+=`${input.shift()}.`
      if(index===3){
        break;
      }
    }
    outputHTML+=`<p>${textPerParagraph}</p>`
  }
  
  document.getElementById("output").innerHTML = `${outputHTML}`
}