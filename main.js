$(window).scroll(function () {           /* スクロールされた時 */
    var pos = $('main').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
    if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
        $('header').fadeIn();                /* ヘッダーをふわっと表示 */
    } else {                               /* それ以外の場合 */
        $('header').fadeOut();               /* ヘッダーをふわっと非表示 */
    }
});

var footerArea = document.getElementById("footerArea");
footerArea.innerHTML = "Copyright © 2020 Roly-Poly All Rights Reserved.";

// ふわっ

function fadeAnime() {
    $('.fadeInTrigger').each(function () { //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
        }
    })
};

$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });
