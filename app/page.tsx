import { diggingEvent } from "@/data/event";

const highlights = [
  { label: "日にち", value: diggingEvent.date, icon: "📅" },
  { label: "時間", value: diggingEvent.time, icon: "⏰" },
  { label: "場所", value: diggingEvent.place, icon: "📍" },
  { label: "住所", value: diggingEvent.address, icon: "🗺️" }
];

const adventureItems = [
  { title: "スコップで掘る", text: "土を掘って、地球の中をのぞいてみよう。", icon: "⛏️" },
  { title: "金属探知機で探す", text: "反応が鳴ったら、そこには何かが眠っているかも。", icon: "🔎" },
  { title: "見つけて観察する", text: "みみず、石ころ、化石っぽいもの、謎のもの。", icon: "🪨" },
  { title: "みんなで冒険する", text: "子どもも大人も、汗をかきながら一緒に遊ぼう。", icon: "🌎" }
];

const discoveries = ["みみず", "石ころ", "化石っぽいもの", "なぞの金属", "宝もの", "地球のひみつ"];

function SectionTitle({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mb-8 text-center">
      <p className="mb-3 inline-flex rounded-full border-4 border-deepSoil bg-treasure px-5 py-2 text-sm font-black text-deepSoil shadow-sticker">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-deepSoil sm:text-5xl">{title}</h2>
      {lead ? <p className="mx-auto mt-4 max-w-2xl text-base font-bold leading-8 text-soil sm:text-lg">{lead}</p> : null}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border-4 border-deepSoil bg-white/92 p-6 shadow-card ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen bg-[#dff5ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,.95),transparent_23rem),linear-gradient(180deg,#0ea5e9_0%,#8ad7ff_46%,#fff7e3_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(27,94,32,.45),transparent_35%),linear-gradient(225deg,rgba(27,94,32,.45),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-deepSoil bg-white shadow-card">
            <div className="relative bg-deepSoil p-2">
              <img
                src="/hero-main.png"
                alt="西太子堂から地球を掘ろう！"
                className="aspect-[24/10] w-full rounded-[1.9rem] object-cover"
              />
            </div>
          </div>

          <div className="mx-auto -mt-4 grid w-[94%] gap-4 rounded-[2rem] border-4 border-deepSoil bg-paper/95 p-4 shadow-card sm:-mt-8 sm:grid-cols-3 sm:p-5">
            <div className="rounded-2xl bg-treasure px-4 py-3 text-center font-black text-deepSoil shadow-sticker">
              {diggingEvent.date}
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-center font-black text-deepSoil shadow-sticker">
              {diggingEvent.time}
            </div>
            <div className="rounded-2xl bg-grass px-4 py-3 text-center font-black text-white shadow-sticker">
              {diggingEvent.place}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#details" className="rounded-full border-4 border-deepSoil bg-sunset px-7 py-4 text-base font-black text-white shadow-sticker transition hover:-translate-y-1">
              イベント詳細を見る
            </a>
            <a href="#belongings" className="rounded-full border-4 border-deepSoil bg-treasure px-7 py-4 text-base font-black text-deepSoil shadow-sticker transition hover:-translate-y-1">
              持ち物を確認する
            </a>
          </div>
        </div>
      </section>

      <section id="details" className="relative px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="EVENT INFO" title="冒険の集合場所" lead="西太子堂の空き地を、子どもも大人も本気で遊べる冒険フィールドに変えます。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.label} className="text-center">
                <div className="mb-3 text-5xl">{item.icon}</div>
                <p className="text-sm font-black text-soil">{item.label}</p>
                <p className="mt-1 text-2xl font-black">{item.value}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-5 border-sunset bg-orange-50">
            <p className="text-center text-xl font-black text-sunset">主催：{diggingEvent.organizer}</p>
          </Card>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="ADVENTURE" title="掘る、探す、見つける！" lead="ただ穴を掘るだけじゃない。金属探知機も使いながら、何が出るかわからない一日を楽しもう。" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {adventureItems.map((item) => (
              <Card key={item.title} className="bg-white">
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="text-xl font-black text-deepSoil">{item.title}</h3>
                <p className="mt-3 font-bold leading-7 text-soil">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="soil-cut px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border-4 border-white bg-treasure px-5 py-2 text-sm font-black text-deepSoil shadow-sticker">DIGGING FIELD</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">土の中には、なにが眠ってる？</h2>
            <p className="mt-5 text-lg font-bold leading-9">
              みみず、石ころ、化石みたいなもの、もしかしたら宝もの。見つけたものを観察して、まちの空き地を地球の入口にしてみよう。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {discoveries.map((item) => (
              <span key={item} className="rounded-2xl border-4 border-white bg-treasure px-4 py-4 text-center text-lg font-black text-deepSoil shadow-sticker">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="belongings" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="BRING" title="持ち物・服装" lead="暑さ対策と、思いきり汚れても大丈夫な準備をお願いします。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diggingEvent.belongings.map((item) => (
              <Card key={item} className="bg-white text-center text-xl font-black">
                <span className="mr-2">🎒</span>{item}
              </Card>
            ))}
          </div>
          <div className="mt-6 rounded-[2rem] border-[6px] border-deepSoil bg-treasure p-6 text-center shadow-card">
            <p className="text-2xl font-black text-deepSoil">熱中症対策のため、飲み物は必ず各自でご持参ください。</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Card className="bg-green-50">
            <SectionTitle eyebrow="PROMISE" title="安全に楽しむために" />
            <ul className="space-y-3 text-lg font-bold leading-8">
              {diggingEvent.notes.map((note) => (
                <li key={note} className="flex gap-3"><span>✅</span><span>{note}</span></li>
              ))}
            </ul>
          </Card>
          <Card className="bg-white">
            <SectionTitle eyebrow="MESSAGE" title="主催者の思い" />
            <div className="space-y-4 text-lg font-bold leading-9 text-soil">
              <p>まちの中には、まだまだ子どもたちが自由に遊べる余白があります。</p>
              <p>何もないように見える空き地も、見方を変えれば冒険の入口になります。</p>
              <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって楽しむ。そんな時間を、地域のみんなでつくっていきたいと思っています。</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="PHOTO" title="写真で見る雰囲気" lead="ここは実写真に差し替える予定のエリアです。集合写真や穴掘りの様子を入れると、参加前の安心感がぐっと上がります。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["集合写真", "穴を掘っている様子", "金属探知機を使う様子", "青空と空き地"].map((label, index) => (
              <div key={label} className="flex aspect-square rotate-[-1deg] items-center justify-center rounded-[2rem] border-4 border-deepSoil bg-white/80 p-5 text-center text-xl font-black shadow-sticker even:rotate-[1deg]">
                <span>{index === 0 ? "📸" : index === 1 ? "⛏️" : index === 2 ? "🔎" : "🌤️"}<br />{label}<br /><small className="text-sm">写真差し替え枠</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="space-y-4">
            {diggingEvent.faq.map((item) => (
              <details key={item.question} className="rounded-3xl border-4 border-deepSoil bg-white/90 p-5 shadow-sticker">
                <summary className="cursor-pointer text-lg font-black">{item.question}</summary>
                <p className="mt-4 text-base font-bold leading-8 text-soil">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="soil-cut mt-10 px-5 py-12 text-center text-white">
        <p className="text-3xl font-black">{diggingEvent.title}</p>
        <p className="mt-3 text-lg font-bold">{diggingEvent.date}・{diggingEvent.time} / {diggingEvent.place}</p>
        <p className="mt-3 text-sm font-bold">主催：{diggingEvent.organizer}</p>
      </footer>
    </main>
  );
}
