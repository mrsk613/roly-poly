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
        var elemPos = $(this).offset().top - 10;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
        }
    })
};

$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});

$('.slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,//次のスライドに切り替わる待ち時間
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
        $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    } else {
        if ($('#page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
            $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
            $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});