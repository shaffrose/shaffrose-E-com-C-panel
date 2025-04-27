

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJ7QTkexGd6jNJvJHsl2Mw7iGcHVhwZAw",
    authDomain: "shaffrose-c-panel.firebaseapp.com",
    projectId: "shaffrose-c-panel",
    storageBucket: "shaffrose-c-panel.firebasestorage.app",
    messagingSenderId: "404610535834",
    appId: "1:404610535834:web:c79f6ca03e683aaa3aea23"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();


  const googleLogin = document.getElementByIdlementedById("login");
  googleLogin.addEventListener("click", function(){
   alert(5)
  })