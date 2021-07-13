const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a');

// submit 작동 안하게
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  console.log(event);
  alert('Clicked!');
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);
