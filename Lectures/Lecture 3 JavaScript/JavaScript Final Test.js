function Task(id) {
    console.log("========================================" + id + "========================================")
}
function log(content) {
    console.log(content)
}
function space() {
    console.log()
    console.log()
    console.log()
}

/*
ტესტის აღწერა:
რაოდენობა        - 14 დავალება
შესრულების დრო  - 2 სთ       

შეფასების ტიპი: არ გვაქვს. ჩვენ მიზანია ვიპოვოთ ჩვენს ცოდნაში ბზარები, რათა შემდეგ ცოდნის ხარისხი გავზარდოთ 
                შესაბამისი თემის უკეთ გააზრებით და არა ის რომ ქულა მივასტიკეროთ ჩვენს ცოდნას.

შევსებულ ტესტს განვიხილავთ ერთად, ტესტირების დასრულებისთანავე

Good Luck, Hail Hitler!
*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  Task 1 - ცვლადები ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
    შექმენი ცვლადი სახელად number1 და მიანიჭე მას მნიშვნელობად 93.
    შექმენი ცვლადი სახელად number2 და მიანიჭე მას მნიშვნელობად 7 .

    კონსოლში გამოიტანე წარერა "93 % 7 = (მნიშვნელობა)".  (მნიშვნელობა) -> აქ ჩაწერე 93 ის 7ზე გაყოფით მიღებული ნაშთი (ცვლადების გამოყენებით)
    

    შექმენი ცვლადი სახელად greeting და მიანიჭე მას მნიშვნელობად "Hello".
    შექმენი ცვლადი სახელად cuteAnimal და მიანიჭე მას მნიშვნელობა "NineTailed Fox".


    ცვლადების გამოყენებით კონსოლში ერთ ხაზზე დადბეჭდე "Hello NineTailed Fox"

    შექმენი ორი ცვლადი st1 და st2 და მიანიჭე ეს მნიშვნელობა "One day in the" და "year of the fox"
    ცვლადების ერთ ხაზად დამიბეჭდე ტექსტი ისე რომ სიტყვები არ მიატყუპოს. "One day in the(აქ არ მიატყუპოს)year of the fox"

    ცალცალკე ახზე დამიბეჭდე ეს ტექსტები ცვლადების გამოყენების გარეშე ერთი კონსოლ ლოგის გამოყენებით (შეხსენბა: ხაზის ქვემოთ ჩმოსატანად შეგიძლია გამოიყენო ეს - "\n" )
    "Came the time remembered well
    When a strong young man of the rising
    Sun with the tolling of the great bell"

    შექმენი null ტიპის ცვლადი შექმნი undifined ტიპის ცვლადი და ორივ დაბეჭდე.
*/
Task(1)

let number1 = 93;
let number2 = 7;
log(`93%7=${number1 % number2}`);

space();

let greeting = "Hello";
let cuteAnimal = "NineTailed Fox";
log(`${greeting + " " + cuteAnimal}`);

space();

let st1 = "One day in the";
let st2 = "year of the fox";
log(`${st1 + " " + st2}`);

space();

log("Came the time remembered well \n When a strong young man of the rising \n Sun with the tolling of the great bell")

space();

var zNull = null;
var myVar;
log(`${zNull} ${myVar} `);







///////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Task 2 - strings & numeber ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
შექმენი სამი ცვლადი num1 num2 text1 და მიანიჭე მნიშვნელობები 21 8 "HappyProgrammingDay";
ცვლადების გამოყენებით გამოიტანე ეკრანზე შემდგი ორი წარწერა  "29HappyProgrammingDay" "HappyProgrammingDay821"

*/
Task(2);

space();


let num1 = 21;
let num2 = 8;
let text1 = "HappyProgrammingDay";
log(`${num1 + num2 + text1}`);
log(`${text1 + num2 + num1}`);




///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  Task 3 - ციკლები ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
    ეკრანზე დამიბეჭდე 3 ის ჯერადი რიცხვები 1 დან 50ის ჩათვლით.

    ეს გააკეთე სასმივე ციკლის გამოყენებით. (ანუ სამნაირად)
*/
Task(3);

space();

for (var x = 0; x <= 50; ++x)
    if (x % 3 === 0) {
        console.log(x);
    }


var x1 = 0;
do {
    if (x1 % 3 === 0) {
        console.log(x1);
    }
    ++x1;
}
while (x1 < 50)


var x2 = 0;
while (x2 < 50) {
    if (x2 % 3 === 0) {
        console.log(x2);
    }
    ++x2;
}







///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  Task 4 - ციკლები ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
ბრაუზერის ეკრანზე ამოაგდდე შემდეგი შეტყობინება

"სიზარმაცე ჭკვიანი პროგრამისტის აუცილებელი თვისებაა"
*/
Task(4)

