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



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AjhBBIAAiBIHCAAIAACBg");
	this.shape.setTransform(184.2,392,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223057").s().p("AkfKXQg9AAgrgrQgrgrAAg9QAAg9ArgsQArgrA9AAIEQAAIAAwGIHCAAIAATiQAAAfgWAWQgWAWgfAAg");
	this.shape_1.setTransform(205.1,451.8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABVjyIAAHJQhYAThRAJg");
	this.shape_2.setTransform(310,321.2,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AicKEQhAhBgBhbIAAysIG6AAIAASsQABBbhBBBQhABBhcAAQhcAAhBhBg");
	this.shape_3.setTransform(35.4,381.7,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1C1C").s().p("AgxCKIBjkTIAAETg");
	this.shape_4.setTransform(62.6,280.9,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1C1C").s().p("Ai3C2ICGlrIDpAAIAAFrg");
	this.shape_5.setTransform(76,349.3,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6D6D6").s().p("Ah0C2ICElrIBlAAIAAFrg");
	this.shape_6.setTransform(69.3,312.9,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6D6D6").s().p("AjYBaIBCizIFvAAIAACzg");
	this.shape_7.setTransform(79.3,376.5,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("A3iBjIAAjFMAvGAAAIAADFg");
	this.shape_8.setTransform(150.8,248.4,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AjgBBIAAiBIHCAAIAACBg");
	this.shape_9.setTransform(130.6,372,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2B").s().p("AjdBRIAAigIG6AAIAACgg");
	this.shape_10.setTransform(35.4,302.7,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6D6D6").s().p("AjWBVIiwipIMNAAIAACpg");
	this.shape_11.setTransform(105.9,434,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AjWCqIiwiqICwiqIJdAAIAAFUg");
	this.shape_12.setTransform(105.9,425.5,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2B").s().p("AgtD8QgTgTAAgbIAAmbQAAgcATgSQATgTAbAAQAaAAATATQATATAAAbIAAGbQAAAbgTATQgTATgaAAQgbAAgTgTg");
	this.shape_13.setTransform(66.9,425.5,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AjTBVQgjAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAjAAIGnAAQAkAAAZAZQAYAZAAAiQAAAjgYAZQgZAZgkAAg");
	this.shape_14.setTransform(59.4,425.5,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("AiJBCQg5g6AAhPQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPAAAVQAAAmAcAbQAbAbAmAAQAmAAAbgbQAbgbAAgmQAAgVAPgPQAPgPAVAAQAWAAAOAPQAPAPAAAVQAABPg5A6Qg5A5hQAAQhQAAg6g5g");
	this.shape_15.setTransform(260,140.9,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AiIBCQg5g5gBhQQAAgVAPgPQAPgPAVAAQAWAAAOAPQAPAPAAAVQAAAmAbAbQAbAbAmAAQAmAAAcgbQAbgbAAgmQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPAAAVQAABQg5A5Qg5A5hRAAQhQAAg4g5g");
	this.shape_16.setTransform(138.7,140.9,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#223057").s().p("APoP1Qjbiwg+kRQAZAEAOABQBYAAA/g/QA+g/AAhYQAAhYg+hAQg/g+hYAAQgdAAgeAJQg/ARgpA4QgpBIgYAlQgsBChBAgQhXAriSAAI6eAAIAAieQAAiyAnimMAh2AAAIAAj0QAAgygkgkQglgkgyAAI9xAAQDBlpFfjXQFpjcGoAAQEzAAEXB2QEPByDRDRQDQDRBzEOQB3EYAAEyIAANuQkegBjeizg");
	this.shape_17.setTransform(150.8,119.3,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202020").s().p("AgnCqIiviqICvipID/AAIAAFTg");
	this.shape_18.setTransform(129.6,440,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#223057").s().p("AjFBzQgxAAgighQghgiAAgwQAAgvAhgiQAjghAwAAIGNAAQAvAAAiAhQAiAiAAAvQAAAwgiAiQgiAhgvAAg");
	this.shape_19.setTransform(199.4,188.7,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#223057").s().p("A3iC2IAAlrMAvGAAAIAAFrg");
	this.shape_20.setTransform(150.8,276.5,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#223057").s().p("A3iC2IAAlrMAvGAAAIAAFrg");
	this.shape_21.setTransform(150.8,349.3,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5F5F5").s().p("A1gLfQg2AAgmgmQgmgmAAg3IAA06MAvGAAAIAAU6QAAA3gnAmQglAmg3AAg");
	this.shape_22.setTransform(150.8,312,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#223057").s().p("AlnKXQgfAAgWgWQgWgWAAgfIAAziIHCAAIAAQGIEQAAQA9AAArArQArAsAAA9QAAA9grArQgrArg9AAg");
	this.shape_23.setTransform(109.6,431.8,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5F5F5").s().p("A3iSpIAAtuQAAkyB2kYQBzkODQjRQDRjREOhyQEYh2EyAAQEzAAEXB2QEPByDRDRQDQDRBzEOQB3EYAAEyIAANug");
	this.shape_24.setTransform(150.8,119.3,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5F5F5").s().p("ApxE+QlIiFj6j6QhChBAAhcQAAhdBChBQBAhBBcAAQBdAABBBBQC7C7D0BjQDsBfD/AAQD/AADshfQD0hjC8i7IE6E7Qj7D6lICFQk7CAlXAAQlWAAk8iAg");
	this.shape_25.setTransform(342.7,302.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{y:431.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{y:372}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:451.8}},{t:this.shape,p:{y:392}}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{y:451.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{y:392}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:431.8}},{t:this.shape,p:{y:372}}]},4).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{y:431.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{y:372}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:451.8}},{t:this.shape,p:{y:392}}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.7,518.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#422A1F").s().p("ABuDGIkNicQgYgOAAgcQAAgMAGgMQAHgLALgHIENibQASgKATAFQAUAFAKARQAKASgFAUQgFATgRAKIjEBxIDEBxQARAKAFAUQAFAUgKARQgPAZgbAAQgOAAgLgHg");
	this.shape.setTransform(326.4,210.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#422A1F").s().p("AieDGQgMgGgGgMQgKgRAFgUQAFgUASgKIDDhxIjDhxQgSgJgFgUQgFgUAKgSQAKgRAUgFQATgFASAKIENCbQALAHAHALQAGAMAAAMQAAANgGALQgHALgLAHIkNCcQgMAHgNAAQgNAAgLgHg");
	this.shape_1.setTransform(219.7,210.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332018").s().p("AjhA7IAAh1IHDAAIAAB1g");
	this.shape_2.setTransform(258.6,449.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332018").s().p("AjhA7IAAh1IHDAAIAAB1g");
	this.shape_3.setTransform(205,449.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AkSAoIE6k5IDrDqIk6E6g");
	this.shape_4.setTransform(78.7,314.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEDBC1").s().p("Ak9KzQiAk8AAlWQAAlWCAk8QCElHD7j7QBChCBbAAQBcAABCBCQBBBBAABcQAABbhBBBQi8C8hjD0QheDsAAD/QAAD/BeDsQBjD0C8C8Ik7E6Qj7j7iElIg");
	this.shape_5.setTransform(44.6,191.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A0AScQhejMgIjfQgIjXBLjLQBKjLCQieQCWimDLheIRFn9QBFggAahIQAbhIgghFQgSglgggbIAUgJQEBh4EKBiQEKBhB4EBQB3EBhhEKQhiEJkBB3I35LIIgCABIreFVg");
	this.shape_6.setTransform(238.9,85.4,0.998,0.998,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEDBC1").s().p("AiWCXQg/g+AAhZQAAhXA/g/QA/g+BXAAQBYAAA/A+QA/A/AABXQAABZg/A+Qg+A+hZAAQhXAAg/g+g");
	this.shape_7.setTransform(149.4,212.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmTsZIMoAAIAAM5QgUFAjoDdQhwBpiLA5QiTA7ieAAg");
	this.shape_8.setTransform(114.9,217.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E6E6").s().p("AgxDqIAAnUIAmAnIA9FKIhjBkg");
	this.shape_9.setTransform(381,318.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EECEB6").s().p("AgSA/IAAikIAlDLg");
	this.shape_10.setTransform(377.9,288.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AklCeQgIAAgGgGQgGgGgBgIIAAgEQAKh7BahTQBbhVB7AAQB9AABbBVQBaBUAJB7IAAADQgBAIgGAGQgGAGgIAAg");
	this.shape_11.setTransform(273,235.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkIG+IC9u1Ii7i6IINAAIi7C6IC9O1IkJD0g");
	this.shape_12.setTransform(273,365.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("A1gLfQg2AAgmgmQgngmAAg2IAA07MAvHAAAIAAU7QAAA2gnAmQgmAmg2AAg");
	this.shape_13.setTransform(225.2,370);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkfH7Qg9AAgsgqQgqgrAAg+QAAg9AqgrQAsgsA9AAIEPAAIAArOIHDAAIAAOqQABAfgWAWQgXAWgfAAg");
	this.shape_14.setTransform(184.1,474.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AlnH7QgfAAgWgWQgXgWAAgfIAAuqIHDAAIAALOIEQAAQA9AAArAsQAsArAAA9QAAA+gsArQgrAqg9AAg");
	this.shape_15.setTransform(279.5,494.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEDBC1").s().p("A3jMaIAAttQAAi+Avi1QAtiyBWihMApjAAAQBWChAtCyQAvC1AAC+IAANtg");
	this.shape_16.setTransform(225.2,217.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5F5F5").s().p("AkSgnIDrjqIE6E5IjrDrg");
	this.shape_17.setTransform(372,314.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEDBC1").s().p("Al7O8QC7i8Bjj0QBejsAAj/QAAj/hejsQhjj0i7i8QhBhBAAhbQAAhcBBhBQBBhCBbAAQBdAABBBCQD6D7CEFHQCBE8AAFWQAAFWiBE8QiEFIj6D7g");
	this.shape_18.setTransform(406.1,191.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDC141").s().p("AguChQhBhBAAhcQAAhbBBhAQA2g4BOgIQAoBtgVByQgVB2hPBbQgcghgXgXg");
	this.shape_19.setTransform(367.7,86.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:494.2}},{t:this.shape_14,p:{y:474.2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:474.2}},{t:this.shape_14,p:{y:494.2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:494.2}},{t:this.shape_14,p:{y:474.2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,450.7,545);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(1205.7,272.5,1,1,0,0,0,225.3,272.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.8,286,1,1,0,0,0,234.8,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:417.9},29).to({x:537.9},11,cjs.Ease.get(0.8)).to({x:717.9},9).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669933").s().p("Agwg8IASgEIAEAGQAEgGAFgDQAFgEAGgBQAIgDAHACQAIABAHAFQAHAEAFAIQAFAHACAJIADALQADAKgBAKQAAAIgDAHQgDAHgHAFQgGAFgIACQgHACgHgCQgGgBgGgEIAMAwIgSAFgAgCg1QgGABgEAEQgFAEgEAGIAMAqQAHAEAFAAQAFABAGgBQAFgBADgDQADgDACgDQACgEAAgFIgCgMIgDgKQgCgGgDgFQgCgEgEgDIgIgDIgCAAIgFABg");
	this.shape.setTransform(833.9,128.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669933").s().p("AhMghIASgEIAFAKQAFgJAEgDQAGgFAIgCQAIgDAHACQAIACAFAGQADgIAHgGQAHgGAIgCQAGgBAFAAQAGAAAEADQAFADADAEQAFAGABAHIATBEIgTAFIgThEQgCgFgDgCQgEgCgGABQgFACgFAGQgFAFgEAJIARA/IgTAFIgRhDQgCgGgDgCQgEgBgGABQgGACgFAFQgEAFgEAJIARBAIgTAFg");
	this.shape_1.setTransform(822.3,129.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669933").s().p("AgKA1QgFgBgFgCQgFgDgEgEQgEgGgCgHQgCgIABgGQABgGAEgGQADgEAGgEQAGgDAHgDIAVgHIgCgFQgBgEgCgCIgFgDQgEgCgJACQgIACgIAFQgHAEgEAEIgIgTIAOgIQAJgEAIgCIAOgDQAGAAAHADQAGACAEAFQAFAGACAIIASBCIgRAEIgEgHQgGAGgGAEQgGAFgHACIgIABIgDAAgAgDAHQgIADgDAFQgDAEABAGQACAFADACQAFACAFgBQAJgDANgNIgFgRg");
	this.shape_2.setTransform(810.7,132.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669933").s().p("AAAA0QgJgBgHgEQgHgEgFgGQgFgIgDgKIgEgNQgCgKAAgIQABgJAEgHQAFgIAHgFQAIgFALgDQAFgCAGAAIANAAIADATQgQgBgGACIgKAEQgEADgDAEQgDAEAAAGQgBAFABAGIAEAMQABAGAEAFQADAEAEACQAEACAEAAQAEABAFgCQAHgBAGgEQAGgEAFgGIAHATQgGAGgGADQgGAEgIACQgIACgHAAIgCAAg");
	this.shape_3.setTransform(802.5,134.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#669933").s().p("AhMghIASgEIAEAKQAFgJAFgDQAGgFAIgCQAIgDAHACQAIACAGAGQACgIAHgGQAHgGAJgCQAFgBAFAAQAFAAAFADQAFADADAEQAEAGADAHIASBEIgTAFIgThEQgBgFgEgCQgEgCgFABQgGACgFAGQgFAFgDAJIARA/IgTAFIgShDQgBgGgEgCQgEgBgFABQgHACgEAFQgFAFgEAJIASBAIgUAFg");
	this.shape_4.setTransform(790.8,137.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#669933").s().p("AgHAzQgJgBgHgFQgHgFgEgHQgFgHgDgKIgCgIQgCgJAAgIQAAgJAEgIQADgIAIgFQAHgGAMgEQALgDAJACQAJABAHAFQAHAFAFAHQAEAIADAJIACAJQACAIAAAIQAAAKgEAHQgDAIgIAGQgHAGgMADQgHACgGAAIgHgBgAgIgeIgKAFQgDADgCAFQgCAEgBAFIACALIACAHQABAGADAFQADAFAEACQAEADAFABQAFABAFgCQAGgBAEgDQAEgEACgEQACgFAAgFIgBgLIgCgHQgCgGgDgFQgCgEgEgDQgEgDgGgBIgDAAIgHABg");
	this.shape_5.setTransform(778.6,140.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#669933").s().p("AAAA0QgJgBgHgEQgHgEgFgGQgFgIgDgKIgEgNQgCgKAAgIQABgJAEgHQAFgIAHgFQAIgFALgDQAFgCAGAAIANAAIADATQgQgBgGACIgKAEQgEADgDAEQgDAEAAAGQgBAFABAGIAEAMQABAGAEAFQADAEAEACQAEACAEAAQAEABAFgCQAHgBAGgEQAGgEAFgGIAHATQgGAGgGADQgGAEgIACQgIACgHAAIgCAAg");
	this.shape_6.setTransform(770.1,143.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AgPCWIAAgjQgQgCgRgEIgdgKIAEglIAbALQAQAFAPADIAAhGIgWgJQgMgFgHgHQgKgIgEgKQgGgMAAgPQAAgPAFgLQAFgLAIgIQAIgHAMgEQAKgEANgBIAAghIAjAAIAAAhQAUABAjAKIgGAjQgagKgXgCIAABIIAWAJQALAFAHAGQAJAIAEAKQAFAKAAAPQAAAOgEAMQgFAKgIAJQgHAGgLAFQgKAEgNACIAAAjgAAUBQQALgDAFgGQAGgHAAgLQAAgJgGgIQgFgFgLgFgAghhJQgHAGAAALQAAALAHAJQAGAGAMAGIAAg5QgLABgHAHg");
	this.shape_7.setTransform(859.2,271.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006699").s().p("AgJBeIAAgWQgKgBgLgDIgSgHIADgWIAQAHQALADAJABIAAgrIgNgFQgIgDgFgFQgGgFgDgHQgDgHAAgJQAAgKADgGQADgIAFgEQAFgFAIgCQAGgDAIgBIAAgUIAWAAIAAAUQAMABAWAHIgEAVQgRgFgNgCIAAAtIANAFQAHADAFAEQAFAGADAFQADAHAAAJQAAAJgDAHQgCAHgFAFQgGAEgGADQgHADgHABIAAAWgAANAyQAGgCAEgEQADgEAAgHQAAgGgDgEQgEgEgGgDgAgUguQgFAFABAHQgBAGAFAGQADAEAIAEIAAgkQgHABgEADg");
	this.shape_8.setTransform(699.2,357.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006699").s().p("AgKBsIAAgZIgYgFIgVgHIADgaIATAIQAMAEALABIAAgyIgQgGQgIgEgGgFQgHgGgDgHQgEgJAAgKQAAgLADgIQAEgIAGgFQAGgFAIgDQAHgDAKgBIAAgYIAZAAIAAAYQAOABAZAHIgEAZQgTgHgQgCIAAA0IAPAHQAIADAFAEQAHAGADAHQADAIAAAKQAAALgDAIQgDAIgGAFQgFAFgIAEQgHADgJABIAAAZgAAPA6QAHgCAEgFQAFgFAAgIQAAgHgFgFQgEgEgHgEgAgXg0QgFAFAAAHQAAAIAFAGQAEAFAJAEIAAgpQgIABgFAFg");
	this.shape_9.setTransform(539.2,231.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF66").s().p("AMiPBIETkUIKSKSIkUEUgA7G0FITclMICLIJIzbFNg");
	this.shape_10.setTransform(906.2,252.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC33").s().p("ALrPJIFSlRILLLLIlRFSgAMoPIIKRKRIEUkUIqSqRgA8H0pIVJlrICrJ+I1JFrgA7Az+ICMIKITblNIiMoKg");
	this.shape_11.setTransform(905.6,252.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AjRNoQgVgOgUgTQhPhPABhvQgBhvBPhPQBQhOBvAAQBuAABPBOQBOBPAABvQAABvhOBPQgTATgWAOQhBAuhTAAQhUAAhCgugAjJH7Qg6A5AABSQAABSA6A7QA6A5BSAAQBSAAA5g5QA6g7AAhSQAAhSg6g5Qg5g6hSAAQhSAAg6A6gAUUCUQghgXgegeQgtgsgdgzIAAANQglhCgQhLIAHAAQgHgnAAgpQAAiyB/h+QB9h+CyAAQCyAAB+B+QB9B+ABCyQgBCyh9B9QgfAegiAXQhoBJiHAAQiHAAhphJgAUimzQhcBcAACDQAACDBcBbQBdBdCCAAQCDAABdhdQBchbAAiDQAAiDhchcQhdhdiDAAQiDAAhcBdgA8nlfQgYgRgXgVQhahbgBiAQABiABahbQBbhaCAAAQCAAABbBaQBaBbAACAQAACAhaBbQgXAVgYARQhLA0hhAAQhhAAhLg0gA8dsEQhDBCAABfQAABeBDBDQBCBDBeAAQBeAABDhDQBDhDAAheQAAhfhDhCQhDhCheAAQheAAhCBCg");
	this.shape_12.setTransform(705.3,293.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC33").s().p("Ai3MQQg6g7AAhRQAAhSA6g6QA6g6BSAAQBRAAA6A6QA6A6AABSQAABRg6A7Qg6A6hRAAQhSAAg6g6gAU0AIQhchcAAiDQAAiDBchcQBchdCDAAQCDAABdBdQBcBcAACDQAACDhcBcQhdBciDAAQiDAAhchcgA8MnFQhChDAAheQAAheBChCQBDhDBeAAQBeAABDBDQBDBCAABeQAABehDBDQhDBDheAAQheAAhDhDg");
	this.shape_13.setTransform(703.5,293.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(715.5,272.5,1431,545);
// library properties:
lib.properties = {
	width: 1431,
	height: 545,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;