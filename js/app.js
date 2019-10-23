
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("navbar").style.padding = "0px 0px";
document.getElementById("logo").style.height = "25px";
document.getElementById("navbar").style.fontSize = "16px";
document.getElementById("icon").style.width = "20px";
document.getElementById("icon1").style.width = "20px";
} else {
document.getElementById("navbar").style.padding = "10px 1px";
document.getElementById("logo").style.height = "75px";
document.getElementById("navbar").style.fontSize = "24px";
document.getElementById("icon").style.width = "40px";
document.getElementById("icon1").style.width = "40px";
}
}



AOS.init({
  duration: 1500,
});
