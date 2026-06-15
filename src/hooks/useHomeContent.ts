import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export function useHomeContent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const ref = doc(db, "home", "homeContent");
        const snap = await getDoc(ref);
        if (snap.exists()) setData(snap.data());
      } catch {
        /* fall back to defaults */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
}
