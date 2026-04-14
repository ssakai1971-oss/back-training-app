const exercises = [
  "キャット＆カウ",
  "バードドッグ",
  "ヒップリフト",
  "肩甲骨寄せ",
  "ストレッチ"
];

const root = document.getElementById("root");

let checked = [];

function render() {
  root.innerHTML = `
    <h2>背筋ケア</h2>
    ${exercises.map((ex, i) => `
      <div onclick="toggle(${i})" style="padding:10px; margin:5px; background:${checked.includes(i) ? '#a7f3d0' : '#eee'}">
        ${ex}
      </div>
    `).join("")}
    <button onclick="reset()">リセット</button>
  `;
}

function toggle(i) {
  if (checked.includes(i)) {
    checked = checked.filter(x => x !== i);
  } else {
    checked.push(i);
  }
  render();
}

function reset() {
  checked = [];
  render();
}

render();