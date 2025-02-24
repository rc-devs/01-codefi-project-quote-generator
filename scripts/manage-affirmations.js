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

  //new dom and event listener created for delete
  const btnDelete = document.querySelectorAll('.js-delete'); //delete dom
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
    let currentBtnIndex = btn.dataset.index;
    let affirmationsArray = JSON.parse(retrievedData) //destring JSON data
   
    console.log("this is the object array",affirmationsArray); //test array
  
  affirmationsArray.splice(currentBtnIndex, 1)
    console.log(affirmationsArray);
    

    //affirmationsArray.displayAffirmationsArray();
    
    
    // console.log('delete');
    // console.log("this is the JSON String", retrievedData); 
    // console.log("this is the object array",affirmationsArray);
    }
  )})
};


// function handleDelete(btn){
//   const currentBtnIndex = btn.dataset.index;
//   console.log(currentBtnIndex);
//   const currentIndex = null;
//   let affirmationsArray = JSON.parse(retrievedData) //destring JSON data
 
//   console.log("this is the object array",affirmationsArray); //test array

//   for (let i = 0; i < affirmationsArray.length; i++) {
//     console.log(affirmationsArray[i])
//     //affirmationsArray.splice(i, 1);
//   }
  
//   //affirmationsArray.displayAffirmationsArray();
  
  
//   console.log('delete');
//   console.log("this is the JSON String", retrievedData); 
//   console.log("this is the object array",affirmationsArray);
//   };

