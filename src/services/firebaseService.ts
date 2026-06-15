import { collection, addDoc, Timestamp, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const saveContactMessage = async (data: { name: string; email: string; message: string }) => {
  return await addDoc(collection(db, "contactMessages"), { ...data, timestamp: Timestamp.now() });
};

export const getContactMessages = async () => {
  const q = query(collection(db, "contactMessages"), orderBy("timestamp", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const saveNewsletterEmail = async (email: string) => {
  return await addDoc(collection(db, "newsletterSubscribers"), { email, subscribedAt: Timestamp.now() });
};
