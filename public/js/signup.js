// adding event listeners
const form = document.querySelector('form');
const emailError = document.querySelector('.email');
const passwordError = document.querySelector('.password');



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const name = form.name.value;
  const username = form.username.value;
  const address = form.address.value;
  const password = form.password.value;
  const profileImage = form.profileImage.value;


  console.log(email, name, username, address, password, profileImage)
//   emailError.textContent = "";
//   passwordError.textContent = "";

  try {
    const response = await fetch("/signUp", {
      method: "POST",
      body: JSON.stringify({ name, username, address, email, password, profileImage }),
      headers: { "Content-Type": "application/json"}
    });

    const data = await response.json();
    console.log(data);

    // if(data.errors) {
        // emailError.textContent = data.errors.email;
        // passwordError.textContent = data.errors.password;
    //}

    if(data.user) {
        location.assign('/')
    }
    
  } catch (error) {
    console.log(error)
  }
 });