'use strict';

const adicebutton = document.getElementById('a');
const bdicebutton = document.getElementById('b');
const cdicebutton = document.getElementById('c');
const ddicebutton = document.getElementById('d');
const edicebutton = document.getElementById('e');
const fdicebutton = document.getElementById('f');
const gdicebutton = document.getElementById('g');
const custombutton = document.getElementById('cus');
const resultDivision = document.getElementById('result-area');
const inputNumber = document.getElementById('ginou');


adicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
      // テキストボックスから取得した数字
  const userInput = parseInt(inputNumber.value, 10);

    // 1から100までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('aresult').innerText = `${randomNumber}`;

    // ランダムな値とユーザーの入力を比較
    if (randomNumber < userInput) {
      aresult.innerText += ' 成功';
    } else if (randomNumber > userInput) {
      aresult.innerText += ' 失敗';
    } else {
      aresult.innerText += ' 成功';
    }

     // クリティカルまたはファンブルの場合の条件判定
  if (randomNumber >= 95 && randomNumber <= 100) {
    aresult.innerText += ' ファンブル';
  } else if (randomNumber >= 1 && randomNumber <= 5) {
    aresult.innerText += ' クリティカル';
  }
  
  });

bdicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から20までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 20) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('bresult').innerText = `${randomNumber}`;
  }
);

cdicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から10までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('cresult').innerText = `${randomNumber}`;
  }
);

ddicebutton.addEventListener(
  'click',
function generateRandomNumber() {
  // 1から6までのランダムな整数を生成
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // 結果を表示する要素にランダムな値を設定
  document.getElementById('dresult').innerText = `${randomNumber}`;
}
);

edicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から4までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('eresult').innerText = `${randomNumber}`;
  }
);

fdicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から3までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 3) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('fresult').innerText = `${randomNumber}`;
  }
);

gdicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から8までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 8) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('gresult').innerText = `${randomNumber}`;
  }
);

custombutton.addEventListener('click', function generateRandomNumbers() {
  // テキストボックスから回数を取得
  const timesInputOne = document.getElementById('one');
  const timesOne = parseInt(timesInputOne.value, 10);

  const inputNumberTwo = document.getElementById('two').value;
  const number = parseFloat(inputNumberTwo);

  // 指定された回数だけランダムな数を生成し、その合計を計算
  let sum = 0;
  for (let i = 0; i < timesOne; i++) {
    const randomNumber = Math.floor(Math.random() * number) + 1;
    sum += randomNumber;
  }

  // 結果を表示する要素にランダムな値を設定
  document.getElementById('result').innerText = `${sum}`;
});

