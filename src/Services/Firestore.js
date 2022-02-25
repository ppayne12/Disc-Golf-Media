// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as fs from "./fsConfig";
import {
  getFirestore,
  getDocs,
  orderBy,
  collection,
  query,
} from "firebase/firestore/lite";
import { getAuth, signInAnonymously } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCXcaB6KB9QRI56cD_FWLahk1nk1K0SGvo",
//   authDomain: "discgolf-media.firebaseapp.com",
//   projectId: "discgolf-media",
//   storageBucket: "discgolf-media.appspot.com",
//   messagingSenderId: "174408656803",
//   appId: "1:174408656803:web:274b256aba3059411b1c16",
//   measurementId: "G-8S5YSLYBRS",
// };

// Initialize Firebase
const app = initializeApp(fs.firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const authenticateAnonymously = () => {
  return signInAnonymously(getAuth(app));
};

export function getTournaments() {
  const tournaments = getDocs(
    query(collection(db, "tournaments"), orderBy("startdate", "desc"))
  );
  return tournaments;
}

export function getCoverage(id) {
  const coverage = getDocs(
    query(
      collection(db, `tournaments/${id}/coverage`),
      orderBy("cardnum", "asc")
    )
  );
  return coverage;
}

export function getLinks(tournamentId, channelId) {
  const coverage = getDocs(
    query(
      collection(db, `tournaments/${tournamentId}/coverage/${channelId}/links`),
      orderBy("round", "asc")
    )
  );
  return coverage;
}
