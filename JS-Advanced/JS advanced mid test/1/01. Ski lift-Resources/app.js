window.addEventListener('load', solve);

function solve() {
    let nextBtn = document.querySelector("#next-btn");
    const firstNameField = document.querySelector("#first-name")
    const lastNameField = document.querySelector("#last-name")
   const countField = document.querySelector("#people-count")
   const fromDateField = document.querySelector("#from-date")
   const daysCountField = document.querySelector("#days-count")
   
   nextBtn.addEventListener("click",move)
   
   const ticketInfoSection = document.querySelector(".ticket-info-list");

   const confirmSection = document.querySelector(".confirm-ticket")
   
   
   
   
    function move(event){
        event.preventDefault()
        if(firstNameField.value!==""&&lastNameField.value!==""&&countField.value!==""&&fromDateField.value!==""&&daysCountField.value!==""){
         const name = firstNameField.value
         const lastName = lastNameField.value
         const people = countField.value
         const date = fromDateField.value
         const days = daysCountField.value
         //if(firstNameField.value&&lastNameField.value&&countField.value&&fromDateField.value&&daysCountField.value){
             console.log(1);
             const li = document.createElement("li");
             li.classList.add("ticket")
             li.innerHTML =
             `<article>
              <h3>Name: ${firstNameField.value+" "+lastNameField.value}</h3>
              <p>From date: ${fromDateField.value}</p>
              <p>For ${daysCountField.value} days</p>
              <p>For ${countField.value} people</p>
              </article>
              <button class="edit-btn">Edit</button>
              <button class="continue-btn">Continue</button>
             `
             ticketInfoSection.appendChild(li)
 
             firstNameField.value = "" 
              lastNameField.value = "" 
              countField.value = "" 
              fromDateField.value = "" 
              daysCountField.value = ""
             nextBtn.disabled = true
             li.querySelector(".edit-btn").disabled = false
             li.querySelector(".continue-btn").disabled = false
             li.querySelector(".edit-btn").addEventListener("click",(e)=>{
                 firstNameField.value = name
                 lastNameField.value = lastName
                 countField.value = people
                 fromDateField.value = date
                 daysCountField.value = days
                 nextBtn.disabled=false
                 li.parentElement.removeChild(li)
 
             })
             li.querySelector(".continue-btn").addEventListener("click",()=>{
                 confirmSection.appendChild(li)
                 li.removeChild(li.querySelector(".continue-btn"))
                 li.removeChild(li.querySelector(".edit-btn"))
                 const ConfirmBtn = document.createElement("button")
                 ConfirmBtn.classList.add("confirm-btn")
                 ConfirmBtn.textContent = "Confirm"
                 const CancleBtn = document.createElement("button")
                 CancleBtn.classList.add("cancel-btn")
                 CancleBtn.textContent = "Cancel"
                 li.appendChild(ConfirmBtn)
                 li.appendChild(CancleBtn)
                 CancleBtn.addEventListener("click",()=>{
                         nextBtn.disabled = false;
                     li.parentElement.removeChild(li)
 
                 })
 
                 ConfirmBtn.addEventListener("click",()=>{
                     body.removeChild(document.querySelector("#main"))
                     const h1 = document.createElement("h1")
                     h1.id ="thank-you"
                     h1.textContent = "Thank you, have a nice day! " 
                     body.appendChild(h1)
                     const back = document.createElement("button")
                     back.textContent = "Back"
                     back.id ="back-btn"
                     body.appendChild(back)
                     back.addEventListener("click",()=>{
                         location.reload()
                     })
                 })
                 
                 
             })
            }
     
   }
   
   

    
}


    
    
