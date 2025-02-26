//quote array
let affirmations = ['Eat more potatoes. Do not forget the humble spud.', 'It is not you, it is the crushing weight of capitalism upon your soul.', 'Eagles may soar, but weasels do not get sucked into jet engines.', 'The expert in anything was once a beginner.', 'WHOA, dream big! -Juno MacGuff', 'Women challenge the status quo because we are never it. - Cindy Gallop', "I'm gonna keep on dancing at the Pink Pony Club - Chappell Roan", "Fall down seven times, get up eight." ];

//set JSON item for array recall; could make util??
let affirmationsJSON = JSON.stringify(affirmations);
localStorage.setItem("affirmationsJSON", affirmationsJSON);

//get JSON item
/* let retrieveAffirmationsJSON = localStorage.getItem("affirmationsJSON"); */

//communicate with document elements
const btnGenerateAffirmation = document.querySelector('#js-generate-affirmation');
const btnResetAffirmation = document.querySelector('#js-reset-affirmation');
const displayQuote = document.querySelector('#js-display-quote');
const inputAffirmation = document.querySelector('#js-input-affirmation');
const btnAddAffirmation = document.querySelector('#js-add-affirmation-button');


//event listeners
btnGenerateAffirmation.addEventListener('click', handleGenerate);
btnResetAffirmation.addEventListener('click', handleReset);
btnAddAffirmation.addEventListener('click', handleAdd);


//handleGenerate
function handleGenerate() {
  const randomAffirmation = (affirmations[(Math.floor(Math.random(affirmations) * affirmations.length))]);
  
  if (affirmations == "") { //check if array empty
    alert('You have reached the end of your affirmations list. Your list has been reset.')
    handleReset();
    
    console.log('js object', affirmations) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  } else {
    const idRandomIndex = affirmations.indexOf(randomAffirmation); //id random index 
    affirmations.splice(idRandomIndex, 1) //drop index from array (no repeats)
   
    displayQuote.textContent = `${randomAffirmation}` //display value of random index in html
    console.log('js object', affirmations) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  }
};


//handleReset
function handleReset(){
  affirmations = JSON.parse(affirmationsJSON); //retreive array from storage and reassign to variable
  
  console.log('The quotes have been reset.') 
  displayQuote.textContent = `Inspiration Awaits!` //reset html display
  console.log('js object', affirmations) //test log
  console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
}


//add quote
function handleAdd(){
  console.log('handleAdd runs');
  affirmations.push(inputAffirmation.value); //push input value to array
  affirmationsJSON = JSON.stringify(affirmations); 
  localStorage.setItem("affirmationsJSON", affirmationsJSON);

  alert(`Your quote "${inputAffirmation.value}" has been added to your list of affirmations!`); //notify user of change
  inputAffirmation.value = ""; //clear html text area for new input

  console.log('js object', affirmations); //test log to ensure input was pushed to array
  console.log('json storage', affirmationsJSON); //test log to ensure local storage update
};


