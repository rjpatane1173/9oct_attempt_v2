// Get the frame and controls elements
const frame = document.getElementById('frame');
const controls = document.getElementById('controls');

// Create a variable to store the symbol position
let symbolPosition = 0;

// Function to update the frame content and background color
function updateFrameContent(name) {
    frame.innerHTML = name;
    frame.style.backgroundColor = 'lightblue';
}

// Function to update the symbol position
function updateSymbolPosition() {
    frame.innerHTML = `${symbolPosition}`;
}

// Function to handle the "Start" button click
function startButtonClicked() {
    const name = prompt('Enter Name:');
    if (name) {
        updateFrameContent(name);
    }
}

// Function to handle control button clicks
function controlButtonClicked(direction) {
    if (direction === 'up') {
        symbolPosition++;
    } else if (direction === 'down') {
        symbolPosition--;
    } else if (direction === 'left') {
        symbolPosition--;
    } else if (direction === 'right') {
        symbolPosition++;
    }
    updateSymbolPosition();
}

// Create a "Start" button and control buttons
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.addEventListener('click', startButtonClicked);

const controlButtons = ['up', 'down', 'left', 'right'].map((direction) => {
    const button = document.createElement('button');
    button.textContent = direction;
    button.addEventListener('click', () => controlButtonClicked(direction));
    return button;
});

// Add buttons to the controls div
controls.appendChild(startButton);
controlButtons.forEach((button) => controls.appendChild(button));
