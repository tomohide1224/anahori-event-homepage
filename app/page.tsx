import { diggingEvent } from "@/data/event";

const overviewItems = [
  { label: "開催日", value: diggingEvent.date },
  { label: "時間", value: diggingEvent.time },
  { label: "場所", value: diggingEvent.place },
  { label: "持ち物", value: "スコップ・飲みもの・汚れてもよい服装" }
];

const programItems = [
  {
    title: "あなほり",
    lead: "地面の下には、なにがある？",
    text: "スコップで土を掘って、石ころ、みみず、化石みたいなもの、なぞのものを探します。",
    icon: "⛏️",
    tone: "from-[#f4b45f] to-[#8b4f24]"
  },
  {
    title: "金属探知機",
    lead: "ピピッと鳴ったら、そこが冒険ポイント。",
    text: "金属探知機を使って、地面の下にかくれた反応を探します。何が出るかは掘ってからのお楽しみ。",
    icon: "🔎",
    tone: "from-[#75c7f0] to-[#28709a]"
  },
  {
    title: "ダウジング",
    lead: "L字ロッドで、見えない反応を探す。",
    text: "2本のL字ロッドを持ってゆっくり歩き、クロスしたり開いたりする場所を探します。科学とロマンが混ざる探検です。",
    icon: "⌞⌝",
    tone: "from-[#f7d36f] to-[#b77a24]"
  },
  {
    title: "かき氷食べ放題",
    lead: "たくさん遊んだら、冷たいごほうび。",
    text: "掘って、探して、汗をかいたら、かき氷でひと休み。暑さ対策にもなる休憩タイムです。",
    icon: "🍧",
    tone: "from-[#ff9fc7] to-[#d94a79]"
  },
  {
    title: "ハンモックで休憩",
    lead: "風にゆられて、のんびり休む。",
    text: "木陰のハンモックで休憩できます。遊ぶ時間と休む時間、どちらも大切にします。",
    icon: "🌿",
    tone: "from-[#87c86b] to-[#3f7d3c]"
  }
];

const dowsingSteps = [
  {
    title: "ロッドを平行に持つ",
    text: "2本のL字ロッドを、体の前でパラレルに保ちます。力を入れすぎず、ゆっくり歩きます。"
  },
  {
    title: "クロスしたら反応スポット",
    text: "ロッドがピタッと重なったら、『そこに何かあるかも！』という合図として楽しみます。"
  },
  {
    title: "開いたら別の反応",
    text: "パッと開いたら、『ここはエネルギーいっぱいかも！』と想像して、探検を続けます。"
  }
];

const lastYearPhotos = [
  "穴掘りの様子",
  "金属探知機体験",
  "みんなで発見",
  "休憩タイム",
  "集合写真",
  "空き地の風景"
];

const faqItems = [
  { q: "申込みは必要ですか？", a: "現在調整中です。正式な募集方法は後日ご案内します。" },
  { q: "雨の日はどうなりますか？", a: "雨天時の対応は別途ご案内予定です。" },
  { q: "子どもだけでも参加できますか？", a: "小さなお子さまは保護者の方と一緒にご参加ください。" }
];

