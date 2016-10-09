function getClass(classname,range){
	if(document.getElementsByClassName){
       return range.getElementsByClassName(classname);
	}else{
       var arr=[];
       var all=range.getElementsByTagName('*');
       for(i=0;i<all.length;i++){
       	if(check(all[i].className,classname)){
       		arr.push(all[i]);
       	}
       }
       return arr;
	}
	
}


function check(tagClass,name){
     var arr=tagClass.split(" ");
     for(i=0;i<arr.length;i++){
     	if(arr[i]==name){
     		return true
     	}
     }
     return false;
}



// textcontent
function text(obj,val){
  if(val==undefined){
  if(obj.textContent!=undefined){
     return obj.textContent;
  }
  else{
    return obj.innerText;
  }
}else{
   if(obj.textContent!=undefined){
      obj.textContent=val;
  }
  else{
     obj.textContent=val;
  }
}

}


// 获取通用样式。
function getStyle(obj,attr){
     if(obj.currentStyle){
      return   obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
}