function log(content) {
    console.log(content);
}
function space() {
    console.log();
    console.log();
    console.log();
    console.log();
}


/*


29.	როგორ შევქმნათ უპარამეტრო ფუნქცია, პარამეტრიანი ფუნქცია. 
როგორ დავაბრუნებინოთ ფუნქციას მნიშვნელობა. შეგვიძლია არსებული ფუნქცია გამოვიყენოთ ფუნქციაში?
- პარამეტრიანი log
- უპარამეტრო  space

33.	რა არის თვისება, რა არის მეთოდი.

// მეთოდი საქმეს გვიკეთებს
// ტვისებაში ინფორმაცია ინახება
let myObj = {
    name:"adolf", // თვისება 
    printName:function(){   // მეთოდი
        console.log(tihs.name)
    }
}

35.	შეიძლება ობიექტში თვისება იყოს სხვა ობიექტი რომელჩის კიდევ სხვა ობიექტია 
let person = {
    name: "adolf",
    fullname: "hitler",
    description: "hero of war",
    family: {
        mother: {
            name: "elizabeth",
            fullname: "hitler",
        },
        father: {
            name: "adolf Junior",
            fullname: "hitler",
        },
        isHappy: true
    }
}

36.	რა არის Json-ი, რა ტიპისაა იგი, რა განსხვავბაა ჯავასკრიპტის ობიექტსა და ჯეისონის
- მონაცემთა ფორმატი
- ტიპი: ეს არის ტექსტი

კონკატენაცია:
let st = "asada" + "123123" // კონკაატენაცია გაერთიანება
let st2 = "asdasd".concat("123123123")

*/


function changeColor(col){
    let el = document.getElementById("square")
    el.style.backgroundColor = col
    // log(el)

}

const changeText = (e) =>{
    console.log(e)
}
const changeText2 = (e) =>{
    console.log(e)
    // console.log(e.target)
}


let btn2 = document.getElementById("button2")

btn2.onclick = changeText2;


btn2.onclick = (e) => {
    console.log("clicked1")
};

let btn3 = document.getElementById("button3")

// btn3.addEventListener("click",changeText2)
btn3.addEventListener("click",(e)=>{
    console.log("Event #1 Triggered!")
    // console.log(e)
})


const event2 = (e)=>{
    console.log("Event #2 Triggered!")
}

btn3.addEventListener("click",event2)

btn3.removeEventListener("click",event2)


// console.log(event2)



// document.onclick = () => {
//     alert("mouse clicked")
// }


window.onload = () => {
    alert("loaded")   
}