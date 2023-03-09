var aImgs = document.querySelector(".slider-wrap  .wrap .ban .ban-img  img");

var aLis = document.querySelectorAll(".slider-wrap  .wrap .ban .slider-dots a");
var btnLeft = document.querySelector(".slider-wrap .wrap .ban .btnl");
var btnRight = document.querySelector(".slider-wrap .wrap .ban  .btnr");
var imgBox = document.querySelector(".slider-wrap .wrap .a-img");
var imgBackground = document.querySelectorAll(".slider-wrap");

//点击事件
//点击按钮图片切换

var index = 0; //当前图片下标
var lastIndex = 0;

const slieder_intervalTime = 2000; //间隔时间

var imgs = [
  "https://p1.music.126.net/aAukQGutiLn_fd7bQF4Wlw==/109951168447325079.jpg?imageView&quality=89",
  "https://p1.music.126.net/bntyS-oo2cMzEQNNL8KV4g==/109951168447330037.jpg?imageView&quality=89",
  "https://p1.music.126.net/efa3SJ9z3cWyNeQl4avqiQ==/109951168447329613.jpg?imageView&quality=89",
  "https://p1.music.126.net/UO21Mft6BXELSVU41m3Iaw==/109951168447322935.jpg?imageView&quality=89",
  "https://p1.music.126.net/lK7WdaIoN97rDTWjjeFtoQ==/109951168447333779.jpg?imageView&quality=89",
  "https://p1.music.126.net/53KN0My_AFZrq_yrAYVowg==/109951168447345121.jpg?imageView&quality=89",
  "https://p1.music.126.net/AkCh82R6KJUFBcRCAJJHXA==/109951168447345901.jpg?imageView&quality=89",
  "https://p1.music.126.net/5h5LzEtA5baWODuCvoyOzw==/109951168447355658.jpg?imageView&quality=89",
];
function Initialization() {
  //初始图片
  aImgs.setAttribute("src", imgs[lastIndex]);
  aImgs.style.transition = "all 1s";
  aImgs.style.opacity = "1";
}
Initialization();
//右边按钮类似
btnRight.onclick = function () {
  lastIndex = index;
  aLis[lastIndex].className = "pg";

  index++;
  index %= 8;
  aImgs.setAttribute("src", imgs[index]);
  aLis[index].className = "pg active";
};

//左边按钮类似
btnLeft.onclick = function () {
  lastIndex = index;
  aLis[lastIndex].className = "pg";

  index--;

  if (index < 0) {
    index = imgs.length - 1;
  }

  aImgs.setAttribute("src", imgs[index]);

  aLis[index].className = "pg active";
};
