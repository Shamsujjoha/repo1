var candidate;



function countTouches1(event) {

/*var touches = evtent.changedTouches;
	
if(touches.length>1){
	//hasScrolled=false;
	return true;
}*/


  //var x = event.touches[0].screenX;
  //var y = event.touches[0].screenY;
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;

 

  var tName = ["fname","mname","lname"];
  var i,dis,idx;
  var minDis=10000000000.00;
  var myElement;
  var position, pos_x, pos_y;

  for(i=0;i<3;i++){

     myElement=document.getElementById(tName[i]);
     //myElement.value="";
    //myElement.readOnly=true; 
     position = getPosition(myElement);
     //position = myElement.getBoundingClientRect(); 
     pos_x=position.x + (myElement.clientWidth/2);
     pos_y=position.y + (myElement.clientHeight/2);

      dis= Math.sqrt( ((x-pos_x)*(x-pos_x)) + ((y-pos_y)*(y-pos_y)) );
       //dis=(y-pos_y);
       //if(dis<0)dis=dis*-1;

      if(dis<minDis){
        minDis=dis;
        idx=i;
      }


  }

  //var myElement=document.getElementById("fname");
 // var position = getPosition(myElement);
 // var pos_x=position.x + myElement.clientWidth/2;
 // var pos_y=position.y + myElement.clientHeight/2;
  
     myElement=document.getElementById(tName[idx]);
     candidate=myElement;
     //position = getPosition(myElement);
     //pos_x=position.x + (myElement.clientWidth/2);
     //pos_y=position.y + (myElement.clientHeight/2);
     //myElement.value="(" + pos_x + "," + pos_y + ")"+ "("+x+")" ;
  


    // myElement.value= "closest textbox to touchpoint";
   //myElement.readOnly=false; 
   //myElement.focus(); 
   //myElement.scrollIntoView();
	



/*if (event.touches.length ==1) {
		event.preventDefault();
		myElement.focus(); 

	}

*/
  // event.preventDefault();

   // myElement.scrollIntoView();




}




function countTouches2(event) {
        if (event.touches.length ==1) {
		event.preventDefault();
		candidate.focus(); 

	}

}
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };

}