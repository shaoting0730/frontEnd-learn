var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);

var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);

for (var i=0; i<tabs.length; i++){
  tabs[i].onclick = showlist;
}

function showlist() {
    for (var i=0; i<tabs.length; i++){
        if(tabs[i]===this){
         tabs[i].className="active";
         lists[i].className="clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className= "clearfix";
        }
}
}

var seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;

    if( scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed"
    }else {
        seckillNav.className = "seckill-nav";
    }
    console.log(scrollTop);
}

function countTime() {
    var date = new Date();
    var now = date.getTime(); 
    var endDate = new Date("2999-6-01 00:00:00");//设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差                              
    var d, h, m, s, ms;
    if(leftTime >= 0) {
        // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        if(s < 10) {
            s = "0" + s;
        }
        if(m < 10) {
            m = "0" + m;
        }
    } else {
        console.log('已截止')
    }
    document.getElementById("timer").innerHTML = m + "分" + s + "秒";
    
    setTimeout(countTime, 1000);
}

countTime();

