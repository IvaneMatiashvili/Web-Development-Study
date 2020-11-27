function log(content) {
    console.log(content);
}
function space() {
    console.log();
    console.log();
    console.log();
    console.log();
}
///////////////////////////////////////




// const changeColor = () => {
//     let element = document.getElementById("square");
//     if (z % 2 == 0)
//         element.style.backgroundColor = "red";
// }


function changeColor(){
    let element = document.getElementById("square");
    element.style.backgroundColor = "red";
}


console.log(window)

let x = 0;
function writeNum(){
    log(x)
    x++;
}



console.log(Math.sqrt(25))


// setInterval(writeNum,1000)
// setTimeout(()=>{
//     console.log("Im late")
// },3000)





let divsByClasses = document.getElementsByClassName("box")

let element = document.getElementById("square");
console.log(element.parentElement)


