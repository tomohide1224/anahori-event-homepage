import { diggingEvent } from "@/data/event";

const programItems = [
  {
    title: "あなほり",
    text: "スコップで土を掘って、地面の下にあるものを探します。何が出るかは、掘ってからのお楽しみ。"
  },
  {
    title: "金属探知機",
    text: "金属探知機の反応を頼りに、地面の下の気配を探します。ピピッと鳴ったらチャンス。"
  },
  {
    title: "ダウジング",
    text: "L字ロッドを持って、目に見えない反応を探します。科学とロマンが混ざる、ちょっと不思議な探検です。"
  },
  {
    title: "かき氷食べ放題",
    text: "たくさん掘って、たくさん遊んだら、冷たいかき氷でひと休み。"
  },
  {
    title: "ハンモックで休憩",
    text: "木陰のハンモックで、風にゆられながらのんびり休憩できます。"
  }
];

const essentials = [
  ["開催日", diggingEvent.date],
  ["時間", diggingEvent.time],
  ["場所", diggingEvent.place],
  ["持ち物", "スコップ・飲みもの・汚れてもよい服装"]
];

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={light ? "text-xs font-black tracking-[0.28em] text-[#f7d36f]" : "text-xs font-black tracking-[0.28em] text-[#8a6a46]"}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f4efe6] text-[#2d241d]">
      <section className="px-5 pb-14 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Label>SOTOASOBI PROJECT SETAGAYA</Label>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                西太子堂から<br />地球を掘ろう。
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-[#5f554c] sm:text-xl">
                掘る、探す、感じる、休む。空き地から地中へ潜っていくような、
                まちの小さな冒険イベントです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#program" className="bg-[#2d241d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4b3a2e]">
                  当日のプログラム
                </a>
                <a href="#underground" className="border border-[#2d241d]/25 bg-white px-6 py-3 text-sm font-bold text-[#2d241d] transition hover:bg-[#f8f5ef]">
                  地中へ潜る
                </a>
              </div>
            </div>

            <div>
              <div className="mx-auto max-w-[680px] overflow-hidden bg-white p-3 shadow-[0_24px_70px_rgba(45,36,29,.18)]">
                <img src="/hero-main.png" alt="西太子堂から地球を掘ろう" className="w-full object-contain" />
              </div>
              <p className="mt-3 text-center text-xs leading-6 text-[#8a6a46]">
                ※画像内の詳細情報は一部仮です。正式情報は本ページ内でご確認ください。
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#d8d0c4] bg-[#d8d0c4] md:grid-cols-4">
            {essentials.map(([label, value]) => (
              <div key={label} className="bg-white p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46]">{label}</p>
                <p className="mt-3 text-lg font-bold leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Label>PROGRAM</Label>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">当日のプログラム</h2>
            <p className="mt-5 text-base leading-8 text-[#5f554c] sm:text-lg">
              掘るだけではなく、探知機やダウジング、かき氷、ハンモック休憩まで。遊びながら、地面の下を想像する一日にします。
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {programItems.map((item, index) => (
              <article key={item.title} className="border border-[#ddd3c4] bg-[#f8f4ec] p-5">
                <p className="text-xs font-black tracking-[0.2em] text-[#8a6a46]">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[#5f554c]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="underground" className="relative min-h-[260vh] overflow-hidden bg-[#110e0b] text-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src="/underground-bg.png"
            alt="地中へ潜っていく冒険の背景"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,11,.18)_0%,rgba(17,14,11,.08)_22%,rgba(17,14,11,.28)_55%,rgba(17,14,11,.55)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f4efe6] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#110e0b] to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto flex min-h-[260vh] max-w-5xl flex-col justify-between px-5 py-[18vh] text-center sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl rounded-2xl bg-[#110e0b]/55 px-6 py-8 backdrop-blur-sm">
              <Label light>SCROLL DOWN</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">地面の下へ、潜っていく。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                土の断面、石ころ、根っこ、結晶。スクロールするほど、いつもの空き地が別世界に変わっていきます。
              </p>
            </div>

            <div className="mx-auto max-w-2xl rounded-2xl bg-[#110e0b]/52 px-6 py-8 backdrop-blur-sm">
              <Label light>UNDERGROUND WORLD</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">何が出るかは、わからない。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                みみず、石ころ、化石みたいなもの、宝もの。見つけたものが、その日の物語になります。
              </p>
            </div>

            <div className="mx-auto max-w-2xl rounded-2xl bg-[#110e0b]/55 px-6 py-8 backdrop-blur-sm">
              <Label light>MEET THE UNDERGROUND PEOPLE</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">最後は、地底人に会いにいく。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                ほんとうに会えるかは、掘ってみなきゃわからない。そんな想像まで含めて、子どもも大人も一緒に楽しむイベントです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2d241d] px-5 py-20 text-[#f5f1e7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Label light>MESSAGE</Label>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">子どもも、大人も、本気で土を掘る。</h2>
            </div>
            <div className="space-y-6 text-base leading-9 text-[#d5cec6] sm:text-lg">
              <p>まちの中には、まだまだ自由に遊べる余白があります。</p>
              <p>何もないように見える空き地も、見方を変えれば冒険の入口になる。</p>
              <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって夢中になる。そんな時間を地域のみんなでつくっていきたいと思っています。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="bg-[#ebe4d8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Label>ACCESS</Label>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">アクセス</h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-white p-7">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46]">集合場所（仮）</p>
              <h3 className="mt-4 text-2xl font-black">西太子堂駅 周辺</h3>
              <p className="mt-5 text-base leading-8 text-[#5f554c]">現在、正式な開催場所を調整中です。仮の表示として、西太子堂駅周辺を掲載しています。</p>
            </div>
            <div className="overflow-hidden bg-white">
              <iframe title="西太子堂駅" src="https://www.google.com/maps?q=西太子堂駅&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d241d] px-5 py-14 text-[#f5f1e7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Label light>SOTOASOBI PROJECT</Label>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">西太子堂から地球を掘ろう。</h2>
          <div className="mt-8 grid gap-3 text-base text-[#d5cec6] sm:grid-cols-2">
            <p>{diggingEvent.date} / {diggingEvent.time}</p>
            <p>{diggingEvent.place}</p>
            <p>主催：{diggingEvent.organizer}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
