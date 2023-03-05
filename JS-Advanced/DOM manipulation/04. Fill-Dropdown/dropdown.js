function addItem() {
    
        const textContent = document.querySelector("#newItemText").value
        const textValue = document.querySelector("#newItemValue").value
        let option = document.createElement("option")
        option.value = textValue
        option.textContent = textContent
        console.log(option.value);
        console.log(option.textContent);
        document.querySelector("#menu").appendChild(option)

        document.querySelector("#newItemText").value = ""
        document.querySelector("#newItemValue").value = ""
    
}