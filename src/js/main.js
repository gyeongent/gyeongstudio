
function newsViewer(strValue)
{
	var newsLayer1 = document.getElementById('portfolio_contents_1');
	var newsLayer2 = document.getElementById('portfolio_contents_2');
	var newsLayer3 = document.getElementById('portfolio_contents_3');

	if (strValue == "1") {
		newsLayer1.style.display = "block";
		newsLayer2.style.display = "none";
		newsLayer3.style.display = "none";
	}
	else if (strValue == "2") {
		newsLayer1.style.display = "none";
		newsLayer2.style.display = "block";
		newsLayer3.style.display = "none";
	}
	else if (strValue == "3") {
		newsLayer1.style.display = "none";
		newsLayer2.style.display = "none";
		newsLayer3.style.display = "block";
	}
	else {
		newsLayer1.style.display = "none";
		newsLayer2.style.display = "none";
		newsLayer3.style.display = "none";
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

window.onload = function () {
	var el = document.getElementsByClassName("Lang_sel");
	el.onclick = LangSelClick;
}

function LangSelClick() {
	document.getElementsByClassName("Lang_menu")[0].classList.toggle('onclick')
}

console.log('Detected Language : ' + getLang());

if (getLang() == "uk") {
	document.querySelectorAll(html).style.font = 'Golca Extra Light'
	console.log('Peace')
}

if (window.location == "https://gyeong.net/news/") {
	window.location.href = "https://gyeong.net/news"
}

function isSameAsLocation(uriString) {
	const uri = new URL(uriString);

	return (
		uri.origin === window.location.origin &&
		uri.pathname ===window.location.pathname
	);
}

function pageTransition(nodeList) {
	nodeList.forEach((node) => {
		if (!(node instanceof HTMLAnchorElement)) return;

		const { href } = node;

		if (!href || node.target === "_blank" || isSameAsLocation(href)) return;

		node.addEventListener("click", (event) => {
			event.preventDefault();

			document.body.addEventListener(
				"transitionend",
				() => {
					window.location.href = href;
				},
				{passive: true, once: true}
			);
			document.body.classList.add("hidden");
		})
	})
}

