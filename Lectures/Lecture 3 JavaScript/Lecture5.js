function log(content){
    console.log(content)
}
function space(){
    console.log()
    console.log()
    console.log()
}


/////////// Lecture 5


// try{
//     let y = 0;
//     let x = 10 / y;

//     if(y == 0){
//         throw 'should not be 0!';
//     }
// }
// catch(err){
//     console.log("my error is" + err.name)
// }
// finally{
//     console.log("final text")
// }




// log("this part is reached")



let jString = '{"name":"beka","surname":"badzagua","languages":["javascript","c#"],"isCool" : true,"dog":{"name":"jeni","age":14}}'

// console.log(jString)
// console.log(typeof(jString))
// log(jString.name)

// let jObject = JSON.parse(jString)



// log(jObject)
// console.log(jObject)
// console.log(typeof(jObject))
// log(jObject.name)


let car = {
    brand:"opel",
    speed:2000,
    owner:"hitler",
    setSpeed:function(speed){
        // this speed - თვისება
        // speed პარამეტრი
        this.speed = speed
    }
}

log("object")
log(car)

let carSTRTING = JSON.stringify(car)
log("json")
log(carSTRTING)