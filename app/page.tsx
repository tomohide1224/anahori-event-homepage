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
    image: "/program-digging.png",
    lead: "地面の下には、なにがある？",
    text: "スコップで土を掘って、石ころ、みみず、化石みたいなもの、なぞのものを探します。"
  },
  {
    title: "金属探知機",
    image: "/program-metal-detector.png",
    lead: "ピピッと鳴ったら、そこが冒険ポイント。",
    text: "金属探知機を使って、地面の下にかくれた反応を探します。"
  },
  {
    title: "ダウジング",
    image: "/program-dowsing.png",
    lead: "L字ロッドで、見えない反応を探す。",
    text: "2本のL字ロッドを持ってゆっくり歩き、クロスしたり開いたりする場所を探します。"
  },
  {
    title: "かき氷食べ放題",
    image: "/program-shaved-ice.png",
    lead: "たくさん遊んだら、冷たいごほうび。",
    text: "掘って、探して、汗をかいたら、かき氷でひと休み。暑さ対策にもなる休憩タイムです。"
  },
  {
    title: "ハンモックで休憩",
    image: "/program-hammock.png",
    lead: "風にゆられて、のんびり休む。",
    text: "木陰のハンモックで休憩できます。遊ぶ時間と休む時間、どちらも大切にします。"
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

const gearItems = [
  "スコップ",
  "飲みもの",
  "タオル",
  "汚れてもよい服装",
  "帽子",
  "必要に応じて軍手"
];

const safetyItems = [
  "熱中症対策のため、飲みものは必ず各自でご持参ください。",
  "小雨決行、雨天中止です。",
  "汚れてもよい服装でご参加ください。",
  "安全のため、スタッフの案内に従ってください。",
  "小さなお子さまは保護者の方と一緒にご参加ください。"
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

function SectionHeading({ label, title, lead, dark = false, center = false }: { label: string; title: string; lead?: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={dark ? "text-xs font-black tracking-[0.24em] text-[#f7d36f]" : "text-xs font-black tracking-[0.24em] text-[#8a6a46]"}>{label}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {lead ? <p className={dark ? "mt-5 text-base leading-8 text-[#f0e6d5] sm:text-lg" : "mt-5 text-base leading-8 text-[#5f554c] sm:text-lg"}>{lead}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f4efe6] text-[#2d241d]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#78d7ff_0%,#f7d26a_58%,#8b4f24_100%)] px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-4 w-fit rounded-lg border-2 border-[#4b2a14] bg-[#8b4f24] px-4 py-2 text-sm font-black text-white shadow-[4px_4px_0_rgba(0,0,0,.28)]">
            掘りたい人、集まれ！
          </div>

          <div className="mx-auto max-w-[760px] overflow-hidden rounded-[2rem] border-[6px] border-[#4b2a14] bg-white p-2 shadow-[0_24px_70px_rgba(45,36,29,.22)]">
            <img src="/hero-main.png" alt="西太子堂から地球を掘ろう" className="w-full object-contain" />
          </div>

          <div className="mx-auto mt-[-6px] grid max-w-[760px] gap-2 rounded-b-[1.5rem] border-x-[5px] border-b-[5px] border-[#4b2a14] bg-[#fff3c7] p-3 sm:grid-cols-3">
            <div className="rounded-xl bg-[#f7c84b] px-4 py-3 text-center font-black shadow-[0_5px_0_rgba(75,42,20,.25)]">{diggingEvent.date}</div>
            <div className="rounded-xl bg-white px-4 py-3 text-center font-black shadow-[0_5px_0_rgba(75,42,20,.18)]">{diggingEvent.time}</div>
            <div className="rounded-xl bg-[#61b95c] px-4 py-3 text-center font-black text-white shadow-[0_5px_0_rgba(75,42,20,.25)]">{diggingEvent.place}</div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#program" className="rounded-full border-4 border-[#4b2a14] bg-[#ff6f32] px-6 py-3 text-sm font-black text-white shadow-[5px_5px_0_rgba(75,42,20,.25)]">
              当日のプログラム
            </a>
            <a href="#gear" className="rounded-full border-4 border-[#4b2a14] bg-[#f7c84b] px-6 py-3 text-sm font-black text-[#2d241d] shadow-[5px_5px_0_rgba(75,42,20,.25)]">
              探検準備をする
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f1d18a] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="ADVENTURE MAP" title="冒険マップ" lead="西太子堂の空き地を舞台に、みんなで地面の下を想像する冒険に出ます。" center />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {overviewItems.map((item) => (
              <div key={item.label} className="rounded-2xl border-4 border-[#4b2a14] bg-[#fff4ce] p-5 text-center shadow-[6px_6px_0_rgba(75,42,20,.18)]">
                <p className="text-xs font-black tracking-[0.18em] text-[#8a6a46]">{item.label}</p>
                <p className="mt-3 text-lg font-black leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#8b4f24] px-5 py-20 text-[#fff3c7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="PROGRAM" title="当日のプログラム" lead="掘るだけではなく、探知機、ダウジング、かき氷、ハンモック休憩まで。遊びながら、地面の下を想像する一日です。" dark center />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programItems.map((item, index) => (
              <article key={item.title} className="overflow-hidden rounded-[1.7rem] border-4 border-[#4b2a14] bg-[#fff4ce] text-[#2d241d] shadow-[8px_8px_0_rgba(75,42,20,.28)]">
                <div className="aspect-square overflow-hidden bg-[#2d241d]/10">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black tracking-[0.2em] text-[#8a6a46]">PROGRAM 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-black text-[#8a6a46]">{item.lead}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5f554c]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dowsing" className="bg-[#f1d18a] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="DOWSING ROD" title="ダウジングロッドってなに？" lead="L字に曲がった2本のロッドを持って、地面のヒミツを探す“探検キット”。クロスしたり、パッと開いたりする動きを、宝探しの合図として楽しみます。" center />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff4ce] p-8 shadow-[8px_8px_0_rgba(75,42,20,.18)]">
              <p className="text-xs font-black tracking-[0.24em] text-[#8a6a46]">L-ROD IMAGE</p>
              <div className="mt-8 flex min-h-[260px] items-center justify-center rounded-[1.5rem] bg-white text-[#2d241d]">
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
                <div key={step.title} className="rounded-[1.5rem] border-4 border-[#4b2a14] bg-[#fff4ce] p-6 shadow-[6px_6px_0_rgba(75,42,20,.15)]">
                  <p className="text-xs font-black tracking-[0.22em] text-[#8a6a46]">STEP 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[#5f554c]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gear" className="bg-[#f8d982] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="GEAR" title="探検準備" lead="汗をかいて、土まみれになって、思いきり遊ぶ準備をしよう。" center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gearItems.map((item) => (
              <div key={item} className="rounded-2xl border-4 border-[#4b2a14] bg-[#fff4ce] px-6 py-4 text-center text-lg font-black shadow-[5px_5px_0_rgba(75,42,20,.18)]">
                🎒 {item}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] border-4 border-[#4b2a14] bg-[#ff6f32] p-5 text-center text-white shadow-[8px_8px_0_rgba(75,42,20,.22)]">
            <p className="text-2xl font-black">飲みものは必ず持ってきてね！</p>
            <p className="mt-2 text-sm font-bold">熱中症対策のため、各自でご持参ください。</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f1d18a] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff4ce] p-8 shadow-[8px_8px_0_rgba(75,42,20,.18)]">
            <SectionHeading label="PROMISE" title="安全のやくそく" />
            <ul className="mt-8 space-y-4 text-base font-bold leading-8 text-[#5f554c]">
              {safetyItems.map((item) => (
                <li key={item} className="flex gap-3"><span>✅</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border-4 border-[#4b2a14] bg-[#fff4ce] p-8 shadow-[8px_8px_0_rgba(75,42,20,.18)]">
            <SectionHeading label="MESSAGE" title="空き地を冒険の入口に" />
            <div className="mt-8 space-y-5 text-base leading-9 text-[#5f554c]">
              <p>まちの中には、まだまだ自由に遊べる余白があります。</p>
              <p>何もないように見える空き地も、見方を変えれば冒険の入口になる。</p>
              <p>子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって夢中になる。そんな時間を地域のみんなでつくっていきたいと思っています。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="last-year" className="bg-[#f8d982] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="LAST YEAR" title="昨年の様子" lead="昨年の写真や動画をここに掲載します。実際の雰囲気が伝わると、はじめて参加する方にも安心してもらえます。" center />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lastYearPhotos.map((label, index) => (
              <div key={label} className="flex aspect-[4/3] items-center justify-center rounded-[1.4rem] border-4 border-[#4b2a14] bg-[#fff4ce] text-center shadow-[6px_6px_0_rgba(75,42,20,.15)]">
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
            <div className="flex aspect-video items-center justify-center rounded-[1.4rem] border-4 border-[#4b2a14] bg-[#2d241d] text-center text-white shadow-[8px_8px_0_rgba(75,42,20,.18)]">
              <div>
                <p className="text-5xl">▶</p>
                <p className="mt-4 text-sm font-black tracking-[0.18em] text-[#f7d36f]">VIDEO PLACEHOLDER</p>
                <p className="mt-2 text-sm text-[#d5cec6]">YouTube / 動画埋め込み予定</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="bg-[#f1d18a] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="ACCESS" title="アクセス" center />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border-4 border-[#4b2a14] bg-[#fff4ce] p-7 shadow-[6px_6px_0_rgba(75,42,20,.15)]">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46]">集合場所（仮）</p>
              <h3 className="mt-4 text-2xl font-black">西太子堂駅 周辺</h3>
              <p className="mt-5 text-base leading-8 text-[#5f554c]">
                現在、正式な開催場所を調整中です。仮の表示として、西太子堂駅周辺を掲載しています。
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border-4 border-[#4b2a14] bg-white shadow-[6px_6px_0_rgba(75,42,20,.15)]">
              <iframe title="西太子堂駅" src="https://www.google.com/maps?q=西太子堂駅&output=embed" width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl bg-[#f8d982] px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading label="FAQ" title="冒険前の確認" center />
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-xl border-4 border-[#4b2a14] bg-[#fff4ce] p-5 shadow-[4px_4px_0_rgba(75,42,20,.12)]">
              <summary className="cursor-pointer text-lg font-black">{item.q}</summary>
              <p className="mt-4 text-base leading-8 text-[#5f554c]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[#8b4f24] px-5 py-12 text-center text-white sm:px-8 lg:px-10">
        <p className="text-2xl font-black sm:text-4xl">西太子堂から地球を掘ろう！</p>
        <p className="mt-3 text-sm font-bold">{diggingEvent.date} / {diggingEvent.time} / {diggingEvent.place}</p>
        <p className="mt-2 text-sm font-bold">主催：{diggingEvent.organizer}</p>
      </footer>
    </main>
  );
}
