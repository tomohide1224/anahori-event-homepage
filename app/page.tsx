import { diggingEvent } from "@/data/event";

const essentials = [
  ["日時", `${diggingEvent.date} ${diggingEvent.time}`],
  ["場所", `${diggingEvent.place}（${diggingEvent.address}）`],
  ["持ち物", "スコップ・飲みもの・タオル・汚れてもよい服装"],
  ["主催", diggingEvent.organizer]
];

const experiences = [
  {
    title: "土を掘る",
    text: "空き地の土を、自分の手で掘ってみる。深くなるほど、いつものまちが少し違って見えてくる。"
  },
  {
    title: "探知機で探す",
    text: "金属探知機の反応を頼りに、地面の下の気配を探す。何があるかは、掘るまでわからない。"
  },
  {
    title: "見つけて観察する",
    text: "みみず、石ころ、化石みたいなもの、なぞのもの。見つけたものをみんなで見せ合う。"
  }
];

const notes = [
  "熱中症対策のため、飲み物は必ず各自でご持参ください。",
  "小雨決行、雨天中止です。",
  "汚れてもよい服装でご参加ください。",
  "安全のため、スタッフの案内に従ってください。",
  "小さなお子さまは保護者の方と一緒にご参加ください。"
];

function Section({ id, kicker, title, children, dark = false }: { id?: string; kicker: string; title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={dark ? "bg-[#2f1c10] px-5 py-20 text-[#fff2c6]" : "px-5 py-20 text-[#352012]"}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className={dark ? "mb-3 text-sm font-black tracking-[.25em] text-[#e6b84a]" : "mb-3 text-sm font-black tracking-[.25em] text-[#8b4f24]"}>{kicker}</p>
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#ead08f] text-[#352012]">
      <section className="relative min-h-screen overflow-hidden bg-[#111]">
        <img
          src="/hero-main.png"
          alt="西太子堂から地球を掘ろう！"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,13,5,.82)_0%,rgba(24,13,5,.50)_42%,rgba(24,13,5,.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#ead08f] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-10 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-block border-y-4 border-[#e6b84a] py-2 text-base font-black tracking-[.22em] text-[#ffe38b] sm:text-xl">
              掘りたい人、集まれ！
            </p>
            <h1 className="text-6xl font-black leading-[.96] tracking-[-.04em] sm:text-8xl lg:text-9xl">
              西太子堂から<br />地球を掘ろう！
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-9 text-[#fff2c6] sm:text-2xl">
              金属探知機でも宝物をさがせ。何が出るかは、掘ってみなきゃわからない。
            </p>
          </div>

          <div className="mt-10 grid max-w-5xl gap-3 sm:grid-cols-3">
            <a href="#details" className="bg-[#e6b84a] px-6 py-4 text-center text-lg font-black text-[#2f1c10] shadow-[8px_8px_0_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              詳細を見る
            </a>
            <a href="#story" className="bg-[#fff2c6] px-6 py-4 text-center text-lg font-black text-[#2f1c10] shadow-[8px_8px_0_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              どんな冒険？
            </a>
            <a href="#prepare" className="bg-[#cf5b2b] px-6 py-4 text-center text-lg font-black text-white shadow-[8px_8px_0_rgba(0,0,0,.35)] transition hover:-translate-y-1">
              持ち物を確認
            </a>
          </div>
        </div>
      </section>

      <Section id="details" kicker="EVENT DETAILS" title="まず、これだけ見れば大丈夫。">
        <div className="grid gap-4 md:grid-cols-2">
          {essentials.map(([label, value]) => (
            <div key={label} className="border-4 border-[#352012] bg-[#fff4ce] p-6 shadow-[10px_10px_0_rgba(53,32,18,.18)]">
              <p className="mb-2 text-sm font-black tracking-[.2em] text-[#8b4f24]">{label}</p>
              <p className="text-2xl font-black leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="story" kicker="THE ADVENTURE" title="ただの穴掘りじゃない。" dark>
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <article key={item.title} className="border-4 border-[#fff2c6] bg-[#4b2a14] p-7 shadow-[12px_12px_0_rgba(0,0,0,.32)]">
              <p className="mb-8 text-7xl font-black text-[#e6b84a]">0{index + 1}</p>
              <h3 className="mb-4 text-3xl font-black text-white">{item.title}</h3>
              <p className="text-lg font-bold leading-8 text-[#fff2c6]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden px-5 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_18rem),linear-gradient(180deg,#ead08f,#c28a45)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black tracking-[.25em] text-[#6a3a18]">WHY WE DIG</p>
            <h2 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">空き地は、<br />冒険の入口になる。</h2>
          </div>
          <div className="space-y-5 border-4 border-[#352012] bg-[#fff4ce] p-7 text-xl font-bold leading-10 shadow-[12px_12px_0_rgba(53,32,18,.22)]">
            <p>普段は何もないように見える場所でも、子どもたちにとっては地球とつながる入口になる。</p>
            <p>大人が用意しすぎるのではなく、「何が出るかわからない」ことを楽しむ。</p>
            <p>土を掘るというシンプルな行為から、まち・自然・仲間・発見がつながっていく。</p>
          </div>
        </div>
      </section>

      <Section id="prepare" kicker="PREPARE" title="探検の準備。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diggingEvent.belongings.map((item) => (
            <div key={item} className="border-4 border-[#352012] bg-[#fff4ce] px-6 py-5 text-2xl font-black shadow-[8px_8px_0_rgba(53,32,18,.18)]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 border-4 border-[#352012] bg-[#cf5b2b] p-7 text-white shadow-[10px_10px_0_rgba(53,32,18,.25)]">
          <p className="text-3xl font-black leading-tight">飲みものは必ず持参してください。</p>
          <p className="mt-3 text-lg font-bold">6月開催の屋外イベントです。熱中症対策をお願いします。</p>
        </div>
      </Section>

      <Section kicker="SAFETY" title="安全に楽しむために。" dark>
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <div key={note} className="border-4 border-[#fff2c6] bg-[#4b2a14] p-5 text-lg font-bold leading-8 shadow-[8px_8px_0_rgba(0,0,0,.28)]">
              {note}
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="FAQ" title="冒険前の確認。">
        <div className="space-y-4">
          {diggingEvent.faq.map((item) => (
            <details key={item.question} className="border-4 border-[#352012] bg-[#fff4ce] p-6 shadow-[8px_8px_0_rgba(53,32,18,.16)]">
              <summary className="cursor-pointer text-xl font-black">{item.question}</summary>
              <p className="mt-4 text-lg font-bold leading-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="bg-[#2f1c10] px-5 py-14 text-center text-[#fff2c6]">
        <p className="text-4xl font-black tracking-tight sm:text-6xl">{diggingEvent.title}</p>
        <p className="mt-5 text-xl font-bold">{diggingEvent.date}・{diggingEvent.time} / {diggingEvent.place}</p>
        <p className="mt-3 font-bold">主催：{diggingEvent.organizer}</p>
      </footer>
    </main>
  );
}
