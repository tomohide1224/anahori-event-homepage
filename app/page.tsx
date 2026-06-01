import { diggingEvent } from "@/data/event";

const highlights = [
  { label: "日にち", value: diggingEvent.date, icon: "📅" },
  { label: "時間", value: diggingEvent.time, icon: "⏰" },
  { label: "場所", value: diggingEvent.place, icon: "📍" },
  { label: "住所", value: diggingEvent.address, icon: "🗺️" }
];

const discoveries = ["みみず", "石ころ", "化石っぽいもの", "なぞの金属", "宝もの", "地球のひみつ"];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7 text-center">
      <p className="mb-2 inline-flex rounded-full bg-treasure px-4 py-1 text-sm font-black text-deepSoil shadow-sticker">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border-4 border-deepSoil bg-white/90 p-6 shadow-card ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
          <div className="relative z-10 flex-1">
            <p className="mb-4 inline-flex rotate-[-2deg] rounded-full bg-white px-5 py-2 text-sm font-black text-soil shadow-sticker ring-4 ring-treasure">
              掘りたい人、集まれ！
            </p>
            <h1 className="adventure-outline text-5xl font-black leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {diggingEvent.mainCopy}
            </h1>
            <div className="mt-6 space-y-3 text-xl font-black text-deepSoil sm:text-2xl">
              {diggingEvent.subCopies.map((copy) => (
                <p key={copy} className="inline-flex rounded-2xl bg-treasure px-4 py-2 shadow-sticker first:mr-2">
                  {copy}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#details" className="rounded-full bg-deepSoil px-6 py-4 text-base font-black text-white shadow-sticker transition hover:-translate-y-1">
                イベント詳細を見る
              </a>
              <a href="#belongings" className="rounded-full bg-sunset px-6 py-4 text-base font-black text-white shadow-sticker transition hover:-translate-y-1">
                持ち物を確認する
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] flex-1 rounded-[2.5rem] border-4 border-deepSoil bg-skyAdventure p-5 shadow-card">
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-treasure shadow-sticker" />
            <div className="absolute right-10 top-16 rounded-full bg-white px-5 py-3 text-4xl shadow-sticker">☁️</div>
            <div className="absolute bottom-0 left-0 right-0 h-36 rounded-b-[2.1rem] soil-cut" />
            <div className="absolute bottom-24 left-8 right-8 h-2 rotate-[-3deg] rounded-full bg-grass" />
            <div className="absolute bottom-28 left-12 text-7xl">🧒</div>
            <div className="absolute bottom-24 left-28 rotate-[-18deg] text-7xl">⛏️</div>
            <div className="absolute bottom-28 right-24 text-7xl">👩</div>
            <div className="absolute bottom-24 right-10 rotate-12 text-7xl">🔎</div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-8 py-3 text-center text-lg font-black text-white">
              何が出るかは、掘ってみなきゃわからない！
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="EVENT INFO" title="まずはここだけチェック！" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.label} className="text-center">
                <div className="mb-3 text-4xl">{item.icon}</div>
                <p className="text-sm font-black text-soil">{item.label}</p>
                <p className="mt-1 text-2xl font-black">{item.value}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-5 border-sunset bg-orange-50">
            <p className="text-center text-xl font-black text-sunset">
              主催：{diggingEvent.organizer}
            </p>
          </Card>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Card>
            <SectionTitle eyebrow="ABOUT" title="ただ穴を掘るだけじゃない。" />
            <div className="space-y-5 text-lg font-bold leading-9">
              <p>
                土の中には、みみず、石ころ、化石みたいなもの、もしかしたら宝ものが眠っているかもしれません。
              </p>
              <p>
                金属探知機も使いながら、子どもも大人も一緒になって、西太子堂から地球を掘ってみよう！
              </p>
              <p>
                まちの中の空き地が、この日だけは地球とつながる冒険の入口になります。
              </p>
            </div>
          </Card>
          <div className="rounded-[2rem] border-4 border-dashed border-deepSoil bg-white/70 p-6">
            <p className="mb-4 text-center text-xl font-black">出てくるかもしれないもの</p>
            <div className="grid grid-cols-2 gap-3">
              {discoveries.map((item) => (
                <span key={item} className="rounded-2xl bg-treasure px-4 py-3 text-center text-lg font-black shadow-sticker">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="FOR YOU" title="こんな人におすすめ" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diggingEvent.recommendedFor.map((item) => (
              <div key={item} className="rounded-3xl border-4 border-deepSoil bg-white/90 p-5 text-center text-lg font-black shadow-sticker">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="belongings" className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="BRING" title="持ち物・服装" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diggingEvent.belongings.map((item) => (
              <Card key={item} className="text-center text-xl font-black">
                <span className="mr-2">🎒</span>{item}
              </Card>
            ))}
          </div>
          <div className="mt-6 rounded-[2rem] border-4 border-sunset bg-treasure p-6 text-center shadow-card">
            <p className="text-2xl font-black text-deepSoil">
              熱中症対策のため、飲み物は必ず各自でご持参ください。
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Card className="bg-green-50">
            <SectionTitle eyebrow="PROMISE" title="安全に楽しむために" />
            <ul className="space-y-3 text-lg font-bold leading-8">
              {diggingEvent.notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span>✅</span><span>{note}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-white">
            <SectionTitle eyebrow="MESSAGE" title="主催者の思い" />
            <div className="space-y-4 text-lg font-bold leading-9">
              <p>まちの中には、まだまだ子どもたちが自由に遊べる余白があります。</p>
              <p>何もないように見える空き地も、見方を変えれば冒険の入口になります。</p>
              <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって楽しむ。そんな時間を、地域のみんなでつくっていきたいと思っています。</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="PHOTO" title="写真で見る雰囲気" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["集合写真", "穴を掘っている様子", "金属探知機を使う様子", "青空と空き地"].map((label, index) => (
              <div key={label} className="flex aspect-square items-center justify-center rounded-[2rem] border-4 border-deepSoil bg-white/70 p-5 text-center text-xl font-black shadow-sticker">
                <span>{index === 0 ? "📸" : index === 1 ? "⛏️" : index === 2 ? "🔎" : "🌤️"}<br />{label}<br /><small className="text-sm">写真差し替え枠</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="space-y-4">
            {diggingEvent.faq.map((item) => (
              <details key={item.question} className="rounded-3xl border-4 border-deepSoil bg-white/90 p-5 shadow-sticker">
                <summary className="cursor-pointer text-lg font-black">{item.question}</summary>
                <p className="mt-4 text-base font-bold leading-8">{item.answer}</p>
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
