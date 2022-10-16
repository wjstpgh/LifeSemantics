import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXm3RYXA0APe9JpnHtBZFoUi721PM_zdo",
  authDomain: "map-hospital-db.firebaseapp.com",
  projectId: "map-hospital-db",
  storageBucket: "map-hospital-db.appspot.com",
  messagingSenderId: "1058443734680",
  appId: "1:1058443734680:web:ffc1d6d665ad13338deaed"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addIdx = (arr) => {
  let cnt = 0;

  const newArr = arr.reduce((acc, i) => {
    acc[cnt] = ({ id: cnt, ...i });
    cnt += 1;
    return acc
  }, {});

  return newArr;
}

export const addHospitalData = async (collectionKey, objectToAdd) => {
  const obj = addIdx(objectToAdd);
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  const docRef = doc(collectionRef, 'hospital');
  batch.set(docRef, obj);

  await batch.commit();
  console.log('db success');
}