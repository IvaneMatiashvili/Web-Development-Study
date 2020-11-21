

function makeSpace(){
    console.log("");
    console.log("");
    console.log("");
}

function makeSquareRed(){
    var square = document.getElementById("square");
    square.style.backgroundColor = "red";
    console.log("Hi Hitler");
}
     


function makeSquareYellow(){
    var square = document.getElementById("square");
    square.style.backgroundColor = "yellow";
    console.log("Hi Hitler !!!!!");
}


/* Lesson 1 */



/* მონაცემთა ტიპები */
var x = 1000; // number 
var y = 2.3; // number
var z = true; // boolean   true და false
var text = "Fox is on the Run"; // string 
var empty; // undifined მაგრამ მას გამოეყო მეხსიერებაში რაღც ნაწილი
var thisOneIsNull = null;



console.log("x  = " + x + " and  is type of - " + typeof(x));
console.log("y = " + y + " and is type of - " + typeof(y));
console.log("z = "+ z + " and is type of - " + typeof(z));
console.log("text = " + text + " and is type of - " + typeof(text));
console.log("empty = " + empty + " and is type of - " + typeof(empty));
console.log("thisOneIsNull = " + thisOneIsNull + " and is type of - " + typeof(thisOneIsNull));
thisOneIsNull = "ok"; // ტიპი შეეცვალა როდესაც სხვა რამ მივანიჭეთ
console.log("thisOneIsNull = " + thisOneIsNull + " and is type of - " + typeof(thisOneIsNull));



makeSpace();



/* Example 1 */

var name = "Jumberi";
var age = 22;


console.log(name + " is " + age + " years old. " + name + " wants to become world leader. " + name + " is pretty smart guy. Everybody loves " + name + ". Hi " + name + "!")
makeSpace();

/* ოპერაციები */


var x1 = 3, x2 = 5; // number
var text = "DemoExample" // string 
var newVariable = text + x1;

console.log("text + x1 =  + " + newVariable  + " and newVariable is type of " + typeof(newVariable) );
makeSpace();

// ტიპების შეცვლის მაგალითი. მიყვება მარცხნიდან მარჯვნივ
console.log("x1 + x2 = " + x1 + x2);
console.log(x1 + x2 + "  = x1 + x2 ");
console.log("x1 + x2 = " + x1 * x2); // ვინაიდდან ტექსტი არ მრავლდება რიცხვები გაამრავლა და მერე მიუმატატექსტს
makeSpace();

console.log("x1 + x2 = ");
console.log(x1 + x2);
console.log("x1 * x2 = ");
console.log(x1 * x2);
console.log("x1 / x2 = ");
console.log(x1 / x2);



// % ნაშთს გიგდებს
var z1 = 23;
var z2 = 4;

console.log("z1 % z2 =");
console.log(z1 % z2);

// ინკრემენტ და დეეკრემენტ ოპერაციები
var demoVar = 10;
console.log(demoVar); 
// ++  ამჟამინნდელ მნიშვნელობას დააუმატე ერთი// ++  ამჟამინნდელ მნიშვნელობას დააუმატე ერთი
demoVar++; // 10 + 1 = 11
demoVar++; // 11 + 1 = 12

demoVar--; // 12 - 1 = 11
--demoVar; // 11 -  1;

makeSpace();

// განსხვავება ++var და var++

var myVar1 = 10;
var myVar2 = 10;

console.log("myVar1++ = " + myVar1++); // 10  ჯერ მნიშვნელობა ამოიღო და მერე მიუმატა
console.log("++myVar2 = " + ++myVar2); // 11

console.log("myVar1 = " + myVar1);

