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

var lang = "un"; //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
 
 if (navigator.language!=null) //이 값이 null이 아니면. 즉 크롬이나 파폭이면
 {
     lang = navigator.language;
 } else if (navigator.userLanguage!=null) { //이 값이 null이 아니면. 즉 익스라면
     lang = navigator.userLanguage;
 } else if (navigator.systemLanguage!=null) { //여기까지는 안 올거 같은데 혹시나 해서
     lang = navigator.systemLanguage;
 } else { //이도저도 아니면
     lang="un";
 }
 
 lang = lang.toLowerCase(); //받아온 값을 소문자로 변경
 lang = lang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기
 
  if (lang=="ko") { //한국어라면
      setLanguage(ko);
  } else if (lang=="cn" || lang=="tw" || lang=="zh") { //중국어라면
      alert("중국어");
  } else { //그 외~
      alert("그 외");
  }
 
