export function handleGenerate() {
  const randomAffirmation = (affirmations[(Math.floor(Math.random(affirmations) * affirmations.length))]);
  
  if (affirmations == "") { //check if array empty
    alert('You have reached the end of your affirmations list. Your list has been reset.')
    handleReset();
    
    console.log('js object', affirmations) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  } else {
    const idRandomIndex = affirmations.indexOf(randomAffirmation); //id random index 
    affirmations.splice(idRandomIndex, 1) //drop index from array (no repeats)
   
    displayQuote.textContent = `${randomAffirmation}` //display value of random index in html
    console.log('js object', affirmations) //test log
    console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
  }
};
