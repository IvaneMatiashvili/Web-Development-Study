
function write(string){
    console.log(string);
}
function space(){
    console.log("");
    console.log("");
    console.log("");
}
/* ლოგიკური  ოპერტორები */


// აბრუნებენ true ან False
//   ==   !=  >  <  >=  <=
//   ! უარყოფის ოპრატორი
//   &&       
//   ||

var xz=1, yz=2;
var booleanVarNOT = xz!=yz;  // 1!=2  -> true
var booleanVarOR = 5+5==10 || 2-1==20;   // -> true
var booleanVarAND = 5+5==10 && 2-1==20;  // false
write(booleanVarNOT);
write(booleanVarOR);
write(booleanVarAND);

space();



/* ციკლები  */
var i = 1;


while(i<5){
    console.log("loop # " + i);
    i++
}
space();


/* ერთხელ მაინც შეასრულბს */
i = 1;
do{
    write("test run! " + i);
    i++;
}
while(i<-3)

space();

for(var j=1;j<10;j++){

    if(j%3==0)  continue; //გამოტოვებს შემდდეგ ნაბიჯს

    write("J = " + j);
    // ციკლის შეწყვეტა
     if(j== 7)  break;

}


// ALERTS
function sendText(){
    alert( 'Alert Messaage\nHi Hitler!' )
    // confirm prompt
}


space();
// STRINGS


var st = "LONG LIVE THE QUEEN"; // Freddie Mercury, Roger Tailor, Brain May, John Deacon

write(st.length);
write(st[0]);
write(st[7]);

for(var k = 0; k<st.length; k++){
    write(st[k]);
}




















