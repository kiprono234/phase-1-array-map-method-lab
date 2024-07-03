const tutorials = [
  "what Does The This keyword mean?",
  "What is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  'The Test Driven Development Workflow',
  "What is NaN and How Can We Check For It",
  "What is the Difference Between StopPropagation and PreventDefault?",
  "Immutable State and Pure Functions",
  "What is The Difference Between == And ===?",
  "What is The Difference Between Event Capturing and Bubbling?",
  "What is JSONP?"
];
function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
}
