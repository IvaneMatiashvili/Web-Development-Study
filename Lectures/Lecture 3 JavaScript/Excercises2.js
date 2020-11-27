

function write(content) {
    console.log(content);
}
function space() {
    console.log()
    console.log("////////////////////////////////////////")
    console.log("////////////////////////////////////////")
    console.log("////////////////////////////////////////")
    console.log()
}

// #1
/*
    შექმენი ახალი ცვლადდი myString და მიანიჭე მას მნიშვნელობა "Pablo Eskobar was a realy nice guy, When I grow up I want to just be like him!"

    გამოიტანე კონსოლში ამ სტრინგის ზომა (სიმბოლოების რაოდენობა);
    პირველი სიმბოლო, მე-9 სიმბოლო.
    ციკლის გამოყენებით ჩამოწერე სტრინგში შემავვალითითოეული სიმბოლო.?
*/

let myString = "Pablo Eskobar was a realy nice guy, When I grow up I want to just be like him!";
console.log(myString.length);
console.log(myString[0]);
console.log(myString[8]);

for (let i = 0; i < myString.length; ++i) {
    console.log(myString[i]);
}

space()

// #2
/*  
    შექმენი ცვლადი animal და მიანიჭე მას რაიმე მნიშვნლობა.
    სვიჩის საშუალებით შეადარე ის კატას, ძაღლს, ძროხას, მგელს, ზარმაცას და მელიას.
    ცოვეელის წარმატებით შედარბის შემთხვევაში გამოატანინე კრანზე შესაბამისი ხმა მაგალითად cow: console.log("Mooooo");
    თუ ცხოველი ვერ იპოვა დეფალტად გამოატანინე შემდეგი ტექტი "old MCdonads had a farm, deliav ranuni"
*/

let animal = "monkey";
switch (animal) {
    case "monkey":
        console.log("Mooooooo");
        break;
    default:
        console.log("old MCdonads had a farm, deliav ranuni");
        break;
}
space()

// #3
/*
    შექმნი მასივი myArray და მასში ჩაყარე შმდეგი მონაცემები: 1,"text","koba",null,"popkorni",79,true.
    კონსოლში გამოიტანე მასივის ზომა (მასში არსსბულელემენტთა რაოდენობა);
    კონსოლში დაბეჭდე მასივის თითოეული ელემნტი, ციკლის გამოყენბით.

*/

let array = [1, "text", "koba", null, "popkorni", 79, true];
console.log(array.length);
for (let x = 0; x < array.length; x++) {
    console.log(array[x])
}
space()

// #4

/*
    შექმენი უპარამეტრო ფუნქცია სახელად somexiPhrase და მისი გამოძახებით კონსოლში გამოიტანოს ტექსტი "Vaaaax Cavaataneem!".
    შექმენი ფუნქცია სახელად getWhatsLeft რომელიც მიიღებს პარამეტრად a და b რიცცხვბს და დაგვიბრუნებ a-ს b-ზე გაყოფით მიღებულ ნაშთს.

    შექმენი ახალი ცვლადი და ფუნქციის საშუალებით მიანიჭე 15 ის 9ზე გაყოფით მიღებული ნაშთი. 
    დამიწერე ამ ცვლადის მნიშვნელობა კონსოლში
*/
function somexiPhrase() {
    console.log("Vaaaax Cavaataneem!");
}
somexiPhrase();

let container = somexiPhrase;
// იგივეა რაც
// const myF = () => {
//     console.log("Vaaaax Cavaataneem!");
// }
container()

console.log("container")
// console.log(container)



function getWhatsLeft(a, b) {
    return a % b;
}

write(getWhatsLeft(15, 9));

space()
// #5
/*
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ რაიმე რიცხვს დაგვიბრუნებს მის კვადრატს.
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ მართკუთხა სამკუთხედის კათეტების სიგრძეებს დაგვიბრუნებს სსამკუთხედის ფართობს.
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ მართკუთხა სამკუთხედის კათეტების სიგრძეებს დაგვიბრუნებს ჰიპოტენუზის სიგრძეს.
    ყველა შექმნილი ფუნქცია გმოიძახე სათითაოდ.
*/


function Parametricfunction1(a) {
    return (a * a)
}

function Parametricfunction2(a, b) {
    return ((a * b) / 2);
}

function Parametricfunction3(a, b) {
    var c = Math.pow(a,2) + (b * b)   
    return Math.sqrt(c);
}

