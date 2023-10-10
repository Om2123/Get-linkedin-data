 

window.addEventListener("load", function () {
  // this data would be taken from user
  let likeCount,commentCount;
  // Listen for messages from the popup to get the likeCount and commentCount
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'sendData') {
        // const { number1, number2 } = request.data;
          const like = request.data.like;
          const comment = request.data.comment;
        // Now you have the input data in content.js, you can use it to perform actions on the LinkedIn page.
        // For example, liking comments or performing other actions.
        likeCount = parseInt(like);
        commentCount = parseInt(comment);
        // Here's a sample action:
    }
  });
  // scroll page to the bottom so that most of the data will be loaded in dom
  window.scrollBy({
    top: 3800,
    behavior: "smooth",
  });

  setTimeout(() => {
    // likeBtns would hold all the like buttons
    let likeBtns = document.querySelectorAll(
      "button.artdeco-button.artdeco-button--muted.artdeco-button--4.ember-view.social-actions-button.react-button__trigger.artdeco-button--tertiary "
    );
      // this loop will go to every like button present in the array
    for (let index = 0; index < likeCount; index++) {
      // if the page don't have much posts it will simply return
      if(index >= likeBtns.length)
      {
        break;
      }
        likeBtns[index].scrollIntoView({ behavior: "smooth" }); //scroll page to the button
        likeBtns[index].parentNode.style.backgroundColor = "blue";//set bg color to different to be sure it worked
        likeBtns[index].parentNode.style.padding = "40px"; // set padding to different to be sure it worked
        likeBtns[index].click();  // like the post
    }

    // commentInputs would hold all the comment inputs
    const commentInputs = document.querySelectorAll("div.ql-editor.ql-blank");
    // this loop will go to every comment input present in the array 
    for (let index = 0; index < commentCount; index++) {
      // if the page don't have much posts it will simply return 
      if(index >= commentInputs.length)
      {break;}
      commentInputs[index].focus(); // focus on the input
      commentInputs[index].parentNode.style.backgroundColor = "grey";//set bg color to different to be sure it worked
      commentInputs[index].style.padding = "40px";//set padding to different to be sure it worked
      commentInputs[index].innerText = "👍🏻 comment written by 👨🏻‍💻 👨🏻‍💻 👨🏻‍💻"; // set the comment
    }

    // it would hold all the post buttons
    const postbtn = document.querySelectorAll("button.ember-view.artdeco-button--1.artdeco-button--primary")
    
    // to post the comment 
    // run this loop and click on the post button

    // for (let index = 0; index < postbtn.length; index++) {
    // postbtn.click()
    // }

    // Note: i am not gonna post it due to my personal reasons but i have written the code in case you want to use it
    

    // if you want to like all the post avalable in post and comment and this code would simple brute force it 

    // likeBtns.forEach((btn) => {
    //   btn.scrollIntoView({ behavior: "smooth" });
    //   btn.parentNode.style.backgroundColor = "grey";
    //   btn.parentNode.style.padding = "40px";
    //   // btn.click();
    // });

    // commentInputs.forEach((input) => {
    //   input.focus();
    //   input.backgroundColor = "black";
    //   input.padding = "40px";
    //   input.innerText = "👍🏻 comment written by 👨🏻‍💻 👨🏻‍💻 👨🏻‍💻 👨🏻‍💻 ";
    // });
  }, 6000);
});
