// single line comment
/* 
 multi lines comments

DataTypes:
1- Strings(anytext or any set of characters between double or single quotes)

2- Numbers or numeric (any number in math )

3- Boolean True or False

Variables: its something to store values inside or can hold values


-Operators: a symbol/sign that does an action 
equal = assignemnet operator
      += 
      -=




- mathmateical/arithmetic operators
// + plus 5+5 
// - minus 10 - 5 
// * multiply 9*3
// / division 15/3
// % modules 10%2
// ** power of 5**5 



- Comparison operators ?
== compare the value 
=== strictly equal 
!= not  equal  
!== not strictly equal 
> greater than 
< less than 
>= greater than or Equal 
<= less than or equal 


console => something that we can use to show the errors 
and also we can write messsages in javascript


-Concatination 
linking two strings together 

*/ 

// this code is for showing a message for the user
// 'My Name is bashar'
// "My name is bashar"
// 1 
// 3.2 
// -4 
// 231321 
// true
// false

// var x = 5
// var firstName = 'Bashar '
// // alert(firstName)
// x+=10
// // x = x + 10;
// var y = 10

// // re-assign?
// y = 30

// var z = x +  y
// // alert(z)


// var lastName = "Alasmar"
// var myGrandfatherName = 'Mohammad '
// console.log(firstName + myGrandfatherName +lastName)

// alert(firstName + lastName)



// () parenthesis
// [] square brackets 
// {} curly brackets 
// - hyphen from Ghadeer



// taking input from the user 
// var userName = prompt('whats your name?')
                 // Sara

// alert('Hello ' + userName)
// if(userName === 'Bashar'){
//   document.write('<h5>'+'Hello Bashar'+ '</h5>')
// }else if(userName === 'Lamis'){
//   alert('Hello Lamis')
// }else if (userName === 'Majd'){
//   console.log('Hello Majd')
// }
// else{ // default case when not any of the conditions are true 
//   alert('Hello user')
// }


/*
Conditional statements: 
      // expresion 
if(Condition){
  // code 
}


*/ 

/*

1- ask the user what is your favouirte car?

2- show image baed on the answer!
choice is bmw ->bmw car 
choice is mercedes -> mercedes car

*/


//////////////////////////// Class05
// var x = 10
// if( x < 29){
//    console.log('True')
// }else{
//   console.log('False')
// }

// var age = prompt('Whats your age?')
// var msg = ''
// console.log(msg)
// 1- i am taking the user age
// 2- if the age is greater than or equal 18 i wil say welcome to my site and the age is less than 35 i will weclome as well 
// 3- if the age is less than 18 or the age is greater than 35  i will say Sorry your not allowed here 
// 4- default case i will just tell them have a nice day!

// shift and number 7 &&
// shift and backslash ||
// !   
// if(age >= 18 && age < 35){
//   msg = 'Welcome to my site'
// }else if (age <18 || age >= 35 ){
//   msg = 'Sorry you are not allowed'
// }else{
//   alert('Have a nice day!')
// }
// document.write('<h2>'+msg+'<h2>')


// loops : repeat block of code until specific condition is met !
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(10)
// var userPass = prompt('Guess your password?')

// if(userPass !== '12345'){

// }


/*
while(condition){
  // code goes here
}

*/

// i want to ask the user to guess a password 
// i want if the user answer this password incorrect to keep asking them to enter the right one 
// if the guessed password is not equal to 12345 i want to ask them again 
// we dont want them to enter the website unless they enter the  correct password 

// var userPassword = prompt('Guess the password')

// //bashar 
// while(userPassword !== '12345'){ // f
//     userPassword = prompt('Incorrect please enter the correct password')
// }
// when we dont know how many times we're going to loop
// input validation 




/*
1- using console.log() print out numbers from 1 to 10 
*/
// var tamim = 'Tamim'

// for(var i = 1 ; i <= 10 ; i++){
//     console.log('inside the for loop',i);
//     console.log(tamim)
// }

// console.log('Last value of i ', i)


/*
1- ask the user what is your favouirte car 

2- keep asking him until he enter bmw or mercedes

3- check how many cars the user wants to see 

4- show number of images based on what the user will enter 

*/



var userFavCar = prompt('Whats your favourite car?')

while(userFavCar !== 'bmw' && userFavCar !=='mercdes'){
  userFavCar = prompt('Try again !')
}

var carCount = prompt('How many cars do you want to see ?')
// the number that the  user will enter 
// 5

var image = ''
for(var x = 0; x < carCount ;x++){
  if(userFavCar ==='bmw'){
    image = image + '<img src="https://www.ccarprice.com/products/BMW-8-Series-840i-xDrive-Coupe-2020_1.jpg">'
  }else if( userFavCar ==='mercdes'){
    image = image + '<img src="https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-cla-coupe-250-4wd-suv-angular-front.png?fit=around%7C248:139.5">'
  }
}
  document.write(image)



// // 'bmw' !== 'BMW'
// if(userCar === 'bmw'){
//   document.write('<img src="https://www.ccarprice.com/products/BMW-8-Series-840i-xDrive-Coupe-2020_1.jpg">')
// }else if(userCar === 'mercedes'){
//   document.write('<img src="https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-cla-coupe-250-4wd-suv-angular-front.png?fit=around%7C248:139.5">')
// }else {
//   alert('okay you should only pick merceds or bmw')
// }