let str = "" + Parametricfunction1(4) + " " + Parametricfunction2(5, 7);
let str2 = `${Parametricfunction1(4)} ${Parametricfunction2(5, 7)} ${Parametricfunction3(8, 6)}`

write(Parametricfunction1(4));
write(Parametricfunction2(5, 7));
write(Parametricfunction3(8, 6));
write(`${Parametricfunction1(4)} ${Parametricfunction2(5, 7)} ${Parametricfunction3(8, 6)}`)


space()

// #6
/*
        Try Catch

        შექმენი ესეთი სიტოაცია. შენ გაქვს ორი რიცხვის გაყოფა a და b რიცხვებით. სადაც b არის გამყოფი. a:b  =...  .
        იმ შემთვევაში თუ b= 0  გამოისროლე Exception-ი.
        იმ შემთხვეევაში თუ Exception გამოისროლა კონსოლში გამოიტანე წარწერა "cant devide on 0!"
        საბოლოოდ ერორი გინდ მოხდეს გინდ არა გამოტან წარწერა "this task is done"
*/


try{
    let a;
    let b=0;
    let numberSplit=a/b;
    
    if(b==0){
        throw "cant devide on 0";
    }
     
}

catch (err){
    write(err);
}

finally{
    write("This task is done");

}

space()



// #6 
/*

    შექმენი ობიექტი blackCat
    რომელსაც ექნება თვისებები: თვალის ფერი, წონა, მაძღარია თუ არა, სახელი, საყვარელი ფრაზა
    და ექნება მეთოდები:
    1. changeHungerState რომელი თუ მაძღარიში წერია კი მაშშინ არად გადააკეთებს თუარადა პირიქით (hint: მაძღარია თუ არა უნდა იყოს boolean ანუ true false)
    2. gainwaight რომელსაც გადაეემაა რაიმე რიცხვი და ამ რიცხვს უმატებს კატის ამჭამინდლ წონას.
    3. getName რომელიბ გვიბრუნებს სახელს.
    4. setPhrase რომელიც უცვლის ფრაზას.

    დამიწერე კონსოში ობიექტის სათითაო თვისება შემდეგი ფორმატით "name = სახელი" და ა.შ

    მეთოდეის გამოყენებით
    შეუცვალე მაძღრობის სტატუსი და დამიბეჭდე.
    გაასუქე 3 კილოთი და დაბეჭდე.
    გახდეს 2 კილოთი და დაბეჭდე.
    დამიბეჭდე სახელი.
    ახალი ფრაზა მიანიჭე "Came Here to Deliver Some Bad Luck."
    დაბეჭდე ეგ ფრაზა.




    ახალი თვისება გაუწერე owner რომელსაც ექნება ორი თვისება name surname
    დამიბეჭდე owner ის მონაცემები.
*/

let blackCat = {
    eyeColor: "green",
    weight: 77,
    name: "Hitler",
    hungry: false,
    favPhrace: "hiHitler",
    owner: {
        name: "abdul",
        surname: "gandi",
    },
    changeHungerState: function () {
        this.hungry = !this.hungry;
    },
    gainWeight: function (x) {
        this.weight += x;
    },

    getName: function () {
        return this.name;
    },
    myPrint: function (){
        console.log(this.hungry)
    },

    setPhrase: function (newPhrase) {
        this.favPhrace = newPhrase;
    }

}




write(`name =${blackCat.name}`);
write(`eyeColor =${blackCat.eyeColor}`);
write(`weight = ${blackCat.weight}`);
write(`hungry=${blackCat.hungry}`)
write(`favPhrace =${blackCat.favPhrace}`);
write(`owner = ${blackCat.owner.name + " " + blackCat.owner.surname}`)

blackCat.changeHungerState();
write(`hungry =${blackCat.hungry}`);

blackCat.gainWeight(3);
write(`weight = ${blackCat.weight}`);

blackCat.gainWeight(-2);
write(`weight = ${blackCat.weight}`);

write(`name=${blackCat.getName()}`);
blackCat.setPhrase("aiaiaia koko jambo ai aie");
write(`favPhrace = ${blackCat.favPhrace}`);


space()
blackCat.myPrint()

space()

// #7
/*
    წინა ჯავასკრიპტ ობექტი გადაიყვანე ჯეისონის ობიექტად და დამიბეჭდე.

*/

let myblackCatJson = JSON.stringify(blackCat);
write(myblackCatJson.split(":"));
write(blackCat);












