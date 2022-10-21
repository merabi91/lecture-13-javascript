// var arr = [1,4,18,24,15,2,3,19,55];
// console.log(arr.reverse())
var answer = prompt("ხელფასი არის თუ არა დაბალი მაღალი და საშუალო");

if (answer >= 3000 && answer < 5000) {
    alert ("საშუალო ხელფასი")
} 
else if (answer >= 5000) {
    alert ("მაღალი ხელფასი")
}
else if (answer < 3000) {
    alert ("დაბალი ხელფასი")
}