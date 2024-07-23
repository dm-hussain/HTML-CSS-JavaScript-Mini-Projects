let userInput= document.querySelector('#input');

let lowerCase= document.querySelector('#lower-case');
let upperCase= document.querySelector('#upper-case');

let camelCase= document.querySelector('#camel-case');
let pascalCase= document.querySelector('#pascal-case');

let snakeCase= document.querySelector('#snake-case');
let kebabCase= document.querySelector('#kebab-case');

let trimCase= document.querySelector('#trim-case');


transformLower();
transformUpper();
transformCamel();
transformPascal();
transformSnake();
transformKebab();    
transformTrim();
 

userInput.addEventListener('input', ()=> {
    transformLower();
    transformUpper();
    transformCamel();
    transformPascal();
    transformSnake();
    transformKebab();    
    transformTrim();
}
);

 

function transformLower () {
    
    lowerCase.innerText= userInput.value.toLowerCase();

     
}




// +++++++++++++++++++++++++++

 

function transformUpper () {
  
    upperCase.innerText= userInput.value.toUpperCase();

    
    // console.log(upperCase.innerText);
}




// +++++++++++++++++++++++++++++




function transformTrim () {
     
    trimCase.innerText= userInput.value.replaceAll(/\s+/g, '');;

   
    // console.log(upperCase.innerText);
}



// +++++++++++++++++++++++++++++++++++++++++




function captalizeFirstLetter(word) {
    if (word=== '')
    return word;
     
    return  word[0].toUpperCase() + word.slice(1);
}

function transformCamel( ) {
     

     let str= userInput.value.trim();
     let strLower= str.toLowerCase();
     let strLowerArr= strLower.split(/\s+/g);

     let finalArr= strLowerArr.map( (word, i) => {

        if(i===0) 
            return word;
        return captalizeFirstLetter(word);

     });


   
     let finalString = finalArr.join( '' );
      camelCase.innerText=  finalString;
   
    console.log(finalString);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function transformPascal() {

     
     let str= userInput.value.trim();
     let strLower= str.toLowerCase();
     let strLowerArr= strLower.split(/\s+/g);

     let finalArr= strLowerArr.map( (word) => {

        if (word=== '')
            return word;
        return word[0].toUpperCase() + word.slice(1);

     });

   
     let finalString = finalArr.join( '' );
      pascalCase.innerText=  finalString;
   
    console.log(finalString);
 


}



// +++++++++++++++++++++++++++++

function transformSnake () {
     
    snakeCase.innerText= userInput.value.trim().split(/\s+/g).join('_');

     
}


// +++++++++++++++++++++++++


function transformKebab () {
     
    kebabCase.innerText= userInput.value.trim().split(/\s+/g).join('-');

     
}

