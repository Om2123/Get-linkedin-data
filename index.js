// import { getUserData } from "./content";

// making a post request to your backend server.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "dataFromUsers") {
    // Save the user data to your backend server.
    const userData = message.data;
    console.log(userData);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(userData), // Parse userData to JSON before setting it as the request body
    };

    fetch("http://localhost:3000/users", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("User created:", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });

  }
});

// Define the options for the fetch request

// Make the POST request using the Fetch API

document.addEventListener("DOMContentLoaded", () => {
  // Get the button that opens the modal
  const btn = document.getElementById("scrapeButton");
  // Get the next LinkedIn profile link from the array.
  const linkedInProfileLinks = [
    "https://www.linkedin.com/in/rajesh-kr-mehra/",
    "https://www.linkedin.com/in/kiran-pitambar-bharambe-332336118/",
    "https://www.linkedin.com/in/vietpham03051999/",
  ];

  btn.addEventListener("click", async () => {
    const nextLinkedInProfileLink = linkedInProfileLinks.shift();

    if (!nextLinkedInProfileLink) {
      return;
    }
    // Open the LinkedIn profile link in the current tab.
    chrome.tabs.update({
      url: nextLinkedInProfileLink,
    });
    // Wait for a second to let the LinkedIn profile link load.
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Get the active tab.

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

 
  // If there are no more LinkedIn profile links in the array, then exit the function.
});
