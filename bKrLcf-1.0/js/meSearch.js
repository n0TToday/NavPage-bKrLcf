var stats = 0;

function msec() {
	if (stats == 1) {
		document.getElementById("msec").style.display = "none";
		stats = 0;
	} else {
		document.getElementById("msec").style.display = "inline-block";
		stats = 1;
	}
}

function sbaidu() {
	var text = document.getElementById("search-inp").value;
	url = 'https://www.baidu.com/s?wd=' + text;
	window.open(url, '_blank')
}

function sgoogle() {
	var text = document.getElementById("search-inp").value;
	url = 'https://www.google.com/search?q=' + text;
	window.open(url, '_blank')
}

function sjd() {
	var text = document.getElementById("search-inp").value;
	url = 'https://search.jd.com/Search?keyword=' + text;
	window.open(url, '_blank')
}

function stmall() {
	var text = document.getElementById("search-inp").value;
	url = 'https://list.tmall.com/search_product.htm?q=' + text;
	window.open(url, '_blank')
}

function szhihu() {
	var text = document.getElementById("search-inp").value;
	url = 'https://www.zhihu.com/search?type=content&q=' + text;
	window.open(url, '_blank')
}

function sbilibili() {
	var text = document.getElementById("search-inp").value;
	url = 'http://search.bilibili.com/all?keyword=' + text;
	window.open(url, '_blank')
}

function sgithub() {
	var text = document.getElementById("search-inp").value;
	url = 'https://github.com/search?utf8=%E2%9C%93&q=' + text;
	window.open(url, '_blank')
}

function sdouban() {
	var text = document.getElementById("search-inp").value;
	url = 'https://www.douban.com/search?source=suggest&q=' + text;
	window.open(url, '_blank')
}

function sweibo() {
	var text = document.getElementById("search-inp").value;
	url = 'https://s.weibo.com/weibo/' + text;
	window.open(url, '_blank')
}

function sbing() {
	var text = document.getElementById("search-inp").value;
	url = 'https://cn.bing.com/search?q=' + text;
	window.open(url, '_blank')
}


function secbaidu() {
	document.getElementById("search-btn").onclick = sbaidu;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secgoogle() {
	document.getElementById("search-btn").onclick = sgoogle;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secjd() {
	document.getElementById("search-btn").onclick = sjd;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function sectmall() {
	document.getElementById("search-btn").onclick = stmall;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function seczhihu() {
	document.getElementById("search-btn").onclick = szhihu;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secbilibili() {
	document.getElementById("search-btn").onclick = sbilibili;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secgithub() {
	document.getElementById("search-btn").onclick = sgithub;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secdouban() {
	document.getElementById("search-btn").onclick = sdouban;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secweibo() {
	document.getElementById("search-btn").onclick = sweibo;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}

function secbing() {
	document.getElementById("search-btn").onclick = sbing;
	document.getElementById("msec").style.display = "none";
	stats = 0;
}
