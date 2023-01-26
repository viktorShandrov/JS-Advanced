function lockedProfile() {
    const buttons = document.querySelectorAll("button")
    for (const button of buttons) {
        button.addEventListener('click',clicked)
    }
    function clicked(event){
        let radioBtns = Array.from(this.parentElement.querySelectorAll("input"))
        //console.log(radioBtns);
        let RadioButton = ""
        for (let index = 0; index < 2; index++) {
            const element = radioBtns[index];
            if(element.checked){
                RadioButton=element
                break
            }
        }
        //console.log(RadioButton);
        if(RadioButton.getAttribute("value")==="unlock"){
            if(Array.from(event.target.parentElement.children)[9].style.display === "block"){
                Array.from(event.target.parentElement.children)[9].style.display = "none";
                event.target.textContent = "Show more"
            }else{
                Array.from(event.target.parentElement.children)[9].style.display = "block";
                event.target.textContent = "Hide it"
            }
            //console.log("Otkluchen");
        }else{
            //console.log("Zackluchen");
        }
    }
}