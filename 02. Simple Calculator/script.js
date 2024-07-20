let num1= document.getElementById("num1");
let num2= document.getElementById("num2");

let addBtn= document.getElementById("btn1");
let subBtn= document.getElementById("btn2");
let mulBtn= document.getElementById("btn3");
let divBtn= document.getElementById("btn4");

let pTag= document.getElementById("output");

let resetBtn= document.getElementById("reset");




// if input is empty..than show warning..................


function warning() {

       pTag.classList.remove('hide');
       pTag.classList.add('red-bg');
       pTag.innerText= `Please enter valid number`;
       num1.value="";
       num2.value="";
}



// for addition .........................


addBtn.addEventListener('click', () => {

       let value1= +num1.value; 
       let value2= +num2.value; 

       if(num1.value !== '' && num2.value !== '') {
              

    let result= value1 + value2 ;
       console.log(result); 
       pTag.classList.remove('hide');
       pTag.classList.remove('red-bg');
       pTag.innerText= `Sum of ${value1} and ${value2} is: \n ${result}`;
       num1.value="";
       num2.value="";

       }

       else {
              warning();
            }
    

});



//  for subtraction...............................

subBtn.addEventListener('click', () => {


       let value1= +num1.value; 
       let value2= +num2.value; 

       if(num1.value !== '' && num2.value !== '') {
              

    let result= value1 - value2 ;
       console.log(result); 
       pTag.classList.remove('hide');
       pTag.classList.remove('red-bg');
       pTag.innerText= `Subtraction of ${value1} and ${value2} is: \n ${result}`;
       num1.value="";
       num2.value="";

       }

       else {
              warning();
            }

});


// for multiplication...............


mulBtn.addEventListener('click', () => {


       let value1= +num1.value; 
       let value2= +num2.value; 

       if(num1.value !== '' && num2.value !== '') {
              

    let result= value1 * value2 ;
       console.log(result); 
       pTag.classList.remove('red-bg');
       pTag.classList.remove('hide');
       
       pTag.innerText= `Multiplication of ${value1} and ${value2} is: \n ${result}`;
       num1.value="";
       num2.value="";

       }

       else {
              warning();
            }

});



//  for Division................

divBtn.addEventListener('click', () => {


       let value1= +num1.value; 
       let value2= +num2.value; 

       if(num1.value !== '' && num2.value !== '') {
              

    let result= value1 / value2 ;
       console.log(result); 
       pTag.classList.remove('red-bg');
       pTag.classList.remove('hide');
       pTag.innerText= `Division of ${value1} by ${value2} is: \n ${result}`;
       num1.value="";
       num2.value="";

       }

       else {
              warning();
            }

});

// for reset button.....................



resetBtn.addEventListener('click', () => {


    
       pTag.classList.add('hide');
       num1.value="";
       num2.value="";

});