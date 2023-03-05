function validate() {
    const input = document.querySelector("#email");
    const pattern = /[a-z]+@[a-z]+\.[a-z]{2,4}/
    input.addEventListener("change",()=>{
        if(input.value.match(pattern)){
            input.classList.remove("error");
        }else{
            input.classList.add("error");
        }
    })
}