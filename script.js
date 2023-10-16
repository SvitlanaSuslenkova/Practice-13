const textError = document.getElementsByTagName("span")[0];
const button1 = document.getElementsByTagName("button")[1];
const section = document.getElementsByTagName("section")[3];
const input = document.querySelector(".input");
const main = document.getElementsByTagName("main")[0];



function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const result = input.value.trim();


 if (result.match(validRegex))  {
   section.classList.replace("section4","displaySection4");
   main.classList.add("noMain");
   input.value = "your email was registered!";
   document.form1.email.focus();
   return true;
  }
  else {
    textError.classList.add("spanDisplay");
    input.classList.add("inputError");
    document.form1.email.focus();
    return false;
}}

button1.addEventListener("click", function() {
section.classList.replace("displaySection4","section4");
input.value = "";
main.classList.remove("noMain");
input.classList.remove("inputError");
textError.classList.remove("spanDisplay");
});


