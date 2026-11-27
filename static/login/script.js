const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const registerButton = document.getElementById("register-button");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields";
        return;
    }

    try {
        const endpoint = "/api/login";
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success) {
            errorMessage.style.color = "green";
            errorMessage.textContent = JSON.stringify(data);
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } else {
            errorMessage.style.color = "red";
            errorMessage.textContent = data.message;
        }
    } catch (error) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "An error occurred. Please try again.";
        console.error("Error:", error);
    }
});

registerButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Register button clicked");

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields";
        return;
    }

    try {
        const endpoint = "/api/register";
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success) {
            errorMessage.style.color = "green";
            errorMessage.textContent = JSON.stringify(data);
        } else {
            errorMessage.style.color = "red";
            errorMessage.textContent = data.message;
        }
    } catch (error) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "An error occurred. Please try again.";
        console.error("Error:", error);
    }
});
