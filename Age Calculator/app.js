const inputElement = document.querySelector('#dob');
const calculateButton = document.querySelector('button');
const resultElement = document.querySelector('#result');

function calculateAge(birthDateString){
      let today = new Date();
      let  birthDate = new Date(birthDateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
}

calculateAge();

calculateButton.addEventListener('click', function (){
   const birthDate = inputElement.value;
   const age = calculateAge(birthDate);
   resultElement.textContent = `Your age is ${age} years.`;
});

