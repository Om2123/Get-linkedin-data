document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input fields and the button

  const likeCountInput = document.getElementById("likeCount");
  const commentCountInput = document.getElementById("CommentCount");
  const btn = document.getElementById("scrapeButton");
   // Add an event listener to both input fields to check for changes
  likeCountInput.addEventListener("input", toggleButtonState);
  commentCountInput.addEventListener("input", toggleButtonState);

  // Function to toggle the button state based on input values
  function toggleButtonState() {
    // Get the values from the input fields
    const likeCountValue = likeCountInput.value.trim();
    const commentCountValue = commentCountInput.value.trim();

    // Disable the button if either input field is empty
    if (likeCountValue === "" || commentCountValue === "") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }
  toggleButtonState();

  btn.addEventListener("click", function () {
    // update the url to linkedin feed
    chrome.tabs.update({
      url: "https://www.linkedin.com/feed/",
    });
    setInterval(() => {
      // Send a message to content.js
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'sendData', data: { "like":likeCountInput.value,"comment": commentCountInput.value } });
    });
    },1000)
  });
   
});
