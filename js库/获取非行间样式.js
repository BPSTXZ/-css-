//获取非行间样式
function getstyle (obj,attr) {
	if (obj,currentStyle {
		return obj.currentStyle[attr];
	} else{
		return getComputedStyle(obj)[attr];
	}
}