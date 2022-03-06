// 언어팩 선언.
$.lang = {};
 
$.lang.ko = {
    0: '포트폴리오',
    1: '다운로드',
    2: 'GYEONG Studio에 오신 것을 환영합니다.',
    3: '웹사이트 준비중입니다.',
    4: '잠시만 기다려주세요 :)'
};

$.lang.en = {
    0: 'Portfolio',
    1: 'Download',
    2: 'This is GYEONG Studio',
    3: 'The website is being prepared',
    4: 'please wait :)'
};
 
/**
* setLanguage 
* use $.lang[currentLanguage][languageNumber]
*/
function setLanguage(currentLanguage) {
  console.log('setLanguage', arguments);
  
  $('[data-langNum]').each(function() {
    var $this = $(this); 
    $this.html($.lang[currentLanguage][$this.data('langnum')]); 
  });    
}  
 
// 언어 변경
$('button').click(function() {
  var lang = $(this).data('lang');
  setLanguage(lang); 
});