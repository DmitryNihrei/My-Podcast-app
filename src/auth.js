export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required>
        <label for="password">Пароль</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">
        Log in
      </button>
    </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = "AIzaSyBC3ROfiuBn9199ueUf-AiP36F92Rij0BE"
  return fetch(`    https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.idToken)
}
