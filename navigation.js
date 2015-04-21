dojo.require("esri.toolbars.navigation");
rp.navigation={};
rp.navigation.openNavigationMod=function(plt,config)
{		
	
	  var Alltop=config.top;
	  this.plt=plt;
	  var map = plt.pool["map"];
      var navToolbar = new esri.toolbars.Navigation(map);
      dojo.on(navToolbar, "onExtentHistoryChange", extentHistoryChangeHandler);
      function extentHistoryChangeHandler () {
          registry.byId("zoomprev").disabled = navToolbar.isFirstExtent();
          registry.byId("zoomnext").disabled = navToolbar.isLastExtent();
        }
      function mouseToPointer(name){
    	  name.onmousemove=function(){
    		 name.style.cursor="pointer"; 
    	  };
    	  name.onmouseout=function(){
    		  name.style.cursor="default";
    	  }
      }
	  document.getElementById("map_zoom_slider").style.top=73+Alltop+"px";
	  document.getElementById("map_zoom_slider").style.webkitUserSelect = "none";
	  var navtop = document.createElement("img");
	  document.body.appendChild(navtop);
	  navtop.style.zlndex = "2000";
	  navtop.style.position = "absolute";
	  navtop.style.display = "block";
	  navtop.setAttribute("src",'assets/images/nav/2.png');
	  navtop.style.left = "8px";
	  navtop.style.top = Alltop+"px";
	  navtop.style.webkitUserSelect = "none";
	  var up = document.createElement("img");
	  document.body.appendChild(up);
	  up.style.zlndex = "2001";
	  up.style.position = "absolute";
	  up.style.display = "block";
	  up.setAttribute("src",'assets/images/nav/3.png');
	  up.setAttribute("alt",'向上平移');
	  up.style.left = "31.5px";
	  up.style.top = Alltop+6+"px";
	  dojo.connect(up,"onclick",function() {
		  map.panUp();
	  });
	  mouseToPointer(up);
	  var down = document.createElement("img");
	  document.body.appendChild(down);
	  down.style.zlndex = "2001";
	  down.style.position = "absolute";
	  down.style.display = "block";
	  down.setAttribute("src",'assets/images/nav/4.png');
	  down.style.left = "31.5px";
	  down.style.top = Alltop+49+"px";
	  dojo.connect(down,"onclick",function() {
		  map.panDown();
	  });
	  mouseToPointer(down);
	  var left = document.createElement("img");
	  document.body.appendChild(left);
	  left.style.zlndex = "2001";
	  left.style.position = "absolute";
	  left.style.display = "block";
	  left.setAttribute("src",'assets/images/nav/5.png');
	  left.style.left = "14.5px";
	  left.style.top = Alltop+24+"px";
	  dojo.connect(left,"onclick",function() {
		  map.panLeft();
	  });
	  mouseToPointer(left);
	  var right = document.createElement("img");
	  document.body.appendChild(right);
	  right.style.zlndex = "2001";
	  right.style.position = "absolute";
	  right.style.display = "block";
	  right.setAttribute("src",'assets/images/nav/6.png');
	  right.style.left = "56px";
	  right.style.top = Alltop+24+"px";
	  dojo.connect(right,"onclick",function() {
		  map.panRight();
	  });
	  mouseToPointer(right);
	  var upleft = document.createElement("img");
	  document.body.appendChild(upleft);
	  upleft.style.zlndex = "2001";
	  upleft.style.position = "absolute";
	  upleft.style.display = "block";
	  upleft.setAttribute("src",'assets/images/nav/16.png');
	  upleft.style.left = "20px";
	  upleft.style.top = Alltop+12+"px";
	  dojo.connect(upleft,"onclick",function() {
		  map.panUpperLeft();
	  });
	  mouseToPointer(upleft);
	  var upright = document.createElement("img");
	  document.body.appendChild(upright);
	  upright.style.zlndex = "2001";
	  upright.style.position = "absolute";
	  upright.style.display = "block";
	  upright.setAttribute("src",'assets/images/nav/17.png');
	  upright.style.left = "47px";
	  upright.style.top = Alltop+12+"px";
	  dojo.connect(upright,"onclick",function() {
		  map.panUpperRight();
	  });
	  mouseToPointer(upright);
	  var downleft = document.createElement("img");
	  document.body.appendChild(downleft);
	  downleft.style.zlndex = "2001";
	  downleft.style.position = "absolute";
	  downleft.style.display = "block";
	  downleft.setAttribute("src",'assets/images/nav/7.png');
	  downleft.style.left = "20px";
	  downleft.style.top = Alltop+37+"px";
	  dojo.connect(downleft,"onclick",function() {
		  map.panLowerLeft();
	  });
	  mouseToPointer(downleft);
	  var downright = document.createElement("img");
	  document.body.appendChild(downright);
	  downright.style.zlndex = "2001";
	  downright.style.position = "absolute";
	  downright.style.display = "block";
	  downright.setAttribute("src",'assets/images/nav/8.png');
	  downright.style.left = "47px";
	  downright.style.top = Alltop+37+"px";
	  dojo.connect(downright,"onclick",function() {
		  map.panLowerRight();
	  });
	  mouseToPointer(downright);
	  var pre = document.createElement("img");
	  document.body.appendChild(pre);
	  pre.style.zlndex = "2001";
	  pre.style.position = "absolute";
	  pre.style.display = "block";
	  pre.setAttribute("src",'assets/images/nav/5.png');
	  pre.style.left = "22px";
	  pre.style.top = Alltop+63+"px";
	  dojo.connect(pre,"onclick",function() {
		  navToolbar.zoomToPrevExtent();
	  });
	  mouseToPointer(pre);
	  var next = document.createElement("img");
	  document.body.appendChild(next);
	  next.style.zlndex = "2001";
	  next.style.position = "absolute";
	  next.style.display = "block";
	  next.setAttribute("src",'assets/images/nav/6.png');
	  next.style.left = "47px";
	  next.style.top = Alltop+63+"px";
	  dojo.connect(next,"onclick",function() {
		  navToolbar.zoomToNextExtent();
	  });
	  mouseToPointer(next);
	  var cursor = document.createElement("img");
	  document.body.appendChild(cursor);
	  cursor.style.zlndex = "2001";
	  cursor.style.position = "absolute";
	  cursor.style.display = "block";
	  cursor.setAttribute("src",'assets/images/nav/12.png');
	  cursor.style.left = "32px";
	  cursor.style.top = Alltop+278+"px";
	  dojo.connect(cursor,"onclick",function() {
		  navToolbar.activate(esri.toolbars.Navigation.PAN);
	  });
	  mouseToPointer(cursor);
	  var expand = document.createElement("img");
	  document.body.appendChild(expand);
	  expand.style.zlndex = "2001";
	  expand.style.position = "absolute";
	  expand.style.display = "block";
	  expand.setAttribute("src",'assets/images/nav/13.png');
	  expand.style.left = "32px";
	  expand.style.top = Alltop+298+"px";
	  dojo.connect(expand,"onclick",function() {
		  navToolbar.activate(esri.toolbars.Navigation.ZOOM_IN);
	  });
	  mouseToPointer(expand);
	  var narrow = document.createElement("img");
	  document.body.appendChild(narrow);
	  narrow.style.zlndex = "2001";
	  narrow.style.position = "absolute";
	  narrow.style.display = "block";
	  narrow.setAttribute("src",'assets/images/nav/14.png');
	  narrow.style.left = "32px";
	  narrow.style.top = Alltop+318+"px";
	  dojo.connect(narrow,"onclick",function() {
		  navToolbar.activate(esri.toolbars.Navigation.ZOOM_OUT);
	  });
	  mouseToPointer(narrow);
	  var earth = document.createElement("img");
	  document.body.appendChild(earth);
	  earth.style.zlndex = "2030";
	  earth.style.position = "absolute";
	  earth.style.display = "block";
	  earth.setAttribute("src",'assets/images/nav/1.png');
	  earth.style.left = "26px";
	  earth.style.top = Alltop+17+"px";	
	  dojo.connect(earth,"onclick",function() {
		  navToolbar.zoomToFullExtent();
	  });
	  mouseToPointer(earth);
	  plt.pool[this.id]=this;
	  }
