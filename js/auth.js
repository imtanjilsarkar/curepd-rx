import { auth, googleProvider, db, sendPasswordResetEmail } from './firebase-init.js';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Helper: create doctor profile in Firestore
async function ensureDoctorProfile(user, additionalData = {}) {
    const userDocRef = doc(db, "doctors", user.uid);
    const docSnap = await getDoc(userDocRef);
    if (!docSnap.exists()) {
        await setDoc(userDocRef, {
            email: user.email,
            name: additionalData.name || user.displayName || user.email.split('@')[0],
            clinic: additionalData.clinic || "Your Clinic Name",
            registration: additionalData.registration || "BMDC Reg Number",
            photoURL: user.photoURL || null,
            createdAt: new Date()
        });
    }
}

// LOGIN (email/password)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await ensureDoctorProfile(userCredential.user);
            window.location.href = "dashboard.html";
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    });
}

// GOOGLE SIGN-IN
const googleBtn = document.getElementById('googleSignInBtn');
if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await ensureDoctorProfile(result.user);
            window.location.href = "dashboard.html";
        } catch (error) {
            alert("Google sign-in failed: " + error.message);
        }
    });
}

// SIGNUP (if you have a signup page)
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const clinic = document.getElementById('clinic').value;
        const registration = document.getElementById('registration').value;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await ensureDoctorProfile(userCredential.user, { name, clinic, registration });
            await sendEmailVerification(auth.currentUser);
            alert("Account created! Please verify your email before logging in.");
            window.location.href = "index.html";
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    });
}

// FORGOT PASSWORD (if you add a modal or page)
const forgotPasswordLink = document.getElementById('forgotPassword');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = prompt("Enter your email address to reset password:");
        if (email) {
            try {
                await sendPasswordResetEmail(auth, email);
                alert("Password reset email sent! Check your inbox.");
            } catch (error) {
                alert("Error: " + error.message);
            }
        }
    });
}