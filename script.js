// Function to show alert when the button is clicked
function showWelcomeMessage() {
    alert("Hello, welcome to my page!");
}

// Change background color on hover over the profile picture
const profilePic = document.getElementById('profile-pic');
profilePic.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#D3E4CD';
});

profilePic.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f0f8ff';
});
