import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyiJfd42ChHIEXTbqtaUtnWPYOuThU0fE",
  authDomain: "trial-website-52f78.firebaseapp.com",
  projectId: "trial-website-52f78",
  appId: "1:20272237580:web:8498d63d87c217c4afb229"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const msg = document.getElementById("msg");

window.signup = () => {
  createUserWithEmailAndPassword(
    auth,
    signupEmail.value.trim(),
    signupPassword.value
  )
  .then(() => msg.innerText = "✅ Account created")
  .catch(e => msg.innerText = e.message);
};

window.login = () => {
  signInWithEmailAndPassword(
    auth,
    loginEmail.value.trim(),
    loginPassword.value
  )
  .then(() => msg.innerText = "✅ Login successful")
  .catch(e => msg.innerText = e.message);
};