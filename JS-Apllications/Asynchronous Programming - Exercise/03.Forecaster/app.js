 function attachEvents() {

    let dataArr=null;
    let current = null;
    let upcoming =null

    symbols = {
    Sunny:"&#x2600", // ☀
	"Partly sunny":"&#x26C5", // ⛅
	Overcast:"&#x2601", // ☁
	Rain:"&#x2614", // ☂
	Degrees:"&#176"   // °
    }

    const location =  document.querySelector("#location");
    const div = document.querySelector("#forecast");
    document.querySelector("#submit").addEventListener("click",async()=>{
       await fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        .then((data)=>data.json())
        .then((data)=>dataArr=data)
        
        const info = dataArr.find((x)=>x.name===location.value)
        await fetch(`http://localhost:3030/jsonstore/forecaster/today/${info.code}`)
        .then((data)=>data.json())
        .then((data)=>current=data)

        await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${info.code}`)
        .then((data)=>data.json())
        .then((data)=>upcoming=data)
        div.style.display = "block";

        innerHTMLForUpcomming = ``
        
        for (const upcomingInfo of upcoming.forecast) {
            
            innerHTMLForUpcomming+=`
            <span class="upcoming">
            <span class="symbol">${symbols[upcomingInfo.condition]}</span>
            <span class="forecast-data">${upcomingInfo.low}&#176/${upcomingInfo.high}&#176</span>
            <span class="forecast-data">${upcomingInfo.condition}</span>
            </span>
            `
        }
        console.log(current);
        const innerHTML = `
        <div id="current">
        <div class="label">Current conditions</div>
        <div class="forecasts">
        <span class="condition symbol">${symbols[current.forecast.condition]}</span>
        <span class="condition">
        <span class="forecast-data">${current.name}</span>
        <span class="forecast-data">${current.forecast.low}&#176/${current.forecast.high}&#176</span>
        <span class="forecast-data">${current.forecast.condition}</span>
        </span>
        </div>
        </div>
        <div id="upcoming">
        <div class="label">Three-day forecast</div>
        <div class="forecast-info">
        ${innerHTMLForUpcomming}
        </div>
        </div>
        `
        div.innerHTML = innerHTML
    })
    

}

attachEvents();