import App from './app';

const buttonLogin = document.getElementById("btnLogin");
const inputEmail = document.getElementById("inputEmail");
const inputPasswords = document.getElementById("inputPassword");

buttonLogin.addEventListener("click", () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputEmail.value, inputPasswords.value)
        .then((userCredential) => {
            alert('user conected!') ;

            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            alert(error.message);
        });
});