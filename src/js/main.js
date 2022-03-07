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


