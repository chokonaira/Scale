//Return the html element with the ID attribute of 'SUBMIT' and assign to it an on-click event handler
document.getElementById('submit').onclick = ()=> {

  //Convert the string of array to a pure array by using json.parse to remove quotes
  const inputOne = JSON.parse(document.getElementById('input-1').value);
  const weights = JSON.parse(document.getElementById('input-2').value);

  //Assign array values to the first input element to variable left and right, since arrays are zero based
  const left = inputOne[0];
  const right = inputOne[1];

  //Loop through the array values in the list of available weights (in the second input element) 
  for (let i = 0; i < weights.length; i++) {
    
    //check if the left plus a single value from the weights array is strictly equal to the right side or vice versa
    if (left + weights[i] === right || right + weights[i] === left) {

      //If any of the condition are true (i.e if the left and right side of the scale are balanced) display the single value tha balanced it 
      document.getElementById('result').innerHTML = weights[i];
      return;
    }
    //If not, loop through the weights array again, this time starting from the current value of i + 1, so that we start from the next value right after i
    for (let j = i + 1; j < weights.length; j++) {

      //Check if left and right can be balance using a combination of array values at index i and j.
      if (left + weights[i] + weights[j] === right
        || right + weights[i] + weights[j] === left
        || left + weights[i] === right + weights[j]
        || right + weights[i] === left + weights[j]) {

          //if balanced, check if the array value at index i is less that the value at index j
        if (weights[i] < weights[j]) {
          
          //If true, the value of the balancing weights(array values) should be displayed in ascending order
          document.getElementById('result').innerHTML = `${weights[i]}, ${weights[j]}`;
        } else {

          //otherwise, they should be reversed
          document.getElementById('result').innerHTML = `${weights[j]}, ${weights[i]}`;
        }
        return;
      }

    }
  }
  //If no value from the array of weights(the second input element) is to balance the left and right side of the scale(i.e the first input element), the result should display 'SCALE IMBALANCED'
  document.getElementById('result').innerHTML = 'Scale Imbalanced';
  return;

}