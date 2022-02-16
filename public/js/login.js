// adding event listeners
const form = document.querySelector('form');
const emailError = document.querySelector('.email');
const passwordError = document.querySelector('.password');



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  
  const password = form.password.value;


  console.log(email,  password)
//   emailError.textContent = "";
//   passwordError.textContent = "";

  try {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({  email, password }),
      headers: { "Content-Type": "application/json"}
    });

    const data = await response.json();
    console.log(data);

    if(data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
    }

    if(data.user) {
        location.assign('/')
    }
    
  } catch (error) {
    console.log(error)
  }
});