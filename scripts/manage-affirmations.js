console.log('connected to manage-affirmations.js');
//imports
const retrievedData = localStorage.getItem("affirmationsJSON")

//dom communication
const manageContainer = document.querySelector('#js-manage-affirmations-container');

//function runs on load
displayAffirmationsArray(); //call on load to display list


function displayAffirmationsArray() { //display data
  let affirmationsArray = JSON.parse(retrievedData) //destring JSON data

  affirmationsArray.forEach((quote) => { //loop through array, display each value (quote) in html
    manageContainer.innerHTML += 
    `
    <div id="js-quote-container">
    <p>${quote}</p>
      <button class="js-delete">Delete</button>
      <button class="js-favorite">Add to Favorites</button>
    </div>
    `;

    //new dom and event listener
    const btnDelete = document.querySelectorAll('.js-delete'); //delete dom
    btnDelete.forEach((btn) => {btn.addEventListener('click', handleDelete)}); 

  });
};


function handleDelete(){
  let affirmationsArray = JSON.parse(retrievedData) //destring JSON data

  affirmationsArray.splice(0, 1);
  

  console.log('delete');
  console.log(retrievedData);
  console.log(affirmationsArray);
  };

