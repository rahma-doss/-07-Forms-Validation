// let inputs =  document.querySelectorAll ("input")

// const regex = {
//     firstName: /^[a-zA-Z]${2,}/,
//     address: /^[a-zA-Z\d]${2,}/,
// }

// inputs.forEach(element => { 
//     element.addEventListener("keyup", function(e){
//         var text = e.target
//         console.log(e)
//         // validation(text)
//     })
// });
//  store the resuslt of test function in a variable => true wala false

let firstname = document.getElementById("firstname")
let adress = document.getElementById("address")
let email = document.getElementById("email")
let password = document.getElementById("password")
let comment = document.getElementById("comment")

document.querySelector("form").addEventListener("submit", validation)
function validation(e) {
    e.preventDefault()
    if (firstname.value === "" 
    || address.value === "" 
    || email.value === "" 
    || password.value === "" 
    || Comment.value === "") {
         alert("One of the inputs is empty") 
        }
    if (!(password.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,}/))) {
        alert("The password must be a combination of charatacters , numbers and at least a capital letter")
    }
     if  (!(email.value.match (/[a-zA-Z0-9]@/ )) ) {  
         alert   ("Doesn't have a valid e-mail adress " ) 
}
}

// document.querySelector('#first-Name').addEventListener('keyup', (e) => {
//     console.log(e.target.value)
// })
//const regex = {
  // password : /[a-z]+(?=.*[A-Z])[0-9]+{8,}/  }

