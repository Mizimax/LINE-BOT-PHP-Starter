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
	this.shape.graphics.lf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],0,-202.3,0,215).s().p("EhA4APmMA4jhEtIQbAAMA4zBEtMhA6Alig");
	this.shape.setTransform(415.3,340);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,830.6,680.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AINszIgUgeIn9lUIoFFXIgLARMg4mBFNMAAAhK/MBA/glgMBA2AlqMAAABK1g");
	this.shape.setTransform(415.5,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,831,720), null);


(lib.Group_233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgeIAAALIgzAeg");
	this.shape.setTransform(3.2,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252A40").s().p("AgZAJIAygeIABANIgzAeg");
	this.shape_1.setTransform(3.2,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgaAKIA0gdIAAAKIgyAdg");
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
	this.shape_6.graphics.f("#24293E").s().p("AgZALIAzgdIAAAIIgzAdg");
	this.shape_6.setTransform(2.6,57.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23283C").s().p("AgZAMIA0geIgBAHIg0Aeg");
	this.shape_7.setTransform(2.7,57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZAMIAzgdIAAAGIgzAeg");
	this.shape_8.setTransform(2.7,56.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#212639").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_9.setTransform(2.7,55.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202437").s().p("AgZANIA0geIgBAGIgzAdg");
	this.shape_10.setTransform(2.8,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2335").s().p("AgYANIAzgeIgBAGIg0Adg");
	this.shape_11.setTransform(2.9,54.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2234").s().p("AgYAMIAzgdIgBAGIg0AdIACgGg");
	this.shape_12.setTransform(3,54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D2132").s().p("AgZANIA0geIgCAGIgzAdg");
	this.shape_13.setTransform(3.2,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C2030").s().p("AgYAMIA0gdIgDAGIg0Aeg");
	this.shape_14.setTransform(3.4,52.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B1F2E").s().p("AgXALIAzgdIgEAIIgzAdg");
	this.shape_15.setTransform(3.8,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1A1E2D").s().p("AgRADIA0geIgRAZIg0Adg");
	this.shape_16.setTransform(4.8,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B1F2E").s().p("AgbATIATghIADgGIAzgeIgDAGIgSAhQgLAUgIAMIgzAeQAHgMALgUg");
	this.shape_17.setTransform(7.7,45.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C2030").s().p("AgZAOIA0geIgBADIg0Adg");
	this.shape_18.setTransform(9.8,42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D2132").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_19.setTransform(9.9,41.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2234").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_20.setTransform(9.9,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#202437").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_21.setTransform(10,41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#22273A").s().p("AgfCIIAMjxIAzgfIgMDxIAAABIgzAfg");
	this.shape_22.setTransform(10.6,28.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#23283C").s().p("AgZgEIA0geIgBAnIg0Aeg");
	this.shape_23.setTransform(11.3,14.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24293E").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_24.setTransform(11.4,12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#252A40").s().p("AgZANIAzgeIAAAFIgzAdg");
	this.shape_25.setTransform(11.4,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262B41").s().p("AgZANIAzgeIABAFIg0Adg");
	this.shape_26.setTransform(11.4,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_27.setTransform(11.3,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282E45").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_28.setTransform(11.3,10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#292F47").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_29.setTransform(11.2,10.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A3048").s().p("AgZANIAzgdIABAEIgzAdg");
	this.shape_30.setTransform(11.1,10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B314A").s().p("AgaAOIA0geIABAEIg0Adg");
	this.shape_31.setTransform(11,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C324C").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_32.setTransform(10.9,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D334D").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_33.setTransform(10.8,8.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2E344F").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_34.setTransform(10.7,8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2F3651").s().p("AgaANIA0geIABAFIgzAeg");
	this.shape_35.setTransform(10.6,8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#303753").s().p("AgaANIAzgeIACAFIgzAeg");
	this.shape_36.setTransform(10.4,7.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#313854").s().p("AgbAMIA0gdIACAGIgzAdg");
	this.shape_37.setTransform(10.2,7.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323956").s().p("AggAFIAzgeQAGAIAIANIgzAeQgIgOgGgHg");
	this.shape_38.setTransform(9.3,5.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#313854").s().p("AgcANIA0geIAFAFIg0Aeg");
	this.shape_39.setTransform(8.4,4.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#303753").s().p("AgbANIAzgdIAEAEIgzAdg");
	this.shape_40.setTransform(7.9,3.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2F3651").s().p("AgbANIAzgdIAEADIgzAeg");
	this.shape_41.setTransform(7.6,3.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2E344F").s().p("AgbAOIAzgeIAEAEIgzAdg");
	this.shape_42.setTransform(7.2,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D334D").s().p("AgbAOIA0geIADADIgzAeg");
	this.shape_43.setTransform(6.8,2.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C324C").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_44.setTransform(6.4,2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B314A").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_45.setTransform(6,2.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A3048").s().p("AgbAOIAzgdIAEACIgzAeg");
	this.shape_46.setTransform(5.6,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#292F47").s().p("AgcAOIA0geIAEADIgzAeg");
	this.shape_47.setTransform(5.2,1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#282E45").s().p("AgaAPIA0geIABABIg0Adg");
	this.shape_48.setTransform(4.9,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_233, new cjs.Rectangle(0,0,14,67.3), null);


(lib.Group_232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("Ag3gBIA0geQAZAOAiASIg0AfQgigUgZgNg");
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
	this.shape_5.graphics.f("#23283C").s().p("AgaAPIAzgeIADABIg0Aeg");
	this.shape_5.setTransform(5.5,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgbAPIA0geIADABIg0Aeg");
	this.shape_6.setTransform(5.2,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_7.setTransform(5,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgaAPIAzgeIADABIg0Adg");
	this.shape_8.setTransform(4.7,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_9.setTransform(4.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_10.setTransform(4.2,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_11.setTransform(3.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_232, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.Group_231 = function(mode,startPosition,loop) {
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
	this.shape_3.graphics.f("#323956").s().p("AgiADIA0geQALAQAGAJIg0AeQgFgKgMgPg");
	this.shape_3.setTransform(3.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_231, new cjs.Rectangle(0,0,7.5,7.1), null);


(lib.Group_230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAQIgLgRIA0gfIALATIALAPIgzAfIgMgRg");
	this.shape.setTransform(3.8,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_230, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.Group_229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8994A9").s().p("AgfAHIAzgeQAFAFAFAJIACADIg0Aeg");
	this.shape.setTransform(10.9,7.5);

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
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIA0geIACADIgzAeg");
	this.shape_5.setTransform(9.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#798295").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_6.setTransform(8.8,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767F91").s().p("AgbAOIA0gdIADACIg0Adg");
	this.shape_7.setTransform(8.5,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737C8E").s().p("AgbAOIA0gdIADACIg0Adg");
	this.shape_8.setTransform(8.2,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape_9.setTransform(7.8,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E7687").s().p("AgcAOIAAAAIAzgeIABAAIAFADIgzAeg");
	this.shape_10.setTransform(7.2,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgbAOIgCgBIAzgeIADABIAFAEIgzAdg");
	this.shape_11.setTransform(6.5,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E7687").s().p("AgXAQIgGgDIAAAAIAzgeIABAAIAFAEIACABIgzAdg");
	this.shape_12.setTransform(5.7,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70798B").s().p("AglAIIgCgBIA0geIACABIAZAQIg0Adg");
	this.shape_13.setTransform(4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_229, new cjs.Rectangle(0,0,14.1,9.9), null);


(lib.Group_228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_228, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.Group_227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgQi9IA0gfIgUGaIgzAfg");
	this.shape.setTransform(4.2,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgVIA0geIgDBJIg0Aeg");
	this.shape_1.setTransform(5.3,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgSh3IABgIIAzgeIAAAHQgIBrgICrIgzAeQAHirAIhqg");
	this.shape_2.setTransform(6.3,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23283C").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_3.setTransform(7.1,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgZANIAzgeIAAAGIgzAdg");
	this.shape_4.setTransform(7.1,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252A40").s().p("AgZANIAzgeIABAFIg0Aeg");
	this.shape_5.setTransform(7.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262B41").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_6.setTransform(7,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_7.setTransform(7,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282E45").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_8.setTransform(7,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#292F47").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_9.setTransform(6.9,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3048").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_10.setTransform(6.8,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B314A").s().p("AgaAOIA0geIABADIg0Aeg");
	this.shape_11.setTransform(6.7,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C324C").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_12.setTransform(6.7,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D334D").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_13.setTransform(6.6,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E344F").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_14.setTransform(6.5,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F3651").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_15.setTransform(6.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_227, new cjs.Rectangle(0.6,0,9.1,85.7), null);


(lib.Group_226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A6270").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape.setTransform(2.9,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_1.setTransform(2.9,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606876").s().p("AgZgGIA0geIgCArIgzAeg");
	this.shape_2.setTransform(3,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgXgUIACgqIAzgfIgCAqIgGByIg0AfIAHhyg");
	this.shape_3.setTransform(3.5,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgXggIAzgfIgEBhIgzAeg");
	this.shape_4.setTransform(4.1,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6573").s().p("AgXgLIABgTIAzgfIgBATQgDAkgCAlIgzAfQACgnADgig");
	this.shape_5.setTransform(4.5,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606876").s().p("AgYgJIAzgfIgCAyIgzAfg");
	this.shape_6.setTransform(4.9,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6573").s().p("AgZAGIA0geIgBATIg0Aeg");
	this.shape_7.setTransform(5,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A6270").s().p("AgZAJIA0geIgBANIg0Aeg");
	this.shape_8.setTransform(5.1,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585F6C").s().p("AgYAMIAAgCIAzgeIAAADIgBAIIg0Aeg");
	this.shape_9.setTransform(5.3,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#585F6C").s().p("AgZAMIA0geIgBAHIg0Aeg");
	this.shape_10.setTransform(5.4,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A6270").s().p("AgZAOIA0geIgBADIgzAeg");
	this.shape_11.setTransform(5.5,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D6573").s().p("AgZAOIAzgeIAAADIgzAdg");
	this.shape_12.setTransform(5.5,5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_13.setTransform(5.5,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#636B7A").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_14.setTransform(5.5,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#656E7D").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_15.setTransform(5.5,5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#687080").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_16.setTransform(5.5,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_17.setTransform(5.5,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70798B").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_18.setTransform(5.5,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737C8E").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_19.setTransform(5.4,4.3);

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
	this.shape_23.graphics.f("#818B9F").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_23.setTransform(5.2,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#848EA2").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_24.setTransform(5.2,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8691A6").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_25.setTransform(5.1,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8994A9").s().p("AgeAIIA0gdQAGAIADAFIg0AeQgDgGgGgIg");
	this.shape_26.setTransform(4.5,2.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8691A6").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_27.setTransform(4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_226, new cjs.Rectangle(0.3,0,7.9,57.2), null);


(lib.Group_225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYANIA0gdIgEADIgzAeg");
	this.shape.setTransform(2.8,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1F2E").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_1.setTransform(3,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C2030").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_2.setTransform(3.1,45.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D2132").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_3.setTransform(3.2,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2234").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape_4.setTransform(3.2,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZAOIAzgdIgBACIgzAeg");
	this.shape_5.setTransform(3.3,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202437").s().p("AgZANIA0gdIgBAEIgzAdg");
	this.shape_6.setTransform(3.4,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgZAMIAzgdIAAAGIg0Adg");
	this.shape_7.setTransform(3.4,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgdBPIAFhWIACg1IA0geIgCA1IgFBVIgBANIgzAeg");
	this.shape_8.setTransform(3.8,36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23283C").s().p("AgXgxIA0gfIgFCCIg0Afg");
	this.shape_9.setTransform(4.4,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#22273A").s().p("AgXgjIA0gfIgFBmIg0Afg");
	this.shape_10.setTransform(4.9,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23283C").s().p("AgZgCIA0gfIgBAkIg0Aeg");
	this.shape_11.setTransform(5.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_225, new cjs.Rectangle(0,0,7.9,47.7), null);


(lib.Group_224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606876").s().p("AgYgLIAzgeIgCA1IgzAeg");
	this.shape.setTransform(3.3,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgWgwIAAgHIA0gfIgICOIgzAfIAHiHg");
	this.shape_1.setTransform(3.7,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A6270").s().p("AgYAHIAzgeIgCARIgzAeg");
	this.shape_2.setTransform(4.2,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgZAKIA0gdIgBAKIgzAdg");
	this.shape_3.setTransform(4.3,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgZANIAzgeIAAAFIgzAeg");
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
	this.shape_13.setTransform(3.9,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B8598").s().p("AgaAOIA0geIAAADIgzAeg");
	this.shape_14.setTransform(3.9,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E889B").s().p("AgaAOIAzgeIACADIg0Aeg");
	this.shape_15.setTransform(3.8,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#818B9F").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_16.setTransform(3.6,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848EA2").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_17.setTransform(3.5,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8691A6").s().p("AgbAMIA0gdIADAGIg0Adg");
	this.shape_18.setTransform(3.2,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8994A9").s().p("AgcALIA0geIAEAJIgzAdg");
	this.shape_19.setTransform(2.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_224, new cjs.Rectangle(0,0,6.9,31.8), null);


(lib.Group_223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262B41").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape.setTransform(3.8,4.3);

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
	this.shape_4.graphics.f("#303753").s().p("AgaAOIA0gdIABACIg0Aeg");
	this.shape_4.setTransform(3.5,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313854").s().p("AgaAOIA0geIABADIgzAeg");
	this.shape_5.setTransform(3.4,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323956").s().p("AgdAKIA0geIAHALIg0Aeg");
	this.shape_6.setTransform(3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_223, new cjs.Rectangle(0,0,6.4,5.9), null);


(lib.Group_222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AggAIIAzgeIAOAPIgzAdg");
	this.shape.setTransform(22.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8691A6").s().p("AAeBNIhxh8IA1geIBxB7IABACIg1Aeg");
	this.shape_1.setTransform(15.9,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848EA2").s().p("AgdALIAzgdIAJAIIg0Adg");
	this.shape_2.setTransform(9.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818B9F").s().p("AgcANIA0geIAFAGIg0Adg");
	this.shape_3.setTransform(9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E889B").s().p("AgcANIA0gdIAFAEIg0Adg");
	this.shape_4.setTransform(8.5,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIAzgeIAEADIgzAeg");
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
	this.shape_10.graphics.f("#6E7687").s().p("AgbAPIA0geIADABIg0Aeg");
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
	this.shape_15.setTransform(5.2,1.7);

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

}).prototype = getMCSymbolPrototype(lib.Group_222, new cjs.Rectangle(1,0,24.6,21), null);


(lib.Group_221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_221, null, null);


(lib.Group_220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAKIAzgeIAAAMIgzAdg");
	this.shape_1.setTransform(2.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_220, new cjs.Rectangle(0,0,5.3,5.2), null);


(lib.Group_219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_219, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_218, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2335").s().p("AgZAPIAAgBIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202437").s().p("AgZANIAzgdIgBAEIgyAdg");
	this.shape_1.setTransform(2.7,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_2.setTransform(2.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_3.setTransform(2.8,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23283C").s().p("AgZAJIAzgdIAAAMIgzAdg");
	this.shape_4.setTransform(2.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape_5.setTransform(2.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_217, new cjs.Rectangle(0,0,5.5,6.9), null);


(lib.Group_216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(17.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_1.setTransform(17.2,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24293E").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_2.setTransform(17.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_3.setTransform(17.2,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303753").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_4.setTransform(17,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323956").s().p("AgZAPIgDgDIA0geIACADIADAEIg0Adg");
	this.shape_5.setTransform(16.7,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#313854").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_6.setTransform(16.4,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303753").s().p("AhbgyIA1gfIAAABICACCIACABIg0Afg");
	this.shape_7.setTransform(9.7,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F3651").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_8.setTransform(3.1,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(2.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C324C").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_216, new cjs.Rectangle(0.1,0.1,19.8,20.1), null);


(lib.Group_215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZANIA0gdIgBADIg0Aeg");
	this.shape_1.setTransform(2.7,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_2.setTransform(2.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#212639").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_3.setTransform(2.7,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202437").s().p("AgZANIA0gdIgBADIg0Aeg");
	this.shape_4.setTransform(2.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZAPIAAgBIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_215, new cjs.Rectangle(0,0,5.4,5.1), null);


(lib.Group_214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_214, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.Group_213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgZAPIAzgeIABABIg0Aeg");
	this.shape.setTransform(4.4,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AgaAMIAzgdIABAGIgzAdg");
	this.shape_1.setTransform(4.3,10.9);

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
	this.shape_7.graphics.f("#282E45").s().p("AgZAMIAzgeIABAHIgzAeg");
	this.shape_7.setTransform(2.8,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#272C43").s().p("AgaANIA0geIABAFIg0Aeg");
	this.shape_8.setTransform(2.8,3);

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

}).prototype = getMCSymbolPrototype(lib.Group_213, new cjs.Rectangle(0,0,7,12.9), null);


(lib.Group_212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212639").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIg0Aeg");
	this.shape_1.setTransform(2.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZAKIAzgeIAAAMIgzAdg");
	this.shape_2.setTransform(2.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_212, new cjs.Rectangle(0.2,0,5.3,4.7), null);


(lib.Group_211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape.setTransform(4.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E889B").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_1.setTransform(4.1,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818B9F").s().p("AgcANIAAAAIAzgeIAGAFIgzAeIgGgFg");
	this.shape_2.setTransform(3.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape_3.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_211, new cjs.Rectangle(0,0,6.9,4.7), null);


(lib.Group_210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_210, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_209, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(14.8,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818B9F").s().p("AgjAGIAzgeIAUATIgzAeg");
	this.shape_1.setTransform(13.4,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E889B").s().p("AgjAHIA0geIATARIg0AeQgMgMgHgFg");
	this.shape_2.setTransform(11.5,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8598").s().p("AgiAIIAzgeIASAPIgzAeg");
	this.shape_3.setTransform(9.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#798295").s().p("AgiAIIAzgdIASAOIgzAdg");
	this.shape_4.setTransform(7.8,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767F91").s().p("AgjAJIA0geIASANIgzAeg");
	this.shape_5.setTransform(6,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737C8E").s().p("AgiAJIAzgdIATAMIg0Adg");
	this.shape_6.setTransform(4.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#70798B").s().p("AgcANIAzgdIAGAEIgzAdg");
	this.shape_7.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_208, new cjs.Rectangle(0,0,17.9,13.2), null);


(lib.Group_207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_207, null, null);


(lib.Group_206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D334D").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape.setTransform(2.8,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_206, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


(lib.Group_205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgcA8QADguACgvIA0geQgCAvgDAtIAAAFIg0Aeg");
	this.shape.setTransform(3.1,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgYgXIABgaIA0geIgCAZIgDBoIg0AeIAEhng");
	this.shape_1.setTransform(3.5,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgYgKIAzgfIgCA0Ig0Afg");
	this.shape_2.setTransform(3.9,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZADIA0gdIgBAYIg0Aeg");
	this.shape_3.setTransform(4,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6573").s().p("AgZALIA0gdIgBAIIg0Adg");
	this.shape_4.setTransform(4.1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6270").s().p("AgZAJIA0geQgBAGAAAHIg0AeIABgNg");
	this.shape_5.setTransform(4.2,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#585F6C").s().p("AgYAFIAzgdIgCAUIg0Adg");
	this.shape_6.setTransform(4.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A6270").s().p("AgZAMIAzgdIAAAGIg0Adg");
	this.shape_7.setTransform(4.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_205, new cjs.Rectangle(0.2,0,7,38.2), null);


(lib.Group_204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_204, null, null);


(lib.Group_203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_203, null, null);


(lib.Group_202 = function(mode,startPosition,loop) {
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
	this.shape_3.graphics.f("#798295").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_3.setTransform(3.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737C8E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_4.setTransform(3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70798B").s().p("AgaAOIA0gdIAAACIgzAdg");
	this.shape_5.setTransform(3,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E7687").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_6.setTransform(2.9,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B7384").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_7.setTransform(2.9,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#687080").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape_8.setTransform(2.9,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#656E7D").s().p("AgaALIA0geIAAAJIgzAdg");
	this.shape_9.setTransform(2.9,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#687080").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_10.setTransform(2.8,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_11.setTransform(2.8,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_12.setTransform(2.8,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70798B").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_13.setTransform(2.8,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#767F91").s().p("AgZAPIAAgBIAzgdIAAABIAAAAIgzAeg");
	this.shape_14.setTransform(2.7,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_15.setTransform(2.7,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#555C69").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_16.setTransform(2.7,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525965").s().p("AgZAOIA0geIgBADIg0Adg");
	this.shape_17.setTransform(2.8,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F5662").s().p("AgXALIAAAAIAAgCIAzgdIAAABIgDAKIg0Aeg");
	this.shape_18.setTransform(3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_202, new cjs.Rectangle(0.1,0.5,6.2,9.9), null);


(lib.Group_201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D535F").s().p("AgYANIAzgeIgCAFIgzAeg");
	this.shape.setTransform(2.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474D58").s().p("AgdATIAIgHIAzgeIgHAHIgBAAIgzAegAAegSIAAAAIAAAAg");
	this.shape_1.setTransform(3.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_201, new cjs.Rectangle(0.2,0,6.3,4.4), null);


(lib.Group_200 = function(mode,startPosition,loop) {
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
	this.shape_4.graphics.f("#8691A6").s().p("AgdALIA0geIAHAJIgzAeg");
	this.shape_4.setTransform(6.9,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8994A9").s().p("AglgBIA0geQAJASAOAOIg0AfQgNgPgKgSg");
	this.shape_5.setTransform(5.4,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8691A6").s().p("AgbALIAzgdIAEAIIgzAdg");
	this.shape_6.setTransform(4.1,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#848EA2").s().p("AgbAMIA0gdIACAGIgzAdg");
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
	this.shape_13.graphics.f("#737C8E").s().p("AgaANIA0gdIABADIg0Aeg");
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
	this.shape_19.graphics.f("#636B7A").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_19.setTransform(2.6,6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#606876").s().p("AgZANIAzgdIAAAEIgzAdg");
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
	this.shape_25.graphics.f("#525965").s().p("AgZAMIA0gdIgCAGIgzAdg");
	this.shape_25.setTransform(3,3.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4F5662").s().p("AgYAMIAzgdIgCAGIgzAdg");
	this.shape_26.setTransform(3.1,2.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D535F").s().p("AgYANIAAgBIA0geIgBACIgCAFIgzAeg");
	this.shape_27.setTransform(3.4,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A505B").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_28.setTransform(3.5,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_200, new cjs.Rectangle(0,0.2,12.3,20.2), null);


(lib.Group_199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737C8E").s().p("AgaAPIA0geIABABIgzAeg");
	this.shape.setTransform(3.9,2.8);

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

}).prototype = getMCSymbolPrototype(lib.Group_199, new cjs.Rectangle(0,0,6.6,4.4), null);


(lib.Group_198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAGIAzgeIAAATIgzAeg");
	this.shape.setTransform(3.9,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24293E").s().p("AgZACIA0geIgBAbIgzAeg");
	this.shape_1.setTransform(3.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZgFIAzgfIAAAqIg0Aeg");
	this.shape_2.setTransform(4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgYAEIAzgdIgCAVIgzAeg");
	this.shape_3.setTransform(4.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_4.setTransform(4.1,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(4.1,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24293E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_6.setTransform(4.1,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262B41").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_7.setTransform(4.1,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323956").s().p("AgbANIA0gdIACAEIgzAdg");
	this.shape_8.setTransform(3.8,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#313854").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(3.6,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(3.5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F3651").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_11.setTransform(3.4,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_12.setTransform(3.3,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D334D").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_13.setTransform(3.2,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C324C").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_14.setTransform(3,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B314A").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_15.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_198, new cjs.Rectangle(0,0,6.8,17.1), null);


(lib.Group_197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape.setTransform(41.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272C43").s().p("Ag5AAIA0gfQAVAKAqAWIg1AfQgpgXgVgJg");
	this.shape_1.setTransform(37.9,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgnAJIAzgeIAcAOIgzAdg");
	this.shape_2.setTransform(33.3,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgkAKIAzgdIAXAJIg0Aeg");
	this.shape_3.setTransform(30.8,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgjAMIAzgeIAUAHIgzAeg");
	this.shape_4.setTransform(28.7,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgjAMIA0gdIATAGIg0Aeg");
	this.shape_5.setTransform(26.7,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgjANIAzgeIAUAGIgzAdg");
	this.shape_6.setTransform(24.7,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgjANIAzgdIAVAEIg0AeIgUgFg");
	this.shape_7.setTransform(22.7,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgkAOIA0geIAVAEIg0Adg");
	this.shape_8.setTransform(20.6,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AglAOIA0geIAXADIg0Aeg");
	this.shape_9.setTransform(18.4,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AglAPIAzgeIAYABIgzAeg");
	this.shape_10.setTransform(16.1,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AAMgNIAcgCIgzAeIgcABg");
	this.shape_11.setTransform(13.4,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C2030").s().p("AAKgMQANgDAUgCIg0AeQgSABgPAEg");
	this.shape_12.setTransform(10.4,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B1F2E").s().p("AADgIQAXgIAXgEIgzAdQgYAFgWAHg");
	this.shape_13.setTransform(6.4,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1E2D").s().p("AAVgMIANgFIg0AdIgNAFIgCABg");
	this.shape_14.setTransform(3.4,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_197, new cjs.Rectangle(0,0,43.9,11.9), null);


(lib.Group_196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape.setTransform(4.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_1.setTransform(3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_2.setTransform(3.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A6270").s().p("AgaAPIA0geIABABIg0Adg");
	this.shape_3.setTransform(3.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_196, new cjs.Rectangle(0.9,0,6,3.3), null);


(lib.Group_195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_195, null, null);


(lib.Group_194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_194, new cjs.Rectangle(0,0,5.4,3.2), null);


(lib.Group_193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(3.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B314A").s().p("AgaAPIAzgeIACACIgzAdg");
	this.shape_1.setTransform(3.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B314A").s().p("AgbAOIgBAAIA0geIABABIADACIgzAeg");
	this.shape_2.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_193, new cjs.Rectangle(0,0,6.1,3.7), null);


(lib.Group_192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
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

}).prototype = getMCSymbolPrototype(lib.Group_192, new cjs.Rectangle(0,0.7,5.3,4.9), null);


(lib.Group_191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgUASIgMgGIAAgBIAzgdIABAAIAMAHIABABIgzAdg");
	this.shape.setTransform(4.7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AggAMIA0geIANAHIg0Aeg");
	this.shape_1.setTransform(3.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_191, new cjs.Rectangle(0,0,8.1,4.7), null);


(lib.Group_190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_190, new cjs.Rectangle(0,0,5.3,3.8), null);


(lib.Group_189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAOIAzgdIACACIgzAdIgCgCg");
	this.shape.setTransform(3.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E344F").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_1.setTransform(2.9,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D334D").s().p("AgaAOIA0gdIAAABIgzAeg");
	this.shape_2.setTransform(2.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C324C").s().p("AgZAPIAzgeIABACIg0Adg");
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
	this.shape_10.graphics.f("#252A40").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_10.setTransform(2.6,5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24293E").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_11.setTransform(2.6,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_12.setTransform(2.6,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#22273A").s().p("AgZAJIA0gdIgBAMIg0Adg");
	this.shape_13.setTransform(2.7,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_14.setTransform(2.7,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
	this.shape_15.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_189, new cjs.Rectangle(0,0,5.9,8.9), null);


(lib.Group_188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_188, null, null);


(lib.Group_187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_187, null, null);


(lib.Group_186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3651").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape.setTransform(3.8,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303753").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_1.setTransform(3.7,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_2.setTransform(3.5,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D334D").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B314A").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_4.setTransform(3,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292F47").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape_5.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_186, new cjs.Rectangle(0.2,0.1,6.4,4.1), null);


(lib.Group_185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgbAOIA0gdIADABIg0Aeg");
	this.shape.setTransform(3.8,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262B41").s().p("AgZAPIgEgBIA0geIADABIAEADIgzAdg");
	this.shape_1.setTransform(3.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272C43").s().p("AgZAPIgBAAIA0geIAAABIABAAIg0Aeg");
	this.shape_2.setTransform(2.9,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape_3.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_185, new cjs.Rectangle(0,0,6.6,3.7), null);


(lib.Group_184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_184, new cjs.Rectangle(0,0,5.4,3.1), null);


(lib.Group_183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_183, null, null);


(lib.Group_182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape.setTransform(3.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656E7D").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_1.setTransform(3.5,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_2.setTransform(3.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_182, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


(lib.Group_181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_181, null, null);


(lib.Group_180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_180, null, null);


(lib.Group_179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape.setTransform(2.6,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A6270").s().p("AgZAGIA0geIgCATIgzAeg");
	this.shape_1.setTransform(2.8,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgYADIAzgeQAAANgBAMIg0AeQABgMABgNg");
	this.shape_2.setTransform(2.9,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZgHIA0geIgBAsIg0AfIABgtg");
	this.shape_3.setTransform(3,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_179, new cjs.Rectangle(0,0.1,5.7,12.3), null);


(lib.Group_178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_178, new cjs.Rectangle(0,0.5,5.3,3.4), null);


(lib.Group_177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_177, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.Group_176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212639").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape.setTransform(2.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_176, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.Group_175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_1.setTransform(2.6,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_2.setTransform(2.7,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202437").s().p("AgYAGIAzgeIgCATIg0Aeg");
	this.shape_3.setTransform(2.9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212639").s().p("AgZAOIA0geIgBADIgzAeg");
	this.shape_4.setTransform(3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_175, new cjs.Rectangle(0,0,5.7,6.5), null);


(lib.Group_174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAIIgzAdg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_174, new cjs.Rectangle(0,0,5.3,3.8), null);


(lib.Group_173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgLACIAzgdQgJAPgTALIg0AdQAUgMAJgOg");
	this.shape.setTransform(4.1,8.1);

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
	this.shape_4.graphics.f("#1E2234").s().p("AgZANIA0geIgBAFIg0Adg");
	this.shape_4.setTransform(6.3,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZANIA0geIgBAFIg0Adg");
	this.shape_5.setTransform(6.4,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202437").s().p("AgZANIA0geIgBAFIgzAdg");
	this.shape_6.setTransform(6.5,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgZANIAzgeIAAAFIg0Adg");
	this.shape_7.setTransform(6.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZANIA0geIgBAFIgzAeg");
	this.shape_8.setTransform(6.6,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23283C").s().p("AgZAMIAzgcIAAAEIgzAeg");
	this.shape_9.setTransform(6.6,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAIIgzAdg");
	this.shape_10.setTransform(6.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_173, new cjs.Rectangle(0,0,9.3,11), null);


(lib.Group_172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgUg5IA0geIgLCRIg0Aeg");
	this.shape.setTransform(3.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#555C69").s().p("AgZANIA0geIgBAGIg0Adg");
	this.shape_1.setTransform(3.8,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeIgCgDg");
	this.shape_2.setTransform(3.7,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767F91").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_172, new cjs.Rectangle(0,0.1,6.5,19.9), null);


(lib.Group_171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_171, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.Group_170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7687").s().p("AgaAPIA0gdIABAAIg0Adg");
	this.shape.setTransform(3.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B7384").s().p("AgZAPIgBAAIA0geIABABIg0Aeg");
	this.shape_1.setTransform(3.4,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_170, new cjs.Rectangle(0.8,0.2,5.5,3.2), null);


(lib.Group_169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212639").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_1.setTransform(3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_169, new cjs.Rectangle(0,0.7,5.7,10.1), null);


(lib.Group_168 = function(mode,startPosition,loop) {
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
	this.shape_5.graphics.f("#555C69").s().p("AgYAOIAygeIAAAEIg0Adg");
	this.shape_5.setTransform(3.5,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525965").s().p("AgZAOIAzgeIgBADIgyAeg");
	this.shape_6.setTransform(3.6,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F5662").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape_7.setTransform(3.7,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D535F").s().p("AgYAOIAzgeIgBADIg0Aeg");
	this.shape_8.setTransform(3.8,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A505B").s().p("AgcAVIAHgNIA0geIgIANIgBACIgzAdg");
	this.shape_9.setTransform(4.3,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474D58").s().p("AAKgZIA1geQgvAogZAoIg1AfQAZgpAvgog");
	this.shape_10.setTransform(8.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_168, new cjs.Rectangle(0,0,14.7,31), null);


(lib.Group_167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_167, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_166, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_165, null, null);


(lib.Group_164 = function(mode,startPosition,loop) {
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
	this.shape_2.setTransform(4,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_164, new cjs.Rectangle(0,0.1,6.7,29.3), null);


(lib.Group_163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_163, null, null);


(lib.Group_162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAIIAzgdIAAAOIgzAdg");
	this.shape.setTransform(2.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgOIAzgeIgCA7IgzAeg");
	this.shape_1.setTransform(2.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgVg7IABgOIA0gfIgBAPIgKCjIg0AfIAKikg");
	this.shape_2.setTransform(3.3,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_162, new cjs.Rectangle(0,0,6.5,28.3), null);


(lib.Group_161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape.setTransform(3,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A6270").s().p("AgbAmIAEguIAzgfIgEAuIAAACIgzAfg");
	this.shape_1.setTransform(3.2,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgXgLIAzgeQgBAcgCAYIg0Afg");
	this.shape_2.setTransform(3.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZgFIA0gfIgCAqIgzAfg");
	this.shape_3.setTransform(3.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6573").s().p("AgdBFIAMi6IAAgBIA0gfIgBABIgQELIg0Afg");
	this.shape_4.setTransform(4.7,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(5.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#656E7D").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_6.setTransform(5.6,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8994A9").s().p("AgaANIAzgdIADAEIg0Adg");
	this.shape_7.setTransform(5.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8691A6").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_8.setTransform(5,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(4.7,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737C8E").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_10.setTransform(4.4,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E7687").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_11.setTransform(4.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_161, new cjs.Rectangle(0.3,0,7.9,47.3), null);


(lib.Group_160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E344F").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(8,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303753").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_1.setTransform(8,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313854").s().p("AgZAOIAzgdIABACIgzAdg");
	this.shape_2.setTransform(7.9,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323956").s().p("AgcAMIA0geIAFAHIg0Aeg");
	this.shape_3.setTransform(7.6,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#313854").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_4.setTransform(7.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#303753").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape_5.setTransform(7.1,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F3651").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_6.setTransform(6.9,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2E344F").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_7.setTransform(6.8,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D334D").s().p("AgWASIgIgHIAzgdIAJAHIABABIgzAdg");
	this.shape_8.setTransform(6.2,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C324C").s().p("AgeAMIA0geIAIAHIgzAeg");
	this.shape_9.setTransform(5.3,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B314A").s().p("AgcANIA0gdIAFADIg0Aeg");
	this.shape_10.setTransform(4.6,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3048").s().p("AgbAOIAzgdIAEACIgzAdg");
	this.shape_11.setTransform(4.1,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292F47").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_12.setTransform(3.9,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3048").s().p("AgaAPIAzgdIACAAIgzAeg");
	this.shape_13.setTransform(3.7,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B314A").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_14.setTransform(3.6,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E344F").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_15.setTransform(3.3,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_16.setTransform(3.2,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323956").s().p("AgaAOIAzgeIACAEIgzAdg");
	this.shape_17.setTransform(2.9,11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24293E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_18.setTransform(2.6,10.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_19.setTransform(2.6,9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#22273A").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_20.setTransform(2.6,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#23283C").s().p("AgZgKIA0geIgBAzIg0AeIABgzg");
	this.shape_21.setTransform(2.7,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#22273A").s().p("AgZAJIA0gdIgBALIg0Aeg");
	this.shape_22.setTransform(2.8,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#212639").s().p("AgZALIAzgeIAAAJIg0Aeg");
	this.shape_23.setTransform(2.9,2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#202437").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_24.setTransform(2.9,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_160, new cjs.Rectangle(0,0,10.7,17.7), null);


(lib.Group_159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_159, null, null);


(lib.Group_158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_158, null, null);


(lib.Group_157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYAOIA0geIgFAEIgyAdIADgDg");
	this.shape.setTransform(2.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_1.setTransform(3.2,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_2.setTransform(3.3,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24293E").s().p("AgZAMIAzgeIABAHIg0Aeg");
	this.shape_3.setTransform(3.3,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252A40").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_4.setTransform(3.2,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_5.setTransform(3.2,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_6.setTransform(3.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_7.setTransform(3.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#212639").s().p("AgZAOIA0gdIgBACIgzAdg");
	this.shape_8.setTransform(3.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_157, new cjs.Rectangle(0.2,0.7,5.8,7), null);


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


(lib.Group_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgeIAAALIgzAeg");
	this.shape.setTransform(3.2,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252A40").s().p("AgZAJIAygeIABANIgzAeg");
	this.shape_1.setTransform(3.2,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgaAKIA0gdIAAAKIgyAdg");
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
	this.shape_6.graphics.f("#24293E").s().p("AgZALIAzgdIAAAIIgzAdg");
	this.shape_6.setTransform(2.6,57.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23283C").s().p("AgZAMIA0geIgBAHIg0Aeg");
	this.shape_7.setTransform(2.7,57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZAMIAzgdIAAAGIgzAeg");
	this.shape_8.setTransform(2.7,56.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#212639").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_9.setTransform(2.7,55.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202437").s().p("AgZANIA0geIgBAGIgzAdg");
	this.shape_10.setTransform(2.8,55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2335").s().p("AgYANIAzgeIgBAGIg0Adg");
	this.shape_11.setTransform(2.9,54.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E2234").s().p("AgYAMIAzgdIgBAGIg0AdIACgGg");
	this.shape_12.setTransform(3,54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D2132").s().p("AgZANIA0geIgCAGIgzAdg");
	this.shape_13.setTransform(3.2,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C2030").s().p("AgYAMIA0gdIgDAGIg0Aeg");
	this.shape_14.setTransform(3.4,52.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B1F2E").s().p("AgXALIAzgdIgEAIIgzAdg");
	this.shape_15.setTransform(3.8,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1A1E2D").s().p("AgRADIA0geIgRAZIg0Adg");
	this.shape_16.setTransform(4.8,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B1F2E").s().p("AgbATIATghIADgGIAzgeIgDAGIgSAhQgLAUgIAMIgzAeQAHgMALgUg");
	this.shape_17.setTransform(7.7,45.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C2030").s().p("AgZAOIA0geIgBADIg0Adg");
	this.shape_18.setTransform(9.8,42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D2132").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_19.setTransform(9.9,41.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E2234").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_20.setTransform(9.9,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#202437").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_21.setTransform(10,41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#22273A").s().p("AgfCIIAMjxIAzgfIgMDxIAAABIgzAfg");
	this.shape_22.setTransform(10.6,28.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#23283C").s().p("AgZgEIA0geIgBAnIg0Aeg");
	this.shape_23.setTransform(11.3,14.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24293E").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_24.setTransform(11.4,12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#252A40").s().p("AgZANIAzgeIAAAFIgzAdg");
	this.shape_25.setTransform(11.4,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262B41").s().p("AgZANIAzgeIABAFIg0Adg");
	this.shape_26.setTransform(11.4,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_27.setTransform(11.3,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282E45").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_28.setTransform(11.3,10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#292F47").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_29.setTransform(11.2,10.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A3048").s().p("AgZANIAzgdIABAEIgzAdg");
	this.shape_30.setTransform(11.1,10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B314A").s().p("AgaAOIA0geIABAEIg0Adg");
	this.shape_31.setTransform(11,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C324C").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_32.setTransform(10.9,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D334D").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_33.setTransform(10.8,8.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2E344F").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_34.setTransform(10.7,8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2F3651").s().p("AgaANIA0geIABAFIgzAeg");
	this.shape_35.setTransform(10.6,8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#303753").s().p("AgaANIAzgeIACAFIgzAeg");
	this.shape_36.setTransform(10.4,7.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#313854").s().p("AgbAMIA0gdIACAGIgzAdg");
	this.shape_37.setTransform(10.2,7.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323956").s().p("AggAFIAzgeQAGAIAIANIgzAeQgIgOgGgHg");
	this.shape_38.setTransform(9.3,5.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#313854").s().p("AgcANIA0geIAFAFIg0Aeg");
	this.shape_39.setTransform(8.4,4.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#303753").s().p("AgbANIAzgdIAEAEIgzAdg");
	this.shape_40.setTransform(7.9,3.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2F3651").s().p("AgbANIAzgdIAEADIgzAeg");
	this.shape_41.setTransform(7.6,3.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2E344F").s().p("AgbAOIAzgeIAEAEIgzAdg");
	this.shape_42.setTransform(7.2,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D334D").s().p("AgbAOIA0geIADADIgzAeg");
	this.shape_43.setTransform(6.8,2.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C324C").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_44.setTransform(6.4,2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B314A").s().p("AgbAOIAzgeIAEADIgzAeg");
	this.shape_45.setTransform(6,2.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A3048").s().p("AgbAOIAzgdIAEACIgzAeg");
	this.shape_46.setTransform(5.6,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#292F47").s().p("AgcAOIA0geIAEADIgzAeg");
	this.shape_47.setTransform(5.2,1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#282E45").s().p("AgaAPIA0geIABABIg0Adg");
	this.shape_48.setTransform(4.9,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_77, new cjs.Rectangle(0,0,14,67.3), null);


(lib.Group_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("Ag3gBIA0geQAZAOAiASIg0AfQgigUgZgNg");
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
	this.shape_5.graphics.f("#23283C").s().p("AgaAPIAzgeIADABIg0Aeg");
	this.shape_5.setTransform(5.5,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgbAPIA0geIADABIg0Aeg");
	this.shape_6.setTransform(5.2,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_7.setTransform(5,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgaAPIAzgeIADABIg0Adg");
	this.shape_8.setTransform(4.7,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_9.setTransform(4.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_10.setTransform(4.2,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AgbAPIA0gdIADAAIg0Adg");
	this.shape_11.setTransform(3.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_76, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.Group_75 = function(mode,startPosition,loop) {
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
	this.shape_3.graphics.f("#323956").s().p("AgiADIA0geQALAQAGAJIg0AeQgFgKgMgPg");
	this.shape_3.setTransform(3.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_75, new cjs.Rectangle(0,0,7.5,7.1), null);


(lib.Group_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAQIgLgRIA0gfIALATIALAPIgzAfIgMgRg");
	this.shape.setTransform(3.8,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_74, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.Group_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8994A9").s().p("AgfAHIAzgeQAFAFAFAJIACADIg0Aeg");
	this.shape.setTransform(10.9,7.5);

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
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIA0geIACADIgzAeg");
	this.shape_5.setTransform(9.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#798295").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_6.setTransform(8.8,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767F91").s().p("AgbAOIA0gdIADACIg0Adg");
	this.shape_7.setTransform(8.5,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737C8E").s().p("AgbAOIA0gdIADACIg0Adg");
	this.shape_8.setTransform(8.2,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape_9.setTransform(7.8,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E7687").s().p("AgcAOIAAAAIAzgeIABAAIAFADIgzAeg");
	this.shape_10.setTransform(7.2,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgbAOIgCgBIAzgeIADABIAFAEIgzAdg");
	this.shape_11.setTransform(6.5,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E7687").s().p("AgXAQIgGgDIAAAAIAzgeIABAAIAFAEIACABIgzAdg");
	this.shape_12.setTransform(5.7,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70798B").s().p("AglAIIgCgBIA0geIACABIAZAQIg0Adg");
	this.shape_13.setTransform(4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_73, new cjs.Rectangle(0,0,14.1,9.9), null);


(lib.Group_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_72, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.Group_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgQi9IA0gfIgUGaIgzAfg");
	this.shape.setTransform(4.2,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgVIA0geIgDBJIg0Aeg");
	this.shape_1.setTransform(5.3,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgSh3IABgIIAzgeIAAAHQgIBrgICrIgzAeQAHirAIhqg");
	this.shape_2.setTransform(6.3,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23283C").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_3.setTransform(7.1,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgZANIAzgeIAAAGIgzAdg");
	this.shape_4.setTransform(7.1,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252A40").s().p("AgZANIAzgeIABAFIg0Aeg");
	this.shape_5.setTransform(7.1,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#262B41").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_6.setTransform(7,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#272C43").s().p("AgaANIA0gdIAAAEIgzAdg");
	this.shape_7.setTransform(7,4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282E45").s().p("AgZANIAzgdIABAEIg0Adg");
	this.shape_8.setTransform(7,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#292F47").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_9.setTransform(6.9,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3048").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_10.setTransform(6.8,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B314A").s().p("AgaAOIA0geIABADIg0Aeg");
	this.shape_11.setTransform(6.7,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C324C").s().p("AgaANIA0gdIAAADIgzAeg");
	this.shape_12.setTransform(6.7,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D334D").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_13.setTransform(6.6,2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E344F").s().p("AgaANIA0gdIABADIg0Aeg");
	this.shape_14.setTransform(6.5,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F3651").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_15.setTransform(6.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_71, new cjs.Rectangle(0.6,0,9.1,85.7), null);


(lib.Group_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A6270").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape.setTransform(2.9,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_1.setTransform(2.9,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606876").s().p("AgZgGIA0geIgCArIgzAeg");
	this.shape_2.setTransform(3,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgXgUIACgqIAzgfIgCAqIgGByIg0AfIAHhyg");
	this.shape_3.setTransform(3.5,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgXggIAzgfIgEBhIgzAeg");
	this.shape_4.setTransform(4.1,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6573").s().p("AgXgLIABgTIAzgfIgBATQgDAkgCAlIgzAfQACgnADgig");
	this.shape_5.setTransform(4.5,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606876").s().p("AgYgJIAzgfIgCAyIgzAfg");
	this.shape_6.setTransform(4.9,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6573").s().p("AgZAGIA0geIgBATIg0Aeg");
	this.shape_7.setTransform(5,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A6270").s().p("AgZAJIA0geIgBANIg0Aeg");
	this.shape_8.setTransform(5.1,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585F6C").s().p("AgYAMIAAgCIAzgeIAAADIgBAIIg0Aeg");
	this.shape_9.setTransform(5.3,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#585F6C").s().p("AgZAMIA0geIgBAHIg0Aeg");
	this.shape_10.setTransform(5.4,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A6270").s().p("AgZAOIA0geIgBADIgzAeg");
	this.shape_11.setTransform(5.5,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D6573").s().p("AgZAOIAzgeIAAADIgzAdg");
	this.shape_12.setTransform(5.5,5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_13.setTransform(5.5,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#636B7A").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_14.setTransform(5.5,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#656E7D").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_15.setTransform(5.5,5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#687080").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_16.setTransform(5.5,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_17.setTransform(5.5,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70798B").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_18.setTransform(5.5,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737C8E").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_19.setTransform(5.4,4.3);

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
	this.shape_23.graphics.f("#818B9F").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_23.setTransform(5.2,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#848EA2").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_24.setTransform(5.2,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8691A6").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_25.setTransform(5.1,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8994A9").s().p("AgeAIIA0gdQAGAIADAFIg0AeQgDgGgGgIg");
	this.shape_26.setTransform(4.5,2.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8691A6").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_27.setTransform(4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_70, new cjs.Rectangle(0.3,0,7.9,57.2), null);


(lib.Group_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYANIA0gdIgEADIgzAeg");
	this.shape.setTransform(2.8,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1F2E").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_1.setTransform(3,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C2030").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_2.setTransform(3.1,45.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D2132").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_3.setTransform(3.2,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E2234").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape_4.setTransform(3.2,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZAOIAzgdIgBACIgzAeg");
	this.shape_5.setTransform(3.3,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202437").s().p("AgZANIA0gdIgBAEIgzAdg");
	this.shape_6.setTransform(3.4,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgZAMIAzgdIAAAGIg0Adg");
	this.shape_7.setTransform(3.4,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgdBPIAFhWIACg1IA0geIgCA1IgFBVIgBANIgzAeg");
	this.shape_8.setTransform(3.8,36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23283C").s().p("AgXgxIA0gfIgFCCIg0Afg");
	this.shape_9.setTransform(4.4,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#22273A").s().p("AgXgjIA0gfIgFBmIg0Afg");
	this.shape_10.setTransform(4.9,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23283C").s().p("AgZgCIA0gfIgBAkIg0Aeg");
	this.shape_11.setTransform(5.2,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_69, new cjs.Rectangle(0,0,7.9,47.7), null);


(lib.Group_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606876").s().p("AgYgLIAzgeIgCA1IgzAeg");
	this.shape.setTransform(3.3,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6573").s().p("AgWgwIAAgHIA0gfIgICOIgzAfIAHiHg");
	this.shape_1.setTransform(3.7,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A6270").s().p("AgYAHIAzgeIgCARIgzAeg");
	this.shape_2.setTransform(4.2,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6573").s().p("AgZAKIA0gdIgBAKIgzAdg");
	this.shape_3.setTransform(4.3,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606876").s().p("AgZANIAzgeIAAAFIgzAeg");
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
	this.shape_13.setTransform(3.9,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B8598").s().p("AgaAOIA0geIAAADIgzAeg");
	this.shape_14.setTransform(3.9,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E889B").s().p("AgaAOIAzgeIACADIg0Aeg");
	this.shape_15.setTransform(3.8,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#818B9F").s().p("AgaANIA0gdIABAEIg0Adg");
	this.shape_16.setTransform(3.6,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#848EA2").s().p("AgaANIAzgdIACAEIgzAdg");
	this.shape_17.setTransform(3.5,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8691A6").s().p("AgbAMIA0gdIADAGIg0Adg");
	this.shape_18.setTransform(3.2,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8994A9").s().p("AgcALIA0geIAEAJIgzAdg");
	this.shape_19.setTransform(2.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_68, new cjs.Rectangle(0,0,6.9,31.8), null);


(lib.Group_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262B41").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape.setTransform(3.8,4.3);

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
	this.shape_4.graphics.f("#303753").s().p("AgaAOIA0gdIABACIg0Aeg");
	this.shape_4.setTransform(3.5,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313854").s().p("AgaAOIA0geIABADIgzAeg");
	this.shape_5.setTransform(3.4,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323956").s().p("AgdAKIA0geIAHALIg0Aeg");
	this.shape_6.setTransform(3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_67, new cjs.Rectangle(0,0,6.4,5.9), null);


(lib.Group_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AggAIIAzgeIAOAPIgzAdg");
	this.shape.setTransform(22.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8691A6").s().p("AAeBNIhxh8IA1geIBxB7IABACIg1Aeg");
	this.shape_1.setTransform(15.9,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848EA2").s().p("AgdALIAzgdIAJAIIg0Adg");
	this.shape_2.setTransform(9.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818B9F").s().p("AgcANIA0geIAFAGIg0Adg");
	this.shape_3.setTransform(9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E889B").s().p("AgcANIA0gdIAFAEIg0Adg");
	this.shape_4.setTransform(8.5,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B8598").s().p("AgbAOIAzgeIAEADIgzAeg");
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
	this.shape_10.graphics.f("#6E7687").s().p("AgbAPIA0geIADABIg0Aeg");
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
	this.shape_15.setTransform(5.2,1.7);

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

}).prototype = getMCSymbolPrototype(lib.Group_66, new cjs.Rectangle(1,0,24.6,21), null);


(lib.Group_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_65, null, null);


(lib.Group_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAKIAzgeIAAAMIgzAdg");
	this.shape_1.setTransform(2.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_64, new cjs.Rectangle(0,0,5.3,5.2), null);


(lib.Group_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_63, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape.setTransform(2.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_62, new cjs.Rectangle(0,0,5.3,4), null);


(lib.Group_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2335").s().p("AgZAPIAAgBIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202437").s().p("AgZANIAzgdIgBAEIgyAdg");
	this.shape_1.setTransform(2.7,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_2.setTransform(2.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_3.setTransform(2.8,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23283C").s().p("AgZAJIAzgdIAAAMIgzAdg");
	this.shape_4.setTransform(2.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZAKIAzgdIAAAJIgzAeg");
	this.shape_5.setTransform(2.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_61, new cjs.Rectangle(0,0,5.5,6.9), null);


(lib.Group_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(17.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_1.setTransform(17.2,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24293E").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_2.setTransform(17.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_3.setTransform(17.2,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303753").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_4.setTransform(17,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323956").s().p("AgZAPIgDgDIA0geIACADIADAEIg0Adg");
	this.shape_5.setTransform(16.7,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#313854").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_6.setTransform(16.4,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303753").s().p("AhbgyIA1gfIAAABICACCIACABIg0Afg");
	this.shape_7.setTransform(9.7,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F3651").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_8.setTransform(3.1,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(2.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C324C").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_60, new cjs.Rectangle(0.1,0.1,19.8,20.1), null);


(lib.Group_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgZANIA0gdIgBADIg0Aeg");
	this.shape_1.setTransform(2.7,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_2.setTransform(2.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#212639").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_3.setTransform(2.7,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202437").s().p("AgZANIA0gdIgBADIg0Aeg");
	this.shape_4.setTransform(2.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZAPIAAgBIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_59, new cjs.Rectangle(0,0,5.4,5.1), null);


(lib.Group_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAOIAAgBIAzgdIAAAEIgzAdg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_58, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.Group_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgZAPIAzgeIABABIg0Aeg");
	this.shape.setTransform(4.4,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AgaAMIAzgdIABAGIgzAdg");
	this.shape_1.setTransform(4.3,10.9);

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
	this.shape_7.graphics.f("#282E45").s().p("AgZAMIAzgeIABAHIgzAeg");
	this.shape_7.setTransform(2.8,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#272C43").s().p("AgaANIA0geIABAFIg0Aeg");
	this.shape_8.setTransform(2.8,3);

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

}).prototype = getMCSymbolPrototype(lib.Group_57, new cjs.Rectangle(0,0,7,12.9), null);


(lib.Group_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212639").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(2.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIg0Aeg");
	this.shape_1.setTransform(2.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZAKIAzgeIAAAMIgzAdg");
	this.shape_2.setTransform(2.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_56, new cjs.Rectangle(0.2,0,5.3,4.7), null);


(lib.Group_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape.setTransform(4.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E889B").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_1.setTransform(4.1,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818B9F").s().p("AgcANIAAAAIAzgeIAGAFIgzAeIgGgFg");
	this.shape_2.setTransform(3.7,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape_3.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_55, new cjs.Rectangle(0,0,6.9,4.7), null);


(lib.Group_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_54, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_53, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.Group_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848EA2").s().p("AgdALIAzgdIAIAIIgzAdg");
	this.shape.setTransform(14.8,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818B9F").s().p("AgjAGIAzgeIAUATIgzAeg");
	this.shape_1.setTransform(13.4,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E889B").s().p("AgjAHIA0geIATARIg0AeQgMgMgHgFg");
	this.shape_2.setTransform(11.5,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8598").s().p("AgiAIIAzgeIASAPIgzAeg");
	this.shape_3.setTransform(9.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#798295").s().p("AgiAIIAzgdIASAOIgzAdg");
	this.shape_4.setTransform(7.8,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767F91").s().p("AgjAJIA0geIASANIgzAeg");
	this.shape_5.setTransform(6,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737C8E").s().p("AgiAJIAzgdIATAMIg0Adg");
	this.shape_6.setTransform(4.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#70798B").s().p("AgcANIAzgdIAGAEIgzAdg");
	this.shape_7.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_52, new cjs.Rectangle(0,0,17.9,13.2), null);


(lib.Group_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_51, null, null);


(lib.Group_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D334D").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape.setTransform(2.8,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_50, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


(lib.Group_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgcA8QADguACgvIA0geQgCAvgDAtIAAAFIg0Aeg");
	this.shape.setTransform(3.1,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgYgXIABgaIA0geIgCAZIgDBoIg0AeIAEhng");
	this.shape_1.setTransform(3.5,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgYgKIAzgfIgCA0Ig0Afg");
	this.shape_2.setTransform(3.9,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZADIA0gdIgBAYIg0Aeg");
	this.shape_3.setTransform(4,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6573").s().p("AgZALIA0gdIgBAIIg0Adg");
	this.shape_4.setTransform(4.1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A6270").s().p("AgZAJIA0geQgBAGAAAHIg0AeIABgNg");
	this.shape_5.setTransform(4.2,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#585F6C").s().p("AgYAFIAzgdIgCAUIg0Adg");
	this.shape_6.setTransform(4.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A6270").s().p("AgZAMIAzgdIAAAGIg0Adg");
	this.shape_7.setTransform(4.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_49, new cjs.Rectangle(0.2,0,7,38.2), null);


(lib.Group_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_48, null, null);


(lib.Group_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_47, null, null);


(lib.Group_46 = function(mode,startPosition,loop) {
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
	this.shape_3.graphics.f("#798295").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_3.setTransform(3.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737C8E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_4.setTransform(3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70798B").s().p("AgaAOIA0gdIAAACIgzAdg");
	this.shape_5.setTransform(3,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E7687").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_6.setTransform(2.9,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B7384").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_7.setTransform(2.9,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#687080").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape_8.setTransform(2.9,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#656E7D").s().p("AgaALIA0geIAAAJIgzAdg");
	this.shape_9.setTransform(2.9,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#687080").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_10.setTransform(2.8,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B7384").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_11.setTransform(2.8,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E7687").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_12.setTransform(2.8,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70798B").s().p("AgaAOIA0gdIABACIg0Adg");
	this.shape_13.setTransform(2.8,4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#767F91").s().p("AgZAPIAAgBIAzgdIAAABIAAAAIgzAeg");
	this.shape_14.setTransform(2.7,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_15.setTransform(2.7,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#555C69").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_16.setTransform(2.7,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525965").s().p("AgZAOIA0geIgBADIg0Adg");
	this.shape_17.setTransform(2.8,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F5662").s().p("AgXALIAAAAIAAgCIAzgdIAAABIgDAKIg0Aeg");
	this.shape_18.setTransform(3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_46, new cjs.Rectangle(0.1,0.5,6.2,9.9), null);


(lib.Group_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D535F").s().p("AgYANIAzgeIgCAFIgzAeg");
	this.shape.setTransform(2.9,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474D58").s().p("AgdATIAIgHIAzgeIgHAHIgBAAIgzAegAAegSIAAAAIAAAAg");
	this.shape_1.setTransform(3.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_45, new cjs.Rectangle(0.2,0,6.3,4.4), null);


(lib.Group_44 = function(mode,startPosition,loop) {
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
	this.shape_4.graphics.f("#8691A6").s().p("AgdALIA0geIAHAJIgzAeg");
	this.shape_4.setTransform(6.9,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8994A9").s().p("AglgBIA0geQAJASAOAOIg0AfQgNgPgKgSg");
	this.shape_5.setTransform(5.4,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8691A6").s().p("AgbALIAzgdIAEAIIgzAdg");
	this.shape_6.setTransform(4.1,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#848EA2").s().p("AgbAMIA0gdIACAGIgzAdg");
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
	this.shape_13.graphics.f("#737C8E").s().p("AgaANIA0gdIABADIg0Aeg");
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
	this.shape_19.graphics.f("#636B7A").s().p("AgZANIAzgdIAAAEIgzAdg");
	this.shape_19.setTransform(2.6,6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#606876").s().p("AgZANIAzgdIAAAEIgzAdg");
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
	this.shape_25.graphics.f("#525965").s().p("AgZAMIA0gdIgCAGIgzAdg");
	this.shape_25.setTransform(3,3.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4F5662").s().p("AgYAMIAzgdIgCAGIgzAdg");
	this.shape_26.setTransform(3.1,2.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D535F").s().p("AgYANIAAgBIA0geIgBACIgCAFIgzAeg");
	this.shape_27.setTransform(3.4,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A505B").s().p("AgZAOIA0gdIgBACIg0Adg");
	this.shape_28.setTransform(3.5,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_44, new cjs.Rectangle(0,0.2,12.3,20.2), null);


(lib.Group_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737C8E").s().p("AgaAPIA0geIABABIgzAeg");
	this.shape.setTransform(3.9,2.8);

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

}).prototype = getMCSymbolPrototype(lib.Group_43, new cjs.Rectangle(0,0,6.6,4.4), null);


(lib.Group_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAGIAzgeIAAATIgzAeg");
	this.shape.setTransform(3.9,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24293E").s().p("AgZACIA0geIgBAbIgzAeg");
	this.shape_1.setTransform(3.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZgFIAzgfIAAAqIg0Aeg");
	this.shape_2.setTransform(4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#22273A").s().p("AgYAEIAzgdIgCAVIgzAeg");
	this.shape_3.setTransform(4.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_4.setTransform(4.1,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(4.1,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24293E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_6.setTransform(4.1,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262B41").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_7.setTransform(4.1,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323956").s().p("AgbANIA0gdIACAEIgzAdg");
	this.shape_8.setTransform(3.8,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#313854").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(3.6,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_10.setTransform(3.5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F3651").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_11.setTransform(3.4,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E344F").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_12.setTransform(3.3,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D334D").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_13.setTransform(3.2,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C324C").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_14.setTransform(3,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B314A").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_15.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_42, new cjs.Rectangle(0,0,6.8,17.1), null);


(lib.Group_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape.setTransform(41.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272C43").s().p("Ag5AAIA0gfQAVAKAqAWIg1AfQgpgXgVgJg");
	this.shape_1.setTransform(37.9,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262B41").s().p("AgnAJIAzgeIAcAOIgzAdg");
	this.shape_2.setTransform(33.3,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252A40").s().p("AgkAKIAzgdIAXAJIg0Aeg");
	this.shape_3.setTransform(30.8,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24293E").s().p("AgjAMIAzgeIAUAHIgzAeg");
	this.shape_4.setTransform(28.7,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23283C").s().p("AgjAMIA0gdIATAGIg0Aeg");
	this.shape_5.setTransform(26.7,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22273A").s().p("AgjANIAzgeIAUAGIgzAdg");
	this.shape_6.setTransform(24.7,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgjANIAzgdIAVAEIg0AeIgUgFg");
	this.shape_7.setTransform(22.7,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202437").s().p("AgkAOIA0geIAVAEIg0Adg");
	this.shape_8.setTransform(20.6,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2335").s().p("AglAOIA0geIAXADIg0Aeg");
	this.shape_9.setTransform(18.4,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2234").s().p("AglAPIAzgeIAYABIgzAeg");
	this.shape_10.setTransform(16.1,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2132").s().p("AAMgNIAcgCIgzAeIgcABg");
	this.shape_11.setTransform(13.4,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C2030").s().p("AAKgMQANgDAUgCIg0AeQgSABgPAEg");
	this.shape_12.setTransform(10.4,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B1F2E").s().p("AADgIQAXgIAXgEIgzAdQgYAFgWAHg");
	this.shape_13.setTransform(6.4,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1E2D").s().p("AAVgMIANgFIg0AdIgNAFIgCABg");
	this.shape_14.setTransform(3.4,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_41, new cjs.Rectangle(0,0,43.9,11.9), null);


(lib.Group_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape.setTransform(4.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606876").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_1.setTransform(3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgaAPIAzgdIACAAIgzAdg");
	this.shape_2.setTransform(3.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A6270").s().p("AgaAPIA0geIABABIg0Adg");
	this.shape_3.setTransform(3.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0.9,0,6,3.3), null);


(lib.Group_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_39, null, null);


(lib.Group_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_38, new cjs.Rectangle(0,0,5.4,3.2), null);


(lib.Group_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3048").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape.setTransform(3.4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B314A").s().p("AgaAPIAzgeIACACIgzAdg");
	this.shape_1.setTransform(3.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B314A").s().p("AgbAOIgBAAIA0geIABABIADACIgzAeg");
	this.shape_2.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0,0,6.1,3.7), null);


(lib.Group_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
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

}).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0,0.7,5.3,4.9), null);


(lib.Group_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgUASIgMgGIAAgBIAzgdIABAAIAMAHIABABIgzAdg");
	this.shape.setTransform(4.7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282E45").s().p("AggAMIA0geIANAHIg0Aeg");
	this.shape_1.setTransform(3.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0,0,8.1,4.7), null);


(lib.Group_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0,0,5.3,3.8), null);


(lib.Group_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323956").s().p("AgaAOIAzgdIACACIgzAdIgCgCg");
	this.shape.setTransform(3.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E344F").s().p("AgZAOIAzgdIABACIg0Adg");
	this.shape_1.setTransform(2.9,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D334D").s().p("AgaAOIA0gdIAAABIgzAeg");
	this.shape_2.setTransform(2.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C324C").s().p("AgZAPIAzgeIABACIg0Adg");
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
	this.shape_10.graphics.f("#252A40").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_10.setTransform(2.6,5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24293E").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_11.setTransform(2.6,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_12.setTransform(2.6,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#22273A").s().p("AgZAJIA0gdIgBAMIg0Adg");
	this.shape_13.setTransform(2.7,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#23283C").s().p("AgZAMIAzgdIAAAGIgzAdg");
	this.shape_14.setTransform(2.7,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIAAAAIgzAeg");
	this.shape_15.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,5.9,8.9), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_32, null, null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_31, null, null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3651").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape.setTransform(3.8,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303753").s().p("AgbAOIA0gdIACACIgzAdg");
	this.shape_1.setTransform(3.7,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_2.setTransform(3.5,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D334D").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B314A").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_4.setTransform(3,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292F47").s().p("AgaAPIAzgeIACABIg0Aeg");
	this.shape_5.setTransform(2.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0.2,0.1,6.4,4.1), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C43").s().p("AgbAOIA0gdIADABIg0Aeg");
	this.shape.setTransform(3.8,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262B41").s().p("AgZAPIgEgBIA0geIADABIAEADIgzAdg");
	this.shape_1.setTransform(3.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272C43").s().p("AgZAPIgBAAIA0geIAAABIABAAIg0Aeg");
	this.shape_2.setTransform(2.9,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape_3.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0,0,6.6,3.7), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282E45").s().p("AgaAPIAzgeIACABIgzAdg");
	this.shape.setTransform(2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0,5.4,3.1), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_27, null, null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636B7A").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape.setTransform(3.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656E7D").s().p("AgZAOIAzgdIAAABIgzAeg");
	this.shape_1.setTransform(3.5,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeg");
	this.shape_2.setTransform(3.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_25, null, null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_24, null, null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIAzgeIAAAEIgzAdg");
	this.shape.setTransform(2.6,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A6270").s().p("AgZAGIA0geIgCATIgzAeg");
	this.shape_1.setTransform(2.8,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgYADIAzgeQAAANgBAMIg0AeQABgMABgNg");
	this.shape_2.setTransform(2.9,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZgHIA0geIgBAsIg0AfIABgtg");
	this.shape_3.setTransform(3,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0.1,5.7,12.3), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0.5,5.3,3.4), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212639").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape.setTransform(2.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape.setTransform(2.6,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZANIAzgdIAAADIgzAeg");
	this.shape_1.setTransform(2.6,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212639").s().p("AgZAMIA0gdIgBAGIg0Adg");
	this.shape_2.setTransform(2.7,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202437").s().p("AgYAGIAzgeIgCATIg0Aeg");
	this.shape_3.setTransform(2.9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212639").s().p("AgZAOIA0geIgBADIgzAeg");
	this.shape_4.setTransform(3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,5.7,6.5), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAIIgzAdg");
	this.shape.setTransform(2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,5.3,3.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgLACIAzgdQgJAPgTALIg0AdQAUgMAJgOg");
	this.shape.setTransform(4.1,8.1);

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
	this.shape_4.graphics.f("#1E2234").s().p("AgZANIA0geIgBAFIg0Adg");
	this.shape_4.setTransform(6.3,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2335").s().p("AgZANIA0geIgBAFIg0Adg");
	this.shape_5.setTransform(6.4,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202437").s().p("AgZANIA0geIgBAFIgzAdg");
	this.shape_6.setTransform(6.5,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212639").s().p("AgZANIAzgeIAAAFIg0Adg");
	this.shape_7.setTransform(6.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#22273A").s().p("AgZANIA0geIgBAFIgzAeg");
	this.shape_8.setTransform(6.6,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23283C").s().p("AgZAMIAzgcIAAAEIgzAeg");
	this.shape_9.setTransform(6.6,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAIIgzAdg");
	this.shape_10.setTransform(6.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,9.3,11), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6573").s().p("AgUg5IA0geIgLCRIg0Aeg");
	this.shape.setTransform(3.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#555C69").s().p("AgZANIA0geIgBAGIg0Adg");
	this.shape_1.setTransform(3.8,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8994A9").s().p("AgaAOIAzgeIACADIgzAeIgCgDg");
	this.shape_2.setTransform(3.7,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767F91").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_3.setTransform(3.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0.1,6.5,19.9), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70798B").s().p("AgcAOIA0geIAFADIg0Aeg");
	this.shape.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7687").s().p("AgaAPIA0gdIABAAIg0Adg");
	this.shape.setTransform(3.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B7384").s().p("AgZAPIgBAAIA0geIABABIg0Aeg");
	this.shape_1.setTransform(3.4,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0.8,0.2,5.5,3.2), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212639").s().p("AgZAPIAzgeIAAABIgzAeg");
	this.shape_1.setTransform(3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0.7,5.7,10.1), null);


(lib.Group_12 = function(mode,startPosition,loop) {
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
	this.shape_5.graphics.f("#555C69").s().p("AgYAOIAygeIAAAEIg0Adg");
	this.shape_5.setTransform(3.5,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525965").s().p("AgZAOIAzgeIgBADIgyAeg");
	this.shape_6.setTransform(3.6,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F5662").s().p("AgZAOIA0geIgBADIg0Aeg");
	this.shape_7.setTransform(3.7,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D535F").s().p("AgYAOIAzgeIgBADIg0Aeg");
	this.shape_8.setTransform(3.8,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A505B").s().p("AgcAVIAHgNIA0geIgIANIgBACIgzAdg");
	this.shape_9.setTransform(4.3,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474D58").s().p("AAKgZIA1geQgvAogZAoIg1AfQAZgpAvgog");
	this.shape_10.setTransform(8.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,14.7,31), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22273A").s().p("AgXgSIAAAAIAzgfIAAABIgEBDIgzAfIAEhEg");
	this.shape.setTransform(2.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,5.7,10), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_9, null, null);


(lib.Group_8 = function(mode,startPosition,loop) {
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
	this.shape_2.setTransform(4,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0.1,6.7,29.3), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_7, null, null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24293E").s().p("AgZAIIAzgdIAAAOIgzAdg");
	this.shape.setTransform(2.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23283C").s().p("AgYgOIAzgeIgCA7IgzAeg");
	this.shape_1.setTransform(2.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22273A").s().p("AgVg7IABgOIA0gfIgBAPIgKCjIg0AfIAKikg");
	this.shape_2.setTransform(3.3,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,6.5,28.3), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585F6C").s().p("AgZAOIAzgdIAAACIg0Adg");
	this.shape.setTransform(3,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A6270").s().p("AgbAmIAEguIAzgfIgEAuIAAACIgzAfg");
	this.shape_1.setTransform(3.2,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6573").s().p("AgXgLIAzgeQgBAcgCAYIg0Afg");
	this.shape_2.setTransform(3.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606876").s().p("AgZgFIA0gfIgCAqIgzAfg");
	this.shape_3.setTransform(3.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6573").s().p("AgdBFIAMi6IAAgBIA0gfIgBABIgQELIg0Afg");
	this.shape_4.setTransform(4.7,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606876").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_5.setTransform(5.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#656E7D").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_6.setTransform(5.6,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8994A9").s().p("AgaANIAzgdIADAEIg0Adg");
	this.shape_7.setTransform(5.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8691A6").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_8.setTransform(5,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7B8598").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_9.setTransform(4.7,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737C8E").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_10.setTransform(4.4,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E7687").s().p("AgaAPIAzgeIACABIgzAeg");
	this.shape_11.setTransform(4.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0.3,0,7.9,47.3), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E344F").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape.setTransform(8,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303753").s().p("AgZAOIAzgdIABABIg0Aeg");
	this.shape_1.setTransform(8,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313854").s().p("AgZAOIAzgdIABACIgzAdg");
	this.shape_2.setTransform(7.9,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323956").s().p("AgcAMIA0geIAFAHIg0Aeg");
	this.shape_3.setTransform(7.6,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#313854").s().p("AgaAOIAzgdIACACIgzAdg");
	this.shape_4.setTransform(7.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#303753").s().p("AgaAPIA0geIABACIg0Adg");
	this.shape_5.setTransform(7.1,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F3651").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_6.setTransform(6.9,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2E344F").s().p("AgaAOIAzgdIACABIgzAeg");
	this.shape_7.setTransform(6.8,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D334D").s().p("AgWASIgIgHIAzgdIAJAHIABABIgzAdg");
	this.shape_8.setTransform(6.2,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C324C").s().p("AgeAMIA0geIAIAHIgzAeg");
	this.shape_9.setTransform(5.3,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B314A").s().p("AgcANIA0gdIAFADIg0Aeg");
	this.shape_10.setTransform(4.6,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3048").s().p("AgbAOIAzgdIAEACIgzAdg");
	this.shape_11.setTransform(4.1,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292F47").s().p("AgaAOIAzgdIACACIg0Adg");
	this.shape_12.setTransform(3.9,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3048").s().p("AgaAPIAzgdIACAAIgzAeg");
	this.shape_13.setTransform(3.7,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B314A").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_14.setTransform(3.6,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E344F").s().p("AgaAPIA0geIAAABIgzAeg");
	this.shape_15.setTransform(3.3,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#303753").s().p("AgaAPIA0geIABABIg0Aeg");
	this.shape_16.setTransform(3.2,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323956").s().p("AgaAOIAzgeIACAEIgzAdg");
	this.shape_17.setTransform(2.9,11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24293E").s().p("AgZAPIAzgeIAAACIgzAdg");
	this.shape_18.setTransform(2.6,10.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23283C").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_19.setTransform(2.6,9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#22273A").s().p("AgZANIAzgeIAAAFIgzAeg");
	this.shape_20.setTransform(2.6,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#23283C").s().p("AgZgKIA0geIgBAzIg0AeIABgzg");
	this.shape_21.setTransform(2.7,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#22273A").s().p("AgZAJIA0gdIgBALIg0Aeg");
	this.shape_22.setTransform(2.8,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#212639").s().p("AgZALIAzgeIAAAJIg0Aeg");
	this.shape_23.setTransform(2.9,2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#202437").s().p("AgZANIA0geIgBAFIg0Aeg");
	this.shape_24.setTransform(2.9,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,10.7,17.7), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_3, null, null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_2, null, null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1E2D").s().p("AgYAOIA0geIgFAEIgyAdIADgDg");
	this.shape.setTransform(2.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#22273A").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_1.setTransform(3.2,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_2.setTransform(3.3,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24293E").s().p("AgZAMIAzgeIABAHIg0Aeg");
	this.shape_3.setTransform(3.3,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252A40").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_4.setTransform(3.2,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24293E").s().p("AgZAMIAzgeIAAAHIgzAeg");
	this.shape_5.setTransform(3.2,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23283C").s().p("AgZAOIAzgeIAAADIgzAeg");
	this.shape_6.setTransform(3.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22273A").s().p("AgZAOIAzgdIAAACIgzAdg");
	this.shape_7.setTransform(3.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#212639").s().p("AgZAOIA0gdIgBACIgzAdg");
	this.shape_8.setTransform(3.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0.2,0.7,5.8,7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#791B42").s().p("AwWlKIACoiMAgrAS3IgBIig");
	this.shape.setTransform(104.7,93.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51122C").s().p("AxKo8IBpg+MAgsAS3IhqA+g");
	this.shape_1.setTransform(110.1,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#892B38").s().p("AgzjxIBog+IgBIhIhoA+g");
	this.shape_2.setTransform(214.7,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,220,181.6), null);


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


(lib.ClipGroup_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCEmQgEgjACgXQADgcANgRQAMgPAOgaIAYgsQAFgKABgHIANkVQABgjgOgdQgQghgjgUIAzgeQAkAUAQAhQAPAdgBAiIgOEVQAAAIgGAKIgYAsQgOAagMAPQgNARgDAcQgCAWAEAkQADASAAAYIg1AeQAAgYgCgSg");
	mask.setTransform(7,33.6);

	// Layer 3
	this.instance = new lib.Group_233();
	this.instance.parent = this;
	this.instance.setTransform(7,33.6,1,1,0,0,0,7,33.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, new cjs.Rectangle(0.1,0,14,67.3), null);


(lib.ClipGroup_76_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAdIAAgWQAAgMADgCIA0geQgEACAAANIAAAWQgBAFgFADIgzAeQAGgDAAgGg");
	mask.setTransform(3.1,3.8);

	// Layer 3
	this.instance = new lib.Group_157();
	this.instance.parent = this;
	this.instance.setTransform(3,4.2,1,1,0,0,0,3,4.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76_1, new cjs.Rectangle(0.2,0.7,5.8,7), null);


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


(lib.ClipGroup_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAdIAAgWQAAgMADgCIA0geQgEACAAANIAAAWQgBAFgFADIgzAeQAGgDAAgGg");
	mask.setTransform(3.1,3.8);

	// Layer 3
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(3,4.2,1,1,0,0,0,3,4.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76, new cjs.Rectangle(0.2,0.7,5.8,7), null);


(lib.ClipGroup_75_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIAzgeIACABIgzAdg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_158();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75_1, null, null);


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


(lib.ClipGroup_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIAzgeIACABIgzAdg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75, null, null);


(lib.ClipGroup_74_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAPIA0geQADACACgBIgyAdIgDABIgEgBg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_159();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74_1, null, null);


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


(lib.ClipGroup_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAPIA0geQADACACgBIgyAdIgDABIgEgBg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_3();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74, null, null);


(lib.ClipGroup_73_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_160();
	this.instance.parent = this;
	this.instance.setTransform(5.3,8.8,1,1,0,0,0,5.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73_1, new cjs.Rectangle(0,0,10.7,17.7), null);


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


(lib.ClipGroup_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(5.3,8.8,1,1,0,0,0,5.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73, new cjs.Rectangle(0,0,10.7,17.7), null);


(lib.ClipGroup_72_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkDlQAHhHABgvQAAgkAFhGIANi6IAAgDQAAgPgNgHIgDgCIA0gfIACACQANAHAAAQIAAADIgNC7IgEBpQgBAvgIBHQgBAJgDABIgzAeQADgBABgJg");
	mask.setTransform(4.1,24);

	// Layer 3
	this.instance = new lib.Group_161();
	this.instance.parent = this;
	this.instance.setTransform(4.2,23.7,1,1,0,0,0,4.2,23.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72_1, new cjs.Rectangle(0.3,0,7.9,47.3), null);


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


(lib.ClipGroup_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkDlQAHhHABgvQAAgkAFhGIANi6IAAgDQAAgPgNgHIgDgCIA0gfIACACQANAHAAAQIAAADIgNC7IgEBpQgBAvgIBHQgBAJgDABIgzAeQADgBABgJg");
	mask.setTransform(4.1,24);

	// Layer 3
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(4.2,23.7,1,1,0,0,0,4.2,23.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72, new cjs.Rectangle(0.3,0,7.9,47.3), null);


(lib.ClipGroup_71_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAIhxIAzgeIgHBxQgFBEAAAvIgzAfQAAgwAEhEg");
	mask.setTransform(3.2,14.5);

	// Layer 3
	this.instance = new lib.Group_162();
	this.instance.parent = this;
	this.instance.setTransform(3.2,14.2,1,1,0,0,0,3.2,14.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71_1, new cjs.Rectangle(0,1.5,6.4,26), null);


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


(lib.ClipGroup_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAIhxIAzgeIgHBxQgFBEAAAvIgzAfQAAgwAEhEg");
	mask.setTransform(3.2,14.5);

	// Layer 3
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(3.2,14.2,1,1,0,0,0,3.2,14.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71, new cjs.Rectangle(0,1.5,6.4,26), null);


(lib.ClipGroup_70_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAjgTIhFAng");
	mask.setTransform(3.5,2);

	// Layer 3
	this.instance = new lib.Group_163();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70_1, null, null);


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


(lib.ClipGroup_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAjgTIhFAng");
	mask.setTransform(3.5,2);

	// Layer 3
	this.instance = new lib.Group_7();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70, null, null);


(lib.ClipGroup_69_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXghIAzgeQgCAggCBBIg0AeQAChBADggg");
	mask.setTransform(3.9,6.5);

	// Layer 3
	this.instance = new lib.Group_164();
	this.instance.parent = this;
	this.instance.setTransform(3.4,14.7,1,1,0,0,0,3.4,14.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69_1, new cjs.Rectangle(1,0.1,5.7,12.8), null);


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


(lib.ClipGroup_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXghIAzgeQgCAggCBBIg0AeQAChBADggg");
	mask.setTransform(3.9,6.5);

	// Layer 3
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(3.4,14.7,1,1,0,0,0,3.4,14.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69, new cjs.Rectangle(1,0.1,5.7,12.8), null);


(lib.ClipGroup_68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_165();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68_1, null, null);


(lib.ClipGroup_68_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_87();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68_0, null, null);


(lib.ClipGroup_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68, null, null);


(lib.ClipGroup_67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgSIAzgeIgEBCIgDACIgwAdIAEhDg");
	mask.setTransform(2.8,5.1);

	// Layer 3
	this.instance = new lib.Group_166();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67_1, new cjs.Rectangle(0,0.2,5.7,9.8), null);


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


(lib.ClipGroup_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgSIAzgeIgEBCIgDACIgwAdIAEhDg");
	mask.setTransform(2.8,5.1);

	// Layer 3
	this.instance = new lib.Group_10();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67, new cjs.Rectangle(0,0.2,5.7,9.8), null);


(lib.ClipGroup_66_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgdIAAACIgzAdg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_167();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66_1, new cjs.Rectangle(0.4,0,5.3,3.3), null);


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


(lib.ClipGroup_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgdIAAACIgzAdg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_11();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5,1,1,0,0,0,2.8,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66, new cjs.Rectangle(0.4,0,5.3,3.3), null);


(lib.ClipGroup_65_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCAWIABgbQABgQAFgJQAbgwA1guIA0geQg2AtgaAxQgEAIgBARIgBAcIgHCEIg1AeIAHiFg");
	mask.setTransform(7.4,15.5);

	// Layer 3
	this.instance = new lib.Group_168();
	this.instance.parent = this;
	this.instance.setTransform(7.4,15.5,1,1,0,0,0,7.4,15.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65_1, new cjs.Rectangle(0,0,14.7,31), null);


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


(lib.ClipGroup_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCAWIABgbQABgQAFgJQAbgwA1guIA0geQg2AtgaAxQgEAIgBARIgBAcIgHCEIg1AeIAHiFg");
	mask.setTransform(7.4,15.5);

	// Layer 3
	this.instance = new lib.Group_12();
	this.instance.parent = this;
	this.instance.setTransform(7.4,15.5,1,1,0,0,0,7.4,15.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65, new cjs.Rectangle(0,0,14.7,31), null);


(lib.ClipGroup_64_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIA0geQgDACAAAHIg0AdQABgGACgCg");
	mask.setTransform(3.2,2);

	// Layer 3
	this.instance = new lib.Group_169();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5.8,1,1,0,0,0,2.8,5.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64_1, new cjs.Rectangle(0.4,0.7,5.3,3.2), null);


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


(lib.ClipGroup_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIA0geQgDACAAAHIg0AdQABgGACgCg");
	mask.setTransform(3.2,2);

	// Layer 3
	this.instance = new lib.Group_13();
	this.instance.parent = this;
	this.instance.setTransform(2.8,5.8,1,1,0,0,0,2.8,5.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, new cjs.Rectangle(0.4,0.7,5.3,3.2), null);


(lib.ClipGroup_63_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAQQgGgDgCABIAzgdQADgBAFACIACABIgzAeg");
	mask.setTransform(3.1,1.7);

	// Layer 3
	this.instance = new lib.Group_170();
	this.instance.parent = this;
	this.instance.setTransform(3.5,1.8,1,1,0,0,0,3.5,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63_1, new cjs.Rectangle(0.8,0.2,5.5,3.2), null);


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


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAQQgGgDgCABIAzgdQADgBAFACIACABIgzAeg");
	mask.setTransform(3.1,1.7);

	// Layer 3
	this.instance = new lib.Group_14();
	this.instance.parent = this;
	this.instance.setTransform(3.5,1.8,1,1,0,0,0,3.5,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, new cjs.Rectangle(0.8,0.2,5.5,3.2), null);


(lib.ClipGroup_62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAOIA0geIAFADIg0Aeg");
	mask.setTransform(2.9,1.7);

	// Layer 3
	this.instance = new lib.Group_171();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.7,1,1,0,0,0,2.9,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62_1, new cjs.Rectangle(0,0,5.8,3.4), null);


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


(lib.ClipGroup_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAOIA0geIAFADIg0Aeg");
	mask.setTransform(2.9,1.7);

	// Layer 3
	this.instance = new lib.Group_15();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.7,1,1,0,0,0,2.9,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.ClipGroup_61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVgtIACgLQAAgGgJgGIAzgfQAKAGAAAHIgCAKIgLCRIg0Afg");
	mask.setTransform(3.3,10);

	// Layer 3
	this.instance = new lib.Group_172();
	this.instance.parent = this;
	this.instance.setTransform(3.2,10.1,1,1,0,0,0,3.2,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61_1, new cjs.Rectangle(0,0.1,6.5,19.9), null);


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


(lib.ClipGroup_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVgtIACgLQAAgGgJgGIAzgfQAKAGAAAHIgCAKIgLCRIg0Afg");
	mask.setTransform(3.3,10);

	// Layer 3
	this.instance = new lib.Group_16();
	this.instance.parent = this;
	this.instance.setTransform(3.2,10.1,1,1,0,0,0,3.2,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, new cjs.Rectangle(0,0.1,6.5,19.9), null);


(lib.ClipGroup_60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSAbQALgSAAgaIAAgDIA0geIAAACQgBAcgKASQgKAOgUALIgvAcQAQgKAJgOg");
	mask.setTransform(4.8,5.6);

	// Layer 3
	this.instance = new lib.Group_173();
	this.instance.parent = this;
	this.instance.setTransform(4.6,5.5,1,1,0,0,0,4.6,5.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60_1, new cjs.Rectangle(0.4,0.5,8.9,10.3), null);


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


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSAbQALgSAAgaIAAgDIA0geIAAACQgBAcgKASQgKAOgUALIgvAcQAQgKAJgOg");
	mask.setTransform(4.8,5.6);

	// Layer 3
	this.instance = new lib.Group_17();
	this.instance.parent = this;
	this.instance.setTransform(4.6,5.5,1,1,0,0,0,4.6,5.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(0.4,0.5,8.9,10.3), null);


(lib.ClipGroup_59_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgeIAAAFIgzAeg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_174();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59_1, new cjs.Rectangle(0,0,5.3,3.6), null);


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


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgeIAAAFIgzAeg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_18();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(0,0,5.3,3.6), null);


(lib.ClipGroup_58_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAAIAzgfIgEAgIgzAeIAEgfg");
	mask.setTransform(2.8,3.4);

	// Layer 3
	this.instance = new lib.Group_175();
	this.instance.parent = this;
	this.instance.setTransform(2.8,3.2,1,1,0,0,0,2.8,3.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58_1, new cjs.Rectangle(0,0.2,5.6,6.3), null);


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


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAAIAzgfIgEAgIgzAeIAEgfg");
	mask.setTransform(2.8,3.4);

	// Layer 3
	this.instance = new lib.Group_19();
	this.instance.parent = this;
	this.instance.setTransform(2.8,3.2,1,1,0,0,0,2.8,3.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(0,0.2,5.6,6.3), null);


(lib.ClipGroup_57_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIA0gdIgBACIg0Adg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_176();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57_1, new cjs.Rectangle(0,0,5.3,3.3), null);


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


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIA0gdIgBACIg0Adg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_20();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(0,0,5.3,3.3), null);


(lib.ClipGroup_56_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_177();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56_1, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.ClipGroup_56_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_99();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56_0, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_21();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, new cjs.Rectangle(0,0,5.3,3.4), null);


(lib.ClipGroup_55_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIAzgdQgCABAAAHIgzAdQAAgHACgBg");
	mask.setTransform(2.7,1.9);

	// Layer 3
	this.instance = new lib.Group_178();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.1,1,1,0,0,0,2.6,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55_1, new cjs.Rectangle(0,0.5,5.3,3.4), null);


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


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYALIAzgdQgCABAAAHIgzAdQAAgHACgBg");
	mask.setTransform(2.7,1.9);

	// Layer 3
	this.instance = new lib.Group_22();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.1,1,1,0,0,0,2.6,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(0,0.5,5.3,3.4), null);


(lib.ClipGroup_54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgeIAzgfQABA8gFAhIg0AeQAFghAAg7g");
	mask.setTransform(2.9,6.2);

	// Layer 3
	this.instance = new lib.Group_179();
	this.instance.parent = this;
	this.instance.setTransform(2.9,6.2,1,1,0,0,0,2.9,6.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54_1, new cjs.Rectangle(0,0.1,5.7,12.3), null);


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


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXgeIAzgfQABA8gFAhIg0AeQAFghAAg7g");
	mask.setTransform(2.9,6.2);

	// Layer 3
	this.instance = new lib.Group_23();
	this.instance.parent = this;
	this.instance.setTransform(2.9,6.2,1,1,0,0,0,2.9,6.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(0,0.1,5.7,12.3), null);


(lib.ClipGroup_53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAPIgEAAIA0gdQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIABAAIgzAeg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_180();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53_1, null, null);


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


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAPIgEAAIA0gdQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIABAAIgzAeg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_24();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, null, null);


(lib.ClipGroup_52_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIA0geIABABIg0Aeg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_181();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52_1, null, null);


(lib.ClipGroup_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_103();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52_0, null, null);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAPIA0geIABABIg0Aeg");
	mask.setTransform(2.7,1.6);

	// Layer 3
	this.instance = new lib.Group_25();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, null, null);


(lib.ClipGroup_51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAGIA0geQAJAGAAAOIg0AdQAAgOgJgFg");
	mask.setTransform(3.1,2.5);

	// Layer 3
	this.instance = new lib.Group_182();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.7,1,1,0,0,0,3.3,2.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51_1, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


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


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAGIA0geQAJAGAAAOIg0AdQAAgOgJgFg");
	mask.setTransform(3.1,2.5);

	// Layer 3
	this.instance = new lib.Group_26();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.7,1,1,0,0,0,3.3,2.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(0.5,0.4,5.7,4.6), null);


(lib.ClipGroup_50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYARIgEgEIAzgeIAFAEIABABIg0Aeg");
	mask.setTransform(2.9,1.8);

	// Layer 3
	this.instance = new lib.Group_183();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50_1, null, null);


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


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYARIgEgEIAzgeIAFAEIABABIg0Aeg");
	mask.setTransform(2.9,1.8);

	// Layer 3
	this.instance = new lib.Group_27();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, null, null);


(lib.ClipGroup_49_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_184();
	this.instance.parent = this;
	this.instance.setTransform(2.7,1.6,1,1,0,0,0,2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49_1, new cjs.Rectangle(0,0,5.4,3.1), null);


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


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_28();
	this.instance.parent = this;
	this.instance.setTransform(2.7,1.6,1,1,0,0,0,2.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(0,0,5.4,3.1), null);


(lib.ClipGroup_48_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdANIgCgBIAzgdIACABIAKAFIgzAdg");
	mask.setTransform(3.3,1.8);

	// Layer 3
	this.instance = new lib.Group_185();
	this.instance.parent = this;
	this.instance.setTransform(3.3,1.9,1,1,0,0,0,3.3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48_1, new cjs.Rectangle(0.1,0,6.4,3.7), null);


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


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdANIgCgBIAzgdIACABIAKAFIgzAdg");
	mask.setTransform(3.3,1.8);

	// Layer 3
	this.instance = new lib.Group_29();
	this.instance.parent = this;
	this.instance.setTransform(3.3,1.9,1,1,0,0,0,3.3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, new cjs.Rectangle(0.1,0,6.4,3.7), null);


(lib.ClipGroup_47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXARIgHgGIgBgBIAzgdIACABIAGAFIAEAEIgzAdg");
	mask.setTransform(3.3,2.1);

	// Layer 3
	this.instance = new lib.Group_186();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2,1,1,0,0,0,3.3,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47_1, new cjs.Rectangle(0.2,0.1,6.4,4.1), null);


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


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXARIgHgGIgBgBIAzgdIACABIAGAFIAEAEIgzAdg");
	mask.setTransform(3.3,2.1);

	// Layer 3
	this.instance = new lib.Group_30();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2,1,1,0,0,0,3.3,2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(0.2,0.1,6.4,4.1), null);


(lib.ClipGroup_46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_187();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46_1, null, null);


(lib.ClipGroup_46_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_109();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46_0, null, null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, null, null);


(lib.ClipGroup_45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAPIAzgdIAAgBQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIgzAdIgBABIgDgBg");
	mask.setTransform(2.8,1.6);

	// Layer 3
	this.instance = new lib.Group_188();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45_1, null, null);


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


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAPIAzgdIAAgBQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIgzAdIgBABIgDgBg");
	mask.setTransform(2.8,1.6);

	// Layer 3
	this.instance = new lib.Group_32();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, null, null);


(lib.ClipGroup_44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAlIgBgCQgCgIgBgNIABgYIA0geIgBAYQAAANADAIIAAACIAEAEIg0Aeg");
	mask.setTransform(3,4.8);

	// Layer 3
	this.instance = new lib.Group_189();
	this.instance.parent = this;
	this.instance.setTransform(2.9,4.4,1,1,0,0,0,2.9,4.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_1, new cjs.Rectangle(0,0.7,5.9,8.2), null);


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


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAlIgBgCQgCgIgBgNIABgYIA0geIgBAYQAAANADAIIAAACIAEAEIg0Aeg");
	mask.setTransform(3,4.8);

	// Layer 3
	this.instance = new lib.Group_33();
	this.instance.parent = this;
	this.instance.setTransform(2.9,4.4,1,1,0,0,0,2.9,4.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(0,0.7,5.9,8.2), null);


(lib.ClipGroup_43_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgeIAAAFIAAAAIgzAeg");
	mask.setTransform(2.6,2);

	// Layer 3
	this.instance = new lib.Group_190();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_1, new cjs.Rectangle(0,0.2,5.3,3.6), null);


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


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZANIAzgeIAAAFIAAAAIgzAeg");
	mask.setTransform(2.6,2);

	// Layer 3
	this.instance = new lib.Group_34();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0,0.2,5.3,3.6), null);


(lib.ClipGroup_42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnAIIA0geIAbAPIg0Aeg");
	mask.setTransform(4,2.3);

	// Layer 3
	this.instance = new lib.Group_191();
	this.instance.parent = this;
	this.instance.setTransform(4,2.3,1,1,0,0,0,4,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_1, new cjs.Rectangle(0,0,7.9,4.6), null);


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


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnAIIA0geIAbAPIg0Aeg");
	mask.setTransform(4,2.3);

	// Layer 3
	this.instance = new lib.Group_35();
	this.instance.parent = this;
	this.instance.setTransform(4,2.3,1,1,0,0,0,4,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0,0,7.9,4.6), null);


(lib.ClipGroup_41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAXQAAgPAFgDIA0geQgFADgBAQIAAACIgzAeg");
	mask.setTransform(2.9,2.6);

	// Layer 3
	this.instance = new lib.Group_192();
	this.instance.parent = this;
	this.instance.setTransform(2.6,3.1,1,1,0,0,0,2.6,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_1, new cjs.Rectangle(0,0.7,5.3,4.4), null);


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


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAXQAAgPAFgDIA0geQgFADgBAQIAAACIgzAeg");
	mask.setTransform(2.9,2.6);

	// Layer 3
	this.instance = new lib.Group_36();
	this.instance.parent = this;
	this.instance.setTransform(2.6,3.1,1,1,0,0,0,2.6,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0,0.7,5.3,4.4), null);


(lib.ClipGroup_40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAQIgFgDIA0gdIAEADIADABIg0Adg");
	mask.setTransform(3.1,1.8);

	// Layer 3
	this.instance = new lib.Group_193();
	this.instance.parent = this;
	this.instance.setTransform(3.1,1.8,1,1,0,0,0,3.1,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_1, new cjs.Rectangle(0.1,0.1,5.9,3.5), null);


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


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAQIgFgDIA0gdIAEADIADABIg0Adg");
	mask.setTransform(3.1,1.8);

	// Layer 3
	this.instance = new lib.Group_37();
	this.instance.parent = this;
	this.instance.setTransform(3.1,1.8,1,1,0,0,0,3.1,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0.1,0.1,5.9,3.5), null);


(lib.ClipGroup_39_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQAIIAhgQIgfARg");
	mask.setTransform(1.7,2.3);

	// Layer 3
	this.instance = new lib.Group_194();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.8,1,1,0,0,0,2.6,1.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_1, new cjs.Rectangle(0.3,1.4,3.2,1.9), null);


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


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQAIIAhgQIgfARg");
	mask.setTransform(1.7,2.3);

	// Layer 3
	this.instance = new lib.Group_38();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.8,1,1,0,0,0,2.6,1.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0.3,1.4,3.2,1.9), null);


(lib.ClipGroup_38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAOIAzgdIAGABIgzAeIgBAAIgFgCg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_195();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_1, null, null);


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


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAOIAzgdIAGABIgzAeIgBAAIgFgCg");
	mask.setTransform(2.9,1.6);

	// Layer 3
	this.instance = new lib.Group_39();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, null, null);


(lib.ClipGroup_37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAQQgLgEgFACIAzgdQAFgDAMAEQAFADAEgCIgzAdIgEABIgGgBg");
	mask.setTransform(3.9,1.7);

	// Layer 3
	this.instance = new lib.Group_196();
	this.instance.parent = this;
	this.instance.setTransform(3.9,1.7,1,1,0,0,0,3.9,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_1, new cjs.Rectangle(0.9,0,6,3.3), null);


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


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAQQgLgEgFACIAzgdQAFgDAMAEQAFADAEgCIgzAdIgEABIgGgBg");
	mask.setTransform(3.9,1.7);

	// Layer 3
	this.instance = new lib.Group_40();
	this.instance.parent = this;
	this.instance.setTransform(3.9,1.7,1,1,0,0,0,3.9,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0.9,0,6,3.3), null);


(lib.ClipGroup_36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAxABQiMg3h+AxIgCABIA3gfQB9gxCMA3QArARBMAoIg1AfQhLgpgrgRg");
	mask.setTransform(22,6);

	// Layer 3
	this.instance = new lib.Group_197();
	this.instance.parent = this;
	this.instance.setTransform(21.9,5.9,1,1,0,0,0,21.9,5.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_1, new cjs.Rectangle(0,0.1,43.9,11.8), null);


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


(lib.ClipGroup_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAxABQiMg3h+AxIgCABIA3gfQB9gxCMA3QArARBMAoIg1AfQhLgpgrgRg");
	mask.setTransform(22,6);

	// Layer 3
	this.instance = new lib.Group_41();
	this.instance.parent = this;
	this.instance.setTransform(21.9,5.9,1,1,0,0,0,21.9,5.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0,0.1,43.9,11.8), null);


(lib.ClipGroup_35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUAyQAAgyACgZIAAgEQABgJgEgFQgDgFgJgGIA0geQAIAGADAEQAEAGAAAJIAAAEQgCAQgBA7IAAAjIgzAeg");
	mask.setTransform(3.4,8.5);

	// Layer 3
	this.instance = new lib.Group_198();
	this.instance.parent = this;
	this.instance.setTransform(3.4,8.5,1,1,0,0,0,3.4,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_1, new cjs.Rectangle(0,0,6.8,17.1), null);


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


(lib.ClipGroup_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUAyQAAgyACgZIAAgEQABgJgEgFQgDgFgJgGIA0geQAIAGADAEQAEAGAAAJIAAAEQgCAQgBA7IAAAjIgzAeg");
	mask.setTransform(3.4,8.5);

	// Layer 3
	this.instance = new lib.Group_42();
	this.instance.parent = this;
	this.instance.setTransform(3.4,8.5,1,1,0,0,0,3.4,8.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0,0,6.8,17.1), null);


(lib.ClipGroup_34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfAJIAzgdQAEAHAJAFIg0AdQgJgFgDgHg");
	mask.setTransform(3.4,2.3);

	// Layer 3
	this.instance = new lib.Group_199();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.2,1,1,0,0,0,3.3,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_1, new cjs.Rectangle(0.2,0.2,6.5,4.2), null);


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


(lib.ClipGroup_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfAJIAzgdQAEAHAJAFIg0AdQgJgFgDgHg");
	mask.setTransform(3.4,2.3);

	// Layer 3
	this.instance = new lib.Group_43();
	this.instance.parent = this;
	this.instance.setTransform(3.3,2.2,1,1,0,0,0,3.3,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0.2,0.2,6.5,4.2), null);


(lib.ClipGroup_33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0ATQgRgvARgmIADgEIA0gfIgDAFQgRAmARAvQARAvAsAkIg0AeQgsgkgRgvg");
	mask.setTransform(6.1,10.2);

	// Layer 3
	this.instance = new lib.Group_200();
	this.instance.parent = this;
	this.instance.setTransform(6.1,10.3,1,1,0,0,0,6.1,10.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_1, new cjs.Rectangle(0,0.2,12.3,20.2), null);


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


(lib.ClipGroup_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0ATQgRgvARgmIADgEIA0gfIgDAFQgRAmARAvQARAvAsAkIg0AeQgsgkgRgvg");
	mask.setTransform(6.1,10.2);

	// Layer 3
	this.instance = new lib.Group_44();
	this.instance.parent = this;
	this.instance.setTransform(6.1,10.3,1,1,0,0,0,6.1,10.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0,0.2,12.3,20.2), null);


(lib.ClipGroup_32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdATIADgFIAHgHIAzgdIgHAHQgCAHgDACIg0AdQACgBABgDgAAggWIAAAAIAAAAg");
	mask.setTransform(3.3,2.3);

	// Layer 3
	this.instance = new lib.Group_201();
	this.instance.parent = this;
	this.instance.setTransform(3.4,2.2,1,1,0,0,0,3.4,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_1, new cjs.Rectangle(0.2,0,6.3,4.4), null);


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


(lib.ClipGroup_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdATIADgFIAHgHIAzgdIgHAHQgCAHgDACIg0AdQACgBABgDgAAggWIAAAAIAAAAg");
	mask.setTransform(3.3,2.3);

	// Layer 3
	this.instance = new lib.Group_45();
	this.instance.parent = this;
	this.instance.setTransform(3.4,2.2,1,1,0,0,0,3.4,2.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0.2,0,6.3,4.4), null);


(lib.ClipGroup_31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAeIgCgTIgBgFQAAgEAFgOIAAAAQACgFACgBIA0gfQgDACgBAEIAAAAQgFAPAAAEIAAAGIACASQABAMAFAHIg0AfQgEgHgBgNg");
	mask.setTransform(3.1,5);

	// Layer 3
	this.instance = new lib.Group_202();
	this.instance.parent = this;
	this.instance.setTransform(3.1,5.4,1,1,0,0,0,3.1,5.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_1, new cjs.Rectangle(0.1,0.5,6.1,9.5), null);


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


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAeIgCgTIgBgFQAAgEAFgOIAAAAQACgFACgBIA0gfQgDACgBAEIAAAAQgFAPAAAEIAAAGIACASQABAMAFAHIg0AfQgEgHgBgNg");
	mask.setTransform(3.1,5);

	// Layer 3
	this.instance = new lib.Group_46();
	this.instance.parent = this;
	this.instance.setTransform(3.1,5.4,1,1,0,0,0,3.1,5.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0.1,0.5,6.1,9.5), null);


(lib.ClipGroup_30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAPQgDgBgCABIAzgdQACgCAEACIABABIgzAdgAgcAPIgBAAIABAAg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_203();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_1, null, null);


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


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXAPQgDgBgCABIAzgdQACgCAEACIABABIgzAdgAgcAPIgBAAIABAAg");
	mask.setTransform(3,1.6);

	// Layer 3
	this.instance = new lib.Group_47();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, null, null);


(lib.ClipGroup_29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_204();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_1, null, null);


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


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, null, null);


(lib.ClipGroup_28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjDCIAAAAgAghC4QAGhbAChqIAEhlIAGgwIAzgfIgFAxIgFBkQgCBrgFBaQgCAKgBAAIgzAfQABgBABgJg");
	mask.setTransform(3.6,19.4);

	// Layer 3
	this.instance = new lib.Group_205();
	this.instance.parent = this;
	this.instance.setTransform(3.7,19.1,1,1,0,0,0,3.7,19.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_1, new cjs.Rectangle(0.2,0,7,38.2), null);


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


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjDCIAAAAgAghC4QAGhbAChqIAEhlIAGgwIAzgfIgFAxIgFBkQgCBrgFBaQgCAKgBAAIgzAfQABgBABgJg");
	mask.setTransform(3.6,19.4);

	// Layer 3
	this.instance = new lib.Group_49();
	this.instance.parent = this;
	this.instance.setTransform(3.7,19.1,1,1,0,0,0,3.7,19.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0.2,0,7,38.2), null);


(lib.ClipGroup_27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAzgdIAEACIgzAdg");
	mask.setTransform(2.8,1.7);

	// Layer 3
	this.instance = new lib.Group_206();
	this.instance.parent = this;
	this.instance.setTransform(2.8,1.7,1,1,0,0,0,2.8,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_1, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


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


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAOIAzgdIAEACIgzAdg");
	mask.setTransform(2.8,1.7);

	// Layer 3
	this.instance = new lib.Group_50();
	this.instance.parent = this;
	this.instance.setTransform(2.8,1.7,1,1,0,0,0,2.8,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0.1,0.1,5.5,3.2), null);


(lib.ClipGroup_26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_207();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_1, null, null);


(lib.ClipGroup_26_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_129();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_0, null, null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, null, null);


(lib.ClipGroup_25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWggIA0gfQBDArA2A1Ig1AfQg0g3hEgpg");
	mask.setTransform(8.7,6.4);

	// Layer 3
	this.instance = new lib.Group_208();
	this.instance.parent = this;
	this.instance.setTransform(8.9,6.6,1,1,0,0,0,8.9,6.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_1, new cjs.Rectangle(0,0,17.4,12.8), null);


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


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWggIA0gfQBDArA2A1Ig1AfQg0g3hEgpg");
	mask.setTransform(8.7,6.4);

	// Layer 3
	this.instance = new lib.Group_52();
	this.instance.parent = this;
	this.instance.setTransform(8.9,6.6,1,1,0,0,0,8.9,6.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0,0,17.4,12.8), null);


(lib.ClipGroup_24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbANIAzgdIAEAEIgzAdg");
	mask.setTransform(3.2,2.1);

	// Layer 3
	this.instance = new lib.Group_209();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_1, new cjs.Rectangle(0.4,0.4,5.6,3.5), null);


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


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbANIAzgdIAEAEIgzAdg");
	mask.setTransform(3.2,2.1);

	// Layer 3
	this.instance = new lib.Group_53();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0.4,0.4,5.6,3.5), null);


(lib.ClipGroup_23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_210();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_1, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.ClipGroup_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_132();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_0, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_54();
	this.instance.parent = this;
	this.instance.setTransform(3,1.9,1,1,0,0,0,3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0,0,6.1,3.9), null);


(lib.ClipGroup_22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAUIgLgKIAzgeIALAKQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIgzAdIgBABIgCgBg");
	mask.setTransform(4.1,2.8);

	// Layer 3
	this.instance = new lib.Group_211();
	this.instance.parent = this;
	this.instance.setTransform(3.5,2.3,1,1,0,0,0,3.5,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_1, new cjs.Rectangle(0.8,0.8,6.2,3.9), null);


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


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAUIgLgKIAzgeIALAKQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIgzAdIgBABIgCgBg");
	mask.setTransform(4.1,2.8);

	// Layer 3
	this.instance = new lib.Group_55();
	this.instance.parent = this;
	this.instance.setTransform(3.5,2.3,1,1,0,0,0,3.5,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0.8,0.8,6.2,3.9), null);


(lib.ClipGroup_21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAFIAzgeQABAUgDABIg0AeQADgCAAgTg");
	mask.setTransform(2.8,2.6);

	// Layer 3
	this.instance = new lib.Group_212();
	this.instance.parent = this;
	this.instance.setTransform(2.9,2.3,1,1,0,0,0,2.9,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_1, new cjs.Rectangle(0.2,0,5.3,4.7), null);


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


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAFIAzgeQABAUgDABIg0AeQADgCAAgTg");
	mask.setTransform(2.8,2.6);

	// Layer 3
	this.instance = new lib.Group_56();
	this.instance.parent = this;
	this.instance.setTransform(2.9,2.3,1,1,0,0,0,2.9,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0.2,0,5.3,4.7), null);


(lib.ClipGroup_20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAPQgHgfAAgRIAzgeQAAARAIAfQAIAlACAMIg0AeQgBgLgJgmg");
	mask.setTransform(3.5,6.5);

	// Layer 3
	this.instance = new lib.Group_213();
	this.instance.parent = this;
	this.instance.setTransform(3.5,6.5,1,1,0,0,0,3.5,6.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_1, new cjs.Rectangle(0,0.1,7,12.9), null);


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


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAPQgHgfAAgRIAzgeQAAARAIAfQAIAlACAMIg0AeQgBgLgJgmg");
	mask.setTransform(3.5,6.5);

	// Layer 3
	this.instance = new lib.Group_57();
	this.instance.parent = this;
	this.instance.setTransform(3.5,6.5,1,1,0,0,0,3.5,6.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0.1,7,12.9), null);


(lib.ClipGroup_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_214();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_1, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_136();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_0, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_58();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.7,1,1,0,0,0,2.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0,5.3,3.5), null);


(lib.ClipGroup_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAHIAzgdQgCAHAAAJIgzAdQAAgIACgIg");
	mask.setTransform(2.7,2.4);

	// Layer 3
	this.instance = new lib.Group_215();
	this.instance.parent = this;
	this.instance.setTransform(2.7,2.6,1,1,0,0,0,2.7,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_1, new cjs.Rectangle(0,0.1,5.4,4.7), null);


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


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAHIAzgdQgCAHAAAJIgzAdQAAgIACgIg");
	mask.setTransform(2.7,2.4);

	// Layer 3
	this.instance = new lib.Group_59();
	this.instance.parent = this;
	this.instance.setTransform(2.7,2.6,1,1,0,0,0,2.7,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0.1,5.4,4.7), null);


(lib.ClipGroup_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAvBbQAAgMgGgHIgFgGIiGiHIA0gfIAGAGICACBIAGAHQAFAHAAAMIAAAJIg0Aeg");
	mask.setTransform(9.9,10.1);

	// Layer 3
	this.instance = new lib.Group_216();
	this.instance.parent = this;
	this.instance.setTransform(9.9,10.1,1,1,0,0,0,9.9,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_1, new cjs.Rectangle(0.1,0.1,19.8,20.1), null);


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


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAvBbQAAgMgGgHIgFgGIiGiHIA0gfIAGAGICACBIAGAHQAFAHAAAMIAAAJIg0Aeg");
	mask.setTransform(9.9,10.1);

	// Layer 3
	this.instance = new lib.Group_60();
	this.instance.parent = this;
	this.instance.setTransform(9.9,10.1,1,1,0,0,0,9.9,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0.1,0.1,19.8,20.1), null);


(lib.ClipGroup_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYACIAAgDIAzgeIAAAEQAAAVgCAIIgzAeQACgJAAgVg");
	mask.setTransform(2.7,3.6);

	// Layer 3
	this.instance = new lib.Group_217();
	this.instance.parent = this;
	this.instance.setTransform(2.7,3.5,1,1,0,0,0,2.7,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_1, new cjs.Rectangle(0,0.4,5.5,6.5), null);


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


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYACIAAgDIAzgeIAAAEQAAAVgCAIIgzAeQACgJAAgVg");
	mask.setTransform(2.7,3.6);

	// Layer 3
	this.instance = new lib.Group_61();
	this.instance.parent = this;
	this.instance.setTransform(2.7,3.5,1,1,0,0,0,2.7,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0.4,5.5,6.5), null);


(lib.ClipGroup_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgdIAAACIgzAdg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_218();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_1, new cjs.Rectangle(0,0.2,5.3,3.3), null);


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


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAOIAzgdIAAACIgzAdg");
	mask.setTransform(2.6,1.8);

	// Layer 3
	this.instance = new lib.Group_62();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_219();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(0,0,5.3,4), null);


(lib.ClipGroup_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_141();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0, new cjs.Rectangle(0,0,5.3,4), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_63();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,5.3,4), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAJIAzgeIAAAOIgzAdg");
	mask.setTransform(2.6,2.2);

	// Layer 3
	this.instance = new lib.Group_220();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.6,1,1,0,0,0,2.6,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(0,0,5.3,4.4), null);


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


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAJIAzgeIAAAOIgzAdg");
	mask.setTransform(2.6,2.2);

	// Layer 3
	this.instance = new lib.Group_64();
	this.instance.parent = this;
	this.instance.setTransform(2.6,2.6,1,1,0,0,0,2.6,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,5.3,4.4), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_221();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, null, null);


(lib.ClipGroup_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_143();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0, null, null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Group_65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, null, null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2gkQgSgTgRgKQgXgOgPAIIA0geQAPgIAYANQARAKARATICCCOIg1Aeg");
	mask.setTransform(12.8,10.5);

	// Layer 3
	this.instance = new lib.Group_222();
	this.instance.parent = this;
	this.instance.setTransform(13.3,10.5,1,1,0,0,0,13.3,10.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(1,0,24.6,21), null);


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


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2gkQgSgTgRgKQgXgOgPAIIA0geQAPgIAYANQARAKARATICCCOIg1Aeg");
	mask.setTransform(12.8,10.5);

	// Layer 3
	this.instance = new lib.Group_66();
	this.instance.parent = this;
	this.instance.setTransform(13.3,10.5,1,1,0,0,0,13.3,10.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(1,0,24.6,21), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfABIAzgeQAMASAAALIgzAeQAAgNgMgQg");
	mask.setTransform(3.2,3);

	// Layer 3
	this.instance = new lib.Group_223();
	this.instance.parent = this;
	this.instance.setTransform(3.2,2.9,1,1,0,0,0,3.2,2.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(0,0,6.4,5.9), null);


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


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfABIAzgeQAMASAAALIgzAeQAAgNgMgQg");
	mask.setTransform(3.2,3);

	// Layer 3
	this.instance = new lib.Group_67();
	this.instance.parent = this;
	this.instance.setTransform(3.2,2.9,1,1,0,0,0,3.2,2.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,6.4,5.9), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTgdQACgaAAgOQAAgfgRgbIA0gfQARAbAAAfQAAAOgDAaIgJC8IgzAfIAJi8g");
	mask.setTransform(3.5,15.9);

	// Layer 3
	this.instance = new lib.Group_224();
	this.instance.parent = this;
	this.instance.setTransform(3.5,15.8,1,1,0,0,0,3.5,15.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(0,0,6.9,31.8), null);


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


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTgdQACgaAAgOQAAgfgRgbIA0gfQARAbAAAfQAAAOgDAaIgJC8IgzAfIAJi8g");
	mask.setTransform(3.5,15.9);

	// Layer 3
	this.instance = new lib.Group_68();
	this.instance.parent = this;
	this.instance.setTransform(3.5,15.8,1,1,0,0,0,3.5,15.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,6.9,31.8), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeDKIAEhXQADgnAChPIAGh3QADg/AAgWIA0gfQgBAXgDA+IgFB4QgDBPgCAnIgEBXQgCAfgHAFIg0AfQAIgFABggg");
	mask.setTransform(4,23.9);

	// Layer 3
	this.instance = new lib.Group_225();
	this.instance.parent = this;
	this.instance.setTransform(4,23.9,1,1,0,0,0,4,23.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(0,0,7.9,47.7), null);


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


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeDKIAEhXQADgnAChPIAGh3QADg/AAgWIA0gfQgBAXgDA+IgFB4QgDBPgCAnIgEBXQgCAfgHAFIg0AfQAIgFABggg");
	mask.setTransform(4,23.9);

	// Layer 3
	this.instance = new lib.Group_69();
	this.instance.parent = this;
	this.instance.setTransform(4,23.9,1,1,0,0,0,4,23.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,7.9,47.7), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglEXQAAgaAIiEIAEhrQADhBADgoIABg4QACgiADgUQACgMAAgHQAAgTgPgSIAzgeQAPASABATQgBAHgCALQgDAUgBAjIgCA4QgDAngDBDIgEBqQgICDAAAaQAAAJgDABIgyAeQACgBAAgIg");
	mask.setTransform(4.1,28.8);

	// Layer 3
	this.instance = new lib.Group_226();
	this.instance.parent = this;
	this.instance.setTransform(4.2,28.6,1,1,0,0,0,4.2,28.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(0.3,0,7.9,57.2), null);


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


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglEXQAAgaAIiEIAEhrQADhBADgoIABg4QACgiADgUQACgMAAgHQAAgTgPgSIAzgeQAPASABATQgBAHgCALQgDAUgBAjIgCA4QgDAngDBDIgEBqQgICDAAAaQAAAJgDABIgyAeQACgBAAgIg");
	mask.setTransform(4.1,28.8);

	// Layer 3
	this.instance = new lib.Group_70();
	this.instance.parent = this;
	this.instance.setTransform(4.2,28.6,1,1,0,0,0,4.2,28.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.3,0,7.9,57.2), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqGjQAPkfAGiPQAIjPAJh8QADghgJgaIAzgeQAJAZgCAiQgJB7gJDPQgGCQgOEfQgBAKgFADIgzAeQAFgDAAgKg");
	mask.setTransform(4.9,43.6);

	// Layer 3
	this.instance = new lib.Group_227();
	this.instance.parent = this;
	this.instance.setTransform(5.2,42.8,1,1,0,0,0,5.2,42.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(0.6,0.4,9.1,85.3), null);


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


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqGjQAPkfAGiPQAIjPAJh8QADghgJgaIAzgeQAJAZgCAiQgJB7gJDPQgGCQgOEfQgBAKgFADIgzAeQAFgDAAgKg");
	mask.setTransform(4.9,43.6);

	// Layer 3
	this.instance = new lib.Group_71();
	this.instance.parent = this;
	this.instance.setTransform(5.2,42.8,1,1,0,0,0,5.2,42.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.6,0.4,9.1,85.3), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaARIABgGIA0geIgBAHIABACIg0Aeg");
	mask.setTransform(2.7,2);

	// Layer 3
	this.instance = new lib.Group_228();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaARIABgGIA0geIgBAHIABACIg0Adg");
	mask.setTransform(2.7,2);

	// Layer 3
	this.instance = new lib.Group_150();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.8,1,1,0,0,0,2.6,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaARIABgGIA0geIgBAHIABACIg0Aeg");
	mask.setTransform(2.7,2);

	// Layer 3
	this.instance = new lib.Group_72();
	this.instance.parent = this;
	this.instance.setTransform(2.6,1.9,1,1,0,0,0,2.6,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0.2,5.3,3.3), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAQAuQgNgWgYgPIgLgGIgEgCIgfgSIgCgBIA0gfIACABIAeATIAFACIAKAGQAaAQAMAUIACAEIg0Aeg");
	mask.setTransform(7,5);

	// Layer 3
	this.instance = new lib.Group_229();
	this.instance.parent = this;
	this.instance.setTransform(7,5,1,1,0,0,0,7,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,14.1,9.9), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAQAuQgNgWgYgPIgTgJIgbgRIgCgBIA0gfIACABIAaARIATAKQAaAPAMAVIACAEIg0Afg");
	mask.setTransform(7,5);

	// Layer 3
	this.instance = new lib.Group_151();
	this.instance.parent = this;
	this.instance.setTransform(7,5,1,1,0,0,0,7,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(0,0,14.1,10), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAQAuQgNgWgYgPIgLgGIgEgCIgfgSIgCgBIA0gfIACABIAeATIAFACIAKAGQAaAQAMAUIACAEIg0Aeg");
	mask.setTransform(7,5);

	// Layer 3
	this.instance = new lib.Group_73();
	this.instance.parent = this;
	this.instance.setTransform(7,5,1,1,0,0,0,7,5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,14.1,9.9), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAQIgLgRIA0gfIALATIALAPIgzAfIgMgRg");
	mask.setTransform(3.8,3.3);

	// Layer 3
	this.instance = new lib.Group_230();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.3,1,1,0,0,0,3.8,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAQIgLgRIA0gfIALASQAGALAFAFIgzAfQgFgGgHgLg");
	mask.setTransform(3.8,3.3);

	// Layer 3
	this.instance = new lib.Group_152();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.2,1,1,0,0,0,3.8,3.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAQIgLgRIA0gfIALATIALAPIgzAfIgMgRg");
	mask.setTransform(3.8,3.3);

	// Layer 3
	this.instance = new lib.Group_74();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.3,1,1,0,0,0,3.8,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,7.5,6.6), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglgDIA0gfQAQAVAGASIgzAeQgGgTgRgTg");
	mask.setTransform(3.8,3.5);

	// Layer 3
	this.instance = new lib.Group_231();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.5,1,1,0,0,0,3.8,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,7.5,7), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglgEIA0geQAQAVAGASIgzAeQgGgSgRgVg");
	mask.setTransform(3.8,3.5);

	// Layer 3
	this.instance = new lib.Group_153();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.5,1,1,0,0,0,3.8,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0,0,7.5,7.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglgDIA0gfQAQAVAGASIgzAeQgGgTgRgTg");
	mask.setTransform(3.8,3.5);

	// Layer 3
	this.instance = new lib.Group_75();
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.5,1,1,0,0,0,3.8,3.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,7.5,7), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNgTQgYgMgPAJIA0gfQAPgJAYANQBbAvAzAdIg0AeQg0gdhagvg");
	mask.setTransform(11.8,5.7);

	// Layer 3
	this.instance = new lib.Group_232();
	this.instance.parent = this;
	this.instance.setTransform(12.3,5.7,1,1,0,0,0,12.3,5.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNgTQgYgMgPAJIA0gfQAPgJAYANQBRAqA9AiIg0AeQg+gjhQgpg");
	mask.setTransform(11.8,5.7);

	// Layer 3
	this.instance = new lib.Group_154();
	this.instance.parent = this;
	this.instance.setTransform(12.3,5.7,1,1,0,0,0,12.3,5.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNgTQgYgMgPAJIA0gfQAPgJAYANQBbAvAzAdIg0AeQg0gdhagvg");
	mask.setTransform(11.8,5.7);

	// Layer 3
	this.instance = new lib.Group_76();
	this.instance.parent = this;
	this.instance.setTransform(12.3,5.7,1,1,0,0,0,12.3,5.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(1.1,0,22.4,11.5), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCEmQgEgjACgXQADgcANgRQAMgPAOgaIAYgsQAFgKABgIIANkUQABgjgOgdQgQghgjgUIAzgfQAkAVAQAhQAPAdgBAiIgOEVQAAAIgGAKIgYAsQgOAZgMAPQgNARgDAcQgCAXAEAkQADARAAAZIg1AfQAAgZgCgSg");
	mask.setTransform(7,33.7);

	// Layer 3
	this.instance = new lib.Group_155();
	this.instance.parent = this;
	this.instance.setTransform(7,33.6,1,1,0,0,0,7,33.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.1,0,14,67.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCEmQgEgjACgXQADgcANgRQAMgPAOgaIAYgsQAFgKABgHIANkVQABgjgOgdQgQghgjgUIAzgeQAkAUAQAhQAPAdgBAiIgOEVQAAAIgGAKIgYAsQgOAagMAPQgNARgDAcQgCAWAEAkQADASAAAYIg1AeQAAgYgCgSg");
	mask.setTransform(7,33.6);

	// Layer 3
	this.instance = new lib.Group_77();
	this.instance.parent = this;
	this.instance.setTransform(7,33.6,1,1,0,0,0,7,33.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,14,67.3), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-41.1,36.8,0.833,0.833,-139.3,0,0,7,33.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1F2E").s().p("AAwFnQgNgWgYgOIgugcIgCgBIgnj5Ig2lbQgFglAPgQQAPgPAdAPQBRAqA9AjQAkAUAQAhQAPAdgBAjIgOEUQAAAIgGAKIgYAsQgOAagMAPQgOARgDAcQgCAWAEAkQADASAAAYg");
	this.shape.setTransform(-35.3,44.7,0.833,0.833,-139.3);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53.7,65.9,0.833,0.833,-139.3,0,0,11.7,5.7);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20.4,13.3,0.833,0.833,-139.3,0,0,3.7,3.5);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21,17,0.833,0.833,-139.3,0,0,3.7,3.2);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-20.3,23.2,0.833,0.833,-139.3,0,0,7,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494F5B").s().p("ABnFHIgEgCIgvgcIgBgBIAAhhQAAgzACgZIAAgEQAAgJgEgGQgDgEgIgGQABgFgIgIQgogygJgcQgKgcAIgwQAFgagDgEIgagVQgcgXgXgOQgTgLgRgFIgEgCQgHgEgHgOQgQghgBgjQgCgjANgRQAOgUAfATQAQAIATAVIByB+IAPAQQAEgHABgSQAAgSAEgGIACABIAuAbQAaAPAMAWIACAEIAAAGIAAADQARAbAAAfQAAAOgDAaIgIC8IgEgDQgBgMgJgmQgHgfAAgSQAAgIABgHQACgKAAgVIAAgSQAAgNgLgRIgFAwIgFBkQgCBrgGBcIgBAIIgDABIgDgBgAgGhQQgRAmARAuQAQAwAtAkIAAhQIABgKQAAgHgFgEIgEgDQgFgEgKAFQgDABgFAGIgDAHQgCADgDgCIgFgDQgPgTAHgNQAJgQAPgFIgVgXIgGgFIgBgBQgDAAgCAFgAiBkbIAAABQgFAPAAAEIABAFQACAIAAASQADAQAPAJQBCApA2A4IAFAFIAKAJQAEACACgFIAAgRIAAgKQAAgMgFgHIgFgGIiBiDIgEgEIgBgBIgBgBIgCAAIgDgBQgFAAgCAGg");
	this.shape_1.setTransform(-2.3,19.2,0.833,0.833,-139.3);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,18.3,0.833,0.833,-139.3,0,0,2.6,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494F5B").s().p("AAFERIgGgFIgHgHIgCgBIgLgGIgCAAIgDgCQgEgDgCgEIgBgCQgDgJAAgNIABgfQAAgNADgEQAEgFAPAFQAKAFADgOQACgGACgVIAEhWQADgoAChPIAFh3QAEg/AAgWQAPASAAATIgCASQgEAUAAAjIgDA4QgCAngDBDIgFBqQgHCCgBAbQAAAKgDAAIgCAAg");
	this.shape_2.setTransform(-0.8,-2.7,0.833,0.833,-139.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1F2E").s().p("AhUKvQgEgDgDgEQgEgFAAgGIABgJIAJitQAGADACgDQACgCABgHQAHhGABgwQABgjAFhHIALi7QABgSgNgIQAAhmAGjMIAzAeQAEADACgCIABgJQAGhbAChrIAFhlIAFgxQALARAAANIAAAUQAAAVgCAJQgBAIAAAIQAAARAHAfQAJAmABAMIAEADIAIi8QADgbAAgNQAAgfgRgcIAAgIIALASQAHALAFAGQATAYAGAaQAFAUgBAcQgJB9gJDOQgGCQgOEfQgBAOgLAAQAEghAAg8QAAgOgJgGQgFgCgBADIgBAHIgEAiIAAAHQAAAhgRAUQgMAPgcANIALiSIACgLQAAgGgJgHIgEgCQgIgEgCABQgEABgBAIIgEBFQgCAggCBCIgHByQgFBEAAAwIAAAHQAAARAOAIQgEAZABA5QgBAPANAIIAbAUQAQAOAAASQgBAJgHgEIgIgFIgEgCIgUgKQgLgFgFACQgEACAAANIAAAWQAAAJgKACIgGAAQgGAAgGgDgAASiyQgDAEAAANIgBAfQAAANADAJIABACQACAEAFADIABABIADABIAMAGIABABIANAMQAHADAAgNQAAgbAIiCIAEhrQADhDADgnIACg4QABgjADgUIACgSQAAgTgPgSQAAAWgEA/IgFB3QgCBQgDAoIgEBWQgBAVgCAGQgEAOgLgFQgHgDgFAAQgFAAgCADg");
	this.shape_3.setTransform(21.6,-22.1,0.833,0.833,-139.3);

	this.instance_6 = new lib.ClipGroup_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.5,-13.9,0.833,0.833,-139.3,0,0,4.8,43.4);

	this.instance_7 = new lib.ClipGroup_7_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4.7,-4.3,0.833,0.833,-139.3,0,0,4,28.8);

	this.instance_8 = new lib.ClipGroup_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-6.5,-0.5,0.833,0.833,-139.3,0,0,4,23.9);

	this.instance_9 = new lib.ClipGroup_9_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-13.5,8.6,0.833,0.833,-139.3,0,0,3.4,15.8);

	this.instance_10 = new lib.ClipGroup_10_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-13.9,12.4,0.833,0.833,-139.3,0,0,3.2,3);

	this.instance_11 = new lib.ClipGroup_11_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-14.7,36.3,0.833,0.833,-139.3,0,0,12.8,10.5);

	this.instance_12 = new lib.ClipGroup_12_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-12.7,13.6,0.833,0.833,-139.3);

	this.instance_13 = new lib.ClipGroup_13_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-12.9,10.5,0.833,0.833,-139.3,0,0,2.6,2.6);

	this.instance_14 = new lib.ClipGroup_14_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-12.6,10.1,0.833,0.833,-139.3,0,0,2.6,1.9);

	this.instance_15 = new lib.ClipGroup_15_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-12.6,10.1,0.833,0.833,-139.3,0,0,2.6,1.9);

	this.instance_16 = new lib.ClipGroup_16_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-11.7,9.2,0.833,0.833,-139.3,0,0,2.7,3.5);

	this.instance_17 = new lib.ClipGroup_17_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-12.9,34,0.833,0.833,-139.3,0,0,9.8,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1F2E").s().p("ABMBgIgKgJIgCAAIgEgEQg3g4hBgpQgOgJgDgPQgBgSgCgJIgBgFQAAgEAGgPIAAAAQACgJAIADIABABIABABIABAAIAFAEICACDIAFAGQAGAHgBAMIAAAJIAAASQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgCgBg");
	this.shape_4.setTransform(-9.4,34.3,0.833,0.833,-139.3);

	this.instance_18 = new lib.ClipGroup_18_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-10.1,7.6,0.833,0.833,-139.3,0,0,2.7,2.5);

	this.instance_19 = new lib.ClipGroup_19_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-9.6,7.2,0.833,0.833,-139.3,0,0,2.5,1.7);

	this.instance_20 = new lib.ClipGroup_20_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-7.6,3.6,0.833,0.833,-139.3,0,0,3.5,6.5);

	this.instance_21 = new lib.ClipGroup_21_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-12.3,24,0.833,0.833,-139.3,0,0,2.8,2.6);

	this.instance_22 = new lib.ClipGroup_22_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-11.4,24.6,0.833,0.833,-139.3,0,0,3.7,2.5);

	this.instance_23 = new lib.ClipGroup_23_0();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-11.2,25.3,0.833,0.833,-139.3,0,0,3,1.9);

	this.instance_24 = new lib.ClipGroup_24_0();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-11.2,25.3,0.833,0.833,-139.3,0,0,3,1.9);

	this.instance_25 = new lib.ClipGroup_25_0();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-9.9,31.4,0.833,0.833,-139.3,0,0,8.8,6.7);

	this.instance_26 = new lib.ClipGroup_26_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-8.2,23.7,0.833,0.833,-139.3);

	this.instance_27 = new lib.ClipGroup_27_0();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-5.5,-0.2,0.833,0.833,-139.3,0,0,2.8,1.7);

	this.instance_28 = new lib.ClipGroup_28_0();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-4,2.9,0.833,0.833,-139.3,0,0,3.6,19.4);

	this.instance_29 = new lib.ClipGroup_29_0();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-12.9,43.4,0.833,0.833,-139.3,0,0,2.6,1.6);

	this.instance_30 = new lib.ClipGroup_30_0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-12.8,43.6,0.833,0.833,-139.3,0,0,3,1.6);

	this.instance_31 = new lib.ClipGroup_31_0();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-10.2,41.7,0.833,0.833,-139.3,0,0,3.1,5.2);

	this.instance_32 = new lib.ClipGroup_32_0();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-6.7,17.9,0.833,0.833,-139.3,0,0,3.2,2.3);

	this.instance_33 = new lib.ClipGroup_33_0();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-5.9,17.7,0.833,0.833,-139.3,0,0,6,10.2);

	this.instance_34 = new lib.ClipGroup_34_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-8.8,38.9,0.833,0.833,-139.3,0,0,3.3,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1F2E").s().p("ACcBWQimhfiAA5QgJAEgEgDQgFgDgFgQQgMgggahCQgGgSAJgEQB9gxCMA4QAoAPBPArQAIAGADAEQAEAGAAAJIAAADQgCAZAAAzIgBAjQgYgQgUgMg");
	this.shape_5.setTransform(13.7,19.8,0.833,0.833,-139.3);

	this.instance_35 = new lib.ClipGroup_35_0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(1.4,5.9,0.833,0.833,-139.3,0,0,3.3,8.6);

	this.instance_36 = new lib.ClipGroup_36_0();
	this.instance_36.parent = this;
	this.instance_36.setTransform(7.9,24,0.833,0.833,-139.3,0,0,21.9,6);

	this.instance_37 = new lib.ClipGroup_37_0();
	this.instance_37.parent = this;
	this.instance_37.setTransform(7.3,-13,0.833,0.833,-139.3,0,0,3.8,1.8);

	this.instance_38 = new lib.ClipGroup_38_0();
	this.instance_38.parent = this;
	this.instance_38.setTransform(6.5,-7.6,0.833,0.833,-139.3,0,0,2.8,1.6);

	this.instance_39 = new lib.ClipGroup_39_0();
	this.instance_39.parent = this;
	this.instance_39.setTransform(6.7,-7.2,0.833,0.833,-139.3,0,0,2.8,1.7);

	this.instance_40 = new lib.ClipGroup_40_0();
	this.instance_40.parent = this;
	this.instance_40.setTransform(6.7,-7,0.833,0.833,-139.3,0,0,3.1,1.8);

	this.instance_41 = new lib.ClipGroup_41_0();
	this.instance_41.parent = this;
	this.instance_41.setTransform(8.8,-13,0.833,0.833,-139.3,0,0,2.9,2.8);

	this.instance_42 = new lib.ClipGroup_42_0();
	this.instance_42.parent = this;
	this.instance_42.setTransform(7.7,-3.9,0.833,0.833,-139.3,0,0,4,2.3);

	this.instance_43 = new lib.ClipGroup_43_0();
	this.instance_43.parent = this;
	this.instance_43.setTransform(9.5,-13.4,0.833,0.833,-139.3,0,0,2.6,1.9);

	this.instance_44 = new lib.ClipGroup_44_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(10.8,-15.2,0.833,0.833,-139.3,0,0,2.9,4.5);

	this.instance_45 = new lib.ClipGroup_45_0();
	this.instance_45.parent = this;
	this.instance_45.setTransform(11.2,-20.7,0.833,0.833,-139.3,0,0,2.8,1.5);

	this.instance_46 = new lib.ClipGroup_46_0();
	this.instance_46.parent = this;
	this.instance_46.setTransform(12.1,-18.2,0.833,0.833,-139.3);

	this.instance_47 = new lib.ClipGroup_47_0();
	this.instance_47.parent = this;
	this.instance_47.setTransform(11.4,-19.7,0.833,0.833,-139.3,0,0,3.3,2.1);

	this.instance_48 = new lib.ClipGroup_48_0();
	this.instance_48.parent = this;
	this.instance_48.setTransform(11.9,-18.3,0.833,0.833,-139.3,0,0,3.2,1.9);

	this.instance_49 = new lib.ClipGroup_49_0();
	this.instance_49.parent = this;
	this.instance_49.setTransform(12,-17.7,0.833,0.833,-139.3,0,0,2.6,1.5);

	this.instance_50 = new lib.ClipGroup_50_0();
	this.instance_50.parent = this;
	this.instance_50.setTransform(12.1,-17.6,0.833,0.833,-139.3,0,0,2.9,1.8);

	this.instance_51 = new lib.ClipGroup_51_0();
	this.instance_51.parent = this;
	this.instance_51.setTransform(22.6,-32.5,0.833,0.833,-139.3,0,0,3,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494F5B").s().p("Ag4DDIAAgIQABgwAEhEIAHhwQAChCADggIADhEQABgJAEgCQACgBAGADIAGAEQAKAGgBAHIgCALIgKCRQAbgNANgPQAQgTAAghIAAgHIAEgiIABgIQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABIACAAIABABQAIAGABAOQAAA8gFAhQg1AtgbAvQgFAJgBAQIgBAcIgGCFQgOgIgBgQg");
	this.shape_6.setTransform(37.2,-39.5,0.833,0.833,-139.3);

	this.instance_52 = new lib.ClipGroup_52_0();
	this.instance_52.parent = this;
	this.instance_52.setTransform(23.2,-29.1,0.833,0.833,-139.3);

	this.instance_53 = new lib.ClipGroup_53_0();
	this.instance_53.parent = this;
	this.instance_53.setTransform(22.5,-31.3,0.833,0.833,-139.3,0,0,2.8,1.6);

	this.instance_54 = new lib.ClipGroup_54_0();
	this.instance_54.parent = this;
	this.instance_54.setTransform(25.5,-36.1,0.833,0.833,-139.3,0,0,2.8,6.2);

	this.instance_55 = new lib.ClipGroup_55_0();
	this.instance_55.parent = this;
	this.instance_55.setTransform(23,-31.4,0.833,0.833,-139.3,0,0,2.6,2);

	this.instance_56 = new lib.ClipGroup_56_0();
	this.instance_56.parent = this;
	this.instance_56.setTransform(23.1,-31.5,0.833,0.833,-139.3,0,0,2.5,1.7);

	this.instance_57 = new lib.ClipGroup_57_0();
	this.instance_57.parent = this;
	this.instance_57.setTransform(23.2,-31.7,0.833,0.833,-139.3,0,0,2.6,1.6);

	this.instance_58 = new lib.ClipGroup_58_0();
	this.instance_58.parent = this;
	this.instance_58.setTransform(24.3,-32.6,0.833,0.833,-139.3,0,0,2.8,3.2);

	this.instance_59 = new lib.ClipGroup_59_0();
	this.instance_59.parent = this;
	this.instance_59.setTransform(25.5,-33.8,0.833,0.833,-139.3,0,0,2.6,1.9);

	this.instance_60 = new lib.ClipGroup_60_0();
	this.instance_60.parent = this;
	this.instance_60.setTransform(28.6,-35.1,0.833,0.833,-139.3,0,0,4.8,5.4);

	this.instance_61 = new lib.ClipGroup_61_0();
	this.instance_61.parent = this;
	this.instance_61.setTransform(28.8,-31.1,0.833,0.833,-139.3,0,0,3.2,10.1);

	this.instance_62 = new lib.ClipGroup_62_0();
	this.instance_62.parent = this;
	this.instance_62.setTransform(24.4,-25.2,0.833,0.833,-139.3,0,0,2.8,1.7);

	this.instance_63 = new lib.ClipGroup_63_0();
	this.instance_63.parent = this;
	this.instance_63.setTransform(24.6,-24.7,0.833,0.833,-139.3,0,0,3.1,1.6);

	this.instance_64 = new lib.ClipGroup_64_0();
	this.instance_64.parent = this;
	this.instance_64.setTransform(27.3,-26.6,0.833,0.833,-139.3,0,0,2.9,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494F5B").s().p("AgRDfIAEh/QAFhQACgoQADhsAFhcIAEACQAMAIAAAPIAAADIgMC7QgFBGAAAjQgBAwgHBGQAAAHgCACQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFgCg");
	this.shape_7.setTransform(40.2,-35.1,0.833,0.833,-139.3);

	this.instance_65 = new lib.ClipGroup_65_0();
	this.instance_65.parent = this;
	this.instance_65.setTransform(38.8,-45.2,0.833,0.833,-139.3,0,0,7.2,15.5);

	this.instance_66 = new lib.ClipGroup_66_0();
	this.instance_66.parent = this;
	this.instance_66.setTransform(27.6,-26.8,0.833,0.833,-139.3,0,0,2.8,5);

	this.instance_67 = new lib.ClipGroup_67_0();
	this.instance_67.parent = this;
	this.instance_67.setTransform(27.6,-26.8,0.833,0.833,-139.3,0,0,2.8,5);

	this.instance_68 = new lib.ClipGroup_68_0();
	this.instance_68.parent = this;
	this.instance_68.setTransform(26.2,-19.1,0.833,0.833,-139.3);

	this.instance_69 = new lib.ClipGroup_69_0();
	this.instance_69.parent = this;
	this.instance_69.setTransform(37.4,-36.8,0.833,0.833,-139.3,0,0,3.2,14.7);

	this.instance_70 = new lib.ClipGroup_70_0();
	this.instance_70.parent = this;
	this.instance_70.setTransform(32.9,-36.2,0.833,0.833,-139.3,0,0,3.5,1.9);

	this.instance_71 = new lib.ClipGroup_71_0();
	this.instance_71.parent = this;
	this.instance_71.setTransform(41.7,-41.6,0.833,0.833,-139.3,0,0,3.2,14.2);

	this.instance_72 = new lib.ClipGroup_72_0();
	this.instance_72.parent = this;
	this.instance_72.setTransform(37.5,-35.8,0.833,0.833,-139.3,0,0,4.1,24);

	this.instance_73 = new lib.ClipGroup_73_0();
	this.instance_73.parent = this;
	this.instance_73.setTransform(52.2,-57.9,0.833,0.833,-139.3,0,0,5.3,9.7);

	this.instance_74 = new lib.ClipGroup_74_0();
	this.instance_74.parent = this;
	this.instance_74.setTransform(50.7,-49,0.833,0.833,-139.3,0,0,3,1.6);

	this.instance_75 = new lib.ClipGroup_75_0();
	this.instance_75.parent = this;
	this.instance_75.setTransform(50.9,-48.7,0.833,0.833,-139.3,0,0,2.7,1.6);

	this.instance_76 = new lib.ClipGroup_76_0();
	this.instance_76.parent = this;
	this.instance_76.setTransform(58.9,-61.4,0.833,0.833,-139.3,0,0,3.1,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmcLwIM5nfIAABgIs5HegAmcItIM5nfIAABfIs5HfgAmcAgIM5ndIAAGoIs5HdgAhgBhIAzgdQAsh7AfBPIA1geQgig2ghAAQg4AAg4CdgAjziUQgbgLgDgiIDOh3QgDAmgbApQgeAwgrAZQgcAQgXAAQgLAAgLgEgAmclwIM5neIAAC/Is5HegABilaQgbgLgDgiIDOh3QgDAmgbApQgeAwgrAZQgcAQgXAAQgMAAgKgEg");
	this.shape_8.setTransform(-23,-5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223057").s().p("AmcK+IM5nfIAABlIs5HegAmcH7IM5nfIAABkIs5HegAmcE3IM5ndIAABkIs5HdgABTiXIg1AeQgfhPgsB7IgzAeQBZj6BaCSgAmclCIM5neIAADSIs5HdgAkRlSQADAiAbALQAeAMArgYQArgZAegxQAbgpADglgABEoYQADAhAbAMQAeANArgZQArgZAegwQAbgqADglg");
	this.shape_9.setTransform(-23,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_7},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.shape_6},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_5},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_4},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-89.6,128.6,179.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:-6.2},0).to({y:-25},5).to({y:-6.2},5).to({y:-25},5).to({y:0},5).to({startPosition:0},1).wait(23).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-89.6,128.6,179.4);


(lib.Group_156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_77();
	this.instance.parent = this;
	this.instance.setTransform(56.9,42,1,1,0,0,0,7,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1F2E").s().p("AAwFoQgNgWgYgPIgSgKIgDgCIgZgPIgCgBIgnj6Ig2laQgFgmAPgPQAPgQAdAPQBbAwAzAdQAkAUAQAhQAPAdgBAjIgOEVQAAAHgGAKIgYAsQgOAagMAPQgOARgDAcQgCAXAEAjQADASAAAYg");
	this.shape.setTransform(45.4,39.3);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.6,5.7,1,1,0,0,0,11.8,5.7);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,79.7,1,1,0,0,0,3.8,3.5);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.2,75.9,1,1,0,0,0,3.8,3.3);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.6,70.8,1,1,0,0,0,7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494F5B").s().p("ABnFHIgEgCIgwgdIAAhhQAAg0ACgYIAAgEQAAgJgEgGQgDgEgIgGQABgFgIgIQgogygJgdQgKgbAIgxQAFgZgDgEIgagVQgcgXgXgOQgTgLgRgFIgEgCQgIgFgGgNQgQghgBgjQgCgjANgSQAOgSAfARQARAKASATICBCPQAEgHABgSQAAgSAEgGIACABIAfATIAFACIAKAGQAaAPAMAWIACAEIAAAGIAAADQARAbAAAfQAAAOgDAaIgIC8IgEgEQgBgLgJgmQgHggAAgRQAAgIABgIQACgJAAgVIAAgSQABgMgMgSIgFAwIgFBkQgCBsgGBaIgBAJQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEgBgAgGhQQgRAmARAuQAQAwAtAkIAAhQIABgKQAAgHgFgEIgEgEQgFgDgKAFQgDABgFAGIgDAHQgCADgDgCIgFgDQgPgTAHgNQAJgQAPgFIgVgXIgGgFIgBgBQgDAAgCAFgAiBkbIAAABQgFAPAAAEIABAFQACAIAAASQADAQAPAJQBDAqA1A3IAPAOQAEACACgFIAAgSIAAgJQAAgMgFgHIgFgGIiBiDIgFgFIgBgBIgCgBIgDAAQgFAAgCAGg");
	this.shape_1.setTransform(35.3,88.5);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53,74.5,1,1,0,0,0,2.6,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494F5B").s().p("AAFERIgGgFIgHgHIgCgBIgLgGIgCgBIgDgBQgEgDgCgEIgBgCQgDgJAAgNIABgfQAAgNADgEQAEgGAPAGQAKAFADgOQACgGACgVIAEhXQADgnAChPIAFh3QAEg/AAgWQAPASAAATQAAAHgCALQgEAUAAAjIgDA4QgCAngDBDIgFBqQgHCDgBAaQAAAKgDAAIgCAAg");
	this.shape_2.setTransform(51.1,109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1F2E").s().p("AhUKvQgEgCgEgFQgDgFAAgGIABgJIAIitQAGADADgDQACgCAAgHQAIhHABgvQAAgkAFhGIAMi7QAAgSgMgIQgBhnAGjMIAsAaIAIAFQAEADABgCIACgJQAFhbADhrIAEhlIAFgxQAMASAAAMIAAAUQAAAVgCAJQgCAHAAAJQAAARAIAfQAIAmACAMIADADIAJi9QACgaAAgOQAAgfgQgbIAAgJIALATIALARQATAYAHAaQAFAVgCAbQgJB8gIDPQgGCQgPEeQAAAPgMAAQAFghAAg8QAAgOgJgGQgFgCgCACIgBAHIgEAjIAAAHQAAAhgQAUQgNAPgbANIALiSIACgLQAAgGgKgHIgEgCQgHgEgDABQgEABAAAIIgEBFQgDAggCBCIgHByQgEBEAAAwIAAAHQAAARAOAIQgEAZAAA5QAAAPAMAIQAJAFASAPQAQANAAATQAAAJgHgFIgJgEIgEgCIgTgKQgMgGgEADQgEACAAANIAAAWQgBAIgJADIgGABQgGAAgGgEgAASiyQgDAEAAANIgBAfQAAANADAJIABACQACAEAEADIACABIAOAHIACABIAGAGIAHAFQAGAEAAgNQABgaAHiDIAFhrQAChDADgnIACg4QABgjAEgUQACgLAAgHQAAgTgQgSQAAAWgDA/IgFB3QgDBQgCAnIgFBXQgBAVgCAGQgEAOgLgFQgGgDgFAAQgFAAgCADg");
	this.shape_3.setTransform(46,144.7);

	this.instance_6 = new lib.ClipGroup_6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(56.1,123.2,1,1,0,0,0,4.9,43.4);

	this.instance_7 = new lib.ClipGroup_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56,108.1,1,1,0,0,0,4.1,28.9);

	this.instance_8 = new lib.ClipGroup_8_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.6,103.1,1,1,0,0,0,4,23.9);

	this.instance_9 = new lib.ClipGroup_9_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(53.9,89.3,1,1,0,0,0,3.5,15.8);

	this.instance_10 = new lib.ClipGroup_10_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(51.3,85.5,1,1,0,0,0,3.2,3);

	this.instance_11 = new lib.ClipGroup_11_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(33.2,63.2,1,1,0,0,0,12.8,10.5);

	this.instance_12 = new lib.ClipGroup_12_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(49.2,85.4);

	this.instance_13 = new lib.ClipGroup_13_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51.8,88.1,1,1,0,0,0,2.6,2.6);

	this.instance_14 = new lib.ClipGroup_14_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_15 = new lib.ClipGroup_15_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_16 = new lib.ClipGroup_16_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(51.7,90.2,1,1,0,0,0,2.7,3.5);

	this.instance_17 = new lib.ClipGroup_17_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.5,66.7,1,1,0,0,0,9.9,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1F2E").s().p("ABMBgIgQgOQg2g2hCgqQgOgJgDgPQgBgSgCgJIgBgFQAAgEAGgPIAAAAQACgJAIADIABABIABAAIAGAFICACCIAFAGQAGAIgBAMIAAAJIAAASQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCgBg");
	this.shape_4.setTransform(30,69.1);

	this.instance_18 = new lib.ClipGroup_18_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(51.6,93,1,1,0,0,0,2.7,2.6);

	this.instance_19 = new lib.ClipGroup_19_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(51.5,93.7,1,1,0,0,0,2.6,1.7);

	this.instance_20 = new lib.ClipGroup_20_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52.4,98.5,1,1,0,0,0,3.5,6.5);

	this.instance_21 = new lib.ClipGroup_21_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(40.7,76.3,1,1,0,0,0,2.8,2.6);

	this.instance_22 = new lib.ClipGroup_22_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(39.4,76.5,1,1,0,0,0,3.7,2.5);

	this.instance_23 = new lib.ClipGroup_23_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_24 = new lib.ClipGroup_24_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_25 = new lib.ClipGroup_25_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(32.8,71.2,1,1,0,0,0,8.9,6.6);

	this.instance_26 = new lib.ClipGroup_26_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(37.2,79.7);

	this.instance_27 = new lib.ClipGroup_27_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(53.4,103.6,1,1,0,0,0,2.8,1.7);

	this.instance_28 = new lib.ClipGroup_28_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(49.7,101.9,1,1,0,0,0,3.6,19.4);

	this.instance_29 = new lib.ClipGroup_29_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(23.5,56.6);

	this.instance_30 = new lib.ClipGroup_30_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,58,1,1,0,0,0,3,1.6);

	this.instance_31 = new lib.ClipGroup_31_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.9,61.7,1,1,0,0,0,3.1,5.2);

	this.instance_32 = new lib.ClipGroup_32_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(40.4,86.2,1,1,0,0,0,3.2,2.3);

	this.instance_33 = new lib.ClipGroup_33_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(39.9,87.1,1,1,0,0,0,6.1,10.2);

	this.instance_34 = new lib.ClipGroup_34_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(25.8,65.4,1,1,0,0,0,3.3,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1F2E").s().p("ACcBWQilhfiBA5QgJADgEgCQgFgEgFgPQgMgggahCQgDgKAAgFQABgFAFgCQB9gxCMA4QArARBMApQAIAGADAEQAEAGAAAJIAAADQgCAYAAA0IgBAjQgRgMgbgQg");
	this.shape_5.setTransform(20.3,100.5);

	this.instance_35 = new lib.ClipGroup_35_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(42.5,103.3,1,1,0,0,0,3.4,8.5);

	this.instance_36 = new lib.ClipGroup_36_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(22.3,91.9,1,1,0,0,0,21.9,5.9);

	this.instance_37 = new lib.ClipGroup_37_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(51.9,125.2,1,1,0,0,0,3.9,1.7);

	this.instance_38 = new lib.ClipGroup_38_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(48.4,119.7,1,1,0,0,0,2.9,1.6);

	this.instance_39 = new lib.ClipGroup_39_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(47.9,119.6,1,1,0,0,0,2.8,1.7);

	this.instance_40 = new lib.ClipGroup_40_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(47.7,119.3,1,1,0,0,0,3.1,1.8);

	this.instance_41 = new lib.ClipGroup_41_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(50.4,126.4,1,1,0,0,0,2.9,2.8);

	this.instance_42 = new lib.ClipGroup_42_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(44.4,117.3,1,1,0,0,0,4,2.3);

	this.instance_43 = new lib.ClipGroup_43_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(50.1,127.4,1,1,0,0,0,2.6,1.9);

	this.instance_44 = new lib.ClipGroup_44_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(50.4,130,1,1,0,0,0,3,4.5);

	this.instance_45 = new lib.ClipGroup_45_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(54.3,135.3,1,1,0,0,0,2.8,1.6);

	this.instance_46 = new lib.ClipGroup_46_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(51.5,133.7);

	this.instance_47 = new lib.ClipGroup_47_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(53.3,134.5,1,1,0,0,0,3.3,2);

	this.instance_48 = new lib.ClipGroup_48_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(51.9,133.7,1,1,0,0,0,3.3,1.9);

	this.instance_49 = new lib.ClipGroup_49_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(51.3,133.4,1,1,0,0,0,2.7,1.6);

	this.instance_50 = new lib.ClipGroup_50_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(51,133.2,1,1,0,0,0,2.9,1.8);

	this.instance_51 = new lib.ClipGroup_51_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(53.2,154.9,1,1,0,0,0,3.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494F5B").s().p("Ag4DDIAAgIQABgwAEhEIAHhwQAChCADggIADhFQABgOAMAGIAGAEQAKAGgBAHIgCAKIgKCSQAbgNANgPQAQgTAAghIAAgIIAEghIABgIQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAAAIACABIABABQAIAGABANQAAA8gFAhQg1AvgbAuQgFAJgBAQIgBAcIgGCFQgOgIgBgQg");
	this.shape_6.setTransform(45.4,172.8);

	this.instance_52 = new lib.ClipGroup_52_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(52.6,153.9,1,1,0,0,0,2.6,1.6);

	this.instance_53 = new lib.ClipGroup_53_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(52.5,153.8,1,1,0,0,0,2.9,1.6);

	this.instance_54 = new lib.ClipGroup_54_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(53.5,160.6,1,1,0,0,0,2.9,6.2);

	this.instance_55 = new lib.ClipGroup_55_1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(52.1,154.2,1,1,0,0,0,2.7,1.9);

	this.instance_56 = new lib.ClipGroup_56_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(52,154.5,1,1,0,0,0,2.6,1.7);

	this.instance_57 = new lib.ClipGroup_57_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(51.9,154.8,1,1,0,0,0,2.6,1.7);

	this.instance_58 = new lib.ClipGroup_58_1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(51.8,156.3,1,1,0,0,0,2.8,3.2);

	this.instance_59 = new lib.ClipGroup_59_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(51.6,158.5,1,1,0,0,0,2.6,1.9);

	this.instance_60 = new lib.ClipGroup_60_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(49.6,162.1,1,1,0,0,0,4.6,5.5);

	this.instance_61 = new lib.ClipGroup_61_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(46.4,158.4,1,1,0,0,0,3.2,10);

	this.instance_62 = new lib.ClipGroup_62_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(46,149.8,1,1,0,0,0,2.9,1.7);

	this.instance_63 = new lib.ClipGroup_63_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(45.2,149.5,1,1,0,0,0,3.1,1.7);

	this.instance_64 = new lib.ClipGroup_64_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(44.3,153.3,1,1,0,0,0,3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494F5B").s().p("AgRDfIAEiAQAFhQACgoQADhrAFhcIAEACQAMAIAAAPIAAADIgMC7QgFBFAAAkQgBAvgHBHQAAAHgCACIgDACIgFgCg");
	this.shape_7.setTransform(39.2,171.1);

	this.instance_65 = new lib.ClipGroup_65_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(48.5,179.2,1,1,0,0,0,7.4,15.5);

	this.instance_66 = new lib.ClipGroup_66_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_67 = new lib.ClipGroup_67_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_68 = new lib.ClipGroup_68_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(39.5,145.6);

	this.instance_69 = new lib.ClipGroup_69_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(43.3,170.4,1,1,0,0,0,3.4,14.7);

	this.instance_70 = new lib.ClipGroup_70_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(46.7,166.4,1,1,0,0,0,3.5,1.9);

	this.instance_71 = new lib.ClipGroup_71_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(42.9,178.3,1,1,0,0,0,3.2,14.2);

	this.instance_72 = new lib.ClipGroup_72_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(42.2,169.6,1,1,0,0,0,4.1,23.9);

	this.instance_73 = new lib.ClipGroup_73_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(46.1,200.5,1,1,0,0,0,5.3,8.8);

	this.instance_74 = new lib.ClipGroup_74_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(40.4,192,1,1,0,0,0,2.9,1.6);

	this.instance_75 = new lib.ClipGroup_75_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(40.1,192,1,1,0,0,0,2.7,1.6);

	this.instance_76 = new lib.ClipGroup_76_1();
	this.instance_76.parent = this;
	this.instance_76.setTransform(42.8,209.8,1,1,0,0,0,3.1,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_7},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.shape_6},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_5},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_4},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_156, new cjs.Rectangle(0,0,63.9,213.9), null);


(lib.Group_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(56.9,42,1,1,0,0,0,7,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1F2E").s().p("AAwFnQgNgWgYgOIgugcIgCgBIgnj5Ig2lbQgFglAPgQQAPgPAdAPQBRAqA9AjQAkAUAQAhQAPAdgBAjIgOEUQAAAIgGAKIgYAsQgOAagMAPQgOARgDAcQgCAWAEAkQADASAAAYg");
	this.shape.setTransform(45.4,39.4);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.6,5.7,1,1,0,0,0,11.8,5.7);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,79.7,1,1,0,0,0,3.8,3.5);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.2,75.9,1,1,0,0,0,3.8,3.2);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.6,70.8,1,1,0,0,0,7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494F5B").s().p("ABnFHIgEgCIgvgcIgBgBIAAhhQAAgzACgZIAAgEQAAgJgEgGQgDgEgIgGQABgFgIgIQgogygJgcQgKgcAIgwQAFgagDgEIgagVQgcgXgXgOQgTgLgRgFIgEgCQgHgEgHgOQgQghgBgjQgCgjANgRQAOgUAfATQAQAIATAVIByB+IAPAQQAEgHABgSQAAgSAEgGIACABIAbARIATAKQAaAPAMAWIACAEIAAAGIAAADQARAbAAAfQAAAOgDAaIgIC8IgEgDQgBgMgJgmQgHgfAAgSQAAgIABgHQACgKAAgVIAAgSQAAgNgLgRIgFAwIgFBkQgCBrgGBcIgBAIIgDABIgDgBgAgGhQQgRAmARAuQAQAwAtAkIAAhQIABgKQAAgHgFgEIgEgDQgFgEgKAFQgDABgFAGIgDAHQgCADgDgCIgFgDQgPgTAHgNQAJgQAPgFIgVgXIgGgFIgBgBQgDAAgCAFgAiBkbIAAABQgFAPAAAEIABAFQACAIAAASQADAQAPAJQBCApA2A4IAFAFIAKAJQAEACACgFIAAgRIAAgKQAAgMgFgHIgFgGIiBiDIgEgEIgBgBIgBgBIgCAAIgDgBQgFAAgCAGg");
	this.shape_1.setTransform(35.3,88.5);

	this.instance_5 = new lib.ClipGroup_5_0();
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


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(56.9,42,1,1,0,0,0,7,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1F2E").s().p("AAwFoQgNgWgYgPIgSgKIgDgCIgZgPIgCgBIgnj6Ig2laQgFgmAPgPQAPgQAdAPQBbAwAzAdQAkAUAQAhQAPAdgBAjIgOEVQAAAHgGAKIgYAsQgOAagMAPQgOARgDAcQgCAXAEAjQADASAAAYg");
	this.shape.setTransform(45.4,39.3);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.6,5.7,1,1,0,0,0,11.8,5.7);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,79.7,1,1,0,0,0,3.8,3.5);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.2,75.9,1,1,0,0,0,3.8,3.3);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.6,70.8,1,1,0,0,0,7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494F5B").s().p("ABnFHIgEgCIgwgdIAAhhQAAg0ACgYIAAgEQAAgJgEgGQgDgEgIgGQABgFgIgIQgogygJgdQgKgbAIgxQAFgZgDgEIgagVQgcgXgXgOQgTgLgRgFIgEgCQgIgFgGgNQgQghgBgjQgCgjANgSQAOgSAfARQARAKASATICBCPQAEgHABgSQAAgSAEgGIACABIAfATIAFACIAKAGQAaAPAMAWIACAEIAAAGIAAADQARAbAAAfQAAAOgDAaIgIC8IgEgEQgBgLgJgmQgHggAAgRQAAgIABgIQACgJAAgVIAAgSQABgMgMgSIgFAwIgFBkQgCBsgGBaIgBAJQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEgBgAgGhQQgRAmARAuQAQAwAtAkIAAhQIABgKQAAgHgFgEIgEgEQgFgDgKAFQgDABgFAGIgDAHQgCADgDgCIgFgDQgPgTAHgNQAJgQAPgFIgVgXIgGgFIgBgBQgDAAgCAFgAiBkbIAAABQgFAPAAAEIABAFQACAIAAASQADAQAPAJQBDAqA1A3IAPAOQAEACACgFIAAgSIAAgJQAAgMgFgHIgFgGIiBiDIgFgFIgBgBIgCgBIgDAAQgFAAgCAGg");
	this.shape_1.setTransform(35.3,88.5);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53,74.5,1,1,0,0,0,2.6,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494F5B").s().p("AAFERIgGgFIgHgHIgCgBIgLgGIgCgBIgDgBQgEgDgCgEIgBgCQgDgJAAgNIABgfQAAgNADgEQAEgGAPAGQAKAFADgOQACgGACgVIAEhXQADgnAChPIAFh3QAEg/AAgWQAPASAAATQAAAHgCALQgEAUAAAjIgDA4QgCAngDBDIgFBqQgHCDgBAaQAAAKgDAAIgCAAg");
	this.shape_2.setTransform(51.1,109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1F2E").s().p("AhUKvQgEgCgEgFQgDgFAAgGIABgJIAIitQAGADADgDQACgCAAgHQAIhHABgvQAAgkAFhGIAMi7QAAgSgMgIQgBhnAGjMIAsAaIAIAFQAEADABgCIACgJQAFhbADhrIAEhlIAFgxQAMASAAAMIAAAUQAAAVgCAJQgCAHAAAJQAAARAIAfQAIAmACAMIADADIAJi9QACgaAAgOQAAgfgQgbIAAgJIALATIALARQATAYAHAaQAFAVgCAbQgJB8gIDPQgGCQgPEeQAAAPgMAAQAFghAAg8QAAgOgJgGQgFgCgCACIgBAHIgEAjIAAAHQAAAhgQAUQgNAPgbANIALiSIACgLQAAgGgKgHIgEgCQgHgEgDABQgEABAAAIIgEBFQgDAggCBCIgHByQgEBEAAAwIAAAHQAAARAOAIQgEAZAAA5QAAAPAMAIQAJAFASAPQAQANAAATQAAAJgHgFIgJgEIgEgCIgTgKQgMgGgEADQgEACAAANIAAAWQgBAIgJADIgGABQgGAAgGgEgAASiyQgDAEAAANIgBAfQAAANADAJIABACQACAEAEADIACABIAOAHIACABIAGAGIAHAFQAGAEAAgNQABgaAHiDIAFhrQAChDADgnIACg4QABgjAEgUQACgLAAgHQAAgTgQgSQAAAWgDA/IgFB3QgDBQgCAnIgFBXQgBAVgCAGQgEAOgLgFQgGgDgFAAQgFAAgCADg");
	this.shape_3.setTransform(46,144.7);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(56.1,123.2,1,1,0,0,0,4.9,43.4);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56,108.1,1,1,0,0,0,4.1,28.9);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.6,103.1,1,1,0,0,0,4,23.9);

	this.instance_9 = new lib.ClipGroup_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(53.9,89.3,1,1,0,0,0,3.5,15.8);

	this.instance_10 = new lib.ClipGroup_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(51.3,85.5,1,1,0,0,0,3.2,3);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(33.2,63.2,1,1,0,0,0,12.8,10.5);

	this.instance_12 = new lib.ClipGroup_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(49.2,85.4);

	this.instance_13 = new lib.ClipGroup_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51.8,88.1,1,1,0,0,0,2.6,2.6);

	this.instance_14 = new lib.ClipGroup_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_15 = new lib.ClipGroup_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51.8,88.6,1,1,0,0,0,2.6,1.9);

	this.instance_16 = new lib.ClipGroup_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(51.7,90.2,1,1,0,0,0,2.7,3.5);

	this.instance_17 = new lib.ClipGroup_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.5,66.7,1,1,0,0,0,9.9,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1F2E").s().p("ABMBgIgQgOQg2g2hCgqQgOgJgDgPQgBgSgCgJIgBgFQAAgEAGgPIAAAAQACgJAIADIABABIABAAIAGAFICACCIAFAGQAGAIgBAMIAAAJIAAASQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCgBg");
	this.shape_4.setTransform(30,69.1);

	this.instance_18 = new lib.ClipGroup_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(51.6,93,1,1,0,0,0,2.7,2.6);

	this.instance_19 = new lib.ClipGroup_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(51.5,93.7,1,1,0,0,0,2.6,1.7);

	this.instance_20 = new lib.ClipGroup_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52.4,98.5,1,1,0,0,0,3.5,6.5);

	this.instance_21 = new lib.ClipGroup_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(40.7,76.3,1,1,0,0,0,2.8,2.6);

	this.instance_22 = new lib.ClipGroup_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(39.4,76.5,1,1,0,0,0,3.7,2.5);

	this.instance_23 = new lib.ClipGroup_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_24 = new lib.ClipGroup_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(38.7,75.9,1,1,0,0,0,3,1.9);

	this.instance_25 = new lib.ClipGroup_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(32.8,71.2,1,1,0,0,0,8.9,6.6);

	this.instance_26 = new lib.ClipGroup_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(37.2,79.7);

	this.instance_27 = new lib.ClipGroup_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(53.4,103.6,1,1,0,0,0,2.8,1.7);

	this.instance_28 = new lib.ClipGroup_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(49.7,101.9,1,1,0,0,0,3.6,19.4);

	this.instance_29 = new lib.ClipGroup_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(23.5,56.6);

	this.instance_30 = new lib.ClipGroup_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,58,1,1,0,0,0,3,1.6);

	this.instance_31 = new lib.ClipGroup_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.9,61.7,1,1,0,0,0,3.1,5.2);

	this.instance_32 = new lib.ClipGroup_32();
	this.instance_32.parent = this;
	this.instance_32.setTransform(40.4,86.2,1,1,0,0,0,3.2,2.3);

	this.instance_33 = new lib.ClipGroup_33();
	this.instance_33.parent = this;
	this.instance_33.setTransform(39.9,87.1,1,1,0,0,0,6.1,10.2);

	this.instance_34 = new lib.ClipGroup_34();
	this.instance_34.parent = this;
	this.instance_34.setTransform(25.8,65.4,1,1,0,0,0,3.3,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1F2E").s().p("ACcBWQilhfiBA5QgJADgEgCQgFgEgFgPQgMgggahCQgDgKAAgFQABgFAFgCQB9gxCMA4QArARBMApQAIAGADAEQAEAGAAAJIAAADQgCAYAAA0IgBAjQgRgMgbgQg");
	this.shape_5.setTransform(20.3,100.5);

	this.instance_35 = new lib.ClipGroup_35();
	this.instance_35.parent = this;
	this.instance_35.setTransform(42.5,103.3,1,1,0,0,0,3.4,8.5);

	this.instance_36 = new lib.ClipGroup_36();
	this.instance_36.parent = this;
	this.instance_36.setTransform(22.3,91.9,1,1,0,0,0,21.9,5.9);

	this.instance_37 = new lib.ClipGroup_37();
	this.instance_37.parent = this;
	this.instance_37.setTransform(51.9,125.2,1,1,0,0,0,3.9,1.7);

	this.instance_38 = new lib.ClipGroup_38();
	this.instance_38.parent = this;
	this.instance_38.setTransform(48.4,119.7,1,1,0,0,0,2.9,1.6);

	this.instance_39 = new lib.ClipGroup_39();
	this.instance_39.parent = this;
	this.instance_39.setTransform(47.9,119.6,1,1,0,0,0,2.8,1.7);

	this.instance_40 = new lib.ClipGroup_40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(47.7,119.3,1,1,0,0,0,3.1,1.8);

	this.instance_41 = new lib.ClipGroup_41();
	this.instance_41.parent = this;
	this.instance_41.setTransform(50.4,126.4,1,1,0,0,0,2.9,2.8);

	this.instance_42 = new lib.ClipGroup_42();
	this.instance_42.parent = this;
	this.instance_42.setTransform(44.4,117.3,1,1,0,0,0,4,2.3);

	this.instance_43 = new lib.ClipGroup_43();
	this.instance_43.parent = this;
	this.instance_43.setTransform(50.1,127.4,1,1,0,0,0,2.6,1.9);

	this.instance_44 = new lib.ClipGroup_44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(50.4,130,1,1,0,0,0,3,4.5);

	this.instance_45 = new lib.ClipGroup_45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(54.3,135.3,1,1,0,0,0,2.8,1.6);

	this.instance_46 = new lib.ClipGroup_46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(51.5,133.7);

	this.instance_47 = new lib.ClipGroup_47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(53.3,134.5,1,1,0,0,0,3.3,2);

	this.instance_48 = new lib.ClipGroup_48();
	this.instance_48.parent = this;
	this.instance_48.setTransform(51.9,133.7,1,1,0,0,0,3.3,1.9);

	this.instance_49 = new lib.ClipGroup_49();
	this.instance_49.parent = this;
	this.instance_49.setTransform(51.3,133.4,1,1,0,0,0,2.7,1.6);

	this.instance_50 = new lib.ClipGroup_50();
	this.instance_50.parent = this;
	this.instance_50.setTransform(51,133.2,1,1,0,0,0,2.9,1.8);

	this.instance_51 = new lib.ClipGroup_51();
	this.instance_51.parent = this;
	this.instance_51.setTransform(53.2,154.9,1,1,0,0,0,3.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494F5B").s().p("Ag4DDIAAgIQABgwAEhEIAHhwQAChCADggIADhFQABgOAMAGIAGAEQAKAGgBAHIgCAKIgKCSQAbgNANgPQAQgTAAghIAAgIIAEghIABgIQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAAAIACABIABABQAIAGABANQAAA8gFAhQg1AvgbAuQgFAJgBAQIgBAcIgGCFQgOgIgBgQg");
	this.shape_6.setTransform(45.4,172.8);

	this.instance_52 = new lib.ClipGroup_52();
	this.instance_52.parent = this;
	this.instance_52.setTransform(52.6,153.9,1,1,0,0,0,2.6,1.6);

	this.instance_53 = new lib.ClipGroup_53();
	this.instance_53.parent = this;
	this.instance_53.setTransform(52.5,153.8,1,1,0,0,0,2.9,1.6);

	this.instance_54 = new lib.ClipGroup_54();
	this.instance_54.parent = this;
	this.instance_54.setTransform(53.5,160.6,1,1,0,0,0,2.9,6.2);

	this.instance_55 = new lib.ClipGroup_55();
	this.instance_55.parent = this;
	this.instance_55.setTransform(52.1,154.2,1,1,0,0,0,2.7,1.9);

	this.instance_56 = new lib.ClipGroup_56();
	this.instance_56.parent = this;
	this.instance_56.setTransform(52,154.5,1,1,0,0,0,2.6,1.7);

	this.instance_57 = new lib.ClipGroup_57();
	this.instance_57.parent = this;
	this.instance_57.setTransform(51.9,154.8,1,1,0,0,0,2.6,1.7);

	this.instance_58 = new lib.ClipGroup_58();
	this.instance_58.parent = this;
	this.instance_58.setTransform(51.8,156.3,1,1,0,0,0,2.8,3.2);

	this.instance_59 = new lib.ClipGroup_59();
	this.instance_59.parent = this;
	this.instance_59.setTransform(51.6,158.5,1,1,0,0,0,2.6,1.9);

	this.instance_60 = new lib.ClipGroup_60();
	this.instance_60.parent = this;
	this.instance_60.setTransform(49.6,162.1,1,1,0,0,0,4.6,5.5);

	this.instance_61 = new lib.ClipGroup_61();
	this.instance_61.parent = this;
	this.instance_61.setTransform(46.4,158.4,1,1,0,0,0,3.2,10);

	this.instance_62 = new lib.ClipGroup_62();
	this.instance_62.parent = this;
	this.instance_62.setTransform(46,149.8,1,1,0,0,0,2.9,1.7);

	this.instance_63 = new lib.ClipGroup_63();
	this.instance_63.parent = this;
	this.instance_63.setTransform(45.2,149.5,1,1,0,0,0,3.1,1.7);

	this.instance_64 = new lib.ClipGroup_64();
	this.instance_64.parent = this;
	this.instance_64.setTransform(44.3,153.3,1,1,0,0,0,3,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494F5B").s().p("AgRDfIAEiAQAFhQACgoQADhrAFhcIAEACQAMAIAAAPIAAADIgMC7QgFBFAAAkQgBAvgHBHQAAAHgCACIgDACIgFgCg");
	this.shape_7.setTransform(39.2,171.1);

	this.instance_65 = new lib.ClipGroup_65();
	this.instance_65.parent = this;
	this.instance_65.setTransform(48.5,179.2,1,1,0,0,0,7.4,15.5);

	this.instance_66 = new lib.ClipGroup_66();
	this.instance_66.parent = this;
	this.instance_66.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_67 = new lib.ClipGroup_67();
	this.instance_67.parent = this;
	this.instance_67.setTransform(44.1,153.8,1,1,0,0,0,2.8,5);

	this.instance_68 = new lib.ClipGroup_68();
	this.instance_68.parent = this;
	this.instance_68.setTransform(39.5,145.6);

	this.instance_69 = new lib.ClipGroup_69();
	this.instance_69.parent = this;
	this.instance_69.setTransform(43.3,170.4,1,1,0,0,0,3.4,14.7);

	this.instance_70 = new lib.ClipGroup_70();
	this.instance_70.parent = this;
	this.instance_70.setTransform(46.7,166.4,1,1,0,0,0,3.5,1.9);

	this.instance_71 = new lib.ClipGroup_71();
	this.instance_71.parent = this;
	this.instance_71.setTransform(42.9,178.3,1,1,0,0,0,3.2,14.2);

	this.instance_72 = new lib.ClipGroup_72();
	this.instance_72.parent = this;
	this.instance_72.setTransform(42.2,169.6,1,1,0,0,0,4.1,23.9);

	this.instance_73 = new lib.ClipGroup_73();
	this.instance_73.parent = this;
	this.instance_73.setTransform(46.1,200.5,1,1,0,0,0,5.3,8.8);

	this.instance_74 = new lib.ClipGroup_74();
	this.instance_74.parent = this;
	this.instance_74.setTransform(40.4,192,1,1,0,0,0,2.9,1.6);

	this.instance_75 = new lib.ClipGroup_75();
	this.instance_75.parent = this;
	this.instance_75.setTransform(40.1,192,1,1,0,0,0,2.7,1.6);

	this.instance_76 = new lib.ClipGroup_76();
	this.instance_76.parent = this;
	this.instance_76.setTransform(42.8,209.8,1,1,0,0,0,3.1,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_7},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.shape_6},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_5},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_4},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,63.9,213.9), null);


// stage content:
(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Light
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(346.4,517.1,0.834,0.834,0,0,0,415.2,340);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Lightbulb
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C101C").s().p("AipDkQjPgOhggoQgtgSgHgUQgHgUAcgSIH4lLIH3FMQA3AlhMAjQhNAkiuAQQhwALhyAAQhWAAhZgGg");
	this.shape.setTransform(346.1,220.6,0.834,0.834);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlB2QgqgxAAhFQAAhEAqgxQAqgxA7AAQA8AAAqAxQAqAxAABEQAABFgqAxQgqAxg8AAQg7AAgqgxg");
	this.shape_1.setTransform(346,240.2,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(110));

	// Shadow
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(346.7,300.4,0.834,0.834,0,0,0,415.6,360.1);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// Blue_L 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323E6E").s().p("ArK4zIWVs6MAAAA+jI2RM4g");
	this.shape_2.setTransform(71.5,359.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(110));

	// Thief
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.6,385.3,0.488,0.488,0,0,180,84.5,183.9);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(340,517.2,0.016,0.853,0,180,0,49.4,107.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(484.7,445.3,0.062,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:184,x:344.2,y:508.2},17,cjs.Ease.get(1)).to({regY:183.9,x:348.9,y:511.1},3).to({regX:84.8,scaleX:0.03,x:344.5},4).to({_off:true,regX:49.4,regY:107.5,scaleX:0.02,scaleY:0.85,skewX:180,skewY:0,x:340,y:517.2},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},1).to({regX:49.6,scaleX:0.85,x:348},4).wait(1).to({x:399.8,y:485.8},7).to({x:466.4,y:445.7},9).to({x:488.7,y:432.3},3).to({scaleX:0.69,x:488.6},1).wait(8).to({scaleX:0.53,y:432.2},0).to({scaleX:0.05,x:488.7,y:432.3},6).wait(1).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,x:488.7,y:458.3},9).to({x:483.1,y:459.5},1).to({x:384.7,y:519.3},10).to({startPosition:1},1).wait(23));

	// Door
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D0D0D").s().p("AoNuAIQVpcMAAGAlcIwVJdg");
	this.shape_3.setTransform(187.2,382.2,0.834,0.834);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B192A").s().p("Ag0SuMgAFglcIBthAMAAGAndg");
	this.shape_4.setTransform(235.5,357.1,0.834,0.834);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2946").s().p("ApEDmIQapXIBvBAIyJKjg");
	this.shape_5.setTransform(191.9,487.9,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(110));

	// Blue_L 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323E6E").s().p("Av62FIf1yZMgACA+lI/zSYg");
	this.shape_6.setTransform(244.9,259.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(110));

	// Lazy
	this.instance_5 = new lib.Group_156();
	this.instance_5.parent = this;
	this.instance_5.setTransform(441,320.1,0.834,0.834,0,0,0,31.9,106.9);

	this.instance_6 = new lib.Group_78();
	this.instance_6.parent = this;
	this.instance_6.setTransform(506.4,359.4,0.834,0.834,0,0,0,32,106.9);

	this.instance_7 = new lib.Group_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(570.3,397.7,0.834,0.834,0,0,0,31.9,106.9);

	this.instance_8 = new lib.Group();
	this.instance_8.parent = this;
	this.instance_8.setTransform(520.1,334,0.834,0.834,0,0,0,110,90.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191E32").s().p("EhA4gABMBA3gldMBA6AldMhA6Algg");
	this.shape_7.setTransform(346.8,600.7,0.834,0.834);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F2A4A").s().p("EAACAliIgBgBMggegSuMAAChLBMBA5AleMAAABK/g");
	this.shape_8.setTransform(520,300.3,0.834,0.834);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("EhA2AleMgAEhK8MBA8glgMBA5AldMAAABK/MhA7Alhg");
	this.shape_9.setTransform(346.6,400.5,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_8},{t:this.instance_7},{t:this.instance_5}]},56).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(346.5,400,693.3,800.9);
// library properties:
lib.properties = {
	width: 693,
	height: 800,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;