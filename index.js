document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("getTabTitle");
    const tabTitle = document.getElementById("tabTitle");
        const toggleText = "close it";
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]) {
            
            if(tabTitle.textContent==""){
                tabTitle.textContent = tabs[0].title;
          }else{
            tabTitle.textContent="";
          }
          if(button.innerText==toggleText){
            button.innerText="Get Tab Title"
          }else{
            button.innerText=toggleText;
          }
        }
      });
    });
  });
  