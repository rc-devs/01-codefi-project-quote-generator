console.log('connected to manage-affirmations.js');
//import
import { affirmations} from "../data/affirmations.js";

let affirmationsArray = affirmations;
let affirmationsJSON = JSON.stringify(affirmationsArray);

//get JSON item
/* let affirmationsJSON = sessionStorage.getItem("affirmationsJSON")
console.log(affirmationsJSON) */
//dom communication
const manageContainer = document.querySelector('#js-manage-affirmations-container');
const home = document.querySelector(".homeAnchor");
const inputAffirmation = document.querySelector('#js-input-affirmation');
const btnAddAffirmation = document.querySelector('#js-add-affirmation-button')
const displayTextarea = document.querySelector("#display-textarea")



//event listeners
//home.addEventListener('click', updateStorage)
btnAddAffirmation.addEventListener('click', handleAdd)


//function runs on load
displayAffirmationsArray(); //call on load to display list
function displayAffirmationsArray() { //display data
  let displayedArray = JSON.parse(affirmationsJSON) //destring JSON data
  let displayHTML = '';
  console.log(displayedArray)

  for (let i = 0; i < displayedArray.length; i++) {
    const quote = displayedArray[i];
    const display = 
      `
      <div id="js-quote-container">
      <p>${quote}</p>
        <button data-index="${i}" class="js-delete" 
        >Delete</button>
        <button  class="js-favorite">Add to Favorites</button>
      </div>
      `;
    displayHTML += display;
  }
  document.querySelector('#js-manage-affirmations-container').innerHTML = displayHTML;
  console.log('displayAffrimationsArray runs')

  //new dom delete
  const btnDelete = document.querySelectorAll('.js-delete');
    
  //delete (?)function event
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
    let currentBtnIndex = btn.dataset.index;
    let displayedArray = JSON.parse(affirmationsJSON) //destring JSON data
    
    //test log
    console.log("this is the affrimations array", displayedArray); //current array

    //delete from array
    displayedArray.splice(currentBtnIndex, 1); 

    //local storage
    affirmationsJSON = JSON.stringify(displayedArray); //change js back to JSON
    sessionStorage.setItem("affirmationsJSON", affirmationsJSON);

    //test logs
    console.log("affirmations array after delete", displayedArray); //array post delete
    console.log('delete'); //delete confirm

    //change innerhtml
    displayAffirmationsArray(); 
    });
  });
};

/* 
//function to update local storage when going home
function updateStorage(){
  affirmationsJSON = JSON.stringify(displayedArray); //change js back to JSON
  sessionStorage.setItem("affirmationsJSON", affirmationsJSON);
} */



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
  sessionStorage.setItem("affirmationsJSON", affirmationsJSON);

  alert(`Your quote "${inputAffirmation.value}" has been added to your list of affirmations!`); //notify user of change
  inputAffirmation.value = ""; //clear html text area for new input

  console.log('js object', affirmationsArray); //test log to ensure input was pushed to array
  console.log('json storage', affirmationsJSON); //test log to ensure local storage update
  displayAffirmationsArray(affirmationsJSON);

};

