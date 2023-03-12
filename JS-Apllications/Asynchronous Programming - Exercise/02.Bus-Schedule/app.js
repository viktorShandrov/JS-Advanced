function solve() {
 const departBtn = document.querySelector("#depart");
 const arriveBtn = document.querySelector("#arrive");
 const infoBox = document.querySelector("#info span");

 let nextStop = "depot"
 let currentStop = ""

   async function depart() {
       try {
           const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
          if(!response.ok){
            let error = new Error()
            error.status = response.status;
            error.statusText = response.statusText;
            throw error;
        }
        const data = await response.json();
        
        infoBox.textContent = `Next stop ${data.name}`;
        currentStop = data.name;
        nextStop = data.next;
        
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        } catch (error) {
            arriveBtn.disabled = true
            departBtn.disabled = true
            infoBox.textContent = `Error`;
        }

         
    }
    
    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        infoBox.textContent = `Arriving at ${currentStop}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();