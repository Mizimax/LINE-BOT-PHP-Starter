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


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#223057").s().p("AtMSAIAAjNIaZAAIAADNgAtMLxIAAjNIaZAAIAADNgAtMFgIAAjNIaZAAIAADNgAtMrRIAAmuIaZAAIAAGug");
	this.shape.setTransform(0,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtMTdIAAjDIaZAAIAADDgAtMNNIAAjDIaZAAIAADDgAtMG9IAAtlIaZAAIAANlgAtMtWIAAmGIaZAAIAAGGg");
	this.shape_1.setTransform(0,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-134.7,169.1,269.6);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggegSuMBA9glgMgACBLBMhA3Alcg");
	this.shape.setTransform(207.9,359.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,415.7,719.8), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAAtgiCIJxllMgLTBJsIpoFig");
	this.shape.setTransform(67,253.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,134,507.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAEDgj8IC6hsMgKhBJUIjZB9g");
	this.shape.setTransform(44.6,240.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,89.1,481.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAEDgj8IC6hsMgKhBJUIjZB9g");
	this.shape.setTransform(44.6,240.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,89.1,481.8), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],-244.4,-148.1,0,-244.4,-148.1,418.6).s().p("EguogJEIgOvgQAEgpAWgyQAthlBXgyINIniMBN9gUSMAAKBK1MhA1Algg");
	this.shape.setTransform(299.9,359.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,599.8,719), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAEDgj8IC6hsMgKhBJUIjZB9g");
	this.shape.setTransform(44.6,240.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,89.1,481.8), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhA+AlaMgAKhK1MBBbgleMBA2AlgMhOPAUPItVHqIgVAQQgaAVgWAbQhHBWgHBxIAFOqMAc0BBpg");
	this.shape.setTransform(416.9,479.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,833.8,958.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBFgg9IM9ngMgJnBIxIuIIKg");
	this.shape.setTransform(76,259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,152,518), null);


(lib.Group_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262F53").s().p("AgqCzIABmWIBUAxIgBGWg");
	this.shape.setTransform(4.3,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191F37").s().p("AhGgHIA5ghIBUAwIg5Ahg");
	this.shape_1.setTransform(7.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C101C").s().p("Agbi6IA4ghIgBGWIg4Ahg");
	this.shape_2.setTransform(11.4,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_42, new cjs.Rectangle(0,0,14.3,49), null);


(lib.Group_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262F53").s().p("AgqCzIABmXIBUAyIgBGXg");
	this.shape.setTransform(4.3,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191F37").s().p("AhGgIIA5ggIBUAwIg5Ahg");
	this.shape_1.setTransform(7.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C101C").s().p("Agbi6IA4ghIgBGWIg4Ahg");
	this.shape_2.setTransform(11.4,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_41, new cjs.Rectangle(0,0,14.3,49), null);


(lib.Group_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E204E").s().p("Ap9S2MAAJgxGITyLbMgAJAxGg");
	this.shape.setTransform(63.8,201.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#601E27").s().p("Aq/lEICOhSITwLaIiMBSg");
	this.shape_1.setTransform(71.3,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF3C4D").s().p("AhB35ICMhSMgAJAxFIiMBSg");
	this.shape_2.setTransform(134.1,234.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0,0,141.6,395.6), null);


(lib.Group_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E204E").s().p("Ap9S2MAAJgxGITyLbMgAJAxGg");
	this.shape.setTransform(63.8,201.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#601E27").s().p("Aq/lEICNhSITyLaIiNBSg");
	this.shape_1.setTransform(71.3,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40141A").s().p("AhB35ICMhSMgAJAxFIiMBSg");
	this.shape_2.setTransform(134.2,234.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_39, new cjs.Rectangle(0,0,141.7,395.6), null);


(lib.Group_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323E6E").s().p("EggngSmMBBCgljMAANBKwMhBBAljgA+YxUMAAMBFpMA8mgi/MgANhFqg");
	this.shape.setTransform(222.9,367.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191F37").s().p("EghnASJMBBCgljICNBSMhBCAlig");
	this.shape_1.setTransform(215.2,124.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191F37").s().p("EgA+AkvMgAOhKvICMBRMAANBKwg");
	this.shape_2.setTransform(7.7,483.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262F53").s().p("EgA/AiNMgANhFrICMBSMAANBFrg");
	this.shape_3.setTransform(409.8,251.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262F53").s().p("A/ZQ2MA8mgi9ICNBSMg8mAi+g");
	this.shape_4.setTransform(216.5,586.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_38, new cjs.Rectangle(0,0,431.7,727), null);


(lib.Group_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQAQgPARgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgJIADgJIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAGABIAvAcg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbIgGAAg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAcIgHAAg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQAQgPARgLIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagIIAGgJIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgIIAEgJIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgJAbQgcgRAAgtIABgTIAvAcIgBATQAAAtAcARg");
	this.shape_14.setTransform(3.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0,0,14.6,26), null);


(lib.Group_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape_1.setTransform(8.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAbIgHABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegKIAOgHIAvAbIgNAHg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhWgPQAYgYAbgQIB6BHQgcAQgXAYg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhFgaQAJgLAIgHIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgbIALgPIB6BHIgKAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(9,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_9.setTransform(8.4,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("Ag/gZIAFgTIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("Ag+gUQAAgQACgOIB7BHQgCANAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,16.8,17), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhHgdQANgGAIgFIB6BGQgIAGgNAFg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhGggQAKgCAIgEIB6BHQgIAEgJACg");
	this.shape_1.setTransform(14.1,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AA4AkIh6hHQAGABAFgBIB6BHg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AA4AjIh5hGIAJABIB6BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AA6AiIh7hGIAJADIB6BGg");
	this.shape_7.setTransform(7.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0.9,0,22.4,9.3), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AA5AiIh6hGIAJADIB6BGQgFgCgEgBg");
	this.shape.setTransform(15.9,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AA4AjIh6hGIAKAAIB6BHg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_4.setTransform(12.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhDghIAOgDIB5BGIgNADg");
	this.shape_5.setTransform(10.8,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhFggIASgGIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhHgdIAVgLIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("Ag9gUQABgNAAgRIB7BHIgCAeg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_1.setTransform(21.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag/gaIAFgSIB6BGIgFASg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("AhCgcIALgOIB6BGIgLAPg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("AhFgaQAIgHAJgLIB6BHQgJALgIAHg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("AhWgPQAbgPAYgZIB6BHQgYAYgbAQg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQAQgPARgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgJIADgJIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAGABIAvAcg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbIgGAAg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAcIgHAAg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQAQgPARgLIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagIIAGgJIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgIIAEgJIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgJAbQgcgRAAgtIABgTIAvAcIgBATQAAAtAcARg");
	this.shape_14.setTransform(3.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,14.6,26), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape_1.setTransform(8.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAbIgHABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegKIAOgHIAvAbIgNAHg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhWgPQAYgYAbgQIB6BHQgcAQgXAYg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhFgaQAJgLAIgHIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgbIALgPIB6BHIgKAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(9,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_9.setTransform(8.4,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("Ag/gZIAFgTIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("Ag+gUQAAgQACgOIB7BHQgCANAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,16.8,17), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhHgdQANgGAIgFIB6BGQgIAGgNAFg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhGggQAKgCAIgEIB6BHQgIAEgJACg");
	this.shape_1.setTransform(14.1,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AA4AkIh6hHQAGABAFgBIB6BHg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AA4AjIh5hGIAJABIB6BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AA6AiIh7hGIAJADIB6BGg");
	this.shape_7.setTransform(7.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0.9,0,22.4,9.3), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AA5AiIh6hGIAJADIB6BGQgFgCgEgBg");
	this.shape.setTransform(15.9,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AA4AjIh6hGIAKAAIB6BHg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_4.setTransform(12.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhDghIAOgDIB5BGIgNADg");
	this.shape_5.setTransform(10.8,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhFggIASgGIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhHgdIAVgLIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("Ag9gUQABgNAAgRIB7BHIgCAeg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_1.setTransform(21.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag/gaIAFgSIB6BGIgFASg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("AhCgcIALgOIB6BGIgLAPg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("AhFgaQAIgHAJgLIB6BHQgJALgIAHg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("AhWgPQAbgPAYgZIB6BHQgYAYgbAQg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgogBQAQgPARgKIAwAbQgQAJgRARg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgJIAIgJIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagJIAGgJIAvAcIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgDAIg");
	this.shape_9.setTransform(3.9,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgIIAEgKIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgJIADgJIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgIAbQgdgQAAguIABgTIAwAcIgBAUQAAAsAbAQg");
	this.shape_14.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVANIgvgbIAGABIAvAcg");
	this.shape_1.setTransform(8.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVAOIgvgcIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbIgGAAg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAcIgHAAg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegJIAOgIIAvAcIgNAGg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgoAAQAQgPARgLIAwAcQgRAJgQAQg");
	this.shape.setTransform(10.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgcgHIAKgMIAwAbIgLAMg");
	this.shape_1.setTransform(8.4,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgbgIIAIgKIAvAbIgIAKg");
	this.shape_2.setTransform(7.4,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgagIIAGgJIAvAbIgGAJg");
	this.shape_3.setTransform(6.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_4.setTransform(6.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgagJIAGgIIAvAbIgFAIg");
	this.shape_5.setTransform(5.6,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgagJIAFgIIAwAbIgFAIg");
	this.shape_6.setTransform(5.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgZgJIAEgIIAvAbIgEAIg");
	this.shape_7.setTransform(4.6,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgZgJIAEgJIAvAcIgEAIg");
	this.shape_8.setTransform(4.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgZgIIAEgJIAvAbIgDAJg");
	this.shape_9.setTransform(3.9,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgZgJIAEgJIAvAbIgDAKg");
	this.shape_10.setTransform(3.5,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgZgIIADgKIAwAbIgDAKg");
	this.shape_11.setTransform(3.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgYgHIACgMIAwAcIgDALg");
	this.shape_12.setTransform(2.9,14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgZgGIADgOIAwAbIgDAOg");
	this.shape_13.setTransform(2.7,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgJAbQgcgRAAgtIABgTIAvAcIgBATQAAAtAcARg");
	this.shape_14.setTransform(3.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,14.6,26), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AAVANIgvgbIAGACIAvAbg");
	this.shape.setTransform(8.6,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AAVAOIgvgcIAGACIAvAbg");
	this.shape_1.setTransform(8.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAVANIgvgbIAFABIAwAbg");
	this.shape_2.setTransform(7.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AAVAOIgwgbIAHAAIAvAbg");
	this.shape_3.setTransform(6.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AgbgNIAHgBIAwAbIgHABg");
	this.shape_4.setTransform(6.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgcgMIAJgCIAwAbIgJACg");
	this.shape_5.setTransform(5.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgdgLIALgEIAwAbIgMAEg");
	this.shape_6.setTransform(4.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgegKIAOgHIAvAbIgNAHg");
	this.shape_7.setTransform(3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,11.3,4.2), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhWgPQAYgYAbgQIB6BHQgcAQgXAYg");
	this.shape.setTransform(19,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhFgaQAJgLAIgHIB6BHIgRASg");
	this.shape_1.setTransform(15.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_2.setTransform(14.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgbIALgPIB6BHIgKAOg");
	this.shape_3.setTransform(13,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_4.setTransform(12,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_5.setTransform(11.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_6.setTransform(10.4,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(9.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(9,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgFAOg");
	this.shape_9.setTransform(8.4,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BHIgFAOg");
	this.shape_10.setTransform(7.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_11.setTransform(7.4,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("Ag/gZIAFgTIB6BHIgFASg");
	this.shape_12.setTransform(6.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_13.setTransform(6.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("Ag+gUQAAgQACgOIB7BHQgCANAAARg");
	this.shape_14.setTransform(6.3,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,16.8,17), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhHgdQANgGAIgFIB6BGQgIAGgNAFg");
	this.shape.setTransform(16.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AhGggQAKgCAIgEIB6BHQgIAEgJACg");
	this.shape_1.setTransform(14.1,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AhDghIANgDIB6BGIgNADg");
	this.shape_2.setTransform(12.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_3.setTransform(11.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AA4AkIh6hHQAGABAFgBIB6BHg");
	this.shape_4.setTransform(10.2,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AA4AjIh5hGIAJABIB6BGg");
	this.shape_5.setTransform(9.2,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_6.setTransform(8.3,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AA6AiIh7hGIAJADIB6BGg");
	this.shape_7.setTransform(7.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.9,0,22.4,9.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AA5AiIh6hGIAJADIB6BGQgFgCgEgBg");
	this.shape.setTransform(15.9,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AA5AjIh6hHIAJACIB6BHg");
	this.shape_1.setTransform(15,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("AA5AjIh6hGIAJABIB6BGg");
	this.shape_2.setTransform(14.1,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("AA4AjIh6hGIAKAAIB6BHg");
	this.shape_3.setTransform(13.2,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AhCgiIALgBIB6BGIgLABg");
	this.shape_4.setTransform(12.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("AhDghIAOgDIB5BGIgNADg");
	this.shape_5.setTransform(10.8,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("AhFggIASgGIB6BHIgSAGg");
	this.shape_6.setTransform(9.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhHgdIAVgLIB6BGIgVALg");
	this.shape_7.setTransform(7.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,22.5,9.3), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("Ag9gUQABgNAAgRIB7BHIgCAeg");
	this.shape.setTransform(21.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("Ag+gYIADgVIB6BGIgDAVg");
	this.shape_1.setTransform(21.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag/gaIAFgSIB6BGIgFASg");
	this.shape_2.setTransform(20.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_3.setTransform(20.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("Ag/gbIAFgPIB6BGIgFAPg");
	this.shape_4.setTransform(19.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C0A18").s().p("Ag/gcIAFgOIB6BHIgGAOg");
	this.shape_5.setTransform(19.3,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C0A18").s().p("Ag/gcIAGgOIB6BHIgHAOg");
	this.shape_6.setTransform(18.7,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_7.setTransform(18,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C0A18").s().p("AhAgcIAHgNIB6BGIgHANg");
	this.shape_8.setTransform(17.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgIANg");
	this.shape_9.setTransform(16.6,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C0A18").s().p("AhBgcIAJgNIB6BGIgJANg");
	this.shape_10.setTransform(15.7,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C0A18").s().p("AhCgcIALgOIB6BGIgLAPg");
	this.shape_11.setTransform(14.7,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C0A18").s().p("AhDgbIANgPIB6BGIgNAPg");
	this.shape_12.setTransform(13.6,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C0A18").s().p("AhFgaQAIgHAJgLIB6BHQgJALgIAHg");
	this.shape_13.setTransform(12.1,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C0A18").s().p("AhWgPQAbgPAYgZIB6BHQgYAYgbAQg");
	this.shape_14.setTransform(8.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClippingPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath_1, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClippingPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath_0, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.ClippingPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
	this.shape.setTransform(11.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClippingPath, new cjs.Rectangle(0,0,23.2,9.3), null);


(lib.Group_155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgeIAAAMIgzAdg");
	this.shape.setTransform(3.2,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252A40").s().p("AgZAJIAygdIABAMIgzAdg");
	this.shape_1.setTransform(3.2,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgaAKIA0geIAAALIgyAeg");
	this.shape_2.setTransform(3.1,62.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#272C43").s().p("AgaAEIAzgdIADAVIg0Aeg");
	this.shape_3.setTransform(2.9,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262B41").s().p("AgaAJIA0gdIABALIg0Aeg");
	this.shape_4.setTransform(2.7,59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252A40").s().p("AgaALIA0geIABAJIg0Aeg");
	this.shape_5.setTransform(2.7,58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_6.setTransform(2.6,57.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23283C").s().p("AgZAMIA0geIgBAHIg0Aeg");
	this.shape_7.setTransform(2.7,57.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZAMIAzgeIAAAHIgzAdg");
	this.shape_8.setTransform(2.7,56.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#212639").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_9.setTransform(2.7,55.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202437").s().p("AgZAMIA0gdIgBAGIgzAdg");
	this.shape_10.setTransform(2.8,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2335").s().p("AgYANIAzgeIgBAGIg0Adg");
	this.shape_11.setTransform(2.9,54.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2234").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_12.setTransform(3,54.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D2132").s().p("AgYAMIAzgdIgCAGIgzAdg");
	this.shape_13.setTransform(3.2,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C2030").s().p("AgYAMIA0gdIgDAGIg0Aeg");
	this.shape_14.setTransform(3.4,52.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B1F2E").s().p("AgXALIAzgdIgEAIIgzAdg");
	this.shape_15.setTransform(3.8,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1A1E2D").s().p("AgeAWIANgTIA0geIgNATIgEAGIg0Adg");
	this.shape_16.setTransform(4.8,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B1F2E").s().p("AgbATIATggIADgHIAzgeIgDAGIgSAhQgLAUgIAMIgzAeQAHgMALgUg");
	this.shape_17.setTransform(7.7,45.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C2030").s().p("AgZAOIA0geIgBADIg0Adg");
	this.shape_18.setTransform(9.8,42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D2132").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_19.setTransform(9.9,41.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202437").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_20.setTransform(10,41.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#22273A").s().p("AgThpIAzgeIgMDxIgzAeg");
	this.shape_21.setTransform(10.6,29);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#23283C").s().p("AgZgEIA0gfIgBAoIg0Afg");
	this.shape_22.setTransform(11.3,14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24293E").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_23.setTransform(11.4,12.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#252A40").s().p("AgZANIAzgeIAAAFIgzAdg");
	this.shape_24.setTransform(11.4,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262B41").s().p("AgZANIAzgeIABAFIg0Adg");
	this.shape_25.setTransform(11.4,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_26.setTransform(11.3,11.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#282E45").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_27.setTransform(11.3,10.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#292F47").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_28.setTransform(11.2,10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A3048").s().p("AgZANIAzgdIABADIgzAeg");
	this.shape_29.setTransform(11.1,10);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B314A").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_30.setTransform(11,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C324C").s().p("AgaAOIA0geIABAEIg0Adg");
	this.shape_31.setTransform(10.9,9.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2D334D").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_32.setTransform(10.8,8.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2E344F").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_33.setTransform(10.7,8.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F3651").s().p("AgaANIA0gdIABAEIgzAdg");
	this.shape_34.setTransform(10.6,8.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#303753").s().p("AgaANIAzgeIACAFIgzAeg");
	this.shape_35.setTransform(10.4,7.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#313854").s().p("AgbANIA0geIACAFIgzAeg");
	this.shape_36.setTransform(10.2,7.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#323956").s().p("AggAFIAzgeQAIAKAGAMIgzAdQgGgLgIgKg");
	this.shape_37.setTransform(9.3,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#313854").s().p("AgcANIA0geIAFAFIg0Aeg");
	this.shape_38.setTransform(8.4,4.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#303753").s().p("AgbANIAzgdIAEAEIgzAdg");
	this.shape_39.setTransform(7.9,3.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F3651").s().p("AgbANIAzgdIAEADIgzAeg");
	this.shape_40.setTransform(7.6,3.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2E344F").s().p("AgbAOIAzgeIAEAEIgzAdg");
	this.shape_41.setTransform(7.2,3.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2D334D").s().p("AgbAOIA0geIADADIgzAeg");
	this.shape_42.setTransform(6.8,2.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C324C").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_43.setTransform(6.4,2.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B314A").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_44.setTransform(6,2.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2A3048").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_45.setTransform(5.6,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#292F47").s().p("AgcAOIA0geIAEADIgzAeg");
	this.shape_46.setTransform(5.2,1.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#282E45").s().p("AgaAPIA0geIABABIg0Adg");
	this.shape_47.setTransform(4.9,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_155, new cjs.Rectangle(0,0,14,67.3), null);


(lib.Group_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("Ag3gBIA0geIA7AgIg0Afg");
	this.shape.setTransform(17.9,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272C43").s().p("AhDgGIA0geIBTArIg0Aeg");
	this.shape_1.setTransform(10.7,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgbAOIA0gdIADABIg0Aeg");
	this.shape_2.setTransform(6.3,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgbAPIA0geIADABIg0Aeg");
	this.shape_3.setTransform(6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgbAPIA0geIACABIgzAeg");
	this.shape_4.setTransform(5.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgaAPIAygeIAEABIg0Aeg");
	this.shape_5.setTransform(5.5,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgbAPIA0gdIACAAIgyAdg");
	this.shape_6.setTransform(5.2,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgbAPIA0geIADABIg0Aeg");
	this.shape_7.setTransform(5,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgaAPIAzgdIADAAIg0Adg");
	this.shape_8.setTransform(4.7,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape_9.setTransform(4.5,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_10.setTransform(4.2,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_11.setTransform(3.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_154, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.Group_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3651").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape.setTransform(4.8,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303753").s().p("AgaANIAzgeIACAFIgzAeg");
	this.shape_1.setTransform(4.6,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313854").s().p("AgbAMIA0gdIACAGIgzAdg");
	this.shape_2.setTransform(4.4,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323956").s().p("AgiADIA0geQAKANAHAMIg0AeQgGgMgLgNg");
	this.shape_3.setTransform(3.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_153, new cjs.Rectangle(0,0,7.5,7.1), null);


(lib.Group_152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAQIgLgRIA0gfIALASQAGALAFAFIgzAfQgFgGgHgLg");
	this.shape.setTransform(3.8,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_152, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.Group_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8994A9").s().p("AgWAUIgJgOIAzgdQAFAFAFAIIACAFIg0Adg");
	this.shape.setTransform(10.9,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8691A6").s().p("AgbANIA0gdIADADIgzAeg");
	this.shape_1.setTransform(10.1,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848EA2").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_2.setTransform(9.9,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818B9F").s().p("AgbAOIA0geIACADIgzAeg");
	this.shape_3.setTransform(9.6,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E889B").s().p("AgaAOIAzgdIADACIg0Adg");
	this.shape_4.setTransform(9.3,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_5.setTransform(9.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#798295").s().p("AgbAOIA0geIACADIgzAeg");
	this.shape_6.setTransform(8.8,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767F91").s().p("AgbAOIA0gdIADACIg0Adg");
	this.shape_7.setTransform(8.5,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737C8E").s().p("AgbAOIA0geIADADIg0Aeg");
	this.shape_8.setTransform(8.2,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape_9.setTransform(7.8,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E7687").s().p("AgcAOIAAAAIAzgeIABAAIAEADIABABIgzAdg");
	this.shape_10.setTransform(7.2,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgdANIAzgeIAIAFIgzAdg");
	this.shape_11.setTransform(6.5,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E7687").s().p("AgbAPIgBgBIgBgBIAzgeIABABIACABIAEACIABABIgzAdg");
	this.shape_12.setTransform(5.7,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70798B").s().p("AglAIIgCgBIA0geIACABIAZAQIg0Adg");
	this.shape_13.setTransform(4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_151, new cjs.Rectangle(0,0,14.1,10), null);


(lib.Group_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape.setTransform(2.7,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_150, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.Group_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgXANIAzgdIgEADIgzAeg");
	this.shape.setTransform(2.8,85.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202437").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_1.setTransform(3.2,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgjDcQAOkQAFiJIA0geQgGCIgOEQIAAABIgzAfg");
	this.shape_2.setTransform(4.2,63.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23283C").s().p("AgYgVIA0geIgDBJIg0Afg");
	this.shape_3.setTransform(5.3,39.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#22273A").s().p("AgRh3IAAgIIAzgeIAAAHQgIBsgICqIgzAeQAHiqAJhrg");
	this.shape_4.setTransform(6.3,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_5.setTransform(7.1,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24293E").s().p("AgZANIAzgeIAAAGIgzAdg");
	this.shape_6.setTransform(7.1,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#252A40").s().p("AgZANIAzgeIABAFIg0Aeg");
	this.shape_7.setTransform(7.1,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#262B41").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_8.setTransform(7,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_9.setTransform(7,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282E45").s().p("AgZAOIAzgeIABAEIg0Adg");
	this.shape_10.setTransform(7,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#292F47").s().p("AgaAOIA0geIABAEIg0Adg");
	this.shape_11.setTransform(6.9,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3048").s().p("AgaAOIA0geIAAAEIgzAdg");
	this.shape_12.setTransform(6.8,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B314A").s().p("AgaAOIA0geIABADIg0Aeg");
	this.shape_13.setTransform(6.7,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C324C").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_14.setTransform(6.7,2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D334D").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_15.setTransform(6.6,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E344F").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_16.setTransform(6.5,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F3651").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_17.setTransform(6.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_149, new cjs.Rectangle(0,0,9.7,86.9), null);


(lib.Group_148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.9,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgZgGIA0geIgCArIgzAeg");
	this.shape_1.setTransform(3,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgXgUIACgqIAzgeIgCApIgGByIg0AeIAHhxg");
	this.shape_2.setTransform(3.5,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgXghIAzgeIgEBhIgzAeg");
	this.shape_3.setTransform(4.1,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6573").s().p("AgXgLIABgTIAzgfIgBATQgDAlgCAkIgzAfQACglADgkg");
	this.shape_4.setTransform(4.5,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606876").s().p("AgYgJIAzgfIgCAyIgzAfg");
	this.shape_5.setTransform(4.9,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D6573").s().p("AgZAGIA0geIgBATIg0Aeg");
	this.shape_6.setTransform(5,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A6270").s().p("AgZAJIA0gdIgBAMIg0Adg");
	this.shape_7.setTransform(5.1,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#585F6C").s().p("AgYAMIAAgCIAzgeIAAADIgBAJIg0Adg");
	this.shape_8.setTransform(5.3,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585F6C").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_9.setTransform(5.4,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A6270").s().p("AgZANIA0gdIgBAEIgzAdg");
	this.shape_10.setTransform(5.5,5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D6573").s().p("AgZAOIAzgeIAAADIgzAdg");
	this.shape_11.setTransform(5.5,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_12.setTransform(5.5,5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#636B7A").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_13.setTransform(5.5,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#656E7D").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_14.setTransform(5.5,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#687080").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_15.setTransform(5.5,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B7384").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_16.setTransform(5.5,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_17.setTransform(5.5,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70798B").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_18.setTransform(5.5,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#767F91").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_19.setTransform(5.4,4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#798295").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_20.setTransform(5.4,4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B8598").s().p("AgZAPIAzgeIABACIg0Adg");
	this.shape_21.setTransform(5.4,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E889B").s().p("AgaAOIA0gdIAAABIgzAeg");
	this.shape_22.setTransform(5.3,3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#818B9F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_23.setTransform(5.2,3.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#848EA2").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_24.setTransform(5.2,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8691A6").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_25.setTransform(5.1,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8994A9").s().p("AgeAJIA0geQAFAHAEAGIg0AeQgDgHgGgGg");
	this.shape_26.setTransform(4.5,2.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8691A6").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape_27.setTransform(4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_148, new cjs.Rectangle(0.3,0,7.9,57.1), null);


(lib.Group_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYANIA0gdIgEADIgzAeg");
	this.shape.setTransform(2.8,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1F2E").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_1.setTransform(3,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D2132").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_2.setTransform(3.2,45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E2234").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape_3.setTransform(3.2,45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2335").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape_4.setTransform(3.3,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202437").s().p("AgZANIA0gdIgBAEIgzAdg");
	this.shape_5.setTransform(3.4,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#212639").s().p("AgZANIAzgeIAAAFIg0Aeg");
	this.shape_6.setTransform(3.4,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22273A").s().p("AgdBPIAFhVIACg2IA0geIgCA1IgFBVIgBANIgzAfg");
	this.shape_7.setTransform(3.8,36.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#23283C").s().p("AgXgxIA0geIgFCBIg0Aeg");
	this.shape_8.setTransform(4.4,22.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#22273A").s().p("AgXgjIA0gfIgFBmIg0Afg");
	this.shape_9.setTransform(4.9,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#23283C").s().p("AgZgCIA0gfIgBAkIg0Afg");
	this.shape_10.setTransform(5.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_147, new cjs.Rectangle(0,0,7.9,47.7), null);


(lib.Group_146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606876").s().p("AgYgLIAzgeIgCA1IgzAeg");
	this.shape.setTransform(3.3,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgWgvIAAgIIA0gfIgICOIgzAfIAHiGg");
	this.shape_1.setTransform(3.7,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A6270").s().p("AgYAHIAzgeIgCARIgzAeg");
	this.shape_2.setTransform(4.2,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgZALIA0geIgBAJIgzAeg");
	this.shape_3.setTransform(4.3,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_4.setTransform(4.3,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#636B7A").s().p("AgZANIAzgdIAAAEIgzAeg");
	this.shape_5.setTransform(4.3,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#656E7D").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_6.setTransform(4.3,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#687080").s().p("AgZAOIAzgeIABAEIg0Adg");
	this.shape_7.setTransform(4.3,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B7384").s().p("AgaAOIA0geIAAADIgzAeg");
	this.shape_8.setTransform(4.2,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E7687").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_9.setTransform(4.2,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#70798B").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_10.setTransform(4.1,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737C8E").s().p("AgZAOIAzgeIAAADIgyAeg");
	this.shape_11.setTransform(4.1,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#767F91").s().p("AgZAOIAzgeIABADIg0Aeg");
	this.shape_12.setTransform(4,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#798295").s().p("AgaAOIA0geIABADIg0Aeg");
	this.shape_13.setTransform(3.9,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B8598").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_14.setTransform(3.9,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E889B").s().p("AgaAOIAzgeIACADIg0Aeg");
	this.shape_15.setTransform(3.8,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#818B9F").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_16.setTransform(3.6,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848EA2").s().p("AgaANIAzgeIACAFIgzAdg");
	this.shape_17.setTransform(3.5,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8691A6").s().p("AgbAMIA0gdIADAGIg0Adg");
	this.shape_18.setTransform(3.2,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8994A9").s().p("AgcALIA0geIAEAJIgzAdg");
	this.shape_19.setTransform(2.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_146, new cjs.Rectangle(0,0,6.9,31.8), null);


(lib.Group_145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape.setTransform(3.7,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D334D").s().p("AgaAOIA0gdIAAACIgzAdg");
	this.shape_1.setTransform(3.7,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E344F").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_2.setTransform(3.6,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3651").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.6,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303753").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_4.setTransform(3.5,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313854").s().p("AgaAOIA0geIABAEIgzAdg");
	this.shape_5.setTransform(3.4,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323956").s().p("AgdAKIA0geIAHALIg0Aeg");
	this.shape_6.setTransform(3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_145, new cjs.Rectangle(0,0,6.4,5.5), null);


(lib.Group_144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AggAIIAzgeIAOAPIgzAdg");
	this.shape.setTransform(22.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8691A6").s().p("AhTgvIA1geIByB9Ig1Aeg");
	this.shape_1.setTransform(15.9,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848EA2").s().p("AgXASIgGgHIAzgdIAGAHIADABIg0Adg");
	this.shape_2.setTransform(9.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818B9F").s().p("AgcANIA0geIAFAFIg0Aeg");
	this.shape_3.setTransform(9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E889B").s().p("AgcANIA0gdIAFAEIg0Adg");
	this.shape_4.setTransform(8.5,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIAzgeIAEAEIgzAdIgEgDg");
	this.shape_5.setTransform(8.1,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#798295").s().p("AgbAOIA0geIADADIg0Aeg");
	this.shape_6.setTransform(7.7,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767F91").s().p("AgbAOIA0gdIADACIg0Aeg");
	this.shape_7.setTransform(7.4,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737C8E").s().p("AgbAOIAzgdIAEACIg0Adg");
	this.shape_8.setTransform(7,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#70798B").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_9.setTransform(6.7,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E7687").s().p("AgYAQIgCgBIAzgeIACABIABAAIgzAeg");
	this.shape_10.setTransform(6.4,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgaAOIAzgdIADACIg0Adg");
	this.shape_11.setTransform(6.2,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#687080").s().p("AgbAPIA0geIADABIgzAeg");
	this.shape_12.setTransform(5.9,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#656E7D").s().p("AgaAPIAzgeIADABIg0Aeg");
	this.shape_13.setTransform(5.6,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#636B7A").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_14.setTransform(5.4,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#606876").s().p("AgaAPIAzgeIADABIg0Aeg");
	this.shape_15.setTransform(5.2,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D6573").s().p("AgaAPIAzgeIADABIg0Aeg");
	this.shape_16.setTransform(4.9,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5A6270").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_17.setTransform(4.7,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#585F6C").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape_18.setTransform(4.5,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#555C69").s().p("AgbAPIA0gdIACAAIgzAdg");
	this.shape_19.setTransform(4.2,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4F5662").s().p("AgbAPIA0gdIACAAIgzAdg");
	this.shape_20.setTransform(3.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_144, new cjs.Rectangle(1,0,24.6,21), null);


(lib.Group_143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_143, null, null);


(lib.Group_142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZALIAzgeIAAAJIgzAeg");
	this.shape.setTransform(2.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAJIAzgdIAAAMIgzAdg");
	this.shape_1.setTransform(2.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_142, new cjs.Rectangle(0,0,5.3,5.2), null);


(lib.Group_141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZALIAzgeIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_141, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZALIAzgeIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_140, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2335").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202437").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_1.setTransform(2.7,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZANIA0geIgBAFIg0Adg");
	this.shape_2.setTransform(2.8,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_3.setTransform(2.8,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23283C").s().p("AgZAJIA0geIgBANIgzAeg");
	this.shape_4.setTransform(2.8,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZALIAzgeIAAAJIgzAeg");
	this.shape_5.setTransform(2.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_139, new cjs.Rectangle(0,0,5.5,7), null);


(lib.Group_138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(17.2,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_1.setTransform(17.2,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24293E").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_2.setTransform(17.2,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_3.setTransform(17.2,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262B41").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_4.setTransform(17.2,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313854").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_5.setTransform(16.9,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323956").s().p("AgcAMIA0gdIAFAGIg0Adg");
	this.shape_6.setTransform(16.7,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#313854").s().p("AgaAPIAzgeIACACIg0Adg");
	this.shape_7.setTransform(16.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#303753").s().p("AhbgzIA1geIAAAAICACDIACACIg0Aeg");
	this.shape_8.setTransform(9.7,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F3651").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_9.setTransform(3.1,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_138, new cjs.Rectangle(0.3,0.2,19.6,19.9), null);


(lib.Group_137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAOIA0geIgBAEIg0Adg");
	this.shape_1.setTransform(2.7,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape_2.setTransform(2.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#212639").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_3.setTransform(2.7,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202437").s().p("AgZANIA0gdIgBADIg0Aeg");
	this.shape_4.setTransform(2.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_137, new cjs.Rectangle(0,0,5.4,5.1), null);


(lib.Group_136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_136, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.Group_135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape.setTransform(4.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AgaAMIAzgeIABAHIgzAdg");
	this.shape_1.setTransform(4.3,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292F47").s().p("AgaAMIA0geIABAHIgzAeg");
	this.shape_2.setTransform(4.2,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3048").s().p("AgaAJIAzgdIADAMIg0Adg");
	this.shape_3.setTransform(4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B314A").s().p("AgcABIAzgdIAGAcIgzAdg");
	this.shape_4.setTransform(3.6,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3048").s().p("AgaAJIAzgdIACAMIgzAdg");
	this.shape_5.setTransform(3.1,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292F47").s().p("AgaAMIAzgeIACAHIg0Aeg");
	this.shape_6.setTransform(2.9,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282E45").s().p("AgZAMIAzgdIABAGIgzAdg");
	this.shape_7.setTransform(2.8,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#272C43").s().p("AgaANIA0geIABAFIg0Aeg");
	this.shape_8.setTransform(2.8,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262B41").s().p("AgZANIAzgdIAAAEIgzAeg");
	this.shape_9.setTransform(2.7,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252A40").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_10.setTransform(2.7,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape_11.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_135, new cjs.Rectangle(0,0,7,13), null);


(lib.Group_134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202437").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.8,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212639").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_1.setTransform(2.8,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIg0Aeg");
	this.shape_2.setTransform(2.9,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23283C").s().p("AgZAKIAzgeIAAALIgzAeg");
	this.shape_3.setTransform(2.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_134, new cjs.Rectangle(0.2,0,5.3,4.8), null);


(lib.Group_133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape.setTransform(4.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E889B").s().p("AgaAPIAzgeIACACIgzAdg");
	this.shape_1.setTransform(4.1,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818B9F").s().p("AgcANIAzgeIAGAGIgzAdg");
	this.shape_2.setTransform(3.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848EA2").s().p("AgaAPIgDgEIAzgdIAEAEIAEAEIgzAdg");
	this.shape_3.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_133, new cjs.Rectangle(0,0,6.9,4.7), null);


(lib.Group_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgaAPIgDgEIAzgdIAEAEIAEAEIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_132, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgaAPIgDgEIAzgdIAEAEIAEAEIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_131, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgaAPIgDgEIAzgdIAEAEIAEAEIgzAdg");
	this.shape.setTransform(14.8,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818B9F").s().p("AgjAGIAzgeIAUATIgzAeg");
	this.shape_1.setTransform(13.4,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E889B").s().p("AgjAHIA0geIATARIg0Aeg");
	this.shape_2.setTransform(11.5,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8598").s().p("AgiAIIAzgeIASAPIgzAeg");
	this.shape_3.setTransform(9.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#798295").s().p("AgiAIIAzgdIASAOIgzAdg");
	this.shape_4.setTransform(7.8,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767F91").s().p("AgjAJIA0geIASANIgzAdg");
	this.shape_5.setTransform(6,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737C8E").s().p("AgiAJIAzgeIATANIg0Adg");
	this.shape_6.setTransform(4.2,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#70798B").s().p("AgcANIAzgdIAGAEIgzAdg");
	this.shape_7.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_130, new cjs.Rectangle(0,0,17.9,13.2), null);


(lib.Group_129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_129, null, null);


(lib.Group_128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D334D").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape.setTransform(2.8,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_128, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


(lib.Group_127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A6270").s().p("AgZAOIA0gdIgBACIgzAdg");
	this.shape.setTransform(2.8,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgcA9QADguACgwIA0geQgCAwgDAtIAAAEIg0Aeg");
	this.shape_1.setTransform(3.1,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606876").s().p("AgYgXIABgaIA0geIgCAZIgDBoIg0AeIAEhng");
	this.shape_2.setTransform(3.5,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgYgKIAzgfIgCA0Ig0Afg");
	this.shape_3.setTransform(3.9,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgZADIA0gdIgBAYIg0Aeg");
	this.shape_4.setTransform(4,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6573").s().p("AgZALIA0gdIgBAIIg0Adg");
	this.shape_5.setTransform(4.1,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5A6270").s().p("AgZAJIA0geIgBANIg0Aeg");
	this.shape_6.setTransform(4.2,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#585F6C").s().p("AgYAFIAzgdIgCAUIg0Adg");
	this.shape_7.setTransform(4.4,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A6270").s().p("AgZAMIAzgdIAAAGIg0Adg");
	this.shape_8.setTransform(4.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_127, new cjs.Rectangle(0.2,0,7.1,38.4), null);


(lib.Group_126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_126, null, null);


(lib.Group_125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_125, null, null);


(lib.Group_124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8994A9").s().p("AgbANIA0geIADAFIg0Aeg");
	this.shape.setTransform(3.5,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8691A6").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_1.setTransform(3.3,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848EA2").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_2.setTransform(3.2,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767F91").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_3.setTransform(3,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737C8E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_4.setTransform(3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E7687").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(2.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B7384").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_6.setTransform(2.9,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#687080").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_7.setTransform(2.9,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#656E7D").s().p("AgaALIA0geIAAAJIgzAdg");
	this.shape_8.setTransform(2.9,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#687080").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_9.setTransform(2.8,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B7384").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_10.setTransform(2.8,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_11.setTransform(2.8,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#70798B").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_12.setTransform(2.8,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#767F91").s().p("AgZAPIAAgBIAzgdIAAABIAAAAIgzAeg");
	this.shape_13.setTransform(2.7,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_14.setTransform(2.7,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525965").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape_15.setTransform(2.8,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F5662").s().p("AgXALIAAgBIAAAAIAzgeIAAABIgDAKIg0Aeg");
	this.shape_16.setTransform(3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_124, new cjs.Rectangle(0.1,0.6,6.2,9.8), null);


(lib.Group_123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D535F").s().p("AgYANIAzgeIgCAFIgzAeg");
	this.shape.setTransform(2.9,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474D58").s().p("AgdASIAIgHIAzgdIgHAHIgBABIgzAdgAAegSIAAAAIAAAAg");
	this.shape_1.setTransform(3.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_123, new cjs.Rectangle(0.2,0,6.3,4.4), null);


(lib.Group_122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8598").s().p("AgbAOIAzgeIAEAEIgzAdg");
	this.shape.setTransform(9.4,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E889B").s().p("AgcANIAzgeIAGAGIgzAdg");
	this.shape_1.setTransform(8.9,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818B9F").s().p("AgcAMIAzgdIAGAGIgzAdg");
	this.shape_2.setTransform(8.3,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848EA2").s().p("AgcAMIAzgeIAGAHIgzAeg");
	this.shape_3.setTransform(7.6,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8691A6").s().p("AgdALIA0gdIAHAIIgzAdg");
	this.shape_4.setTransform(6.9,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8994A9").s().p("AglgBIA0geQAJASAOAPIg0AeQgNgQgKgRg");
	this.shape_5.setTransform(5.4,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8691A6").s().p("AgbALIAzgdIAEAIIgzAdg");
	this.shape_6.setTransform(4.1,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#848EA2").s().p("AgbAMIA0geIACAHIgzAdg");
	this.shape_7.setTransform(3.8,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#818B9F").s().p("AgaANIAzgeIACAFIgzAeg");
	this.shape_8.setTransform(3.5,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E889B").s().p("AgaANIA0gdIABAEIgzAeg");
	this.shape_9.setTransform(3.4,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B8598").s().p("AgaANIA0gdIABAEIg0Aeg");
	this.shape_10.setTransform(3.2,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#798295").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_11.setTransform(3.1,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#767F91").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_12.setTransform(3,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737C8E").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_13.setTransform(2.9,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#70798B").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_14.setTransform(2.8,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E7687").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_15.setTransform(2.8,7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B7384").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape_16.setTransform(2.7,7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#687080").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_17.setTransform(2.7,7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#656E7D").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_18.setTransform(2.6,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#636B7A").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape_19.setTransform(2.6,6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#606876").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_20.setTransform(2.6,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D6573").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_21.setTransform(2.6,5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5A6270").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_22.setTransform(2.7,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#585F6C").s().p("AgZANIA0gdIgBAEIg0Adg");
	this.shape_23.setTransform(2.7,4.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#555C69").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_24.setTransform(2.8,4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#525965").s().p("AgZANIA0geIgCAFIgzAeg");
	this.shape_25.setTransform(3,3.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4F5662").s().p("AgYAMIAzgdIgCAGIgzAeg");
	this.shape_26.setTransform(3.1,2.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D535F").s().p("AgYANIAAgBIA0gdIgBAAIgCAGIgzAdg");
	this.shape_27.setTransform(3.4,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A505B").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_28.setTransform(3.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_122, new cjs.Rectangle(0,0.3,12.3,20.2), null);


(lib.Group_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737C8E").s().p("AgaAPIA0geIABABIgzAeg");
	this.shape.setTransform(3.9,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767F91").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape_1.setTransform(3.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#798295").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_2.setTransform(3.6,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8598").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape_3.setTransform(3.5,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E889B").s().p("AgaAPIA0geIABABIgzAeg");
	this.shape_4.setTransform(3.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818B9F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_5.setTransform(3.3,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#848EA2").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_6.setTransform(3.2,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8691A6").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_7.setTransform(3.1,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8994A9").s().p("AgbANIAzgeIAEAFIgzAeg");
	this.shape_8.setTransform(2.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_121, new cjs.Rectangle(0,0,6.6,4.5), null);


(lib.Group_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAGIAzgeIAAATIgzAeg");
	this.shape.setTransform(3.9,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24293E").s().p("AgZACIA0geIgBAbIgzAeg");
	this.shape_1.setTransform(3.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZgFIAzgfIAAAqIg0Aeg");
	this.shape_2.setTransform(4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgYAEIAzgdIgCAWIgzAdg");
	this.shape_3.setTransform(4.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_4.setTransform(4.1,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(4.1,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24293E").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_6.setTransform(4.1,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323956").s().p("AgbANIA0gdIACADIgzAeg");
	this.shape_7.setTransform(3.8,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#313854").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_8.setTransform(3.6,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(3.5,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E344F").s().p("AgaAOIA0gdIABABIg0Aeg");
	this.shape_10.setTransform(3.3,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D334D").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_11.setTransform(3.2,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C324C").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_12.setTransform(3,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B314A").s().p("AgbAPIA0geIACACIgzAdg");
	this.shape_13.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_120, new cjs.Rectangle(0,0,6.8,17), null);


(lib.Group_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape.setTransform(41.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272C43").s().p("Ag5AAIA0gfQAdAPAiARIg1AfQgggTgegNg");
	this.shape_1.setTransform(37.9,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgnAIIAzgdQAOAGAOAHIgzAeg");
	this.shape_2.setTransform(33.3,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgkALIAzgeIAWAJIgzAeg");
	this.shape_3.setTransform(30.8,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgjALIAzgdIAUAIIgzAdg");
	this.shape_4.setTransform(28.7,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgjAMIA0geIATAHIg0Adg");
	this.shape_5.setTransform(26.7,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgjAMIAzgdIAUAFIgzAeg");
	this.shape_6.setTransform(24.7,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgjANIAzgeIAVAFIg0Adg");
	this.shape_7.setTransform(22.7,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgkANIA0gdIAVADIg0Aeg");
	this.shape_8.setTransform(20.6,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AglAOIA0gdIAXACIg0Adg");
	this.shape_9.setTransform(18.4,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AglAPIAzgeIAYABIgzAdg");
	this.shape_10.setTransform(16.1,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AAMgOIAcgBIgzAeIgcABg");
	this.shape_11.setTransform(13.4,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C2030").s().p("AAKgMQAUgEANgBIg0AeIghAFg");
	this.shape_12.setTransform(10.4,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B1F2E").s().p("AADgIQAWgIAYgEIgzAdQgZAFgVAHg");
	this.shape_13.setTransform(6.4,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1E2D").s().p("AAVgMIANgFIg0AdIgNAFIgCABg");
	this.shape_14.setTransform(3.4,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_119, new cjs.Rectangle(0,0,43.9,11.9), null);


(lib.Group_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape.setTransform(4.1,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_1.setTransform(3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_2.setTransform(3.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#585F6C").s().p("AgaAPIAzgeIACABIg0Adg");
	this.shape_3.setTransform(3.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_118, new cjs.Rectangle(0.7,0,6.1,3.3), null);


(lib.Group_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_117, null, null);


(lib.Group_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_116, new cjs.Rectangle(0,0,5.4,3.2), null);


(lib.Group_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(3.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B314A").s().p("AgaAPIAzgeIACACIgzAdIgCgBg");
	this.shape_1.setTransform(3.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B314A").s().p("AgbAPIgBgBIA0geIABABIADACIgzAeg");
	this.shape_2.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_115, new cjs.Rectangle(0,0,6.1,3.7), null);


(lib.Group_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape.setTransform(2.6,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_1.setTransform(2.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_2.setTransform(2.6,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#212639").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_3.setTransform(2.6,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2335").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_4.setTransform(2.7,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_114, new cjs.Rectangle(0,0.7,5.3,4.9), null);


(lib.Group_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgUASIgMgGIAAgBIAzgdIABAAIAMAHIABABIgzAdg");
	this.shape.setTransform(4.7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AggAMIA0geIANAHIg0Aeg");
	this.shape_1.setTransform(3.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_113, new cjs.Rectangle(0,0,8.1,4.6), null);


(lib.Group_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_112, new cjs.Rectangle(0,0,5.2,3.8), null);


(lib.Group_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape.setTransform(3.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E344F").s().p("AgZAPIAzgeIABABIg0Aeg");
	this.shape_1.setTransform(2.9,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D334D").s().p("AgaAOIA0gdIAAACIgzAdg");
	this.shape_2.setTransform(2.9,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C324C").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_3.setTransform(2.8,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B314A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_4.setTransform(2.8,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3048").s().p("AgaAOIA0gdIABABIg0Aeg");
	this.shape_5.setTransform(2.8,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292F47").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_6.setTransform(2.7,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282E45").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_7.setTransform(2.7,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#272C43").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_8.setTransform(2.7,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262B41").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_9.setTransform(2.6,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252A40").s().p("AgZAOIAzgdIAAACIgzAeg");
	this.shape_10.setTransform(2.6,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24293E").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_11.setTransform(2.6,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAFIgzAeg");
	this.shape_12.setTransform(2.6,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#22273A").s().p("AgZAJIA0geIgBANIg0Adg");
	this.shape_13.setTransform(2.7,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_14.setTransform(2.7,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_15.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_111, new cjs.Rectangle(0,0,5.9,8.9), null);


(lib.Group_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_110, null, null);


(lib.Group_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_109, null, null);


(lib.Group_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape.setTransform(3.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3651").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_1.setTransform(3.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#303753").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_2.setTransform(3.7,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.5,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D334D").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_4.setTransform(3.2,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3048").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_5.setTransform(2.9,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292F47").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_6.setTransform(2.8,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282E45").s().p("AgaAPIA0geIABABIAAAAIg0Adg");
	this.shape_7.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_108, new cjs.Rectangle(0,0,6.6,4.2), null);


(lib.Group_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgbAOIA0gdIADABIg0Aeg");
	this.shape.setTransform(3.8,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262B41").s().p("AgdAOIA0geIAHAEIgzAdg");
	this.shape_1.setTransform(3.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272C43").s().p("AgZAPIgBAAIA0geIAAABIABAAIg0Aeg");
	this.shape_2.setTransform(2.9,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape_3.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_107, new cjs.Rectangle(0,0,6.6,3.7), null);


(lib.Group_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_106, new cjs.Rectangle(0,0,5.4,3.1), null);


(lib.Group_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292F47").s().p("AgaAPIA0gdIABAAIg0Adg");
	this.shape.setTransform(3.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_105, new cjs.Rectangle(0.5,0.4,5.4,3.1), null);


(lib.Group_104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(3.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656E7D").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_1.setTransform(3.5,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_2.setTransform(3.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_104, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


(lib.Group_103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_103, null, null);


(lib.Group_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_102, null, null);


(lib.Group_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A6270").s().p("AgYAFIAzgdIgCATIgzAeg");
	this.shape_1.setTransform(2.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgYADIAzgeQAAANgBAMIg0AdQABgMABgMg");
	this.shape_2.setTransform(2.9,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZgHIA0geIgBAtIg0AeIABgtg");
	this.shape_3.setTransform(3,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_101, new cjs.Rectangle(0,0,5.7,12.4), null);


(lib.Group_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape.setTransform(2.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_100, new cjs.Rectangle(0,0.5,5.3,3.4), null);


(lib.Group_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_99, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.Group_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212639").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape.setTransform(2.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_98, new cjs.Rectangle(0,0,5.3,3.3), null);


(lib.Group_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_1.setTransform(2.6,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZANIA0geIgBAGIg0Adg");
	this.shape_2.setTransform(2.7,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202437").s().p("AgYAGIAzgeIgCATIg0Aeg");
	this.shape_3.setTransform(2.9,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212639").s().p("AgZAOIA0geIgBADIgzAeg");
	this.shape_4.setTransform(3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_97, new cjs.Rectangle(0,0,5.7,6.5), null);


(lib.Group_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_96, new cjs.Rectangle(0,0,5.3,3.8), null);


(lib.Group_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgNAEIA0geQgKAPgTALIgwAbQARgKAIgNg");
	this.shape.setTransform(4.2,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1F2E").s().p("AgXAMIAzgeIgEAHIgzAeg");
	this.shape_1.setTransform(5.7,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C2030").s().p("AgYANIAzgeIgCAFIgzAeg");
	this.shape_2.setTransform(6,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D2132").s().p("AgYANIAzgeIgCAFIgzAeg");
	this.shape_3.setTransform(6.2,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2234").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_4.setTransform(6.3,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZANIA0gdIgBAEIg0Aeg");
	this.shape_5.setTransform(6.4,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202437").s().p("AgZANIA0gdIgBAEIgzAeg");
	this.shape_6.setTransform(6.5,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgZANIAzgdIAAAEIg0Aeg");
	this.shape_7.setTransform(6.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZANIA0geIgBAFIgzAeg");
	this.shape_8.setTransform(6.6,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23283C").s().p("AgZANIAzgeIAAAFIgzAdg");
	this.shape_9.setTransform(6.6,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_10.setTransform(6.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_95, new cjs.Rectangle(0.4,0,8.9,10.7), null);


(lib.Group_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgUg4IA0gfIgLCQIg0Afg");
	this.shape.setTransform(3.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#555C69").s().p("AgZANIA0geIgBAGIg0Adg");
	this.shape_1.setTransform(3.8,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeIgCgDg");
	this.shape_2.setTransform(3.7,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E889B").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.4,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737C8E").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_4.setTransform(3.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_94, new cjs.Rectangle(0,0.1,6.5,20), null);


(lib.Group_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_93, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.Group_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7687").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape.setTransform(3.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_92, new cjs.Rectangle(0.9,0.2,5.4,3.1), null);


(lib.Group_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAgBIAzgeIAAAAIgEBFIgzAeIAEhEg");
	this.shape.setTransform(2.8,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_91, new cjs.Rectangle(0,0.9,5.7,10), null);


(lib.Group_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgWgwIAAgEIA0gfIgBAEIgGCEIg0AfIAHiEg");
	this.shape.setTransform(3,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgZAEIA0gdIgBAVIgzAeg");
	this.shape_1.setTransform(3.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgZAMIAzgdIAAAFIgzAeg");
	this.shape_2.setTransform(3.4,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A6270").s().p("AgZANIAzgdIAAAEIg0Adg");
	this.shape_3.setTransform(3.4,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#585F6C").s().p("AgZAOIA0geIgBAEIgzAdg");
	this.shape_4.setTransform(3.5,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#555C69").s().p("AgYAOIAygeIAAADIg0Aeg");
	this.shape_5.setTransform(3.5,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525965").s().p("AgZAOIAzgeIgBADIgyAeg");
	this.shape_6.setTransform(3.6,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F5662").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape_7.setTransform(3.7,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D535F").s().p("AgYANIAzgdIgBADIg0Aeg");
	this.shape_8.setTransform(3.8,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A505B").s().p("AgcAVIAHgNIA0geIgIANIgBACIgzAdg");
	this.shape_9.setTransform(4.3,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474D58").s().p("AAKgYIA1gfQgwAqgYAmIg1AfQAagqAugmg");
	this.shape_10.setTransform(8.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_90, new cjs.Rectangle(0,0,14.7,31), null);


(lib.Group_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_89, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_88, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_87, null, null);


(lib.Group_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgVg7IABgOIA0gfIgBAPIgKCjIg0AfIAKikg");
	this.shape.setTransform(3.2,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgKIAzgeIgBAzIg0Aeg");
	this.shape_1.setTransform(3.8,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgYAAIAzgeIgCAeIgzAfg");
	this.shape_2.setTransform(4,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_86, new cjs.Rectangle(0,0.1,6.7,29.3), null);


(lib.Group_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_85, null, null);


(lib.Group_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAJIAzgeIAAANIgzAeg");
	this.shape.setTransform(2.6,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgOIAzgeQgCAdAAAeIgzAeIACg7g");
	this.shape_1.setTransform(2.7,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgVg7IABgOIA0gfIgBAOIgKCkIg0AfIAKikg");
	this.shape_2.setTransform(3.3,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_84, new cjs.Rectangle(0,0,6.5,28.4), null);


(lib.Group_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#555C69").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape.setTransform(2.9,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape_1.setTransform(3,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A6270").s().p("AgbAlIAEgtIAzgeIgEAtIAAACIgzAeg");
	this.shape_2.setTransform(3.2,43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgXgLIAzgeIgDA1Ig0Aeg");
	this.shape_3.setTransform(3.6,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgZgFIA0gfIgCAqIgzAfg");
	this.shape_4.setTransform(3.8,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6573").s().p("AgRh1IAAgBIA0gfIgBACIgQEKIg0Afg");
	this.shape_5.setTransform(4.7,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_6.setTransform(5.6,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#636B7A").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_7.setTransform(5.6,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#687080").s().p("AgaAPIA0geIAAACIgzAdg");
	this.shape_8.setTransform(5.6,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8994A9").s().p("AgaANIAzgdIADAEIg0Adg");
	this.shape_9.setTransform(5.2,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8691A6").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#818B9F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_11.setTransform(4.8,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_12.setTransform(4.7,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737C8E").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_13.setTransform(4.4,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E7687").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_14.setTransform(4.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_83, new cjs.Rectangle(0.3,0,7.9,47.5), null);


(lib.Group_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape.setTransform(8.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3651").s().p("AgaAPIA0geIAAACIgzAdg");
	this.shape_1.setTransform(8,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#303753").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_2.setTransform(8,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#313854").s().p("AgZAPIAzgeIABABIgzAeg");
	this.shape_3.setTransform(7.9,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323956").s().p("AgcALIA0gdIAFAIIg0Adg");
	this.shape_4.setTransform(7.6,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313854").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_5.setTransform(7.2,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#303753").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape_6.setTransform(7.1,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F3651").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_7.setTransform(6.9,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2E344F").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_8.setTransform(6.8,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D334D").s().p("AgWASIgIgHIAzgdIAJAHIABABIgzAdg");
	this.shape_9.setTransform(6.2,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C324C").s().p("AgeAMIA0geIAIAHIgzAeg");
	this.shape_10.setTransform(5.3,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B314A").s().p("AgcANIA0gdIAFADIg0Aeg");
	this.shape_11.setTransform(4.6,12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3048").s().p("AgbAOIAzgdIAEACIgzAdg");
	this.shape_12.setTransform(4.1,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#292F47").s().p("AgaAPIAAAAIAzgeIABAAIABABIg0Aeg");
	this.shape_13.setTransform(3.9,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3048").s().p("AgaAPIA0geIABABIgzAeg");
	this.shape_14.setTransform(3.7,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C324C").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_15.setTransform(3.5,11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#313854").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_16.setTransform(3.1,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323956").s().p("AgaANIAzgdIACADIgzAeg");
	this.shape_17.setTransform(2.9,11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_18.setTransform(2.6,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#22273A").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_19.setTransform(2.6,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#23283C").s().p("AgZgKIA0gfIgBA0Ig0AfIABg0g");
	this.shape_20.setTransform(2.7,6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#22273A").s().p("AgZAJIA0gdIgBALIg0Aeg");
	this.shape_21.setTransform(2.8,3.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#212639").s().p("AgZALIAzgeIAAAJIg0Adg");
	this.shape_22.setTransform(2.9,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#202437").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_23.setTransform(2.9,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_82, new cjs.Rectangle(0,0,10.9,18.7), null);


(lib.Group_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_81, null, null);


(lib.Group_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_80, null, null);


(lib.Group_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYAOIA0geIgFAEIgyAdIADgDg");
	this.shape.setTransform(2.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_1.setTransform(3.2,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZAOIA0geIgBAEIgzAdg");
	this.shape_2.setTransform(3.3,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24293E").s().p("AgZAMIAzgeIABAHIg0Aeg");
	this.shape_3.setTransform(3.3,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252A40").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_4.setTransform(3.2,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZALIAzgdIAAAIIgzAdg");
	this.shape_5.setTransform(3.2,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_6.setTransform(3.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_7.setTransform(3.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_8.setTransform(3.3,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_79, new cjs.Rectangle(0.2,0.6,5.8,7.1), null);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_42();
	this.instance.parent = this;
	this.instance.setTransform(-55,-19,1,1,0,0,0,7.1,24.4);

	this.instance_1 = new lib.Group_40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1,1,1,0,0,0,70.8,197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-197.7,141.6,395.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_41();
	this.instance.parent = this;
	this.instance.setTransform(40.3,37,1,1,0,0,0,7.1,24.4);

	this.instance_1 = new lib.Group_39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1,1,1,0,0,0,70.8,197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-197.7,141.6,395.6);


(lib.Group_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(256.7,259,1,1,0,0,0,76,259);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.6,381.3,1,1,0,0,0,44.6,240.8);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.6,366.3,1,1,0,0,0,44.6,240.8);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(172.6,307.3,1,1,0,0,0,44.6,240.8);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.8,336.6,1,1,0,0,0,67,253.6);
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_0, new cjs.Rectangle(0,0,332.7,622.3), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
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
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	mask.setTransform(7.3,13);

	// Layer 3
	this.instance = new lib.Group_34();
	this.instance.parent = this;
	this.instance.setTransform(7.3,13,1,1,0,0,0,7.3,13);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	this.shape.setTransform(7.3,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,14.6,26), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	mask.setTransform(13.8,16.9);

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
	this.shape.graphics.f("#2C0A18").s().p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	this.shape.setTransform(13.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
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
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	mask.setTransform(7.3,13);

	// Layer 3
	this.instance = new lib.Group_21();
	this.instance.parent = this;
	this.instance.setTransform(7.3,13,1,1,0,0,0,7.3,13);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	this.shape.setTransform(7.3,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,14.6,26), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	mask.setTransform(13.8,16.9);

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
	this.shape.graphics.f("#2C0A18").s().p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	this.shape.setTransform(13.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
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
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngXIAxAcQgoAXgdAyQgcAwABAvQAAAtAaAQg");
	this.shape.setTransform(7.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,14.6,25.9), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
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
	this.shape.graphics.f("#2C0A18").s().p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
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
	this.shape.graphics.f("#2C0A18").s().p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
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
	this.shape.graphics.f("#2C0A18").s().p("AiKBiQBBglAshOQAthOgBhJIB8BHQgBBKgsBNQguBPg+Akg");
	this.shape.setTransform(13.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
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
	mask.graphics.p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
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
	mask.graphics.p("AhzgYQBAglAuAaIB5BGQgVgMgbADQgdACggASg");
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
	mask.graphics.p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	mask.setTransform(11.7,4.7);

	// Layer 3
	this.instance = new lib.Group_28();
	this.instance.parent = this;
	this.instance.setTransform(12.1,4.6,1,1,0,0,0,12.1,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	this.shape.setTransform(11.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0.2,0,23.2,9.3), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	mask.setTransform(11.7,4.7);

	// Layer 3
	this.instance = new lib.Group_15();
	this.instance.parent = this;
	this.instance.setTransform(12.1,4.6,1,1,0,0,0,12.1,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	this.shape.setTransform(11.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0.2,0,23.2,9.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	mask.setTransform(11.7,4.7);

	// Layer 3
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(12.1,4.6,1,1,0,0,0,12.1,4.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AAGAjIh5hFQAuAZA/glIB6BHQgmAWgfAAQgWAAgTgMg");
	this.shape.setTransform(11.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.2,0,23.2,9.3), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	mask.setTransform(8.5,8.6);

	// Layer 3
	this.instance = new lib.Group_29();
	this.instance.parent = this;
	this.instance.setTransform(8.4,8.6,1,1,0,0,0,8.4,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	mask.setTransform(8.5,8.6);

	// Layer 3
	this.instance = new lib.Group_16();
	this.instance.parent = this;
	this.instance.setTransform(8.4,8.6,1,1,0,0,0,8.4,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	mask.setTransform(8.5,8.6);

	// Layer 3
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(8.4,8.6,1,1,0,0,0,8.4,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AgmANQgBhGgrgbIB4BHQAWAMALAYQAMAaAAAkg");
	this.shape.setTransform(8.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.2,0.1,16.7,17), null);


(lib.ClipGroup_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	mask.setTransform(5.9,2);

	// Layer 3
	this.instance = new lib.Group_36();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	this.shape.setTransform(5.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_7, new cjs.Rectangle(0,0,11.8,4.2), null);


(lib.ClipGroup_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	mask.setTransform(5.9,2.1);

	// Layer 3
	this.instance = new lib.Group_33();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	this.shape.setTransform(5.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_6, new cjs.Rectangle(0,0,11.9,4.2), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	mask.setTransform(8.4,8.5);

	// Layer 3
	this.instance = new lib.Group_30();
	this.instance.parent = this;
	this.instance.setTransform(8.3,8.5,1,1,0,0,0,8.3,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(0,0,16.8,17), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	mask.setTransform(5.9,2);

	// Layer 3
	this.instance = new lib.Group_23();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	this.shape.setTransform(5.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0,0,11.8,4.2), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	mask.setTransform(5.9,2.1);

	// Layer 3
	this.instance = new lib.Group_20();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	this.shape.setTransform(5.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,11.9,4.2), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	mask.setTransform(8.4,8.5);

	// Layer 3
	this.instance = new lib.Group_17();
	this.instance.parent = this;
	this.instance.setTransform(8.3,8.5,1,1,0,0,0,8.3,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,16.8,17), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	mask.setTransform(5.9,2);

	// Layer 3
	this.instance = new lib.Group_10();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gGQApgYAcARIAwAbQgNgHgSABQgSACgTALg");
	this.shape.setTransform(5.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,11.8,4.2), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	mask.setTransform(5.9,2.1);

	// Layer 3
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(5.7,2,1,1,0,0,0,5.7,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("Ag6gHQApgXAcARIAwAbQgOgIgRACQgTABgSAMg");
	this.shape.setTransform(5.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,11.9,4.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	mask.setTransform(8.4,8.5);

	// Layer 3
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(8.3,8.5,1,1,0,0,0,8.3,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C0A18").s().p("AglAOQgtgZgBhJIB6BIQAAAiANAaQALAYAVANg");
	this.shape.setTransform(8.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,16.8,17), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	mask.setTransform(7.3,13);

	// Layer 3
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(7.3,13,1,1,0,0,0,7.3,13);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgrBmQgdgRAAguQAAgtAcgyQAdgxAngYIAxAdQgoAXgdAxQgcAxABAuQAAAuAaARg");
	this.shape.setTransform(7.3,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,14.6,26), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	mask.setTransform(13.8,16.9);

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
	this.shape.graphics.f("#2C0A18").s().p("AiJBiQgBhJAuhOQAshOBAglIB7BHQhAAlgtBOQgtBOABBJg");
	this.shape.setTransform(13.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,27.7,33.9), null);


(lib.ClipGroup_76_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAdIAAgWQAAgMADgCIA0geQgEACAAANIAAAWQAAAFgGADIgzAeQAGgDAAgGg");
	mask.setTransform(3.1,3.8);

	// Layer 3
	this.instance = new lib.Group_79();
	this.instance.parent = this;
	this.instance.setTransform(3,4.1,1,1,0,0,0,3,4.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76_0, new cjs.Rectangle(0.2,0.6,5.8,7.1), null);


(lib.ClipGroup_75_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIAzgeIACABIgzAdg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_80();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75_0, null, null);


(lib.ClipGroup_74_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAPIAzgeQAEACACgBIgzAeIgCAAIgEgBg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_81();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74_0, null, null);


(lib.ClipGroup_73_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AACBaQAAgRgQgOIgbgUQgNgIABgPQgBg4AEgZIA0gfQgDAZAAA6QAAANALAIIAbAUQARAOAAASQAAAGgCABIg0AeQABgCABgFg");
	mask.setTransform(5.4,9.7);

	// Layer 3
	this.instance = new lib.Group_82();
	this.instance.parent = this;
	this.instance.setTransform(5.4,9.3,1,1,0,0,0,5.4,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73_0, new cjs.Rectangle(0,0,10.9,18.7), null);


(lib.ClipGroup_72_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkDlQAHhGABgwQAAgjAFhHIAMi6IABgDQAAgPgNgHIgDgCIA0gfIACACQANAIAAAPIAAADIgNC7IgEBpQgBAigIBUQgBAJgDABIgzAeQADgBABgJg");
	mask.setTransform(4.1,24);

	// Layer 3
	this.instance = new lib.Group_83();
	this.instance.parent = this;
	this.instance.setTransform(4.2,23.7,1,1,0,0,0,4.2,23.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72_0, new cjs.Rectangle(0.3,0,7.9,47.5), null);


(lib.ClipGroup_71_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAIhxIAzgeIgHBxQgFBEAAAvIgzAfQAAgwAEhEg");
	mask.setTransform(3.2,14.5);

	// Layer 3
	this.instance = new lib.Group_84();
	this.instance.parent = this;
	this.instance.setTransform(3.2,14.2,1,1,0,0,0,3.2,14.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71_0, new cjs.Rectangle(0,1.5,6.4,26), null);


(lib.ClipGroup_70_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AARgKIASgJIg0AeIgRAJg");
	mask.setTransform(3.5,2);

	// Layer 3
	this.instance = new lib.Group_85();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70_0, null, null);


(lib.ClipGroup_69_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXghIAzgeQgCAggCBBIg0AeQAChBADggg");
	mask.setTransform(3.9,6.4);

	// Layer 3
	this.instance = new lib.Group_86();
	this.instance.parent = this;
	this.instance.setTransform(3.4,14.7,1,1,0,0,0,3.4,14.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69_0, new cjs.Rectangle(1,0.1,5.7,12.8), null);


(lib.ClipGroup_68_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_87();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68_0, null, null);


(lib.ClipGroup_67_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgRIAzgfIgEBCIgDACIgwAdIAEhCg");
	mask.setTransform(2.8,5.1);

	// Layer 3
	this.instance = new lib.Group_88();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67_0, new cjs.Rectangle(0,0.3,5.7,9.8), null);


(lib.ClipGroup_66_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgeIAAADIgzAeg");
	mask.setTransform(3,1.7);

	// Layer 3
	this.instance = new lib.Group_89();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66_0, new cjs.Rectangle(0.4,0,5.3,3.3), null);


(lib.ClipGroup_65_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCAWIABgbQABgQAFgJQAbgwA1gtIA0gfQg2AtgaAxQgEAIgBARIgBAcIgHCEIg1AeIAHiFg");
	mask.setTransform(7.4,15.5);

	// Layer 3
	this.instance = new lib.Group_90();
	this.instance.parent = this;
	this.instance.setTransform(7.4,15.5,1,1,0,0,0,7.4,15.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65_0, new cjs.Rectangle(0,0,14.7,31), null);


(lib.ClipGroup_64_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIA0geQgDADAAAGIg0AdQAAgGADgCg");
	mask.setTransform(3.2,2);

	// Layer 3
	this.instance = new lib.Group_91();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5.9,1,1,0,0,0,2.8,5.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64_0, new cjs.Rectangle(0.4,0.9,5.3,3.1), null);


(lib.ClipGroup_63_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAQQgGgDgCACIAzgeQADgCAFAEIACAAIgzAeg");
	mask.setTransform(3.1,1.6);

	// Layer 3
	this.instance = new lib.Group_92();
	this.instance.parent = this;
	this.instance.setTransform(3.6,1.8,1,1,0,0,0,3.6,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63_0, new cjs.Rectangle(0.9,0.2,5.4,3.1), null);


(lib.ClipGroup_62_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAOIA0geIAFADIg0Aeg");
	mask.setTransform(2.9,1.7);

	// Layer 3
	this.instance = new lib.Group_93();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.7,1,1,0,0,0,2.9,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62_0, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.ClipGroup_61_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVgsIACgMQAAgGgJgGIAzgfQAKAGAAAHIgCALIgLCQIg0Afg");
	mask.setTransform(3.3,10);

	// Layer 3
	this.instance = new lib.Group_94();
	this.instance.parent = this;
	this.instance.setTransform(3.2,10,1,1,0,0,0,3.2,10);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61_0, new cjs.Rectangle(0,0.1,6.5,20), null);


(lib.ClipGroup_60_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSAbQALgSAAgaIAAgDIA0geIAAACQgBAcgKASQgKAOgUALIgvAcQAQgKAJgOg");
	mask.setTransform(4.8,5.6);

	// Layer 3
	this.instance = new lib.Group_95();
	this.instance.parent = this;
	this.instance.setTransform(4.8,5.4,1,1,0,0,0,4.8,5.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60_0, new cjs.Rectangle(0.4,0.5,8.9,10.3), null);


(lib.ClipGroup_59_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgeIAAAFIgzAeg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_96();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59_0, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.ClipGroup_58_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAAIAzgfIgEAgIgzAfIAEggg");
	mask.setTransform(2.8,3.3);

	// Layer 3
	this.instance = new lib.Group_97();
	this.instance.parent = this;
	this.instance.setTransform(2.8,3.2,1,1,0,0,0,2.8,3.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58_0, new cjs.Rectangle(0,0.2,5.6,6.3), null);


(lib.ClipGroup_57_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAPIA0geIgBACIg0Adg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_98();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57_0, new cjs.Rectangle(0,0,5.3,3.2), null);


(lib.ClipGroup_56_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_99();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56_0, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.ClipGroup_55_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIAzgdQgCABAAAHIgzAdQAAgHACgBg");
	mask.setTransform(2.7,1.9);

	// Layer 3
	this.instance = new lib.Group_100();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.2,1,1,0,0,0,2.6,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55_0, new cjs.Rectangle(0,0.5,5.3,3.4), null);


(lib.ClipGroup_54_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgeIAzgfQABA8gFAgIg0AfQAFghAAg7g");
	mask.setTransform(2.9,6.2);

	// Layer 3
	this.instance = new lib.Group_101();
	this.instance.parent = this;
	this.instance.setTransform(2.9,6.2,1,1,0,0,0,2.9,6.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54_0, new cjs.Rectangle(0,0,5.7,12.4), null);


(lib.ClipGroup_53_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAQQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAzgdQAAgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIABABIgzAdgAgbAPIAAAAIAAAAg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_102();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53_0, null, null);


(lib.ClipGroup_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_103();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52_0, null, null);


(lib.ClipGroup_51_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAFIA0gdQAJAGAAAOIg0AdQAAgOgJgGg");
	mask.setTransform(3.1,2.5);

	// Layer 3
	this.instance = new lib.Group_104();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.7,1,1,0,0,0,3.3,2.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51_0, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


(lib.ClipGroup_50_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcANIAzgdIAGAEIg0Adg");
	mask.setTransform(2.9,1.8);

	// Layer 3
	this.instance = new lib.Group_105();
	this.instance.parent = this;
	this.instance.setTransform(3.1,1.9,1,1,0,0,0,3.1,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50_0, new cjs.Rectangle(0.5,0.4,5.4,3.1), null);


(lib.ClipGroup_49_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIA0geIABABIg0Adg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_106();
	this.instance.parent = this;
	this.instance.setTransform(2.7,1.6,1,1,0,0,0,2.7,1.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49_0, new cjs.Rectangle(0,0,5.4,3.1), null);


(lib.ClipGroup_48_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdANIgCgBIAzgdIACAAIAKAGIgzAdg");
	mask.setTransform(3.3,1.9);

	// Layer 3
	this.instance = new lib.Group_107();
	this.instance.parent = this;
	this.instance.setTransform(3.3,1.9,1,1,0,0,0,3.3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48_0, new cjs.Rectangle(0.1,0.1,6.4,3.6), null);


(lib.ClipGroup_47_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXARIgHgGIgBgBIAzgdIACABIAGAFIAEAEIgzAdg");
	mask.setTransform(3.3,2.1);

	// Layer 3
	this.instance = new lib.Group_108();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.1,1,1,0,0,0,3.3,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47_0, new cjs.Rectangle(0.1,0.1,6.5,4.1), null);


(lib.ClipGroup_46_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_109();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46_0, null, null);


(lib.ClipGroup_45_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAPIAzgdIAAgBIAEABIgzAdIgBABIgDgBg");
	mask.setTransform(2.8,1.6);

	// Layer 3
	this.instance = new lib.Group_110();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45_0, null, null);


(lib.ClipGroup_44_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAjQgCgIgBgNIABgYIA0geIgBAYQAAANADAIIAAABIAEAFIg0Afg");
	mask.setTransform(3,4.9);

	// Layer 3
	this.instance = new lib.Group_111();
	this.instance.parent = this;
	this.instance.setTransform(2.9,4.5,1,1,0,0,0,2.9,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_0, new cjs.Rectangle(0,0.7,5.9,8.2), null);


(lib.ClipGroup_43_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgdIAAAEIgzAeg");
	mask.setTransform(2.6,2);

	// Layer 3
	this.instance = new lib.Group_112();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_0, new cjs.Rectangle(0,0.3,5.2,3.5), null);


(lib.ClipGroup_42_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnAIIA0geIAbAPIg0Aeg");
	mask.setTransform(4,2.3);

	// Layer 3
	this.instance = new lib.Group_113();
	this.instance.parent = this;
	this.instance.setTransform(4,2.3,1,1,0,0,0,4,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_0, new cjs.Rectangle(0,0,7.9,4.5), null);


(lib.ClipGroup_41_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAXQAAgPAFgDIA0geQgFADgBAQIAAACIgzAeg");
	mask.setTransform(2.9,2.6);

	// Layer 3
	this.instance = new lib.Group_114();
	this.instance.parent = this;
	this.instance.setTransform(2.6,3.1,1,1,0,0,0,2.6,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_0, new cjs.Rectangle(0,0.7,5.3,4.5), null);


(lib.ClipGroup_40_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAQIgFgDIA0geIAEADIADACIg0Adg");
	mask.setTransform(3.1,1.9);

	// Layer 3
	this.instance = new lib.Group_115();
	this.instance.parent = this;
	this.instance.setTransform(3.1,1.8,1,1,0,0,0,3.1,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_0, new cjs.Rectangle(0.1,0.1,5.9,3.5), null);


(lib.ClipGroup_39_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTAJIAngTIgkAVg");
	mask.setTransform(2,2.2);

	// Layer 3
	this.instance = new lib.Group_116();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.8,1,1,0,0,0,2.6,1.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_0, new cjs.Rectangle(0.3,1.1,3.8,2.2), null);


(lib.ClipGroup_38_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAPIAAgBIAzgdQAEACACgBIg0AeIgBAAIgEgBg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_117();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_0, null, null);


(lib.ClipGroup_37_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAQQgLgFgFADIAzgdQAGgDALAFQAEACADgCIgxAdIgEABIgGgBg");
	mask.setTransform(3.8,1.7);

	// Layer 3
	this.instance = new lib.Group_118();
	this.instance.parent = this;
	this.instance.setTransform(3.8,1.7,1,1,0,0,0,3.8,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_0, new cjs.Rectangle(0.7,0,6.1,3.3), null);


(lib.ClipGroup_36_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAxABQiMg3h+AxIgCABIA3gfQB9gxCMA3QAoAQBPAqIg1AeQhPgrgngPg");
	mask.setTransform(22,5.9);

	// Layer 3
	this.instance = new lib.Group_119();
	this.instance.parent = this;
	this.instance.setTransform(21.9,5.9,1,1,0,0,0,21.9,5.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_0, new cjs.Rectangle(0,0,43.9,11.9), null);


(lib.ClipGroup_35_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUAyQAAgyACgZIAAgEQABgJgEgGQgDgEgJgFIA0gfQAIAFADAFQAEAGAAAIIAAAFQgCAQgBA6IAAAjIgzAfg");
	mask.setTransform(3.4,8.5);

	// Layer 3
	this.instance = new lib.Group_120();
	this.instance.parent = this;
	this.instance.setTransform(3.4,8.5,1,1,0,0,0,3.4,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_0, new cjs.Rectangle(0,0,6.8,17), null);


(lib.ClipGroup_34_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfAKIAzgeQAEAGAJAGIg0AdQgJgFgDgGg");
	mask.setTransform(3.4,2.4);

	// Layer 3
	this.instance = new lib.Group_121();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.2,1,1,0,0,0,3.3,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_0, new cjs.Rectangle(0.2,0.3,6.5,4.2), null);


(lib.ClipGroup_33_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0ATQgRgvARgmIADgEIA0gfIgDAFQgRAmARAvQARAvAsAkIg0AeQgsgkgRgvg");
	mask.setTransform(6.1,10.2);

	// Layer 3
	this.instance = new lib.Group_122();
	this.instance.parent = this;
	this.instance.setTransform(6.1,10.3,1,1,0,0,0,6.1,10.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_0, new cjs.Rectangle(0,0.3,12.3,20.2), null);


(lib.ClipGroup_32_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdATIADgFIAHgHIAzgdIgHAHQgCAHgDACIg0AdQACgBABgDgAAggWIAAAAIAAAAg");
	mask.setTransform(3.3,2.3);

	// Layer 3
	this.instance = new lib.Group_123();
	this.instance.parent = this;
	this.instance.setTransform(3.4,2.2,1,1,0,0,0,3.4,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_0, new cjs.Rectangle(0.2,0,6.3,4.4), null);


(lib.ClipGroup_31_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAeIgCgTIAAgGQAAgEAFgOIAAAAQABgFADgBIAygeQgCABgBAFIAAAAQgFAPAAAEIABAFIACATQABAMAEAIIgzAeQgFgIgBgMg");
	mask.setTransform(3,5.1);

	// Layer 3
	this.instance = new lib.Group_124();
	this.instance.parent = this;
	this.instance.setTransform(3.1,5.5,1,1,0,0,0,3.1,5.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_0, new cjs.Rectangle(0.1,0.6,6,9.5), null);


(lib.ClipGroup_30_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAPQgDgBgDABIA0geQACgBAEACIABAAIgzAeg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_125();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_0, null, null);


(lib.ClipGroup_29_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIAzgeIACABIg0Aeg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_126();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_0, null, null);


(lib.ClipGroup_28_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjDCIAAAAgAghC5QAGhcAChqIAEhlIAGgwIAzgfIgFAxIgFBkQgCBqgFBcQgCAIgBABIgzAfQABgBABgIg");
	mask.setTransform(3.6,19.4);

	// Layer 3
	this.instance = new lib.Group_127();
	this.instance.parent = this;
	this.instance.setTransform(3.6,19.2,1,1,0,0,0,3.6,19.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_0, new cjs.Rectangle(0.2,0,7.1,38.4), null);


(lib.ClipGroup_27_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAzgeIAEADIgzAeg");
	mask.setTransform(2.8,1.7);

	// Layer 3
	this.instance = new lib.Group_128();
	this.instance.parent = this;
	this.instance.setTransform(2.8,1.7,1,1,0,0,0,2.8,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_0, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


(lib.ClipGroup_26_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_129();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_0, null, null);


(lib.ClipGroup_25_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWggIA0gfQBAAoA5A4Ig1AfQg2g4hCgog");
	mask.setTransform(8.7,6.4);

	// Layer 3
	this.instance = new lib.Group_130();
	this.instance.parent = this;
	this.instance.setTransform(8.9,6.6,1,1,0,0,0,8.9,6.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_0, new cjs.Rectangle(0,0,17.4,12.8), null);


(lib.ClipGroup_24_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbANIAzgdIAEADIgzAeg");
	mask.setTransform(3.2,2.1);

	// Layer 3
	this.instance = new lib.Group_131();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_0, new cjs.Rectangle(0.4,0.4,5.6,3.4), null);


(lib.ClipGroup_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_132();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_0, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.ClipGroup_22_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAUIgKgJIgBgBIAzgeIABABIAKAJQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIgzAdIgBABIgCgBg");
	mask.setTransform(4.1,2.8);

	// Layer 3
	this.instance = new lib.Group_133();
	this.instance.parent = this;
	this.instance.setTransform(3.5,2.3,1,1,0,0,0,3.5,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_0, new cjs.Rectangle(0.8,0.8,6.2,3.9), null);


(lib.ClipGroup_21_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAFIAzgeQAAAUgCABIgzAeQACgCAAgTg");
	mask.setTransform(2.8,2.6);

	// Layer 3
	this.instance = new lib.Group_134();
	this.instance.parent = this;
	this.instance.setTransform(2.9,2.4,1,1,0,0,0,2.9,2.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_0, new cjs.Rectangle(0.2,0,5.3,4.8), null);


(lib.ClipGroup_20_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgRBAQgBgMgJgmQgHgeAAgRIAzgeQAAARAIAfQAIAlACAMIg0Afg");
	mask.setTransform(3.5,6.5);

	// Layer 3
	this.instance = new lib.Group_135();
	this.instance.parent = this;
	this.instance.setTransform(3.5,6.5,1,1,0,0,0,3.5,6.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_0, new cjs.Rectangle(0,0.1,7,12.9), null);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_136();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_0, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.ClipGroup_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAHIAzgdQgCAIAAAHIgzAeQAAgIACgIg");
	mask.setTransform(2.7,2.4);

	// Layer 3
	this.instance = new lib.Group_137();
	this.instance.parent = this;
	this.instance.setTransform(2.7,2.5,1,1,0,0,0,2.7,2.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_0, new cjs.Rectangle(0,0.1,5.4,4.6), null);


(lib.ClipGroup_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAvBbQAAgMgGgHIgFgGIiBiCIgEgFIgBAAIA0gfIABABIAFAEICACCIAGAHQAFAGAAANIAAAJIg0Aeg");
	mask.setTransform(9.9,10.1);

	// Layer 3
	this.instance = new lib.Group_138();
	this.instance.parent = this;
	this.instance.setTransform(10,10.1,1,1,0,0,0,10,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_0, new cjs.Rectangle(0.3,0.2,19.6,19.9), null);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYACIAAgDIAzgeIAAADQAAAVgCAJIgzAeQACgJAAgVg");
	mask.setTransform(2.7,3.6);

	// Layer 3
	this.instance = new lib.Group_139();
	this.instance.parent = this;
	this.instance.setTransform(2.7,3.5,1,1,0,0,0,2.7,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_0, new cjs.Rectangle(0,0.4,5.5,6.5), null);


(lib.ClipGroup_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgdIAAACIgzAdg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_140();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_0, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_141();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0, new cjs.Rectangle(0,0,5.3,4), null);


(lib.ClipGroup_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAJIAzgeIAAAOIgzAdg");
	mask.setTransform(2.6,2.2);

	// Layer 3
	this.instance = new lib.Group_142();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.6,1,1,0,0,0,2.6,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_0, new cjs.Rectangle(0,0,5.3,4.4), null);


(lib.ClipGroup_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_143();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0, null, null);


(lib.ClipGroup_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA8BaIhyh+QgTgUgQgJQgXgOgPAIIA0geQAPgIAYAOQAPAIATAVIBzB9IAPAQIg1Aeg");
	mask.setTransform(12.8,10.5);

	// Layer 3
	this.instance = new lib.Group_144();
	this.instance.parent = this;
	this.instance.setTransform(13.3,10.5,1,1,0,0,0,13.3,10.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_0, new cjs.Rectangle(1,0,24.6,21), null);


(lib.ClipGroup_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfABIAzgeQAMASAAALIgzAeQAAgMgMgRg");
	mask.setTransform(3.2,3);

	// Layer 3
	this.instance = new lib.Group_145();
	this.instance.parent = this;
	this.instance.setTransform(3.1,2.7,1,1,0,0,0,3.1,2.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, new cjs.Rectangle(0,0,6.4,5.5), null);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTgdQACgaAAgOQAAgfgRgbIA0gfQARAcAAAfQAAANgDAbIgJC7IgzAfIAJi8g");
	mask.setTransform(3.5,15.9);

	// Layer 3
	this.instance = new lib.Group_146();
	this.instance.parent = this;
	this.instance.setTransform(3.5,15.8,1,1,0,0,0,3.5,15.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, new cjs.Rectangle(0,0,6.9,31.8), null);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeDKIAEhWQADgoAChPIAGh3QADg/AAgWIA0gfQgBAXgDA+IgFB4QgDBPgCAnIgEBXQgCAfgHAFIg0AfQAIgFABggg");
	mask.setTransform(4,23.9);

	// Layer 3
	this.instance = new lib.Group_147();
	this.instance.parent = this;
	this.instance.setTransform(4,23.9,1,1,0,0,0,4,23.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, new cjs.Rectangle(0,0,7.9,47.7), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglEXQAAgbAIiCIAEhsQADhBADgoIABg4QACgiADgUIACgSQAAgTgPgTIAzgeQAPASABATIgDASQgDAUgBAjIgCA4QgDAngDBDIgEBqQgICCAAAbQAAAJgDABIgyAeQACgBAAgIg");
	mask.setTransform(4.1,28.8);

	// Layer 3
	this.instance = new lib.Group_148();
	this.instance.parent = this;
	this.instance.setTransform(4.2,28.5,1,1,0,0,0,4.2,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(0.3,0,7.9,57.1), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqGjQAPkfAGiQQAIjNAJh9QADgigJgZIAzgeQAJAZgCAhQgJB9gJDOQgGCPgOEgQgBAKgFADIg0AeQAFgDABgKg");
	mask.setTransform(4.9,43.6);

	// Layer 3
	this.instance = new lib.Group_149();
	this.instance.parent = this;
	this.instance.setTransform(4.9,43.4,1,1,0,0,0,4.9,43.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(0,0.4,9.7,86.4), null);


(lib.ClipGroup_5_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgaARIABgGIA0geIgBAHIABACIg0Adg");
	mask_1.setTransform(2.7,2);

	// Layer 3
	this.instance_1 = new lib.Group_150();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,1.8,1,1,0,0,0,2.6,1.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_1, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_4_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAQAuQgNgWgYgPIgTgJIgbgRIgCgBIA0gfIACABIAaARIATAKQAaAPAMAVIACAEIg0Afg");
	mask_1.setTransform(7,5);

	// Layer 3
	this.instance_2 = new lib.Group_151();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7,5,1,1,0,0,0,7,5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_1, new cjs.Rectangle(0,0,14.1,10), null);


(lib.ClipGroup_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgaAQIgLgRIA0gfIALASQAGALAFAFIgzAfQgFgGgHgLg");
	mask_1.setTransform(3.8,3.3);

	// Layer 3
	this.instance_1 = new lib.Group_152();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,3.2,1,1,0,0,0,3.8,3.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_1, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AglgEIA0geQAQAVAGASIgzAeQgGgSgRgVg");
	mask_1.setTransform(3.8,3.5);

	// Layer 3
	this.instance_1 = new lib.Group_153();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,3.5,1,1,0,0,0,3.8,3.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, new cjs.Rectangle(0,0,7.5,7.1), null);


(lib.ClipGroup_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhNgTQgYgMgPAJIA0gfQAPgJAYANQBRAqA9AiIg0AeQg+gjhQgpg");
	mask_1.setTransform(11.8,5.7);

	// Layer 3
	this.instance_1 = new lib.Group_154();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.3,5.7,1,1,0,0,0,12.3,5.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_1, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhCEmQgEgjACgXQADgcANgRQAMgPAOgaIAYgsQAFgKABgIIANkUQABgjgOgdQgQghgjgUIAzgfQAkAVAQAhQAPAdgBAiIgOEVQAAAIgGAKIgYAsQgOAZgMAPQgNARgDAcQgCAXAEAkQADARAAAZIg1AfQAAgZgCgSg");
	mask_1.setTransform(7,33.7);

	// Layer 3
	this.instance_1 = new lib.Group_155();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,33.6,1,1,0,0,0,7,33.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0.1,0,14,67.3), null);


(lib.Group_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,13);

	this.instance_1 = new lib.ClipGroup_1_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E204E").s().p("AstSKQgugaAAhJIgDxpQgBhJAuhPQAthOBAglIWFsxQBAgkAtAaQAuAaAABJIADRpQAABJgtBOQgtBPhAAlI2FMwQgmAVgfAAQgVAAgTgKgADEr4IsvHYQhAAlgtBOQguBOAABJIADOpQAABKAuAaQAtAaBAglIMwnXQA/glAuhPQAthOAAhJIgDupQAAhJgugaQgTgLgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AsAF0IWFsvIB8BHI2FMwg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag7IRIgDxpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,232,1,1,0,0,0,8.3,8.5);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.3,48.7,1,1,0,0,0,8.4,8.6);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AnVDIIMwnWIB7BHIswHWg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.7,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,185,241.6), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,13);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E204E").s().p("AstSKQgugaAAhJIgDxpQgBhJAuhPQAthOBAglIWFsxQBAgkAtAaQAuAaAABJIADRpQAABJgtBOQgtBPhAAlI2FMwQgmAVgfAAQgVAAgTgKgADEr4IsvHYQhAAlgtBOQguBOAABJIADOpQAABKAuAaQAtAaBAglIMwnXQA/glAuhPQAthOAAhJIgDupQAAhJgugaQgTgLgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AsAF0IWFsvIB8BHI2FMwg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag7IRIgDxpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,232,1,1,0,0,0,8.3,8.5);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.3,48.7,1,1,0,0,0,8.4,8.6);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AnVDIIMwnWIB7BHIswHWg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.7,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,185,241.6), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB4QgdgRAAguQAAgvAdgwQAcgyAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgUAAQgNAAgMgGg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,12.9);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8C8C").s().p("AhEB3QgdgQAAgvQAAguAdgxQAcgxAogXQAogXAdAQQAcAQABAvQAAAugdAxQgcAxgpAXQgXAOgTAAQgOAAgMgHg");
	this.shape.setTransform(14.6,15.4);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(7.3,14.3,1,1,0,0,0,7.3,13);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,2,1,1,0,0,0,5.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,24.4,28.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(13.8,100.7,1,1,0,0,0,13.8,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E204E").s().p("AstSKQgugaAAhJIgDxpQgBhJAuhPQAthOBAglIWFsxQBAgkAtAaQAuAaAABJIADRpQAABJgtBOQgtBPhAAlI2FMwQgmAVgfAAQgVAAgTgKgADEr4IsvHYQhAAlgtBOQguBOAABJIADOpQAABKAuAaQAtAaBAglIMwnXQA/glAuhPQAthOAAhJIgDupQAAhJgugaQgTgLgWAAQgfAAglAVg");
	this.shape.setTransform(98.6,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C0A18").s().p("AsAF0IWFsvIB8BHI2FMwg");
	this.shape_1.setTransform(92.3,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C0A18").s().p("Ag7IRIgDxpIB6BIIADRpg");
	this.shape_2.setTransform(6.3,170.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.6,232,1,1,0,0,0,8.3,8.5);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.3,48.7,1,1,0,0,0,8.4,8.6);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,222.3,1,1,0,0,0,11.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C0A18").s().p("Ag7GxIgDupIB6BIIADOpg");
	this.shape_3.setTransform(127.7,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C0A18").s().p("AnVDIIMwnWIB7BHIswHWg");
	this.shape_4.setTransform(71.6,197.6);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.4,4.6,1,1,0,0,0,11.6,4.6);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,160.7,1,1,0,0,0,13.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,185,241.6), null);


(lib.Group_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(56.9,42,1,1,0,0,0,7,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1F2E").s().p("AAwFnQgNgWgYgOIgugcIgCgBIgnj5Ig2lbQgFglAPgQQAPgPAdAPQBRAqA9AjQAkAUAQAhQAPAdgBAjIgOEUQAAAIgGAKIgYAsQgOAagMAPQgOARgDAcQgCAWAEAkQADASAAAYg");
	this.shape.setTransform(45.4,39.4);

	this.instance_1 = new lib.ClipGroup_1_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.6,5.7,1,1,0,0,0,11.8,5.7);

	this.instance_2 = new lib.ClipGroup_2_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,79.7,1,1,0,0,0,3.8,3.5);

	this.instance_3 = new lib.ClipGroup_3_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.2,75.9,1,1,0,0,0,3.8,3.2);

	this.instance_4 = new lib.ClipGroup_4_0_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.6,70.8,1,1,0,0,0,7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494F5B").s().p("ABnFHIgEgCIgvgcIgBgBIAAhhQAAgzACgZIAAgEQAAgJgEgGQgDgEgIgGQABgFgIgIQgogygJgcQgKgcAIgwQAFgagDgEIgagVQgcgXgXgOQgTgLgRgFIgEgCQgHgEgHgOQgQghgBgjQgCgjANgRQAOgUAfATQAQAIATAVIByB+IAPAQQAEgHABgSQAAgSAEgGIACABIAbARIATAKQAaAPAMAWIACAEIAAAGIAAADQARAbAAAfQAAAOgDAaIgIC8IgEgDQgBgMgJgmQgHgfAAgSQAAgIABgHQACgKAAgVIAAgSQAAgNgLgRIgFAwIgFBkQgCBrgGBcIgBAIIgDABIgDgBgAgGhQQgRAmARAuQAQAwAtAkIAAhQIABgKQAAgHgFgEIgEgDQgFgEgKAFQgDABgFAGIgDAHQgCADgDgCIgFgDQgPgTAHgNQAJgQAPgFIgVgXIgGgFIgBgBQgDAAgCAFgAiBkbIAAABQgFAPAAAEIABAFQACAIAAASQADAQAPAJQBCApA2A4IAFAFIAKAJQAEACACgFIAAgRIAAgKQAAgMgFgHIgFgGIiBiDIgEgEIgBgBIgBgBIgCAAIgDgBQgFAAgCAGg");
	this.shape_1.setTransform(35.3,88.5);

	this.instance_5 = new lib.ClipGroup_5_0_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53,74.6,1,1,0,0,0,2.6,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494F5B").s().p("AAFERIgGgFIgHgHIgCgBIgLgGIgCAAIgDgCQgEgDgCgEIgBgCQgDgJAAgNIABgfQAAgNADgEQAEgFAPAFQAKAFADgOQACgGACgVIAEhWQADgoAChPIAFh3QAEg/AAgWQAPASAAATIgCASQgEAUAAAjIgDA4QgCAngDBDIgFBqQgHCCgBAbQAAAKgDAAIgCAAg");
	this.shape_2.setTransform(51.1,109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1F2E").s().p("AhUKvQgEgDgDgEQgEgFAAgGIABgJIAJitQAGADACgDQACgCABgHQAHhGABgwQABgjAFhHIALi7QABgSgNgIQAAhmAGjMIAzAeQAEADACgCIABgJQAGhbAChrIAFhlIAFgxQALARAAANIAAAUQAAAVgCAJQgBAIAAAIQAAARAHAfQAJAmABAMIAEADIAIi8QADgbAAgNQAAgfgRgcIAAgIIALASQAHALAFAGQATAYAGAaQAFAUgBAcQgJB9gJDOQgGCQgOEfQgBAOgLAAQAEghAAg8QAAgOgJgGQgFgCgBADIgBAHIgEAiIAAAHQAAAhgRAUQgMAPgcANIALiSIACgLQAAgGgJgHIgEgCQgIgEgCABQgEABgBAIIgEBFQgCAggCBCIgHByQgFBEAAAwIAAAHQAAARAOAIQgEAZABA5QgBAPANAIIAbAUQAQAOAAASQgBAJgHgEIgIgFIgEgCIgUgKQgLgFgFACQgEACAAANIAAAWQAAAJgKACIgGAAQgGAAgGgDgAASiyQgDAEAAANIgBAfQAAANADAJIABACQACAEAFADIABABIADABIAMAGIABABIANAMQAHADAAgNQAAgbAIiCIAEhrQADhDADgnIACg4QABgjADgUIACgSQAAgTgPgSQAAAWgEA/IgFB3QgCBQgDAoIgEBWQgBAVgCAGQgEAOgLgFQgHgDgFAAQgFAAgCADg");
	this.shape_3.setTransform(46,144.7);

	this.instance_6 = new lib.ClipGroup_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(56.1,123.2,1,1,0,0,0,4.9,43.4);

	this.instance_7 = new lib.ClipGroup_7_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56,108.1,1,1,0,0,0,4.1,28.9);

	this.instance_8 = new lib.ClipGroup_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.6,103.1,1,1,0,0,0,4,23.9);

	this.instance_9 = new lib.ClipGroup_9_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(53.9,89.3,1,1,0,0,0,3.5,15.8);

	this.instance_10 = new lib.ClipGroup_10_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(51.3,85.5,1,1,0,0,0,3.2,3);

	this.instance_11 = new lib.ClipGroup_11_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(33.2,63.2,1,1,0,0,0,12.8,10.5);

	this.instance_12 = new lib.ClipGroup_12_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(49.2,85.4);

	this.instance_13 = new lib.ClipGroup_13_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51.8,88.1,1,1,0,0,0,2.6,2.6);

	this.instance_14 = new lib.ClipGroup_14_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_15 = new lib.ClipGroup_15_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_16 = new lib.ClipGroup_16_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(51.7,90.2,1,1,0,0,0,2.7,3.5);

	this.instance_17 = new lib.ClipGroup_17_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.5,66.8,1,1,0,0,0,9.9,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1F2E").s().p("ABMBgIgKgJIgCAAIgEgEQg3g4hBgpQgOgJgDgPQgBgSgCgJIgBgFQAAgEAGgPIAAAAQACgJAIADIABABIABABIABAAIAFAEICACDIAFAGQAGAHgBAMIAAAJIAAASQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgCgBg");
	this.shape_4.setTransform(30,69.1);

	this.instance_18 = new lib.ClipGroup_18_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(51.6,92.9,1,1,0,0,0,2.7,2.5);

	this.instance_19 = new lib.ClipGroup_19_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(51.5,93.7,1,1,0,0,0,2.6,1.7);

	this.instance_20 = new lib.ClipGroup_20_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52.4,98.5,1,1,0,0,0,3.5,6.5);

	this.instance_21 = new lib.ClipGroup_21_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(40.7,76.3,1,1,0,0,0,2.8,2.6);

	this.instance_22 = new lib.ClipGroup_22_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(39.4,76.5,1,1,0,0,0,3.7,2.5);

	this.instance_23 = new lib.ClipGroup_23_0();
	this.instance_23.parent = this;
	this.instance_23.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_24 = new lib.ClipGroup_24_0();
	this.instance_24.parent = this;
	this.instance_24.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_25 = new lib.ClipGroup_25_0();
	this.instance_25.parent = this;
	this.instance_25.setTransform(32.8,71.2,1,1,0,0,0,8.9,6.6);

	this.instance_26 = new lib.ClipGroup_26_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(37.2,79.7);

	this.instance_27 = new lib.ClipGroup_27_0();
	this.instance_27.parent = this;
	this.instance_27.setTransform(53.4,103.7,1,1,0,0,0,2.8,1.7);

	this.instance_28 = new lib.ClipGroup_28_0();
	this.instance_28.parent = this;
	this.instance_28.setTransform(49.7,101.9,1,1,0,0,0,3.6,19.4);

	this.instance_29 = new lib.ClipGroup_29_0();
	this.instance_29.parent = this;
	this.instance_29.setTransform(26.1,58.2,1,1,0,0,0,2.6,1.6);

	this.instance_30 = new lib.ClipGroup_30_0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,58,1,1,0,0,0,3,1.6);

	this.instance_31 = new lib.ClipGroup_31_0();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.9,61.7,1,1,0,0,0,3.1,5.2);

	this.instance_32 = new lib.ClipGroup_32_0();
	this.instance_32.parent = this;
	this.instance_32.setTransform(40.4,86.2,1,1,0,0,0,3.2,2.3);

	this.instance_33 = new lib.ClipGroup_33_0();
	this.instance_33.parent = this;
	this.instance_33.setTransform(39.9,87.1,1,1,0,0,0,6.1,10.2);

	this.instance_34 = new lib.ClipGroup_34_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(25.8,65.4,1,1,0,0,0,3.3,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1F2E").s().p("ACcBWQimhfiAA5QgJAEgEgDQgFgDgFgQQgMgggahCQgGgSAJgEQB9gxCMA4QAoAPBPArQAIAGADAEQAEAGAAAJIAAADQgCAZAAAzIgBAjQgYgQgUgMg");
	this.shape_5.setTransform(20.3,100.5);

	this.instance_35 = new lib.ClipGroup_35_0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(42.5,103.4,1,1,0,0,0,3.4,8.5);

	this.instance_36 = new lib.ClipGroup_36_0();
	this.instance_36.parent = this;
	this.instance_36.setTransform(22.3,92,1,1,0,0,0,21.9,5.9);

	this.instance_37 = new lib.ClipGroup_37_0();
	this.instance_37.parent = this;
	this.instance_37.setTransform(51.8,125.2,1,1,0,0,0,3.8,1.7);

	this.instance_38 = new lib.ClipGroup_38_0();
	this.instance_38.parent = this;
	this.instance_38.setTransform(48.4,119.7,1,1,0,0,0,2.9,1.6);

	this.instance_39 = new lib.ClipGroup_39_0();
	this.instance_39.parent = this;
	this.instance_39.setTransform(47.9,119.6,1,1,0,0,0,2.8,1.7);

	this.instance_40 = new lib.ClipGroup_40_0();
	this.instance_40.parent = this;
	this.instance_40.setTransform(47.7,119.3,1,1,0,0,0,3.1,1.8);

	this.instance_41 = new lib.ClipGroup_41_0();
	this.instance_41.parent = this;
	this.instance_41.setTransform(50.4,126.4,1,1,0,0,0,2.9,2.8);

	this.instance_42 = new lib.ClipGroup_42_0();
	this.instance_42.parent = this;
	this.instance_42.setTransform(44.4,117.4,1,1,0,0,0,4,2.3);

	this.instance_43 = new lib.ClipGroup_43_0();
	this.instance_43.parent = this;
	this.instance_43.setTransform(50.1,127.4,1,1,0,0,0,2.6,1.9);

	this.instance_44 = new lib.ClipGroup_44_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(50.4,130,1,1,0,0,0,3,4.5);

	this.instance_45 = new lib.ClipGroup_45_0();
	this.instance_45.parent = this;
	this.instance_45.setTransform(54.3,135.4,1,1,0,0,0,2.8,1.6);

	this.instance_46 = new lib.ClipGroup_46_0();
	this.instance_46.parent = this;
	this.instance_46.setTransform(51.5,133.8);

	this.instance_47 = new lib.ClipGroup_47_0();
	this.instance_47.parent = this;
	this.instance_47.setTransform(53.3,134.6,1,1,0,0,0,3.3,2.1);

	this.instance_48 = new lib.ClipGroup_48_0();
	this.instance_48.parent = this;
	this.instance_48.setTransform(51.9,133.7,1,1,0,0,0,3.3,1.9);

	this.instance_49 = new lib.ClipGroup_49_0();
	this.instance_49.parent = this;
	this.instance_49.setTransform(51.3,133.4,1,1,0,0,0,2.7,1.6);

	this.instance_50 = new lib.ClipGroup_50_0();
	this.instance_50.parent = this;
	this.instance_50.setTransform(51,133.2,1,1,0,0,0,2.9,1.8);

	this.instance_51 = new lib.ClipGroup_51_0();
	this.instance_51.parent = this;
	this.instance_51.setTransform(53.2,154.9,1,1,0,0,0,3.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494F5B").s().p("Ag4DDIAAgIQABgwAEhEIAHhwQAChCADggIADhEQABgJAEgCQACgBAGADIAGAEQAKAGgBAHIgCALIgKCRQAbgNANgPQAQgTAAghIAAgHIAEgiIABgIQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABIACAAIABABQAIAGABAOQAAA8gFAhQg1AtgbAvQgFAJgBAQIgBAcIgGCFQgOgIgBgQg");
	this.shape_6.setTransform(45.4,172.8);

	this.instance_52 = new lib.ClipGroup_52_0();
	this.instance_52.parent = this;
	this.instance_52.setTransform(50,152.4);

	this.instance_53 = new lib.ClipGroup_53_0();
	this.instance_53.parent = this;
	this.instance_53.setTransform(52.5,153.8,1,1,0,0,0,2.9,1.6);

	this.instance_54 = new lib.ClipGroup_54_0();
	this.instance_54.parent = this;
	this.instance_54.setTransform(53.5,160.6,1,1,0,0,0,2.9,6.2);

	this.instance_55 = new lib.ClipGroup_55_0();
	this.instance_55.parent = this;
	this.instance_55.setTransform(52.1,154.2,1,1,0,0,0,2.7,1.9);

	this.instance_56 = new lib.ClipGroup_56_0();
	this.instance_56.parent = this;
	this.instance_56.setTransform(52,154.5,1,1,0,0,0,2.6,1.7);

	this.instance_57 = new lib.ClipGroup_57_0();
	this.instance_57.parent = this;
	this.instance_57.setTransform(51.9,154.9,1,1,0,0,0,2.6,1.7);

	this.instance_58 = new lib.ClipGroup_58_0();
	this.instance_58.parent = this;
	this.instance_58.setTransform(51.8,156.4,1,1,0,0,0,2.8,3.2);

	this.instance_59 = new lib.ClipGroup_59_0();
	this.instance_59.parent = this;
	this.instance_59.setTransform(51.6,158.5,1,1,0,0,0,2.6,1.9);

	this.instance_60 = new lib.ClipGroup_60_0();
	this.instance_60.parent = this;
	this.instance_60.setTransform(49.8,162,1,1,0,0,0,4.8,5.4);

	this.instance_61 = new lib.ClipGroup_61_0();
	this.instance_61.parent = this;
	this.instance_61.setTransform(46.4,158.4,1,1,0,0,0,3.2,10);

	this.instance_62 = new lib.ClipGroup_62_0();
	this.instance_62.parent = this;
	this.instance_62.setTransform(46,149.8,1,1,0,0,0,2.9,1.7);

	this.instance_63 = new lib.ClipGroup_63_0();
	this.instance_63.parent = this;
	this.instance_63.setTransform(45.2,149.6,1,1,0,0,0,3.1,1.7);

	this.instance_64 = new lib.ClipGroup_64_0();
	this.instance_64.parent = this;
	this.instance_64.setTransform(44.3,153.3,1,1,0,0,0,3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494F5B").s().p("AgRDfIAEh/QAFhQACgoQADhsAFhcIAEACQAMAIAAAPIAAADIgMC7QgFBGAAAjQgBAwgHBGQAAAHgCACQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_7.setTransform(39.2,171.1);

	this.instance_65 = new lib.ClipGroup_65_0();
	this.instance_65.parent = this;
	this.instance_65.setTransform(48.5,179.2,1,1,0,0,0,7.4,15.5);

	this.instance_66 = new lib.ClipGroup_66_0();
	this.instance_66.parent = this;
	this.instance_66.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_67 = new lib.ClipGroup_67_0();
	this.instance_67.parent = this;
	this.instance_67.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_68 = new lib.ClipGroup_68_0();
	this.instance_68.parent = this;
	this.instance_68.setTransform(39.5,145.6);

	this.instance_69 = new lib.ClipGroup_69_0();
	this.instance_69.parent = this;
	this.instance_69.setTransform(43.3,170.4,1,1,0,0,0,3.4,14.7);

	this.instance_70 = new lib.ClipGroup_70_0();
	this.instance_70.parent = this;
	this.instance_70.setTransform(46.7,166.4,1,1,0,0,0,3.5,1.9);

	this.instance_71 = new lib.ClipGroup_71_0();
	this.instance_71.parent = this;
	this.instance_71.setTransform(42.9,178.3,1,1,0,0,0,3.2,14.2);

	this.instance_72 = new lib.ClipGroup_72_0();
	this.instance_72.parent = this;
	this.instance_72.setTransform(42.2,169.6,1,1,0,0,0,4.1,23.9);

	this.instance_73 = new lib.ClipGroup_73_0();
	this.instance_73.parent = this;
	this.instance_73.setTransform(46.2,201.4,1,1,0,0,0,5.4,9.7);

	this.instance_74 = new lib.ClipGroup_74_0();
	this.instance_74.parent = this;
	this.instance_74.setTransform(40.5,192,1,1,0,0,0,3,1.6);

	this.instance_75 = new lib.ClipGroup_75_0();
	this.instance_75.parent = this;
	this.instance_75.setTransform(40.1,192,1,1,0,0,0,2.7,1.6);

	this.instance_76 = new lib.ClipGroup_76_0();
	this.instance_76.parent = this;
	this.instance_76.setTransform(42.8,209.8,1,1,0,0,0,3.1,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_7},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.shape_6},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_5},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_4},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_78, new cjs.Rectangle(0.1,0,63.8,213.9), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_78();
	this.instance.parent = this;
	this.instance.setTransform(-2.7,-1,1.74,1.74,-146,0,0,33.6,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,-177.1,239.3,329.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtMTdIAAjDIaZAAIAADDgAtMNNIAAjDIaZAAIAADDgAtMG9IAAtlIaZAAIAANlgAtMtWIAAmGIaZAAIAAGGg");
	this.shape.setTransform(84.5,124.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223057").s().p("AtMSAIAAjNIaZAAIAADNgAtMLxIAAjNIaZAAIAADNgAtMFgIAAjNIaZAAIAADNgAtMrRIAAmuIaZAAIAAGug");
	this.shape_1.setTransform(84.5,154.3);

	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.5,134.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:35.1},5,cjs.Ease.get(1)).to({y:134.8},5,cjs.Ease.get(1)).to({y:35.1},5,cjs.Ease.get(1)).to({y:134.8},5,cjs.Ease.get(1)).to({y:35.1},5,cjs.Ease.get(1)).to({y:134.8},5,cjs.Ease.get(1)).wait(21));

	// Layer 2
	this.instance_1 = new lib.Group_78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(231.3,83.3,1.74,1.74,-146,0,0,33.6,106.5);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.1,84.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:-15.3},5,cjs.Ease.get(1)).to({y:84.3},5,cjs.Ease.get(1)).to({y:-15.3},5,cjs.Ease.get(1)).to({y:84.3},5,cjs.Ease.get(1)).to({y:-15.3},5,cjs.Ease.get(1)).to({y:84.3},5,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-92.8,331.6,362.4);


// stage content:
(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Light&Sha
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(416.9,480.4,1,1,0,0,0,416.9,479.4);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(533.1,600.3,1,1,0,0,0,299.9,359.5);
	this.instance_1.alpha = 0.148;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262F53").s().p("AgqCzIABmWIBUAxIgBGWg");
	this.shape.setTransform(703.4,501.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191F37").s().p("AhGgHIA5ghIBUAwIg5Ahg");
	this.shape_1.setTransform(706.3,479.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C101C").s().p("Agbi6IA4ghIgBGWIg4Ahg");
	this.shape_2.setTransform(710.5,502.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E204E").s().p("AkWWCMAAJgxFIIkE9MAAAAxKgAi+jtIgBGWIBVAxIA5ghIAAmWIhUgxg");
	this.shape_3.setTransform(718.3,502.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#601E27").s().p("AkSh1ICOhSIGWDrIAACkg");
	this.shape_4.setTransform(718.8,341.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},85).wait(25));

	// Thief
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(216.6,749.5,0.676,0.586,0,0,30,84.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:432.6,y:607.5},19,cjs.Ease.get(1)).wait(7).to({skewY:150,x:455.1,y:592.9},6,cjs.Ease.get(1)).wait(18).to({skewY:30,x:432.6,y:607.5},7).wait(7).to({x:541.1,y:547.4},11,cjs.Ease.get(1)).wait(10).to({x:601.1,y:485},9).wait(16));

	// Lazy
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#191F37").s().p("A2eNIMAAMg0LMAsxAZ3MgAIA0QgA0OObMAoVAXWMAAJgxsMgoVgXTg");
	this.shape_5.setTransform(620,429.8);

	this.instance_3 = new lib.Group_7_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.6,363.9,1,1,0,0,0,166.3,311.1);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Group_38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(216,364.3,1,1,0,0,0,215.8,363.5);

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(208.9,359.9,1,1,0,0,0,207.8,359.9);
	this.instance_5.alpha = 0.102;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181E31").s().p("EhA4gACMBA3glcMBA6AlcMhA6Alhg");
	this.shape_6.setTransform(417.7,720);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2A4A").s().p("EAVTAxyQAUgVgChsIgBgRIAAgCIgBgJIAAgFQgVkQgFinQgBg7AEiDIAIj+QAHlugglIQg7pmgVk7IAAgKIADADQATh4AHh/IABgOQAJhTgIhPQgEhRgMhPQAQgnAaACQhGgfkriMIiHg/QiPhRiJheQjjicj3h1QhgguhZg2QjAhzjMhZQgsgTgngcQhSg7hXguIhNgpQjMhzjPhtQgDAAilh5QAgAtAAIFQAAChgOOwQgKLpAJFgQAKFpAfB0Iq/mVMAAChLBMBA3AleMAAABK/gAmkv+QAHgBAFAJIAAAAIgMgIg");
	this.shape_7.setTransform(624.3,359.9);

	this.instance_6 = new lib.Group_35();
	this.instance_6.parent = this;
	this.instance_6.setTransform(194.4,359.9,1,1,0,0,0,12.2,14);

	this.instance_7 = new lib.Group_32();
	this.instance_7.parent = this;
	this.instance_7.setTransform(194.4,323.5,1,1,0,0,0,12.2,14);

	this.instance_8 = new lib.Group_25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(125.6,393.3,1,1,0,0,0,92.5,120.8);

	this.instance_9 = new lib.Group_22();
	this.instance_9.parent = this;
	this.instance_9.setTransform(194.4,513.9,1,1,0,0,0,12.2,14);

	this.instance_10 = new lib.Group_19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(194.4,477.5,1,1,0,0,0,12.2,14);

	this.instance_11 = new lib.Group_12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(125.6,547.3,1,1,0,0,0,92.5,120.8);

	this.instance_12 = new lib.Group_9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(373.4,410.9,1,1,0,0,0,12.2,14);

	this.instance_13 = new lib.Group_6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(373.4,374.5,1,1,0,0,0,12.2,14);

	this.instance_14 = new lib.Group();
	this.instance_14.parent = this;
	this.instance_14.setTransform(304.6,444.3,1,1,0,0,0,92.5,120.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoDN9QgtgaAAhJIgDupQAAhJAthPQAuhOA/glIMvnXQBAglAuAaQAtAaAABJIADOpQAABKgtBOQgtBPhAAkIsvHXQgmAWgfAAQgWAAgTgLg");
	this.shape_8.setTransform(289.6,460);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AoDN9QgtgagBhJIgCupQAAhJAthPQAthOBAglIMvnXQBAglAuAaQAtAaABBJIACOpQAABJgtBPQgtBOhAAlIsvHXQgmAWgfAAQgWAAgTgLg");
	this.shape_9.setTransform(110.6,563);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AoDN9QgtgagBhJIgCupQAAhJAthPQAthOBAglIMvnXQBAglAuAaQAtAaABBJIACOpQAABJgtBPQgtBOhAAlIsvHXQgmAWgfAAQgWAAgTgLg");
	this.shape_10.setTransform(110.6,409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_7},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_5}]}).wait(110));

	// Door_R
	this.instance_15 = new lib.Group_42();
	this.instance_15.parent = this;
	this.instance_15.setTransform(638,454.7,1,1,0,0,0,7.1,24.4);

	this.instance_16 = new lib.Group_40();
	this.instance_16.parent = this;
	this.instance_16.setTransform(693,473.8,1,1,0,0,0,70.8,197.8);

	this.instance_17 = new lib.Tween8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(693,473.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).to({state:[{t:this.instance_17}]},75).to({state:[{t:this.instance_17}]},10).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(75).to({_off:false},0).to({x:761.2,y:519.3},10,cjs.Ease.get(1)).wait(25));

	// Door_L
	this.instance_18 = new lib.Tween1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(560.8,397.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(75).to({startPosition:0},0).to({x:473.8,y:367.3},10,cjs.Ease.get(1)).wait(25));

	// Black
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("A9DbMMAAAg2XMA6HAAAMAAAA2Xg");
	this.shape_11.setTransform(631.9,430.8,1.148,1,0,0,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(416.5,479.5,833.8,959.9);
// library properties:
lib.properties = {
	width: 833,
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