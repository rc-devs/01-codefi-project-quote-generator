console.log('connected to manage-affirmations.js');
//get JSON item
let affirmationsJSON = localStorage.getItem("affirmationsJSON")

//dom communication
const manageContainer = document.querySelector('#js-manage-affirmations-container');

//function runs on load
displayAffirmationsArray(); //call on load to display list


function displayAffirmationsArray() { //display data
  let affirmationsArray = JSON.parse(affirmationsJSON) //destring JSON data
  let displayHTML = '';
  console.log(affirmationsArray)

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

  //new dom delete
  const btnDelete = document.querySelectorAll('.js-delete');
    
  //delete (?)function event
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
    let currentBtnIndex = btn.dataset.index;
    let affirmationsArray = JSON.parse(affirmationsJSON) //destring JSON data
    
    //delete from array
    console.log("this is the affrimations array", affirmationsArray); //current array
    affirmationsArray.splice(currentBtnIndex, 1); //delete from array
    affirmationsJSON = JSON.stringify(affirmationsArray); //change js back to JSON
    localStorage.setItem("affirmationsJSON", affirmationsJSON)
    console.log("affirmations array after delete", affirmationsArray); //array post delete
    console.log('delete'); //delete confirm

    //change innerhtml
    displayAffirmationsArray(); 
    });
  });
};


