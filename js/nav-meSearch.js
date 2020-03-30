function change(temp) {
	var a = temp;
	$("#mutilSearchEngine ul li").removeClass('active');
	switch (a) {
		case 1:
			document.getElementById("search-btn").onclick = sbaidu;
			$("#selibaidu").addClass("active");
			break;
		case 2:
			document.getElementById("search-btn").onclick = sgoogle;
			$("#seligoogle").addClass("active");
			break;
		case 3:
			document.getElementById("search-btn").onclick = sjd;
			$("#selijd").addClass("active");
			break;
		case 4:
			document.getElementById("search-btn").onclick = samazon;
			$("#seliamazon").addClass("active");
			break;
		case 5:
			document.getElementById("search-btn").onclick = sbili;
			$("#selibili").addClass("active");
			break;
		case 6:
			document.getElementById("search-btn").onclick = syoutube;
			$("#seliyoutube").addClass("active");
			break;
		case 7:
			document.getElementById("search-btn").onclick = saliicon;
			$("#selialiicon").addClass("active");
			break;
		case 8:
			document.getElementById("search-btn").onclick = sgithub;
			$("#seligithub").addClass("active");
			break;
	}
}

function sbaidu() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.baidu.com';
	} else {
		url = 'https://www.baidu.com/s?wd=' + text;
	}
	window.open(url, '_blank')

}

function sgoogle() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.google.com';
	} else {
	url = 'https://www.google.com/search?q=' + text;
	}
	window.open(url, '_blank')
}

function samazon() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.amazon.com';
	} else {
	url = 'https://www.amazon.com/s?k=' + text;
	}
	window.open(url, '_blank')
}

function sjd() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.jd.com';
	} else {
	url = 'https://search.jd.com/Search?keyword=' + text + '&enc=utf-8';
	}
	window.open(url, '_blank')
}

function stmall() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.tmall.com';
	} else {
	url = 'https://list.tmall.com/search_product.htm?q=' + text;
	}
	window.open(url, '_blank')
}

function szhihu() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.zhihu.com';
	} else {
	url = 'https://www.zhihu.com/search?type=content&q=' + text;
	}
	window.open(url, '_blank')
}

function sbili() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.bilibili.com';
	} else {
	url = 'http://search.bilibili.com/all?keyword=' + text;
	}
	window.open(url, '_blank')
}

function sgithub() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.github.com';
	} else {
	url = 'https://github.com/search?q=' + text;
	}
	window.open(url, '_blank')
}

function syoutube() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.youtube.com';
	} else {
	url = 'https://www.youtube.com/results?search_query=' + text;
	}
	window.open(url, '_blank')
}

function sdouban() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.douban.com';
	} else {
	url = 'https://www.douban.com/search?source=suggest&q=' + text;
	}
	window.open(url, '_blank')
}

function sweibo() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.weibo.com';
	} else {
	url = 'https://s.weibo.com/weibo/' + text;
	}
	window.open(url, '_blank')
}

function sbing() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.bing.com';
	} else {
	url = 'https://cn.bing.com/search?q=' + text;
	}
	window.open(url, '_blank')
}

function saliicon() {
	var text = $("#search").val();
	if (text == '') {
		url='https://www.iconfont.cn';
	} else {
	url = 'https://www.iconfont.cn/search/index?searchType=icon&q=' + text;
	}
	window.open(url, '_blank')
}
