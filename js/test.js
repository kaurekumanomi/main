function showPopup() {
    // ポップアップ用の要素を作成
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    // ポップアップの中身を設定
    popup.innerHTML = `
      <h4>サイト完成！！</h4>
      <p>とりあえずサイトが完成しました！！やった＼(^_^)／</p>
      <p>ブログは毎日更新はしないですけど、なんかあるたびに更新していきます！！</p>
      <p>まぁ、これからお願いいたします！！</p>
      <p></p>
      <p>2023/08/01</p>
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