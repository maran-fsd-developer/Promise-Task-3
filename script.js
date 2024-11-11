// Define a function to fetch a random fox image from an external API
document.addEventListener("DOMContentLoaded", function () {
    function fetchFoxImage() {
      return fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then((data) => {
          const foxImg = document.getElementById("foxImg");
          foxImg.src = data.image; 
        })
        .catch((error) => {
          console.error("Error fetching fox image:", error);
        });
    }
  
    // Call the fetchFoxImage function initially to load an image
    fetchFoxImage();
  
    // Add an event listener to the "refreshButton" to fetch a new image on click
    document.getElementById("refreshButton").addEventListener("click", fetchFoxImage);
  });
  