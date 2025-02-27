export function handleReset(){
  affirmations = JSON.parse(affirmationsJSON); //retreive array from storage and reassign to variable
  
  console.log('The quotes have been reset.') 
  displayQuote.textContent = `Inspiration Awaits!` //reset html display
  console.log('js object', affirmations) //test log
  console.log('json storage', affirmationsJSON); //test log to see if array was reset to original
}
