import { Eyebrow, Reveal } from "../components/Section";
import Seo from "../seo/Seo";
import { PAGE_SEO } from "../seo/seo.config";
import { personSchema } from "../seo/schema";
import { FiMapPin } from "react-icons/fi";

const journey = [
  { year: "2004", place: "Tübingen, Germany", note: "Where it started.", flag: "🇩🇪" },
  { year: "2009", place: "Amman, Jordan", note: "Grew up here. Played pro soccer for Al-Wehdat SC.", flag: "🇯🇴" },
  { year: "2022", place: "California, USA", note: "Software Engineering @ California Baptist University.", flag: "🇺🇸" },
];

const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "Python", "Dart", "Swift", "C++", "JavaScript"] },
  { group: "Frontend", items: ["React", "Next.js", "Flutter", "Tailwind", "Framer Motion"] },
  { group: "Backend & Data", items: ["Node.js", "Firebase", "MongoDB", "SQL", "REST APIs"] },
  { group: "AI / ML", items: ["PyTorch", "YOLOv8", "MediaPipe", "OpenCV", "GPT-4o Vision"] },
  { group: "Tooling", items: ["Git", "AWS", "Linux / CLI", "Cloud Functions"] },
];

const values = [
  { title: "Creativity", body: "Treat constraints as a design space, not a wall.", glyph: "◇" },
  { title: "Impact", body: "Build for real people with real problems.", glyph: "◎" },
  { title: "Excellence", body: "Ship production quality, not demos.", glyph: "△" },
  { title: "Faith", body: "Stay grounded in what matters most.", glyph: "✦" },
];

const transferable = ["Leadership", "Strategy", "Resilience", "Teamwork"];

export default function AboutMe() {
  return (
    <div className="relative px-5 sm:px-8 pt-36 pb-28">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-violetx/15 blur-[120px]" />
      <div className="mx-auto max-w-5xl">
        <Seo seo={PAGE_SEO.about} jsonLd={personSchema()} />
        {/* Intro */}
        <Reveal>
          <Eyebrow index="00" label="About" />
          <h1 className="font-display text-4xl font-extrabold leading-tight text-chrome sm:text-6xl">
            Engineer first.
            <br />
            <span className="text-grad">Storyteller by background.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            I'm a Software Engineering student at CBU, a former professional soccer player, and a builder
            who's lived on three continents. That mix shows up in how I work: disciplined under pressure,
            comfortable across cultures, and obsessed with turning ambitious ideas into polished products.
          </p>
        </Reveal>

        {/* Journey timeline */}
        <section className="mt-24">
          <Reveal>
            <Eyebrow index="01" label="The Journey" />
          </Reveal>
          <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.08}>
                <div className="group flex flex-col gap-3 bg-panel px-7 py-7 transition-colors hover:bg-panel2 sm:flex-row sm:items-center sm:gap-8">
                  <span className="font-display text-2xl font-bold text-violetx sm:w-24">{j.year}</span>
                  <span className="text-2xl">{j.flag}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-chrome">{j.place}</h3>
                    <p className="text-sm text-mist">{j.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mt-24">
          <Reveal>
            <Eyebrow index="02" label="Toolkit" />
            <h2 className="font-display text-3xl font-bold text-chrome sm:text-4xl">What I build with</h2>
          </Reveal>
          <div className="mt-10 space-y-7">
            {stack.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.05}>
                <div className="flex flex-col gap-4 border-b border-line pb-7 sm:flex-row sm:items-start">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-mist sm:w-40 sm:shrink-0">
                    {s.group}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-line bg-panel px-3.5 py-2 text-sm text-chrome transition-colors hover:border-violetx hover:text-violetx"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-24">
          <Reveal>
            <Eyebrow index="03" label="What Drives Me" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-violetx/60">
                  <div className="font-display text-3xl text-violetx transition-transform group-hover:scale-110">
                    {v.glyph}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-chrome">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* From the pitch to code */}
        <section className="mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violetx/15 blur-[100px]" />
              <div className="relative grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
                <div className="flex aspect-square max-w-[220px] items-center justify-center rounded-2xl border border-line bg-ink">
                  <span className="text-7xl">⚽</span>
                </div>
                <div>
                  <Eyebrow index="04" label="Before Code" />
                  <h2 className="font-display text-2xl font-bold text-chrome sm:text-3xl">
                    From the pitch to the codebase
                  </h2>
                  <p className="mt-4 leading-relaxed text-mist">
                    In high school I played professional soccer for Al-Wehdat SC in the Jordanian Premier
                    League. Pro sport teaches you things a classroom can't — performing under pressure,
                    trusting a team, and grinding through setbacks. I bring all of that to engineering.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {transferable.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-ink px-3.5 py-1.5 text-sm text-chrome"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* location footer note */}
        <Reveal>
          <div className="mt-16 flex items-center gap-2 text-sm text-mist">
            <FiMapPin className="text-violetx" />
            Currently in Riverside, California — building, studying, and shipping.
          </div>
        </Reveal>
      </div>
    </div>
  );
}
