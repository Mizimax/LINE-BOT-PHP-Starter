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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,113);// helper functions:

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


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkDqQgfgLgFgoID3ieQgEAtgfA0QglA8gzAhQgkAXgdAAQgMAAgLgEgAB2gbQghgLgDgpID2ieQgDAuggAzQgkA9g0AgQglAYgcAAQgMAAgKgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.7,65.7,47.6);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkDqQgfgLgFgoID3ieQgEAtgfA0QglA8gzAhQgkAXgdAAQgMAAgLgEgAB2gbQghgLgDgpID2ieQgDAuggAzQgkA9g0AgQglAYgcAAQgMAAgKgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.7,65.7,47.6);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtMLzIAAjDIaZPUIAADDgAtMFjIAAjDIaZPUIAADDgAtMgsIAAtmIaZPTIAANmgABeCKIBpA9Qi2n/i5ErIBsA9QAag+AdAAQAtAAA2CYgAFelJQhYgzg+hjQg2hUgHhOIGmD0QgHBGg3AWQgVAJgYAAQguAAg6ghgAtM1AIAAmGIaZPUIAAGGgAldrfQhYgzg+hiQg2hVgHhOIGmD0QgHBGg3AWQgVAKgZAAQguAAg5gig");
	this.shape.setTransform(0,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223057").s().p("AtMKWIAAjNIaZPUIAADOgAtMEHIAAjNIaZPUIAADMgAtMiJIAAjNIaZPTIAADNgABeieQhZj9hBCjIhsg/QC5kqC2H/gAtMy7IAAmuIaZPUIAAGugADIsIQA+BiBYAzQBYAzA9gbQA3gVAHhHImmj0QAHBOA2BVgAnzyeQA+BjBYAzQBYAyA9gbQA3gVAHhGImmj0QAHBNA2BVg");
	this.shape_1.setTransform(0,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-183.7,169.1,367.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtMTdIAAjDIaZAAIAADDgAtMNNIAAjDIaZAAIAADDgAtMG9IAAtlIaZAAIAANlgAtMtWIAAmGIaZAAIAAGGg");
	this.shape.setTransform(84.5,124.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223057").s().p("AtMSAIAAjNIaZAAIAADNgAtMLxIAAjNIaZAAIAADNgAtMFgIAAjNIaZAAIAADNgAtMrRIAAmuIaZAAIAAGug");
	this.shape_1.setTransform(84.5,154.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,169.1,269.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],0,-202.3,0,215).s().p("EhA4APnMA4jhEvIQbAAMA4zBEuMhA6Aljg");
	this.shape.setTransform(415.3,340.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,830.6,680.1), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_0, null, null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151A2F").s().p("AwrDmIC0n1IejArIi0H0g");
	this.shape.setTransform(113.9,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040408").s().p("Ah8DnICyn2IBHAqIizH0g");
	this.shape_1.setTransform(12.5,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#070910").s().p("AuuAAIhHgpIekAqIBHApg");
	this.shape_2.setTransform(119.3,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,220.7,58.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151A2F").s().p("AxGN6MAf8ghBICRFNMgf8AhCg");
	this.shape.setTransform(116.6,126.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#070910").s().p("AwhQNMAf8ghCIBHApMgf8AhCg");
	this.shape_1.setTransform(105.8,107.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#040408").s().p("AAlCTIiQlOIBHAqICQFMg");
	this.shape_2.setTransform(10.8,230.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,226.1,249), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212430").s().p("Ag0JdIgDy6IBshBIADU9g");
	this.shape.setTransform(108.6,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoDksIQEphIADS6IwEJig");
	this.shape_1.setTransform(51.6,97.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323648").s().p("Ao4DwIQEphIBtBCIxxKhg");
	this.shape_2.setTransform(57.3,164.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,114.2,201.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B12862").s().p("A6SAAIaNvOIaYPOI6NPPg");
	this.shape.setTransform(168.4,97.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F122C").s().p("AtMl7IABjXIaYPOIgBDXg");
	this.shape_1.setTransform(84.5,157);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#781B42").s().p("AtFF8IaMvOIAADXI6NPOg");
	this.shape_2.setTransform(252.8,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,336.7,216.6), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#391C09").s().p("AiUAAICUhNICVBNIiUBOg");
	this.shape.setTransform(15.3,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F122C").s().p("AhMIeIAEyIICVBNIgESIg");
	this.shape_1.setTransform(7.7,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#781B42").s().p("AhIodICUhNIgDSIIiUBNg");
	this.shape_2.setTransform(22.6,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,30.3,131.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#391C09").s().p("AiVAAICVhNICWBNIiVBOg");
	this.shape.setTransform(15.3,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F122C").s().p("AhMIeIAEyIICVBNIgESIg");
	this.shape_1.setTransform(7.7,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#100803").s().p("AhIodICVhNIgESIIiUBNg");
	this.shape_2.setTransform(22.7,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,30.3,131.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#391C09").s().p("AiUAAICUhNICVBNIiUBOg");
	this.shape.setTransform(15.3,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#100803").s().p("AhMIeIAEyIICVBNIgESIg");
	this.shape_1.setTransform(7.7,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#781B42").s().p("AhIodICUhNIgDSIIiUBNg");
	this.shape_2.setTransform(22.6,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,30.3,131.7), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EggfgSvMBA/glgMAAAAlqIoSFaIwOT2ImSgIIolItIAABeIMyngMgmaAvCgAJohyIBQABIAAhUgAm3kNIgFCDIHwAHIJ+qSIAAiWg");
	this.shape.setTransform(208,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,416,720), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvJBBIQ3pyINcHxIw3Jyg");
	mask.setTransform(97,56.2);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,194,112.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AySBwIVPsWIPWI3I1PMWg");
	mask.setTransform(117.1,67.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwoBwITlrYINsH5IzmLYgAwJBzINGHkITNrJItGnlg");
	this.shape.setTransform(116.5,67.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323E6E").s().p("AwJBzITNrKINGHlIzNLJg");
	this.shape_1.setTransform(116.5,67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323E6E").s().p("AySBwIVPsWIPWI3I1PMWgAwuBpINrH5ITmrYItsn6g");
	this.shape_2.setTransform(117.1,67.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323E6E").s().p("AySBwIVPsWIPWI3I1PMWg");
	this.shape_3.setTransform(117.1,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,234.3,135.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+OAAIeJxgIeURgI+JRhg");
	mask.setTransform(193.5,112.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A+OAAIeJxgIeURgI+JRhg");
	this.shape.setTransform(193.5,112.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A+OAAIeJxgIeURgI+JRhg");
	this.shape_1.setTransform(193.5,112.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,387.1,224.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egi6AAAMAi0gUOMAjBAUOMgi0AUPg");
	mask.setTransform(223.5,129.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("Egi6AAAMAi0gUOMAjBAUOMgi0AUPg");
	this.shape.setTransform(223.5,129.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#070707").s().p("Egi6AAAMAi0gUOMAjBAUOMgi0AUPg");
	this.shape_1.setTransform(223.5,129.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,447.1,258.9), null);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:5},19).wait(12).to({_off:false,y:0},15).wait(13).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).wait(12).to({startPosition:0},0).to({_off:true,y:0},15).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-23.7,65.7,47.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(49.5,107.3,0.676,0.586,0,0,150,84.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:67.3},3).to({y:107.3},4).to({y:67.3},4).to({y:107.3},4).to({y:67.3},3).to({y:107.3},4).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,215);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.5,183.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({y:143.8},3).to({y:183.8},4).to({y:143.8},4).to({y:183.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.1,367.6);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(223.5,129.4,1,1,0,0,0,223.5,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,447.1,258.9), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(193.5,112,1,1,0,0,0,193.5,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,387.1,224.2), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(208,360,1,1,0,0,0,208,360);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.7,402.7);
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,416,720), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvGBBIQ0pwINZHvIw0Jwg");
	mask.setTransform(97,56.2);

	// Layer 3
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(97,56.5,1,1,0,0,0,97,56.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.3,0.2,193.5,112.1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvJBBIQ3pyINcHxIw3Jyg");
	mask.setTransform(97,56.2);

	// Layer 3
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(97,56.5,1,1,0,0,0,97,56.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,194,112.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtIA5IOnofILqGuIunIfg");
	mask.setTransform(96.8,56.1);

	// Layer 3
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(97,56.5,1,1,0,0,0,97,56.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(12.7,7.4,168.2,97.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtGA5IOloeILoGtIulIeg");
	mask.setTransform(96.8,56.1);

	// Layer 3
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(97,56.5,1,1,0,0,0,97,56.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(12.9,7.5,167.8,97.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtIA5IOnofILqGuIunIfg");
	mask.setTransform(96.8,56.1);

	// Layer 3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(97,56.5,1,1,0,0,0,97,56.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(12.7,7.4,168.2,97.4), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(50.2,110.9,0.587,0.585,0,0,176.5,83.4,184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,99,221), null);


// stage content:
(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(508.7,636.7,1,1,0,0,0,97,56.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(508.6,636.7,1,1,0,0,0,117.1,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(226));

	// Table
	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(513.5,653,1,1,0,0,0,168.3,108.2);

	this.instance_3 = new lib.Group_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(513.5,790.2,1,1,0,0,0,15.1,65.8);

	this.instance_4 = new lib.Group_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(360.2,700.2,1,1,0,0,0,15.2,65.8);

	this.instance_5 = new lib.Group();
	this.instance_5.parent = this;
	this.instance_5.setTransform(666.5,700.2,1,1,0,0,0,15.1,65.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(226));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C101C").s().p("AipDkQjPgPhggnQgtgSgHgUQgHgUAcgSIH4lLIH3FMQA3AlhMAjQhNAjiuARQhvALhzAAQhWAAhZgGg");
	this.shape.setTransform(511.4,323.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlB2QgqgxAAhFQAAhEAqgxQAqgxA7AAQA8AAAqAxQAqAxAABEQAABFgqAxQgqAxg8AAQg7AAgqgxg");
	this.shape_1.setTransform(511.2,346.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(226));

	// Layer 10
	this.instance_6 = new lib.Path_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(511.1,675.6,1,1,0,0,0,415.2,340.1);
	this.instance_6.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(226));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AF5XmIAD2OIwMpWIAAMGIuSxWIn6lQMAADglxMBA1AlgMAAABK/g");
	this.shape_2.setTransform(719.2,418.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(226));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202C50").s().p("AtOd4MAAAhLAIadPSMAAABK/g");
	this.shape_3.setTransform(842.8,489.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(226));

	// Thief
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(841.7,443,0.585,0.585,0,0,0,84.7,183.8);

	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(641.5,569.7,0.081,1,0,0,0,49.5,107.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(417.2,570.3,1,1,0,0,0,49.5,110.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnuOjIPdp5IAAByIvdJ5gAnuK5IPdp5IAAByIvdJ5gAnuBEIPdp4IAAH9IvdJ4gAh0B7IA+gmQA0iXAmBcIA/gnQgng8gmAAQhFAAhFDEgAnumbIPdp5IAADlIvdJ4g");
	this.shape_4.setTransform(417.2,564.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223057").s().p("AnuNnIPdp5IAAB3IvdJ6gAnuJ9IPdp5IAAB3IvdJ6gAnuGTIPdp4IAAB4IvdJ4gABji8Ig/ApQgmhdg0CXIg+AnQBrkyBsCogAnullIPdp5IAAD8IvdJ5gAlHmCQADApAhAKQAjAOA0ghQA0ghAkg8QAggzADgugABRqIQAEApAgAKQAlAOAzghQAzghAlg8QAfgzAFgug");
	this.shape_5.setTransform(417.2,581.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},21).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},21).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},11).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:641.1,y:577.7},21,cjs.Ease.get(1)).to({regX:84.8,scaleX:0.03},4).to({_off:true},1).wait(41).to({_off:false,regX:84.4,scaleX:0.05,x:508.3,y:520},0).to({regX:84.7,scaleX:0.59},4).wait(5).to({regX:84.8,regY:184.1,x:491,y:529.7},0).to({regX:84.7,regY:183.8,x:417.3,y:569.7},15).wait(5).to({regY:183.9,scaleX:0.91,skewY:-50,y:569.8},5).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:49.6,scaleX:0.31,x:641.6},1).to({regX:49.5,scaleX:1,x:641.5},3).wait(4).to({x:641.2,y:569.3},0).to({x:508.2,y:520},21,cjs.Ease.get(1)).wait(7).to({scaleX:0.08},4).to({_off:true},1).wait(159));

	// eye
	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(417.2,524.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({_off:false},0).wait(121));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D0D0D").s().p("AoNOBMAAGglcIQVJbMgAGAlcg");
	this.shape_6.setTransform(705,516.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(226));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C50").s().p("AzOaaMAAChK/MAmbAWMMAAABK/g");
	this.shape_7.setTransform(635.1,369.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(226));

	// Lazy
	this.instance_11 = new lib.Group_6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(304.5,418.5,1,1,0,0,0,208,360);
	this.instance_11.alpha = 0.801;

	this.instance_12 = new lib.Group_5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(312.5,433.6,0.999,0.999,0,0,0,111.7,30.9);

	this.instance_13 = new lib.Group_4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(312.5,433.6,0.999,0.999,0,0,0,114.4,123.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B192A").s().p("AgzzuIBtBAMgAFAlcIhuBBg");
	this.shape_8.setTransform(647.2,486.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2946").s().p("ApEkxIBvhAIQaJXIAACMg");
	this.shape_9.setTransform(699.4,643.4);

	this.instance_14 = new lib.Group_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(317.8,425.6,0.999,0.999,0,0,0,58.6,100.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323E6E").s().p("EggegSuMBA8glgMgABBLAMhA2AldgAm7kKIAES6IQEphIgDy7g");
	this.shape_10.setTransform(304.4,418.6);

	this.instance_15 = new lib.Group_8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(513,757.9,1,1,0,0,0,193.5,112);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.Group_9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(513,757.9,1,1,0,0,0,223.5,129.4);
	this.instance_16.alpha = 0.602;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181D2F").s().p("EhA4gABMBA3gldMBA6AldMhA6Algg");
	this.shape_11.setTransform(512.2,778.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("EhA2AleMgAEhK9MBA8glgMBA5AleMAAABK/MhA7Alig");
	this.shape_12.setTransform(512.3,538.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_16},{t:this.instance_15},{t:this.shape_10},{t:this.instance_14},{t:this.shape_9},{t:this.shape_8},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(595.9,621,831.9,960.2);
// library properties:
lib.properties = {
	width: 1000,
	height: 1125,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Scene1();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  '100%';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = '100%';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(true,'both',false,1);	
	fnStartAnimation();
}