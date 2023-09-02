
// Write a program that uses filter to remove all negative numbers from an array of numbers

// var array:number []=[1,2,-3,-4,5,-6,7,-8]
// let remove_negative = array.filter((data)=>{
//     if(data > 0){
//         return data
//     }
// })
// console.log(remove_negative);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
// var given_array:number[]=[1, 2, 3, 4, 5];
// var new_array:number[]=[]
// let array1=given_array.map((data)=>{
//      data =data * 2
//      new_array.push(data)
//      return data
// })
// console.log(new_array);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

// var string_array:string[]=["apple", "banana", "cherry", "date", "grape"];
// var new_string:string[]=[]
// let characters = string_array.filter((data)=>{
//     if(data.length>5){
//         new_string.push(data)
//         return data
//     }
// })
// console.log("more than 5 characters",new_string);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] use the map and filter methods together to create a new array containing the squares of even numbers.

// var numb_array:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
// var newArray:number[]=[];
// var newArray2:number[]=[]
// let numbers =numb_array.filter((data)=>{
//     if(data%2 == 0){
//         data = data*data
//         newArray.push(data);
//         return data
//     }
// })
// console.log(newArray);

//  //                                      with map method
// let number2 = numb_array.map((data)=>{
//     if(data%2 == 0){
//         data =data * data ;
//         return true
//     }
//     newArray2.push(data)
// })
//   console.log(newArray2);
  

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

// var array_temprature:number[] = [0, 10, 20, 30, 40];
// var new_temprature:number[]=[]
// let temprature = array_temprature.map((data)=>{
//     var Fahrenheit:number= (data * 9/5) + 32;
//     new_temprature.push(Fahrenheit)
//     return Fahrenheit
// })
// console.log(new_temprature);



// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

// var given_array:number [] = [3, 6, 9, 12, 15, 18]
// var _Array:number []=[];
// var _Array2:number []=[];
// let values = given_array.map((data)=> {
//     if(data%2 != 0){
//         data = data + data
//         _Array.push(data)
//         return data
//     }
// })
// console.log(_Array)
// //                         use filter method

// let values2 = given_array.filter((data)=>{
//     if(data%2 != 0){
//         data = data + data
//         _Array2.push(data)
//         return data
//         }
        
//     })
//     console.log(_Array2);

    
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

var names:string []=["Alice", "Bob", "Charlie", "David", "Emily"]
let name_exclamation = names.forEach ((data)=>{
    data = data 
    console.log(data,"!");
    
})