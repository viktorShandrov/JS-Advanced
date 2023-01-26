function attachEventsListeners() {
    const inputBtnDays = document.querySelector("#daysBtn").addEventListener("click",days)
    const inputBtnHours = document.querySelector("#hoursBtn").addEventListener("click",hours)
   const inputBtnMinutes = document.querySelector("#minutesBtn").addEventListener("click",minutes)
   const inputBtnSeconds = document.querySelector("#secondsBtn").addEventListener("click",seconds)
   function days(){
    document.getElementById('hours').value=(document.getElementById('days').value)*24;
    document.getElementById('minutes').value=(document.getElementById('days').value)*1440;
    document.getElementById('seconds').value=(document.getElementById('days').value)*86400;
   }
   function hours(){
    document.getElementById('days').value=(document.getElementById('hours').value)/24;
    document.getElementById('minutes').value=(document.getElementById('hours').value)*60;
    document.getElementById('seconds').value=(document.getElementById('hours').value)*3600;
   }
   function minutes(){
    document.getElementById('days').value=(document.getElementById('minutes').value)/24/60;
    document.getElementById('hours').value=(document.getElementById('minutes').value)/60;
    document.getElementById('seconds').value=(document.getElementById('minutes').value)*60;
   }
   function seconds(){
    document.getElementById('days').value=(document.getElementById('seconds').value)/86400;
    document.getElementById('hours').value=(document.getElementById('seconds').value)/3600;
    document.getElementById('minutes').value=(document.getElementById('seconds').value)/60;
   }


   
}