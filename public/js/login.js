async function signup(event) {
    event.preventDefault()
    const email = document.getElementById("signup_email").value.trim() 
    const username = document.getElementById("signup_username").value.trim() 
    const password = document.getElementById("signup_password").value.trim() 
    console.log(email, username, password);
    try {
        const response = await fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify({username, email, password}),
            headers: {"Content-Type": "application/json"}
        })
        console.log(response);
        document.location.replace("/dashboard")
    } catch (error) {
        alert('Failed to login');
        console.log(error);
    }
}

document.getElementById("signup").addEventListener("submit", signup)