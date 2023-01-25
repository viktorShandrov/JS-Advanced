function solve() {
   //document.querySelector('#btnSend').addEventListener('click', onClick);
   onClick(["PizzaHut - Peter 500, George 300, Mark 800",
   "TheLake - Bob 1300, Joe 780, Jane 660"])
   function onClick (input) {
      let bestSalary=0;
      let bestAverageSalary = 0;
      let restourantWithAverageSalary = [];
      const restourants = {};
      //const input = Array.from(documnet.querySelector("textarea"))
      
      for (const currentRestourantInfo of input) {
         let currentBestSalary = 0;
         const otherWorkers =[]
         const salaries = [];
         const[restourant,workers] = currentRestourantInfo.split(" - ")
         for (const workerAndSalary of workers.split(", ")) {
            let [worker,salary] = workerAndSalary.split(" ")
            if(restourants.hasOwnProperty(restourant)){
               restourants[restourant][worker] = salary
            }else{
               restourants[restourant]={[worker]:salary}
            }
            salaries.push(Number(salary))
         }
         let avarageSalary = 0;
         let i = 0;
         for(const salary of Object.entries(restourants[restourant])) {
            i++
            avarageSalary += Number(salary[1])
         }
            avarageSalary/=i
         restourantWithAverageSalary.push({[restourant]:Number(avarageSalary.toFixed(2))})
         salaries.sort((a,b)=>b-a)
         currentBestSalary = salaries[0]
         if(currentBestSalary>bestSalary){
            bestSalary=currentBestSalary
         }
         for(let i =1;i<salaries.length;i++){
            console.log(salaries[i]);
         }
         }
         restourantWithAverageSalary = restourantWithAverageSalary.sort((a,b)=>Object.values(b)-Object.values(a))
         bestAverageSalary = Object.values(restourantWithAverageSalary[0])
         console.log(`Name: ${Object.keys(restourantWithAverageSalary[0])} Average Salary: ${Object.values(restourantWithAverageSalary[0])} Best Salary: ${bestSalary.toFixed()}`);
      }
   }

solve()