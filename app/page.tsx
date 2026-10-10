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

export default function Home() {
  return <main>
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">M</span><span>MIHARA <small>RENT A CAR</small></span></a><a className="top-phone" href="tel:0120490109">ご予約・お問い合わせ <b>0120-490-109</b></a></header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">MIHARA SANGYO RENT A CAR</p><h1>行きたい場所へ、<br /><em>気軽に走り出そう。</em></h1><p className="hero-lead">街乗りから家族旅行、荷物の多いお出かけまで。<br />ぴったりの一台を、わかりやすい料金で。</p><a className="button" href="#price">料金・車種を見る <span>↓</span></a><p className="revision">料金改定日　2027年1月4日</p></div>
      <div className="hero-art" aria-label="三原の海沿いを走る車のイメージ"><div className="sun"/><div className="hill hill-back"/><div className="hill hill-front"/><div className="road"/><div className="car"><div className="car-window"/><div className="wheel wheel-left"/><div className="wheel wheel-right"/></div><span className="art-label">YOUR NEXT<br/>ROAD TRIP</span></div>
      <div className="hero-stats"><div><strong>15<span>+</span></strong><small>選べるコース</small></div><i/><div><strong>1<span>時間〜</span></strong><small>気軽にレンタル</small></div><i/><div><strong>¥1,100<span>〜</span></strong><small>会員料金</small></div></div>
    </section>
    <section className="intro"><div><p className="eyebrow dark">FIND YOUR RIDE</p><h2>使い方に合わせて選べる<br />多彩なラインアップ。</h2></div><p>ちょっとしたお買い物から、みんなで楽しむ遠出まで。<br/>軽自動車、ファミリーカー、バン、トラックをご用意しています。<br/>料金はすべて消費税込みです。</p></section>
    <section className="price-section" id="price"><div className="section-heading"><div><p className="eyebrow dark">PRICE LIST</p><h2>車種・料金一覧</h2></div><span className="unit">表示価格：税込</span></div>
      <div className="legend"><span><i className="dot general"/>一般</span><span><i className="dot member"/>会員</span><span><i className="dot season"/>ハイシーズン</span><small>金額の単位：円</small></div>
      <div className="table-wrap"><table><thead><tr><th>コース・車種</th>{tiers.map((tier)=><th key={tier}>{tier}料金</th>)}</tr></thead><tbody>{rates.map((rate)=><tr key={rate.course}><th className="car-name"><strong>{rate.course}</strong><small>{rate.cars}</small></th>{rate.prices.map((row,i)=>row ? <td className={`rate ${i===1?"member-rate":i===2?"season-rate":""}`} key={tiers[i]}><span className="tier">{tiers[i]}</span><span className="amount-grid">{row.map((price,j)=><span className="amount" key={j}><small>{labels[j]}</small>{yen(price)}</span>)}</span></td> : <td className="no-season" key={tiers[i]}><span>{tiers[i]}</span><b>設定なし</b></td>)}</tr>)}</tbody></table></div>
      <div className="note-grid"><article className="note-card season-card"><span className="note-icon">✳</span><div><h3>ハイシーズン期間</h3><p>4/28〜5/7　・　8/8〜8/20<br/>12/27〜1/8</p><small>軽トラック・1.25tトラックはハイシーズン料金の設定がありません。</small></div></article><article className="note-card"><span className="note-icon">＋</span><div><h3>補償・オプション</h3><p>自己負担補償制度 <b>¥1,100</b> / 24時間<br/>NOC補償プラス <b>¥550</b> / 24時間</p><small>ナビ ¥550 ・ チャイルドシート ¥550 ・ ジュニアシート 無料<br/>スタッドレスタイヤ ¥1,100 ・ ドライブレコーダー ¥550 / 24時間</small></div></article></div>
    </section>
    <section className="camper"><div><p className="eyebrow">A LITTLE MORE ADVENTURE</p><h2>キャンピングカーで、<br/>旅そのものを楽しもう。</h2><p>ハイゼットトラックのキャンピングカー。<br/>1泊2日から、ゆったり旅へ。</p></div><div className="camper-prices"><p><span>通常料金</span><b>1泊2日 <strong>¥17,800</strong></b><b>2泊3日 <strong>¥27,800</strong></b><b>3泊4日 <strong>¥37,800</strong></b></p><p><span>ハイシーズン</span><b>1泊2日 <strong>¥20,000</strong></b><b>2泊3日 <strong>¥30,000</strong></b><b>3泊4日 <strong>¥40,000</strong></b></p><small>NOC補償プラス加入対象外</small></div></section>
    <section className="contact"><div><p className="eyebrow">LET'S GET YOU ON THE ROAD</p><h2>車種選びも、料金のご相談も。<br/>お気軽にお電話ください。</h2><p>受付時間 9:00〜17:00</p></div><a className="contact-button" href="tel:0120490109"><small>レンタカー フリーダイヤル</small><strong>0120-490-109</strong><span>電話をかける →</span></a></section>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">M</span><span>三原産業株式会社<small>RENT A CAR</small></span></a><p>掲載料金は2027年1月4日改定の料金表に基づいています。<br/>ご予約時に料金・空車状況をご確認ください。</p><small>© 三原産業株式会社</small></footer>
  </main>;
}
