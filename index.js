// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    const jobTitles = ['Front-end Developer & Java Developer'];
    const jobTitleElement = document.getElementById('jobTitle');
    let currentIndex = 0;
    let currentCharacterIndex = 0;
  
    function typeJobTitle() {
      if (currentCharacterIndex < jobTitles[currentIndex].length) {
        jobTitleElement.innerHTML += jobTitles[currentIndex].charAt(currentCharacterIndex);
        currentCharacterIndex++;
        setTimeout(typeJobTitle, 70); // Adjust typing speed as needed
      } else {
        setTimeout(eraseJobTitle, 90); // Display for a moment and then erase
      }
    }
  
    function eraseJobTitle() {
      if (jobTitleElement.innerHTML.length > 0) {
        jobTitleElement.innerHTML = jobTitleElement.innerHTML.slice(0, 40);
        setTimeout(eraseJobTitle, 50); // Adjust erasing speed as needed
      } else {
        currentIndex = (currentIndex + 1) % jobTitles.length; // Switch to the next job title
        setTimeout(typeJobTitle, 70); // Delay before typing the next job title
      }
    }
  
    // Start the typing animation
    typeJobTitle();
  });
  




  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;

function slide() {
    index = (index + 1) % slides.length;
    const translateX = -index * 800;
    slider.style.transform = `translateX(${translateX}px)`;
}

setInterval(slide, 2000);



  // JavaScript to handle the dropdown selection
  var dropdown = document.getElementById("fruitDropdown");
  var selectedFruit = document.getElementById("selectedFruit");

  dropdown.addEventListener("change", function() {
      selectedFruit.textContent = dropdown.value;
  });