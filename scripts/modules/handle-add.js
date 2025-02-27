export function handleAdd(){
  console.log('handleAdd runs');
  affirmations.push(inputAffirmation.value); //push input value to array
  affirmationsJSON = JSON.stringify(affirmations); //
  localStorage.setItem("affirmationsJSON", affirmationsJSON);

  alert(`Your quote "${inputAffirmation.value}" has been added to your list of affirmations!`); //notify user of change
  inputAffirmation.value = ""; //clear html text area for new input

  console.log('js object', affirmations); //test log to ensure input was pushed to array
  console.log('json storage', affirmationsJSON); //test log to ensure local storage update
};
