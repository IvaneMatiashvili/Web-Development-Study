
// #1
/*
    შექმენი ცვლადი სახელად number1 და მიანიჭე მას მნიშვნელობად 9.
    შექმენი ცვლადი სახელად number2 და მიანიჭე მას მნიშვნელობად 7.7 .
    შექმენი ცვლადი სახელად greeting და მიანიჭე მას მნიშვნელობად "Hello".
    შექმენი ცვლადი სახელად cuteAnimal და მიანიჭე მას მნიშვნელობა "Black Cat".

    შექმენი ახალი ცვლადი sum1 და ამიანიჭე მას number1-ისა და number2-ის ჯამი.
    დაბეჭდე "sum1 = შედეგი"   (შედეგის ადგილას ჩაწერილი იყოს მნიშვნლობა)

    ცვლადების გამოყენებით კონსოლში ერთ ხაზზე დადბეჭდე "Hello Black Cat"

    შექმენი null ტიპის ცვლადი შექმნი undifined ტიპის ცვლადი და ორივ დაბეჭდე.
*/

let number1 = 9;
let number2 = 7.7;
let greeting = "Hello";
let cuteAnimal = "Black cat";

let sum1 = number1 + number2;
console.log("sum1= " + sum1);
console.log(greeting + " " + cuteAnimal);

let boomnull = null;
let rodisgabrwyindebaiveria; // undefined

let cvladi = "Fredie "
console.log(`My name is ${cvladi}`)
console.log(`i am ${2 + 20} years old, my name is ${cvladi} `)




// #2
/*
    შექმენი ცვლადი name და მიანიჭე "tamuna". შექმენი ცვლადი hobby და მიანიჭე "programming".

    ამ ორი ცვლადი გამოყენებით გამოტანე შემდეგი წარწერა:
    "tamuna loves programming, she hopes to become very good at programming. tamuna is good girl. programming is for cool kids."

    ცვლადებს name და hobby მიანიჭე შემდეგი მნიშვნელობები "Obama" და "Presidenting".

    წინა წარწერა გამოიტანე თავიდან ცვლადების ახალი მნიშვნელობბით.
*/

let name = "tamuna";
let hobby = "programming";
console.log(name + " loves " + hobby + ", she hopes to become very good at " + hobby + ". " + name + " is a good girl. " + hobby + " is for cool kids.");
name = "obama";
hobby = "Presidenting";
console.log(name + " loves " + hobby + ", she hopes to become very good at " + hobby + ". " + name + " is a good girl. " + hobby + " is for cool kids.");








// #3
/*
შექმენი სამი ცვლადი num1 num2 text1 და მიანიჭე მნიშვნელობები 9 8 "MyText";
ცვლადების გამოყენებით გამოიტანე ეკრანზე შემდგი ორი წარწერა  "17MyText" "MyText98"

*/
let num1 = 9;
let num2 = 8;
let text1 = "MyText"
console.log(num1 + num2 + "MyText");
console.log(text1 + num1 + num2);






// #4
/*
    ეკრანზე დამიბეჭდე რიცხვები 1 დან 50ის ჩათვლით.

    ეს გააკეთე სასმივე ციკლის გამოყენებით. (ანუ სამნაირად)
*/
for (var x = 1; x <= 50; ++x) 
    console.log(x) ;
    
var x1 = 1;
do {
    console.log(x1);
    ++x1;
}
while (x1 < 51)

var x2 = 1;
while (x2 < 51) {
    console.log(x2);
    ++x2;
}









// #5
/*
    ნებისმიერი ციკლის გამოყენებით ეკრანზე დამიბეჭდე ლუწი რიცხვები 2 დან 100მდე

    გამოტოვე იტერაცია (ის შემთხვევა) როდესაც უნდა დაბეჭდოს 44   ან  78.

*/

for(let x=1; x<=100; x++){
    if(x%2==0)
      console.log(x);
    if(x==44) continue;
    if(x==78) continue;
}


// #6 
/*

ბრაუზერის ეკრანზე ამოაგდდე შემდეგი შეტყობინება

"ყველა დავალება წარმატბითაა შესრულებული"

*/

// alert("ყველა დავალება წარმატებითაა შესრულებული");