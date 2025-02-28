console.log('connected to manage-affirmations.js');
//imports
const retrievedData = localStorage.getItem("affirmationsJSON")

//dom communication
const manageContainer = document.querySelector('#js-manage-affirmations-container');

//function runs on load
displayAffirmationsArray(); //call on load to display list


function displayAffirmationsArray() { //display data
  let affirmationsArray = JSON.parse(retrievedData) //destring JSON data
  let displayHTML = '';

  for (let i = 0; i < affirmationsArray.length; i++) {
    const quote = affirmationsArray[i];
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
};


//new dom delete
const btnDelete = document.querySelectorAll('.js-delete');
  
//delete (?)function
btnDelete.forEach((btn) => {
  btn.addEventListener('click', () => {
  let currentBtnIndex = btn.dataset.index;
  let affirmationsArray = JSON.parse(retrievedData) //destring JSON data
 
  //delete from array
  console.log("this is the affrimations array", affirmationsArray); //test array
  affirmationsArray.splice(currentBtnIndex, 1) //delete from array
  

  console.log("affirmations array after delete", affirmationsArray);
  

  //change innerhtml
  /* document.querySelector('#js-manage-affirmations-container').innerHTML =  */displayAffirmationsArray();
  console.log('delete');
  });
});