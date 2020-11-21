var number1= 93;
var number2=7;
console.log("93 % 7 = " + number1%number2);
var greeting = "Heloo";
var cuteAnimal = "Black Cat";
console.log(greeting + " " + cuteAnimal);
var st1="One day in the";
var st2="year of the fox";
console.log(st1 + " " +st2);
console.log("Came the time remembered well\nWhen a strong young man of the rising sun\nwith the tolling of the great bell");
var Null=null;
console.log(Null);
var undifined;
console.log(undefined);
// #1
/*
    შექმენი ცვლადი სახელად number1 და მიანიჭე მას მნიშვნელობად 93.
    შექმენი ცვლადი სახელად number2 და მიანიჭე მას მნიშვნელობად 7 .

    კონსოლში გამოიტანე წარერა "93 % 7 = (მნიშვნელობა)".  (მნიშვნელობა) -> აქ ჩაწერე 93 ის 7ზე გაყოფით მიღებული ნაშთი

    შექმენი ცვლადი სახელად greeting და მიანიჭე მას მნიშვნელობად "Hello".
    შექმენი ცვლადი სახელად cuteAnimal და მიანიჭე მას მნიშვნელობა "Black Cat".


    ცვლადების გამოყენებით კონსოლში ერთ ხაზზე დადბეჭდე "Hello Black Cat"

    შექმენი ორი ცვლადი st1 და st2 და მიანიჭე ეს მნიშვნელობა "One day in the" და "year of the fox"
    ცვლადების ერთ ხაზად დამიბეჭდე ტექსტი ისე რომ სიტყვები არ მიატყუპოს. "One day in the(აქ არ მიატყუპოს)year of the fox"

    ცალცალკე ახზე დამიბეჭდე ეს ტექსტები ცვლადების გამოყენების გარეშე ერთი კონსოლ ლოგის გამოყენებით (შეხსენბა: ხაზის ქვემოთ ჩმოსატანად შეგიძლია გამოიყენო ეს - \n )
    "Came the time remembered well
    When a strong young man of the rising
    Sun with the tolling of the great bell"

    შექმენი null ტიპის ცვლადი შექმნი undifined ტიპის ცვლადი და ორივ დაბეჭდე.
*/






// #2

var num1=20;
var num2=9;
var text1="HappyProgrammingDay"
console.log(num1 + num2 + text1);
console.log(text1 + num2 + num1);
/*
შექმენი სამი ცვლადი num1 num2 text1 და მიანიჭე მნიშვნელობები 20 9 "HappyProgrammingDay";
ცვლადების გამოყენებით გამოიტანე ეკრანზე შემდგი ორი წარწერა  "29HappyProgrammingDay" "HappyProgrammingDay920"

*/






// #3
for(x=1; x<=50; x++){
    if(x%3==0)
    console.log(x)
}
var x1=1; 
do { 
    if (x1%3==0){ 
        console.log(x1);
    }
    ++x1;
}
while (x1<=50);

var x2=1;
while (x2<=50){
    if (x2%3==0){
        console.log(x2);
    }
    ++x2;
}
/*
    ეკრანზე დამიბეჭდე 3 ის ჯერადი რიცხვები 1 დან 50ის ჩათვლით.

    ეს გააკეთე სასმივე ციკლის გამოყენებით. (ანუ სამნაირად)
*/






// #4
function sendText(){
    alert("სიზარმაცე ჭკვიანი პროგრამისტის აუცილებელი ატრიბუტია")
}
// sendText();
/*

ბრაუზერის ეკრანზე ამოაგდდე შემდეგი შეტყობინება

"სიზარმაცე ჭკვიანი პროგრამისტის აუცილებელი ატრიბუტია"

*/






// #5
var myString= "Santa Claus is Real, you better belive me or you won't get the new Iphone you wished for, you little motherFu**er!"
console.log(myString.length);
console.log(myString[0]);
console.log(myString[14]);
for(i=0; i<myString.length; i++){
    console.log(myString[i]);
}
/*
შექმენი ახალი ცვლადდი myString და მიანიჭე მას მნიშვნელობა "Santa Claus is Real, you better belive me or you won't get the new Iphone you wished for, you little motherFu**er!"

    გამოიტანე კონსოლში ამ სტრინგის ზომა (სიმბოლოების რაოდენობა);
    პირველი სიმბოლო, 15-ე სიმბოლო.
    ციკლის გამოყენებით ჩამოწერე სტრინგში შემავვალითითოეული სიმბოლო.
*/






// #6

var car={
    model:"carCat",
    color: "blue",
    speed: "0bla",
}

switch(car){
    case "red" : console.log("Cars color = " + this.color + ", " + "model= " + this.model + ", " + "speed = " + this.speed); break;
    case "blue" : console.log("Cars color = " + this.color + ", " + "model= " + this.model + ", " + "speed = " + this.speed); break;
    case "green" : console.log("Cars color = " + this.color + ", " + "model= " + this.model + ", " + "speed = " + this.speed); break;
    default: console.log("you've got some wierd car, bro"); break;
}

/*
შექმენი ობიექტი car რომელსაც ექნბა სამი თვისება model, color, speed

სვიჩის გამოყენებით car-ის თვისება color შეადარე შემდეგ მონაცემებს "red","blue","green"

თუ მანქანა არის წითელი გამოიტანე ტექსტი: "Car's color = (ფერი), model=(მოდელი),speed = (სიჩქარე)". ფრჩხილებში დაწერილი ტექსტის ნაცვლად გამოჩნდეს მნიშვნელობები
თუ მანქანის ფერი იქნება სხვა მაშინ ამოვიდეს წარწერა "you've got some wierd car, bro"

*/






// #7
function printMyArray(arr){
    for(i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}





/*
შექმენი ფუნქცია printMyArray რომელსაც პარამეტრად გადაეცემა arr  ანუ მასივი [ hint: printMyArray(arr){ კოდი }  ]

და ციკლის საშუალებით დაბეჭდავს ამ მასივის ყველა ელმენტს კონსოლში.

*/






// #8

var array=["generali kutuzovi","hitleri","stalini","gela",77,true,false];
printMyArray(array);
/*
შექმენი მასივი სადაც ჩაყრი შემდეგ მონაცემებს :   "generali kutuzovi","hitleri","stalini","gela",77,true,false.

წინა ფუნქციის გამოყენბით დაბეჭდე ყველა ელემენტი
*/






// #9
var Keyboard={
    keyNumber:1,
    OctaveNumber: 4,
    Material: "wood",
    isBeautiful: "true", 
    print: function(){
        console.log("keyNumber= " + this.keynumber +", Octavenumber= " + this.OctaveNumber + ", isBeautiful= " + this.isBeautiful+"." );
    }
    
}

Keyboard.Material= "cool wood";
Keyboard.print();
/*

შექმენი ობიექტი Keybord 
    რომელსაც ექნება შემდეგი თვისებები: 
    - keyNumber, OctaveNumber, Material, isBeautiful (ეს ბულეან ტიპის)
    
    და ასევე ექნება მეთოდები: 
    - print რომელიც დაბეჭდავს "keyNumber = (..), OctaveNumber = (..), Material = (..), isBeautiful = (..)"  ფრჩხილების ადგილას შესსაბამისი მნიშვნეობები


    შექმენი ასეთი ობიექტი სადაც სატყისი material- იქნება "wood"
    შემდეგ matrial-ის მნიშვნელობა  შეუცვალე "cool wood" ით.
    და დამიბეჭდე მეთოდის გამოყენებით

*/