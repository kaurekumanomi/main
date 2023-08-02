function showPopup1() {
    // ポップアップ用の要素を作成
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    // ポップアップの中身を設定
    popup.innerHTML = `
      <h4>開発開始！</h4>
      <p>今日から「Fantasia」というDiscordBotの</p>
      <p>開発を開始します！！ちょくちょく進捗の報告はします！</p>
      <p>メインはQiitaでするかも？</p>
      <p>Qiita: <a href="https://qiita.com/kakure_kumanomi_kun" target=”_blank”>kakure_kumanomi_kun</a></p>
      <p><br></p>
      <p>2023/08/02</p>
      <button onclick="closePopup()">閉じる</button>
    `;
  
    // ポップアップを表示するためのスタイルを設定
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '9999';
  
    // ボディにポップアップを追加
    document.body.appendChild(popup);
  }
  
  function closePopup() {
    // ポップアップを閉じる
    const popup = document.querySelector('.popup');
    popup.remove();
  }