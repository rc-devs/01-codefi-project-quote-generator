console.log('connected to manage-affirmations.js');

//imports
const retrievedData = localStorage.getItem("affirmationsJSON")

//dom communication
const manageContainer = document.querySelector('#manage-affirmations-container');

//event listeners



function displayAffirmationsArray() {
  manageContainer.innerHTML = retrievedData
  
};
displayAffirmationsArray();