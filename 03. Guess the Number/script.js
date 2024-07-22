(function() {



let userChoice= document.querySelector('#input-box');
let submitBtn= document.querySelector('#submit-btn');
let newGameBtn= document.querySelector('#new-game');
let form= document.querySelector('form');
let msgBox= document.querySelector('.msg-box');
let msg1= document.querySelector('#msg1');
let msg2= document.querySelector('#msg2');


let compChoice= +(Math.floor( (Math.random()*100 )+ 1));
// console.log(compChoice);


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let userGuess= [];

    form.addEventListener('submit', (event) => {

        event.preventDefault();
        compareNumber()

    }   
);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++


function compareNumber() {    

    let userVal= +(userChoice.value) ;

    if(userVal === compChoice ) {
        
        msg1.innerText= 'You got it! Congrats';
        userGuess.push(userVal);
        msg2.innerText= `Your guess are: ${userGuess.join(', ')} `;
        userChoice.value='';
        msgBox.classList.remove('hide');
        userChoice.disabled= true;
        userChoice.placeholder = "Start a new game.";
        submitBtnDisable();
        newGameBtnEnbale();

        newGameBtn.focus();
        form.style.borderColor= 'yellow';
        let color= '#000000';
        form.style.backgroundColor= color;
   
    }

    else{
        

        if(userVal> compChoice) {
            msg1.innerText= 'Too High';
            userGuess.push(userVal);
            msg2.innerText= `Your guess are: ${userGuess.join(', ')} `;
            userChoice.value='';
            msgBox.classList.remove('hide');

        }

        else {
         
            msg1.innerText= 'Too Low';
            userGuess.push(userVal);
            msg2.innerText= `Your guess are: ${userGuess.join(', ')} `;
            userChoice.value='';
            msgBox.classList.remove('hide');

        }

    }

}


// +++++++++++++++++++++++++

const submitBtnDisable= ( ()=>  {

    submitBtn.classList.add('disable-btn');
    

 });

//  ++++++++++++++++++++++++++++++

 const newGameBtnEnbale= ( ()=>  {

    newGameBtn.classList.remove('disable-btn');

 });



// +++++++++++++++++++

 

function resetGame() {

    userGuess= [];
    userChoice.disabled= false;
    msg1.innerText= '';
    msg2.innerText= `Your guess are: ${userGuess.join(', ')} `;
    userChoice.value='';
    msgBox.classList.add('hide');
    submitBtn.classList.remove('disable-btn');
    newGameBtn.classList.add('disable-btn');
    compChoice= +(Math.floor( (Math.random()*100 )+ 1));
    let color='#394648'
    form.style.backgroundColor= color;
    form.style.borderColor = '';
} 




// +++++++++++++++++

newGameBtn.addEventListener('click', resetGame);

newGameBtn.addEventListener('keypress', resetGame);
} ) ();


