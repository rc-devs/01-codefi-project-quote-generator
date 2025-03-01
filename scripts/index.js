//import affirmations array
import { affirmations} from "../data/affirmations.js";

//set JSON item for array recall; could make util??
let affirmationsArray = affirmations;
let affirmationsJSON = JSON.stringify(affirmationsArray);
/* localStorage.setItem("affirmationsJSON", affirmationsJSON);
 */

//import modules
//import { handleGenerate } from "./modules/handle-generate.js";

//get JSON item
let retrieveAffirmationsJSON = localStorage.getItem("affirmationsJSON");
console.log(retrieveAffirmationsJSON)
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



//updatelocalestorage
/* updateStorage
function updateStorage(){
  affirmationsArray = retrieveAffirmationsJSON
} */

//handleGenerate
 function handleGenerate() {
  const randomAffirmation = (affirmationsArray[(Math.floor(Math.random(affirmationsArray) * affirmationsArray.length))]);
  
  if (affirmationsArray == "") { //check if array empty
    alert('You have reached the end of your affirmations list. Your list has been reset.')
    handleReset();
    
    console.log('js object', affirmationsArray) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  } else {
    const idRandomIndex = affirmationsArray.indexOf(randomAffirmation); //id random index 
    affirmationsArray.splice(idRandomIndex, 1) //drop index from array (no repeats)
   
    displayQuote.textContent = `${randomAffirmation}` //display value of random index in html
    console.log('js object', affirmationsArray) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  }
};
 

//handleReset
function handleReset(){
  affirmationsArray = JSON.parse(affirmationsJSON); //retreive array from storage and reassign to variable
  
  console.log('The quotes have been reset.') 
  displayQuote.textContent = `Inspiration Awaits!` //reset html display
  console.log('js object', affirmationsArray) //test log
  console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
}


//add quote
function handleAdd(){
  console.log('handleAdd runs');
  affirmationsArray.push(inputAffirmation.value); //push input value to array
  affirmationsJSON = JSON.stringify(affirmationsArray); //
  localStorage.setItem("affirmationsJSON", affirmationsJSON);

  alert(`Your quote "${inputAffirmation.value}" has been added to your list of affirmations!`); //notify user of change
  inputAffirmation.value = ""; //clear html text area for new input

  console.log('js object', affirmationsArray); //test log to ensure input was pushed to array
  console.log('json storage', affirmationsJSON); //test log to ensure local storage update
  console.log(retrieveAffirmationsJSON)
};


