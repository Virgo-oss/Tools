function converDownload() {
	var mainWarp = document.getElementById("main-warp");
	var svg = document.getElementById("orig-svg");
	var dd = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(mainWarp.innerHTML)));
	var img = new Image();
	img.src = dd;
	document.getElementById("help-div").appendChild(img);
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	setTimeout(function() {
		var data = canvas.toDataURL('image/png');
		var a = document.createElement('a');
		a.href = data;  //将画布内的信息导出为png图片数据
		a.download = "logo.png";  //设定下载名称
		a.click(); //点击触发下载
	}, 1000);
}
