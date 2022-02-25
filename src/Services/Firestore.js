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