function SectionHeading({ label, title, lead, dark = false }: { label: string; title: string; lead?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={dark ? "text-xs font-black tracking-[0.24em] text-[#f7d36f]" : "text-xs font-black tracking-[0.24em] text-[#8a6a46]"}>{label}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {lead ? <p className={dark ? "mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg" : "mt-5 text-base leading-8 text-[#5f554c] sm:text-lg"}>{lead}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f4efe6] text-[#2d241d]">
      <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-black tracking-[0.24em] text-[#8a6a46]">SOTOASOBI PROJECT SETAGAYA</p>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                西太子堂から<br />地球を掘ろう。
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-[#5f554c] sm:text-xl">
                掘る、探す、感じる、休む。空き地から地面の下を想像する、まちの小さな冒険イベントです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#program" className="bg-[#2d241d] px-6 py-3 text-sm font-black text-white transition hover:bg-[#4b3a2e]">
                  当日のプログラム
                </a>
                <a href="#last-year" className="border border-[#2d241d]/25 bg-white px-6 py-3 text-sm font-black text-[#2d241d] transition hover:bg-[#f8f5ef]">
                  昨年の様子
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mx-auto max-w-[720px] overflow-hidden rounded-sm bg-white p-3 shadow-[0_24px_70px_rgba(45,36,29,.18)]">
                <img src="/hero-main.png" alt="西太子堂から地球を掘ろう" className="w-full object-contain" />
              </div>
              <p className="mt-3 text-center text-xs leading-6 text-[#8a6a46]">
                ※画像内の詳細情報は一部仮です。正式情報は本ページ内でご確認ください。
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#d8d0c4] bg-[#d8d0c4] md:grid-cols-4">
            {overviewItems.map((item) => (
              <div key={item.label} className="bg-white p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46]">{item.label}</p>
                <p className="mt-3 text-lg font-bold leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="PROGRAM"
            title="当日のプログラム"
            lead="掘るだけではなく、探知機、ダウジング、かき氷、ハンモック休憩まで。遊びながら、地面の下を想像する一日です。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programItems.map((item, index) => (
              <article key={item.title} className="overflow-hidden rounded-[1.7rem] border border-[#ddd3c4] bg-[#f8f4ec] shadow-[0_18px_50px_rgba(45,36,29,.10)]">
                <div className={`flex aspect-square items-center justify-center bg-gradient-to-br ${item.tone} text-white`}>
                  <div className="text-center">
                    <p className="text-7xl font-black leading-none sm:text-8xl">{item.icon}</p>
                    <p className="mt-4 text-sm font-black tracking-[0.22em] text-white/80">PROGRAM 0{index + 1}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold text-[#8a6a46]">{item.lead}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5f554c]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dowsing" className="bg-[#2d241d] px-5 py-20 text-[#f5f1e7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="DOWSING ROD"
            title="ダウジングロッドってなに？"
            lead="L字に曲がった2本のロッドを持って、地面のヒミツを探す“探検キット”。クロスしたり、パッと開いたりする動きを、宝探しの合図として楽しみます。"
            dark
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8">
              <p className="text-xs font-black tracking-[0.24em] text-[#f7d36f]">L-ROD IMAGE</p>
              <div className="mt-8 flex min-h-[260px] items-center justify-center rounded-[1.5rem] bg-[#f5f1e7] text-[#2d241d]">
                <div className="relative h-44 w-64">
                  <div className="absolute left-20 top-12 h-32 w-3 origin-top rotate-[-34deg] rounded-full bg-[#c79a3a]" />
                  <div className="absolute left-[83px] top-12 h-3 w-28 rotate-[-34deg] rounded-full bg-[#c79a3a]" />
                  <div className="absolute right-20 top-12 h-32 w-3 origin-top rotate-[34deg] rounded-full bg-[#c79a3a]" />
                  <div className="absolute right-[83px] top-12 h-3 w-28 rotate-[34deg] rounded-full bg-[#c79a3a]" />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-black tracking-[0.18em] text-[#8a6a46]">L字ロッド</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {dowsingSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-white/15 bg-white/8 p-6">
                  <p className="text-xs font-black tracking-[0.22em] text-[#f7d36f]">STEP 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[#d5cec6]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#d5cec6]">
            ※ダウジングは、正解を当てる実験というより、想像力と冒険心を使って楽しむ探検あそびとして実施します。
          </p>
        </div>
      </section>

      <section id="last-year" className="bg-[#f4efe6] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="LAST YEAR"
            title="昨年の様子"
            lead="昨年の写真や動画をここに掲載します。実際の雰囲気が伝わると、はじめて参加する方にも安心してもらえます。"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lastYearPhotos.map((label, index) => (
              <div key={label} className="flex aspect-[4/3] items-center justify-center rounded-[1.4rem] border border-[#d8d0c4] bg-white text-center shadow-[0_12px_36px_rgba(45,36,29,.08)]">
                <div>
                  <p className="text-3xl">📷</p>
                  <p className="mt-3 text-sm font-black tracking-[0.12em] text-[#8a6a46]">PHOTO 0{index + 1}</p>
                  <p className="mt-1 font-bold text-[#5f554c]">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-[#8a6a46]">MOVIE</p>
              <h3 className="mt-3 text-3xl font-black">昨年の動画</h3>
              <p className="mt-4 text-base leading-8 text-[#5f554c]">
                動画URLが決まったら、ここに埋め込みます。穴掘りの様子、発見した瞬間、休憩の雰囲気などを見せる場所です。
              </p>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-[1.4rem] bg-[#2d241d] text-center text-white shadow-[0_18px_50px_rgba(45,36,29,.16)]">
              <div>
                <p className="text-5xl">▶</p>
                <p className="mt-4 text-sm font-black tracking-[0.18em] text-[#f7d36f]">VIDEO PLACEHOLDER</p>
                <p className="mt-2 text-sm text-[#d5cec6]">YouTube / 動画埋め込み予定</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="bg-[#ebe4d8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="ACCESS" title="アクセス" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-white p-7">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46]">集合場所（仮）</p>
              <h3 className="mt-4 text-2xl font-black">西太子堂駅 周辺</h3>
              <p className="mt-5 text-base leading-8 text-[#5f554c]">
                現在、正式な開催場所を調整中です。仮の表示として、西太子堂駅周辺を掲載しています。
              </p>
            </div>
            <div className="overflow-hidden bg-white">
              <iframe title="西太子堂駅" src="https://www.google.com/maps?q=西太子堂駅&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading label="FAQ" title="よくある質問" />
        <div className="mt-10 divide-y divide-[#d8d0c4] border-y border-[#d8d0c4]">
          {faqItems.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                {item.q}
                <span className="text-[#8a6a46] transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f554c]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[#2d241d] px-5 py-14 text-[#f5f1e7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[0.24em] text-[#f7d36f]">SOTOASOBI PROJECT</p>
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
