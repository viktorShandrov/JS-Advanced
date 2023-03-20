export function checkFields(e){
    const problematics = [];
    const {make,model,year,description,price,img,material} = Object.fromEntries(new FormData(e.target))
    if(make===""){
        problematics.push("make")
    }
    if(model===""){
        problematics.push("model")
    }
    if(year===""){
        problematics.push("year")
    }
    if(description===""){
        problematics.push("description")
    }
    if(price===""){
        problematics.push("price")
    }
    if(img===""){
        problematics.push("img")
    }
    if(make.length<4){
        problematics.push("make")
    }
    if(model.length<4){
        problematics.push("model")
    }
    if(Number(year)<1950||Number(year)>2050){
        problematics.push("year")
    }
    if(description.length<10){
        problematics.push("description")
    }
    if(Number(price)<=0){
        problematics.push("price")
    }
    return {problematics,data:{make,model,year,description,price,img,material}};
}