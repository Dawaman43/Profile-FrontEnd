const settingIcon = document.querySelector('.settings_img');
const settingNav = document.querySelector('.settings_nav');

// Toggle settings navigation visibility
settingIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click from bubbling up to the document
  if (settingNav.style.display === "flex") {
    settingNav.style.display = "none";
  } else {
    settingNav.style.display = "flex";
  }
});

// Close settings navigation when clicking outside
document.addEventListener("click", (event) => {
  if (!settingNav.contains(event.target) && event.target !== settingIcon) {
    settingNav.style.display = "none";
  }
});
