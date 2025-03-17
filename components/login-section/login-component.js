export const LoginComponent = () => {
  setTimeout(() => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".button-input");

    loginButton.addEventListener("click", (event) => {
      event.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (username === "" || password === "") {
        alert("Username dan Password harus diisi!");
      } else {
        // Tampilkan preloader
        const preloader = document.getElementById("preloader");
        if (preloader) {
          preloader.style.display = "flex";
          preloader.style.opacity = "1";
        }

        setTimeout(() => {
          // Redirect to home.html directly instead of using hash
          window.location.href = "home.html";

          setTimeout(() => {
            const preloader = document.getElementById("preloader");
            if (preloader) {
              preloader.style.opacity = "0";
              setTimeout(() => (preloader.style.display = "none"), 500);
            }
          }, 500);
        }, 1000);
      }
    });
  }, 0);

  return `
  <div class="login-comp">
    <div class="background">
      <div class="login-header">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="login-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
        
        <p class="title-comp-one">Hi, Selamat Datang!</p>
        <p class="title-comp-two">Silakan isi data terlebih dahulu.</p>
      </div>

      <form class="input-form" autocomplete="off">
        <!-- Username Field -->
        <div class="input-group">
          <label for="username" class="input-label">Username</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25A4.5 4.5 0 1 1 7.5 8.25a4.5 4.5 0 0 1 9 0ZM3 20.25v-1.5A5.25 5.25 0 0 1 8.25 13.5h7.5A5.25 5.25 0 0 1 21 18.75v1.5"/>
            </svg>
            <input id="username" class="input-field" type="text" placeholder="Masukkan Username" required autocomplete="off"/>
          </div>
        </div>

        <!-- Password Field -->
        <div class="input-group">
          <label for="password" class="input-label">Password</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V7.5a3.75 3.75 0 1 0-7.5 0v3m-1.5 0h10.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75Z"/>
            </svg>
            <input id="password" class="input-field" type="password" placeholder="Masukkan Password" required autocomplete="new-password"/>
          </div>
        </div>

        <!-- Ingat Saya & Lupa Password -->
        <div class="options">
          <label class="checkbox-label">
            <input type="checkbox" id="remember-me" class="checkbox-input"/>
            Ingat Saya
          </label>
          <a href="#" class="forgot-password">Lupa Password?</a>
        </div>

        <button class="button-input" type="submit">Log in</button>
      </form>
    </div>
  </div>
  `;
};
