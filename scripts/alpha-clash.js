// function play(){
//     // console.log('play start now')

//     // hide the homescreen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)


//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// //     console.log(playgroundSection.classList)
// //
// }

function handleKeyboardKeyUPEvent(event){
    const playerPressed = event.key;
     console.log('player pressed',  playerPressed);

    //  get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }
}

  document.addEventListener('keyup', handleKeyboardKeyUPEvent);


function continueGame (){
    // step-1.generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    //  set random generated alphabet to the screen (show it)
       
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementByID('play-ground');
    continueGame()
}