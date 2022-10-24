// var answer = prompt("ხელფასი არის თუ არა დაბალი მაღალი და საშუალო");

// if (answer >= 3000 && answer < 5000) {
//     alert ("საშუალო ხელფასი")
// } 
// else if (answer >= 5000) {
//     alert ("მაღალი ხელფასი")
// }
// else if (answer < 3000) {
//     alert ("დაბალი ხელფასი")
// }


// var arr = [1,4,18,24,15,2,3,19,55];
// for (var i=0; i < arr.length; i++)
// if (arr[i] % 2 == 0) {

// console.log(arr[i] + " " + "ლუწი რიცხვი მასივიდან")
// } 
// else if (arr[i] % 2 == 1) {
// }
// console.log(arr[i] + " " + "კენტი რიცხვი მასივიდან")


// var arr = [1,4,18,24,15,2,3,19,55];
// var max = 0;
// for (var i=0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max=arr[i];
//     }
// }
// console.log(max + " " + "დიდი რიცხვი მასივიდან")

var arr = [1,4,18,24,15,2,3,19,55];
var small = arr [0];

for (var i=0; i<arr.length; i++){
    if (small>arr[i]){
        small=arr[i];
    }
}

console.log(small);