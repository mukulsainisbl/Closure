function CreateCounter(){
    let count = 0
    return {
        increment(){
            count++;
            return count
        },
        getCount(){
            return count
        }

    }
}

const counter = CreateCounter();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getCount()); 
