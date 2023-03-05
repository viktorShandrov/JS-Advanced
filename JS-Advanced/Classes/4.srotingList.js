class List {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    add(element){
        this.size++
        this.storage.push(element);
        this.storage.sort((a,b)=>a-b);
    }
    remove(index){
        if(index>=0&&index<this.storage.length){
            this.size--
            this.storage.splice(index,1);
            this.storage.sort((a,b)=>a-b);
        }else{
            throw new Error("Invalid index")
        }

    }
    get(index){
        if(index>=0&&index<this.storage.length){
            return this.storage[index];
        }else{
            throw new Error("Invalid index")
        }

    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.size);

