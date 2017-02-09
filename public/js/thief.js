(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnINPIAYhbIArgnIBNgEIAXAFQAZAEAJABQAPAAAhgnIATgSQASgVgDgJIgihbIgwjiIgOhuIhbjcIgnh9IAPhDIAchbIB0j6IBzi/QAJgVAMgUQAXgpAJAAQAOAABCg6IHBAAQiKGFktE/IAAEhIAOB9IAwDOIAFBEIArA+IAKAUQAJAVAAAMQAAATgFBgQAAATgEA/Ig1AJIg+AFIgmgFIg5gTIgnAdIhNAJIh4AAIhkAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-87.6,91.5,175.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABoN9IgFhNIATgbQAVgcAIgDQAPgEAwgUIAOg5Ig+giIgrgwIhvhRIhthqIkbkuIh/kEQAJjfGQoDIFhAAIAAAgQAAAygDAKQgFATAFBuIgdB9IhDBqIiYCjIgPAeQgOAhAAAJQAAAOgnBgICLCiIA+BXIAVAMQAXAMAJAAQAKAAAWAXQAWAWADAMQAFAPA1A+IAZAeQAbAdAPADQAPADAeAdIAlAkQAOAJAwArIAABSIgJA+Ig1AwIgIAPQgIARgDAMIgPA+IghAmQg/AigOAAQgJAAhJAOIhIAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-89.2,102.5,178.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.8,143.4,1,1,-10.5,0,0,-40.5,-78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.8,x:89.5,y:140},1).to({regX:-40.4,scaleX:1,scaleY:1,rotation:12,x:88.4,y:133.8},1).to({rotation:23.3,x:88,y:120.5},1).to({regX:-2.6,regY:-79.8,scaleX:1,scaleY:1,rotation:34.5,x:125.8,y:130.1},1).to({regX:-40.4,regY:-78.2,scaleX:1,scaleY:1,rotation:23.3,x:88,y:120.5},1).to({rotation:12,x:88.4,y:133.8},1).to({regX:-40.5,scaleX:1,scaleY:1,rotation:0.8,x:89.5,y:140},1).to({rotation:-10.5,x:90.8,y:143.4},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.6,136.2,1,1,8,0,0,45.8,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-5.8,x:133.2,y:133.1},1).to({scaleX:1,scaleY:1,rotation:-19.8,x:121.7,y:125.8},1).to({regX:45.7,regY:-87.6,scaleX:1,scaleY:1,rotation:-33.6,x:129.2,y:112.7},1).to({regX:12.4,regY:-81.5,scaleX:1,scaleY:1,rotation:-47.5,x:100.7,y:131.5},1).to({regX:45.7,regY:-87.6,scaleX:1,scaleY:1,rotation:-33.6,x:129.2,y:112.7},1).to({regX:45.8,regY:-87.5,scaleX:1,scaleY:1,rotation:-19.8,x:121.7,y:125.8},1).to({scaleX:1,scaleY:1,rotation:-5.8,x:133.2,y:133.1},1).to({rotation:7.9,x:134.6,y:136.2},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIxJJIgJhWQgngmgJgPQgJgMgsgfQgFgDgTgWQgPgSgJAAQgJAAgbgOIgagPIgiAAIBRBqIAbArQAbAsgBAJIAFA3QADAvgCAIQgCAFgBATIqEAAIgei2Ig5hSIg1g1IhWgwIhggOIg6A1IgYBWIg+BqIgsA+IhWAwIg+gOIg1hDIAAhqIAhhXQAYgUAVgWQAtgugDgMQgDgMASgzIATgvIgPhqIg1gYIg1gJIgwgdIAUgqIg5gUIg2AAIgFhMIALhEIhOhbIAAiaIAshRIBuhNICjAAIAaAEQAbAHAJAIQAPAOA1AsIAmA1IAYAyIAABLIAYAcIBEgPIA+g0IAriLIAAg/IBIgvIBlgdIBfAAIBXgZICPAAIBgAdIBlA/IBMBbIAZAmQAZAnADAKQAFAOA/BfIBRBEICQA0QBzAnAPAAICQAAIBRAYIAABpIhbAdIg5A5IgNAVQgNAXgDAJQgUA4AAAQQAAATAGBIQAAAOgZA6Ig1AhQhHAigPAAQgQAAgPAGQgUAHgHAQQgFAOgEAiIgFAwIgFA2QgEAmgFAJQgFAHgIARQgJAQgMAIQgTAOg5APgAuSheIAAAMIAhAIIAOATIgIAhIAcgLIAdgoIgSgVIgfgJgAvAkSIgSAQIAABGIAqALIAwAAQASgeABgGQADgFgDgoIgKgZIgtAAg");
	this.shape.setTransform(109,70.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.9,301.2);


// stage content:
(lib.RECOVER_Untitled5_20172817594 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(258.5,233.7,1.237,1.238,0,0,0,111.1,175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396,216.8,269.7,383.6);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;