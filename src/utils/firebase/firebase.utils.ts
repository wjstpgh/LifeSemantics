import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc, query, getDocs } from 'firebase/firestore';
import { HospData } from '../../store/hospdata/hospdata.types';

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

export type HospDataJson = {
  yadmNm: string;
  addr: string;
  XPos: number;
  YPos: number;
}

export type HospDataMap = {
  [id: number]: HospDataJson & { id: number };
}

export const addIdx = (arr: HospDataJson[]): HospDataMap => {
  let cnt = 0;

  const newArr = arr.reduce((acc, i) => {
    acc = ({ id: cnt, ...i });
    cnt += 1;
    return acc
  }, {});

  return newArr;
}

export const addHospitalData = async (
  collectionKey: string,
  objectToAdd: HospData[]
): Promise<void> => {
  const obj = addIdx(objectToAdd);
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  const docRef = doc(collectionRef, 'hospital');
  batch.set(docRef, obj);

  await batch.commit();
  console.log('db success');
}

export const getHospitalData = async (): Promise<HospData[]> => {
  const collectionRef = collection(db, 'hosData');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (doc) => doc.data() as HospData
  );
}