import Image from "next/image";

const supportFormUrl =
  process.env.NEXT_PUBLIC_KYODO_SUPPORT_FORM_URL || "#support";
const lineUrl = process.env.NEXT_PUBLIC_KYODO_LINE_URL || "#line";

const imagePaths = {
  current: "/images/kyodo/current-station.jpg",
  futureHero: "/images/kyodo/future-living-room.jpg",
  eventMood: "/images/kyodo/michiasobi-mood.jpg",
  detail: "/images/kyodo/detail-image.jpg",
  videoPoster: "/images/kyodo/movie-poster.jpg",
};

const features = [
  {
    title: "あそぶ",
    lead: "子どもが駅前で安心して遊べる景色をつくる。",
    text: "人工芝の上で、こま、シャボン玉、絵本、ちいさな遊び。走り回るためではなく、駅前で自然に過ごせる遊びを置きます。",
    icon: "✦",
  },
  {
    title: "くつろぐ",
    lead: "用事がなくても、少し座っていい駅前へ。",
    text: "ベンチ、ビーズクッション、ハンモック、木の家具。買い物の途中や帰り道に、コーヒー片手にひと息つける場所をつくります。",
    icon: "☕",
  },
  {
    title: "よむ",
    lead: "図書館と駅前の境界を、やわらかくする。",
    text: "経堂図書館の本や絵本ワゴン、読み聞かせベンチ。駅前で本を手に取れる体験をつくります。",
    icon: "📚",
  },
  {
    title: "つながる",
    lead: "人と人が、ふらっと出会える余白をつくる。",
    text: "商店街、学校、PTA、おやじの会、地域団体、学生、親子。駅前をきっかけに、まちの関係性を育てます。",
    icon: "○",
  },
];

const roadmap = [
  {
    phase: "Phase 0",
    date: "2026.6",
    title: "みちあそび",
    text: "経堂図書館前の歩行者空間で、まず1日、駅前を使ってみる。地域が駅前を“使ってよい場所”にする最初の実証です。",
  },
  {
    phase: "Phase 1",
    date: "2026 夏〜秋",
    title: "反復試行",
    text: "週末に数回、レイアウトや運営方法を改善しながら、担い手の輪を広げます。",
  },
  {
    phase: "Phase 2",
    date: "2026 冬〜2027 春",
    title: "社会実験",
    text: "6〜8週間の連続運営へ。図書館連携、商店街テイクアウト、QR調査、滞在時間の測定などを行います。",
  },
  {
    phase: "Phase 3",
    date: "2027〜2028",
    title: "駅前広場リビング化",
    text: "ガヤリン跡地やモビリティハブ整備と並走し、駅前広場全体を“まちのリビング”へ育てます。",
  },
];

const safetyItems = [
  "歩行者の通過幅員を確保します",
  "誘導スタッフを配置します",
  "カラーコーン等で滞在エリアを明確にします",
  "車道への飛び出し防止に配慮します",
  "すべて可動式・撤去可能な設えから始めます",
  "ごみ・喫煙・苦情・ヒヤリハットを記録し、改善します",
];

const relationItems = [
  "経堂在住",
  "経堂周辺在住",
  "経堂で働いている",
  "経堂で学んでいる",
  "経堂駅をよく使う",
  "商店街・店舗関係",
  "地域活動・学校関係",
  "その他",
];

function VisualCard({
  src,
  alt,
  label,
  fallback,
}: {
  src: string;
  alt: string;
  label: string;
  fallback: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(35,47,30,0.12)]">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#dcebd1] via-[#f5efe2] to-[#cfdbe8]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#35513b] shadow-sm">
          {label}
        </p>
      </div>
      <p className="px-5 py-4 text-sm leading-7 text-[#5d665a]">{fallback}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-[#bfd2b7] bg-white/70 px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#55724e]">
      {children}
    </p>
  );
}

