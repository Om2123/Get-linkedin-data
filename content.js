let userName = document.querySelector(
  "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
);
let connectionCount;
let followersCount;
setTimeout(() => {
  const about = document.querySelectorAll(`.inline-show-more-text
  .inline-show-more-text--is-collapsed
  .inline-show-more-text--is-collapsed-with-line-clamp
   `)
   console.log(about);
  let nums = document.querySelectorAll("span.t-bold");
  connectionCount = nums[0].textContent;
  followersCount = nums[1].innerText;
}, 3000);

let bio = document.querySelector("div.text-body-medium.break-words");
let locationOfUser = document.querySelector(
  "span.text-body-small.inline.t-black--light.break-words"
);

// let url = connectionCount.baseUrl;

setTimeout(() => {
// sending data to index.js
function sendDataToIndex(data) {
  chrome.runtime.sendMessage({
    type: "dataFromUsers",
    data: data,
  });
}
const userData = {
  name: userName?.textContent || "",
  followers: followersCount || "not found",
  bio: bio?.textContent || "",
  location: locationOfUser?.textContent || "",
  connectionCount: connectionCount || "not found",
};

  sendDataToIndex(userData);
}, 4000);
