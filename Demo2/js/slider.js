//此轮播是在 html将所有的img全部放在一起 然后absolute将所有img堆叠放在一起，将他不显示的图层隐藏。
//占用html文件，不方便后续去跟该板报的图片链接和内容

var aImgs = document.querySelectorAll(".slider-wrap  .wrap .ban .ban-img  img");
var aLis = document.querySelectorAll(".slider-wrap  .wrap .ban .slider-dots a");
var btnLeft = document.querySelector(".slider-wrap .wrap .ban .btnl");
var btnRight = document.querySelector(".slider-wrap .wrap .ban  .btnr");
var imgBox = document.querySelector(".slider-wrap .wrap .a-img");
var imgBackground = document.querySelectorAll(".slider-wrap");

//点击事件
//点击按钮图片切换
var index = 0; //当前图片下标
var lastIndex = 0;

const slieder_intervalTime = 2000;

btnRight.onclick = function () {
  //记录上一张图片的下标
  lastIndex = index;
  //清除上一张图片的样式

  aImgs[lastIndex].className = " ";
  aLis[lastIndex].className = "pg";
  index++;
  index %= 8; //实现周期性变化
  //设置当前图片的样式
  aImgs[index].className = "on";
  aLis[index].className = "pg active";
};

//左边按钮类似
btnLeft.onclick = function () {
  //记录上一张图片的下标
  lastIndex = index;
  //清除上一张图片的样式
  aImgs[lastIndex].className = " ";
  aLis[lastIndex].className = "pg";
  index--;
  if (index < 0) {
    index = aImgs.length - 1;
  }
  //设置当前图片的样式
  aImgs[index].className = "on";
  aLis[index].className = "pg active";
};

function swapImag() {
  //记录上一张图片的下标
  lastIndex = index;
  //清除上一张图片的样式
  aImgs[lastIndex].className = " ";
  aLis[lastIndex].className = "pg";
  index++;
  index %= 8; //实现周期性变化
  //设置当前图片的样式
  aImgs[index].className = "on";
  aLis[index].className = "pg active";
}

timer = setInterval(swapImag, slieder_intervalTime);

imgBox.addEventListener("mouseover", function () {
  clearInterval(timer);
});

imgBox.addEventListener("mouseout", function () {
  timer = setInterval(swapImag, slieder_intervalTime);
});
