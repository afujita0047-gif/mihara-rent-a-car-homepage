const rates = [
  { course: "軽自動車", cars: "ムーヴ・ミラココア・ワゴンR・ラパン・スペーシア等", prices: [[1300,3000,5000,1300,15000,100000],[1100,2700,4500,1100,23000,92000],[2200,3800,5600,2200,28000,112000]] },
  { course: "コンパクトナビ", cars: "ヴィッツ・ノート・デミオ等", prices: [[1900,3600,5600,1900,28000,112000],[1650,3300,5100,1650,25500,102000],[2750,4400,6200,2750,31000,124000]] },
  { course: "スタンダード（5人乗り）", cars: "カローラ等", prices: [[2300,5600,7100,2300,37000,145000],[2100,5200,6600,2100,30800,120000],[3200,6300,7700,3200,38000,154000]] },
  { course: "スタンダード（7人乗り）", cars: "シエンタ・プレマシー", prices: [[2500,6500,7800,2500,39000,156000],[2200,6100,7300,2200,36500,146000],[3300,7200,8400,3300,42000,168000]] },
  { course: "HVアクア", cars: "アクア（ナビ・BC付）", prices: [[2400,5900,7400,2400,37000,148000],[2100,5500,6900,2100,32300,126000],[3200,6600,8000,3200,40000,160000]] },
  { course: "HVプリウス", cars: "プリウス（ナビ・BC付）", prices: [[2500,6500,7800,2500,39000,156000],[2200,6100,7300,2200,36500,146000],[3300,7200,8400,3300,42000,168000]] },
  { course: "ファミリー", cars: "VOXY・ノア・セレナ・アルファード（ナビ・BC付）", prices: [[4000,9700,12100,4000,60500,242000],[3700,9300,11600,3700,58000,232000],[4800,11500,13800,4800,69000,276000]] },
  { course: "10人乗りキャラバン", cars: "キャラバン（ナビ・BC付）", prices: [[4600,10500,15300,4600,76500,306000],[4300,10000,14700,4300,73500,294000],[5400,12200,16900,5400,84500,338000]] },
  { course: "10人乗りハイエース ミドルルーフ", cars: "ハイエース（ナビ・BC付）", prices: [[6200,12500,18400,6200,92000,368000],[5900,12000,17800,5900,89000,356000],[7000,14200,20000,7000,100000,400000]] },
  { course: "10人乗りハイエース グランドキャビン", cars: "ハイエース（NOC補償プラス対象外）", prices: [[7200,14500,21800,7200,110500,442000],[6900,14000,21000,6900,105000,420000],[8000,16200,23200,8000,116000,464000]] },
  { course: "軽トラック", cars: "キャリー・アクティ・サンバー等", prices: [[1300,3200,5000,1300,25000,100000],[1100,2900,4500,1100,23000,92000],null] },
  { course: "軽箱バン", cars: "ミニキャブバン・クリッパー・ハイゼットバン", prices: [[1300,3200,5000,1300,25000,100000],[1100,2900,4500,1100,23000,92000],[2200,4000,5600,2200,28000,112000]] },
  { course: "貨物バン", cars: "プロボックス", prices: [[1600,4500,6100,1600,30500,122000],[1400,4200,5600,1400,28000,112000],[2500,5300,6700,2500,33500,134000]] },
  { course: "トラック（1.25t）", cars: "トヨタ ダイナ（AT・ナビ付 / NOC補償プラス対象外）", prices: [[2400,6700,8700,2400,43500,174000],[2100,6300,8200,2100,41000,164000],null] },
  { course: "新車軽自動車", cars: "タント・スペーシア・N-BOX・ハスラー等", prices: [[1800,4900,6200,1800,31000,124000],[1600,4600,5700,1600,28500,114000],[2700,5700,6800,2700,34000,136000]] },
];
const labels = ["1時間", "12時間", "24時間", "1時間毎追加", "ウィークリー", "マンスリー"];
const tiers = ["一般", "会員", "ハイシーズン"];
const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;
const purposes = [
  { number: "01", title: "街乗り・普段使い", description: "お買い物や近場のお出かけに。小回りのきく軽自動車やコンパクトカー。", vehicle: "軽自動車・コンパクトナビ・新車軽自動車", link: "#rate-0", art: "city" },
  { number: "02", title: "家族・グループで", description: "人数や荷物に合わせて選べる、ゆったりサイズの車種。", vehicle: "スタンダード・ファミリー・10人乗り", link: "#rate-3", art: "family" },
  { number: "03", title: "快適なドライブに", description: "ハイブリッドカーやナビ付き車種で、遠出も快適に。", vehicle: "HVアクア・HVプリウス", link: "#rate-4", art: "drive" },
  { number: "04", title: "荷物やお仕事に", description: "荷物の運搬やお仕事の用途に合わせたバンとトラック。", vehicle: "軽トラック・軽箱バン・貨物バン", link: "#rate-10", art: "work" },
  { number: "05", title: "旅をもっと楽しむ", description: "キャンピングカーで、いつもより自由な旅へ。", vehicle: "軽キャンピングカー", link: "#camper", art: "trip" },
];

