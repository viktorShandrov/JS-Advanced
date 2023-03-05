function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      const input = JSON.parse(`${document.querySelector("#inputs textarea").value}`)
   
      
      console.log(input);
      
      let allSalaries = {}
      for (const line of input) {
         let [resName,workersInfoArr] = line.split(" - ")
         
         workersInfoArr = workersInfoArr.split(", ")
         let totalSalaryPerRes = 0;
         let count = 0;
         let bestSalary = 0;
         for (const workerInfo of workersInfoArr) {
            const [workerName,salary] = workerInfo.split(" ")
            if(Number(salary)>bestSalary){
               bestSalary=Number(salary)
            }
            count++
            if(allSalaries.hasOwnProperty(resName)){
               allSalaries[resName].push({[workerName]:Number(salary)})
            }else{
               allSalaries[resName]=[{[workerName]:Number(salary)}]
            }
            totalSalaryPerRes += Number(salary);
         }
         allSalaries[resName].average = Number((totalSalaryPerRes/count).toFixed(2))
         allSalaries[resName].bestSalary = Number(bestSalary)
      }
      
      allSalaries = Object.fromEntries(Object.entries(allSalaries).sort((a,b)=>Number(b[1].average)-Number(a[1].average))) 
      //console.log(allSalaries);
      document.querySelector("#bestRestaurant p").textContent = `Name: ${Object.entries(allSalaries)[0][0]} Average Salary: ${Number(allSalaries[Object.entries(allSalaries)[0][0]].average).toFixed(2)} Best Salary: ${(Number(allSalaries[Object.entries(allSalaries)[0][0]].bestSalary).toFixed(2))}`;
      //console.log(`Name: ${Object.entries(allSalaries)[0][0]} Average Salary: ${allSalaries[Object.entries(allSalaries)[0][0]].average} Best Salary: ${(allSalaries[Object.entries(allSalaries)[0][0]].bestSalary).toFixed(2)}`);
      let workersText = ""
      for (const workerInfo of Object.entries(allSalaries)[0][1]) {
         let name = Object.keys(workerInfo)[0]
         let salary = Object.values(workerInfo)[0]
         workersText+=`<p> Name: ${name} With Salary: ${salary}</p>`
      }  
     document.querySelector("#workers p").innerHTML=workersText
      
      
   }
   
}
solve()