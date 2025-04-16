import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export function useHomeContent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const ref = doc(db, "home", "homeContent");
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) setData(snapshot.data());
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading };
}
