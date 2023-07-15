const loginFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector('#login_email');
  const passwordEl = document.querySelector('#login_password');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document.getElementById("signup").addEventListener("submit", signup);