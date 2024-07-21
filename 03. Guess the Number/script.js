let userChoice= document.querySelector('#input-box');
let submitBtn= document.querySelector('#submit-btn');
let newGameBtn= document.querySelector('#new-game');

let msgBox= document.querySelector('.msg-box');
let msg1= document.querySelector('#msg1');
let msg2= document.querySelector('#msg2');


let compChoice= +(Math.floor( (Math.random()*100 )+ 1));
console.log(compChoice);


submitBtn.addEventListener('click', () => {

    if(userChoice.value !== '') {
        compareNumber();

    }

    else {

        msg1.innerText= 'Plz Enter a valid number';
        msg2.innerText+= '';
        msgBox.classList.remove('hide');

    }
}   
    );

 

 const submitBtnDisable= ( ()=>  {

    submitBtn.classList.add('disable-btn');

 });

 const newGameBtnEnbale= ( ()=>  {

    newGameBtn.classList.remove('disable-btn');

 });


function compareNumber() {    

    let userVal= +(userChoice.value) ;

    if(userVal === compChoice ) {
       
        msg1.innerText= 'You got it! Congrats';
        msg2.innerText+= ` ${userVal}`;
        userChoice.value='';
        msgBox.classList.remove('hide');
        console.log('You got it! Congrats');
        submitBtnDisable();
        newGameBtnEnbale();
    }

    else{
        

        if(userVal> compChoice) {
            console.log('Too High');
            msg1.innerText= 'Too High';
            msg2.innerText+= ` ${userVal}, `;
            userChoice.value='';
            msgBox.classList.remove('hide');

        }

        if(userVal< compChoice) {
            console.log('Too Low');
            msg1.innerText= 'Too Low';
            msg2.innerText+= ` ${userVal}, `;
            userChoice.value='';
            msgBox.classList.remove('hide');

        }

    }

}




newGameBtn.addEventListener('click', ()=> {
    // let str= 'Your guess are:'

    msg1.innerText= '';
    msg2.innerText= 'Your guess are:';
    userChoice.value='';
    msgBox.classList.add('hide');
    submitBtn.classList.remove('disable-btn');
    console.log('Start New game');
    newGameBtn.classList.add('disable-btn');
    compChoice= +(Math.floor( (Math.random()*100 )+ 1));
    console.log(compChoice);
})




