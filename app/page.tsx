import { diggingEvent } from "@/data/event";

const programItems = [
  {
    title: "あなほり",
    image: "/program-digging.png",
    text: "スコップで土を掘って、地面の下にあるものを探します。何が出るかは、掘ってからのお楽しみ。"
  },
  {
    title: "金属探知機",
    image: "/program-metal-detector.png",
    text: "ピピッと鳴ったらチャンス。地面の下にかくれた反応を探します。"
  },
  {
    title: "ダウジング",
    image: "/program-dowsing.png",
    text: "L字ロッドを持って、目に見えない反応を探します。科学とロマンが混ざる探検です。"
  },
  {
    title: "かき氷食べ放題",
    image: "/program-shaved-ice.png",
    text: "たくさん掘って、たくさん遊んだら、冷たいかき氷でひと休み。"
  },
  {
    title: "ハンモックで休憩",
    image: "/program-hammock.png",
    text: "木陰のハンモックで、風にゆられながらのんびり休憩できます。"
  }
];

const essentials = [
  ["開催日", diggingEvent.date],
  ["時間", diggingEvent.time],
  ["場所", diggingEvent.place],
  ["持ち物", "スコップ・飲みもの・汚れてもよい服装"]
];

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-white/24 bg-[#130f0b]/62 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,.38)] backdrop-blur-sm sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-black tracking-[0.28em] text-[#f7d36f]">{children}</p>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <div className="fixed inset-0 z-0 bg-[#100d0a]">
        <img
          src="/underground-bg.png"
          alt="地中へ潜っていく冒険の背景"
          className="h-full w-full object-cover object-top opacity-100"
        />
      </div>
      <div className="fixed inset-0 z-[1] bg-[linear-gradient(180deg,rgba(16,13,10,.18)_0%,rgba(16,13,10,.20)_22%,rgba(16,13,10,.38)_56%,rgba(16,13,10,.62)_100%)]" />

      <div className="relative z-10">
        <section className="min-h-screen px-5 pb-20 pt-8 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Panel className="mt-[8vh]">
              <Label>SOTOASOBI PROJECT SETAGAYA</Label>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                西太子堂から<br />地球を掘ろう。
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-[#f0e6d5] sm:text-xl">
                掘る、探す、感じる、休む。空き地から地中へ潜っていくような、まちの小さな冒険イベントです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#program" className="bg-[#f7d36f] px-6 py-3 text-sm font-black text-[#1f170f] transition hover:bg-[#ffdf83]">
                  当日のプログラム
                </a>
                <a href="#journey" className="border border-white/35 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20">
                  地中へ潜る
                </a>
              </div>
            </Panel>

            <div className="mt-4 lg:mt-[8vh]">
              <div className="mx-auto max-w-[680px] overflow-hidden rounded-xl bg-white/90 p-3 shadow-[0_24px_70px_rgba(0,0,0,.35)]">
                <img src="/hero-main.png" alt="西太子堂から地球を掘ろう" className="w-full object-contain" />
              </div>
              <p className="mt-3 text-center text-xs leading-6 text-[#f5e7c8]">
                ※画像内の詳細情報は一部仮です。正式情報は本ページ内でご確認ください。
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-3 md:grid-cols-4">
            {essentials.map(([label, value]) => (
              <Panel key={label} className="p-5 sm:p-5">
                <p className="text-xs font-black tracking-[0.18em] text-[#f7d36f]">{label}</p>
                <p className="mt-3 text-lg font-black leading-relaxed">{value}</p>
              </Panel>
            ))}
          </div>
        </section>

        <section id="program" className="min-h-screen px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Panel className="max-w-3xl">
              <Label>PROGRAM</Label>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">当日のプログラム</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                掘るだけではなく、探知機やダウジング、かき氷、ハンモック休憩まで。地面の下を想像しながら、みんなで一日遊びます。
              </p>
            </Panel>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {programItems.map((item, index) => (
                <article key={item.title} className="overflow-hidden rounded-[1.4rem] border border-white/24 bg-[#130f0b]/68 text-white shadow-[0_24px_70px_rgba(0,0,0,.35)] backdrop-blur-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-[#201811]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-black tracking-[0.2em] text-[#f7d36f]">0{index + 1}</p>
                    <h3 className="mt-3 text-2xl font-black leading-tight">{item.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-7 text-[#f0e6d5]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="min-h-[170vh] px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-[46vh] text-center">
            <Panel className="mx-auto max-w-2xl">
              <Label>SCROLL DOWN</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">地面の下へ、潜っていく。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                土の断面、石ころ、根っこ、結晶。スクロールするほど、いつもの空き地が別世界に変わっていきます。
              </p>
            </Panel>

            <Panel className="mx-auto max-w-2xl">
              <Label>UNDERGROUND WORLD</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">何が出るかは、わからない。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                みみず、石ころ、化石みたいなもの、宝もの。見つけたものが、その日の物語になります。
              </p>
            </Panel>

            <Panel className="mx-auto max-w-2xl">
              <Label>MEET THE UNDERGROUND PEOPLE</Label>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">最後は、地底人に会いにいく。</h2>
              <p className="mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg">
                ほんとうに会えるかは、掘ってみなきゃわからない。そんな想像まで含めて、子どもも大人も一緒に楽しむイベントです。
              </p>
            </Panel>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Panel>
              <Label>MESSAGE</Label>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">子どもも、大人も、本気で土を掘る。</h2>
            </Panel>
            <Panel>
              <div className="space-y-6 text-base leading-9 text-[#f0e6d5] sm:text-lg">
                <p>まちの中には、まだまだ自由に遊べる余白があります。</p>
                <p>何もないように見える空き地も、見方を変えれば冒険の入口になる。</p>
                <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって夢中になる。そんな時間を地域のみんなでつくっていきたいと思っています。</p>
              </div>
            </Panel>
          </div>
        </section>

        <section id="access" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Panel className="max-w-3xl">
              <Label>ACCESS</Label>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">アクセス</h2>
            </Panel>
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Panel>
                <p className="text-xs font-black tracking-[0.18em] text-[#f7d36f]">集合場所（仮）</p>
                <h3 className="mt-4 text-2xl font-black">西太子堂駅 周辺</h3>
                <p className="mt-5 text-base leading-8 text-[#f0e6d5]">現在、正式な開催場所を調整中です。仮の表示として、西太子堂駅周辺を掲載しています。</p>
              </Panel>
              <div className="overflow-hidden rounded-2xl border border-white/18 bg-white/90 p-2 shadow-[0_30px_90px_rgba(0,0,0,.35)]">
                <iframe title="西太子堂駅" src="https://www.google.com/maps?q=西太子堂駅&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        <footer className="px-5 py-16 sm:px-8 lg:px-10">
          <Panel className="mx-auto max-w-6xl">
            <Label>SOTOASOBI PROJECT</Label>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">西太子堂から地球を掘ろう。</h2>
            <div className="mt-8 grid gap-3 text-base text-[#f0e6d5] sm:grid-cols-2">
              <p>{diggingEvent.date} / {diggingEvent.time}</p>
              <p>{diggingEvent.place}</p>
              <p>主催：{diggingEvent.organizer}</p>
            </div>
          </Panel>
        </footer>
      </div>
    </main>
  );
}
