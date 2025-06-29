// src/services/firebaseService.ts
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Make sure this is your initialized Firestore instance

// Save contact message
export const saveContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  return await addDoc(collection(db, 'contactMessages'), {
    ...data,
    timestamp: Timestamp.now(),
  });
};

// Get all contact messages
export const getContactMessages = async () => {
  const querySnapshot = await getDocs(collection(db, 'contactMessages'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// ✅ Save newsletter email
export const saveNewsletterEmail = async (email: string) => {
  return await addDoc(collection(db, 'newsletterSubscribers'), {
    email,
    subscribedAt: Timestamp.now(),
  });
};
