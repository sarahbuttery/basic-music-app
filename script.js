// On window load run a function, after the content is loaded the code will run
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound'); // Selects all classes named sound
    const pads = document.querySelectorAll(".pads div"); // Want to select all of the divs inside the main pads class
    const visual = document.querySelector('.visual');
    const colours = [
        "#60d394", 
        "#d36060", 
        "#c060d3", 
        "#d3d160", 
        "#606bd3", 
        "#60c2d3"
    ];
    
    console.log(sounds);

    // Lets get going with the sound
    pads.forEach((pad, index) => { // Looping through each div within the pad class with a for loop and then adding a click event listener to each div. Index gives you access to the 0 - 5 music files, 6 in total
        pad.addEventListener('click', function () { // /on the click run a function 
            sounds[index].currentTime = 0; // Reset the sounds when clicked
            sounds[index].play(); // play() method plays the current audio/video, you can also use pause() method to pause the audio/video
            
            createBubbles(index);
        });
    });
    
    // Create a function that makes bubbles 
    const createBubbles = (index) => { // Adding an arrow function
        const bubble = document.createElement('div'); // Create a div element with JavaScript
        visual.appendChild(bubble); // Add bubbles to visual element in the document
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
           visual.removeChild(this);
        });
    }
}); // Function scope, sounds only available here, will not be available in the global scope

//console.log(sounds); moved this inside the scope 