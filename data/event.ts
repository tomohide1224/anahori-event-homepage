export type EventInfo = {
  title: string;
  date: string;
  time: string;
  place: string;
  address: string;
  organizer: string;
  mainCopy: string;
  subCopies: string[];
  belongings: string[];
  notes: string[];
  recommendedFor: string[];
  faq: { question: string; answer: string }[];
};

export const diggingEvent: EventInfo = {
  title: "西太子堂から地球を掘ろう！",
  date: "6月28日（土）",
  time: "11:00〜15:00",
  place: "西太子堂駅南側の空き地",
  address: "太子堂4-9-8",
  organizer: "そとあそびプロジェクト・せたがや",
  mainCopy: "西太子堂から地球を掘ろう！",
  subCopies: [
    "金属探知機でも宝物をさがせ！",
    "何が出るかは、掘ってみなきゃわからない！"
  ],
  belongings: ["スコップ", "飲みもの", "タオル", "汚れてもよい服装", "帽子", "必要に応じて軍手"],
  notes: [
    "熱中症対策のため、飲み物は必ず各自でご持参ください。",
    "小雨決行、雨天中止です。",
    "安全のため、スタッフの案内に従ってください。",
    "穴の周辺では走らないようにしてください。",
    "小さなお子さまは保護者の方と一緒にご参加ください。"
  ],
  recommendedFor: [
    "外遊びが好きな子",
    "土いじりが好きな子",
    "宝探しが好きな子",
    "親子で思いきり遊びたい人",
    "まちの中でちょっと変わった体験をしたい人",
    "子どもと一緒に汗をかきたい大人"
  ],
  faq: [
    {
      question: "申込みは必要ですか？",
      answer: "申込み方法が決まり次第、このページでお知らせします。申込み不要の場合は、直接会場へお越しください。"
    },
    {
      question: "雨の場合はどうなりますか？",
      answer: "小雨決行、雨天中止です。中止の場合の連絡方法は、決まり次第お知らせします。"
    },
    {
      question: "スコップがない場合は参加できますか？",
      answer: "貸出の有無は確認中です。可能であれば、ご家庭のスコップをお持ちください。"
    },
    {
      question: "子どもだけで参加できますか？",
      answer: "小さなお子さまは保護者同伴をおすすめします。安全に気をつけながら、親子で一緒に楽しんでください。"
    },
    {
      question: "どんな服装がいいですか？",
      answer: "土で汚れてもよい服装、動きやすい靴、帽子がおすすめです。暑さ対策も忘れずにお願いします。"
    }
  ]
};
