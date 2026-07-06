import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveContactMessage = async (data: { name: string; email: string; message: string }) => {
  return await addDoc(collection(db, "contactMessages"), { ...data, timestamp: Timestamp.now() });
};

export const saveNewsletterEmail = async (email: string) => {
  return await addDoc(collection(db, "newsletterSubscribers"), { email, subscribedAt: Timestamp.now() });
};
