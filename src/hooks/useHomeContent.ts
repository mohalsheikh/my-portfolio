import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

type HomeContent = {
  name?: string;
};

export function useHomeContent() {
  const [data, setData] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const ref = doc(db, "home", "homeContent");
        const snap = await getDoc(ref);
        if (snap.exists()) setData(snap.data() as HomeContent);
      } catch {
        /* fall back to defaults */
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
}
