//find the missing serial
// let array=[12,13,14,16,17,18,20];
// for(var i=0;i<array.length;i++){
//    if(array[i+1]-array[i]>1){
// console.log(`Missing Number  is${array[i]+1}` )
//    }else{
//   continue;
//    }
// }

// let arr=[1,3,5,7,9]
// for(var i of arr){
//   if((i+2)-(i)>1){
//     console.log(i+1)
//   }else{
//     continue;
//   }
// }
// push the four  0 digit to the begining of the Array
// let arr=[0,78,0,5,7,0,3,0,56,70,32,0];
// for( var i=0;i<arr.length;i++){
// if(arr.includes(0)){
//     arr.unshift(0);

// }else{
//     console.log(arr[i])
// }
// }
// chapter 17-20
// Answer 1
// let arr=[[],[],[]];
// Answer2
// let arr=[[0,1,2,3],[1,0,1,1],[2,1,0,1]]
// for(i=0;i<arr.length;i++){
//     for(j=3;j<arr[i].length;j++){
//    let arr1=arr[i].join(" ")
//         console.log( arr1)
// }
// }
// Answern 3
// for(var i=1 ;i<11;i++){
//     console.log(i)
// }
// Answwr 4
// function multiplicationTable() {
//     var input = document.getElementById("number");
//     var table = document.getElementById("table");
// var range=document.getElementById("length")
// var rangeLength=range.value
//     // Clear the table content before generating a new one
//     table.innerHTML = "";

//     // Check if the input is a valid number and greater than 0
//     if (input.value > 0 && !isNaN(input.value)) {
//         for (var i = 1; i <= rangeLength; i++) {
//             // Create a new row for each multiplication result
//             var row = document.createElement("div");
//             row.textContent = input.value + " x " + i + " = " + (i * input.value);
//             table.appendChild(row);
//         }
//     } else {
//         console.log("Range is not valid");
//         // Optionally, display an error message to the user
//         table.innerHTML = "Please enter a valid number greater than 0.";
//     }
// }
// Answer 5
// let arr=["Apple","banana","mango","orange","strawberry"]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])

// }for(i=0;i<arr.length;i++){
//    var arr2=arr.indexOf(arr[i])
//     console.log(`element at index ${i} is ${arr2}`)
// }
// Answer 6
// Generate the following series in your browser. See 
// example output.
// var newString="";

// let series="";
// let n=2
// let arr=[ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for(i=0;i<arr.length;i++){
//   newString+=arr[i]+" "

//   if(arr[n]-arr[i]==2){

//     series+=arr[i]+" "
//     n=n+2
//   }
// }
// let newSubString=newString.split(' ') 
// console.log(` Counting is:${newSubString} `)
// console.log(`Reverse Counting is ${newSubString.reverse()}`)
// console.log(`Series is ${series=series+"20"}`)

// let EvenString = "";
// let OddString = "";
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         EvenString += arr[i] + " ";
//         EvenString.split(" ");
       
//     } else {
//         OddString += arr[i] + " ";  // Corrected line
//         OddString.split(" ");
       
//     }
// }
// console.log(`Even Counting is ${EvenString}`);
// console.log(`Odd Counting is ${OddString}`);

function Bakery(){
    var A=["cake","apple pie","cookies","chips","pastries","patties"]
    var input=document.getElementById("item")
    var item=input.value
    var image=document.getElementById("image")
    var h1=document.getElementById("heading")
    if(item==A.includes("cake")){
       
        image.src="Naked-Cake-Recipe-Card.jpg"
        image.style.display="block"
        h1.innerHTML="Cake is available at index 0"
    }else if(item==A.includes("apple pie")){
       
        image.src="download.jpeg"
        image.style.display="block"
        h1.innerHTML="Cake is available at index 1"
    }
    else if(item==A.includes("cookies")){
       
        image.src="images.jpeg"
        image.style.display="block"
        h1.innerHTML="Cake is available at index 1"
    }
    else if(item==A.includes("chips")){
       
        image.src=""
        image.style.display="block"
        h1.innerHTML="Cake is available at index 1"
    }
    else if(item==A.includes("pastries")){
       
        image.src=""
        image.style.display="block"
        h1.innerHTML="Cake is available at index 1"
    }
       
   
}
