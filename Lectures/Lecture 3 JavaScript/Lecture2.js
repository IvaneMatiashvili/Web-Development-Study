// Answers from Previous Lecture
/*
    var x = 10;
    let y = 10;
    const PI = 3.14;

    x = 15;
    y=15;

    z=15;
    console.log(x);
    console.log(y);
    console.log(z);

    i++
    i = i + 1
    i+=2
    i = i + 2
*/
////////////////////////////////////////

////////////////////// IF ELSE //////////////////////

// var x = 30;

//   თუ x ის 2ზე ორზე გაყოფით მიღებული ნაშთი უდრის 0
//          დაბეჭდე რომ ლუწია
//  თუ x ის 2ზე ორზე გაყოფით მიღებული ნაშთი უდრის 1
//          დაბეჭდე რომ კენტია

// if(x % 3 === 0){
//     console.log("შესრულდა if");
// }
// else if(x % 3 === 1){
//     console.log("შესრულდა else if");
// }
// else {
//     console.log("შესრულდა else");
// }


// if(x % 3 === 0){
//     console.log("შესრულდა if 1");
// }
// if(x % 10 === 0){
//     console.log("შესრულდა if 2");
// }


// if(/* პირობა*/ true){
//     // code
// }
// else {
//     // code
// }



////////////////////// SWITCH //////////////////////

// var text = "hitler";


// switch(text){
//     case "hitler":console.log("hitler");break;
//     case "gela": console.log("GELA");break;
//     case "givi1":console.log("GIVI1");break;
//     case "givi2":console.log("GIVI2");break;
//     case "givi3":console.log("GIVI3");break;
//     case "givi4":console.log("GIVI4");break;
//     case "gela5":console.log("GIVI5");break;
//     case "givi6":console.log("GIVI6");break;
//     default: console.log("name not found");
// }



////////////////////// ციკლები //////////////////////



// for (let i = 0; i < 20; i++) {
//     if (i == 12) {
//         continue;
//     }

//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 10;
// while (i < 5) {
//     i++
//     if (i == 12) {
//         continue;
//     }

//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// let i = 10;

// do {
//     i++
//     if (i == 12) {
//         continue;
//     }

//     console.log(i);
// } while (i < 5)

////////////////////// სტრიქონები //////////////////////
var text =  "თუ იცით, იგავ-არაკებს მიიღებს?– არა,\n მაგრამ უარს არ გეტყვით."
console.log(text);
text =  "თუ იცით, იგავ-არაკებს მიიღებს?– არა, მაგრამ უარს არ გეტყვით."
console.log(text);

// text.property   თვისება
// text.method()   მეთოდი

console.log(text.length);
// console.log(text.charAt(6));
console.log(text[6]);


let myText = "asdaASASsasd"
let myText2 = "ASasasSDAS"

console.log(myText.toUpperCase());
console.log(myText2.toLowerCase())


// 0 1 2 3 4 5 6 7 8 9 10 
// ბ ე  ქ ა ბ ა ძ ა ღ უ ა