// Get form elements
const form = document.querySelector("#contactForm");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const successMessage = document.querySelector("#success");
const errorMessages = document.querySelectorAll(".error");

// Form submission handler
form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

// Add event listeners for real-time validation
fullname.addEventListener("input", function() {
    if (fullname.value.trim() === "") {
        displayError(0, "Full name is required.");
    } else {
        clearError(0);
    }
});
email.addEventListener("input", function() {
    if (!isValidEmail(email.value.trim())) {
        displayError(1, "Invalid email address.");
    } else {
        clearError(1);
    }
});
message.addEventListener("input", function() {
    if (message.value.trim() === "") {
        displayError(2, "Message is required.");
    } else {
        clearError(2);
    }
});

// Validate form data
function validateForm() {
    clearMessages();
    let errorFlag = false;

    if (fullname.value.trim() === "") {
        displayError(0, "Full name is required.");
        errorFlag = true;
    }
    if (!isValidEmail(email.value.trim())) {
        displayError(1, "Invalid email address.");
        errorFlag = true;
    }
    if (message.value.trim() === "") {
        displayError(2, "Message is required.");
        errorFlag = true;
    }
    if (!errorFlag) {
        // Redirect to welcome.html
        window.location.href = 'welcome.html';
        // Display success message
        displaySuccess("Message sent successfully!");
    }
}

// Clear error and success messages
function clearMessages() {
    errorMessages.forEach(message => message.innerText = "");
    successMessage.innerText = "";
}

// Display error message for specific input field
function displayError(index, errorMessage) {
    errorMessages[index].innerText = errorMessage;
}

// Function to clear error message for a specific input field
function clearError(index) {
    errorMessages[index].innerText = "";
}

// Display success message
function displaySuccess(successMessageText) {
    successMessage.innerText = successMessageText;
}

// Check if email is valid
function isValidEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
