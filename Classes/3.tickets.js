function ticketSort(arrayInputs,sortCriteria){
    const result = [];

    class Ticket{
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const input of arrayInputs) {
        const [name,price,status] = input.split("|");
        result.push(new Ticket(name,price,status));
    }

    result.sort((a,b)=>{
        if(typeof a[sortCriteria] === "number"){
            return a-b;
        }else{
           return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    })

    return result;
}
ticketSort(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);