space();
//alert("სიზარმაცე ჭკვიანი პროგრამისტის აუცილებელი თვისებაა");





///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  Task 5 - სტრინგები ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
შექმენი ახალი ცვლადდი myString და მიანიჭე მას მნიშვნელობა "Santa Claus is Real, you better belive me or you won't get the new Iphone you wished for, you little motherFu**er!"

    გამოიტანე კონსოლში ამ სტრინგის ზომა (სიმბოლოების რაოდენობა);
    პირველი სიმბოლო, 15-ე სიმბოლო.
    ციკლის გამოყენებით ჩამოწერე სტრინგში შემავვალითითოეული სიმბოლო.
*/
Task(5);

space();

let myString = "Santa Claus is Real, you better belive me or you won't get the new Iphone you wished for, you little motherFu**er!";
log(myString.length);
log(myString[0]);
log(myString[14]);
space();
for (let i = 0; i < myString.length; ++i) {
    log(myString[i]);
}






///////////////////////////////////////////////////////////////////////////////////
//////////////////////////  Task 6 - ობიექტები თვისებები //////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
შექმენი ობიექტი car რომელსაც ექნბა სამი თვისება model, color, speed

სვიჩის გამოყენებით car-ის თვისება color შეადარე შემდეგ მონაცემებს "red","blue","green"

თუ მანქანა არის წითელი გამოიტანე ტექსტი: "Car's color = (ფერი), model=(მოდელი),speed = (სიჩქარე)". ფრჩხილებში დაწერილი ტექსტის ნაცვლად გამოჩნდეს მნიშვნელობები
თუ მანქანის ფერი იქნება სხვა მაშინ ამოვიდეს წარწერა "you've got some wierd car, bro"

*/
Task(6);

space()

let car = {
    model: "BMw",
    color: "red",
    speed: 8000,

}
switch (car.color) {
    case "red": console.log("Car's color = red, model=BMW,speed = 8000.");
    case "blue": console.log("you've got some wierd car, bro");
    case "green": console.log("you've got some wierd car, bro");
    default: console.log("beeenveee jooo dedamouvaaa joooo benveee manqanaaaa");
}









///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  Task 7 - ფუნქციები ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
შექმენი ფუნქცია printMyArray რომელსაც პარამეტრად გადაეცემა arr  ანუ მასივი [ hint: printMyArray(arr){ კოდი }  ]

და ციკლის საშუალებით დაბეჭდავს ამ მასივის ყველა ელმენტს კონსოლში.

*/
Task(7);

space();



function printMyArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
}


///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////  Task 8 - ფუნქციები 2 //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
შექმენი მასივი სადაც ჩაყრი შემდეგ მონაცემებს :   "generali kutuzovi","hitleri","stalini","gela",77,true,false.

წინა ფუნქციის გამოყენბით დაბეჭდე ყველა ელემენტი
*/
Task(8);

space();



let MyArray = ["generali kutuzovi", "hitleri", "stalini", "gela", 77, true, false];
printMyArray(MyArray);




///////////////////////////////////////////////////////////////////////////////////
//////////////////////////  Task 9 - ობიექტები მეთოდები //////////////////////////
///////////////////////////////////////////////////////////////////////////////////
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

Task(9);

space();

let Keybord = {
    keyNumber: 88,
    OctaveNumber: 8,
    Material: "wood",
    isBeautiful: true,
    print: function () {
        console.log(`keyNumber = ${this.keyNumber}, OctaveNumber =${this.OctaveNumber}, Material =${this.Material},isBeautiful =${this.isBeautiful}  `)
    },

    changeMaterial: function (newMaterial) {
        this.Material = newMaterial;
    },
}



Keybord.print();
Keybord.changeMaterial("cool wood");
log(Keybord.Material);
Keybord.print();




///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  Task 10 - if else ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//     შექმენი ბულეან ტიპის ცვლადი sunnyDay

//     თუ sunnyDay ჭეშმარიტია (true) კონსოლში დააბეჭდინე "such a sunny day"
//     თუ არა დააბეჭინე "i love bad weather :3 "//

Task(10);

space();

let sunnyDay;

if (sunnyDay = true) {
    console.log("such a sunny day")
}
else {

    console.log("i love bad weather :3 ")
}




///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////  Task 11 - if else  2 //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//     შექმენი ცვლადი person

//     თუ person უდრის "Fraddie Mercury" დააბეჭდინე "Freddie is Legendary Vocalist!"
//     თუ person უდრის "John Deacon" დააბეჭდინე "John Deacon is Legendary Bassist!"
//     თუ person უდრის "Roger Taylor" დააბეჭდინე "Roger Taylor is Legendary Drummer!"
//     თუ person უდრის "Brain May" დააბეჭდინე "Brain May is Legendary Guitarist!""
//     თუ აქედან არცერთს არ უდრის დააბეჭდინე "who the hell is that?"

