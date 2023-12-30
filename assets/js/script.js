document.addEventListener('DOMContentLoaded', function() {
// Function to toggle the help overlay
document.getElementById('helpIcon').addEventListener('click', function() {
  document.getElementById('helpOverlay').classList.toggle('active');
});

// Function to close the help overlay
document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('helpOverlay').classList.remove('active');
});

// Navigation menu clickable images //
document.querySelectorAll('.nav-icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
    const targetPage = this.getAttribute('data-target');
    // Perform actions based on the clicked icon or page target
    // For example: show/hide content, load a new section, etc.
    console.log('Clicked icon with target:', targetPage);
  });
});
});

// Selection of words for the game //
let words = [
  { word: 'RHETORIC', scrambled: 'TRHCOREI', hint: 'This word refers to the art of persuasive speaking or writing.'},
  { word: 'INNOCENT', scrambled: 'NINOTCEN', hint: 'This word describes someone who is not guilty.'},
  { word: 'ACTIVATE', scrambled: 'TIVCAATE', hint: 'This word means to make something active or operative.'},
  { word: 'FAMILIAR', scrambled: 'AMILAFRI', hint: 'This word signifies something well-known or easily recognized.'},
  { word: 'SURROUND', scrambled: 'USURDRON', hint: 'This word means to encircle or envelop completely.'},
  { word: 'MARRIAGE', scrambled: 'MAGERRAI', hint: 'This word refers to the union of two individuals in matrimony.'},
  { word: 'CHAMPION', scrambled: 'MOPHICAN', hint: 'This word denotes a person who excels in a competition.'},
  { word: 'STUBBORN', scrambled: 'BRNTUOBS', hint: 'This word refers to a person who is determined and unyielding.'},
  { word: 'ATTITUDE', scrambled: 'DTTATIEU', hint: 'This word describes a settled way of thinking or feeling about something'},
  { word: 'MEDICINE', scrambled: 'MDIENICE', hint: 'This word pertains to substances used for treating diseases.'},
  { word: 'PROFOUND', scrambled: 'PFRDUNOO', hint: 'This word signifies something deep or intense.'},
  { word: 'CONVINCE', scrambled: 'CNVNCOIE', hint: 'This word means to persuade or win over by argument.'},
  { word: 'DEDICATE', scrambled: 'DEIDCTAE', hint: 'This word refers to commit oneself to a particular undertaking.'},
  { word: 'ROMANTIC', scrambled: 'IMONRACT', hint: 'This word pertains to sentiments or actions associated with love.'},
  { word: 'DISTANCE', scrambled: 'SITDNECA', hint: 'This word represents the extent or amount of space between two things.'},
  { word: 'FLOURISH', scrambled: 'LFOSIUHR', hint: 'This word means to grow or develop in a healthy or vigorous way.'},
  { word: 'UNLAWFUL', scrambled: 'NLUUFALW', hint: 'This word denotes something illegal or prohibited by law.'},
  { word: 'APPROACH', scrambled: 'AORCPPAH', hint: 'This word signifies an initial approach or means of dealing with something.'},
  { word: 'COLLAPSE', scrambled: 'LALEPSCO', hint: 'This word represents the sudden fall or breakdown of something.'},
  { word: 'PARTICLE', scrambled: 'TPCLRIEA', hint: 'This word refers to a tiny or minute piece of matter.'},
  { word: 'MOURNING', scrambled: 'NIMOURNG', hint: 'This word pertains to the expression of grief or sorrow.'},
  { word: 'PORTRAIT', scrambled: 'RROAPTIT', hint: 'This word refers to a painting, drawing, or photograph of a person.'},
  { word: 'MONOPOLY', scrambled: 'LMOOYNOP', hint: 'This word signifies exclusive control or possession of something.'},
  // Add further words here //
];
let currentWordIndex = 0; // Keep track of the current word index
let currentWord = words[currentWordIndex]; // Initialize with the first word
