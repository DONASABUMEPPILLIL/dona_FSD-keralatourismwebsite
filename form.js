
// 
// function validate(){
//     let regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
//     if(emails.value==""||pwds.value==""){
//         alert("Fields cannot be empty");
//             return false;
//         }
//         else if(pwds.value.length<=8){
//             alert("Password must contain minimum 8 characters ");
//             return false;
//        }
//     else if(regexp.test(emails.value)){
//         error.innerText = "Valid";
//         error.style.color="green";
//     return true;    }
//     else{
//         error.innerText ="Invalid email id";
//         error.style.color="red";
//         return false;
//     }
// }
// let regexp=/^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let pwds = document.getElementById("pwds");
let emails = document.getElementById("emails");
let errors =document.getElementById("errors");
function validate(){
    if(emails.value==""||pwds.value==""){
     alert("Fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}
//     function validate(){
// if(email.value==""){
//      alert("Email cannot be empty");
// return false;
// }
// else if (pwd.value==""){
//     alert("Password cannot be blank");
//     return false;
// }
//     }

// else if(pwd.value.length<=8){
    // alert("Password must contain minimum 8 characters ");
    // return false;
// }
// else{
//     return true;
// }
// }

let name = document.getElementById("name");
let ph = document.getElementById("ph");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let strength = document.getElementById("strength");

function validate1(){
    let regnam =/^([A-Za-z\s]+)$/
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    let regphn =/^\(?([0-9]{3})\)?[\-.]?([0-9]{3})[\-.]?([0-9]{4})$/
    let regpas =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    // let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,})$/
    if((regexp.test(email.value))&&(regphn.test(ph.value))&&(regnam.test(name.value))&&(regpas.test(pwd.value))){
        error.innerHTML="VALID"
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="INVALID";
        error.style.color="red"
        return false;
     }
 }
 function checkpass(){
    let regpas=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
    if((pwd.value.length>=0)&&(pwd.value.length<2)){
        strength.innerHTML="Weak Password";
        strength.style.color="red";
         return false;
    }
    if((pwd.value.length>2)&&(pwd.value.length<=3)){
        strength.innerHTML="Medium strength";
        strength.style.color="orange";
         return false;
    }
    if((pwd.value.length>7)){
        strength.innerHTML="Strong Password";
        strength.style.color="green";
         return true;
    }
 }