export default function Home() {
  return <main className="site-shell">
    <header className="site-header" id="top"><a className="brand" href="#top" aria-label="三原産業 レンタカー"><svg className="mihara-logo" viewBox="0 0 100 64" role="img" aria-label="三原産業"><path fill="#cf0000" d="M50 11 94 33 50 25 6 33Z"/><path fill="#cf0000" d="M6 35 50 27 94 35 50 43Z"/><path fill="#cf0000" d="M6 37 50 45 94 37 50 58Z"/></svg><span className="brand-name">三原産業カーライフサポート部<small>みはらのサービスステーション　|　RENT A CAR</small></span></a><nav aria-label="メインナビゲーション"><a href="#vehicles">車種を選ぶ</a><a href="#price">料金一覧</a><a className="header-cta" href="tel:0120490109"><span>電話で問い合わせ</span><b>0120-490-109</b></a></nav></header>

    <section className="hero" aria-labelledby="hero-title"><div className="hero-scene"><div className="hero-sky-cloud cloud-one"/><div className="hero-sky-cloud cloud-two"/><div className="station-building"><div className="station-sign">MIHARA <small>CAR LIFE SUPPORT</small></div><div className="station-windows"><i/><i/><i/><i/></div></div><div className="station-canopy"/><div className="station-pillar pillar-one"/><div className="station-pillar pillar-two"/><div className="hero-ground"/><div className="hero-car"><i/><b/><span/></div><div className="hero-frame"><p>CAR LIFE</p><h1 id="hero-title">RENT A CAR</h1><span>お客様の安全で快適なカーライフを<br/>レンタカーからサポート</span></div><span className="hero-caption">MIHARA SANGYO　/　RENT A CAR</span></div><div className="hero-message"><div><p className="eyebrow">MIHARA RENT A CAR</p><h2>使いたい時に、<br/>使いたい一台を。</h2></div><div><p>街乗りから家族旅行、お仕事の車まで。<br/>使い方に合わせて、ぴったりの一台をお選びいただけます。</p><a className="red-link" href="#price">車種・料金を見る <span>↓</span></a></div></div></section>

    <section className="brand-message"><p>車の事ならすべて任せられる、地域で愛されるお店を目指して。</p><span>三原産業は、安心・安全で快適なカーライフをお手伝いします。</span></section>

    <section className="service-section" id="vehicles"><div className="section-title"><p>Service</p><h2>使い方に合わせて選べる車種</h2><i/></div><div className="purpose-list">{purposes.map((purpose)=><article className={`purpose-card purpose-${purpose.art}`} key={purpose.number}><div className={`purpose-art purpose-art-${purpose.art}`} role="img" aria-label={`${purpose.title}に合う車のイラスト`}>
        <svg className="purpose-illustration" viewBox="0 0 640 300" aria-hidden="true">
          <defs><linearGradient id={`sky-${purpose.art}`} x2="0" y2="1"><stop stopColor="#77bde8"/><stop offset="1" stopColor="#e8f5f8"/></linearGradient></defs>
          <rect width="640" height="300" fill={`url(#sky-${purpose.art})`}/><circle cx="510" cy="66" r="30" fill="#ffe3a2"/>
          <rect x="0" y="218" width="640" height="82" fill="#83b881"/><path d="M0 218q160-18 320 0t320 0" fill="none" stroke="#6eaa79" strokeWidth="8"/>
          <path d="M270 300q65-91 149-134h91q-66 56-80 134z" fill="#6d7470"/><path d="M375 300q35-73 104-134" stroke="#fff4c6" strokeWidth="5" strokeDasharray="13 12" fill="none"/>
          {purpose.art === "city" && <g><path d="M144 193h326q20 0 27 22l11 39q4 17-17 17H112q-18 0-13-18l13-39q6-21 32-21Z" fill="#fff"/><path d="m203 191 26-48q8-14 26-14h116q24 0 37 18l32 44z" fill="#dce9eb"/><path d="m240 183 19-39h53v39zm82-39h47q14 0 24 13l18 26H322z" fill="#77aaba"/></g>}
          {purpose.art === "family" && <g><path d="M114 183h389q20 0 25 22l11 49q4 17-17 17H92q-20 0-14-19l13-45q5-24 23-24Z" fill="#fff"/><path d="m167 181 20-57q7-19 27-19h190q23 0 35 23l28 53z" fill="#dce9eb"/><path d="m207 171 15-48h68v48zm96-48h91q11 0 18 15l16 33H303z" fill="#78aabb"/><path d="M285 124v48" stroke="#fff" strokeWidth="5"/></g>}
          {purpose.art === "drive" && <g><path d="M132 194h356q25 0 32 23l11 38q4 17-18 17H101q-19 0-13-19l14-39q7-20 30-20Z" fill="#d9e2e5"/><path d="m192 191 42-49q10-11 27-11h117q20 0 34 15l42 45z" fill="#dce9eb"/><path d="m234 181 33-39h59v39zm101-39h40q12 0 23 12l25 27h-88z" fill="#74a9bb"/></g>}
          {purpose.art === "work" && <g><path d="M108 194h248q24 0 29 22l10 43q4 17-16 17H87q-20 0-15-18l13-43q5-21 23-21Z" fill="#fff"/><path d="M352 162h137q16 0 23 17l22 41v42H365z" fill="#c8322b"/><path d="M382 174h83v37h-83z" fill="#dce9eb"/><path d="M476 174h13q7 0 12 11l13 26h-38z" fill="#78aabb"/></g>}
          {purpose.art === "trip" && <g><path d="M107 185h419q22 0 27 23l11 50q4 17-18 17H83q-19 0-14-19l14-46q6-25 24-25Z" fill="#fff"/><path d="M150 183v-40q0-15 16-15h260q20 0 32 18l25 37z" fill="#dce9eb"/><path d="M178 173v-34h94v34zm108-34h130q10 0 18 13l15 21H286z" fill="#77aabb"/><path d="M168 146h106" stroke="#c8322b" strokeWidth="6"/></g>}
          <g fill="#31383a"><circle cx="166" cy="268" r="27"/><circle cx="425" cy="268" r="27"/></g><g fill="#d9dedc"><circle cx="166" cy="268" r="12"/><circle cx="425" cy="268" r="12"/></g>
        </svg>
      </div><div className="purpose-copy"><span className="number-badge">{purpose.number}</span><p className="purpose-kicker">RENT A CAR</p><h3>{purpose.title}</h3><p className="purpose-description">{purpose.description}</p><small>{purpose.vehicle}</small><a href={purpose.link}>車種を見る <span>→</span></a></div></article>)}</div></section>

    <section className="price-section" id="price"><div className="section-title"><p>Price</p><h2>レンタカー車種・料金表</h2><i/><span className="price-date">2027年1月4日料金改定　/　表示価格は消費税込み</span></div><div className="price-legend"><span><i className="legend-dot general-dot"/>一般</span><span><i className="legend-dot member-dot"/>会員</span><span><i className="legend-dot season-dot"/>ハイシーズン</span><small>コースを選ぶと、利用時間ごとの料金をご覧いただけます。</small></div><div className="course-list">{rates.map((rate,index)=><details className="course-card" id={`rate-${index}`} key={rate.course} open={index===0}><summary><span className="course-number">{String(index+1).padStart(2,"0")}</span><span className="course-heading"><strong>{rate.course}</strong><small>{rate.cars}</small></span><span className="course-start"><small>一般・1時間</small><b>{yen(rate.prices[0]![0])}〜</b></span><span className="course-toggle" aria-hidden="true">＋</span></summary><div className="course-prices">{rate.prices.map((row,tierIndex)=>row ? <section className={`price-tier tier-${tierIndex}`} key={tiers[tierIndex]}><h3>{tiers[tierIndex]}</h3><dl>{row.map((price,labelIndex)=><div key={labels[labelIndex]}><dt>{labels[labelIndex]}</dt><dd>{yen(price)}</dd></div>)}</dl></section> : <section className="price-tier no-season-tier" key={tiers[tierIndex]}><h3>{tiers[tierIndex]}</h3><p>ハイシーズン料金の設定はありません。</p></section>)}</div></details>)}</div>

      <div className="information-grid"><article className="info-card season-info"><span className="number-badge">06</span><div><p className="info-kicker">HIGH SEASON</p><h3>ハイシーズン期間</h3><p className="date-list">4/28〜5/7 <i/> 8/8〜8/20 <i/> 12/27〜1/8</p><small>軽トラック・1.25tトラックはハイシーズン料金の設定がありません。</small></div></article><article className="info-card"><span className="number-badge">07</span><div><p className="info-kicker">SUPPORT & OPTIONS</p><h3>補償・オプション</h3><div className="option-lines"><p>自己負担補償制度 <b>¥1,100</b><small>24時間毎</small></p><p>NOC補償プラス <b>¥550</b><small>24時間毎</small></p><p>ナビ・チャイルドシート <b>¥550</b><small>24時間毎</small></p><p>ジュニアシート <b>無料</b></p><p>スタッドレスタイヤ <b>¥1,100</b><small>24時間毎</small></p><p>ドライブレコーダー <b>¥550</b><small>24時間毎</small></p></div></div></article></div>
    </section>

    <section className="camper-section" id="camper"><div className="camper-art"><span className="camper-sky"/><span className="camper-sun"/><span className="camper-road"/><span className="camper-vehicle"><i/><b/><em/></span><span className="camper-art-label">A LITTLE MORE ADVENTURE</span></div><div className="camper-copy"><span className="number-badge">05</span><p className="info-kicker">CAMPING CAR</p><h2>キャンピングカーで、<br/>旅をもっと自由に。</h2><p>ハイゼットトラックのキャンピングカー。<br/>1泊2日から、ゆったりと旅を楽しめます。</p><div className="camper-rate"><div><small>通常</small><b>1泊2日 <strong>¥17,800</strong></b><b>2泊3日 <strong>¥27,800</strong></b><b>3泊4日 <strong>¥37,800</strong></b></div><div><small>ハイシーズン</small><b>1泊2日 <strong>¥20,000</strong></b><b>2泊3日 <strong>¥30,000</strong></b><b>3泊4日 <strong>¥40,000</strong></b></div></div><small className="camper-note">NOC補償プラス加入対象外</small></div></section>

    <section className="contact-section"><div className="contact-copy"><p className="eyebrow">Contact</p><h2>車種選びや料金のご相談も、<br/>お気軽にお問い合わせください。</h2><p>受付時間　9:00〜17:00</p></div><div className="contact-actions"><a className="contact-button" href="tel:0120490109"><span>レンタカー フリーダイヤル</span><b>0120-490-109</b><small>電話をかける　→</small></a><a className="reservation-button" href="https://cal-rent.net/rent/select_ss.php?pref=%88%A4%95Q%8C%A7" target="_blank" rel="noopener noreferrer"><span>空車確認・ご予約</span><b>予約サイトへ</b><small>オンライン予約はこちら　↗</small></a></div></section>

    <footer className="site-footer"><a className="brand" href="#top"><svg className="mihara-logo" viewBox="0 0 100 64" role="img" aria-label="三原産業"><path fill="#cf0000" d="M50 11 94 33 50 25 6 33Z"/><path fill="#cf0000" d="M6 35 50 27 94 35 50 43Z"/><path fill="#cf0000" d="M6 37 50 45 94 37 50 58Z"/></svg><span className="brand-name">三原産業株式会社<small>MIHARA CAR LIFE SUPPORT</small></span></a><p>掲載料金は2027年1月4日改定の料金表に基づいています。<br/>ご予約時に料金・空車状況をご確認ください。</p><small>© 三原産業株式会社</small></footer>
  </main>;
}
