// Function to open login popup
function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

// Function to close login popup
function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

// Event listener for login button
document.getElementById('loginBtn').addEventListener('click', openPopup);
