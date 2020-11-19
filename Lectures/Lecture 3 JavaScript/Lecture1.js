// მონაცემთა ტიპები
/* 
1
2
3
4
 */
// alt + shift + ქვედაისარი
var variableName = 10; // number 
var Var = 13.143; // number 
var myText = 'asasdasd'; // string 
var myText = "ანორმაგიბრჭყალებით"; // string 
var skyIsOrange = false; // boolean
var asdd = true; // boolean
var zNull = null;  // null
var myVar; // undefined არაგანსსაზღვრული


// console.log("variableName " + typeof(variableName));
// console.log("floatVar " + typeof(floatVar));
// console.log("myText " + typeof(myText));
// console.log("skyIsOrange " + typeof(skyIsOrange));
// console.log("zNull " + typeof(zNull));
// console.log("myVar " + typeof(myVar));

var name = "Gela";
var age = 26;

console.log("Hi " + name + ", " + name + " is my Hero, When " + name + " was " + age + " years old, he was " + age + " years old")


name = "Hitler";
age = 100;

console.log("Hi " + name + ", " + name + " is my Hero, When " + name + " was " + age + " years old, he was " + age + " years old")
console.log("===========================================================================================");
console.log("===========================================================================================");
// ოპერაციები და ოპერატორები
var x = 13, y =30;
// console.log(-x) // უნარული
// console.log(x-y) // ბინარული
// console.log(x+y) // ბინარული
// console.log(x*y) // ბინარული
// console.log(y/x) // ბინარული
// console.log(y%x) // ბინარული

var x2 = 15;
var y2 = x2++;
console.log("y2 = " + y2); // 15
console.log("X2 = " + x2); // 16

var x3 = 15;
var y3 = ++x3;
console.log("y3 = " + y3); // 16
console.log("X3 = " + x3); // 16

var z = 10;
// console.log(z--);
// console.log(z);
// console.log(--z);
// console.log(z);


var t = 22;
// t = t + 10
t+=10
console.log(t) // 32
t-=12
console.log(t) // 20
t*=3;
console.log(t) // 60
t/=3;
console.log(t) // 20
t%=8;
console.log(t) 

var num1 = 10, num2 = 20;

var compResult = num1 < 20 
console.log("num1 < num2 = " + compResult)
compResult = num1 > num2 
console.log("num1 > num2 = " + compResult)
compResult = num1 <= num2 
console.log("num1 <= num2 = " + compResult)
compResult = num1 >= 10 
console.log("num1 >= num2 = " + compResult)

console.log("")
console.log("")


num1 = 5; // number
num2 = 5; // number
var num3txt = "5"; // string

// compResult = num1 == num2;
// console.log("num1 == num2 = " + compResult)
// compResult = num1 != num2;
// console.log("num1 != num2 = " + compResult)

// compResult = num1 == num3txt; // value
// console.log("num1 == num3txt = " + compResult)
// compResult = num1 === num3txt; // value , type
// console.log("num1 === num3txt = " + compResult)
// compResult = num1 !== num3txt; // value , type
// console.log("num1 !== num3txt = " + compResult)


var txt="myText"
// console.log(typeof(txt+5));
// console.log(txt+5);
// console.log(txt+5+10);

// console.log(5+txt);
// console.log(5+10+txt);

// console.log("myText1 " + "___GELA")


var showMenu = true;
var authorized = true;

// var show = showMenu && authorized;
// და
var show = true && true;
console.log("show  true && true = " + show);
var show = false && true;
console.log("show  false && true = " + show);
var show = true && false;
console.log("show  true && false = " + show);
var show = false && false;
console.log("show  false && false = " + show);
console.log();
console.log();

// ან
var show = true || true;
console.log("show  true ||  true = " + show);
var show = false || true;
console.log("show  false ||  true = " + show);
var show = true ||  false;
console.log("show  true || false = " + show);
var show = false ||  false;
console.log("show  false ||  false = " + show);
console.log();
console.log();

// უარყოფა !
var skyIsCrying = true;

console.log("TRUE")
console.log("!skyIsCrying = " + !skyIsCrying);

skyIsCrying = false;
console.log("FALSE")
console.log("!skyIsCrying = " + !skyIsCrying);

var result = true && (!false) && true && true
console.log("true && (!false) && true && true = " + result)

result = false || false || false || false
console.log("true || false || true || true = " + result)
