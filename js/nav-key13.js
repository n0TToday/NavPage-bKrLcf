document.onkeyup = function (e) {
    if (window.event)//如果window.event对象存在，就以此事件对象为准
        e = window.event;
    var code = e.charCode || e.keyCode;
    if (code == 13) {
       	document.getElementById("search-btn").click();
    }
}