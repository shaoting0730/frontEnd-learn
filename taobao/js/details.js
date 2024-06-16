var main = document.querySelector(".main");
var big = document.querySelector(".box");
var hoverBox = document.querySelector(".hover-box");

var mainW = main.offsetWidth,
    mainH = main.offsetHeight,
    bigW = big.offsetWidth,
    bigH = big.offsetHeight,
    hoverBoxW = hoverBox.offsetWidth,
    hoverBoxH = hoverBox.offsetHeight;

// console.log(main);
// console.log(big);
// console.log(hoverBox);
// console.log(mainW);
// console.log(mainH);
// console.log(bigW);
// console.log(bigH);
// console.log(hoverBoxW);
// console.log(hoverBoxH);
main.onmousemove = function (e) {
    // 计算图片显示坐标
    var offset = this.getBoundingClientRect();

    // 获取鼠标的位置
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;

    // 鼠标存在放大镜中间位置
    var left = x - hoverBoxW / 2;
    var top = y - hoverBoxH / 2;
    //判断放大镜滑动的范围
    if (left < 0) {
        left = 0;
    }
    if (top < 0) {
        top = 0;
    }
    if(left + hoverBoxW > mainW){
       left = mainW - hoverBoxW;
    }
    if(top + hoverBoxH > mainH){
       top = mainH - hoverBoxH;
    }
    // 让鼠标移去移动放大镜
    hoverBox.style.left = left + "px";
    hoverBox.style.top = top + "px";
    
    // 根据放大镜移动放大以后的图片
    var bigX = (left / (mainW - hoverBoxW)) * (bigW - mainW);
    var bigY = (top / (mainH - hoverBoxH)) * (bigH - mainH);
    big.style.left = (bigX * -1) + "px";
    big.style.top = (bigY * -1) + "px";

};