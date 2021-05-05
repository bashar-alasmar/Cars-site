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

var x = 5
var firstName = 'Bashar '
// alert(firstName)
x+=10
// x = x + 10;
var y = 10

// re-assign?
y = 30

var z = x +  y
// alert(z)


var lastName = "Alasmar"
var myGrandfatherName = 'Mohammad '
console.log(firstName + myGrandfatherName +lastName)

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

var userCar = prompt('Whats your favourite car bmw or merceds??')

if(userCar === 'bmw'){
  document.write('<img src="https://www.ccarprice.com/products/BMW-8-Series-840i-xDrive-Coupe-2020_1.jpg">')
}else if(userCar === 'mercedes'){
  document.write('<img src="https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-cla-coupe-250-4wd-suv-angular-front.png?fit=around%7C248:139.5">')
}else {
  alert('okay you should only pick merceds or bmw')
}
