async function lockedProfile() {
    const mainArea =  document.querySelector("#main")
     await fetch(`http://localhost:3030/jsonstore/advanced/profiles`)  
     .then((data)=>data.json())
     .then((data)=>{
        let inner = ""
        for (const userInfo of Object.entries(data)) {
            inner+=`<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${userInfo[1].username}" disabled readonly />
				<div class="user1Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${userInfo[1].email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${userInfo[1].age}" disabled readonly />
				</div>
				<button>Show more</button>
			</div>`
        }
        mainArea.innerHTML =inner
     })  
     
     for (const btn of Array.from(document.querySelectorAll("button"))) {
        btn.parentElement.querySelector("div").style.display="none"
        btn.addEventListener("click",(e)=>{
            //const inputLock = btn.parentElement.querySelector('input[value="lock"]');
            const inputUnlock = e.target.parentElement.querySelector('input[value="unlock"]');
            if(inputUnlock.checked){
                if(e.target.textContent ==="Show more"){
                    e.target.parentElement.querySelector("div").style.display="block"
                    btn.textContent ="Hide"
                }else if(e.target.textContent ==="Hide"){
                    e.target.parentElement.querySelector("div").style.display="none"
                    btn.textContent ="Show more"
                }
            }
        })
     }
}