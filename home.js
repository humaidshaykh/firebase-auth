import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
    } else {
        // User is signed out
        window.location = "index.html";
        // ...
    }
});

const logout_btn = document.querySelector("#logout_btn");
logout_btn.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Logout Successfully');
        window.location = "index.html"
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
});