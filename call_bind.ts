
interface Data {name: string, getName: ()=>string};
interface DataShorted {name: string};

let obj1: Data = {
    name: "Object 1",
    getName: function(){
        return this.name
    }
};

let obj2: DataShorted  = {
    name: "Object 2",
};

let obj3: DataShorted  = {
    name: "Object 2",
};

// 1. Regular Function & bind
let getName1: string = obj1.getName();
let getName2: string = obj1.getName.bind(obj2)();

console.log( `Object with id = 1, has name: ${getName1}`);
console.log( `Object with id = 2, has name: ${getName2}`);

// 2. Regular Function & call

let getName: string | undefined = obj1.getName.call(obj2);

console.log( `Object with id = 2, has name: ${getName}`);


// 3. Arrow Function
let obj4: Data = {
    name: "Object 4",
    getName() {
        const sayYourName = () => {
            return `Hey! My name is ${this.name}`;
        };

        return sayYourName(); 
    }
}

let getName4: string = obj4.getName();
console.log(`Object with id = 4, has name: ${getName4}`);



let obj5: DataShorted = {
    name: "Object 5",
}

let getName5: string | undefined = obj4.getName.bind(obj5)();
console.log(`Object with id = 5, has name: ${getName5}`);


let getName52: string | undefined = obj4.getName.call(obj5);
console.log( `Object with id = 5, has name: ${getName52}`);