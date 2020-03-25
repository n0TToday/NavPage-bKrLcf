
function choose(temp) {
	var a = temp;
	document.getElementById("seli1").style.color = "#34495e";
	document.getElementById("seli2").style.color = "#34495e";
	document.getElementById("seli3").style.color = "#34495e";
	document.getElementById("seli4").style.color = "#34495e";
	document.getElementById("seli5").style.color = "#34495e";
	
	if (a == 1) {
		document.getElementById("irmse1").click();
		document.getElementById("seli1").style.color = "#3498db";
	} else if (a == 2) {
		document.getElementById("irmse2").click();
		document.getElementById("seli2").style.color = "#3498db";
	} else if (a == 3) {
		document.getElementById("irmse3").click();
		document.getElementById("seli3").style.color = "#3498db";
	} else if (a == 4) {
		document.getElementById("irmse4").click();
		document.getElementById("seli4").style.color = "#3498db";
	} else if (a == 5) {
		document.getElementById("irmse5").click();
		document.getElementById("seli5").style.color = "#3498db";
	}
}

function sbaidu() {
	var text = document.getElementById("search").value;
	url = 'https://www.baidu.com/s?wd=' + text;
	window.open(url, '_blank')
}

function sgoogle() {
	var text = document.getElementById("search").value;
	url = 'https://www.google.com/search?q=' + text;
	window.open(url, '_blank')
}

function sjd() {
	var text = document.getElementById("search").value;
	url = 'https://search.jd.com/Search?keyword=' + text+'&enc=utf-8';
	window.open(url, '_blank')
}

function stmall() {
	var text = document.getElementById("search").value;
	url = 'https://list.tmall.com/search_product.htm?q=' + text;
	window.open(url, '_blank')
}

function szhihu() {
	var text = document.getElementById("search").value;
	url = 'https://www.zhihu.com/search?type=content&q=' + text;
	window.open(url, '_blank')
}

function sbilibili() {
	var text = document.getElementById("search").value;
	url = 'http://search.bilibili.com/all?keyword=' + text;
	window.open(url, '_blank')
}

function sgithub() {
	var text = document.getElementById("search").value;
	url = 'https://github.com/search?utf8=%E2%9C%93&q=' + text;
	window.open(url, '_blank')
}

function sdouban() {
	var text = document.getElementById("search").value;
	url = 'https://www.douban.com/search?source=suggest&q=' + text;
	window.open(url, '_blank')
}

function sweibo() {
	var text = document.getElementById("search").value;
	url = 'https://s.weibo.com/weibo/' + text;
	window.open(url, '_blank')
}

function sbing() {
	var text = document.getElementById("search").value;
	url = 'https://cn.bing.com/search?q=' + text;
	window.open(url, '_blank')
}
function saliicon() {
	var text = document.getElementById("search").value;
	url = 'https://www.iconfont.cn/search/index?searchType=icon&q=' + text;
	window.open(url, '_blank')
}


function secbaidu() {
	document.getElementById("search-btn").onclick = sbaidu;
}

function secgoogle() {
	document.getElementById("search-btn").onclick = sgoogle;
}

function secjd() {
	document.getElementById("search-btn").onclick = sjd;
}

function sectmall() {
	document.getElementById("search-btn").onclick = stmall;
}

function seczhihu() {
	document.getElementById("search-btn").onclick = szhihu;
}

function secbilibili() {
	document.getElementById("search-btn").onclick = sbilibili;
}

function secgithub() {
	document.getElementById("search-btn").onclick = sgithub;
}

function secdouban() {
	document.getElementById("search-btn").onclick = sdouban;
}

function secweibo() {
	document.getElementById("search-btn").onclick = sweibo;
}

function secbing() {
	document.getElementById("search-btn").onclick = sbing;
}

function secaliicon() {
	document.getElementById("search-btn").onclick = saliicon;
}
