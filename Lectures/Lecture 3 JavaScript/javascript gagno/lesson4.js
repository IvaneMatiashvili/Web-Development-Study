
function write(string){
    console.log(string);
}
function space(){
    console.log("");
    console.log("");
    console.log("");
}
write("LESSON 4");
space();





/* Try Catch */

try{

    write(abraacadabra);


}
catch(err){
    write(" my Error is ");
    var zt = "ASDASDASDASd";
    zt = zt + "asdasd";
    var x = 1;
    x+=7; 
    // alert(."warning text")
    write(x);
}

var x=1111, y = 0;
try{
    if(y!=0){
        write(x/y);
    }
    else{
        throw "Go Learn Some Math!";
    }
}
catch(errMasaage){
    write(errMasaage);
}
finally{
    write("Try Catch is Over!");
}









/* ობიექტები*/

var chair = {
    color: "red", // თვისებაა
    weight: 5,
    material:"wood",
    model: 577,
    chairsOwner: ["gela","gogi","loti vano","koba","witelquda givia"], // შეიძლება გვქონდეს მასივები
    mainOwner: { // შეგვიძლია გვქონდეს სხვა ობიექტიც
        name: "gela",
        surname:"rame",
        phoneNumber: "577 88 88 88 ",
        address:{
            street: "lenin's prospektii",
            streetNumber: 777
        }
    },
    mainOwner2222: { // შეგვიძლია გვქონდეს სხვა ობიექტიც
        name: "gela",
        surname:"rame",
        phoneNumber: "577 88 88 88 ",
        adddress:{
            street: "lenin's prospektii",
            streetNumber: 777
        }
    },
    
}
space();

write(chair);

write("chair's color = " + chair.color);

write(chair.chairsOwner);
space();

write(chair.mainOwner.phoneNumber);
space()
write(chair.mainOwner.address.street);



/* ობიექტი  */
space();
space();


var koala = {
    color: "grey",
    weight:10,
    writeKoalaProperties: function(){
        console.log("koala's Color = " + this.color + " koala's wight = " + this.weight);
    },
    gainWeight: function(kilograms){
        return this.weight += kilograms;
    }
    
}



koala.writeKoalaProperties();



koala.weight = 15;



koala.writeKoalaProperties();






write(koala.gainWeight(7));





var st = "text";








var myKoalaJson = JSON.stringify(koala); // ობიექტიდან ჯესონში
write(koala);
write(myJson);