//     !! არ !! გამოიყენო სვიჩი/
// */
Task(11);

space();

let person;

if (person = "Fraddie Mercury") {
    console.log("Freddie is Legendary Vocalist!")
}
if (person = "John Deacon") {
    console.log("John Deacon is Legendary Bassist!")
}
if (person = "Roger Taylor") {
    console.log("Roger Taylor is Legendary Drummer!")
}
if (person = "Brain May") {
    console.log("Brain May is Legendary Guitarist!")
}
else {

    console.log("who the hell is that?"
    )
}





///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  Task 12 - ციკლები ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// 12.1
//     მოცემულია პროგრამული კოდის ფრაგმენტი:
//     var sum =0;
//     for(var i = 1; i<21;i++){
//         sum+=i;
//     }
//     console.log("sum - "+sum);
//     (მოცემული კოდი ითვლის 1 დან 20 მდე რიცხვების ჯამს)

//     ეს კოდი გადამიკეთე ისე რომ გამოიყენო while ციკლი for ის ნაცვლად

Task(12);
space();
Task(12.1);
space();

var sum = 0;
for (var i = 1; i < 21; i++) {
    sum += i;
}
console.log("sum - " + sum);
var sum1 = 0;
var i = 1
while (i < 21) {
    sum1 += i;
    i++;

}
console.log("sum1 - " + sum1);




// 12.2
//     მოცემულია პროგრამული კოდის ფრაგმენტი:


//     var i=0;
//     while(i<31){
//         if(i%3==0){
//             console.log("i%3=0");
//         } else{
//             console.log("i ar aris 3-is jeradi");
//         }
//         i++;
//     }


//     გადამიკეთე ეს კოდი for ციკლის გამოყენებით

// */
Task(12.2)
space();

var i = 0;
while (i < 31) {
    if (i % 3 == 0) {
        console.log("i%3=0");
    } else {
        console.log("i ar aris 3-is jeradi");
    } i++;
}

for (var i = 0; i < 31; i++)
    if (i % 3 == 0) {
        console.log("i%3=0");
    } else {
        console.log("i ar aris 3-is jeradi");
    }



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Task 13 - ფუნქციები/მასივები //////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
    შექმენი PrintArray ფუნქცია რომლსაც პარამეტრად გადაეცემა arr მასივი და დაბეჭდავს მის ყველა ელემენტს.
    შექმენი myArray მასივი რომლიც შეიცავს შემდეგ მონაცემებს: "elment1","element2",true,35,-100.
    PrintArray ფუნქციის გამოძახებით დაბეჭდე myArray-ის ყველა ელემენტი.
*/
Task(13);
space();

function printMyArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
}

let MyArray1 = [ "elment1","element2",true,35,-100.];
printMyArray(MyArray1);




///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  Task 14 - ობიექტები //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
    შექმენი ობიექტი BigBrother

    რომელსაც ექნება შემდეგი თვისებები:
    - name              (string)
    - surname           (string)
    - age               (number)
    - isStrong          (boolean)

    და ექნება შემდეგი მეთოდები:

    - Protect               - თუ  isStrong-ის მნიშვნლობა არის true დაბეჭდავს "I will Protect Everybody!" თუ არადა დაბეჭდავს "I must get Stronger!."  (უპარამეტრო მეთოდი)
    - changeStrenghtState   - თუ  isStrong-ის მნიშვნლობა არის true მას მნიშვნლობად მიანიჭებს false-ს და თუ არის false მაშინ true-ს.   (უპარამეტრო მეთოდი)
    - Print                 - დაბეჭდავს მთელ ობიექტს შემდდგნაირად: "name = (..), surname = (..), age = (..), isStrong = (..)"   (უპარამეტრო ფუნქცია) (უპარამეტრო მეთოდი)
                              ფრჩხილების ადგილას შესსაბამისი მნიშვნეობები


    გამოიძახე Protect, Print, changeStrenghtState, Print.   (იმ თანმიმდევრობით როგორც აქ წერია)

*/
Task(14);
space();


let BigBrother = {
    name : "mamfrod",
    surname : "mamfrodia",
    age : 25,
    isStrong : true,
    protect: function () {if (this.isStrong = true) {
        console.log("I will Protect Everybody!")
    }
    else {
    
        console.log("I must get Stronger!.")
    }
    },    

    changeStrenghtState: function () { if (this.isStrong = true) {
        console.log(!true);
    }
    if (this.isStrong = false) {
        console.log(!false);
    }
    },
    print: function () {
        console.log(`name = ${this. name}, surname =${this. surname}, age =${this.age},isStrong =${this.isStrong}`)
    },
}


BigBrother.protect();
BigBrother.print();
BigBrother.changeStrenghtState();
BigBrother.print();