function workers(personInfo){
    let person = {...personInfo}
    
    
if(person.dizziness){
    const requeredAmountWaterMl = 0.1*(person.experience)*Number(person.weight)
    person.levelOfHydrated+=Number(requeredAmountWaterMl)
    person.dizziness=false
}

console.log(person);
}
workers({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
  workers({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )