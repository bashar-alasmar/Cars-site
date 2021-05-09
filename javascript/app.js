
/*

Class-06**************************************

// */ 
// function welcomingMessage(userName){ //parameter
//   // console.log(userName)
//   alert('Weclome ' + userName)
//   // console.log(12345)
// }
// // welcomingMessage('Lamees') // arguemnt 
// // // welcomingMessage('Omar') 
// // welcomingMessage('Mahmoud') 
// // welcomingMessage('Bashar') 
// // welcomingMessage('Tamim') 

// // var age = prompt('whats your date of birth?')
// // //1995
// // function decleration 
// // function getAge(year){ // input
// //   var calcAge = 2021 - year
// //   // processing 
// //   return calcAge;
// //   // output
// // }

// // getAge(age)

// // getAge('1995')
// // getAge('2000')
// // getAge('2005')
// // getAge('1600')
//                       //8

// // console.log(square(8))

// // function square(num){
// //   alert('Hiiii from calling before')
// //   var squareCal = num * num;
// //   return squareCal
// // }

// // function expression
// // we only call it after 
// var square = function(num){
//   var squareCal = num * num
//   return squareCal
// }
// // console.log(square(8))


// // console.log(square(10));
// // console.log(square(11));
// // console.log(square(4));

// function getUserName(firstName,lastName,age){

//   alert('Welcome ' + firstName + lastName )
//   return age
// }

// console.log(getUserName('Bashar', 'Alasmar', 27))







/*
1- ask the user what is your favouirte car 

2- keep asking him until he enter bmw or mercedes

3- check how many cars the user wants to see 

4- show number of images based on what the user will enter 

*/



var userFavCar = prompt('Whats your favourite car?')

function userCar(){
 while(userFavCar !== 'bmw' && userFavCar !=='mercdes'){
  userFavCar = prompt('Try again !')
 }
}
userCar()

var carCount = prompt('How many cars do you want to see ?')
// the number that the  user will enter 
// 5
function gettingCars(){

var image = ''
for(var x = 0; x < carCount ;x++){
  if(userFavCar ==='bmw'){
    image = image + '<img src="https://www.ccarprice.com/products/BMW-8-Series-840i-xDrive-Coupe-2020_1.jpg">'
  }else if( userFavCar ==='mercdes'){
    image = image + '<img src="https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-cla-coupe-250-4wd-suv-angular-front.png?fit=around%7C248:139.5">'
  }
}
  document.write(image)

}

gettingCars()

