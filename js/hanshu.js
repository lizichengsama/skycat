$(function(){
	var mains=$('.main')[0]
	var bannner=$('.baner',mains)[0]
	var bacc=$('.bacg',bannner)[0]
	var bigBox=$('.bigbox',bacc)[0]
	var mid_dle=$('.middle',bigBox)[0]
	var imgBox=$('.img-box',mid_dle)[0]
	var imgs=$('img',imgBox)
	var lists=$('.list',mid_dle)[0]
	var liss=$('li',lists)
	iw=parseInt(getStyle(imgs[0],'width'))

	var index=0;
	var next=0;

	imgs[0].style.opacity=1
	imgs[1].style.opacity=0
	imgs[2].style.opacity=0
	imgs[3].style.opacity=0
	imgs[4].style.opacity=0


	// 透明轮播图
	var t=setInterval(moves,1000)

	function moves(){

		next++;
		if(next==imgs.length){
			next=0;
		}
		for(var i=0;i<liss.length;i++){
			liss[i].className=''
		}	
		animate(imgs[index],{opacity:0},500)	
		liss[next].className='klick'	
		animate(imgs[next],{opacity:1},500)
		index=next;
	}
	bacc.onmouseover=function(){
		clearInterval(t)
	}
	bacc.onmouseout=function(){
		t=setInterval(moves,1000)
	}



	for(var aa=0;aa<liss.length;aa++){
		liss[aa].aas=aa;
		liss[aa].onmouseover=function(){
			for(var j=0;j<liss.length;j++){
				liss[j].className=''
				animate(imgs[j],{opacity:0},500)
			}
			liss[this.aas].className='klick'
			animate(imgs[this.aas],{opacity:1},500)
			next=this.aas;
			index=next;
		}
	}





	var alists=$('.lists',mains)[0];
	var cl1=$('.c1',alists);
	// console.log(cl1[1])
	// var bimgs=$('img',cl1)[0];
	// console.log(bimgs)

	for(var i=0;i<cl1.length;i++){
		cl1[i].onmouseover=function(){
			var bimgs=$('img',this)[0]
			animate(bimgs,{opacity:0.7},10)
		}
		cl1[i].onmouseout=function(){
			var bimgs=$('img',this)[0]
			animate(bimgs,{opacity:1},10)
		}
	}

	var hotta=$('.hot',mains)[0];
	var hottb=$('.bottb',hotta)[0];
	var twfoe=$('.twfo',hottb)[0];
	var blists=$('li',twfoe)


	for(var j=0;j<blists.length;j++){
		blists[j].onmouseover=function(){
			var wuli=$('.uli1',this)[0]
			wuli.style.opacity=0.7
		}
		blists[j].onmouseout=function(){
			var wuli=$('.uli1',this)[0]
			wuli.style.opacity=0
		}
	}


	var five=$('.fiv',mains)[0]
	var firas=$('.firas',five)
	// console.log(firas.length)
	// var fifth=$('.fift',five)
	// console.log(fifth.length)

	for(var i=0;i<firas.length;i++){
		firas[i].onmouseover=function(){
			var imges=$('img',this)[0]
			animate(imges,{width:150,height:150,top:-5},500)
		}
		firas[i].onmouseout=function(){
			var imges=$('img',this)[0]
			animate(imges,{width:140,height:140,top:0},500)
		}
	}



// 封装函数
	function feng(aa){
	
	var yongb=$('.yongb',mains)[aa]

	var pings=$('.ping',yongb)[0]

	var pinks=$('.pink',pings)
	// console.log(pinks.length)
	// var aka=$('.akaga',pinks)[0]
	// var aimgs=$('img',aka)
	// console.log(aimgs)
	

	for(var i=0;i<pinks.length;i++){
		pinks[i].onmouseover=function(){
			var aimgs=$('img',this)[0]
			animate(aimgs,{marginLeft:-15},500)
		}
		pinks[i].onmouseout=function(){
			var aimgs=$('img',this)[0]
			animate(aimgs,{marginLeft:0},500)
		}
		
	}

	var colorful=$('.colorful',yongb)[0]
	var prst=$('.prst',colorful)

	for(var m=0;m<prst.length;m++){
		prst[m].onmouseover=function(){
			var imgas=$('img',this)[0]
			animate(imgas,{marginLeft:-15},500)
		}
		prst[m].onmouseout=function(){
			var imgas=$('img',this)[0]
			animate(imgas,{marginLeft:0},500)
		}
	}
	
}
	for(var k=0;k<6;k++){
		feng(k)
	}


 	//动态隐藏显示搜索栏 	 
	var head=$('.head')[0]
	var head_title=$('.head_title',head)[0]
	


	window.onscroll=function(){
		var ht=document.documentElement.scrollTop||document.body.scrollTop;
		// console.log(ht)
		if(ht>1000){
			animate(head_title,{top:0},500)
		}else{
			animate(head_title,{top:-50},500)
		}
	}
	
 	//动态隐藏显示搜索栏 结束   
    


 	



 	// 跳楼机

 	var smalltt=$('.samlltt',mains)
	// console.log(smalltt[0].offsetTop)
	var daohan=$('.daohan',head)[0]
	var clists=$('li',daohan)
	// console.log(clists[0])



	var newArr=[];
 	for(var m=0;m<smalltt.length;m++){
 		newArr.push(smalltt[m].offsetTop)
	}



	// console.log(newArr)
	window.onscroll=function(){
		var ht=document.documentElement.scrollTop||document.body.scrollTop;
		for(var i=0;i<clists.length;i++){
			clists[i].index=i;
			if(newArr[i]<ht+800){
			for(var j=0;j<clists.length;j++){
				clists[j].style.background=""
			}
			clists[i].style.background="#dd2727"
			}
		}
	}
	window.onscroll()

	for(var aa=0;aa<clists.length;aa++){
		clists[aa].onclick=function(){
			animate(document.documentElement,{scrollTop:smalltt[this.index].offsetTop},500)
			animate(document.body,{scrollTop:smalltt[this.index].offsetTop},500)
		}
		
	}
	if(aa=clists.length-1){
		clists[aa].onclick=function(){
			animate(document.documentElement,{scrollTop:0},500)
			animate(document.body,{scrollTop:0},500)
		}
	}


	// 跳楼机结束
	
	// 按需加载
	

	// var imgBoxs=$('img',yongb)

	// var newArr2=[];
	// for(var i=0;i<yongb.length;i++){
	// 	newArr2.push(yongb[i].offsetTop)
	// }
	// console.log(newArr2)


	// for(var j=0;j<newArr2.length;j++){
	// 	if(newArr2[j]<)
	// 	var imgsa=$('img',yongb[j])
	// 	for(var k=0;k<imgsa.length;k++){
	// 		imgsa[k].src=imgsa[k].getAttribute("asrc")
	// 		// 将储存在自定义类名中的图片名赋给系统的类名中
	// 	}
	// }


	// 按需加载结束







	// var sigi=$('.sigi',mains)[0]
	// var cnxh=$('.cainixihuan',sigi)[0]
	// var rexia=$('.rexia',cnxh)

	// for(var i=0;i<rexia.length;i++){
	// 	rexia[i].onmouseover=function(){
	// 		this.style.border='1px solid #dd2727'
	// 	}
	// }


	// 下拉框
	var head_nav=$('.head_nav')[0]
	// console.log(head_nav)
	var ul2=$('.ul2',head_nav)[0]
	var mine=$('.mine',ul2)[0]
	var auls=$('ul',mine)[0]
	// console.log(auls)

	hover(mine,function(){
		auls.style.display="block"
	},function(){
		auls.style.display="none"
	})

	var coll=$('.coll',ul2)[0]
	var auls1=$('ul',coll)[0]

	hover(coll,function(){
		auls1.style.display="block"
	},function(){
		auls1.style.display="none"
	})


	var erwm=$('.erwm',ul2)[0]
	var atimg=$('img',erwm)[0]
	// console.log(atimg)

	hover(erwm,function(){
		atimg.style.display="block"
	},function(){
		atimg.style.display="none"
	})

	var dva=$('.dva',ul2)[0]
	var suop=$('.suop',dva)[0]

	hover(dva,function(){
		suop.style.display="block"
	},function(){
		suop.style.display="none"
	})


	var bigMap=$('.bigmap',ul2)[0]
	var map=$('.map',bigMap)[0]

	hover(bigMap,function(){
		map.style.display="block"
	},function(){
		map.style.display="none"
	})


	// 轮播左面的下拉框
	var aleft=$('.left',bannner)[0]
	var left_nav=$('.left_nav',aleft)
	// console.log(left_nav)

	var lft_nav=$('.lft_nav',aleft)
	// console.log(lft_nav)

	for(var i=0;i<left_nav.length;i++){
		left_nav[i].index=i;

		hover(left_nav[i],function(){
			lft_nav[this.index].style.display="block";
		},function(){
			lft_nav[this.index].style.display="none";
		})
	}



	// fix定位的动态效果
	var biank=$('.biank',head)[0]
	var tequan=$('.tequan',biank)
	var fudk=$('.fudk',biank)
	var erweima=$('.erweima',biank)[0]

	for(var j=0;j<tequan.length;j++){
		tequan[j].index=j;

		hover(tequan[j],function(){
			// animate(fudk[this.index],{opacity:1},500)
			animate(fudk[this.index],{left:-100},500)
			fudk[this.index].style.display="block"
		},function(){
			// animate(fudk[this.index],{opacity:0},500)
			animate(fudk[this.index],{left:-130},500)
			fudk[this.index].style.display="none"
		})
	}


	var t2=$('.tequana',biank)[0]
	hover(t2,function(){
		erweima.style.display="block"
	},function(){
		erweima.style.display="none"
	})





})


    
    
  