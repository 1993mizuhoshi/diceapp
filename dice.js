'use strict';

const adicebutton = document.getElementById('a');
const bdicebutton = document.getElementById('b');
const cdicebutton = document.getElementById('c');
const ddicebutton = document.getElementById('d');
const custombutton = document.getElementById('cus');
const resultDivision = document.getElementById('result-area');

adicebutton.addEventListener(
  'click',
  function generateRandomNumber() {
    // 1から100までのランダムな整数を生成
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // 結果を表示する要素にランダムな値を設定
    document.getElementById('aresult').innerText = `${randomNumber}`;
  }
);

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

