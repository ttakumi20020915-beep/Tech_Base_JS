function omikujishow(){
  var omikuji = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];

  var comments = {
    "大吉": "何をやってもうまくいく日！",
    "中吉": "安定感抜群。コツコツ行こう。",
    "小吉": "小さな幸せを大切に。",
    "吉": "まずまず良い流れ。",
    "末吉": "後半に期待。",
    "凶": "慎重に行動しよう。",
    "大凶": "今日は休憩日だと思おう。"
  };

  var number = Math.floor(Math.random() * omikuji.length);
  var result = omikuji[number];

  var obj = document.getElementById("omikuji");
  var com = document.getElementById("comment");

  obj.innerText = result;
  com.innerText = comments[result];

  obj.className = "result shake";

  if(result == "大吉") obj.classList.add("daikichi");
  if(result == "中吉" || result == "小吉" || result == "吉" || result == "末吉")
    obj.classList.add("kichi");
  if(result == "凶" || result == "大凶")
    obj.classList.add("kyou");

  // 効果音
  document.getElementById("se").currentTime = 0;
  document.getElementById("se").play();

  // 履歴追加
  var history = document.getElementById("history");
  var li = document.createElement("li");
  li.innerText = result + " - " + comments[result];
  history.prepend(li); // 上に追加
}
