let userName = document.querySelector(
  "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
);
let followers = document.querySelector("span.t-bold");
let bio = document.querySelector("div.text-body-medium.break-words");
let locationOfUser = document.querySelector(
  "span.text-body-small.inline.t-black--light.break-words"
);

let connectionCount = document.querySelectorAll("span .t-bold");
// let url = connectionCount.baseUrl;

// sending data to index.js
function sendDataToIndex(data) {
  chrome.runtime.sendMessage({
    type: "dataFromUsers",
    data: data,
  });
}
const userData = {
  name: userName?.textContent || "",
  followers: followers?.textContent || "not found",
  bio: bio?.textContent || "",
  location: locationOfUser?.textContent || "",
  connectionCount: connectionCount?.innerHTML || "not found",
};

sendDataToIndex(userData);
