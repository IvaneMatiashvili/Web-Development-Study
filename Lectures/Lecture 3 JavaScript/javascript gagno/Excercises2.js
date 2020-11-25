

// #1

var myString="Pablo Eskobar was a realy nice guy, When I grow up I want to just be like him!";
    console.log(myString.length);
    console.log(myString[0]);
    console.log(myString[8]);
    
    for(var i=0; i<myString.length; ++i){
        console.log(myString[i]);
    }
//console.log(myString[]);
/*
    შექმენი ახალი ცვლადდი myString და მიანიჭე მას მნიშვნელობა "Pablo Eskobar was a realy nice guy, When I grow up I want to just be like him!"

    გამოიტანე კონსოლში ამ სტრინგის ზომა (სიმბოლოების რაოდენობა);
    პირველი სიმბოლო, მე-9 სიმბოლო.
    ციკლის გამოყენებით ჩამოწერე სტრინგში შემავვალითითოეული სიმბოლო.?
*/



// #2

var animal= "monkey";
switch(animal){
   case "monkey" : console.log("Mooooooo"); break;
   case "cow" : console.log("Mooooooo"); break;
   case "dog" : console.log("wafwaf"); break;
   case "fox" : console.log ("what does the fox say?"); break;
   default: console.log("old MCdonads had a farm, deliav ranuni");break;
}
/*  
    შექმენი ცვლადი animal და მიანიჭე მას რაიმე მნიშვნლობა.
    სვიჩის საშუალებით შეადარე ის კატას, ძაღლს, ძროხას, მგელს, ზარმაცას და მელიას.
    ცოვეელის წარმატებით შედარბის შემთხვევაში გამოატანინე კრანზე შესაბამისი ხმა მაგალითად cow: console.log("Mooooo");
    თუ ცხოველი ვერ იპოვა დეფალტად გამოატანინე შემდეგი ტექტი "old MCdonads had a farm, deliav ranuni"
*/



// #3

var array=[1,"text","koba",null,"popkorni",79,true ];
    console.log(array.length);
for(var x = 0; x < array.length; x++){
    console.log("array["+ x +"] = " + array[x] )
}
/*
    შექმნი მასივი myArray და მასში ჩაყარე შმდეგი მონაცემები: 1,"text","koba",null,"popkorni",79,true.
    კონსოლში გამოიტანე მასივის ზომა (მასში არსსბულელემენტთა რაოდენობა);
    კონსოლში დაბეჭდე მასივის თითოეული ელემნტი, ციკლის გამოყენბით.

*/


// #4



function getWhatsLeft(a, b){
    return a%b;
}

var result=getWhatsLeft(15,9);
    console.log(result);

/*
    შექმენი უპარამეტრო ფუნქცია სახელად somexiPhrase და მისი გამოძახებით კონსოლში გამოიტანოს ტექსტი "Vaaaax Cavaataneem!".
    შექმენი ფუნქცია სახელად getWhatsLeft რომელიც მიიღებს პარამეტრად a და b რიცცხვბს და დაგვიბრუნებ a-ს b-ზე გაყოფით მიღებულ ნაშთს.

    შექმენი ახალი ცვლადი და ფუნქციის საშუალებით მიანიჭე 15 ის 9ზე გაყოფით მიღებული ნაშთი. 
    დამიწერე ამ ცვლადის მნიშვნელობა კონსოლში
*/


// #5
function getx2(a){
    return (a*a)
}
    console.log(getx2(4));



function getx3 (a,b){
    return ((a*b)/2);
}
    var result=getx3(5,7);
    console.log(result);


function getx4 (a,b){
    var c= (a*a)+(b*b)
    return Math.sqrt(c);
}
    var result=getx4(8,6);
    console.log(result);
/*
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ რაიმე რიცხვს დაგვიბრუნებს მის კვადრატს.
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ მართკუთხა სამკუთხედის კათეტების სიგრძეებს დაგვიბრუნებს სსამკუთხედის ფართობს.
    შექმენი პარამეტრიანი ფუნქცია რომელსაც თუ გადავცემთ მართკუთხა სამკუთხედის კათეტების სიგრძეებს დაგვიბრუნებს ჰიპოტენუზის სიგრძეს.
    ყველა შექმნილი ფუნქცია გმოიძახე სათითაოდ.
*/


// #6
var a=5;
var b=0;
try{
    
    if(b==0){
        throw "cant devide on 0";
    }
     var numberSplit=a/b; 
}

catch (error){
    console.log(error);
}

finally{
    console.log("This task is done");
}



/*
        Try Catch

        შექმენი ესეთი სიტოაცია. შენ გაქვს ორი რიცხვის გაყოფა a და b რიცხვებით. სადაც b არის გამყოფი. a:b  =...  .
        იმ შემთვევაში თუ b= 0  გამოისროლე Exception-ი.
        იმ შემთხვეევაში თუ Exception გამოისროლა კონსოლში გამოიტანე წარწერა "cant devide on 0!"
        საბოლოოდ ერორი გინდ მოხდეს გინდ არა გამოტან წარწერა "this task is done"
*/



// #6 
var blackCat={
    eyeColor:"green", 
    weight: 77, 
    name: "Hitler",
    hungry : false,
    favPhrace: "hiHitler",
    owner: {
        name:"abdul",
        surname: "gandi",
    },
    changeHungerState: function(){
        this.hungry=!this.hungry;
    },
    gainWeight: function(x){
        this.weight+=x;
    },

    getName: function(){
        return this.name;
    },

    setPhrase: function(newPhrase){
        this.favPhrace=newPhrase;
    }

}

console.log("name = " + blackCat.name);
console.log("eyeColor = " + blackCat.eyeColor);
console.log("weight = " + blackCat.weight);
console.log("favPhrace = " + blackCat.favPhrace);
console.log("owner = " + blackCat.owner.name + " " + blackCat.owner.surname)
blackCat.gainWeight(3);
console.log("weight = " + blackCat.weight);

blackCat.changeHungerState();
console.log("hungry = " + blackCat.hungry);

blackCat.gainWeight(-2);
console.log("weight = " + blackCat.weight);

console.log(blackCat.getName());

blackCat.setPhrase("Came Here to Deliver Some Bad Luck.");
console.log("favPhrace = " + blackCat.favPhrace);



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



// #7

var myblackCatJson = JSON.stringify(blackCat);
console.log(myblackCatJson);
console.log(blackCat);
/*
    წინა ჯავასკრიპტ ობექტი გადაიყვანე ჯისონის ობიექტად და დამიბეჭდე.
    
*/










