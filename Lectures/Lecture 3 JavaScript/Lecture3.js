function print(content) {
    console.log(content);
}

// MATHEMATICS

// print(Math.PI)
// print(Math.PI.toFixed(6))

// print(Math.random().toFixed())
// print(Math.random())
// print(Math.random())


// მასივები - Array
//             0     1      2   3      4     5       6              7         8
// var myArray = [1, "ასდასდ", 3, true, false, null, undefined, [123, 544, 5],"text"]
// var myArray = [1, "ასდასდ", 3, "text"]
// print(myArray)

// print(myArray[0])
// print(myArray[3])
// print(myArray[7])
// print(myArray[8])
// print(myArray[15])


// var data1 = "asdas"
// print(myArray.length)
// myArray.push("hitler");
// myArray.push("hitler");
// myArray.push("hitler");
// myArray.push(data1);
// print(myArray)

// var arr = [1, "ასდასდ", "3ta", "text",1,2,3,4,5]

// arr.pop();
// print(arr)
// print(arr.join(" ... "))

// print(arr.slice(1,4))


//     0 1   2  3

// 0   1 2   3  4
// 1   5 6   7  8
// 2   9 10 11 12


// var bigArray = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]


// var bigArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]

// print(bigArray)
// print(bigArray[2])
// print(bigArray[2][3])




// var myText = "abcde".toUpperCase()
// var myText2 = ['a','b','c','d','e'].toUpperCase()



// var text = "";
// var num = 10;
// if (num > 9) {
//     text = "big bro"
// }
// else {
//     text = "small bro"
// }

// text = num > 9 ? "big bro" : "small bro";


// print(text)



// var arr = ["akaki", "koba", "gia", "grigoli", "meduzza gorgona", "mzisa", "mtvarisa"]

// print(arr)


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(i in arr){
//     console.log(i)
//     console.log(arr[i])
// }




var date = new Date();


console.log(date); // Thu Jan 12 2017 21:01:55 GMT+0400 (Local Standard Time)


console.log(date.toLocaleDateString()); // 1/12/2017
console.log(date.toLocaleTimeString()); // 9:09:18 PM
console.log(date.getMonth()); // თუ ახლა არის იანვარი დააბრუნებს 0 - ს (მასივის პრინციპი)
console.log(date.getDay()); // თვის ანალოგიურად
console.log(date.getFullYear()); // 2017
console.log(date.getYear()); // 117 ანუ წლების რაოდენობა 1900 წლიდან :)))
console.log(date.getHours()); //მიმდინარე საათი ახლა როცა ამ სტრიქონს ვწერ 21 (21:15 :)))
console.log(date.getMinutes()); // მიმდინარე წუთი ახლა როცა ამ სტრიქონს ვწერ 17 (21:17 :)))
console.log(date.getSeconds()); // მიმდინარე წამი ახლა როცა ამ სტრიქონს ვწერ 51 (21:18:51 :)))




date.setFullYear(1125);
date.setMonth(9);
date.setDate(25);
console.log(date);


var date2 = new Date(2000,1,1)
print(date2)
