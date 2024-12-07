// var minute=document.getElementById("minute");
// var second=document.getElementById("second");
// var hour=document.getElementById("hour");
// var date=new.date();
var second=0;
var minute=0;
var hour=0;
var d= new Date;
setInterval(
    function(){
    d=new Date();
    second=d.getSeconds()*6;
    minute=d.getMinutes()*6;
    hour=d.getHours()*30+Math.round(minute/12);
    document.getElementById("minute"),style.transform="rotate("+minute+"deg)";
    document.getElementById("hour"),style.transform="rotate("+hour+"deg)";
    document.getElementById("second"),style.transform="rotate("+second+"deg)";
    },1000
);
