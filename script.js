
const textError = document.getElementsByTagName("span")[0];
const button = document.getElementsByTagName("button")[1];
const section = document.getElementsByTagName("section");
const input = document.getElementsByTagName("input")[0];

function ValidateEmail(input) {
  const result = input.value.trim();
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (result.match(validRegex) && result!=="") {
    section[3].style.display='block';
    input.classList.remove("inputError");
    input.value="";
    textError.style.display='none';
  }
  else {
    textError.style.display='inline-block';
    input.classList.add("inputError"); 
  }}

  button.addEventListener("click", function() {
    section[3].style.display='none';

  
  }
  );