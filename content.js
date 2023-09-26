let userName = document.querySelector('h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
let followers = document.querySelector('li.text-body-small.t-black--light.inline-block');
let bio = document.querySelector('div.text-body-medium.break-words');
let locationOfUser = document.querySelector('span.text-body-small.inline.t-black--light.break-words');

let connectionCount = document.querySelector('li.text-body-small ')


function sendDataToIndex(data) {
    chrome.runtime.sendMessage({
      type: 'dataFromUsers',
      data: data,
    });
  }
console.log(followers);
const userData = {
    name: userName.textContent ||"",
    followers: followers?.textContent  || "",
    bio: bio?.textContent|| "",
    location: locationOfUser?.textContent||"",
    connectionCount: connectionCount?.innerHTML||"",
  };
  
  sendDataToIndex(userData);
  