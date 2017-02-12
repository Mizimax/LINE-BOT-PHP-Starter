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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],-118.9,-266.6,0,-118.9,-266.6,477.6).s().p("EgfoguKIPypEMAvfgAoMAAKBK/Mg/lAkug");
	this.shape.setTransform(203.5,357.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,407,715), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],33.9,-148.1,0,33.9,-148.1,313.5).s().p("Az/KPMAAAgrbIYNAoIPoJEMAAKA4tg");
	this.shape.setTransform(128,212.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,256,425), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtGFMIAApoIBYAwISmqzIAAlFIErCvIBkg6MAAAAkjIhQAwg");
	this.shape.setTransform(83.9,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,167.8,250.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhA4AiPIgC/wMBA/glWMBA2AlWMguLAAnIAFldIywqyIylKyIgIYPIkuisIymKyIAAE6g");
	this.shape.setTransform(415.5,223.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,831,446.3), null);


(lib.Group_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApZKhIAF/1ISuK0IgFf1g");
	this.shape.setTransform(60.2,136.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_41, new cjs.Rectangle(0,0,120.5,273), null);


(lib.Group_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B12861").s().p("AyqAAISnqzISuKzIynK0g");
	this.shape.setTransform(120.1,69.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F2833").s().p("ApZKhIAF/1ISuK0IgFf1g");
	this.shape_1.setTransform(60.2,205.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B73A4A").s().p("ApQqgISmq0IgFf1IymK0g");
	this.shape_2.setTransform(179.7,205.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0,0,239.6,342.3), null);


(lib.Group_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#483F67").s().p("AyqAAISnqzISuKzIyoK0g");
	this.shape.setTransform(120.5,69.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2740").s().p("ApbUEMAAKgy7IStK0MgAJAy7g");
	this.shape_1.setTransform(60.4,266.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#41385C").s().p("ApO0DISmq0MgAJAy7IymK0g");
	this.shape_2.setTransform(179.9,266.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_39, new cjs.Rectangle(0,0,240,464.5), null);


(lib.Group_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B355F").s().p("AyqAAISnqzISuKzIynK0g");
	this.shape.setTransform(120.8,69.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B213B").s().p("ApddoMAANhGDISuK0MgANBGDg");
	this.shape_1.setTransform(60.6,328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#273055").s().p("ApM9nISmq0MgANBGDIymK0g");
	this.shape_2.setTransform(180.1,328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_38, new cjs.Rectangle(0,0,240.3,586.8), null);


(lib.Group_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQASgRAPgJIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgIIAKgLIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAcIgDAJg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgIIADgLIAwAbIgDAMg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgHIADgNIAwAcIgDANg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAgtIABgUIAwAdIgBATQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcg");
	this.shape.setTransform(8.1,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAvAbg");
	this.shape_1.setTransform(7.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_2.setTransform(6.9,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgbgNIAIgBIAvAcIgIAAg");
	this.shape_3.setTransform(6.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_4.setTransform(5.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgdgMIAMgDIAvAbIgLAEg");
	this.shape_5.setTransform(4.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgegKIAOgHIAvAcIgNAHg");
	this.shape_6.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Group_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQARgPAQgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAIg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbQgDAGAAAEg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgHIADgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAWAOIgwgcIAFACIAwAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcIgGgCg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAGABIAvAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAIgBIAvAbIgIABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIAMgEIAvAbIgLAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhWgPQAbgaAYgOIB6BHQgZAOgaAZg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAQg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("Ag/gcIAGgNIB5BGIgGAOg");
	this.shape_8.setTransform(9.1,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("Ag/gcIAGgOIB5BHIgFAOg");
	this.shape_9.setTransform(8.4,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("Ag+gUQAAgQACgOIB7BGQgCAOAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhHgdIAVgLIB6BGIgWALg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgfIASgHIB5BHQgIAEgKACg");
	this.shape_1.setTransform(14.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.2,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AA4AjIh5hGIAJAAIB7BGIgGABIgFgBg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AA5AjIh6hGIAKABIB5BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AA5AiIh5hHIAHAEIB6BHg");
	this.shape_7.setTransform(6.6,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0.1,0,23.2,9.3), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AA5AiIh5hGIAIADIB5BGg");
	this.shape.setTransform(15.9,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AA5AkIh7hHIAKAAIB6BHQgFgBgEABg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgMABg");
	this.shape_4.setTransform(12.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_5.setTransform(10.8,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhFgfQAJgEAJgDIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhHgeQALgGAKgEIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("Ag9gUQABgNAAgRIB7BHQAAAQgCAOg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("Ag+gYIADgWIB6BHIgDAWg");
	this.shape_1.setTransform(21.2,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFARg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("AhBgcIAJgOIB6BHIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("AhWgPQAZgOAagZIB6BGQgaAZgZAOg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQASgRAPgJIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgIIAKgLIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAcIgDAJg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgIIADgLIAwAbIgDAMg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgHIADgNIAwAcIgDANg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAgtIABgUIAwAdIgBATQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcg");
	this.shape.setTransform(8.1,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAvAbg");
	this.shape_1.setTransform(7.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_2.setTransform(6.9,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgbgNIAIgBIAvAcIgIAAg");
	this.shape_3.setTransform(6.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_4.setTransform(5.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgdgMIAMgDIAvAbIgLAEg");
	this.shape_5.setTransform(4.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgegKIAOgHIAvAcIgNAHg");
	this.shape_6.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQARgPAQgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAIg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbQgDAGAAAEg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgHIADgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAWAOIgwgcIAFACIAwAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcIgGgCg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAGABIAvAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAIgBIAvAbIgIABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIAMgEIAvAbIgLAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhWgPQAbgaAYgOIB6BHQgZAOgaAZg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAQg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("Ag/gcIAGgNIB5BGIgGAOg");
	this.shape_8.setTransform(9.1,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("Ag/gcIAGgOIB5BHIgFAOg");
	this.shape_9.setTransform(8.4,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("Ag+gUQAAgQACgOIB7BGQgCAOAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhHgdIAVgLIB6BGIgWALg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgfIASgHIB5BHQgIAEgKACg");
	this.shape_1.setTransform(14.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.2,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AA4AjIh5hGIAJAAIB7BGIgGABIgFgBg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AA5AjIh6hGIAKABIB5BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AA5AiIh5hHIAHAEIB6BHg");
	this.shape_7.setTransform(6.6,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0.1,0,23.2,9.3), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AA5AiIh5hGIAIADIB5BGg");
	this.shape.setTransform(15.9,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AA5AkIh7hHIAKAAIB6BHQgFgBgEABg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgMABg");
	this.shape_4.setTransform(12.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_5.setTransform(10.8,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhFgfQAJgEAJgDIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhHgeQALgGAKgEIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("Ag9gUQABgNAAgRIB7BHQAAAQgCAOg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("Ag+gYIADgWIB6BHIgDAWg");
	this.shape_1.setTransform(21.2,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFARg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("AhBgcIAJgOIB6BHIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("AhWgPQAZgOAagZIB6BGQgaAZgZAOg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQASgRAPgJIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgIIAKgLIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAcIgDAJg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgIIADgLIAwAbIgDAMg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgHIADgNIAwAcIgDANg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAgtIABgUIAwAdIgBATQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcg");
	this.shape.setTransform(8.1,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAvAbg");
	this.shape_1.setTransform(7.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_2.setTransform(6.9,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgbgNIAIgBIAvAcIgIAAg");
	this.shape_3.setTransform(6.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_4.setTransform(5.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgdgMIAMgDIAvAbIgLAEg");
	this.shape_5.setTransform(4.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgegKIAOgHIAvAcIgNAHg");
	this.shape_6.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQARgPAQgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAIg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgagJIAFgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.7,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbQgDAGAAAEg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgZgHIADgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApddoMAANhGDISuK0MgANBGDg");
	this.shape.setTransform(60.6,258.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_0, new cjs.Rectangle(0,0,121.2,517.6), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAWAOIgwgcIAFACIAwAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAcIgGgCg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAGABIAvAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgvgbIAGAAIAwAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAIgBIAvAbIgIABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgbgMIAIgCIAvAbIgIACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIAMgEIAvAbIgLAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyqAAISnqzISuKzIynK0g");
	this.shape.setTransform(119.5,69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_0, new cjs.Rectangle(0,0,239,138.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhWgPQAbgaAYgOIB6BHQgZAOgaAZg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAQg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("Ag/gcIAGgNIB5BGIgGAOg");
	this.shape_8.setTransform(9.1,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("Ag/gcIAGgOIB5BHIgFAOg");
	this.shape_9.setTransform(8.4,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("Ag+gUQAAgQACgOIB7BGQgCAOAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.Group_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApO0DISmq1MgAJAy8IymK0g");
	this.shape.setTransform(60,197.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(0,0,120.1,395.3), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyqAAISnqzISuKzIynK0g");
	this.shape.setTransform(119.5,69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,239,138.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhHgdIAVgLIB6BGIgWALg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AhFgfIASgHIB5BHQgIAEgKACg");
	this.shape_1.setTransform(14.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.2,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AA4AjIh5hGIAJAAIB7BGIgGABIgFgBg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AA5AjIh6hGIAKABIB5BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AA5AiIh5hHIAHAEIB6BHg");
	this.shape_7.setTransform(6.6,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.1,0,23.2,9.3), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApQqgISmq0IgFf1IymK0g");
	this.shape.setTransform(59.8,136.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,119.7,273), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AA5AiIh5hGIAIADIB5BGg");
	this.shape.setTransform(15.9,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("AA5AkIh7hHIAKAAIB6BHQgFgBgEABg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AhCgiIALgBIB6BGIgMABg");
	this.shape_4.setTransform(12.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_5.setTransform(10.8,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("AhFgfQAJgEAJgDIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhHgeQALgGAKgEIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("Ag9gUQABgNAAgRIB7BHQAAAQgCAOg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("Ag+gYIADgWIB6BHIgDAWg");
	this.shape_1.setTransform(21.2,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag/gaIAFgSIB6BHIgFARg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag/gbIAFgQIB6BHIgFAQg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13100F").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#13100F").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13100F").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#13100F").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#13100F").s().p("AhBgcIAJgOIB6BHIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13100F").s().p("AhCgcIALgOIB6BHIgLAOg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13100F").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13100F").s().p("AhFgaIARgSIB6BHIgRASg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13100F").s().p("AhWgPQAZgOAagZIB6BGQgaAZgZAOg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClippingPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath_1, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClippingPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath_0, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClippingPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An4EgIADyFIPuJGIgDSEg");
	mask.setTransform(50.5,87);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("An4EgIADyFIPuJGIgDSEg");
	this.shape.setTransform(50.5,87);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0,0,101.1,173.9), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An4kfIPupGIADSFIvuJFg");
	mask.setTransform(50.5,87);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("An4kfIPupGIADSFIvuJFg");
	this.shape.setTransform(50.5,87);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0,0,101.1,173.9), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#771B41").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191F37").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVE9IACrcICpBiIgCLdg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVE9IACrcICpBiIgCLdg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVE9IACrcICpBiIgCLdg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVE9IACrcICpBiIgCLdg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVE9IACrcICpBiIgCLdg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151A2F").s().p("AhVE9IACrcICpBiIgCLdg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVk9ICphiIACLcIipBjg");
	mask.setTransform(8.6,41.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A253C").s().p("AhVk9ICphiIACLcIipBjg");
	this.shape.setTransform(8.6,41.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.Group_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101524").s().p("AipAAICphhICqBhIipBig");
	this.shape.setTransform(17,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0D17").s().p("AhUgIIAAhRICpBhIAABSg");
	this.shape_1.setTransform(8.5,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F1320").s().p("AhTAIICohhIAABRIipBig");
	this.shape_2.setTransform(25.5,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_61, new cjs.Rectangle(0,0,34,27.8), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtMLzIAAjDIaZPUIAADDgAtMFjIAAjDIaZPUIAADDgAtMgsIAAtmIaZPTIAANmgABeCKIBpA9Qi2n/i5ErIBsA9QAag+AdAAQAtAAA2CYgAFelJQhYgzg+hjQg2hUgHhOIGmD0QgHBGg3AWQgVAJgYAAQguAAg6ghgAtM1AIAAmGIaZPUIAAGGgAldrfQhYgzg+hiQg2hVgHhOIGmD0QgHBGg3AWQgVAKgZAAQguAAg5gig");
	this.shape.setTransform(84.5,173.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223057").s().p("AtMKWIAAjNIaZPUIAADOgAtMEHIAAjNIaZPUIAADMgAtMiJIAAjNIaZPTIAADNgABeieQhZj9hBCjIhsg/QC5kqC2H/gAtMy7IAAmuIaZPUIAAGugADIsIQA+BiBYAzQBYAzA9gbQA3gVAHhHImmj0QAHBOA2BVgAnzyeQA+BjBYAzQBYAyA9gbQA3gVAHhGImmj0QAHBNA2BVg");
	this.shape_1.setTransform(84.5,203.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,169.1,367.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(8.6,41.6,1,1,0,0,0,8.6,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,17.3,83.2), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_37();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_34();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_31();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_24();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_21();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_18();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_11();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgQAAguQAAguAdgxQAcgyAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_26();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_13();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBiQBBglAshNQAthPgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	mask.setTransform(11.6,4.6);

	// Layer 3
	this.instance = new lib.Group_27();
	this.instance.parent = this;
	this.instance.setTransform(11.2,4.6,1,1,0,0,0,11.2,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ClippingPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,4.6,1,1,0,0,0,11.6,4.6);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	mask.setTransform(11.6,4.6);

	// Layer 3
	this.instance = new lib.Group_14();
	this.instance.parent = this;
	this.instance.setTransform(11.2,4.6,1,1,0,0,0,11.2,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ClippingPath_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,4.6,1,1,0,0,0,11.6,4.6);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgYQAggTAdgCQAcgCAVAMIB5BGQgVgMgbACQgdADggASg");
	mask.setTransform(11.6,4.6);

	// Layer 3
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(11.2,4.6,1,1,0,0,0,11.2,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ClippingPath();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,4.6,1,1,0,0,0,11.6,4.6);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	mask.setTransform(11.7,4.6);

	// Layer 3
	this.instance = new lib.Group_28();
	this.instance.parent = this;
	this.instance.setTransform(11.7,4.6,1,1,0,0,0,11.7,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	this.shape.setTransform(11.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0.2,0,23.1,9.3), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	mask.setTransform(11.7,4.6);

	// Layer 3
	this.instance = new lib.Group_15();
	this.instance.parent = this;
	this.instance.setTransform(11.7,4.6,1,1,0,0,0,11.7,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	this.shape.setTransform(11.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0.2,0,23.1,9.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	mask.setTransform(11.7,4.6);

	// Layer 3
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(11.7,4.6,1,1,0,0,0,11.7,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AAGAkIh5hGQAWAMAbgDQAcgCAggSIB6BGQglAVggAAQgWAAgTgKg");
	this.shape.setTransform(11.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.2,0,23.1,9.3), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	mask.setTransform(8.5,8.5);

	// Layer 3
	this.instance = new lib.Group_29();
	this.instance.parent = this;
	this.instance.setTransform(8.5,8.6,1,1,0,0,0,8.5,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	mask.setTransform(8.5,8.5);

	// Layer 3
	this.instance = new lib.Group_16();
	this.instance.parent = this;
	this.instance.setTransform(8.5,8.6,1,1,0,0,0,8.5,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	mask.setTransform(8.5,8.5);

	// Layer 3
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(8.5,8.6,1,1,0,0,0,8.5,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgmANQAAgigMgaQgMgYgVgNIB5BHQAtAZABBJg");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.2,0.1,16.7,16.9), null);


(lib.ClipGroup_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	mask.setTransform(5.8,2.1);

	// Layer 3
	this.instance = new lib.Group_36();
	this.instance.parent = this;
	this.instance.setTransform(5.4,2.1,1,1,0,0,0,5.4,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	this.shape.setTransform(5.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_7, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	mask.setTransform(5.8,2);

	// Layer 3
	this.instance = new lib.Group_33();
	this.instance.parent = this;
	this.instance.setTransform(5.6,2,1,1,0,0,0,5.6,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	this.shape.setTransform(5.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_6, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	mask.setTransform(8.2,8.4);

	// Layer 3
	this.instance = new lib.Group_30();
	this.instance.parent = this;
	this.instance.setTransform(8.2,8.4,1,1,0,0,0,8.2,8.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	mask.setTransform(5.8,2.1);

	// Layer 3
	this.instance = new lib.Group_23();
	this.instance.parent = this;
	this.instance.setTransform(5.4,2.1,1,1,0,0,0,5.4,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	this.shape.setTransform(5.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	mask.setTransform(5.8,2);

	// Layer 3
	this.instance = new lib.Group_20();
	this.instance.parent = this;
	this.instance.setTransform(5.6,2,1,1,0,0,0,5.6,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	this.shape.setTransform(5.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	mask.setTransform(8.2,8.4);

	// Layer 3
	this.instance = new lib.Group_17();
	this.instance.parent = this;
	this.instance.setTransform(8.2,8.4,1,1,0,0,0,8.2,8.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	mask.setTransform(5.8,2.1);

	// Layer 3
	this.instance = new lib.Group_10();
	this.instance.parent = this;
	this.instance.setTransform(5.4,2.1,1,1,0,0,0,5.4,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogXAcAQIAvAaQgcgOgnAWg");
	this.shape.setTransform(5.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	mask.setTransform(5.8,2);

	// Layer 3
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(5.6,2,1,1,0,0,0,5.6,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag5gGQAogYAcARIAvAbQgcgPgnAWg");
	this.shape.setTransform(5.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,11.7,4.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	mask.setTransform(8.2,8.4);

	// Layer 3
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(8.2,8.4,1,1,0,0,0,8.2,8.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AgkAPQgWgMgLgZQgMgZAAgkIB5BHQABAjAMAaQAKAXATAMg");
	this.shape.setTransform(8.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,16.5,16.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	mask.setTransform(7.3,12.9);

	// Layer 3
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(7.3,12.9,1,1,0,0,0,7.3,12.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAdgyQAcgxAogXIAwAcQgoAXgdAyQgbAwAAAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	mask.setTransform(13.9,16.9);

	// Layer 3
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(13.8,16.9,1,1,0,0,0,13.8,16.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13100F").s().p("AiKBhQABhIAshOQAuhOA+glIB8BHQhBAlgsBNQgtBPABBJg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,27.7,33.8), null);


(lib.Group_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogYAdAQQAcARABAuQAAAvgdAwQgcAygpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2.1,1,1,0,0,0,5.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26201E").s().p("AstSJQgugaAAhJIgDxpQgBhJAuhOQAthOBAglIWFsxQA/glAuAaQAuAaAABJIADRpQAABKgtBOQgtBPhAAkI2FMxQglAVgfAAQgWAAgTgLgADEr4IsvHXQhAAlgtBOQguBPABBJIACOpQABBJAtAaQAuAaA/gkIMwnYQA/gkAuhPQAthOAAhKIgDupQAAhJgugaQgTgKgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AsAF1IWFswIB8BII2FMvg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag6IRIgExpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,231.8,1,1,0,0,0,8.2,8.4);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.4,48.7,1,1,0,0,0,8.5,8.6);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AnVDIIMwnXIB7BIIswHXg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.6,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,185,241.6), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogYAdAQQAcARABAuQAAAvgdAwQgcAygpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2.1,1,1,0,0,0,5.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26201E").s().p("AstSJQgugaAAhJIgDxpQgBhJAuhOQAthOBAglIWFsxQA/glAuAaQAuAaAABJIADRpQAABKgtBOQgtBPhAAkI2FMxQglAVgfAAQgWAAgTgLgADEr4IsvHXQhAAlgtBOQguBPABBJIACOpQABBJAtAaQAuAaA/gkIMwnYQA/gkAuhPQAthOAAhKIgDupQAAhJgugaQgTgKgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AsAF1IWFswIB8BII2FMvg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag6IRIgExpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,231.8,1,1,0,0,0,8.2,8.4);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.4,48.7,1,1,0,0,0,8.5,8.6);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AnVDIIMwnXIB7BIIswHXg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.6,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,185,241.6), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogYAdAQQAcARABAuQAAAvgdAwQgcAygpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2.1,1,1,0,0,0,5.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26201E").s().p("AstSJQgugaAAhJIgDxpQgBhJAuhOQAthOBAglIWFsxQA/glAuAaQAuAaAABJIADRpQAABKgtBOQgtBPhAAkI2FMxQglAVgfAAQgWAAgTgLgADEr4IsvHXQhAAlgtBOQguBPABBJIACOpQABBJAtAaQAuAaA/gkIMwnYQA/gkAuhPQAthOAAhKIgDupQAAhJgugaQgTgKgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13100F").s().p("AsAF1IWFswIB8BII2FMvg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#13100F").s().p("Ag6IRIgExpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,231.8,1,1,0,0,0,8.2,8.4);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.4,48.7,1,1,0,0,0,8.5,8.6);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13100F").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13100F").s().p("AnVDIIMwnXIB7BIIswHXg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.6,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,185,241.6), null);


// stage content:
(lib.Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lisght+ShDow
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(415.5,224,1,1,0,0,0,415.5,223.2);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(341.2,834.5,1,1,0,0,0,83.9,125.2);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128,655.3,1,1,0,0,0,128,212.5);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(628.5,597.3,1,1,0,0,0,203.5,357.5);
	this.instance_3.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:628.5,y:597.3}},{t:this.instance_2,p:{x:128}},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3,p:{x:628.5,y:597.3}},{t:this.instance_2,p:{x:128}},{t:this.instance_1},{t:this.instance}]},3).to({state:[]},1).to({state:[{t:this.instance_3,p:{x:628,y:601.3}},{t:this.instance_2,p:{x:127.9}},{t:this.instance_1},{t:this.instance}]},15).to({state:[{t:this.instance_3,p:{x:628.5,y:597.3}},{t:this.instance_2,p:{x:128}},{t:this.instance_1},{t:this.instance}]},5).wait(11));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC4153").s().p("AACAAIgCABIgBAAg");
	this.shape.setTransform(484.6,365.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBgIADgRIACACIB/hKIAAASIh/BKgAg9AtIAAgSIB/hJIAAASIh/BJgAg9gGIAAgSIABABIB+hLIAAASIgfATIgFACIhaA1g");
	this.shape_1.setTransform(481.4,371.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#280916").s().p("AhACBQAFgFABgMIgBAAIAAgPIB/hKIAAAPQgBAOgIAGIh+BJIADgCgAg7AsIB/hKIAAAjIh/BKgAg7AFIABgMIBag2IABAAIADgCIAggSIAAAhIh/BKIAAgVgAg6grIgBgGIAAgCIgBgCIAAgCIgBgCIAegRIAegRIAWgOIAYgMIAAgBIAVgNIACAIIAAAGIAAASIh+BKg");
	this.shape_2.setTransform(481.2,371.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#50122C").s().p("Ag/AlIAegQIgeARIAAgBgAAtgbIASgKIABACIgVANg");
	this.shape_3.setTransform(481.4,362);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#801D47").s().p("AAAA9IAFADIAAAPQAAAMgFAFIgCACIgBABIgCABIAFgngAACAsIACghIABAAIAAAjgAAEg7IgDgfIACgBIAAABIABACIAAACIABACIAAACIABAGIAAASgAABhfIgBgEIABACIAAABIAAABIAAAAg");
	this.shape_4.setTransform(474.7,374.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhCArIAAgBIACACIgCgBgABCgNIgCgIQACAHAAAGgAA6gkIgBgCIAEAGgAA2gsIAAABIACADg");
	this.shape_5.setTransform(481.4,360.6);

	this.instance_4 = new lib.Group_61();
	this.instance_4.parent = this;
	this.instance_4.setTransform(479.5,383.4,0.631,0.631,0,0,180,17.5,14.8);

	this.instance_5 = new lib.Symbol1copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(475.7,344,0.378,0.377,0,0,180,91,189.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#801D47").s().p("AAEBjIgBAAIgDgCQgEgGAAgLIAAgQIAEgCIAGAmIgCgBgAgEAKIABAAIACAjIgDABgAgFhMIABgGIAAgBIABgEIAAgCIABgBIAAAAIACABIgDAeIgCABgAAAhgIAAgBIAAAAIAAgCIAAADIAAABg");
	this.shape_6.setTransform(205.7,579.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC4153").s().p("AABABIgCgBIADABg");
	this.shape_7.setTransform(195.8,570);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBAZIAAgSIB+BKIADgCIADARIgGADgAA9AtIh+hJIAAgSIB+BJIABASgAA9gGIhag1IgFgCIgfgTIAAgSIB+BLIABgBIgBASg");
	this.shape_8.setTransform(199.1,576.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#50122C").s().p("AAiAVIAeARIAAAAgAg/giIABgDIASAKIACAEg");
	this.shape_9.setTransform(199,566.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#280916").s().p("Ag6A6QgIgGgBgOIAAgPIB/BKIAAAQIgBAAQABALAFAGIADACgAhDAGIAAgkIB/BJIAAAkgAhDgvIAAgjIAgATIADACIABAAIBaA1IABAOIAAATgAhDhkIAAgRIAAgGIACgHIAVALIAAABIAYAOIAWANIAeARIAeARIgBABIAAACIgBAEIAAABIgBAGIAAASg");
	this.shape_10.setTransform(199.2,576.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("ABDAqIAAAAIgCADgAhAgVIgBAHIAAAHQAAgHABgHgAg4gmIgBADIgDADIAEgGgAg1grIAAAAIgCACIACgCg");
	this.shape_11.setTransform(199.1,565.3);

	this.instance_6 = new lib.Group_61();
	this.instance_6.parent = this;
	this.instance_6.setTransform(200.9,588.1,0.631,0.631,0,0,0,17.5,14.8);

	this.instance_7 = new lib.Symbol1copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(204.7,548.7,0.378,0.377,0,0,0,91,189.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).wait(16));

	// BlackScreen
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgyUAICyhiIAALoIiyBlgA9NSjIAAycIQCJWIAAScgANJ2fIQFpLIAASjIwFJLgAlOy0IAAruIC2BlIAALwg");
	this.shape_12.setTransform(341,445.2);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off:false},0).wait(14).to({_off:true},1).wait(16));

	// Layer 1
	this.instance_8 = new lib.ClipGroup_24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(205,533.8,1,1,0,0,0,50.5,87);

	this.instance_9 = new lib.ClipGroup_23();
	this.instance_9.parent = this;
	this.instance_9.setTransform(477,330.8,1,1,0,0,0,50.5,87);

	this.instance_10 = new lib.ClipGroup_18();
	this.instance_10.parent = this;
	this.instance_10.setTransform(345,605.8,1,1,0,0,0,8.6,41.6);

	this.instance_11 = new lib.ClipGroup_16();
	this.instance_11.parent = this;
	this.instance_11.setTransform(317,292.3,1,1,0,0,0,8.6,41.6);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(291,536.8,1,1,0,0,0,8.6,41.6);

	this.instance_13 = new lib.Group_41();
	this.instance_13.parent = this;
	this.instance_13.setTransform(506.4,676.4,1,1,0,0,0,60.2,136.5);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.ClipGroup_24();
	this.instance_14.parent = this;
	this.instance_14.setTransform(205,533.8,1,1,0,0,0,50.5,87);

	this.instance_15 = new lib.ClipGroup_23();
	this.instance_15.parent = this;
	this.instance_15.setTransform(477,330.8,1,1,0,0,0,50.5,87);

	this.instance_16 = new lib.ClipGroup_22();
	this.instance_16.parent = this;
	this.instance_16.setTransform(636,634.8,1,1,0,0,0,8.6,41.6);

	this.instance_17 = new lib.ClipGroup_21();
	this.instance_17.parent = this;
	this.instance_17.setTransform(663,617.8,1,1,0,0,0,8.6,41.6);

	this.instance_18 = new lib.Group_1_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(625.9,676.4,1,1,0,0,0,59.8,136.5);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.ClipGroup_20();
	this.instance_19.parent = this;
	this.instance_19.setTransform(493,447.8,1,1,0,0,0,8.6,41.6);

	this.instance_20 = new lib.ClipGroup_19();
	this.instance_20.parent = this;
	this.instance_20.setTransform(465,465.8,1,1,0,0,0,8.6,41.6);

	this.instance_21 = new lib.ClipGroup_18();
	this.instance_21.parent = this;
	this.instance_21.setTransform(345,605.8,1,1,0,0,0,8.6,41.6);

	this.instance_22 = new lib.ClipGroup_17();
	this.instance_22.parent = this;
	this.instance_22.setTransform(342,308.3,1,1,0,0,0,8.6,41.6);

	this.instance_23 = new lib.ClipGroup_16();
	this.instance_23.parent = this;
	this.instance_23.setTransform(317,292.3,1,1,0,0,0,8.6,41.6);

	this.instance_24 = new lib.ClipGroup_15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(395,334.8,1,1,0,0,0,8.6,41.6);

	this.instance_25 = new lib.Group_40();
	this.instance_25.parent = this;
	this.instance_25.setTransform(566,641.7,1,1,0,0,0,119.8,171.1);

	this.instance_26 = new lib.Group_3_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(266.5,415.7,1,1,0,0,0,119.5,69.2);
	this.instance_26.alpha = 0.602;

	this.instance_27 = new lib.ClipGroup_13();
	this.instance_27.parent = this;
	this.instance_27.setTransform(317,520.8,1,1,0,0,0,8.6,41.6);

	this.instance_28 = new lib.Group_4_0();
	this.instance_28.parent = this;
	this.instance_28.setTransform(325.9,613.4,1,1,0,0,0,60,197.7);
	this.instance_28.alpha = 0.602;

	this.instance_29 = new lib.Group_39();
	this.instance_29.parent = this;
	this.instance_29.setTransform(266,578.7,1,1,0,0,0,120,232.2);

	this.instance_30 = new lib.Group_6_0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(416.1,209.1,1,1,0,0,0,119.5,69.2);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.Group_7_0();
	this.instance_31.parent = this;
	this.instance_31.setTransform(356,467.9,1,1,0,0,0,60.6,258.8);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.Group_38();
	this.instance_32.parent = this;
	this.instance_32.setTransform(415.5,433.3,1,1,0,0,0,120.1,293.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0E1320").s().p("EggdgSuMBA8glgMgADBLBMhA1Alcg");
	this.shape_13.setTransform(207.9,360.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1625").s().p("EhA4gABMBA3gldMBA6AldMhA6Algg");
	this.shape_14.setTransform(416.7,720);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16192F").s().p("EggdASyMAADhLAMBA3AleMAAABK/g");
	this.shape_15.setTransform(623.3,359.9);

	this.instance_33 = new lib.Group_35();
	this.instance_33.parent = this;
	this.instance_33.setTransform(193.4,359.8,1,1,0,0,0,12.2,14);

	this.instance_34 = new lib.Group_32();
	this.instance_34.parent = this;
	this.instance_34.setTransform(193.4,323.4,1,1,0,0,0,12.2,14);

	this.instance_35 = new lib.Group_25();
	this.instance_35.parent = this;
	this.instance_35.setTransform(124.5,393.3,1,1,0,0,0,92.5,120.8);

	this.instance_36 = new lib.Group_22();
	this.instance_36.parent = this;
	this.instance_36.setTransform(193.4,513.8,1,1,0,0,0,12.2,14);

	this.instance_37 = new lib.Group_19();
	this.instance_37.parent = this;
	this.instance_37.setTransform(193.4,477.4,1,1,0,0,0,12.2,14);

	this.instance_38 = new lib.Group_12();
	this.instance_38.parent = this;
	this.instance_38.setTransform(124.5,547.3,1,1,0,0,0,92.5,120.8);

	this.instance_39 = new lib.Group_9();
	this.instance_39.parent = this;
	this.instance_39.setTransform(372.4,410.8,1,1,0,0,0,12.2,14);

	this.instance_40 = new lib.Group_6();
	this.instance_40.parent = this;
	this.instance_40.setTransform(372.4,374.4,1,1,0,0,0,12.2,14);

	this.instance_41 = new lib.Group();
	this.instance_41.parent = this;
	this.instance_41.setTransform(303.5,444.3,1,1,0,0,0,92.5,120.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AoCN9QgugaAAhJIgDupQAAhKAthOQAthOBAglIMvnYQBAgkAuAaQAtAaAABJIADOpQAABJgtBPQgtBOhAAlIsvHXQgmAWgfAAQgWAAgSgLg");
	this.shape_16.setTransform(288.6,460);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AoCN9QgugaAAhJIgDupQAAhJAthPQAthOBAglIMwnXQA/glAtAaQAuAaAABJIADOpQAABKgtBOQgtBOhAAlIsvHYQgmAVgfAAQgWAAgSgLg");
	this.shape_17.setTransform(109.6,563);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AoCN9QgugaAAhJIgDupQAAhJAthPQAthOBAglIMwnXQA/glAtAaQAuAaAABJIADOpQAABKgtBOQgtBPhAAkIsvHYQgmAVgfAAQgWAAgSgLg");
	this.shape_18.setTransform(109.6,409);

	this.instance_42 = new lib.ClipGroup_22();
	this.instance_42.parent = this;
	this.instance_42.setTransform(636,634.8,1,1,0,0,0,8.6,41.6);

	this.instance_43 = new lib.ClipGroup_21();
	this.instance_43.parent = this;
	this.instance_43.setTransform(663,617.8,1,1,0,0,0,8.6,41.6);

	this.instance_44 = new lib.Group_40();
	this.instance_44.parent = this;
	this.instance_44.setTransform(566,641.7,1,1,0,0,0,119.8,171.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},19).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_44},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_43},{t:this.instance_42},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_25},{t:this.instance_17},{t:this.instance_16}]},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(416,479.5,832,959.9);
// library properties:
lib.properties = {
	width: 832,
	height: 959,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;