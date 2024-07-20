let counterText= document.querySelector('#counter-para');
let incrementBtn= document.querySelector('#increment');
let decrementBtn= document.querySelector('#decrement');
let resetBtn= document.querySelector('#reset');
let multiple= document.querySelector('#multiple');


let counterVal= +(counterText.innerText);
// multiple.value=1;
 


// Reset function: 


resetBtn.addEventListener('click', () => {

    counterVal=0;
    counterText.innerText= counterVal;
    multiple.value=1;

});



 

    
 
    incrementBtn.addEventListener('click', () => {
        if(multiple.value==='') {
            multiple.value=1;
        }


        let multipleVal= parseInt(multiple.value);
        counterVal+= multipleVal ;
        counterText.innerText= counterVal;
    });
    
    decrementBtn.addEventListener('click', () => {
        if(multiple.value==='') {
            multiple.value=1;
        }
    
        let multipleVal= parseInt(multiple.value);
        counterVal-= multipleVal ;
        counterText.innerText= counterVal;
    });

 
     
  
 




 