// let userName = document.querySelector(
//   "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
// );
// let connectionCount;
// let followersCount;
// setTimeout(() => {
//   const about = document.querySelectorAll(`.inline-show-more-text
//   .inline-show-more-text--is-collapsed
//   .inline-show-more-text--is-collapsed-with-line-clamp
//    `)
//    console.log(about);
//   let nums = document.querySelectorAll("span.t-bold");
//   connectionCount = nums[0].textContent;
//   followersCount = nums[1].innerText;
// }, 3000);

// let bio = document.querySelector("div.text-body-medium.break-words");
// let locationOfUser = document.querySelector(
//   "span.text-body-small.inline.t-black--light.break-words"
// );
// // let url = connectionCount.baseUrl;

window.addEventListener("load", function () {
  window.scrollBy({
    top: 3800,
    behavior: "smooth",
  });
  const ci = document.querySelectorAll(".relative.editor-container");

  setTimeout(() => {
    const i = document.querySelectorAll("div.ql-editor.ql-blank");
    let likeBtns = document.querySelectorAll(
      "button.artdeco-button.artdeco-button--muted.artdeco-button--4.ember-view.social-actions-button.react-button__trigger.artdeco-button--tertiary "
    );
    likeBtns.forEach((btn) => {
      btn.scrollIntoView({ behavior: "smooth" });
      btn.parentNode.style.backgroundColor = "grey"
      btn.parentNode.style.padding = "40px"
      // btn.click();
    });
    i.forEach((btn) => {
      btn.focus();
      btn.backgroundColor="black";
      btn.padding="40px";
      btn.innerText = "👍🏻";
    });
    console.log(i);
  }, 4000);
});
