console.log('connected to manage-affirmations.js');
//imports
const retrievedData = localStorage.getItem("affirmationsJSON")

//dom communication
const manageContainer = document.querySelector('#js-manage-affirmations-container');
const testElem = document.querySelector('#js-test-element');

//event listeners



function displayAffirmationsArray() {
  let parsedData = JSON.parse(retrievedData) //destring JSON data
  let index = parsedData[0];

  parsedData.forEach((quote) => {
    manageContainer.innerHTML += 
    `
    <div id="js-quote-container">
    <p>${quote}</p>
      <button class="js-delete">Delete</button>
      <button class="js-favorite">Add to Favorites</button>
    </div>
    `;
 
  });

};
displayAffirmationsArray(); //call on load to display list


