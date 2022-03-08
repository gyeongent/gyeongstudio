function newsViewer(strValue)
{
	var newsLayer1 = document.getElementById('portfolio_contents_1');
	var newsLayer2 = document.getElementById('portfolio_contents_2');

	if (strValue == "1") {
		newsLayer1.style.display = "block";
		newsLayer2.style.display = "none";
	}
	else if (strValue == "2") {
		newsLayer1.style.display = "none";
		newsLayer2.style.display = "block";
	}
	else {
		newsLayer1.style.display = "none";
		newsLayer2.style.display = "none";
	}
}

function soon() {
  alert("Soon")
}

function setCookie(key, value, expiredays) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
    //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
    document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getLang(){
	var userLang = navigator.language || navigator.userLanguage;
	var strLang = userLang.substring(0,2)
	return strLang;
}

console.log('Detected Language : ' + getLang());