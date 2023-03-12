function solve() {

const departBtn = document.querySelector("#depart");
const arriveBtn = document.querySelector("#arrive");
const infoBox = document.querySelector("#info");



async function depart() {

    try {
        const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
        if (!res.ok) {
            let error = new Error();
            error.status = response.status;
            error.statusText = response.statusText;
            throw error;
        }
        const data = await res.json();
        stopName = data.name;
        nextStopld = data.next;
        infoElement.textContent = `Next stop ${stopName}`
        departBtn.disabled = true;
        arriveBtn.disabled = false;
     } catch (error){
    infoBox.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
     }
    }
  function arrive() {
    infoElement. textContent= `Arriving at ${stopName}`
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }
  return{
    arrive,
    depart
  }
}
let result = solve()