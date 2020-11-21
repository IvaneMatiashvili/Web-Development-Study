var sunnyDay= true;
    switch(sunnyDay){
        case true : console.log("such a sunny day"); break;
        default: console.log("it's not bad weather-it is rain :3"); break;
    }

// /*
//     შექმენი ბულეან ტიპის ცვლადი sunnyDay


//     თუ sunnyDay ჭეშმარიტია (true) კონსოლში დააბეჭდინე "such a sunny day"
//     თუ არა დააბეჭინე "i love bad weather :3 "//



var person= "Fraddie Mercury"; 
    if (person== "Fraddie Mercury"){
        console.log("Freddie is Legendary Vocalist!"); 
    }
    else if (person=="John Deacon"){
        console.log("John Deacon is Legendary Bassist!"); 
    }
    else if (person=="Roger Taylor"){
        console.log("Roger Taylor is Legendary Drummer!"); 
    }
    else if (person=="Brain May"){
        console.log("Brain May is Legendary Guitarist!");
    }
    else{
        console.log("who the hell is that?");
    }

// 1.2    
//     შექმენი ცვლადი person

//     თუ person უდრის "Fraddie Mercury" დააბეჭდინე "Freddie is Legendary Vocalist!"
//     თუ person უდრის "John Deacon" დააბეჭდინე "John Deacon is Legendary Bassist!"
//     თუ person უდრის "Roger Taylor" დააბეჭდინე "Roger Taylor is Legendary Drummer!"
//     თუ person უდრის "Brain May" დააბეჭდინე "Brain May is Legendary Guitarist!""
//     თუ აქედან არცერთს არ უდრის დააბეჭდინე "who the hell is that?"

//     !! არ !! გამოიყენო სვიჩი/
// */





var x=1;
do {
    if(x%12==0){
        console.log(x);
    }
    ++x;
}
while (x<=100)

x=1;
while (x<=100){
    if(x%12==0){
        console.log(x);
    }
    ++x;
}
// // #2
// /*
// 2.1 
//     do while და while ციკლების გამოყენებით შეასრულე შემდეგი:
//     ეკრანზე დამიბეჭდე 1 დან 100 მდე ყველა 12 ის ჯერადი რიცხვი.




var i=1
var sum=0
do{
    sum+=i;
    i++;
}
while(i<21)
console.log("sum - "+sum);

// 2.2
//     მოცემულია პროგრამული კოდის ფრაგმენტი:
//     var sum =0;
//     for(var i = 1; i<21;i++){
//         sum+=i;
//     }
//     console.log("sum - "+sum);
//     (მოცემული კოდი ითვლის 1 დან 20 მდე რიცხვების ჯამს)

//     ეს კოდი გადამიკეთე ისე რომ გამოიყენო while ციკლი for ის ნაცვლად



for(i=0; i<31; i++){
    if(i%3==0){
        console.log("i%3=0"); 
    }
    else{
        console.log("i ar aris 3-is jeradi");
    }
}
// 2.3
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






function PrintArray(arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

var array=["elment1","element2",true,35,-100];
PrintArray(array);

// #3
/*
    შექმენი PrintArray ფუნქცია რომლსაც პარამეტრად გადაეცემა arr მასივი და დაბეჭდავს მის ყველა ელემენტს.
    შექმენი myArray მასივი რომლიც შეიცავს შემდეგ მონაცემებს: "elment1","element2",true,35,-100.
    PrintArray ფუნქციის გამოძახებით დაბეჭდე myArray-ის ყველა ელემენტი.
*/






var BigBrother={
    name: "Meduza",
    surname: "GvelTaviani",
    age: 9864536,
    isStrong: true,

    Protect: function(){
        if(this.isStrong==true){
            console.log("I will Protect Everybody!");
        }
        else{
            console.log("I must get Stronger!.");
         }      
    },
   
    ChangeStrengthState: function(){
        this.isStrong=!this.isStrong;
    },

    Print: function(){
        console.log("name= "+ this.name + ", surname= " + this.surname + ", age= " + ", isStrong= " + this.isStrong);
    }
 }
    

 BigBrother.Protect();
 BigBrother.Print();
 BigBrother.ChangeStrengthState();
 BigBrother.Print();

// #4
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