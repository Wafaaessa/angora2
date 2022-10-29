$(document).ready(function(){
    let boxWidth =  $('.box').outerWidth()
    $(".sideNav").animate({left:`-${boxWidth}`},1000)

// nav////
$(".sideNav span").click(function(){
    let boxWidth =  $('.box').outerWidth()
    if($(".sideNav").css('left')==='0px'){
     $(".sideNav").animate({left:`-${boxWidth}`},1000)
 

    }
    else{
    $(".sideNav").animate({left:`0px`},1000)

    }
})
// close//
let closebtn=document.querySelector(".closebtn");
closebtn.addEventListener('click', close)
function close() {
    let boxWidth =  $('.box').outerWidth()
    $(".sideNav").animate({left:`-${boxWidth}`},1000)
}
// slide down
    $(".para1").slideDown(1000)
    $(".para2").slideUp(1000)
    $(".para3").slideUp(1000)
    $(".para4").slideUp(1000)

    $(".sing1").click(function(){
    $(".para1").slideToggle(1000)
    $(".para2").slideUp(1000)
    $(".para3").slideUp(1000)
    $(".para4").slideUp(1000)
})
$(".sing2").click(function(){
    $(".para2").slideToggle(1000)
    $(".para1").slideUp(1000)
    $(".para3").slideUp(1000)
    $(".para4").slideUp(1000)

})
$(".sing3").click(function(){
    $(".para3").slideToggle(1000)
    $(".para1").slideUp(1000)
    $(".para2").slideUp(1000)
    $(".para4").slideUp(1000)

})
$(".sing4").click(function(){
    $(".para4").slideToggle(1000)
    $(".para1").slideUp(1000)
    $(".para2").slideUp(1000)
    $(".para3").slideUp(1000)

})


// count down////////////////
let d = document.querySelector("#d")
let h = document.querySelector("#h")
let m = document.querySelector("#m")
let s = document.querySelector("#s")

var countDownDate =new Date("dec 5, 2022 ").getTime();
var x =setInterval(function(){
    var now = new Date().getTime()
    var distance = countDownDate -now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

d.innerHTML= `${days} D`;
h.innerHTML=`${hours} h`;
m.innerHTML=`${minutes} m`;
s.innerHTML=`${seconds} s`
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

// max length textarea//////////////////
var maxLen = 100;
$("textarea").keyup(function(){
    var length = $(this).val().length
    var textLen = maxLen- length;


if(textLen <= 0){
   $("#char").html("your available character finished")
}else{
   $("#char").html(textLen);

}
})
})

