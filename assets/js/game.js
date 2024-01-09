document.addEventListener('DOMContentLoaded', function() {
    const helpIcon = document.getElementById('helpIcon');
    const helpOverlay = document.getElementById('helpOverlay');
    const helpCloseButton = document.getElementById('helpCloseButton');

    function toggleHelpOverlay() {
      if (helpOverlay) {
        helpOverlay.classList.toggle('active');
      }
    }
  
    if (helpIcon) {
      helpIcon.addEventListener('click', toggleHelpOverlay);
    }
  
    if (helpCloseButton) {
      helpCloseButton.addEventListener('click', () => {
        if (helpOverlay) {
          helpOverlay.classList.remove('active');
        }
    });
    }
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
  
  // Function to display a hint for the current word
  const hintBtn = document.getElementById('hint-btn');
  const hintDisplay = document.getElementById('hint-display');
  
  function displayHint() {
    if (currentWordIndex < words.length) {
      hintDisplay.textContent = words[currentWordIndex].hint;
    }
  }
  
  hintBtn.addEventListener('click', () => {
    if (hintDisplay.textContent !== '') {
      // Hide the hint message if it's already displayed
      hintDisplay.textContent = '';
    } else {
      displayHint(); // Display the hint if it's not displayed
    }
  });
  
  const letterContainer = document.getElementById('letter-container');

  // Attach touch event listeners to the letter containers
  letterContainer.addEventListener('touchstart', handleTouchStart);
  letterContainer.addEventListener('touchmove', handleTouchMove);
  letterContainer.addEventListener('touchend', handleTouchEnd);

  const boxes = document.querySelectorAll('.box');
  const submitBtn = document.getElementById('submit-btn');
  const deleteBtn = document.getElementById('delete-btn');
  let removedLetters = [];
  
  // Function to create letter containers
  function createLetterContainers() {
    const scrambledLetters = currentWord.scrambled.split('');
    scrambledLetters.forEach(letter => {
      const div = document.createElement('div');
      div.textContent = letter;
      div.classList.add('letter');
      div.setAttribute('draggable', true);
      letterContainer.appendChild(div);
    });
  }
  
  // Function to setup the game for the next word
  function setupGameForNextWord() {
    letterContainer.innerHTML = ''; // Clear previous letters
    boxes.forEach(box => (box.innerHTML = '')); // Clear previous boxes
  
    currentWord = words[currentWordIndex]; // Set the current word to the next word
    createLetterContainers(); // Load letters for the next word
    attachDragAndDropListeners(); // Drag-and-drop listeners to the new set of letters
  }
  
  // Function to handle drag-and-drop listeners for the letters
  function attachDragAndDropListeners() {
    const letters = document.querySelectorAll('.letter');
  
    letters.forEach(letter => {
      letter.addEventListener('dragstart', () => {
        letter.classList.add('dragging');
      });
  
      letter.addEventListener('dragend', () => {
        letter.classList.remove('dragging');
      });
  
      letter.addEventListener('click', () => {
        const targetBox = document.querySelector('.dragging');
        if (targetBox !== null) {
          targetBox.textContent = letter.textContent;
          letter.remove();
        }
      });
    });
  }
  
  createLetterContainers();
  attachDragAndDropListeners(); // Drag-and-drop listeners to the initial set of letters
  
  boxes.forEach(box => {
    box.addEventListener('dragover', e => {
      e.preventDefault();
    });
  
    box.addEventListener('drop', e => {
      const draggedLetter = document.querySelector('.dragging');
      if (draggedLetter && box.children.length === 0) {
        box.appendChild(draggedLetter);
      }
    });
  });
  
// Function to display modal messages including completion message
function displayModalMessage(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  modalMessage.textContent = message;
  modal.style.display = 'block';

  // Close modal when the close button is clicked
  const modalCloseButton = document.querySelector('.modalCloseButton');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
}

// Function to handle game completion
function handleGameCompletion() {
  let playerName = prompt('Congratulations! You completed Jumble Jungle. Please enter your name:');

  if (playerName) {
    // Redirect to the leaderboard page with the player's name as a query parameter
    window.location.href = `leaderboard.html?name=${encodeURIComponent(playerName)}`;
  }
}

// Function to check the submitted word and handle accordingly
function checkSubmittedWord() {
  let formedWord = '';
  boxes.forEach((box) => {
    if (box.children.length > 0) {
      formedWord += box.children[0].textContent;
    }
  });

  if (formedWord === currentWord.word) {
    if (currentWordIndex === words.length - 1) {
      handleGameCompletion();
      displayModalMessage('Congratulations! You have completed Jumble Jungle.');
    } else {
      currentWordIndex++;
      currentWord = words[currentWordIndex];
      displayModalMessage('Correct! Move on to the next word.');
      setupGameForNextWord();
    }
  } else {
    displayModalMessage('Incorrect! Try again.');
  }
}

// Submit button event listener
submitBtn.addEventListener('click', checkSubmittedWord);
  
  // Function to handle deleting the last letter from the boxes
  function deleteLastPlacedLetter() {
    let lastPlacedLetter = null;
    let boxWithLastLetter = null;
  
    // Get the box containing the last placed letter
    boxes.forEach(box => {
      const lettersInBox = box.querySelectorAll('.letter');
      if (lettersInBox.length > 0) {
        lastPlacedLetter = lettersInBox[lettersInBox.length - 1];
        boxWithLastLetter = box;
      }
    });
  
    if (lastPlacedLetter !== null && boxWithLastLetter !== null) {
      boxWithLastLetter.removeChild(lastPlacedLetter); // Remove the last placed letter from the box
      removedLetters.push(lastPlacedLetter.textContent); // Store the removed letter for restoration
      letterContainer.appendChild(lastPlacedLetter); // Append the removed letter back to the letter container
    }
  }
  
  // Attach an event listener to the Delete button
  deleteBtn.addEventListener('click', () => {
    deleteLastPlacedLetter();
  });
  
  // Function to handle touch events for adding a letter to the boxes
  function handleTouchStart(event) {
    const touchedLetter = event.target;
    if (touchedLetter.classList.contains('letter')) {
      touchedLetter.classList.add('dragging');
      event.preventDefault(); // Prevent default touch events that interfere with drag and drop
    }
  }
  
  function handleTouchMove(event) {
    const touchedLetter = event.target;
    if (touchedLetter.classList.contains('dragging')) {
      // Some devices might require preventing default behavior for touchmove events
      event.preventDefault();
    }
  }
  
  function handleTouchEnd(event) {
    const touchedLetter = event.target;
    if (touchedLetter.classList.contains('dragging')) {
      touchedLetter.classList.remove('dragging');
  
      // Find the next available box to drop the letter into
      let nextAvailableBox = null;
      boxes.forEach(box => {
        if (box.children.length === 0 && nextAvailableBox === null) {
          nextAvailableBox = box;
        }
      });
  
      if (nextAvailableBox !== null) {
        nextAvailableBox.appendChild(touchedLetter);
      }
    }
  }
