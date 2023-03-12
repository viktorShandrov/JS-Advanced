async function solve(){
    const tbody = document.querySelector("tbody")
    await fetch("http://localhost:3030/jsonstore/collections/students")
        .then((data)=>data.json())
        .then((info)=>{
            for (const infoElement of Object.values(info)) {
                const tr = document.createElement("tr");
                const tdFirstName =document.createElement("td");
                tdFirstName.textContent = infoElement.firstName;
                tr.appendChild(tdFirstName);
                const tdLastName =document.createElement("td");
                tdLastName.textContent = infoElement.lastName;
                tr.appendChild(tdLastName);
                const tdNumber =document.createElement("td");
                tdNumber.textContent = infoElement.facultyNumber;
                tr.appendChild(tdNumber);
                const tdGrade =document.createElement("td");
                tdGrade.textContent = infoElement.grade;
                tr.appendChild(tdGrade);
                tbody.appendChild(tr);
            }
        })

    const form = document.querySelector("#form");
    form.addEventListener("submit",async(event)=>{
        event.preventDefault();
        const firstName = form.querySelector("input[name=firstName]").value;
        const lastName = form.querySelector("input[name=lastName]").value;
        const facultyNumber = form.querySelector("input[name=facultyNumber]").value;
        const grade = form.querySelector("input[name=grade]").value;

        if(firstName===""||lastName===""||facultyNumber===""||grade===""){
            return 1;
        }

        await fetch("http://localhost:3030/jsonstore/collections/students",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade,
            })
        })

    })



}
solve()