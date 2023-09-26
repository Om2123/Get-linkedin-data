// Define the getData function first
function getData() {
  console.log("Hello");
  alert("It's working!");
}

// Add an event listener to the button after defining getData
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("collectTags");
  btn.addEventListener("click", async () => {
    // Get the currently active tab
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    // Send a message to the content script of the active tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["content.js"],
    });
  });
});
