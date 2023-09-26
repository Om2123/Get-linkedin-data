document.addEventListener("DOMContentLoaded", () => {
  // Get the button that opens the modal
  const btn = document.getElementById("scrapeButton");
  const btn2 = document.getElementById("getData");
  // Get the next LinkedIn profile link from the array.
  const linkedInProfileLinks = [
    "https://www.linkedin.com/in/rajesh-kr-mehra/",
    "https://www.linkedin.com/in/kiran-pitambar-bharambe-332336118/",
  ];

  btn.addEventListener("click", () => {
    const nextLinkedInProfileLink = linkedInProfileLinks.shift();

    if (!nextLinkedInProfileLink) {
      return;
    }

    // Open the LinkedIn profile link in the current tab.
    chrome.tabs.update({
      url: nextLinkedInProfileLink,
    });
  });
  btn2.addEventListener("click", () => {
    
    console.log("get the data");
  });
  // If there are no more LinkedIn profile links in the array, then exit the function.
});
