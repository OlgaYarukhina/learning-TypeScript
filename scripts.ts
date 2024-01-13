let d1: number = 5;
let d2: number = 5;
let s: string = "First string";
let b: boolean = true;
let n: null = null;
let u: undefined = undefined;
let a: any = "str";

let ar1: any[] = ["a", 2, 3, 4];  

//tuple
let ar2: [string, number, number, number] = ["a", 2, 3, 4];  

//generic
let ar3: Array<number> = [1, 2, 3, 4];  

function f1 (x: number, y:number | undefined):number | undefined {
    if (y === undefined) {
        return undefined; // or handle it in another way you see fit
    }
    return x + y;
}

console.log(f1(d1, d2))

function f2 (x: number, y?:number):number | undefined {     //? означає що будемо повертати undefined
    if (y === undefined) {
        return undefined; // or handle it in another way you see fit
    }
    return x + y;
}

function f3 (x: number, y:number = 100):number {     
    return x + y;
}

function f4 (x: number, y:number = 100):void {     
    return;
}

let f5 = (x: number, y:number = 100):string => {     
    return "Hello";
}

let f6:(x:number, y:number) => string;
f6=f5;

let ob1: {a: number, b: string, d: ()=>void} = {
    a: 5,
    b: "String",
    d: function(){
        return
    }
}

type Data1 = {a: number, b: string, d: ()=>void | number, e?: ()=>void}  // ? як необовязковий параметр
//якщо без ?
type Data2 = Data1 & {e: ()=>void}


let ob2: Data1 = {
    a: 5,
    b: "String",
    d: function(){
        return
    }
}

let ob3: Data2 = {
    a: 5,
    b: "String",
    d: function(){
        return this.a
    },
    e: function(){
        return
    }
}


// Interface

interface Data3 {a: number, b: string, d: ()=>void | number};
interface Data4 extends Data3{e?: ()=>void};



let ob4: Data4 = {
    a: 5,
    b: "String",
    d: function(){
        return this.a
    },
    e: function(){
        return
    }
}

//

// інтерфейс для опису обєктів interface for describing objects
// type для взаємодії з інтерфейсами to interact with interfaces

interface Data5 {
    a: {
        str: string,
        n: number
    },
    b: {
        str: string,
        is: boolean
    },
    c:  {
        f1: () => number,
        f2: () => void,
    }
};

// або по-іншому інтерфейс
interface A {
    str: string,
    n: number
};
interface B {
    str: string,
    is: boolean
};
interface C {
    f1: () => number,
    f2: () => void,
};

interface Data6 {
    a: A,
    b: B,
    c: C
};



let ob5: Data6 = {
    a: {
        str: "string",
        n: 5

    },
    b: {
        str: "string",
        is: true
    },
    c: {
       f1: function ():number{
            return 5
        },
       f2: function ():void{
            return 
        }

    },
}


class Example {
    public name: string = "Olya";   // можна витягнути будь-яким чином
    readonly age: number = 40;     //неможна перезаписувати
    private isRegister: boolean = true  //доступний тільки через клас в якому було створений, в екстендах не доступний
    protected password: string = "888";   // тільки через метод getProtected
    static mail: string = "r@f.com";   // Статический это те же самые protected и private, но этот статические методы принимаются того класса где был объявлен static. 

    getProtected(){
        return this.password
    }
}

//Literals

type CardDirection = "West" | "North";

let CardDirection: CardDirection = "North";

function getDir(direction: CardDirection): 1 | 2 {
    switch(direction){
        case "West":
        return 1;
        case "North":
        return 2
    }
}


//Enums для обмеження кількості значень, з якими ми можемо працювати
// цифрові

enum Berry {
Apple = 5,      // array починаючи з 5
Banan,
Cherry
}

// Ще є стрінгові та гетерогенні та вираховуємі

//Generics

function f <T, S>(a:T, b:S):T | S{
    if(typeof a === "number"){
        a.toFixed
    }
    if(typeof a === "string"){
       a.charAt
    }
    return a
};

f<number, string>(2, "3");


//class

class MyFirstClass <T, S> {
    a: T;
    b: S;
    constructor (a: T, b: S) {
        this.a = a;
        this.b = b;
    }
}

const c1 = new MyFirstClass<number, string>(5, "555")

let arr:Array<number> = [1, 2, 3];
let arr2:[number, string] = [1, "1"]