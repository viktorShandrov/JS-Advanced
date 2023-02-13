class Company {
    constructor() {
     this.departments = {};
    }
    addEmployee(name, salary, position, department){
        //console.log(this.departments)
        if(!name||!salary||!position||!department){
            throw new Error("Invalid input!")
        }
        if(Number(salary)<0){
            throw new Error("Invalid input!")
        }
        if(!this.departments.hasOwnProperty(department)){
            this.departments[department]={[name]:{salary,position}};
        }else{
            this.departments[department][name]={salary,position};
        }

        //console.log(this.departments[department])
        if(this.departments[department].hasOwnProperty("salaries")){
            this.departments[department]["salaries"].push(salary);
        }else{
            this.departments[department]["salaries"]=[salary];
        }

        //console.log(this.departments[department]["salaries"])
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment(){
        const averageSalaries ={};
        for (const department of Object.entries(this.departments)) {
            let avarageSalary = 0;
            for (const salary of department[1].salaries) {
                avarageSalary+=salary;
            }
            avarageSalary = avarageSalary/department[1].salaries.length;
            averageSalaries[department[0]]=avarageSalary;
        }
        //console.log(averageSalaries)
        const bestDepartment = Object.entries(averageSalaries).sort((a,b)=>b[1]-a[1])[0][0]
        const bestSalary = Object.entries(averageSalaries).sort((a,b)=>b[1]-a[1])[0][1]
        let message =`Best Department is: ${bestDepartment}\nAverage salary: ${bestSalary.toFixed(2)}`;

        delete this.departments[bestDepartment]["salaries"];
        const sortedEmployes = Object.entries(this.departments[bestDepartment]).sort((a,b)=>
        {
            if(b[1]['salary']-a[1]['salary']===0){
                return a[0].localeCompare(b[0]);
            }else{
                return b[1]['salary']-a[1]['salary'];
        }
        })
        for (const sortedEmploye of sortedEmployes) {
            message+=`\n${sortedEmploye[0]} ${sortedEmploye[1].salary} ${sortedEmploye[1].position}`;
        }

        return message;
    }
}
let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
