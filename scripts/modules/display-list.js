export function displayList() { //display data
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
    affirmationsArray = JSON.parse(affirmationsJSON)
    //test logs
    console.log("affirmations array after delete", displayedArray); //array post delete
    console.log('delete'); //delete confirm

    //change innerhtml
    displayList(); 
    });
  }); 
};
