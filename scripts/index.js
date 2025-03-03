//import affirmations array
import { affirmations} from "../data/affirmations.js";

//set JSON item for array recall; could make util??
let affirmationsArray = affirmations;
let affirmationsJSON = JSON.stringify(affirmationsArray);

//communicate with document elements
const btnGenerateAffirmation = document.querySelector('#js-generate-affirmation');
const displayQuote = document.querySelector('#js-display-quote'); //container for html
const inputAffirmation = document.querySelector('#js-input-affirmation'); //text area for input
const btnAddAffirmation = document.querySelector('#js-add-affirmation-button');
const btnManageAffirmations = document.querySelector('#js-manage-button');
const manageContainer = document.querySelector('#manage-container'); //container for html
const btnHideList = document.querySelector('#js-hide-button');

//event listeners
btnGenerateAffirmation.addEventListener('click', handleGenerate);
btnAddAffirmation.addEventListener('click', handleAdd);
btnManageAffirmations.addEventListener('click', displayList);
btnHideList.addEventListener('click', hideList)

//functions
function handleGenerate() {
  const randomAffirmation = (affirmationsArray[(Math.floor(Math.random(affirmationsArray) * affirmationsArray.length))]); //get random affirmation from array to pass
  
  if (affirmationsArray == "") { //check if array empty
    affirmationsArray = JSON.parse(affirmationsJSON) //get array from storage
    handleReset();
    console.log('js object', affirmationsArray) //test log
    alert('You have reached the end of your affirmations list. Your list has been reset.')
  } else {
    const idRandomIndex = affirmationsArray.indexOf(randomAffirmation); //id random index 
    affirmationsArray.splice(idRandomIndex, 1) //drop index from array (no repeats)
   
    displayQuote.textContent = `${randomAffirmation}` //display value of random index in html
    console.log('js object', affirmationsArray) //test log
  }
};
 
function handleReset(){
  affirmationsArray = JSON.parse(affirmationsJSON); //retreive array from storage and reassign to variable
  
  console.log('The quotes have been reset.') 
  displayQuote.textContent = `Inspiration Awaits!` //reset html display
  console.log('js object', affirmationsArray) //test log
} 

function handleAdd(){
  console.log('handleAdd runs');
  affirmationsArray.push(inputAffirmation.value); //push input value to array
  affirmationsJSON = JSON.stringify(affirmationsArray); 
  sessionStorage.setItem("affirmationsJSON", affirmationsJSON);

  alert(`Your quote "${inputAffirmation.value}" has been added to your list of affirmations!`); //notify user of change
  inputAffirmation.value = ""; //clear html text area for new input

  console.log('js object', affirmationsArray); //test log to ensure input was pushed to array
}; 

function displayList() { //display data
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
      </div>
      `;
    displayHTML += display;
  }
  document.querySelector('#manage-container').innerHTML = displayHTML;
  console.log('displayList runs')

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
    affirmationsArray = JSON.parse(affirmationsJSON)
    //test logs
    console.log("affirmations array after delete", displayedArray); //array post delete
    console.log('delete'); //delete confirm

    //change innerhtml
    displayList(); 
    });
  }); 
}; 

function hideList() {
  //destring JSON data
  manageContainer.innerHTML = ""; 
}