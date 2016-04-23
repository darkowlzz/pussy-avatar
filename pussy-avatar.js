// Get all the avatar elements
var avatars = document.getElementsByClassName("avatar");
var timelineAvatars = document.getElementsByClassName("timeline-comment-avatar");

// Replace the image src of all the elements with pussy
for (var i = 0; i < avatars.length; ++i) {
  avatars[i].src = chrome.extension.getURL("avatar.png");
}

for (var i = 0; i < timelineAvatars.length; ++i) {
  timelineAvatars[i].src = chrome.extension.getURL("avatar.png");
}
