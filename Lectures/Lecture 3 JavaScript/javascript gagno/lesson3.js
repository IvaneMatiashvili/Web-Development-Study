
function write(string){
    console.log(string);
}
function space(){
    console.log("");
    console.log("");
    console.log("");
}
write("LESSON 3");
space();







var bestTeacher = "Beka";
switch(bestTeacher){

    
    case 1: write("I know"); break;
    case null : write("variable is null!s"); break;
    case "Giuna" : write("he's goodd one, but not as good as Beka!"); break;
    case "Beka" : write("of Course!"); break;
    default: write("Exprience");  break;
}


space();



var array = [1,2,3,4,"text",true,false,null];

//                      8
for(var i = 0; i < array.length; i++){
    write("array["+ i +"] = " + array[i] )
}
space();

for(var i = array.length - 1; i >=0; i--){
    write("array["+ i +"] = " + array[i] )
}

space();
write("array.length = " + array.length);
space();




//                   პარამეტრები
// function სახელი(.........)  {
// შესასრულებელი კოდი
//}


// გამოძახება  (შიგნით გადაეცი ცვლადები პარამეტრებად)
//   სახელი(....)


//უპარამეტრო ფუნქცია
function TomYork(){
    console.log("No Surprises");
}

TomYork();




// პარამტრიანი ფუნქცია


function giveMeNashti_Add7(num1,num2){

    var addNumber = 7;

    return num1%num2 + addNumber;
}



var result = giveMeNashti_Add7(100,91);

console.log(result)


