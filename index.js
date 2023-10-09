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
  // Initially, disable the button since both input fields are empty
  toggleButtonState();

  btn.addEventListener("click", function () {
    chrome.tabs.update({
      url: "https://www.linkedin.com/feed/",
    });
  });
});
