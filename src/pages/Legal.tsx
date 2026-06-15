import { Eyebrow } from "../components/Section";

export function Privacy() {
  return <LegalShell title="Privacy Policy" eyebrow="Legal">
    <p>This portfolio collects only what you choose to send: your name, email, and message via the contact form, or your email if you join the newsletter. That data is stored securely in Firebase and used solely to reply to you. It is never sold or shared.</p>
    <p>You can request deletion of your data at any time by emailing moalsheikh2004@gmail.com.</p>
  </LegalShell>;
}

export function Terms() {
  return <LegalShell title="Terms of Use" eyebrow="Legal">
    <p>This site is a personal portfolio. Project names, descriptions, and trademarks belong to their respective owners. Content here is provided as-is for informational purposes.</p>
    <p>Feel free to reference my work — a link back is always appreciated.</p>
  </LegalShell>;
}

function LegalShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="px-5 sm:px-8 pt-36 pb-28">
      <div className="mx-auto max-w-2xl">
        <Eyebrow index="·" label={eyebrow} />
        <h1 className="font-display text-3xl font-bold text-chrome sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-mist">{children}</div>
      </div>
    </div>
  );
}
