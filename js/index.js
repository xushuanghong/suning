window.onload=function(){
//top
var xx=$(".xx")[0]
var topbg=$(".topbg")[0]
var oo=$(".oo")[0]
xx.onmouseover=function(){
	xx.style.background="url(img/index.png) no-repeat -15px 0"
}
xx.onmouseout=function(){
	xx.style.background="url(img/index.png) no-repeat"
}
xx.onclick=function(){
	topbg.style.display="none"
	oo.style.display="block"
}
oo.onmouseover=function(){
	oo.style.background="url(img/index.png) no-repeat -15px -15px"
}
oo.onmouseout=function(){
	oo.style.background="url(img/index.png) no-repeat 0 -15px"
}
oo.onclick=function(){
  topbg.style.display="block"
	oo.style.display="none"
}
var tops=$("a",$(".top")[0])
for (var i = 0; i < tops.length; i++) {
	tops[i].onmouseover=function(){
		this.style.color="#f60"
		this.style.textDecoration="underline"
	}
	tops[i].onmouseout=function(){
		this.style.color="#666"
		this.style.textDecoration="none"
	}
};
var gouwuche=$(".gouwuche")[0]
var gwczz=getNext(gouwuche)
gwczz.onmouseover=function(){

	gouwuche.style.background="url(img/biao5.png) no-repeat"
	this.style.color="#f60"
		this.style.textDecoration="underline"
		
}
gwczz.onmouseout=function(){
	gouwuche.style.background="url(img/biao4.png) no-repeat"
	this.style.color="#666"
		this.style.textDecoration="none"
}
var daohangs=$(".wbdaohangs")
var daohangs1=$(".doahang1")
for (var i = 0; i < daohangs.length; i++) {
	daohangs[i].index=i;
	daohangs[i].onmouseover=function(){
		this.style.background="#fff"
		daohangs1[this.index].style.display="block"
		this.style.borderLeft="1px solid #ddd"
		this.style.borderRight="1px solid #ddd"
	}
	daohangs[i].onmouseout=function(){
		this.style.background="#f5f5f5"
		daohangs1[this.index].style.display="none"
		this.style.borderLeft="1px solid #f5f5f5"
		this.style.borderRight="1px solid #f5f5f5"
	}
};
var guanbi=$(".fuanbi")[0]
guanbi.onclick=function(){
	daohangs1[0].style.display="none"
}

var guanbi1=$(".fuanbi")[1]
guanbi1.onclick=function(){
	daohangs1[4].style.display="none"
}

//top end

//header
var ufonts=$(".undersfont")
for (var i = 0; i < ufonts.length; i++) {
	ufonts[i].index=i
	ufonts[i].onmouseover=function(){
		this.style.color="#f60"
		this.style.textDecoration="underline"
	}
	ufonts[i].onmouseout=function(){
		if (this.index==0||this.index==2) {
			this.style.textDecoration="none"
		}else{
			this.style.color="#999"
		this.style.textDecoration="none"
		}	
	}
};

//header end
//index
var indexs=$("a",$(".index")[0])
for (var i = 0; i < indexs.length; i++) {
	indexs[i].onmouseover=function(){
	this.style.color="#f60"
	this.style.textDecoration="underline"	
	}
    indexs[i].onmouseout=function(){
    	this.style.color="#333"
		this.style.textDecoration="none"
    }
};
var inr=$(".inr")[0]
inr.onmouseover=function(){
	inr.style.textDecoration="underline"	
}
inr.onmouseout=function(){
	inr.style.textDecoration="none"	
}
//index end
//跳转楼层
var tz=$(".tiaozhuan")[0]
var tzs=$("li",tz)
var appers=$(".apperbox")
var k1=true,k2=true,k3=true,k4=true;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var tzimgs=$(".tzimg")
var tzdivs=$(".tzdiv")
var tzimg=$("img",tzs[0])[0]
var tzdiv=$("div",tzs[0])[0]

var imgs=$("img")
for (var ni = 0; ni < imgs.length; ni++) {
    if (obj.scrollTop<offsetWindow().height) {
      imgs[ni].src=imgs[ni].getAttribute("wlsrc")
    };
    hover(imgs[ni],function(){
      this.style.opacity="0.8"
    },function(){
      this.style.opacity="0.9"
    })
   };
if (obj.scrollTop>appers[0].offsetTop-offsetWindow().height) {
   tz.style.display="block";
}else{
	tz.style.display="none";
}
var tzn=0;
for (var i = 0; i < tzs.length-1; i++) {
  	tzs[i].index=i
  tzs[i].onclick=function(){
     for (var j = 0; j < tzs.length; j++) {
  	 tzimg=$("img",tzs[j])[0]
	 tzdiv=$("div",tzs[j])[0]	
       tzimg.style.display="block";
       tzdiv.style.display="none";
  	  };
  	 tzimg=$("img",tzs[this.index])[0]
	 tzdiv=$("div",tzs[this.index])[0]	
       tzimg.style.display="none";
       tzdiv.style.display="block";	
      var top=appers[this.index].offsetTop
      animate(obj,{scrollTop:top},200)
    }
    hover(tzs[i],function(){
       tzimgs[this.index].style.display="none";
       tzdivs[this.index].style.display="block";	
    },function(){
    	obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	if (obj.scrollTop>=appers[this.index].offsetTop&&obj.scrollTop<appers[this.index+1].offsetTop) {
    		tzimgs[this.index].style.display="none";
            tzdivs[this.index].style.display="block";
    	}else{
    	tzimgs[this.index].style.display="block";
        tzdivs[this.index].style.display="none";
        }
    })
};
 tzs[10].onclick=function(){
     for (var j = 0; j < tzs.length; j++) {
  	 tzimg=$("img",tzs[j])[0]
	 tzdiv=$("div",tzs[j])[0]	
       tzimg.style.display="block";
       tzdiv.style.display="none";
  	  };
  	 tzimg=$("img",tzs[10])[0]
	 tzdiv=$("div",tzs[10])[0]	
       tzimg.style.display="none";
       tzdiv.style.display="block";	
      var top=appers[10].offsetTop
      animate(obj,{scrollTop:top},300)
    }
    hover(tzs[i],function(){
       tzimgs[10].style.display="none";
       tzdivs[10].style.display="block";	
    },function(){
    	obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	if (obj.scrollTop>=appers[10].offsetTop) {
    		tzimgs[10].style.display="none";
            tzdivs[10].style.display="block";
    	}else{
    	tzimgs[10].style.display="block";
        tzdivs[10].style.display="none";
        }
    })




window.onscroll=function(){
  obj=document.documentElement.scrollTop?document.documentElement:document.body;
  for (var i = 0; i < imgs.length; i++) {
    if (obj.scrollTop>imgs[i].offsetTop-offsetWindow().height) {
      imgs[i].src=imgs[i].getAttribute("wlsrc")
     };
    
   };
  if (obj.scrollTop>appers[0].offsetTop-offsetWindow().height) {
  	if (k1) {
      k1=false;
  		tz.style.display="block";
  		k2=true;
  	};
   
}else{
	if (k2) {
		k2=false;
		tz.style.display="none";
		k1=true;
	};
}
    if (obj.scrollTop>offsetWindow().height) {
    	if (k3) {
    		k3=false
    	animate(ssf,{top:0},300,function(){
    		k4=true
    	})
    	};
    }else if (obj.scrollTop<offsetWindow().height) {
    	if (k4) {
    		k4=false
    	animate(ssf,{top:-50},300,function(){
    		k3=true
    	})
    	};   	
    };

setTimeout(function(){
	tiao();
	if (obj.scrollTop>=appers[10].offsetTop) {
	for (var j = 0; j < appers.length; j++) {
	tzimgs[j].style.display="block"
	tzdivs[j].style.display="none"
	};
	tzimgs[10].style.display="none"
	tzdivs[10].style.display="block"
};
},300)
function tiao(){
  if (obj.scrollTop>=appers[tzn].offsetTop&&obj.scrollTop<appers[tzn+1].offsetTop) {
	for (var j = 0; j < appers.length; j++) {
	tzimgs[j].style.display="block"
	tzdivs[j].style.display="none"
	};
	tzimgs[tzn].style.display="none"
	tzdivs[tzn].style.display="block"
 };
 tzn++
  if (tzn==appers.length-1) {
	tzn=0
  };
}




};


//跳转楼层结束
//rightfixed
var tips=$(".tip")
var rfs=$(".rftop1-1")
var rfss=$(".rftop1-fu")
var btoms=$(".btom")
for (var i =0; i < btoms.length; i++) {
	btoms[i].index=i
	btoms[i].onmouseover=function(){
       rfs[this.index].style.display="none"
       rfss[this.index].style.display="block"
       tips[this.index].style.background="#FFAA01"
       tips[this.index].style.color="#383838"
      if (this.index<4) {
       animate(tips[this.index],{left:-47},300)
       }else if(this.index==6){
        animate(tips[this.index],{left:-131},300)
       }else{
       	animate(tips[this.index],{left:-73},300)
       }
	}
	btoms[i].onmouseout=function(){
       rfs[this.index].style.display="block"
       rfss[this.index].style.display="none"
       tips[this.index].style.background="#383838"
       tips[this.index].style.color="#FFAA01"
       animate(tips[this.index],{left:0},300)
	}
};
btoms[btoms.length-1].onclick=function(){
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	animate(obj,{scrollTop:0},1000)
}
var rf2=$(".rftop21box")[0]
var rf21=$(".rft211")[0]
var rf21fu=$(".rft211-fu")[0]
var rf22=$(".rft212")[0]
rf2.onmouseover=function(){
	rf21.style.display="none"
	rf21fu.style.display="block"
	rf2.style.background="#FFAA01"
	rf22.style.color="#383838"
}
rf2.onmouseout=function(){
	rf21.style.display="block"
	rf21fu.style.display="none"
	rf2.style.background="#383838"
	rf22.style.color="#FFf"
}

//rightfixed end
//搜索漂浮
var ssf=$(".sousofixedbg")[0]
var gouwuche1=$(".gouwuche")[1]
var gwcz=getNext(gouwuche1)
gwcz.onmouseover=function(){

	gouwuche1.style.background="url(img/biao5.png) no-repeat"
	this.style.color="#f60"
		this.style.textDecoration="underline"
		
}
gwcz.onmouseout=function(){
	gouwuche1.style.background="url(img/biao4.png) no-repeat"
	this.style.color="#666"
		this.style.textDecoration="none"
}
var ssrs=$("a",$(".zd")[0])
for (var i = 0; i < ssrs.length; i++) {
	ssrs[i].onmouseover=function(){
		this.style.color="#f60"
		this.style.textDecoration="underline"
	}
	ssrs[i].onmouseout=function(){
		this.style.color="#666"
		this.style.textDecoration="none"
	}
};
var sortfixed=$(".sortfixed")[0]
var listboxfixed=$(".listboxfixed")[0]
sortfixed.onmouseover=function(){
	this.style.background="#2b2b2b"
	animate(listboxfixed,{height:452},300)
}
sortfixed.onmouseout=function(){
	animate(listboxfixed,{height:0},300,function(){
		sortfixed.style.background="#fa0"
	})
}
//搜索漂浮 end
//选项卡
var tab1=$(".tab1")
var tab2=$(".tab2")
var a1,a2;
var card1=$(".card1")
var card2=$(".card2")
for (var i = 0; i < card1.length; i++) {
	tab1[i].index=i
    tab2[i].index=i
	tab1[i].onmouseover=function(){
		a1=$("a",tab1[this.index])[0]
        a2=$("a",tab2[this.index])[0]
		this.style.borderBottomWidth="3px"
		tab2[this.index].style.borderBottomWidth="0px"
		card1[this.index].style.display="block"
		card2[this.index].style.display="none"
		a1.style.color="#222"
		a1.style.fontFamily="宋体"
		a1.style.fontWeight="bold"
		a2.style.color="#666"
		a2.style.fontFamily="微软雅黑"
		a2.style.fontWeight="normal"

	}
	tab2[i].onmouseover=function(){
		a1=$("a",tab1[this.index])[0]
        a2=$("a",tab2[this.index])[0]
		this.style.borderBottomWidth="3px"
		tab1[this.index].style.borderBottomWidth="0px"
		card2[this.index].style.display="block"
		card1[this.index].style.display="none"
		a2.style.color="#222"
		a2.style.fontFamily="宋体"
		a2.style.fontWeight="bold"
		a1.style.color="#666"
		a1.style.fontFamily="微软雅黑"
		a1.style.fontWeight="normal"
	}
};
//选项卡 end
//底部轮播
var rsleft=$(".rslun")[0]
var rsright=$(".rslun")[1]
var rssbox=$(".rsbox")[0]
var rslis=$("li",$(".rslunli")[0])
var key1=true,key2=true;
var n=0;
function move(){
	n++;
    if (n>2) {
     n=0;
    };
    if (n<0) {
     n=2
    };
    for (var i = 0; i < rslis.length; i++) {
    	rslis[i].style.background="#fff"
    };
	animate(rssbox,{marginLeft:-1000},500,function(){
	var first=getFirst(rssbox)
	rssbox.appendChild(first)
	this.style.marginLeft="0"
	setTimeout(function(){
  		key1=true
  	},200)
	})	
	rslis[n].style.background="#fa0"
}
for (var i = 0; i < rslis.length; i++) {
	rslis[i].index=i
	rslis[i].onmouseover=function(){
		for (var j = 0; j < rslis.length; j++) {
			rslis[j].style.background="#fff"
		};
		this.style.background="#fa0"
        var that=this
		animate(rssbox,{marginLeft:-1000*this.index},500)
	}
};
rsright.onclick=function(){
  if (key1) {
  	key1=false;
  	move()
  };
}
var m=3;
rsleft.onclick=function(){
  if (key2) {
  	key2=false;
  	m--;
  	 if (m>2) {
     m=0;
    };
    if (m<0) {
     m=2
    };
    for (var i = 0; i < rslis.length; i++) {
    	rslis[i].style.background="#fff"
    };
    var last=getLast(rssbox)
  	var first=getFirst(rssbox)
  	rssbox.insertBefore(last,first)
  	rssbox.style.marginLeft="-1000px";
  	animate(rssbox,{marginLeft:0},500,function(){
  	setTimeout(function(){
  		key2=true
  	},200)	
	})
	rslis[m].style.background="#fa0"	
  };
}
var shequ=$(".shequ")[0]
var rsli1=getFirst(rsleft)
var rsli2=getFirst(rsright)
shequ.onmouseover=function(){
	rsleft.style.display="block"
	rsright.style.display="block"
}
shequ.onmouseout=function(){
	rsleft.style.display="none"
	rsright.style.display="none"
}
rsleft.onmouseover=function(){
   rsli1.style.opacity="0.8"
}
rsleft.onmouseout=function(){
  rsli1.style.opacity="0.5"
}
rsright.onmouseover=function(){
  rsli2.style.opacity="0.8"
}
rsright.onmouseout=function(){
  rsli2.style.opacity="0.5"
}
//底部轮播 end
//分类
var sortList=$(".sort-list")
var sdetail=$(".sortdetail")
for (var i = 0; i < sdetail.length; i++) {
	sortList[i].index=i
	hover(sortList[i],
	function(){
       this.style.background="#fff"
       var sortLista=$("a",this)
       for (var i = 0; i < sortLista.length; i++) {
       	sortLista[i].style.color="#2b2b2b"
       };
       sdetail[this.index].style.width="800px"
       sdetail[this.index].style.zIndex="2"
      
	},
	function(){
		
		this.style.background="#2b2b2b"
		var sortLista=$("a",this)
		for (var i = 0; i < sortLista.length; i++) {
      sortLista[i].style.color="#eee"
       };
       
       sdetail[this.index].style.zIndex="1"
       animate(sdetail[this.index],{width:0},300)
       
	})
};
//分类 end

//inpu
var input=document.getElementsByName('search')[0]
var search=$(".searchxiala")[0]
input.onfocus=function(){
if (input.value=="年货一路省到家") {	
       	input.value=""
       }
  search.style.display="block"

}
input.onblur=function(){
  if (input.value=="") {
  	input.value="年货一路省到家"
  };
  search.style.display="none"
}
//input end
var trightbg=$(".trightbg")[0]
	trightbg.onmouseover=function(){
		this.style.background="#eee"
	}
	trightbg.onmouseout=function(){
		this.style.background="#f5f5f5"
	}
var zd=$(".zd")[0]
	zd.onmouseover=function(){
		this.style.background="#eee"
	}
	zd.onmouseout=function(){
		this.style.background="rgba(255,255,255,0.8)"
	}


//banner
var banner=$(".banner")
var ctrl1=$(".ctrl1")
var ctrlDot=$(".ctrl-dot")
var nmm=0;
var on=$(".on")
var bnr1=$(".bnr1")
var bnrt=setInterval(smallbanner,2000)
function smallbanner(){
  nmm++
  if (nmm==bnr1.length) {
  	nmm=0;
  };
  for (var j = 0; j < bnr1.length; j++) {
  	bnr1[j].style.display="none"
    on[j].style.background="#fff"
    on[j].parentNode.style.display="none"
    on[j].parentNode.parentNode.className="ctrl1"
    bnr1[nmm].style.opacity="0.5"
  };
   bnr1[nmm].style.display="block"
   on[nmm].style.background="#fa0"
   on[nmm].parentNode.style.display="block"
   on[nmm].parentNode.parentNode.className="ctrl2"
   on[nmm].parentNode.parentNode.background="rgba(0,0,0,0.8)"
   animate(bnr1[nmm],{opacity:1},100)

};
function smallbannerfan(){
  if (nmm==0) {
  	nmm=bnr1.length;
  };
  nmm--
  for (var j = 0; j < bnr1.length; j++) {
  	bnr1[j].style.display="none"
    on[j].style.background="#fff"
    on[j].parentNode.style.display="none"
    on[j].parentNode.parentNode.className="ctrl1"
    bnr1[nmm].style.opacity="0.5"
  };
   bnr1[nmm].style.display="block"
   on[nmm].style.background="#fa0"
   on[nmm].parentNode.style.display="block"
   on[nmm].parentNode.parentNode.className="ctrl2"
   animate(bnr1[nmm],{opacity:1},100)
}
var leftIcon=$(".left-icon")[0]
var rightIcon=$(".right-icon")[0]
var bannersbox=$(".bannerbg")[0]

hover(bannersbox,function(){
	clearInterval(bnrt)
	leftIcon.style.display="block"
	rightIcon.style.display="block"
 },function(e){
	bnrt=setInterval(smallbanner,2000)
	leftIcon.style.display="none"
	rightIcon.style.display="none"
})
leftIcon.onmouseover=function(){	
	this.style.background="rgba(0,0,0,0.4)"
}
leftIcon.onmouseout=function(){
	this.style.background="rgba(0,0,0,0.2)"
}
rightIcon.onmouseover=function(){
	this.style.background="rgba(0,0,0,0.4)"
}
rightIcon.onmouseout=function(){
	this.style.background="rgba(0,0,0,0.2)"
}

rightIcon.onclick=function(){
	smallbanner()
}
leftIcon.onclick=function(){
   smallbannerfan()
}
for (var i = 0; i < ctrl1.length; i++) {
ctrl1[i].index=i
hover(ctrl1[i],function(){
if (this.index==0) {
   	nmm=0
   };
    if (this.index==1) {
   	nmm=3
   };
   if (this.index==2) {
   	nmm=4
   };
   if (this.index==3) {
   	nmm=6
   };
   if (this.index==4) {
   	nmm=8
   };
   if (this.index==5) {
   	nmm=10
   };
   if (this.index==6) {
   	nmm=12
   };
   if (this.index==7) {
   	nmm=14
   };
   if (this.index==8) {
   	nmm=16
   };
   if (this.index==9) {
   	nmm=18
   };
   if (this.index==10) {
   	nmm=20
   };
for (var j = 0; j < bnr1.length; j++) {
  	bnr1[j].style.display="none"
    on[j].style.background="#fff"
    on[j].parentNode.style.display="none"
    on[j].parentNode.parentNode.className="ctrl1"
  };
   bnr1[nmm].style.display="block"
   on[nmm].style.background="#fa0"
   on[nmm].parentNode.style.display="block"
   on[nmm].parentNode.parentNode.className="ctrl2"
},function(){})
}
for (var i = 0; i < bnr1.length; i++) {
	on[i].index=i
	on[i].onmouseover=function(){
	nmm=this.index
	for (var j = 0; j < bnr1.length; j++) {
  	bnr1[j].style.display="none"
    on[j].style.background="#fff"
   };
    bnr1[nmm].style.display="block"
    on[nmm].style.background="#fa0"
   };
};
//banner eng
var showTitle=$(".show-title")
for (var i = 0; i < showTitle.length; i++) {
  showTitle[i].index=i
  showTitle[i].onmouseover=function(){
    for (var j = 0; j < showTitle.length; j++) {
      showTitle[j].style.color="#666"
    };
    this.style.color="#f60"
  }
};

var lifeIcon=$(".life-icon")
var lifes=$(".life")
lifes[0].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[0].style.background="url(img/fn-1.png)"
  la.style.color="#fa0"

}
lifes[0].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[0].style.background="url(img/fn17.png)"
   la.style.color="#666"
}
lifes[1].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[1].style.background="url(img/fn-2.png)"
  la.style.color="#fa0"

}
lifes[1].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[1].style.background="url(img/fn18.png)"
   la.style.color="#666"
}
lifes[2].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[2].style.background="url(img/fn-3.png)"
  la.style.color="#fa0"

}
lifes[2].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[2].style.background="url(img/fn19.png)"
   la.style.color="#666"
}
lifes[3].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[3].style.background="url(img/fn-4.png)"
  la.style.color="#fa0"

}
lifes[3].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[3].style.background="url(img/fn20.png)"
   la.style.color="#666"
}
lifes[4].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[4].style.background="url(img/fn-5.png)"
  la.style.color="#fa0"

}
lifes[4].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[4].style.background="url(img/fn21.png)"
   la.style.color="#666"
}
lifes[5].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[5].style.background="url(img/fn-6.png)"
  la.style.color="#fa0"

}
lifes[5].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[5].style.background="url(img/fn22.png)"
   la.style.color="#666"
}
lifes[6].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[6].style.background="url(img/fn-7.png)"
  la.style.color="#fa0"

}
lifes[6].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[6].style.background="url(img/fn23.png)"
   la.style.color="#666"
}
lifes[7].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[7].style.background="url(img/fn-8.png)"
  la.style.color="#fa0"

}
lifes[7].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[7].style.background="url(img/fn24.png)"
   la.style.color="#666"
}
lifes[8].onmouseover=function(){
  var la=$("a",this)[0]
  lifeIcon[8].style.background="url(img/fn-9.png)"
  la.style.color="#fa0"

}
lifes[8].onmouseout=function(){
  var la=$("a",this)[0]
  lifeIcon[8].style.background="url(img/fn25.png)"
   la.style.color="#666"
}

















































}	