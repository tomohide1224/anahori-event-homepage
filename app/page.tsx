import { diggingEvent } from "@/data/event";

const mapCards = [
  { label: "集合日", value: diggingEvent.date, icon: "📅", color: "bg-treasure" },
  { label: "冒険時間", value: diggingEvent.time, icon: "⏰", color: "bg-white" },
  { label: "集合場所", value: diggingEvent.place, icon: "📍", color: "bg-grass text-white" },
  { label: "住所", value: diggingEvent.address, icon: "🗺️", color: "bg-orange-100" }
];

const treasureSteps = [
  { title: "掘る", text: "スコップで土を掘って、地球の中へ近づこう。", icon: "⛏️" },
  { title: "探す", text: "金属探知機がピピッと鳴ったら、そこが冒険ポイント。", icon: "🔎" },
  { title: "見つける", text: "みみず、石ころ、化石っぽいもの、謎の金属。", icon: "💎" },
  { title: "見せ合う", text: "見つけたものをみんなで観察。大人も子どもも本気で遊ぶ。", icon: "🌎" }
];

const finds = ["みみず", "もぐら？", "化石っぽい石", "なぞの金属", "宝もの", "地球のひみつ"];

function WoodSign({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl border-4 border-[#4b2a14] bg-[#8b4f24] px-5 py-3 text-white shadow-sticker ${className}`}>
      <div className="absolute inset-x-3 top-2 h-1 rounded-full bg-white/20" />
      <div className="absolute inset-x-5 bottom-2 h-1 rounded-full bg-black/15" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function PosterTitle({ badge, title, lead }: { badge: string; title: string; lead?: string }) {
  return (
    <div className="mb-8 text-center">
      <WoodSign className="mx-auto mb-4 inline-block rotate-[-2deg] text-sm font-black tracking-widest sm:text-base">
        {badge}
      </WoodSign>
      <h2 className="adventure-outline text-4xl font-black leading-tight text-treasure sm:text-6xl">{title}</h2>
      {lead ? <p className="mx-auto mt-4 max-w-2xl text-lg font-black leading-8 text-[#5d351a]">{lead}</p> : null}
    </div>
  );
}

function PaperCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff3c7] p-6 shadow-card ring-4 ring-[#d59b42]/20 ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f3d18a] text-[#4b2a14]">
      <section className="relative min-h-screen px-4 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,.6),transparent_18rem),radial-gradient(circle_at_85%_15%,rgba(255,215,91,.45),transparent_16rem),linear-gradient(180deg,#73d5ff_0%,#f8d77b_48%,#8b4f24_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 soil-cut" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex justify-center">
            <WoodSign className="text-center text-lg font-black sm:text-2xl">掘りたい人、集まれ！</WoodSign>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-[#4b2a14] bg-[#6ccdf4] shadow-card">
            <img
              src="/hero-main.png"
              alt="西太子堂から地球を掘ろう！ 冒険ポスター"
              className="w-full object-cover sm:max-h-[72vh]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4b2a14]/90 via-[#4b2a14]/45 to-transparent px-4 pb-5 pt-20 text-center">
              <p className="mx-auto inline-block rotate-[-1deg] rounded-full border-4 border-white bg-treasure px-5 py-2 text-base font-black text-[#4b2a14] shadow-sticker sm:text-2xl">
                金属探知機でも宝物をさがせ！
              </p>
            </div>
          </div>

          <div className="mx-auto -mt-4 grid w-[94%] gap-3 rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff3c7]/95 p-4 shadow-card sm:-mt-7 sm:grid-cols-3">
            <div className="rounded-2xl border-4 border-[#4b2a14] bg-treasure px-4 py-3 text-center text-xl font-black shadow-sticker">
              {diggingEvent.date}
            </div>
            <div className="rounded-2xl border-4 border-[#4b2a14] bg-white px-4 py-3 text-center text-xl font-black shadow-sticker">
              {diggingEvent.time}
            </div>
            <div className="rounded-2xl border-4 border-[#4b2a14] bg-grass px-4 py-3 text-center text-xl font-black text-white shadow-sticker">
              {diggingEvent.place}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#map" className="rounded-full border-4 border-[#4b2a14] bg-sunset px-8 py-4 text-xl font-black text-white shadow-sticker transition hover:-translate-y-1">
              冒険マップを見る
            </a>
            <a href="#gear" className="rounded-full border-4 border-[#4b2a14] bg-treasure px-8 py-4 text-xl font-black text-[#4b2a14] shadow-sticker transition hover:-translate-y-1">
              探検準備をする
            </a>
          </div>
        </div>
      </section>

      <section id="map" className="relative px-5 py-16 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(75,42,20,.06)_25%,transparent_25%),linear-gradient(-45deg,rgba(75,42,20,.06)_25%,transparent_25%)] bg-[length:28px_28px]" />
        <div className="relative mx-auto max-w-6xl">
          <PosterTitle badge="ADVENTURE MAP" title="冒険マップ" lead="西太子堂の空き地が、この日だけは地球につながる入口になる。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mapCards.map((item) => (
              <PaperCard key={item.label} className={`${item.color} text-center`}>
                <div className="mb-2 text-5xl">{item.icon}</div>
                <p className="text-sm font-black opacity-80">{item.label}</p>
                <p className="mt-1 text-2xl font-black leading-tight">{item.value}</p>
              </PaperCard>
            ))}
          </div>
          <PaperCard className="mt-5 bg-[#fff7df] text-center">
            <p className="text-xl font-black">主催：{diggingEvent.organizer}</p>
          </PaperCard>
        </div>
      </section>

      <section className="soil-cut px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <PosterTitle badge="MISSION" title="掘る、探す、見つける！" lead="ただ穴を掘るだけじゃない。何が出るかわからないから、冒険になる。" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treasureSteps.map((step) => (
              <div key={step.title} className="rounded-[2rem] border-4 border-white bg-[#fff3c7] p-6 text-[#4b2a14] shadow-sticker">
                <div className="mb-3 text-6xl">{step.icon}</div>
                <h3 className="text-3xl font-black">{step.title}</h3>
                <p className="mt-3 text-base font-bold leading-7">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <PosterTitle badge="TREASURE BOOK" title="お宝図鑑" lead="土の中から出てくるものは、全部この日の宝もの。" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {finds.map((item, index) => (
              <div key={item} className="flex aspect-square rotate-[-2deg] items-center justify-center rounded-[2rem] border-4 border-[#4b2a14] bg-treasure p-4 text-center text-xl font-black shadow-sticker even:rotate-[2deg]">
                <span>{index === 0 ? "🪱" : index === 1 ? "🕳️" : index === 2 ? "🦴" : index === 3 ? "🔩" : index === 4 ? "💎" : "🌎"}<br />{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gear" className="relative px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <PosterTitle badge="GEAR" title="探検準備" lead="汗をかいて、土まみれになって、思いきり遊ぶ準備をしよう。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diggingEvent.belongings.map((item) => (
              <PaperCard key={item} className="bg-[#fff7df] text-center text-2xl font-black">
                <span className="mr-2">🎒</span>{item}
              </PaperCard>
            ))}
          </div>
          <div className="mt-6 rounded-[2rem] border-[6px] border-[#4b2a14] bg-sunset p-6 text-center text-white shadow-card">
            <p className="text-3xl font-black leading-tight">飲みものは必ず持ってきてね！</p>
            <p className="mt-2 text-lg font-bold">熱中症対策のため、各自でご持参ください。</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <PaperCard className="bg-[#e8ffd7]">
            <PosterTitle badge="PROMISE" title="安全のやくそく" />
            <ul className="space-y-3 text-lg font-black leading-8">
              {diggingEvent.notes.map((note) => (
                <li key={note} className="flex gap-3"><span>✅</span><span>{note}</span></li>
              ))}
            </ul>
          </PaperCard>
          <PaperCard className="bg-[#fff7df]">
            <PosterTitle badge="MESSAGE" title="空き地を冒険の入口に" />
            <div className="space-y-4 text-lg font-bold leading-9">
              <p>まちの中には、まだまだ子どもたちが自由に遊べる余白があります。</p>
              <p>何もないように見える空き地も、見方を変えれば冒険の入口になります。</p>
              <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって楽しむ。そんな時間を、地域のみんなでつくっていきたいと思っています。</p>
            </div>
          </PaperCard>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <PosterTitle badge="PHOTO QUEST" title="冒険の記録" lead="当日の写真や過去の様子を入れるエリア。熱量が伝わる写真に差し替えて育てていきます。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["集合写真", "本気で穴掘り", "金属探知機", "青空と空き地"].map((label, index) => (
              <div key={label} className="flex aspect-square rotate-[-2deg] items-center justify-center rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff3c7] p-5 text-center text-xl font-black shadow-sticker even:rotate-[2deg]">
                <span>{index === 0 ? "📸" : index === 1 ? "⛏️" : index === 2 ? "🔎" : "🌤️"}<br />{label}<br /><small className="text-sm">写真差し替え枠</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <PosterTitle badge="FAQ" title="冒険前の確認" />
          <div className="space-y-4">
            {diggingEvent.faq.map((item) => (
              <details key={item.question} className="rounded-3xl border-4 border-[#4b2a14] bg-[#fff7df] p-5 shadow-sticker">
                <summary className="cursor-pointer text-lg font-black">{item.question}</summary>
                <p className="mt-4 text-base font-bold leading-8">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="soil-cut px-5 py-14 text-center text-white">
        <p className="adventure-outline text-4xl font-black text-treasure">{diggingEvent.title}</p>
        <p className="mt-4 text-xl font-black">{diggingEvent.date}・{diggingEvent.time} / {diggingEvent.place}</p>
        <p className="mt-3 text-sm font-bold">主催：{diggingEvent.organizer}</p>
      </footer>
    </main>
  );
}
