import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiSend, FiCheckCircle, FiCopy } from "react-icons/fi";
import { saveContactMessage } from "../services/firebaseService";
import { Eyebrow, Reveal } from "../components/Section";

type FormState = { name: string; email: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const channels = [
  { Icon: FiMail, title: "Email", sub: "moalsheikh2004@gmail.com", href: "mailto:moalsheikh2004@gmail.com", copy: "moalsheikh2004@gmail.com" },
  { Icon: FiLinkedin, title: "LinkedIn", sub: "/in/moalsheikh", href: "https://www.linkedin.com/in/moalsheikh/" },
  { Icon: FiGithub, title: "GitHub", sub: "@mohalsheikh", href: "https://github.com/mohalsheikh" },
  { Icon: FiFileText, title: "Résumé", sub: "View PDF", href: "/Mohammed_Alsheikh_Resume_04.pdf", target: "_blank" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [valid, setValid] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setValid(form.name.trim().length > 2 && EMAIL_RE.test(form.email) && form.message.trim().length > 10);
  }, [form]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSending(true);
    try {
      await saveContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      toast.custom(() => (
        <div className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 shadow-glowsm">
          <FiCheckCircle className="h-5 w-5 text-violetx" />
          <span className="text-sm text-chrome">Message sent — I'll be in touch.</span>
        </div>
      ));
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send that. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-chrome placeholder-mist/40 focus:border-violetx focus:outline-none transition-colors";

  return (
    <div className="relative px-5 sm:px-8 pt-36 pb-28">
      <Toaster position="bottom-right" toastOptions={{ className: "!bg-transparent !shadow-none !p-0" }} />
      <div className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-violetx/15 blur-[120px]" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow index="00" label="Contact" />
          <h1 className="font-display text-4xl font-extrabold leading-tight text-chrome sm:text-6xl">
            Let's talk.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist">
            Whether you're hiring, have a project in mind, or just want to connect — drop me a line.
            I read everything that comes through.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="rounded-3xl border border-line bg-panel p-7 sm:p-9">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                    Name
                  </label>
                  <input
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="First and last name"
                  />
                  <AnimatePresence>
                    {form.name.length > 0 && form.name.length < 3 && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-400"
                      >
                        At least 3 characters.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                    Email
                  </label>
                  <input
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                  <AnimatePresence>
                    {form.email.length > 0 && !EMAIL_RE.test(form.email) && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-400"
                      >
                        Enter a valid email.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`${field} resize-none`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hey Mohammed, I'd love to talk about…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!valid || sending}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-violetx py-4 font-medium text-white transition-all hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {sending ? (
                    <>
                      <span className="h-3 w-3 animate-ping rounded-full bg-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message <FiSend />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>

          {/* Channels */}
          <Reveal delay={0.1}>
            <div className="grid h-full grid-cols-2 gap-4">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.target}
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-violetx/60"
                >
                  <div className="flex items-start justify-between">
                    <c.Icon className="h-6 w-6 text-violetx" />
                    {c.copy && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText(c.copy!);
                          toast.success("Copied", { position: "bottom-right" });
                        }}
                        aria-label="Copy email"
                        className="text-mist opacity-0 transition-opacity hover:text-violetx group-hover:opacity-100"
                      >
                        <FiCopy />
                      </button>
                    )}
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display font-semibold text-chrome">{c.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-mist">{c.sub}</p>
                  </div>
                </a>
              ))}

              <div className="col-span-2 rounded-2xl border border-line bg-panel p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-mist">Based in</p>
                <p className="mt-1 font-display text-lg font-semibold text-chrome">Riverside, California 🇺🇸</p>
                <p className="mt-1 text-sm text-mist">Pacific Time · open to remote &amp; relocation</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
