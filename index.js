document.addEventListener("DOMContentLoaded", () => {
  // Get the button that opens the modal
  const btn = document.getElementById("scrapeButton");
  // Get the next LinkedIn profile link from the array.
  const linkedInProfileLinks = [
    "https://www.linkedin.com/in/rajesh-kr-mehra/",
    "https://www.linkedin.com/in/kiran-pitambar-bharambe-332336118/",
    "https://www.linkedin.com/in/vietpham03051999/"
  ];

  btn.addEventListener("click", async() => {
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
