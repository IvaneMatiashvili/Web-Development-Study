function write(content) {
    console.log(content);
}
function space() {
    console.log();
    console.log();
    console.log();
    console.log();
}
////////////////////////////////////////

/* 
function სახელი(){
    // კოდი
}
*/
function myFunction() {
    let var1 = 10;

    console.log(var1 + 10)
}


function square(num) {
    console.log(num * num);
    return num * num
}



function myF(x){ // ეს წაიშლება
    console.log("1 პარამეტრი")

    return x*x*x;
}
function myF(x, y) {  // ეს დარჩება
    console.log("2 პარამეტრი")
    let sum = x + y;
    let resut = sum * sum
    return resut;
}



write(myF(3));
write(myF(2,3))


const myF2 = (x = 2, y = 3) => {
    let sum = x + y;
    let resut = sum * sum

    return resut;
}

 write(myF2())

const fact = (x) => {
    if (x == 1) {
        return 1;
    }
    return fact(x - 1) * x;

}
//   !5 = 1 * 2  * 3 * 4 * 5

// write(fact(5));

// myFunction();

// let answer = square(6);
// let answer = myF(6,4);
// let answer2 = myF2(6,4);

// write(`answer = ${answer}`)
// write(`answer = ${answer2}`)

// myF(2,3)
// write(`sum otside = ${sum}`)

///////////////////////////////// OBJECTS

let person = {
    // თვისება: მნიშვნელობა
    name: "Ivane",
    age: 21,
    cars: ["kolxozniki", "mersedess"],
    hair: {
        color: "blonde",
        length: "1 meter"
    }
}



// write(`hitler is ${person.name}'s favorite hero`)
// write(`${person.name} is ${person.age} years old`)
// write(`${person.name}'s color is ${person.hair.color}`)
// write(`${person.name}'s has two cars: ${person.cars[0]} and ${person.cars[1]}`)
// space()

person.name = "Vano"
person.age = 25
person.cars.push("bentli")



// write(`hitler is ${person.name}'s favorite hero`)
// write(`${person.name} is ${person.age} years old`)
// write(`${person.name}'s color is ${person.hair.color}`)
// write(`${person.name}'s has two cars: ${person.cars[0]} and ${person.cars[1]} and ${person.cars[2]}`)
// space();


// write(person["name"])
// person["name"] = "Vaniko"
// write(person["name"])

// let propName = "age";
// write(person[propName])



var person2 = {}
// write(typeof(person2));
// write(person2);
// person2.height = "2 m";
// write(person2.height);

var person3 = new Object();
// write(person3)
// write(typeof(person3));


var car = {
    speed: 50,
    color: "red",


    print: function () {
    
        console.log(`color = ${this.color} and speed = ${this.speed}`)
    },
    print2: () => {
        
        console.log(` print 2 -> color = ${this.color} and speed = ${this.speed}`)
    }
}


for (key in car){
    write(car[key])
}
// car.print();
// car.print2();

