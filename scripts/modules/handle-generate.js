export function handleGenerate() {
  const randomAffirmation = (affirmationsArray[(Math.floor(Math.random(affirmationsArray) * affirmationsArray.length))]);
  
  if (affirmationsArray == "") { //check if array empty
    alert('You have reached the end of your affirmations list. Your list has been reset.')
    affirmationsArray = JSON.parse(affirmationsJSON)
    handleReset();
    console.log('js object', affirmationsArray) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  } else {
    const idRandomIndex = affirmationsArray.indexOf(randomAffirmation); //id random index 
    affirmationsArray.splice(idRandomIndex, 1) //drop index from array (no repeats)
   
    displayQuote.textContent = `${randomAffirmation}` //display value of random index in html
    //affirmationsArray = JSON.parse(affirmationsJSON)
    console.log('js object', affirmationsArray) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  }
};