export default function KyodoPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#253326]">
      <section className="relative isolate overflow-hidden bg-[#e9efe2]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={imagePaths.futureHero}
            alt="経堂駅前がまちのリビングになった未来イメージ"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16351f]/85 via-[#16351f]/55 to-[#16351f]/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6f1e7] to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              Kyodo Station Front Community Concept
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              経堂駅前を、
              <br />
              まちのリビングに。
            </h1>
            <p className="mt-6 text-xl font-bold leading-relaxed sm:text-2xl">
              交通の駅前から、暮らしの駅前へ。
              <br />
              通り過ぎる場所から、過ごせる場所へ。
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              本を読んだり、子どもが遊んだり、コーヒー片手にくつろいだり、近所の人と話したり。
              経堂駅前に、そんな“用事がなくてもいていい場所”を少しずつ育てていくプロジェクトです。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#michiasobi"
                className="rounded-full bg-[#f5c84c] px-7 py-4 text-center text-base font-black text-[#263322] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffd968]"
              >
                6/6 みちあそびを見る
              </a>
              <a
                href={supportFormUrl}
                className="rounded-full border border-white/55 bg-white/15 px-7 py-4 text-center text-base font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/25"
              >
                賛同・応援メッセージを送る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>BEFORE / AFTER</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                いまは、
                <br />
                通り過ぎる駅前。
                <br />
                これからは、
                <br />
                過ごせる駅前へ。
              </h2>
              <p className="mt-6 text-lg leading-9 text-[#566150]">
                経堂駅を出ると、すぐに車道やタクシー動線が広がります。
                高架下には大きな屋根があるのに、立ち止まる余白はまだ少ない。
              </p>
              <p className="mt-4 text-lg leading-9 text-[#566150]">
                でも、駅前には図書館があり、改札外のカフェがあり、7つの商店街が囲んでいます。
                新しく巨大な施設をつくるのではなく、経堂にすでにあるものをつなぎ直します。
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <VisualCard
                src={imagePaths.current}
                alt="現在の経堂駅前の様子"
                label="いまの経堂駅前"
                fallback="交通機能が中心で、人が流れていく場所。ここに“過ごす余白”をつくります。"
              />
              <VisualCard
                src={imagePaths.futureHero}
                alt="経堂駅前の未来イメージ"
                label="未来の駅前"
                fallback="人工芝、木の家具、本棚、緑、親子の時間。床と空気から変えていきます。"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionLabel>CONCEPT</SectionLabel>
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                駅前を、
                <br />
                家の居間のように。
              </h2>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_rgba(35,47,30,0.10)] sm:p-10">
              <p className="text-xl font-bold leading-10 text-[#354733]">
                居間は、用事がなくても座っていい場所。
                <br />
                本を読んでも、子どもが遊んでも、近所の人と話してもいい場所。
              </p>
              <p className="mt-6 text-lg leading-9 text-[#5d665a]">
                経堂駅前にぎわいプロジェクトは、駅前を交通だけの場所としてではなく、暮らしがにじみ出る公共空間として育てる取り組みです。
                まずは小さく試し、使ってみて、声を集め、少しずつ改善していきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>WHAT WE BUILD</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              駅前で過ごす、4つの理由。
            </h2>
            <p className="mt-5 text-lg leading-9 text-[#5d665a]">
              あそぶ、くつろぐ、よむ、つながる。経堂にすでにある図書館、商店街、カフェ、地域の担い手を駅前でつなぎます。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-[#e0d7c5] bg-white p-6 shadow-[0_18px_45px_rgba(35,47,30,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f0df] text-2xl font-black text-[#55724e]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-[#263322]">{feature.title}</h3>
                <p className="mt-3 font-bold leading-7 text-[#55724e]">{feature.lead}</p>
                <p className="mt-4 leading-8 text-[#5d665a]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="michiasobi" className="bg-[#eaf3df] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel>PHASE 0</SectionLabel>
              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                まずは、駅前を
                <br />
                使ってみる一日。
              </h2>
              <p className="mt-5 text-2xl font-black text-[#55724e]">みちあそび</p>
              <div className="mt-7 grid gap-3 text-lg font-bold text-[#354733] sm:grid-cols-2">
                <div className="rounded-2xl bg-white/80 p-5">2026年6月6日（土）</div>
                <div className="rounded-2xl bg-white/80 p-5">13:30〜15:30</div>
                <div className="rounded-2xl bg-white/80 p-5">経堂図書館前 歩行者空間</div>
                <div className="rounded-2xl bg-white/80 p-5">雨天決行</div>
              </div>
              <p className="mt-6 text-lg leading-9 text-[#566150]">
                地域の住民・図書館・商店街が、駅前空間を“使ってよい場所”にする最初の成功体験。
                6/6の2時間が、経堂駅前のこれからを考えるための大切な証拠になります。
              </p>
            </div>
            <div className="space-y-5">
              <VisualCard
                src={imagePaths.eventMood}
                alt="みちあそび当日の雰囲気イメージ"
                label="当日の雰囲気"
                fallback="人工芝、本、くつろぎ家具、親子の時間。駅前が少しだけ“いていい場所”になります。"
              />
              <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_45px_rgba(35,47,30,0.08)]">
                <h3 className="text-xl font-black">当日できること</h3>
                <ul className="mt-4 grid gap-3 text-[#566150] sm:grid-cols-2">
                  <li>・人工芝であそぶ</li>
                  <li>・本を読む</li>
                  <li>・くつろぐ</li>
                  <li>・地域の人と話す</li>
                  <li>・駅前の使い方を考える</li>
                  <li>・応援の声を届ける</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>DETAIL IMAGE / MOVIE</SectionLabel>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              文字だけではなく、
              <br />
              見て伝わるページに。
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5d665a]">
              詳細イメージ、当日の雰囲気写真、動画を入れられる構成にしています。
              画像に文字は入れず、日付・場所・説明はWeb側のテキストで管理します。
            </p>
            <p className="mt-4 text-lg leading-9 text-[#5d665a]">
              動画は、完成イメージや当日の様子が伝わる短いムービーを想定。サムネイルを置き、再生できる形で掲載します。
            </p>
          </div>
          <div className="grid gap-5">
            <VisualCard
              src={imagePaths.detail}
              alt="経堂駅前にぎわいプロジェクトの詳細イメージ"
              label="詳細イメージ"
              fallback="本棚、ハンモック、人工芝、動線確保など、空間の使い方を伝える画像を入れます。"
            />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1e2b20] shadow-[0_24px_80px_rgba(35,47,30,0.16)]">
              <div className="relative aspect-video">
                <Image
                  src={imagePaths.videoPoster}
                  alt="紹介動画のサムネイル"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-3xl font-black text-[#35513b] shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
              <div className="p-5 text-white">
                <p className="text-sm font-bold text-white/70">MOVIE AREA</p>
                <p className="mt-1 text-lg font-black">経堂駅前が“まちのリビング”になるまで</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>SAFETY / OPERATION</SectionLabel>
              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                安全に、
                <br />
                無理なく、
                <br />
                続けられる形で。
              </h2>
              <p className="mt-6 text-lg leading-9 text-[#5d665a]">
                駅前はたくさんの人が通る場所。だからこそ、通行動線を守り、車道側への安全に配慮し、可動式・撤去可能な設えから始めます。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {safetyItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 font-bold leading-7 text-[#354733] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>ROADMAP</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              小さく試して、駅前広場全体へ。
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {roadmap.map((item) => (
              <article key={item.phase} className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_45px_rgba(35,47,30,0.08)]">
                <p className="text-sm font-black tracking-[0.18em] text-[#6c8b5f]">{item.phase}</p>
                <p className="mt-2 text-sm font-bold text-[#a26d20]">{item.date}</p>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#5d665a]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="bg-[#35513b] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.22em] text-white/80">
              SUPPORT
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              この駅前を、
              <br />
              一緒につくりませんか？
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/85">
              経堂駅前を、ただ通り過ぎる場所から、本を読んだり、子どもが遊んだり、近所の人と話したりできる“まちのリビング”へ。
              構想に賛同してくださる方、応援メッセージを届けてくださる方、一緒に関わってくださる方を募集しています。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={supportFormUrl}
                className="rounded-full bg-[#f5c84c] px-7 py-4 text-center text-base font-black text-[#263322] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffd968]"
              >
                賛同・応援メッセージを送る
              </a>
              <a
                id="line"
                href={lineUrl}
                className="rounded-full border border-white/50 bg-white/10 px-7 py-4 text-center text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                LINEで最新情報を受け取る
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 text-[#263322] shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-9">
            <h3 className="text-2xl font-black">賛同フォームでお聞きすること</h3>
            <p className="mt-4 leading-8 text-[#5d665a]">
              ガチガチの署名活動ではなく、まずは地域の前向きな賛同と仲間集めとして始めます。住所の番地は取得しません。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relationItems.map((item) => (
                <span key={item} className="rounded-full bg-[#edf3e7] px-4 py-3 text-sm font-bold text-[#55724e]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-2xl bg-[#fff6dd] p-5 text-sm leading-7 text-[#65543a]">
              いただいた情報は、賛同確認、関係者協議、活動報告、今後のご連絡のために使用します。お名前・メールアドレスなどの個人情報は、本人の許可なくWebサイトやSNSに公開しません。
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f2a20] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black">経堂駅前にぎわいプロジェクト</p>
            <p className="mt-2 text-sm text-white/60">交通の駅前から、暮らしの駅前へ。</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-white/80">
            <a href="#michiasobi" className="hover:text-white">みちあそび</a>
            <a href={supportFormUrl} className="hover:text-white">賛同フォーム</a>
            <a href={lineUrl} className="hover:text-white">LINE</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/30 bg-white/90 p-3 shadow-[0_-12px_40px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a href={supportFormUrl} className="rounded-full bg-[#f5c84c] px-4 py-3 text-center text-sm font-black text-[#263322]">
            賛同する
          </a>
          <a href={lineUrl} className="rounded-full bg-[#35513b] px-4 py-3 text-center text-sm font-black text-white">
            LINE登録
          </a>
        </div>
      </div>
    </main>
  );
}
