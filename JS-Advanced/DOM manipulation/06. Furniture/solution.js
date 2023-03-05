function solve() {
    const [generateBtn,buyBtn] = document.querySelectorAll("button");
    generateBtn.addEventListener("click",generate);
    buyBtn.addEventListener("click",buy);
    const [inputArea,outputArea] = document.querySelectorAll("textarea");
    const productTable = document.querySelector("tbody");

    function generate(event){   
        const input = JSON.parse(inputArea.value);
        for (let index = 0; index < input.length; index++) {
            const info = input[index];
            const tr = document.createElement("tr")

            const td1 = document.createElement("td")
            const image = document.createElement("img")
            image.src = info.img
            td1.appendChild(image) 
            tr.appendChild(td1)

            const td2 = document.createElement("td")
            const p2 = document.createElement("p")
            p2.textContent = info.name
            td2.appendChild(p2)
            tr.appendChild(td2)

            const td3 = document.createElement("td")
            const p3 = document.createElement("p")
            p3.textContent = info.price
            td3.appendChild(p3)
            tr.appendChild(td3)

            const td4 = document.createElement("td")
            const p4 = document.createElement("p")
            p4.textContent = info.decFactor
            td4.appendChild(p4)
            tr.appendChild(td4)

            const td5 = document.createElement("td")
            const checkBox= document.createElement("input")
            checkBox.type = "checkbox"
            td5.appendChild(checkBox)
            tr.appendChild(td5)
            
            productTable.appendChild(tr)

        }
 }

 function buy(){
    const tableData = Array.from(document.querySelectorAll("tbody tr"))
    let outputTextNames = "Bought furniture: ";
    const boughtFurnitureArr = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    const decFactorsArr=[]
    for (const tr of tableData) {
        const checkBox = tr.querySelector("input");
        if(checkBox.checked){
            const tds = Array.from(tr.querySelectorAll("td p"));
            const name = tds[0].textContent;
            boughtFurnitureArr.push(name)
            const price = Number(tds[1].textContent);
            totalPrice+=price
            const decFactor = Number(tds[2].textContent);
            decFactorsArr.push(decFactor)
        }
    }
    
    decFactorsArr.forEach((a)=>totalDecFactor+=a)
    const averageDecFactor = totalDecFactor/decFactorsArr.length
    outputTextNames+=boughtFurnitureArr.join(", ")
    outputArea.value = `${outputTextNames}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
 }
}