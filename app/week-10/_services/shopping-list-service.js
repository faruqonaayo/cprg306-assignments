import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const q = query(
    collection(db, "users", userId, "items"),
    where("quantity", ">", 1)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, "users", "user1", "items"), item);

  console.log(docRef);
}
