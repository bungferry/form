function anyThing(destroyFeedback) {
  setTimeout(function(){ destroyFeedback(true); }, 1500);
}

function noThing(destroyFeedback) {
  setTimeout(function(){ destroyFeedback(true); }, 10000);
}

var stepperDiv = document.querySelector('.stepper');
console.log(stepperDiv);
var stepper = new MStepper(stepperDiv);
