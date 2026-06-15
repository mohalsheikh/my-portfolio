import { useEffect, useState } from "react";
import { FiSearch, FiMail, FiInbox } from "react-icons/fi";
import { getContactMessages } from "../services/firebaseService";
import { Timestamp } from "firebase/firestore";
import { Eyebrow } from "../components/Section";

type Msg = { id: string; name?: string; email?: string; message?: string; timestamp?: Timestamp };

export default function AdminMessages() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = (await getContactMessages()) as Msg[];
        setMessages(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = messages.filter((m) => {
    const q = term.toLowerCase();
    return (
      (m.name || "").toLowerCase().includes(q) ||
      (m.email || "").toLowerCase().includes(q) ||
      (m.message || "").toLowerCase().includes(q)
    );
  });

  const fmt = (t?: Timestamp) =>
    t ? t.toDate().toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—";

  return (
    <div className="px-5 sm:px-8 pt-36 pb-28">
      <div className="mx-auto max-w-4xl">
        <Eyebrow index="·" label="Admin" />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-3xl font-bold text-chrome sm:text-5xl">Inbox</h1>
          <span className="font-mono text-sm text-mist">{messages.length} messages</span>
        </div>

        <div className="relative mt-8">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-mist" />
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search by name, email, or content"
            className="w-full rounded-xl border border-line bg-panel py-3.5 pl-11 pr-4 text-chrome placeholder-mist/40 focus:border-violetx focus:outline-none"
          />
        </div>

        <div className="mt-8 space-y-3">
          {loading ? (
            <div className="grid place-items-center rounded-2xl border border-line bg-panel py-20 text-mist">
              Loading messages…
            </div>
          ) : filtered.length === 0 ? (
            <div className="grid place-items-center gap-3 rounded-2xl border border-line bg-panel py-20 text-mist">
              <FiInbox className="h-8 w-8" />
              No messages yet.
            </div>
          ) : (
            filtered.map((m) => (
              <div key={m.id} className="rounded-2xl border border-line bg-panel p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-semibold text-chrome">{m.name || "Anonymous"}</h3>
                  <span className="font-mono text-xs text-mist">{fmt(m.timestamp)}</span>
                </div>
                <a
                  href={`mailto:${m.email}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-violetx hover:underline"
                >
                  <FiMail className="h-3.5 w-3.5" /> {m.email}
                </a>
                <p className="mt-3 leading-relaxed text-mist">{m.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
