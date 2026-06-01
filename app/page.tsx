import { diggingEvent } from "@/data/event";

const overviewItems = [
  { label: "開催日", value: diggingEvent.date },
  { label: "時間", value: diggingEvent.time },
  { label: "場所", value: diggingEvent.place },
  { label: "持ち物", value: "スコップ・飲みもの・汚れてもよい服装" }
];

const experienceItems = [
  {
    title: "穴を掘る",
    text: "空き地の土を、自分の手で掘ってみる。掘るほどに、いつものまちが少し違って見えてくる。"
  },
  {
    title: "探知機で探す",
    text: "金属探知機の反応を頼りに、地面の下にある何かを探す。何が出るかは、掘ってみるまでわからない。"
  },
  {
    title: "見つけて観察する",
    text: "石ころ、みみず、化石みたいなもの、なぞの金属。見つけたものを、みんなで見せ合う。"
  }
];

const faqItems = [
  { q: "申込みは必要ですか？", a: "現在調整中です。正式な募集方法は後日ご案内します。" },
  { q: "雨の日はどうなりますか？", a: "雨天時の対応は別途ご案内予定です。" },
  { q: "子どもだけでも参加できますか？", a: "小さなお子さまは保護者の方と一緒にご参加ください。" }
];

function SectionHeading({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold tracking-[0.24em] text-[#8a6a46] uppercase">{label}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {lead ? <p className="mt-5 text-base leading-8 text-[#5f554c] sm:text-lg">{lead}</p> : null}
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
              <p className="text-xs font-bold tracking-[0.24em] text-[#8a6a46] uppercase">
                SOTOASOBI PROJECT SETAGAYA
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                西太子堂から<br />
                地球を掘ろう。
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-9 text-[#5f554c] sm:text-xl">
                金属探知機でも宝物をさがせ。何が出るかは、掘ってみなきゃわからない。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#overview"
                  className="bg-[#2d241d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4b3a2e]"
                >
                  イベント概要を見る
                </a>
                <a
                  href="#access"
                  className="border border-[#2d241d]/25 bg-white px-6 py-3 text-sm font-bold text-[#2d241d] transition hover:bg-[#f8f5ef]"
                >
                  アクセスを見る
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mx-auto max-w-[720px] overflow-hidden rounded-sm bg-white p-3 shadow-[0_24px_70px_rgba(45,36,29,.18)]">
                <img
                  src="/hero-main.png"
                  alt="西太子堂から地球を掘ろう"
                  className="w-full object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs leading-6 text-[#8a6a46]">
                ※画像内の詳細情報は一部仮です。正式情報は本ページ内でご確認ください。
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#d8d0c4] bg-[#d8d0c4] md:grid-cols-4">
            {overviewItems.map((item) => (
              <div key={item.label} className="bg-white p-5">
                <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46] uppercase">{item.label}</p>
                <p className="mt-3 text-lg font-bold leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="overview" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          label="EVENT OVERVIEW"
          title="どんなイベント？"
          lead="西太子堂の空き地を舞台に、みんなで土を掘るイベントです。金属探知機を使った宝探しや、地面の中にあるものを観察しながら、「何が出るかわからない」時間そのものを楽しみます。"
        />
      </section>

      <section className="bg-[#2d241d] px-5 py-20 text-[#f5f1e7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.24em] text-[#f5d06c] uppercase">EXPERIENCE</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">空き地が、冒険の入口になる。</h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {experienceItems.map((item, index) => (
              <article key={item.title} className="border-t border-white/20 pt-7">
                <p className="text-xs font-bold tracking-[0.2em] text-[#f5d06c]">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-[#d5cec6]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading label="MESSAGE" title="子どもも、大人も、本気で土を掘る。" />
          <div className="space-y-6 text-base leading-9 text-[#5f554c] sm:text-lg">
            <p>まちの中には、まだまだ自由に遊べる余白があります。</p>
            <p>何もないように見える空き地も、見方を変えれば冒険の入口になる。</p>
            <p>
              子どもたちが自分の手で掘り、見つけ、驚き、大人も一緒になって夢中になる。
              そんな時間を地域のみんなでつくっていきたいと思っています。
            </p>
          </div>
        </div>
      </section>

      <section id="access" className="bg-[#ebe4d8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="ACCESS" title="アクセス" />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-white p-7">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a6a46] uppercase">集合場所（仮）</p>
              <h3 className="mt-4 text-2xl font-black">西太子堂駅 周辺</h3>
              <p className="mt-5 text-base leading-8 text-[#5f554c]">
                現在、正式な開催場所を調整中です。仮の表示として、西太子堂駅周辺を掲載しています。
              </p>
            </div>

            <div className="overflow-hidden bg-white">
              <iframe
                title="西太子堂駅"
                src="https://www.google.com/maps?q=西太子堂駅&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
          <p className="text-xs font-bold tracking-[0.24em] text-[#f5d06c] uppercase">SOTOASOBI PROJECT</p>
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
