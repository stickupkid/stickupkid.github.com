(function () { "use strict";
var $_, $hxClasses = {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var CommonJS = function() { }
$hxClasses["CommonJS"] = CommonJS;
CommonJS.__name__ = ["CommonJS"];
CommonJS.getWindow = function() {
	var window = window;
	return window;
}
CommonJS.getHtmlDocument = function() {
	var htmlDocument = document;
	return htmlDocument;
}
CommonJS.newElement = function(elementType,htmlElement) {
	var htmlDocument = CommonJS.getHtmlDocument();
	if(htmlElement == null) htmlElement = htmlDocument.body;
	return htmlElement.createElement(elementType);
}
CommonJS.get = function(domSelection) {
	var htmlDocument = CommonJS.getHtmlDocument();
	return htmlDocument.body.querySelector(domSelection);
}
CommonJS.getAll = function(domSelection) {
	var htmlDocument = CommonJS.getHtmlDocument();
	return htmlDocument.body.querySelectorAll(domSelection);
}
CommonJS.stopEventPropergation = function(event) {
	if(event.stopPropagation != null) event.stopPropagation(); else if(event.cancelBubble != null) event.cancelBubble = true;
	if(event.preventDefault != null) event.preventDefault(); else if(event.returnValue != null) event.returnValue = false;
}
CommonJS.addEventListener = function(domSelection,eventType,eventHandler,useCapture) {
	if(useCapture == null) useCapture = true;
	var nodeList = CommonJS.getAll(domSelection);
	var _g1 = 0, _g = nodeList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var element = nodeList[i];
		element.addEventListener(eventType,eventHandler,useCapture);
	}
}
CommonJS.removeEventListener = function(domSelection,eventType,eventHandler,useCapture) {
	if(useCapture == null) useCapture = true;
	var nodeList = CommonJS.getAll(domSelection);
	var _g1 = 0, _g = nodeList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var element = nodeList[i];
		element.removeEventListener(eventType,eventHandler,useCapture);
	}
}
CommonJS.getComputedStyle = function(element,style) {
	var computedStyle;
	var htmlDocument = CommonJS.getHtmlDocument();
	if(element.currentStyle != null) computedStyle = element.currentStyle; else computedStyle = htmlDocument.defaultView.getComputedStyle(element,null);
	return computedStyle.getPropertyValue(style);
}
CommonJS.setStyle = function(domSelection,cssStyle,value) {
	var nodeList = CommonJS.getAll(domSelection);
	var _g1 = 0, _g = nodeList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var element = nodeList[i];
		element.style[cssStyle] = value;
	}
}
CommonJS.prototype = {
	__class__: CommonJS
}
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: IntHash
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIter"] = IntIter;
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIter
}
var Main = function() {
	this._root = new funk.gui.Root();
	this._root.setRenderManager(new funk.gui.js.core.display.RenderManager());
	this._root.setEventManager(new funk.gui.js.core.event.EventManager());
	var _g = 0;
	while(_g < 50) {
		var i = _g++;
		var _g1 = 0;
		while(_g1 < 50) {
			var j = _g1++;
			var button = new funk.gui.button.Button(new funk.gui.js.display.ButtonView());
			button.moveTo(j * 31,i * 31);
			button.resizeTo(30,30);
			this._root.add(button);
		}
	}
	
			var self = this;
			window.app = {
				debug: function(value) {
					return self.debug(value);
				},
				root: function() {
					return self._root;
				}
			};;
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	new Main();
}
Main.prototype = {
	_root: null
	,debug: function(value) {
		this._root.set_debug(value);
		return value?"Welcome to app debug mode":"Bye Bye";
	}
	,__class__: Main
}
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return ($_=Object.prototype,$_.hasOwnProperty.$bind($_)).call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = ($_=Object.prototype,$_.hasOwnProperty.$bind($_));
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
Reflect.prototype = {
	__class__: Reflect
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype = {
	__class__: Std
}
var StringBuf = function() {
	this.b = new Array();
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b[this.b.length] = x == null?"null":x;
	}
	,addSub: function(s,pos,len) {
		this.b[this.b.length] = s.substr(pos,len);
	}
	,addChar: function(c) {
		this.b[this.b.length] = String.fromCharCode(c);
	}
	,toString: function() {
		return this.b.join("");
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype = {
	__class__: StringTools
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	a.remove("__class__");
	a.remove("__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__properties__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
Type.prototype = {
	__class__: Type
}
var funk = {}
funk.IFunkObject = function() { }
$hxClasses["funk.IFunkObject"] = funk.IFunkObject;
funk.IFunkObject.__name__ = ["funk","IFunkObject"];
funk.IFunkObject.prototype = {
	equals: null
	,toString: null
	,__class__: funk.IFunkObject
}
funk.product = {}
funk.product.IProduct = function() { }
$hxClasses["funk.product.IProduct"] = funk.product.IProduct;
funk.product.IProduct.__name__ = ["funk","product","IProduct"];
funk.product.IProduct.__interfaces__ = [funk.IFunkObject];
funk.product.IProduct.prototype = {
	productArity: null
	,productPrefix: null
	,productElement: null
	,iterator: null
	,__class__: funk.product.IProduct
	,__properties__: {get_productPrefix:"get_productPrefix",get_productArity:"get_productArity"}
}
funk.product.Product = function() {
};
$hxClasses["funk.product.Product"] = funk.product.Product;
funk.product.Product.__name__ = ["funk","product","Product"];
funk.product.Product.__interfaces__ = [funk.product.IProduct];
funk.product.Product.prototype = {
	productArity: null
	,productPrefix: null
	,equals: function(that) {
		if(Std["is"](that,funk.product.IProduct)) {
			var thatProduct = that;
			if(this.get_productArity() == thatProduct.get_productArity()) {
				var n = this.get_productArity();
				while(--n > -1) if(funk.unit.ExpectType.toNotEqual(funk.unit.Expect.expect(this.productElement(n)),thatProduct.productElement(n))) return false;
				return true;
			}
		}
		return false;
	}
	,productElement: function(index) {
		return null;
	}
	,iterator: function() {
		return new funk.product.ProductIterator(this);
	}
	,makeString: function(separator) {
		var total = this.get_productArity();
		var last = total - 1;
		var buffer = new StringBuf();
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			buffer.add(this.productElement(i));
			if(i < last) buffer.b[buffer.b.length] = separator == null?"null":separator;
		}
		return buffer.b.join("");
	}
	,get_productArity: function() {
		return -1;
	}
	,get_productPrefix: function() {
		return "";
	}
	,toString: function() {
		if(0 == this.get_productArity()) return this.get_productPrefix();
		return "" + this.get_productPrefix() + "(" + this.makeString(",") + ")";
	}
	,__class__: funk.product.Product
	,__properties__: {get_productPrefix:"get_productPrefix",get_productArity:"get_productArity"}
}
funk.collections = {}
funk.collections.ICollection = function() { }
$hxClasses["funk.collections.ICollection"] = funk.collections.ICollection;
funk.collections.ICollection.__name__ = ["funk","collections","ICollection"];
funk.collections.ICollection.__interfaces__ = [funk.IFunkObject];
funk.collections.ICollection.prototype = {
	size: null
	,hasDefinedSize: null
	,toArray: null
	,__class__: funk.collections.ICollection
	,__properties__: {get_toArray:"get_toArray",get_hasDefinedSize:"get_hasDefinedSize",get_size:"get_size"}
}
funk.collections.ISet = function() { }
$hxClasses["funk.collections.ISet"] = funk.collections.ISet;
funk.collections.ISet.__name__ = ["funk","collections","ISet"];
funk.collections.ISet.__interfaces__ = [funk.collections.ICollection,funk.product.IProduct];
funk.collections.ISet.prototype = {
	nonEmpty: null
	,flatten: null
	,head: null
	,headOption: null
	,init: null
	,isEmpty: null
	,last: null
	,tail: null
	,tailOption: null
	,zipWithIndex: null
	,contains: null
	,count: null
	,drop: null
	,dropRight: null
	,dropWhile: null
	,exists: null
	,filter: null
	,filterNot: null
	,find: null
	,flatMap: null
	,foldLeft: null
	,foldRight: null
	,forall: null
	,foreach: null
	,get: null
	,map: null
	,partition: null
	,add: null
	,addAll: null
	,addIterator: null
	,addIterable: null
	,reduceLeft: null
	,reduceRight: null
	,take: null
	,takeRight: null
	,takeWhile: null
	,zip: null
	,__class__: funk.collections.ISet
	,__properties__: {get_zipWithIndex:"get_zipWithIndex",get_tailOption:"get_tailOption",get_tail:"get_tail",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_headOption:"get_headOption",get_head:"get_head",get_flatten:"get_flatten",get_nonEmpty:"get_nonEmpty"}
}
funk.collections.HashMapNil = function(factory) {
	funk.product.Product.call(this);
	this._factory = factory;
};
$hxClasses["funk.collections.HashMapNil"] = funk.collections.HashMapNil;
funk.collections.HashMapNil.__name__ = ["funk","collections","HashMapNil"];
funk.collections.HashMapNil.__interfaces__ = [funk.collections.ISet];
funk.collections.HashMapNil.__super__ = funk.product.Product;
funk.collections.HashMapNil.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,flatten: null
	,hasDefinedSize: null
	,head: null
	,headOption: null
	,init: null
	,isEmpty: null
	,last: null
	,size: null
	,tail: null
	,tailOption: null
	,toArray: null
	,zipWithIndex: null
	,_factory: null
	,contains: function(value) {
		return false;
	}
	,count: function(f) {
		return 0;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilSet();
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilSet();
	}
	,dropWhile: function(f) {
		return this._factory.createNilSet();
	}
	,exists: function(f) {
		return false;
	}
	,filter: function(f) {
		return this._factory.createNilSet();
	}
	,filterNot: function(f) {
		return this._factory.createNilSet();
	}
	,find: function(f) {
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		return this._factory.createNilSet();
	}
	,foldLeft: function(x,f) {
		return x;
	}
	,foldRight: function(x,f) {
		return x;
	}
	,forall: function(f) {
		return false;
	}
	,foreach: function(f) {
	}
	,get: function(index) {
		return funk.option.Option.None;
	}
	,map: function(f) {
		return this._factory.createNilSet();
	}
	,partition: function(f) {
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2($this._factory.createNilSet(),$this._factory.createNilSet()));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,add: function(key,value) {
		return this._factory.createSet((function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(key,value));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this)),this);
	}
	,addAll: function(value) {
		return value;
	}
	,reduceLeft: function(f) {
		return funk.option.Option.None;
	}
	,reduceRight: function(f) {
		return funk.option.Option.None;
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilSet();
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilSet();
	}
	,takeWhile: function(f) {
		return this._factory.createNilSet();
	}
	,zip: function(that) {
		return this._factory.createNilSet();
	}
	,addIterator: function(iterator) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterator));
	}
	,addIterable: function(iterable) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterable.iterator()));
	}
	,productElement: function(i) {
		throw new funk.errors.RangeError(null,{ fileName : "HashMapNil.hx", lineNumber : 171, className : "funk.collections.HashMapNil", methodName : "productElement"});
	}
	,get_nonEmpty: function() {
		return false;
	}
	,get_isEmpty: function() {
		return true;
	}
	,get_head: function() {
		return null;
	}
	,get_headOption: function() {
		return funk.option.Option.None;
	}
	,get_init: function() {
		return this._factory.createNilSet();
	}
	,get_last: function() {
		return funk.option.Option.None;
	}
	,get_tail: function() {
		return null;
	}
	,get_tailOption: function() {
		return funk.option.Option.None;
	}
	,get_zipWithIndex: function() {
		return this._factory.createNilSet();
	}
	,get_size: function() {
		return 0;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		return [];
	}
	,get_flatten: function() {
		return this._factory.createNilSet();
	}
	,get_iterator: function() {
		return new funk.collections.NilIterator(this._factory);
	}
	,get_productArity: function() {
		return 0;
	}
	,get_productPrefix: function() {
		return "Nil";
	}
	,__class__: funk.collections.HashMapNil
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_zipWithIndex:"get_zipWithIndex",get_toArray:"get_toArray",get_tailOption:"get_tailOption",get_tail:"get_tail",get_size:"get_size",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_headOption:"get_headOption",get_head:"get_head",get_hasDefinedSize:"get_hasDefinedSize",get_flatten:"get_flatten",get_nonEmpty:"get_nonEmpty"})
});
funk.collections.ICollectionFactory = function() { }
$hxClasses["funk.collections.ICollectionFactory"] = funk.collections.ICollectionFactory;
funk.collections.ICollectionFactory.__name__ = ["funk","collections","ICollectionFactory"];
funk.collections.ICollectionFactory.prototype = {
	createNil: null
	,__class__: funk.collections.ICollectionFactory
}
funk.collections.IList = function() { }
$hxClasses["funk.collections.IList"] = funk.collections.IList;
funk.collections.IList.__name__ = ["funk","collections","IList"];
funk.collections.IList.__interfaces__ = [funk.collections.ICollection,funk.product.IProduct];
funk.collections.IList.prototype = {
	nonEmpty: null
	,flatten: null
	,head: null
	,headOption: null
	,indices: null
	,init: null
	,isEmpty: null
	,last: null
	,reverse: null
	,tail: null
	,tailOption: null
	,zipWithIndex: null
	,contains: null
	,count: null
	,drop: null
	,dropRight: null
	,dropWhile: null
	,exists: null
	,filter: null
	,filterNot: null
	,find: null
	,findIndexOf: null
	,flatMap: null
	,foldLeft: null
	,foldRight: null
	,forall: null
	,foreach: null
	,get: null
	,indexOf: null
	,map: null
	,partition: null
	,prepend: null
	,prependAll: null
	,prependIterator: null
	,prependIterable: null
	,append: null
	,appendAll: null
	,appendIterator: null
	,appendIterable: null
	,reduceLeft: null
	,reduceRight: null
	,take: null
	,takeRight: null
	,takeWhile: null
	,zip: null
	,__class__: funk.collections.IList
	,__properties__: {get_zipWithIndex:"get_zipWithIndex",get_tailOption:"get_tailOption",get_tail:"get_tail",get_reverse:"get_reverse",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_indices:"get_indices",get_headOption:"get_headOption",get_head:"get_head",get_flatten:"get_flatten",get_nonEmpty:"get_nonEmpty"}
}
funk.collections.IListFactory = function() { }
$hxClasses["funk.collections.IListFactory"] = funk.collections.IListFactory;
funk.collections.IListFactory.__name__ = ["funk","collections","IListFactory"];
funk.collections.IListFactory.__interfaces__ = [funk.collections.ICollectionFactory];
funk.collections.IListFactory.prototype = {
	createList: null
	,createNilList: null
	,__class__: funk.collections.IListFactory
}
funk.collections.IQuadTree = function() { }
$hxClasses["funk.collections.IQuadTree"] = funk.collections.IQuadTree;
funk.collections.IQuadTree.__name__ = ["funk","collections","IQuadTree"];
funk.collections.IQuadTree.__interfaces__ = [funk.collections.ICollection,funk.product.IProduct];
funk.collections.IQuadTree.prototype = {
	rect: null
	,add: null
	,addAt: null
	,remove: null
	,removeAt: null
	,get: null
	,getAt: null
	,contains: null
	,indexOf: null
	,integrate: null
	,queryPoint: null
	,queryRectangle: null
	,__class__: funk.collections.IQuadTree
	,__properties__: {set_rect:"set_rect",get_rect:"get_rect"}
}
funk.collections.ISetFactory = function() { }
$hxClasses["funk.collections.ISetFactory"] = funk.collections.ISetFactory;
funk.collections.ISetFactory.__name__ = ["funk","collections","ISetFactory"];
funk.collections.ISetFactory.__interfaces__ = [funk.collections.ICollectionFactory];
funk.collections.ISetFactory.prototype = {
	createSet: null
	,createNilSet: null
	,__class__: funk.collections.ISetFactory
}
funk.collections.IteratorUtil = function() { }
$hxClasses["funk.collections.IteratorUtil"] = funk.collections.IteratorUtil;
funk.collections.IteratorUtil.__name__ = ["funk","collections","IteratorUtil"];
funk.collections.IteratorUtil.isIterator = function(a) {
	return Reflect.field(a,"hasNext") && Reflect.field(a,"next");
}
funk.collections.IteratorUtil.eq = function(a,b) {
	if(a != null && b != null) {
		if(Reflect.field(b,"hasNext") && Reflect.field(b,"next")) {
			var iter = b;
			while(true) {
				var aHasNext = a.hasNext();
				var bHasNext = iter.hasNext();
				if(aHasNext && bHasNext) {
					var aNext = a.next();
					var bNext = iter.next();
					if(funk.unit.ExpectType.toNotEqual(funk.unit.Expect.expect(aNext),bNext)) return false;
				} else if(!aHasNext && !bHasNext) break; else return false;
			}
			return true;
		}
	}
	return false;
}
funk.collections.IteratorUtil.toArray = function(iter) {
	var array = [];
	while(iter.hasNext()) array.push(iter.next());
	return array;
}
funk.collections.IteratorUtil.toList = function(iter) {
	var l = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	while(iter.hasNext()) l = l.prepend(iter.next());
	return l.get_reverse();
}
funk.collections.IteratorUtil.toSet = function(iter) {
	var s = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilSet;
			break;
		}
		return $r;
	}(this));
	var i = 0;
	while(iter.hasNext()) {
		var t = iter.next();
		s = s.add(t.get__1(),t.get__2());
		i++;
	}
	return s;
}
funk.collections.IteratorUtil.toIntSet = function(iter) {
	var s = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilSet;
			break;
		}
		return $r;
	}(this));
	var i = 0;
	while(iter.hasNext()) {
		s = s.add(i,iter.next());
		i++;
	}
	return s;
}
funk.collections.IteratorUtil.prototype = {
	__class__: funk.collections.IteratorUtil
}
funk.collections.ListNil = function(factory) {
	funk.product.Product.call(this);
	this._factory = factory;
};
$hxClasses["funk.collections.ListNil"] = funk.collections.ListNil;
funk.collections.ListNil.__name__ = ["funk","collections","ListNil"];
funk.collections.ListNil.__interfaces__ = [funk.collections.IList];
funk.collections.ListNil.__super__ = funk.product.Product;
funk.collections.ListNil.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,head: null
	,headOption: null
	,indices: null
	,init: null
	,isEmpty: null
	,last: null
	,reverse: null
	,tail: null
	,tailOption: null
	,zipWithIndex: null
	,size: null
	,hasDefinedSize: null
	,toArray: null
	,flatten: null
	,_factory: null
	,contains: function(value) {
		return false;
	}
	,count: function(f) {
		return 0;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilList();
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilList();
	}
	,dropWhile: function(f) {
		return this._factory.createNilList();
	}
	,exists: function(f) {
		return false;
	}
	,filter: function(f) {
		return this._factory.createNilList();
	}
	,filterNot: function(f) {
		return this._factory.createNilList();
	}
	,find: function(f) {
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		return this._factory.createNilList();
	}
	,foldLeft: function(x,f) {
		return x;
	}
	,foldRight: function(x,f) {
		return x;
	}
	,forall: function(f) {
		return false;
	}
	,foreach: function(f) {
	}
	,get: function(index) {
		return funk.option.Option.None;
	}
	,map: function(f) {
		return this._factory.createNilList();
	}
	,partition: function(f) {
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2($this._factory.createNilList(),$this._factory.createNilList()));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,prepend: function(value) {
		return this._factory.createList(value,this);
	}
	,prependAll: function(value) {
		return value;
	}
	,reduceLeft: function(f) {
		return funk.option.Option.None;
	}
	,reduceRight: function(f) {
		return funk.option.Option.None;
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilList();
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		return this._factory.createNilList();
	}
	,takeWhile: function(f) {
		return this._factory.createNilList();
	}
	,zip: function(that) {
		return this._factory.createNilList();
	}
	,findIndexOf: function(f) {
		return -1;
	}
	,indexOf: function(value) {
		return -1;
	}
	,prependIterator: function(iterator) {
		return funk.collections.IteratorUtil.toList(iterator);
	}
	,prependIterable: function(iterable) {
		return funk.collections.IteratorUtil.toList(iterable.iterator());
	}
	,append: function(value) {
		return this._factory.createList(value,this);
	}
	,appendAll: function(value) {
		return value;
	}
	,appendIterator: function(iterator) {
		return funk.collections.IteratorUtil.toList(iterator);
	}
	,appendIterable: function(iterable) {
		return funk.collections.IteratorUtil.toList(iterable.iterator());
	}
	,productElement: function(i) {
		throw new funk.errors.RangeError(null,{ fileName : "ListNil.hx", lineNumber : 201, className : "funk.collections.ListNil", methodName : "productElement"});
	}
	,iterator: function() {
		return new funk.collections.NilIterator(this._factory);
	}
	,get_nonEmpty: function() {
		return false;
	}
	,get_isEmpty: function() {
		return true;
	}
	,get_head: function() {
		return null;
	}
	,get_headOption: function() {
		return funk.option.Option.None;
	}
	,get_indices: function() {
		return this._factory.createNilList();
	}
	,get_init: function() {
		return this._factory.createNilList();
	}
	,get_last: function() {
		return funk.option.Option.None;
	}
	,get_reverse: function() {
		return this._factory.createNilList();
	}
	,get_tail: function() {
		return null;
	}
	,get_tailOption: function() {
		return funk.option.Option.None;
	}
	,get_zipWithIndex: function() {
		return this._factory.createNilList();
	}
	,get_size: function() {
		return 0;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		return new Array();
	}
	,get_flatten: function() {
		return this._factory.createNilList();
	}
	,get_productArity: function() {
		return 0;
	}
	,get_productPrefix: function() {
		return "Nil";
	}
	,__class__: funk.collections.ListNil
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_flatten:"get_flatten",get_toArray:"get_toArray",get_hasDefinedSize:"get_hasDefinedSize",get_size:"get_size",get_zipWithIndex:"get_zipWithIndex",get_tailOption:"get_tailOption",get_tail:"get_tail",get_reverse:"get_reverse",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_indices:"get_indices",get_headOption:"get_headOption",get_head:"get_head",get_nonEmpty:"get_nonEmpty"})
});
funk.product.IProductIterator = function() { }
$hxClasses["funk.product.IProductIterator"] = funk.product.IProductIterator;
funk.product.IProductIterator.__name__ = ["funk","product","IProductIterator"];
funk.product.IProductIterator.__interfaces__ = [funk.IFunkObject];
funk.product.IProductIterator.prototype = {
	hasNext: null
	,next: null
	,__class__: funk.product.IProductIterator
}
funk.collections.NilIterator = function(factory) {
	funk.product.Product.call(this);
	this._factory = factory;
};
$hxClasses["funk.collections.NilIterator"] = funk.collections.NilIterator;
funk.collections.NilIterator.__name__ = ["funk","collections","NilIterator"];
funk.collections.NilIterator.__interfaces__ = [funk.product.IProductIterator,funk.IFunkObject];
funk.collections.NilIterator.__super__ = funk.product.Product;
funk.collections.NilIterator.prototype = $extend(funk.product.Product.prototype,{
	_factory: null
	,hasNext: function() {
		return false;
	}
	,next: function() {
		return null;
	}
	,nextOption: function() {
		return funk.option.Option.None;
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		throw new funk.errors.NoSuchElementError(null,{ fileName : "NilIterator.hx", lineNumber : 40, className : "funk.collections.NilIterator", methodName : "productElement"});
	}
	,get_productArity: function() {
		return 0;
	}
	,get_productPrefix: function() {
		return "NilIterator";
	}
	,__class__: funk.collections.NilIterator
});
funk.collections.NilIteratorType = function() { }
$hxClasses["funk.collections.NilIteratorType"] = funk.collections.NilIteratorType;
funk.collections.NilIteratorType.__name__ = ["funk","collections","NilIteratorType"];
funk.collections.NilIteratorType.toArray = function(iter) {
	return [];
}
funk.collections.NilIteratorType.toList = function(iter) {
	var access = iter;
	return access._factory.createNil();
}
funk.collections.NilIteratorType.prototype = {
	__class__: funk.collections.NilIteratorType
}
funk.collections.immutable = {}
funk.collections.immutable.HashMap = function(head,tail) {
	funk.product.Product.call(this);
	this._head = head;
	this._tail = tail;
	this._length = 0;
	this._lengthKnown = false;
};
$hxClasses["funk.collections.immutable.HashMap"] = funk.collections.immutable.HashMap;
funk.collections.immutable.HashMap.__name__ = ["funk","collections","immutable","HashMap"];
funk.collections.immutable.HashMap.__interfaces__ = [funk.collections.ISet];
funk.collections.immutable.HashMap.__super__ = funk.product.Product;
funk.collections.immutable.HashMap.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,flatten: null
	,hasDefinedSize: null
	,head: null
	,headOption: null
	,init: null
	,isEmpty: null
	,last: null
	,size: null
	,tail: null
	,tailOption: null
	,toArray: null
	,zipWithIndex: null
	,_head: null
	,_tail: null
	,_length: null
	,_lengthKnown: null
	,contains: function(value) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(p.get_head().get__1()),value)) return true;
			p = p.get_tail();
		}
		return false;
	}
	,count: function(f) {
		var n = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head().get__1(),p.get_head().get__2())) ++n;
			p = p.get_tail();
		}
		return n;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			if(p.get_isEmpty()) return (function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}(this));
			p = p.get_tail();
		}
		return p;
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(0 == n) return this;
		n = this.get_size() - n;
		if(n <= 0) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.HashMap(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,dropWhile: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head().get__1(),p.get_head().get__2())) return p;
			p = p.get_tail();
		}
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
	}
	,exists: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head().get__1(),p.get_head().get__2())) return true;
			p = p.get_tail();
		}
		return false;
	}
	,filter: function(f) {
		var p = this;
		var q = null;
		var first = null;
		var last = null;
		var allFiltered = true;
		while(p.get_nonEmpty()) {
			if(f(p.get_head().get__1(),p.get_head().get__2())) {
				q = new funk.collections.immutable.HashMap(p.get_head(),(function($this) {
					var $r;
					switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.immutable.NilType._nilSet;
						break;
					}
					return $r;
				}(this)));
				if(null != last) last._tail = q;
				if(first == null) first = q;
				last = q;
			} else allFiltered = false;
			p = p.get_tail();
		}
		if(allFiltered) return this;
		return first == null?(function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this)):first;
	}
	,filterNot: function(f) {
		var p = this;
		var q = null;
		var first = null;
		var last = null;
		var allFiltered = true;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head().get__1(),p.get_head().get__2())) {
				q = new funk.collections.immutable.HashMap(p.get_head(),(function($this) {
					var $r;
					switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.immutable.NilType._nilSet;
						break;
					}
					return $r;
				}(this)));
				if(null != last) last._tail = q;
				if(null == first) first = q;
				last = q;
			} else allFiltered = false;
			p = p.get_tail();
		}
		if(allFiltered) return this;
		return first == null?(function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this)):first;
	}
	,find: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head().get__1(),p.get_head().get__2())) return p.get_headOption();
			p = p.get_tail();
		}
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		var n = this.get_size();
		var buffer = new Array();
		var p = this;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = f(p.get_head());
			p = p.get_tail();
		}
		var s = buffer[--n];
		while(--n > -1) s = s.addAll(buffer[n]);
		return s;
	}
	,foldLeft: function(x,f) {
		var value = x;
		var p = this;
		while(p.get_nonEmpty()) {
			value = f(value,p.get_head());
			p = p.get_tail();
		}
		return value;
	}
	,foldRight: function(x,f) {
		var value = x;
		var buffer = new Array();
		var p = this;
		while(p.get_nonEmpty()) {
			buffer.push(p.get_head());
			p = p.get_tail();
		}
		var n = buffer.length;
		while(--n > -1) value = f(value,buffer[n]);
		return value;
	}
	,forall: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head().get__1(),p.get_head().get__2())) return false;
			p = p.get_tail();
		}
		return true;
	}
	,foreach: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			f(p.get_head().get__1(),p.get_head().get__2());
			p = p.get_tail();
		}
	}
	,get: function(index) {
		return funk.option.Option.Some(this.productElement(index));
	}
	,map: function(f) {
		var n = this.get_size();
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.HashMap(f(p.get_head()),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,partition: function(f) {
		var left = new Array();
		var right = new Array();
		var i = 0;
		var j = 0;
		var m = 0;
		var o = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head().get__1(),p.get_head().get__2())) left[i++] = new funk.collections.immutable.HashMap(p.get_head(),(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}(this))); else right[j++] = new funk.collections.immutable.HashMap(p.get_head(),(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}(this)));
			p = p.get_tail();
		}
		m = i - 1;
		o = j - 1;
		if(m > 0) {
			j = 1;
			var _g = 0;
			while(_g < m) {
				var i1 = _g++;
				left[i1]._tail = left[j];
				j++;
			}
		}
		if(o > 0) {
			j = 1;
			var _g = 0;
			while(_g < o) {
				var i1 = _g++;
				right[i1]._tail = right[j];
				j++;
			}
		}
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(m > 0?left[0]:(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}($this)),o > 0?right[0]:(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}($this))));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,equals: function(that) {
		return Std["is"](that,funk.collections.ISet)?funk.product.Product.prototype.equals.call(this,that):false;
	}
	,add: function(key,value) {
		return new funk.collections.immutable.HashMap((function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(key,value));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this)),this);
	}
	,addAll: function(value) {
		var n = value.get_size();
		if(0 == n) return this;
		var buffer = new Array();
		var m = n - 1;
		var p = value;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = new funk.collections.immutable.HashMap(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = this;
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i1 = _g++;
			buffer[i1]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,reduceLeft: function(f) {
		var value = this.get_head();
		var p = this._tail;
		while(p.get_nonEmpty()) {
			value = f(value,p.get_head());
			p = p.get_tail();
		}
		return funk.option.Option.Some(value);
	}
	,reduceRight: function(f) {
		var buffer = new Array();
		var p = this;
		while(p.get_nonEmpty()) {
			buffer.push(p.get_head());
			p = p.get_tail();
		}
		var value = buffer.pop();
		var n = buffer.length;
		while(--n > -1) value = f(value,buffer[n]);
		return funk.option.Option.Some(value);
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.HashMap(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		n = this.get_size() - n;
		if(n <= 0) return this;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			p = p.get_tail();
		}
		return p;
	}
	,takeWhile: function(f) {
		var buffer = new Array();
		var p = this;
		var n = 0;
		while(p.get_nonEmpty()) if(f(p.get_head())) {
			buffer[n++] = new funk.collections.immutable.HashMap(p.get_head(),null);
			p = p.get_tail();
		} else break;
		var m = n - 1;
		if(m < 0) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,zip: function(that) {
		var n = Math.min(this.get_size(),that.get_size()) | 0;
		var m = n - 1;
		var buffer = new Array();
		var p = this;
		var q = that;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.HashMap((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(p.get_head(),q.get_head()));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)),null);
			p = p.get_tail();
			q = q.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,addIterator: function(iterator) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterator));
	}
	,addIterable: function(iterable) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterable.iterator()));
	}
	,productElement: function(i) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(i == 0) return p.get_head();
			p = p.get_tail();
			i -= 1;
		}
		throw new funk.errors.NoSuchElementError(null,{ fileName : "HashMap.hx", lineNumber : 599, className : "funk.collections.immutable.HashMap", methodName : "productElement"});
	}
	,iterator: function() {
		return new funk.collections.immutable.HashMapIterator(this);
	}
	,get_nonEmpty: function() {
		return true;
	}
	,get_isEmpty: function() {
		return false;
	}
	,get_head: function() {
		return this._head;
	}
	,get_headOption: function() {
		return funk.option.Option.Some(this._head);
	}
	,get_init: function() {
		return this.dropRight(1);
	}
	,get_last: function() {
		var p = this;
		var value = funk.option.Option.None;
		while(p.get_nonEmpty()) {
			value = p.get_headOption();
			p = p.get_tail();
		}
		return value;
	}
	,get_tail: function() {
		return this._tail;
	}
	,get_tailOption: function() {
		return funk.option.Option.Some(this._tail);
	}
	,get_zipWithIndex: function() {
		var n = this.get_size();
		var m = n - 1;
		var buffer = new Array();
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.HashMap((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(p.get_head(),i));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,get_size: function() {
		if(this._lengthKnown) return this._length;
		var p = this;
		var length = 0;
		while(p.get_nonEmpty()) {
			++length;
			p = p.get_tail();
		}
		this._length = length;
		this._lengthKnown = true;
		return length;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		var n = this.get_size();
		var array = new Array();
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			array[i] = p.get_head().get__2();
			p = p.get_tail();
		}
		return array;
	}
	,get_flatten: function() {
		return this.flatMap(function(x) {
			return Std["is"](x,funk.collections.ISet)?x:x.toSet();
		});
	}
	,get_productArity: function() {
		return this.get_size();
	}
	,get_productPrefix: function() {
		return "HashMap";
	}
	,__class__: funk.collections.immutable.HashMap
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_zipWithIndex:"get_zipWithIndex",get_toArray:"get_toArray",get_tailOption:"get_tailOption",get_tail:"get_tail",get_size:"get_size",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_headOption:"get_headOption",get_head:"get_head",get_hasDefinedSize:"get_hasDefinedSize",get_flatten:"get_flatten",get_nonEmpty:"get_nonEmpty"})
});
funk.collections.immutable.HashMapIterator = function(l) {
	funk.product.Product.call(this);
	this._set = l;
};
$hxClasses["funk.collections.immutable.HashMapIterator"] = funk.collections.immutable.HashMapIterator;
funk.collections.immutable.HashMapIterator.__name__ = ["funk","collections","immutable","HashMapIterator"];
funk.collections.immutable.HashMapIterator.__interfaces__ = [funk.product.IProductIterator,funk.IFunkObject];
funk.collections.immutable.HashMapIterator.__super__ = funk.product.Product;
funk.collections.immutable.HashMapIterator.prototype = $extend(funk.product.Product.prototype,{
	_set: null
	,hasNext: function() {
		return this._set.get_nonEmpty();
	}
	,next: function() {
		return this._set == (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this))?(function($this) {
			var $r;
			throw new funk.errors.NoSuchElementError(null,{ fileName : "HashMapIterator.hx", lineNumber : 35, className : "funk.collections.immutable.HashMapIterator", methodName : "next"});
			return $r;
		}(this)):(function($this) {
			var $r;
			var head = $this._set.get_head();
			$this._set = $this._set.get_tail();
			$r = head;
			return $r;
		}(this));
	}
	,nextOption: function() {
		return this._set == (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this))?funk.option.Option.None:(function($this) {
			var $r;
			var head = $this._set.get_headOption();
			$this._set = $this._set.get_tail();
			$r = head;
			return $r;
		}(this));
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		return this._set.productElement(index);
	}
	,get_productArity: function() {
		return this._set.get_size();
	}
	,get_productPrefix: function() {
		return "HashMapIterator";
	}
	,__class__: funk.collections.immutable.HashMapIterator
});
funk.collections.immutable.HashMapIteratorType = function() { }
$hxClasses["funk.collections.immutable.HashMapIteratorType"] = funk.collections.immutable.HashMapIteratorType;
funk.collections.immutable.HashMapIteratorType.__name__ = ["funk","collections","immutable","HashMapIteratorType"];
funk.collections.immutable.HashMapIteratorType.toArray = function(iter) {
	return funk.collections.IteratorUtil.toArray(iter);
}
funk.collections.immutable.HashMapIteratorType.toList = function(iter) {
	return funk.collections.IteratorUtil.toList(iter);
}
funk.collections.immutable.HashMapIteratorType.prototype = {
	__class__: funk.collections.immutable.HashMapIteratorType
}
funk.collections.immutable.List = function(head,tail) {
	funk.product.Product.call(this);
	this._head = head;
	this._tail = tail;
	this._length = 0;
	this._lengthKnown = false;
};
$hxClasses["funk.collections.immutable.List"] = funk.collections.immutable.List;
funk.collections.immutable.List.__name__ = ["funk","collections","immutable","List"];
funk.collections.immutable.List.__interfaces__ = [funk.collections.IList];
funk.collections.immutable.List.__super__ = funk.product.Product;
funk.collections.immutable.List.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,head: null
	,headOption: null
	,indices: null
	,init: null
	,isEmpty: null
	,last: null
	,reverse: null
	,tail: null
	,tailOption: null
	,zipWithIndex: null
	,size: null
	,hasDefinedSize: null
	,toArray: null
	,flatten: null
	,_head: null
	,_tail: null
	,_length: null
	,_lengthKnown: null
	,contains: function(value) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(p.get_head()),value)) return true;
			p = p.get_tail();
		}
		return false;
	}
	,count: function(f) {
		var n = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) ++n;
			p = p.get_tail();
		}
		return n;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			if(p.get_isEmpty()) return (function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}(this));
			p = p.get_tail();
		}
		return p;
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(0 == n) return this;
		n = this.get_size() - n;
		if(n <= 0) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,dropWhile: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head())) return p;
			p = p.get_tail();
		}
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,exists: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) return true;
			p = p.get_tail();
		}
		return false;
	}
	,filter: function(f) {
		var p = this;
		var q = null;
		var first = null;
		var last = null;
		var allFiltered = true;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) {
				q = new funk.collections.immutable.List(p.get_head(),(function($this) {
					var $r;
					switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.immutable.NilType._nilList;
						break;
					}
					return $r;
				}(this)));
				if(null != last) last._tail = q;
				if(null == first) first = q;
				last = q;
			} else allFiltered = false;
			p = p.get_tail();
		}
		if(allFiltered) return this;
		return first == null?(function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this)):first;
	}
	,filterNot: function(f) {
		var p = this;
		var q = null;
		var first = null;
		var last = null;
		var allFiltered = true;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head())) {
				q = new funk.collections.immutable.List(p.get_head(),(function($this) {
					var $r;
					switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.immutable.NilType._nilList;
						break;
					}
					return $r;
				}(this)));
				if(null != last) last._tail = q;
				if(null == first) first = q;
				last = q;
			} else allFiltered = false;
			p = p.get_tail();
		}
		if(allFiltered) return this;
		return first == null?(function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this)):first;
	}
	,find: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) return p.get_headOption();
			p = p.get_tail();
		}
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		var n = this.get_size();
		var buffer = new Array();
		var p = this;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = f(p.get_head());
			p = p.get_tail();
		}
		var list = buffer[--n];
		while(--n > -1) list = list.prependAll(buffer[n]);
		return list;
	}
	,foldLeft: function(x,f) {
		var value = x;
		var p = this;
		while(p.get_nonEmpty()) {
			value = f(value,p.get_head());
			p = p.get_tail();
		}
		return value;
	}
	,foldRight: function(x,f) {
		var value = x;
		var buffer = this.get_toArray();
		var n = buffer.length;
		while(--n > -1) value = f(value,buffer[n]);
		return value;
	}
	,forall: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(!f(p.get_head())) return false;
			p = p.get_tail();
		}
		return true;
	}
	,foreach: function(f) {
		var p = this;
		while(p.get_nonEmpty()) {
			f(p.get_head());
			p = p.get_tail();
		}
	}
	,get: function(index) {
		return funk.option.Option.Some(this.productElement(index));
	}
	,map: function(f) {
		var n = this.get_size();
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.List(f(p.get_head()),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,partition: function(f) {
		var left = new Array();
		var right = new Array();
		var i = 0;
		var j = 0;
		var m = 0;
		var o = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) left[i++] = new funk.collections.immutable.List(p.get_head(),(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}(this))); else right[j++] = new funk.collections.immutable.List(p.get_head(),(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}(this)));
			p = p.get_tail();
		}
		m = i - 1;
		o = j - 1;
		if(m > 0) {
			j = 1;
			var _g = 0;
			while(_g < m) {
				var i1 = _g++;
				left[i1]._tail = left[j];
				j++;
			}
		}
		if(o > 0) {
			j = 1;
			var _g = 0;
			while(_g < o) {
				var i1 = _g++;
				right[i1]._tail = right[j];
				j++;
			}
		}
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(m >= 0?left[0]:(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}($this)),o >= 0?right[0]:(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}($this))));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,equals: function(that) {
		return Std["is"](that,funk.collections.IList)?funk.product.Product.prototype.equals.call(this,that):false;
	}
	,prepend: function(value) {
		return new funk.collections.immutable.List(value,this);
	}
	,prependAll: function(value) {
		var n = value.get_size();
		if(0 == n) return this;
		var buffer = new Array();
		var m = n - 1;
		var p = value;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = this;
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i1 = _g++;
			buffer[i1]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,reduceLeft: function(f) {
		var value = this.get_head();
		var p = this._tail;
		while(p.get_nonEmpty()) {
			value = f(value,p.get_head());
			p = p.get_tail();
		}
		return funk.option.Option.Some(value);
	}
	,reduceRight: function(f) {
		var buffer = this.get_toArray();
		var value = buffer.pop();
		var n = buffer.length;
		while(--n > -1) value = f(value,buffer[n]);
		return funk.option.Option.Some(value);
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var buffer = new Array();
		var m = n - 1;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		n = this.get_size() - n;
		if(n <= 0) return this;
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			p = p.get_tail();
		}
		return p;
	}
	,takeWhile: function(f) {
		var buffer = new Array();
		var p = this;
		var n = 0;
		while(p.get_nonEmpty()) if(f(p.get_head())) {
			buffer[n++] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		} else break;
		var m = n - 1;
		if(m <= 0) return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,zip: function(that) {
		var n = Math.min(this.get_size(),that.get_size()) | 0;
		var m = n - 1;
		var buffer = new Array();
		var p = this;
		var q = that;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.List((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(p.get_head(),q.get_head()));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)),null);
			p = p.get_tail();
			q = q.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,findIndexOf: function(f) {
		var index = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(f(p.get_head())) return index;
			p = p.get_tail();
			index += 1;
		}
		return -1;
	}
	,indexOf: function(value) {
		var index = 0;
		var p = this;
		while(p.get_nonEmpty()) {
			if(funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(p.get_head()),value)) return index;
			p = p.get_tail();
			index += 1;
		}
		return -1;
	}
	,prependIterator: function(iterator) {
		return this.prependAll(funk.collections.IteratorUtil.toList(iterator));
	}
	,prependIterable: function(iterable) {
		return this.prependAll(funk.collections.IteratorUtil.toList(iterable.iterator()));
	}
	,append: function(value) {
		var n = this.get_size();
		var buffer = new Array();
		var p = this;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[n] = new funk.collections.immutable.List(value,(function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this)));
		var j = 1;
		var _g = 0;
		while(_g < n) {
			var i1 = _g++;
			buffer[i1]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,appendAll: function(value) {
		var n = this.get_size();
		var m = n - 1;
		var buffer = new Array();
		var p = this;
		var i = 0;
		while(p.get_nonEmpty()) {
			buffer[i++] = new funk.collections.immutable.List(p.get_head(),null);
			p = p.get_tail();
		}
		buffer[m]._tail = value;
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i1 = _g++;
			buffer[i1]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,appendIterator: function(iterator) {
		return this.appendAll(funk.collections.IteratorUtil.toList(iterator));
	}
	,appendIterable: function(iterable) {
		return this.appendAll(funk.collections.IteratorUtil.toList(iterable.iterator()));
	}
	,productElement: function(i) {
		var p = this;
		while(p.get_nonEmpty()) {
			if(i == 0) return p.get_head();
			p = p.get_tail();
			i -= 1;
		}
		throw new funk.errors.NoSuchElementError(null,{ fileName : "List.hx", lineNumber : 678, className : "funk.collections.immutable.List", methodName : "productElement"});
	}
	,iterator: function() {
		return new funk.collections.immutable.ListIterator(this);
	}
	,get_nonEmpty: function() {
		return true;
	}
	,get_isEmpty: function() {
		return false;
	}
	,get_head: function() {
		return this._head;
	}
	,get_headOption: function() {
		return funk.option.Option.Some(this._head);
	}
	,get_indices: function() {
		var n = this.get_size();
		var p = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		while(--n > -1) p = p.prepend(n);
		return p;
	}
	,get_init: function() {
		return this.dropRight(1);
	}
	,get_last: function() {
		var p = this;
		var value = funk.option.Option.None;
		while(p.get_nonEmpty()) {
			value = p.get_headOption();
			p = p.get_tail();
		}
		return value;
	}
	,get_reverse: function() {
		var result = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var p = this;
		while(p.get_nonEmpty()) {
			result = result.prepend(p.get_head());
			p = p.get_tail();
		}
		return result;
	}
	,get_tail: function() {
		return this._tail;
	}
	,get_tailOption: function() {
		return funk.option.Option.Some(this._tail);
	}
	,get_zipWithIndex: function() {
		var n = this.get_size();
		var m = n - 1;
		var buffer = new Array();
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer[i] = new funk.collections.immutable.List((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(p.get_head(),i));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)),null);
			p = p.get_tail();
		}
		buffer[m]._tail = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var j = 1;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			buffer[i]._tail = buffer[j];
			j++;
		}
		return buffer[0];
	}
	,get_size: function() {
		if(this._lengthKnown) return this._length;
		var p = this;
		var length = 0;
		while(p.get_nonEmpty()) {
			++length;
			p = p.get_tail();
		}
		this._length = length;
		this._lengthKnown = true;
		return length;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		var n = this.get_size();
		var array = new Array();
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			array[i] = p.get_head();
			p = p.get_tail();
		}
		return array;
	}
	,get_flatten: function() {
		return this.flatMap(function(x) {
			return Std["is"](x,funk.collections.IList)?x:x.toList();
		});
	}
	,get_productArity: function() {
		return this.get_size();
	}
	,get_productPrefix: function() {
		return "List";
	}
	,__class__: funk.collections.immutable.List
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_flatten:"get_flatten",get_toArray:"get_toArray",get_hasDefinedSize:"get_hasDefinedSize",get_size:"get_size",get_zipWithIndex:"get_zipWithIndex",get_tailOption:"get_tailOption",get_tail:"get_tail",get_reverse:"get_reverse",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_indices:"get_indices",get_headOption:"get_headOption",get_head:"get_head",get_nonEmpty:"get_nonEmpty"})
});
funk.collections.immutable.ListIterator = function(l) {
	funk.product.Product.call(this);
	this._list = l;
};
$hxClasses["funk.collections.immutable.ListIterator"] = funk.collections.immutable.ListIterator;
funk.collections.immutable.ListIterator.__name__ = ["funk","collections","immutable","ListIterator"];
funk.collections.immutable.ListIterator.__interfaces__ = [funk.product.IProductIterator,funk.IFunkObject];
funk.collections.immutable.ListIterator.__super__ = funk.product.Product;
funk.collections.immutable.ListIterator.prototype = $extend(funk.product.Product.prototype,{
	_list: null
	,hasNext: function() {
		return this._list == null?false:this._list.get_nonEmpty();
	}
	,next: function() {
		return this._list == (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this))?(function($this) {
			var $r;
			throw new funk.errors.NoSuchElementError(null,{ fileName : "ListIterator.hx", lineNumber : 33, className : "funk.collections.immutable.ListIterator", methodName : "next"});
			return $r;
		}(this)):(function($this) {
			var $r;
			var head = $this._list.get_head();
			$this._list = $this._list.get_tail();
			$r = head;
			return $r;
		}(this));
	}
	,nextOption: function() {
		return this._list == (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this))?funk.option.Option.None:(function($this) {
			var $r;
			var head = $this._list.get_headOption();
			$this._list = $this._list.get_tail();
			$r = head;
			return $r;
		}(this));
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		return this._list.productElement(index);
	}
	,get_productArity: function() {
		return this._list.get_size();
	}
	,get_productPrefix: function() {
		return "ListIterator";
	}
	,__class__: funk.collections.immutable.ListIterator
});
funk.collections.immutable.ListIteratorType = function() { }
$hxClasses["funk.collections.immutable.ListIteratorType"] = funk.collections.immutable.ListIteratorType;
funk.collections.immutable.ListIteratorType.__name__ = ["funk","collections","immutable","ListIteratorType"];
funk.collections.immutable.ListIteratorType.toArray = function(iter) {
	return funk.collections.IteratorUtil.toArray(iter);
}
funk.collections.immutable.ListIteratorType.toList = function(iter) {
	return funk.collections.IteratorUtil.toList(iter);
}
funk.collections.immutable.ListIteratorType.prototype = {
	__class__: funk.collections.immutable.ListIteratorType
}
funk.collections.immutable.ListUtil = function() { }
$hxClasses["funk.collections.immutable.ListUtil"] = funk.collections.immutable.ListUtil;
funk.collections.immutable.ListUtil.__name__ = ["funk","collections","immutable","ListUtil"];
funk.collections.immutable.ListUtil.fill = function(n,f) {
	var l = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	while(--n > -1) l = l.prepend(f());
	return l;
}
funk.collections.immutable.ListUtil.toList = function(any) {
	var l = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	var n;
	if(Std["is"](any,funk.collections.IList)) return any; else if(Std["is"](any,Array)) {
		var array = any;
		n = array.length;
		while(--n > -1) l = l.prepend(array[n]);
	} else if(Std["is"](any,String)) {
		var string = any;
		n = string.length;
		while(--n > -1) l = l.prepend(string.substr(n,1));
	} else l = l.prepend(any);
	return l;
}
funk.collections.immutable.ListUtil.prototype = {
	__class__: funk.collections.immutable.ListUtil
}
funk.collections.immutable.NilEnum = $hxClasses["funk.collections.immutable.NilEnum"] = { __ename__ : ["funk","collections","immutable","NilEnum"], __constructs__ : ["nil"] }
funk.collections.immutable.NilEnum.nil = ["nil",0];
funk.collections.immutable.NilEnum.nil.toString = $estr;
funk.collections.immutable.NilEnum.nil.__enum__ = funk.collections.immutable.NilEnum;
funk.collections.immutable.ListFactory = function() {
};
$hxClasses["funk.collections.immutable.ListFactory"] = funk.collections.immutable.ListFactory;
funk.collections.immutable.ListFactory.__name__ = ["funk","collections","immutable","ListFactory"];
funk.collections.immutable.ListFactory.__interfaces__ = [funk.collections.IListFactory];
funk.collections.immutable.ListFactory.prototype = {
	createList: function(value,tail) {
		return new funk.collections.immutable.List(value,tail);
	}
	,createNilList: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,createNil: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,__class__: funk.collections.immutable.ListFactory
}
funk.collections.immutable.SetFactory = function() {
};
$hxClasses["funk.collections.immutable.SetFactory"] = funk.collections.immutable.SetFactory;
funk.collections.immutable.SetFactory.__name__ = ["funk","collections","immutable","SetFactory"];
funk.collections.immutable.SetFactory.__interfaces__ = [funk.collections.ISetFactory];
funk.collections.immutable.SetFactory.prototype = {
	createSet: function(value,tail) {
		return new funk.collections.immutable.HashMap(value,tail);
	}
	,createNilSet: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
	}
	,createNil: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
	}
	,__class__: funk.collections.immutable.SetFactory
}
funk.collections.immutable.NilType = function() { }
$hxClasses["funk.collections.immutable.NilType"] = funk.collections.immutable.NilType;
funk.collections.immutable.NilType.__name__ = ["funk","collections","immutable","NilType"];
funk.collections.immutable.NilType.list = function(n) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
}
funk.collections.immutable.NilType.set = function(n) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilSet;
			break;
		}
		return $r;
	}(this));
}
funk.collections.immutable.NilType.eq = function(n,value) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = Std["is"](value,funk.collections.IList)?funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(n),value):Std["is"](value,funk.collections.ISet)?funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(n),value):false;
			break;
		}
		return $r;
	}(this));
}
funk.collections.immutable.NilType.prototype = {
	__class__: funk.collections.immutable.NilType
}
funk.collections.mutable = {}
funk.collections.mutable.HashMap = function() {
	funk.product.Product.call(this);
	this._keys = new IntHash();
	this._values = new IntHash();
	this._length = 0;
};
$hxClasses["funk.collections.mutable.HashMap"] = funk.collections.mutable.HashMap;
funk.collections.mutable.HashMap.__name__ = ["funk","collections","mutable","HashMap"];
funk.collections.mutable.HashMap.__interfaces__ = [funk.collections.ISet];
funk.collections.mutable.HashMap.__super__ = funk.product.Product;
funk.collections.mutable.HashMap.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,flatten: null
	,hasDefinedSize: null
	,head: null
	,headOption: null
	,init: null
	,isEmpty: null
	,last: null
	,size: null
	,tail: null
	,tailOption: null
	,toArray: null
	,zipWithIndex: null
	,_keys: null
	,_values: null
	,_length: null
	,contains: function(value) {
		var $it0 = this._keys.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(i == value) return true;
		}
		return false;
	}
	,count: function(f) {
		var n = 0;
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			if(f(this._keys.get(i),this._values.get(i))) n++;
		}
		return n;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			if(n == 0) break;
			this._keys.remove(i);
			this._values.remove(i);
			n -= 1;
			this._length -= 1;
		}
		return this;
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(0 == n) return this;
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		keys.reverse();
		var _g = 0;
		while(_g < keys.length) {
			var i = keys[_g];
			++_g;
			if(n == 0) break;
			this._keys.remove(i);
			this._values.remove(i);
			n -= 1;
			this._length -= 1;
		}
		return this;
	}
	,dropWhile: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			if(f(this._keys.get(i),this._values.get(i))) {
				this._keys.remove(i);
				this._values.remove(i);
				this._length -= 1;
			} else break;
		}
		return this;
	}
	,exists: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			if(f(this._keys.get(i),this._values.get(i))) return true;
		}
		return false;
	}
	,filter: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			var k = this._keys.get(i);
			var v = this._values.get(i);
			if(!f(k,v)) {
				this._keys.remove(i);
				this._values.remove(i);
				this._length -= 1;
			}
		}
		return this;
	}
	,filterNot: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			var k = this._keys.get(i);
			var v = this._values.get(i);
			if(f(k,v)) {
				this._keys.remove(i);
				this._values.remove(i);
				this._length -= 1;
			}
		}
		return this;
	}
	,find: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			var k = this._keys.get(i);
			var v = this._values.get(i);
			if(f(k,v)) return funk.option.Option.Some((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(k,v));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		var buffer = new Array();
		var keys = this._keys.keys();
		var c = 0;
		while( keys.hasNext() ) {
			var i = keys.next();
			buffer[c++] = f((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		this._keys = new IntHash();
		this._values = new IntHash();
		this._length = 0;
		var n = buffer.length;
		while(--n > -1) this.addAll(buffer[n]);
		return this;
	}
	,foldLeft: function(x,f) {
		var value = x;
		var p = this;
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			value = f(value,(function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return value;
	}
	,foldRight: function(x,f) {
		var value = x;
		var p = this;
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		keys.reverse();
		var _g = 0;
		while(_g < keys.length) {
			var i = keys[_g];
			++_g;
			value = f(value,(function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return value;
	}
	,forall: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			if(!f(this._keys.get(i),this._values.get(i))) return false;
		}
		return true;
	}
	,foreach: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			f(this._keys.get(i),this._values.get(i));
		}
	}
	,get: function(index) {
		return funk.option.Option.Some(this.productElement(index));
	}
	,map: function(f) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			var t = f((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
			this._keys.set(i,t.get__1());
			this._values.set(i,t.get__2());
		}
		return this;
	}
	,partition: function(f) {
		var left = new funk.collections.mutable.HashMap();
		var right = new funk.collections.mutable.HashMap();
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			var k = this._keys.get(i);
			var v = this._values.get(i);
			if(f(k,v)) {
				left._keys.set(left._length,k);
				left._values.set(left._length,v);
				left._length++;
			} else {
				right._keys.set(right._length,k);
				right._values.set(right._length,v);
				right._length++;
			}
		}
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(left.get_size() == 0?(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}($this)):left,right.get_size() == 0?(function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilSet;
					break;
				}
				return $r;
			}($this)):right));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,equals: function(that) {
		return Std["is"](that,funk.collections.ISet)?funk.product.Product.prototype.equals.call(this,that):false;
	}
	,add: function(key,value) {
		this._keys.set(this._length,key);
		this._values.set(this._length,value);
		this._length++;
		return this;
	}
	,addAll: function(value) {
		var n = value.get_size();
		if(0 == n) return this;
		var n1 = value.get_size();
		var _g = 0;
		while(_g < n1) {
			var i = _g++;
			var $e = (value.get(i));
			switch( $e[1] ) {
			case 0:
				break;
			case 1:
				var x = $e[2];
				this._keys.set(this._length,x.get__1());
				this._values.set(this._length,x.get__2());
				this._length++;
				break;
			}
		}
		return this;
	}
	,reduceLeft: function(f) {
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		var key = keys.shift();
		var value = (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
		var _g = 0;
		while(_g < keys.length) {
			var i = keys[_g];
			++_g;
			value = f(value,(function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return funk.option.Option.Some(value);
	}
	,reduceRight: function(f) {
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		keys.reverse();
		var key = keys.shift();
		var value = (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
		var _g = 0;
		while(_g < keys.length) {
			var i = keys[_g];
			++_g;
			value = f(value,(function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return funk.option.Option.Some(value);
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return this;
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		keys.reverse();
		var index = this.get_size() - n;
		while(--index > -1) {
			this._keys.remove(keys[index]);
			this._values.remove(keys[index]);
			this._length--;
		}
		return this;
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		if(n > this.get_size()) return this; else if(0 == n) return this;
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		var index = this.get_size() - n;
		while(--index > -1) {
			this._keys.remove(keys[index]);
			this._values.remove(keys[index]);
			this._length--;
		}
		return this;
	}
	,takeWhile: function(f) {
		var buffer = new Array();
		var keys = funk.collections.IteratorUtil.toArray(this._keys.keys());
		var c = 0;
		var _g = 0;
		while(_g < keys.length) {
			var i = keys[_g];
			++_g;
			var k = this._keys.get(i);
			var v = this._values.get(i);
			var t = (function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(k,v));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this));
			if(f(t)) buffer[c++] = t; else break;
		}
		this._keys = new IntHash();
		this._values = new IntHash();
		this._length = 0;
		var _g = 0;
		while(_g < buffer.length) {
			var tuple = buffer[_g];
			++_g;
			this._keys.set(this._length,tuple.get__1());
			this._values.set(this._length,tuple.get__2());
			this._length++;
		}
		return this;
	}
	,zip: function(that) {
		var n = Math.min(this.get_size(),that.get_size()) | 0;
		var buffer = new funk.collections.mutable.HashMap();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			buffer.add((function($this) {
				var $r;
				var $e = ($this.get(i));
				switch( $e[1] ) {
				case 1:
					var value = $e[2];
					$r = value;
					break;
				case 0:
					$r = (function($this) {
						var $r;
						throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
						return $r;
					}($this));
					break;
				}
				return $r;
			}(this)),(function($this) {
				var $r;
				var $e = (that.get(i));
				switch( $e[1] ) {
				case 1:
					var value = $e[2];
					$r = value;
					break;
				case 0:
					$r = (function($this) {
						var $r;
						throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
						return $r;
					}($this));
					break;
				}
				return $r;
			}(this)));
		}
		return buffer;
	}
	,addIterator: function(iterator) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterator));
	}
	,addIterable: function(iterable) {
		return this.addAll(funk.collections.IteratorUtil.toSet(iterable.iterator()));
	}
	,productElement: function(i) {
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var key = keys.next();
			if(i == 0) return (function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this));
			i -= 1;
		}
		throw new funk.errors.NoSuchElementError(null,{ fileName : "HashMap.hx", lineNumber : 457, className : "funk.collections.mutable.HashMap", methodName : "productElement"});
	}
	,get_nonEmpty: function() {
		return true;
	}
	,get_isEmpty: function() {
		return false;
	}
	,get_head: function() {
		var keys = this._keys.keys();
		var key = keys.hasNext()?keys.next():null;
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,get_headOption: function() {
		return this.get_size() == 0?funk.option.Option.None:(function($this) {
			var $r;
			var keys = $this._keys.keys();
			var key = keys.hasNext()?keys.next():null;
			$r = funk.option.Option.Some((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}($this)));
			return $r;
		}(this));
	}
	,get_init: function() {
		return this.dropRight(1);
	}
	,get_last: function() {
		return this.get_size() == 0?funk.option.Option.None:(function($this) {
			var $r;
			var value = funk.option.Option.None;
			var keys = $this._keys.keys();
			var key = 0;
			while(keys.hasNext()) key = keys.next();
			$r = funk.option.Option.Some((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(key),$this._values.get(key)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}($this)));
			return $r;
		}(this));
	}
	,get_tail: function() {
		var keys = this._keys.keys();
		if(keys.hasNext()) keys.next();
		var s = new funk.collections.mutable.HashMap();
		while( keys.hasNext() ) {
			var i = keys.next();
			s.add(this._keys.get(i),this._values.get(i));
		}
		return s;
	}
	,get_tailOption: function() {
		return this.get_size() == 0?funk.option.Option.None:(function($this) {
			var $r;
			var keys = $this._keys.keys();
			if(keys.hasNext()) keys.next();
			var s = new funk.collections.mutable.HashMap();
			while( keys.hasNext() ) {
				var i = keys.next();
				s.add($this._keys.get(i),$this._values.get(i));
			}
			$r = funk.option.Option.Some(s);
			return $r;
		}(this));
	}
	,get_zipWithIndex: function() {
		var buffer = new funk.collections.mutable.HashMap();
		var c = 0;
		var keys = this._keys.keys();
		while( keys.hasNext() ) {
			var i = keys.next();
			buffer.add((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._keys.get(i),$this._values.get(i)));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)),c);
			c++;
		}
		return buffer;
	}
	,get_size: function() {
		return this._length;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		var array = new Array();
		var $it0 = this._values.iterator();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			array.push(i);
		}
		return array;
	}
	,get_flatten: function() {
		return this.flatMap(function(x) {
			return Std["is"](x,funk.collections.ISet)?x:x.toSet();
		});
	}
	,get_iterator: function() {
		return new funk.collections.mutable.HashMapIterator(this);
	}
	,get_productArity: function() {
		return this.get_size();
	}
	,get_productPrefix: function() {
		return "HashMap";
	}
	,__class__: funk.collections.mutable.HashMap
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_zipWithIndex:"get_zipWithIndex",get_toArray:"get_toArray",get_tailOption:"get_tailOption",get_tail:"get_tail",get_size:"get_size",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_headOption:"get_headOption",get_head:"get_head",get_hasDefinedSize:"get_hasDefinedSize",get_flatten:"get_flatten",get_nonEmpty:"get_nonEmpty"})
});
funk.collections.mutable.HashMapIterator = function(s) {
	funk.product.Product.call(this);
	var mutable = s;
	this._keys = funk.collections.IteratorUtil.toArray(mutable._keys.keys());
	this._setKeys = mutable._keys;
	this._setValues = mutable._values;
	this._pointer = this._keys.length - 1;
	this._set = s;
};
$hxClasses["funk.collections.mutable.HashMapIterator"] = funk.collections.mutable.HashMapIterator;
funk.collections.mutable.HashMapIterator.__name__ = ["funk","collections","mutable","HashMapIterator"];
funk.collections.mutable.HashMapIterator.__interfaces__ = [funk.product.IProductIterator,funk.IFunkObject];
funk.collections.mutable.HashMapIterator.__super__ = funk.product.Product;
funk.collections.mutable.HashMapIterator.prototype = $extend(funk.product.Product.prototype,{
	_keys: null
	,_setKeys: null
	,_setValues: null
	,_pointer: null
	,_set: null
	,hasNext: function() {
		return this._pointer >= 0;
	}
	,next: function() {
		return this._pointer < 0?(function($this) {
			var $r;
			throw new funk.errors.NoSuchElementError(null,{ fileName : "HashMapIterator.hx", lineNumber : 57, className : "funk.collections.mutable.HashMapIterator", methodName : "next"});
			return $r;
		}(this)):(function($this) {
			var $r;
			var key = $this._keys[$this._pointer];
			var k = $this._setKeys.get(key);
			var v = $this._setValues.get(key);
			var head = (function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(k,v));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}($this));
			$this._pointer--;
			$r = head;
			return $r;
		}(this));
	}
	,nextOption: function() {
		return this._set == (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this))?funk.option.Option.None:(function($this) {
			var $r;
			var key = $this._keys[$this._pointer];
			var k = $this._setKeys.get(key);
			var v = $this._setValues.get(key);
			var head = (function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2(k,v));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}($this));
			$this._pointer--;
			$r = funk.option.Option.Some(head);
			return $r;
		}(this));
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		return this._set.productElement(index);
	}
	,get_productArity: function() {
		return this._keys.length;
	}
	,get_productPrefix: function() {
		return "HashMapIterator";
	}
	,__class__: funk.collections.mutable.HashMapIterator
});
funk.collections.mutable.HashMapIteratorType = function() { }
$hxClasses["funk.collections.mutable.HashMapIteratorType"] = funk.collections.mutable.HashMapIteratorType;
funk.collections.mutable.HashMapIteratorType.__name__ = ["funk","collections","mutable","HashMapIteratorType"];
funk.collections.mutable.HashMapIteratorType.toArray = function(iter) {
	return funk.collections.IteratorUtil.toArray(iter);
}
funk.collections.mutable.HashMapIteratorType.toList = function(iter) {
	return funk.collections.IteratorUtil.toList(iter);
}
funk.collections.mutable.HashMapIteratorType.prototype = {
	__class__: funk.collections.mutable.HashMapIteratorType
}
funk.collections.mutable.List = function() {
	funk.product.Product.call(this);
	this._data = new Array();
};
$hxClasses["funk.collections.mutable.List"] = funk.collections.mutable.List;
funk.collections.mutable.List.__name__ = ["funk","collections","mutable","List"];
funk.collections.mutable.List.__interfaces__ = [funk.collections.IList];
funk.collections.mutable.List.__super__ = funk.product.Product;
funk.collections.mutable.List.prototype = $extend(funk.product.Product.prototype,{
	nonEmpty: null
	,head: null
	,headOption: null
	,indices: null
	,init: null
	,isEmpty: null
	,last: null
	,reverse: null
	,tail: null
	,tailOption: null
	,zipWithIndex: null
	,size: null
	,hasDefinedSize: null
	,toArray: null
	,flatten: null
	,_data: null
	,contains: function(value) {
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(this._data[i]),value)) return true;
		}
		return false;
	}
	,count: function(f) {
		var n = 0;
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(f(this._data[i])) n++;
		}
		return n;
	}
	,drop: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		this._data.splice(0,Math.min(n,this.get_size()) | 0);
		return this._data.length == 0?(function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this)):this;
	}
	,dropRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		this._data.splice(this._data.length - n,this._data.length);
		return this;
	}
	,dropWhile: function(f) {
		var total = this._data.length;
		var index = total;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(!f(this._data[i])) break;
			index--;
		}
		this._data.splice(0,this._data.length - index);
		return this;
	}
	,exists: function(f) {
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(f(this._data[i])) return true;
		}
		return false;
	}
	,filter: function(f) {
		var total = this._data.length;
		var q = new Array();
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(!f(this._data[i])) q.push(i);
		}
		var index = q.length;
		while(--index > -1) this._data.splice(q[index],1);
		return this;
	}
	,filterNot: function(f) {
		var total = this._data.length;
		var q = new Array();
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(f(this._data[i])) q.push(i);
		}
		var index = q.length;
		while(--index > -1) this._data.splice(q[index],1);
		return this;
	}
	,find: function(f) {
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(f(this._data[i])) return funk.option.Option.Some(this._data[i]);
		}
		return funk.option.Option.None;
	}
	,flatMap: function(f) {
		var total = this._data.length;
		var buffer = new Array();
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			buffer.push(f(this._data[i]));
		}
		this._data.splice(0,this._data.length);
		var n = buffer.length;
		while(--n > -1) this.prependAll(buffer[n]);
		return this;
	}
	,foldLeft: function(x,f) {
		var value = x;
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			value = f(value,this._data[i]);
		}
		return value;
	}
	,foldRight: function(x,f) {
		return x;
	}
	,forall: function(f) {
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(!f(this._data[i])) return false;
		}
		return true;
	}
	,foreach: function(f) {
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			f(this._data[i]);
		}
	}
	,get: function(index) {
		return funk.option.Option.Some(this.productElement(index));
	}
	,map: function(f) {
		var l = new funk.collections.mutable.List();
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			l._data[i] = f(this._data[i]);
		}
		return l;
	}
	,partition: function(f) {
		var left = new funk.collections.mutable.List();
		var right = new funk.collections.mutable.List();
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			var item = this._data[i];
			if(f(item)) left._data[left._data.length] = item; else right._data[right._data.length] = item;
		}
		var m = left.get_size();
		var o = right.get_size();
		return (function($this) {
			var $r;
			var $e = (funk.tuple.Tuple2.tuple2(m > 0?left:(function($this) {
				var $r;
				switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.mutable.NilType._nilList;
					break;
				}
				return $r;
			}($this)),o > 0?right:(function($this) {
				var $r;
				switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.mutable.NilType._nilList;
					break;
				}
				return $r;
			}($this))));
			switch( $e[1] ) {
			case 0:
				var b = $e[3], a = $e[2];
				$r = new funk.tuple.Tuple2Impl(a,b);
				break;
			}
			return $r;
		}(this));
	}
	,equals: function(that) {
		return Std["is"](that,funk.collections.IList)?funk.product.Product.prototype.equals.call(this,that):false;
	}
	,prepend: function(value) {
		this._data.unshift(value);
		return this;
	}
	,prependAll: function(value) {
		var n = value.get_size();
		if(0 == n) return this;
		var iter = value.iterator();
		while( iter.hasNext() ) {
			var i = iter.next();
			this._data.unshift(i);
		}
		return this;
	}
	,reduceLeft: function(f) {
		var value = this.get_head();
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			value = f(value,this._data[i]);
		}
		return funk.option.Option.Some(value);
	}
	,reduceRight: function(f) {
		var value = this._data[this._data.length - 1];
		var index = this._data.length - 1;
		while(--index > -1) value = f(value,this._data[index]);
		return funk.option.Option.Some(value);
	}
	,take: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		var m = Math.min(n,this.get_size()) | 0;
		this._data = this._data.splice(0,m);
		return this;
	}
	,takeRight: function(n) {
		if(!(n >= 0)) {
			var $e = (funk.util.Require.require("n must be positive."));
			switch( $e[1] ) {
			case 0:
				var message = $e[2];
				throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
				break;
			}
		}
		var m = Math.min(n,this.get_size()) | 0;
		this._data = this._data.splice(this._data.length - m,m);
		return this;
	}
	,takeWhile: function(f) {
		var buffer = new Array();
		var n = this.get_size();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			var item = this._data[i];
			if(f(item)) buffer.push(item); else break;
		}
		this._data = buffer;
		return this;
	}
	,zip: function(that) {
		var l = (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var n = Math.min(this.get_size(),that.get_size()) | 0;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			l.append((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._data[i],(function($this) {
					var $r;
					var $e = (that.get(i));
					switch( $e[1] ) {
					case 1:
						var value = $e[2];
						$r = value;
						break;
					case 0:
						$r = (function($this) {
							var $r;
							throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
							return $r;
						}($this));
						break;
					}
					return $r;
				}($this))));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return l;
	}
	,findIndexOf: function(f) {
		var index = 0;
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(f(this._data[i])) return index;
			index += 1;
		}
		return -1;
	}
	,indexOf: function(value) {
		var index = 0;
		var total = this._data.length;
		var _g = 0;
		while(_g < total) {
			var i = _g++;
			if(funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(this._data[i]),value)) return index;
			index += 1;
		}
		return -1;
	}
	,prependIterator: function(iterator) {
		return this.prependAll(funk.collections.IteratorUtil.toList(iterator));
	}
	,prependIterable: function(iterable) {
		return this.prependAll(funk.collections.IteratorUtil.toList(iterable.iterator()));
	}
	,append: function(value) {
		this._data.push(value);
		return this;
	}
	,appendAll: function(value) {
		var total = value.get_size();
		var iter = value.iterator();
		while( iter.hasNext() ) {
			var i = iter.next();
			this._data.push(i);
		}
		return this;
	}
	,appendIterator: function(iterator) {
		return this.appendAll(funk.collections.IteratorUtil.toList(iterator));
	}
	,appendIterable: function(iterable) {
		return this.appendAll(funk.collections.IteratorUtil.toList(iterable.iterator()));
	}
	,productElement: function(i) {
		if(i >= 0 && i < this.get_size()) return this._data[i];
		throw new funk.errors.NoSuchElementError(null,{ fileName : "List.hx", lineNumber : 412, className : "funk.collections.mutable.List", methodName : "productElement"});
	}
	,iterator: function() {
		return new funk.collections.mutable.ListIterator(this);
	}
	,get_nonEmpty: function() {
		return this.get_size() > 0;
	}
	,get_isEmpty: function() {
		return this.get_size() == 0;
	}
	,get_head: function() {
		return this._data[0];
	}
	,get_headOption: function() {
		return funk.option.Option.Some(this._data[0]);
	}
	,get_indices: function() {
		var n = this.get_size();
		var p = (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		while(--n > -1) p = p.prepend(n);
		return p;
	}
	,get_init: function() {
		return this.dropRight(1);
	}
	,get_last: function() {
		var l = this._data.length;
		return l == 0?funk.option.Option.None:funk.option.Option.Some(this._data[this._data.length - 1]);
	}
	,get_reverse: function() {
		this._data.reverse();
		return this;
	}
	,get_tail: function() {
		var l = new funk.collections.mutable.List();
		if(this._data.length > 1) l._data = this._data.slice(1);
		return l;
	}
	,get_tailOption: function() {
		var l = new funk.collections.mutable.List();
		return this._data.length > 1?(function($this) {
			var $r;
			l._data = $this._data.slice(1);
			$r = funk.option.Option.Some(l);
			return $r;
		}(this)):funk.option.Option.None;
	}
	,get_zipWithIndex: function() {
		var l = (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var n = this.get_size();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			l.append((function($this) {
				var $r;
				var $e = (funk.tuple.Tuple2.tuple2($this._data[i],i));
				switch( $e[1] ) {
				case 0:
					var b = $e[3], a = $e[2];
					$r = new funk.tuple.Tuple2Impl(a,b);
					break;
				}
				return $r;
			}(this)));
		}
		return l;
	}
	,get_size: function() {
		return this._data.length;
	}
	,get_hasDefinedSize: function() {
		return true;
	}
	,get_toArray: function() {
		var n = this.get_size();
		var array = new Array();
		var p = this;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			array[i] = p.get_head();
			p = p.get_tail();
		}
		return array;
	}
	,get_flatten: function() {
		return this.flatMap(function(x) {
			return Std["is"](x,funk.collections.IList)?x:x.toList();
		});
	}
	,get_productArity: function() {
		return this.get_size();
	}
	,get_productPrefix: function() {
		return "List";
	}
	,__class__: funk.collections.mutable.List
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_flatten:"get_flatten",get_toArray:"get_toArray",get_hasDefinedSize:"get_hasDefinedSize",get_size:"get_size",get_zipWithIndex:"get_zipWithIndex",get_tailOption:"get_tailOption",get_tail:"get_tail",get_reverse:"get_reverse",get_last:"get_last",get_isEmpty:"get_isEmpty",get_init:"get_init",get_indices:"get_indices",get_headOption:"get_headOption",get_head:"get_head",get_nonEmpty:"get_nonEmpty"})
});
funk.collections.mutable.ListIterator = function(l) {
	funk.product.Product.call(this);
	var mutable = l;
	this._array = mutable._data;
	this._pointer = this._array.length - 1;
};
$hxClasses["funk.collections.mutable.ListIterator"] = funk.collections.mutable.ListIterator;
funk.collections.mutable.ListIterator.__name__ = ["funk","collections","mutable","ListIterator"];
funk.collections.mutable.ListIterator.__interfaces__ = [funk.product.IProductIterator,funk.IFunkObject];
funk.collections.mutable.ListIterator.__super__ = funk.product.Product;
funk.collections.mutable.ListIterator.prototype = $extend(funk.product.Product.prototype,{
	_array: null
	,_pointer: null
	,hasNext: function() {
		return this._pointer >= 0;
	}
	,next: function() {
		return this._pointer < 0?(function($this) {
			var $r;
			throw new funk.errors.NoSuchElementError(null,{ fileName : "ListIterator.hx", lineNumber : 39, className : "funk.collections.mutable.ListIterator", methodName : "next"});
			return $r;
		}(this)):this._array[this._pointer--];
	}
	,nextOption: function() {
		return this._pointer < 0?funk.option.Option.None:funk.option.Option.Some(this._array[this._pointer--]);
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		if(index >= 0 && index < this._array.length) return this._array[index];
		throw new funk.errors.NoSuchElementError(null,{ fileName : "ListIterator.hx", lineNumber : 62, className : "funk.collections.mutable.ListIterator", methodName : "productElement"});
	}
	,get_productArity: function() {
		return this._array.length;
	}
	,get_productPrefix: function() {
		return "ListIterator";
	}
	,__class__: funk.collections.mutable.ListIterator
});
funk.collections.mutable.ListIteratorType = function() { }
$hxClasses["funk.collections.mutable.ListIteratorType"] = funk.collections.mutable.ListIteratorType;
funk.collections.mutable.ListIteratorType.__name__ = ["funk","collections","mutable","ListIteratorType"];
funk.collections.mutable.ListIteratorType.toArray = function(iter) {
	return funk.collections.IteratorUtil.toArray(iter);
}
funk.collections.mutable.ListIteratorType.toList = function(iter) {
	return funk.collections.IteratorUtil.toList(iter);
}
funk.collections.mutable.ListIteratorType.prototype = {
	__class__: funk.collections.mutable.ListIteratorType
}
funk.collections.mutable.ListUtil = function() { }
$hxClasses["funk.collections.mutable.ListUtil"] = funk.collections.mutable.ListUtil;
funk.collections.mutable.ListUtil.__name__ = ["funk","collections","mutable","ListUtil"];
funk.collections.mutable.ListUtil.toList = function(any) {
	var l = (function($this) {
		var $r;
		switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.mutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	var n;
	if(Std["is"](any,funk.collections.IList)) return any; else if(Std["is"](any,Array)) {
		var array = any;
		n = array.length;
		while(--n > -1) l = l.prepend(array[n]);
	} else if(Std["is"](any,String)) {
		var string = any;
		n = string.length;
		while(--n > -1) l = l.prepend(string.substr(n,1));
	} else l = l.prepend(any);
	return l;
}
funk.collections.mutable.ListUtil.prototype = {
	__class__: funk.collections.mutable.ListUtil
}
funk.collections.mutable.NilEnum = $hxClasses["funk.collections.mutable.NilEnum"] = { __ename__ : ["funk","collections","mutable","NilEnum"], __constructs__ : ["nil"] }
funk.collections.mutable.NilEnum.nil = ["nil",0];
funk.collections.mutable.NilEnum.nil.toString = $estr;
funk.collections.mutable.NilEnum.nil.__enum__ = funk.collections.mutable.NilEnum;
funk.collections.mutable.ListFactory = function() {
};
$hxClasses["funk.collections.mutable.ListFactory"] = funk.collections.mutable.ListFactory;
funk.collections.mutable.ListFactory.__name__ = ["funk","collections","mutable","ListFactory"];
funk.collections.mutable.ListFactory.__interfaces__ = [funk.collections.IListFactory];
funk.collections.mutable.ListFactory.prototype = {
	createList: function(value,tail) {
		return new funk.collections.mutable.List().prepend(value);
	}
	,createNilList: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,createNil: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,__class__: funk.collections.mutable.ListFactory
}
funk.collections.mutable.SetFactory = function() {
};
$hxClasses["funk.collections.mutable.SetFactory"] = funk.collections.mutable.SetFactory;
funk.collections.mutable.SetFactory.__name__ = ["funk","collections","mutable","SetFactory"];
funk.collections.mutable.SetFactory.__interfaces__ = [funk.collections.ISetFactory];
funk.collections.mutable.SetFactory.prototype = {
	createSet: function(value,tail) {
		return new funk.collections.mutable.HashMap().add(value.get__1(),value.get__2());
	}
	,createNilSet: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
	}
	,createNil: function() {
		return (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilSet;
				break;
			}
			return $r;
		}(this));
	}
	,__class__: funk.collections.mutable.SetFactory
}
funk.collections.mutable.NilType = function() { }
$hxClasses["funk.collections.mutable.NilType"] = funk.collections.mutable.NilType;
funk.collections.mutable.NilType.__name__ = ["funk","collections","mutable","NilType"];
funk.collections.mutable.NilType.list = function(n) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = funk.collections.mutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
}
funk.collections.mutable.NilType.set = function(n) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = funk.collections.mutable.NilType._nilSet;
			break;
		}
		return $r;
	}(this));
}
funk.collections.mutable.NilType.eq = function(n,value) {
	return (function($this) {
		var $r;
		switch( (n)[1] ) {
		case 0:
			$r = Std["is"](value,funk.collections.IList)?funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(n),value):Std["is"](value,funk.collections.ISet)?funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(n),value):false;
			break;
		}
		return $r;
	}(this));
}
funk.collections.mutable.NilType.prototype = {
	__class__: funk.collections.mutable.NilType
}
funk.errors = {}
funk.errors.FunkError = function(message,info) {
	this.message = message;
	this.info = info;
	this.type = funk.util.Reflect.here({ fileName : "FunkError.hx", lineNumber : 17, className : "funk.errors.FunkError", methodName : "new"}).className;
};
$hxClasses["funk.errors.FunkError"] = funk.errors.FunkError;
funk.errors.FunkError.__name__ = ["funk","errors","FunkError"];
funk.errors.FunkError.prototype = {
	message: null
	,info: null
	,type: null
	,toString: function() {
		var str = this.type + ": " + this.message;
		if(this.info != null) str += " at " + this.info.className + "#" + this.info.methodName + " (" + this.info.lineNumber + ")";
		return str;
	}
	,__class__: funk.errors.FunkError
}
funk.errors.AbstractError = function(message,info) {
	funk.errors.FunkError.call(this,message,info);
};
$hxClasses["funk.errors.AbstractError"] = funk.errors.AbstractError;
funk.errors.AbstractError.__name__ = ["funk","errors","AbstractError"];
funk.errors.AbstractError.__super__ = funk.errors.FunkError;
funk.errors.AbstractError.prototype = $extend(funk.errors.FunkError.prototype,{
	__class__: funk.errors.AbstractError
});
funk.errors.AbstractMethodError = function(message,info) {
	funk.errors.AbstractError.call(this,message,info);
};
$hxClasses["funk.errors.AbstractMethodError"] = funk.errors.AbstractMethodError;
funk.errors.AbstractMethodError.__name__ = ["funk","errors","AbstractMethodError"];
funk.errors.AbstractMethodError.__super__ = funk.errors.AbstractError;
funk.errors.AbstractMethodError.prototype = $extend(funk.errors.AbstractError.prototype,{
	__class__: funk.errors.AbstractMethodError
});
funk.errors.ArgumentError = function(message,info) {
	funk.errors.FunkError.call(this,message,info);
};
$hxClasses["funk.errors.ArgumentError"] = funk.errors.ArgumentError;
funk.errors.ArgumentError.__name__ = ["funk","errors","ArgumentError"];
funk.errors.ArgumentError.__super__ = funk.errors.FunkError;
funk.errors.ArgumentError.prototype = $extend(funk.errors.FunkError.prototype,{
	__class__: funk.errors.ArgumentError
});
funk.errors.IllegalOperationError = function(message,info) {
	funk.errors.FunkError.call(this,message,info);
};
$hxClasses["funk.errors.IllegalOperationError"] = funk.errors.IllegalOperationError;
funk.errors.IllegalOperationError.__name__ = ["funk","errors","IllegalOperationError"];
funk.errors.IllegalOperationError.__super__ = funk.errors.FunkError;
funk.errors.IllegalOperationError.prototype = $extend(funk.errors.FunkError.prototype,{
	__class__: funk.errors.IllegalOperationError
});
funk.errors.NoSuchElementError = function(message,info) {
	funk.errors.FunkError.call(this,message,info);
};
$hxClasses["funk.errors.NoSuchElementError"] = funk.errors.NoSuchElementError;
funk.errors.NoSuchElementError.__name__ = ["funk","errors","NoSuchElementError"];
funk.errors.NoSuchElementError.__super__ = funk.errors.FunkError;
funk.errors.NoSuchElementError.prototype = $extend(funk.errors.FunkError.prototype,{
	__class__: funk.errors.NoSuchElementError
});
funk.errors.RangeError = function(message,info) {
	funk.errors.FunkError.call(this,message,info);
};
$hxClasses["funk.errors.RangeError"] = funk.errors.RangeError;
funk.errors.RangeError.__name__ = ["funk","errors","RangeError"];
funk.errors.RangeError.__super__ = funk.errors.FunkError;
funk.errors.RangeError.prototype = $extend(funk.errors.FunkError.prototype,{
	__class__: funk.errors.RangeError
});
funk.gui = {}
funk.gui.core = {}
funk.gui.core.display = {}
funk.gui.core.display.IComponentRenderManagerObserver = function() { }
$hxClasses["funk.gui.core.display.IComponentRenderManagerObserver"] = funk.gui.core.display.IComponentRenderManagerObserver;
funk.gui.core.display.IComponentRenderManagerObserver.__name__ = ["funk","gui","core","display","IComponentRenderManagerObserver"];
funk.gui.core.display.IComponentRenderManagerObserver.prototype = {
	onComponentRenderManagerUpdate: null
	,__class__: funk.gui.core.display.IComponentRenderManagerObserver
}
funk.gui.core.events = {}
funk.gui.core.events.IComponentEventManagerObserver = function() { }
$hxClasses["funk.gui.core.events.IComponentEventManagerObserver"] = funk.gui.core.events.IComponentEventManagerObserver;
funk.gui.core.events.IComponentEventManagerObserver.__name__ = ["funk","gui","core","events","IComponentEventManagerObserver"];
funk.gui.core.events.IComponentEventManagerObserver.prototype = {
	onComponentEventManagerUpdate: null
	,__class__: funk.gui.core.events.IComponentEventManagerObserver
}
funk.gui.core.events.IComponentEventTarget = function() { }
$hxClasses["funk.gui.core.events.IComponentEventTarget"] = funk.gui.core.events.IComponentEventTarget;
funk.gui.core.events.IComponentEventTarget.__name__ = ["funk","gui","core","events","IComponentEventTarget"];
funk.gui.core.events.IComponentEventTarget.prototype = {
	eventParent: null
	,addCaptureHook: null
	,removeCaptureHook: null
	,preCaptureEventTarget: null
	,captureEventTarget: null
	,processEvent: null
	,__class__: funk.gui.core.events.IComponentEventTarget
	,__properties__: {get_eventParent:"get_eventParent"}
}
funk.gui.core.IComponentRoot = function() { }
$hxClasses["funk.gui.core.IComponentRoot"] = funk.gui.core.IComponentRoot;
funk.gui.core.IComponentRoot.__name__ = ["funk","gui","core","IComponentRoot"];
funk.gui.core.IComponentRoot.__interfaces__ = [funk.gui.core.events.IComponentEventTarget];
funk.gui.core.IComponentRoot.prototype = {
	root: null
	,eventManager: null
	,renderManager: null
	,debug: null
	,addContainerObserver: null
	,removeContainerObserver: null
	,getComponentsIntersectsPoint: null
	,getComponentsIntersectsRectangle: null
	,invalidate: null
	,iterator: null
	,__class__: funk.gui.core.IComponentRoot
	,__properties__: {set_debug:"set_debug",get_debug:"get_debug",set_renderManager:"setRenderManager",set_eventManager:"setEventManager",get_root:"get_root"}
}
funk.gui.Root = function() {
	this._bounds = new funk.gui.core.geom.Rectangle(0,0,250,250);
	this._quadTree = new funk.gui.core.display.QuadTree(250,250);
	this._signal = new funk.signal.Signal1();
	this._captureHooks = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.gui.Root"] = funk.gui.Root;
funk.gui.Root.__name__ = ["funk","gui","Root"];
funk.gui.Root.__interfaces__ = [funk.gui.core.display.IComponentRenderManagerObserver,funk.gui.core.events.IComponentEventManagerObserver,funk.gui.core.IComponentRoot];
funk.gui.Root.prototype = {
	size: null
	,root: null
	,debug: null
	,eventManager: null
	,renderManager: null
	,eventParent: null
	,_bounds: null
	,_quadTree: null
	,_signal: null
	,_captureHooks: null
	,addContainerObserver: function(observer) {
		this._signal.add(observer.onContainerUpdate.$bind(observer));
	}
	,removeContainerObserver: function(observer) {
		this._signal.remove(observer.onContainerUpdate.$bind(observer));
	}
	,addCaptureHook: function(hook) {
		this._captureHooks = this._captureHooks.prepend(hook);
	}
	,removeCaptureHook: function(hook) {
		this._captureHooks = this._captureHooks.filterNot(function(h) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(h),hook);
		});
	}
	,add: function(component) {
		this._quadTree = this._quadTree.add(component);
		this.notify(funk.gui.core.events.ContainerEventType.COMPONENT_ADDED);
		return component;
	}
	,addAt: function(component,index) {
		this._quadTree = this._quadTree.addAt(component,index);
		this.notify(funk.gui.core.events.ContainerEventType.COMPONENT_ADDED);
		return component;
	}
	,remove: function(component) {
		this._quadTree = this._quadTree.remove(component);
		this.invalidate();
		return component;
	}
	,removeAt: function(index) {
		var comp = this._quadTree.getAt(index);
		var $e = (comp);
		switch( $e[1] ) {
		case 1:
			var x = $e[2];
			this._quadTree = this._quadTree.removeAt(index);
			this.invalidate();
			break;
		case 0:
			break;
		}
		return comp;
	}
	,getAt: function(index) {
		return (function($this) {
			var $r;
			var $e = ($this._quadTree.getAt(index));
			switch( $e[1] ) {
			case 1:
				var x = $e[2];
				$r = x;
				break;
			case 0:
				$r = null;
				break;
			}
			return $r;
		}(this));
	}
	,contains: function(component) {
		return this._quadTree.contains(component);
	}
	,getIndex: function(component) {
		return this._quadTree.indexOf(component);
	}
	,getComponentsIntersectsPoint: function(point) {
		return this._quadTree.queryPoint(point);
	}
	,getComponentsIntersectsRectangle: function(rect) {
		return this._quadTree.queryRectangle(rect);
	}
	,invalidate: function() {
		this.renderManager.invalidate();
	}
	,iterator: function() {
		return this._quadTree.iterator();
	}
	,preCaptureEventTarget: function(point) {
		if(this._captureHooks.get_nonEmpty()) {
			var p = this._captureHooks;
			while(p.get_nonEmpty()) {
				var head = p.get_head();
				var result = head.captureEventTarget(point);
				if(result != null) return result;
				p = p.get_tail();
			}
		}
		return this.captureEventTarget(point);
	}
	,captureEventTarget: function(point) {
		var items = this.getComponentsIntersectsPoint(point).get_reverse();
		var $it0 = items.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			var component = item;
			var target = component.preCaptureEventTarget(point);
			if(target != null) return target;
		}
		return null;
	}
	,onComponentRenderManagerUpdate: function(manager,type) {
		switch( (type)[1] ) {
		case 0:
			this._quadTree.integrate();
			break;
		case 1:
			break;
		}
	}
	,onComponentEventManagerUpdate: function(manager,type) {
		var $e = (type);
		switch( $e[1] ) {
		case 0:
			var h = $e[3], w = $e[2];
			this._bounds.setValues(0,0,w,h);
			this.renderManager.resizeTo(w,h);
			this._quadTree.set_rect(this._bounds);
			this.invalidate();
			break;
		}
	}
	,processEvent: function(event) {
	}
	,notify: function(type) {
		this._signal.dispatch(new funk.gui.core.events.ContainerEvent(type));
	}
	,get_size: function() {
		return this._quadTree.get_size();
	}
	,get_root: function() {
		return this;
	}
	,get_eventParent: function() {
		return null;
	}
	,setEventManager: function(value) {
		if(this.eventManager != null) {
			this.eventManager.removeEventManagerObserver(this);
			this.eventManager.onEventManagerCleanup();
			this.eventManager = null;
		}
		if(value != this.eventManager) {
			this.eventManager = value;
			this.eventManager.addEventManagerObserver(this);
			this.eventManager.onEventManagerInitialize(this);
		}
		return this.eventManager;
	}
	,setRenderManager: function(value) {
		if(this.renderManager != null) {
			this.renderManager.removeRenderManagerObserver(this);
			this.renderManager.onRenderManagerCleanup();
			this.renderManager = null;
		}
		if(value != this.renderManager) {
			this.renderManager = value;
			this.renderManager.addRenderManagerObserver(this);
			this.renderManager.onRenderManagerInitialize(this);
		}
		return this.renderManager;
	}
	,get_debug: function() {
		return this.renderManager.get_debug();
	}
	,set_debug: function(value) {
		this.renderManager.set_debug(value);
		return this.renderManager.get_debug();
	}
	,toString: function() {
		return "[Root]";
	}
	,__class__: funk.gui.Root
	,__properties__: {get_eventParent:"get_eventParent",set_renderManager:"setRenderManager",set_eventManager:"setEventManager",set_debug:"set_debug",get_debug:"get_debug",get_root:"get_root",get_size:"get_size"}
}
funk.gui.core.IComponent = function() { }
$hxClasses["funk.gui.core.IComponent"] = funk.gui.core.IComponent;
funk.gui.core.IComponent.__name__ = ["funk","gui","core","IComponent"];
funk.gui.core.IComponent.__interfaces__ = [funk.gui.core.events.IComponentEventTarget];
funk.gui.core.IComponent.prototype = {
	id: null
	,parent: null
	,model: null
	,view: null
	,state: null
	,pressed: null
	,hovered: null
	,focused: null
	,enabled: null
	,addComponentObserver: null
	,removeComponentObserver: null
	,moveTo: null
	,resizeTo: null
	,__class__: funk.gui.core.IComponent
	,__properties__: {set_enabled:"set_enabled",get_enabled:"get_enabled",set_focused:"set_focused",get_focused:"get_focused",set_hovered:"set_hovered",get_hovered:"get_hovered",set_pressed:"set_pressed",get_pressed:"get_pressed",set_state:"set_state",get_state:"get_state",set_view:"set_view",get_view:"get_view",set_model:"set_model",get_model:"get_model",set_parent:"set_parent",get_parent:"get_parent",set_id:"set_id",get_id:"get_id"}
}
funk.gui.core.Component = function(componentView) {
	this._signal = new funk.signal.Signal1();
	this._stateType = funk.gui.core.ComponentState;
	this._captureHooks = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	this.initComponent(componentView);
};
$hxClasses["funk.gui.core.Component"] = funk.gui.core.Component;
funk.gui.core.Component.__name__ = ["funk","gui","core","Component"];
funk.gui.core.Component.__interfaces__ = [funk.gui.core.IComponent];
funk.gui.core.Component.prototype = {
	id: null
	,parent: null
	,model: null
	,state: null
	,view: null
	,pressed: null
	,hovered: null
	,focused: null
	,enabled: null
	,eventParent: null
	,event: null
	,_model: null
	,_state: null
	,_view: null
	,_modelType: null
	,_stateType: null
	,_viewType: null
	,_signal: null
	,_componentEvent: null
	,_modelObserver: null
	,_stateObserver: null
	,_captureHooks: null
	,addComponentObserver: function(observer) {
		this._signal.add(observer.onComponentEvent.$bind(observer));
		return observer;
	}
	,removeComponentObserver: function(observer) {
		this._signal.remove(observer.onComponentEvent.$bind(observer));
		return observer;
	}
	,addCaptureHook: function(hook) {
		this._captureHooks = this._captureHooks.prepend(hook);
	}
	,removeCaptureHook: function(hook) {
		this._captureHooks = this._captureHooks.filterNot(function(h) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(h),hook);
		});
	}
	,moveTo: function(x,y) {
		if(this.get_view() != null) {
			if(this.get_view().get_x() == x && this.get_view().get_y() == y) return;
			this.get_view().onComponentMove(x,y);
		}
	}
	,resizeTo: function(width,height) {
		if(width < 0) width = 0;
		if(height < 0) height = 0;
		if(this.get_view() != null) {
			if(this.get_view().get_width() == width && this.get_view().get_height() == height) return;
			this.get_view().onComponentResize(width,height);
		}
	}
	,preCaptureEventTarget: function(point) {
		if(this.get_view() != null) {
			if(this._captureHooks.get_nonEmpty()) {
				var p = this._captureHooks;
				while(p.get_nonEmpty()) {
					var head = p.get_head();
					var result = head.captureEventTarget(point);
					if(result != null) return result;
					p = p.get_tail();
				}
			}
			return this.captureEventTarget(point);
		}
		return null;
	}
	,captureEventTarget: function(point) {
		return this.get_view() != null?this.get_view().captureEventTarget(point):null;
	}
	,processEvent: function(event) {
		if(!this.get_enabled()) return; else {
			var $e = (event.getType());
			switch( $e[1] ) {
			case 0:
				this.set_focused(false);
				break;
			case 1:
				var focusIn = $e[3], focusOut = $e[2];
				this.set_focused(focusIn == this);
				break;
			case 2:
				var position = $e[2];
				this.set_hovered(true);
				break;
			case 3:
				var position = $e[2];
				this.set_pressed(true);
				break;
			case 4:
				var downPosition = $e[3], position = $e[2];
				break;
			case 5:
				var position = $e[2];
				this.set_pressed(false);
				break;
			case 6:
				var position = $e[2];
				this.set_hovered(false);
				break;
			default:
			}
		}
	}
	,initComponent: function(componentView) {
		this.initTypes();
		if(this._viewType == null) throw new funk.errors.IllegalOperationError("View type can not be null",{ fileName : "Component.hx", lineNumber : 178, className : "funk.gui.core.Component", methodName : "initComponent"});
		if(this._modelType == null) throw new funk.errors.IllegalOperationError("Model type can not be null",{ fileName : "Component.hx", lineNumber : 179, className : "funk.gui.core.Component", methodName : "initComponent"});
		if(this._stateType == null) throw new funk.errors.IllegalOperationError("State type can not be null",{ fileName : "Component.hx", lineNumber : 180, className : "funk.gui.core.Component", methodName : "initComponent"});
		this.initModel();
		this.initState();
		this.initEvents();
		this.initView(componentView);
	}
	,initTypes: function() {
		throw new funk.errors.AbstractMethodError("initTypes",{ fileName : "Component.hx", lineNumber : 190, className : "funk.gui.core.Component", methodName : "initTypes"});
	}
	,initModel: function() {
		throw new funk.errors.AbstractMethodError("initModel",{ fileName : "Component.hx", lineNumber : 194, className : "funk.gui.core.Component", methodName : "initModel"});
	}
	,initState: function() {
		this.set_state(new funk.gui.core.ComponentState());
	}
	,initEvents: function() {
		throw new funk.errors.AbstractMethodError("initEvents",{ fileName : "Component.hx", lineNumber : 202, className : "funk.gui.core.Component", methodName : "initEvents"});
	}
	,initView: function(componentView) {
		this.set_view(componentView != null?componentView:(function($this) {
			var $r;
			throw new funk.errors.ArgumentError("Trying to initialize component with a null view.",{ fileName : "Component.hx", lineNumber : 207, className : "funk.gui.core.Component", methodName : "initView"});
			$r = null;
			return $r;
		}(this)));
	}
	,allowModelType: function(value) {
		this._modelType = value;
	}
	,allowStateType: function(value) {
		this._stateType = value;
	}
	,allowViewType: function(value) {
		this._viewType = value;
	}
	,dispatchComponentEvent: function(type) {
		this._componentEvent.reset(type);
		this._signal.dispatch(this._componentEvent);
	}
	,get_event: function() {
		return this._componentEvent;
	}
	,set_event: function(componentEvent) {
		if(componentEvent != this._componentEvent) this._componentEvent = componentEvent;
		return componentEvent;
	}
	,get_model: function() {
		return this._model;
	}
	,set_model: function(componentModel) {
		if(this._model == componentModel) return componentModel;
		if(this._model != null) {
			this._model.removeComponentModelObserver(this._modelObserver);
			this._modelObserver = null;
		}
		if(componentModel != null) {
			this._model = componentModel;
			this._modelObserver = new funk.gui.core.observables.ComponentModelObserver(this);
			this._model.addComponentModelObserver(this._modelObserver);
			if(this.get_view() != null) this.get_view().onComponentModelUpdate(this.get_model(),-1);
		} else if(this._model != null) this._model = null;
		return componentModel;
	}
	,get_view: function() {
		return this._view;
	}
	,set_view: function(componentView) {
		if(this._view == componentView) return componentView;
		if(this._view != null) this._view.onComponentCleanup();
		if(componentView != null) {
			this._view = componentView;
			this._view.onComponentInitialize(this);
			if(this.get_model() != null) this._view.onComponentModelUpdate(this.get_model(),-1);
			if(this.get_state() != null) this._view.onComponentStateUpdate(this.get_state(),funk.gui.core.ComponentStateType.UPDATE_ALL_VALUES);
		} else if(this._view != null) this._view = null;
		return componentView;
	}
	,get_state: function() {
		return this._state;
	}
	,set_state: function(componentState) {
		if(this._state == componentState) return this._state;
		if(this._state != null) {
			this._state.removeComponentStateObserver(this._stateObserver);
			this._stateObserver = null;
		}
		if(componentState != null) {
			this._state = componentState;
			this._stateObserver = new funk.gui.core.observables.ComponentStateObserver(this);
			this._state.addComponentStateObserver(this._stateObserver);
			if(this.get_view() != null) this.get_view().onComponentStateUpdate(this.get_state(),funk.gui.core.ComponentStateType.UPDATE_ALL_VALUES);
		} else if(this._state != null) this._state = null;
		return componentState;
	}
	,get_id: function() {
		return this.get_model().get_id();
	}
	,set_id: function(value) {
		return this.get_model().set_id(value);
	}
	,get_parent: function() {
		return this.get_model().get_parent();
	}
	,set_parent: function(value) {
		return this.get_model().set_parent(value);
	}
	,get_pressed: function() {
		return this.get_state().pressed;
	}
	,set_pressed: function(value) {
		return this.get_state().setPressed(value);
	}
	,get_hovered: function() {
		return this.get_state().hovered;
	}
	,set_hovered: function(value) {
		return this.get_state().setHovered(value);
	}
	,get_focused: function() {
		return this.get_state().focused;
	}
	,set_focused: function(value) {
		return this.get_state().setFocused(value);
	}
	,get_enabled: function() {
		return this.get_state().enabled;
	}
	,set_enabled: function(value) {
		return this.get_state().setEnabled(value);
	}
	,get_eventParent: function() {
		return this.get_model().get_parent();
	}
	,toString: function() {
		return "[Component]";
	}
	,__class__: funk.gui.core.Component
	,__properties__: {set_event:"set_event",get_event:"get_event",get_eventParent:"get_eventParent",set_enabled:"set_enabled",get_enabled:"get_enabled",set_focused:"set_focused",get_focused:"get_focused",set_hovered:"set_hovered",get_hovered:"get_hovered",set_pressed:"set_pressed",get_pressed:"get_pressed",set_view:"set_view",get_view:"get_view",set_state:"set_state",get_state:"get_state",set_model:"set_model",get_model:"get_model",set_parent:"set_parent",get_parent:"get_parent",set_id:"set_id",get_id:"get_id"}
}
funk.gui.button = {}
funk.gui.button.ButtonComponent = function(componentView) {
	funk.gui.core.Component.call(this,componentView);
};
$hxClasses["funk.gui.button.ButtonComponent"] = funk.gui.button.ButtonComponent;
funk.gui.button.ButtonComponent.__name__ = ["funk","gui","button","ButtonComponent"];
funk.gui.button.ButtonComponent.__super__ = funk.gui.core.Component;
funk.gui.button.ButtonComponent.prototype = $extend(funk.gui.core.Component.prototype,{
	text: null
	,icon: null
	,selected: null
	,_buttonModel: null
	,_buttonModelObserver: null
	,initModel: function() {
		this.set_model(new funk.gui.button.ButtonModel());
	}
	,initEvents: function() {
		this.set_event(new funk.gui.button.events.ButtonEvent(this));
	}
	,set_model: function(componentModel) {
		if(this._buttonModel != null) {
			this._buttonModel.removeComponentModelObserver(this._buttonModelObserver);
			this._buttonModelObserver = null;
		}
		var result = funk.gui.core.Component.prototype.set_model.call(this,this._buttonModel = componentModel);
		if(this._buttonModel != null) {
			this._buttonModelObserver = new funk.gui.button.observables.ButtonModelObserver(this);
			this._buttonModel.addComponentModelObserver(this._buttonModelObserver);
		}
		return result;
	}
	,getText: function() {
		return this._buttonModel.getText();
	}
	,setText: function(value) {
		this._buttonModel.setText(value);
		return this._buttonModel.getText();
	}
	,getIcon: function() {
		return this._buttonModel.getIcon();
	}
	,setIcon: function(value) {
		this._buttonModel.setIcon(value);
		return this._buttonModel.getIcon();
	}
	,getSelected: function() {
		return this._buttonModel.getSelected();
	}
	,setSelected: function(value) {
		this._buttonModel.setSelected(value);
		return this._buttonModel.getSelected();
	}
	,__class__: funk.gui.button.ButtonComponent
	,__properties__: $extend(funk.gui.core.Component.prototype.__properties__,{set_selected:"setSelected",get_selected:"getSelected",set_icon:"setIcon",get_icon:"getIcon",set_text:"setText",get_text:"getText"})
});
funk.gui.button.Button = function(view) {
	funk.gui.button.ButtonComponent.call(this,view);
};
$hxClasses["funk.gui.button.Button"] = funk.gui.button.Button;
funk.gui.button.Button.__name__ = ["funk","gui","button","Button"];
funk.gui.button.Button.__super__ = funk.gui.button.ButtonComponent;
funk.gui.button.Button.prototype = $extend(funk.gui.button.ButtonComponent.prototype,{
	initTypes: function() {
		this.allowViewType(funk.gui.button.IButtonView);
		this.allowModelType(funk.gui.button.ButtonModel);
	}
	,toString: function() {
		return "[Button (id:" + this.get_id() + ")]";
	}
	,__class__: funk.gui.button.Button
});
funk.gui.core.IComponentModel = function() { }
$hxClasses["funk.gui.core.IComponentModel"] = funk.gui.core.IComponentModel;
funk.gui.core.IComponentModel.__name__ = ["funk","gui","core","IComponentModel"];
funk.gui.core.IComponentModel.prototype = {
	id: null
	,parent: null
	,editMode: null
	,addComponentModelObserver: null
	,removeComponentModelObserver: null
	,__class__: funk.gui.core.IComponentModel
	,__properties__: {set_editMode:"set_editMode",get_editMode:"get_editMode",set_parent:"set_parent",get_parent:"get_parent",set_id:"set_id",get_id:"get_id"}
}
funk.gui.core.ComponentModel = function() {
	this._signal = new funk.signal.Signal2();
	this._editMode = false;
	this._dirty = false;
};
$hxClasses["funk.gui.core.ComponentModel"] = funk.gui.core.ComponentModel;
funk.gui.core.ComponentModel.__name__ = ["funk","gui","core","ComponentModel"];
funk.gui.core.ComponentModel.__interfaces__ = [funk.gui.core.IComponentModel];
funk.gui.core.ComponentModel.prototype = {
	id: null
	,parent: null
	,editMode: null
	,_signal: null
	,_id: null
	,_parent: null
	,_editMode: null
	,_dirty: null
	,addComponentModelObserver: function(observer) {
		this._signal.add(observer.onComponentModelUpdate.$bind(observer));
	}
	,removeComponentModelObserver: function(observer) {
		this._signal.remove(observer.onComponentModelUpdate.$bind(observer));
	}
	,notify: function(type) {
		if(!this._editMode) {
			this._signal.dispatch(this,type);
			this._dirty = false;
		} else this._dirty = true;
	}
	,get_id: function() {
		return this._id;
	}
	,set_id: function(value) {
		return this._id = value;
	}
	,get_parent: function() {
		return this._parent;
	}
	,set_parent: function(value) {
		return this._parent = value;
	}
	,get_editMode: function() {
		return this._editMode;
	}
	,set_editMode: function(value) {
		if(value != this._editMode) {
			this._editMode = value;
			if(!this._editMode && this._dirty) this.notify(-1);
		}
		return this._editMode;
	}
	,__class__: funk.gui.core.ComponentModel
	,__properties__: {set_editMode:"set_editMode",get_editMode:"get_editMode",set_parent:"set_parent",get_parent:"get_parent",set_id:"set_id",get_id:"get_id"}
}
funk.gui.button.ButtonModel = function(text,icon,selected) {
	if(selected == null) selected = false;
	if(text == null) text = "";
	funk.gui.core.ComponentModel.call(this);
	this._text = text;
	this._icon = icon;
	this._selected = new funk.gui.core.parameter.Parameter(new funk.gui.core.parameter.mappings.MappingBoolInt(),selected);
};
$hxClasses["funk.gui.button.ButtonModel"] = funk.gui.button.ButtonModel;
funk.gui.button.ButtonModel.__name__ = ["funk","gui","button","ButtonModel"];
funk.gui.button.ButtonModel.__super__ = funk.gui.core.ComponentModel;
funk.gui.button.ButtonModel.prototype = $extend(funk.gui.core.ComponentModel.prototype,{
	text: null
	,icon: null
	,selected: null
	,_text: null
	,_icon: null
	,_selected: null
	,getText: function() {
		return this._text;
	}
	,setText: function(value) {
		if(value != this._text) {
			this._text = value;
			this.notify(funk.gui.button.ButtonModel.UPDATE_TEXT);
		}
		return this._text;
	}
	,getIcon: function() {
		return this._icon;
	}
	,setIcon: function(value) {
		if(value != this._icon) {
			this._icon = value;
			this.notify(funk.gui.button.ButtonModel.UPDATE_ICON);
		}
		return this._icon;
	}
	,getSelected: function() {
		return this._selected.getValue();
	}
	,setSelected: function(value) {
		if(value != this._selected.getValue()) {
			this._selected.setValue(value);
			this.notify(funk.gui.button.ButtonModel.UPDATE_SELECTION);
		}
		return this._selected.getValue();
	}
	,__class__: funk.gui.button.ButtonModel
	,__properties__: $extend(funk.gui.core.ComponentModel.prototype.__properties__,{set_selected:"setSelected",get_selected:"getSelected",set_icon:"setIcon",get_icon:"getIcon",set_text:"setText",get_text:"getText"})
});
funk.gui.core.events.IComponentEventTargetHook = function() { }
$hxClasses["funk.gui.core.events.IComponentEventTargetHook"] = funk.gui.core.events.IComponentEventTargetHook;
funk.gui.core.events.IComponentEventTargetHook.__name__ = ["funk","gui","core","events","IComponentEventTargetHook"];
funk.gui.core.events.IComponentEventTargetHook.prototype = {
	captureEventTarget: null
	,__class__: funk.gui.core.events.IComponentEventTargetHook
}
funk.gui.core.IComponentView = function() { }
$hxClasses["funk.gui.core.IComponentView"] = funk.gui.core.IComponentView;
funk.gui.core.IComponentView.__name__ = ["funk","gui","core","IComponentView"];
funk.gui.core.IComponentView.__interfaces__ = [funk.gui.core.events.IComponentEventTargetHook];
funk.gui.core.IComponentView.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,bounds: null
	,onComponentInitialize: null
	,onComponentMove: null
	,onComponentResize: null
	,onComponentModelUpdate: null
	,onComponentStateUpdate: null
	,onComponentCleanup: null
	,__class__: funk.gui.core.IComponentView
	,__properties__: {get_bounds:"get_bounds",get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
}
funk.gui.button.IButtonComponentView = function() { }
$hxClasses["funk.gui.button.IButtonComponentView"] = funk.gui.button.IButtonComponentView;
funk.gui.button.IButtonComponentView.__name__ = ["funk","gui","button","IButtonComponentView"];
funk.gui.button.IButtonComponentView.__interfaces__ = [funk.gui.core.IComponentView];
funk.gui.button.IButtonComponentView.prototype = {
	__class__: funk.gui.button.IButtonComponentView
}
funk.gui.button.IButtonView = function() { }
$hxClasses["funk.gui.button.IButtonView"] = funk.gui.button.IButtonView;
funk.gui.button.IButtonView.__name__ = ["funk","gui","button","IButtonView"];
funk.gui.button.IButtonView.__interfaces__ = [funk.gui.button.IButtonComponentView];
funk.gui.button.IButtonView.prototype = {
	__class__: funk.gui.button.IButtonView
}
funk.gui.button.IToggleButtonView = function() { }
$hxClasses["funk.gui.button.IToggleButtonView"] = funk.gui.button.IToggleButtonView;
funk.gui.button.IToggleButtonView.__name__ = ["funk","gui","button","IToggleButtonView"];
funk.gui.button.IToggleButtonView.__interfaces__ = [funk.gui.button.IButtonComponentView];
funk.gui.button.IToggleButtonView.prototype = {
	__class__: funk.gui.button.IToggleButtonView
}
funk.gui.button.ToggleButton = function(view) {
	funk.gui.button.ButtonComponent.call(this,view);
};
$hxClasses["funk.gui.button.ToggleButton"] = funk.gui.button.ToggleButton;
funk.gui.button.ToggleButton.__name__ = ["funk","gui","button","ToggleButton"];
funk.gui.button.ToggleButton.__super__ = funk.gui.button.ButtonComponent;
funk.gui.button.ToggleButton.prototype = $extend(funk.gui.button.ButtonComponent.prototype,{
	initTypes: function() {
		this.allowViewType(funk.gui.button.IToggleButtonView);
		this.allowModelType(funk.gui.button.ButtonModel);
	}
	,toString: function() {
		return "[ToggleButton]";
	}
	,__class__: funk.gui.button.ToggleButton
});
funk.gui.core.events.ComponentEventType = function() {
};
$hxClasses["funk.gui.core.events.ComponentEventType"] = funk.gui.core.events.ComponentEventType;
funk.gui.core.events.ComponentEventType.__name__ = ["funk","gui","core","events","ComponentEventType"];
funk.gui.core.events.ComponentEventType.prototype = {
	__class__: funk.gui.core.events.ComponentEventType
}
funk.gui.button.events = {}
funk.gui.button.events.ButtonEventType = function() {
	funk.gui.core.events.ComponentEventType.call(this);
};
$hxClasses["funk.gui.button.events.ButtonEventType"] = funk.gui.button.events.ButtonEventType;
funk.gui.button.events.ButtonEventType.__name__ = ["funk","gui","button","events","ButtonEventType"];
funk.gui.button.events.ButtonEventType.__super__ = funk.gui.core.events.ComponentEventType;
funk.gui.button.events.ButtonEventType.prototype = $extend(funk.gui.core.events.ComponentEventType.prototype,{
	__class__: funk.gui.button.events.ButtonEventType
});
funk.gui.core.events.ComponentEvent = function(component,componentType) {
	this._defaultComponent = funk.option.Option.Some(component);
	this.reset(componentType);
};
$hxClasses["funk.gui.core.events.ComponentEvent"] = funk.gui.core.events.ComponentEvent;
funk.gui.core.events.ComponentEvent.__name__ = ["funk","gui","core","events","ComponentEvent"];
funk.gui.core.events.ComponentEvent.prototype = {
	type: null
	,component: null
	,_defaultComponent: null
	,_component: null
	,_type: null
	,reset: function(value) {
		this._type = value;
		this._component = (function($this) {
			var $r;
			var $e = ($this._defaultComponent);
			switch( $e[1] ) {
			case 1:
				var value1 = $e[2];
				$r = value1;
				break;
			case 0:
				$r = null;
				break;
			}
			return $r;
		}(this));
	}
	,getType: function() {
		return this._type;
	}
	,getComponent: function() {
		return this._component;
	}
	,__class__: funk.gui.core.events.ComponentEvent
	,__properties__: {get_component:"getComponent",get_type:"getType"}
}
funk.gui.button.events.ButtonEvent = function(buttonComponent) {
	funk.gui.core.events.ComponentEvent.call(this,this._buttonComponent = buttonComponent);
};
$hxClasses["funk.gui.button.events.ButtonEvent"] = funk.gui.button.events.ButtonEvent;
funk.gui.button.events.ButtonEvent.__name__ = ["funk","gui","button","events","ButtonEvent"];
funk.gui.button.events.ButtonEvent.__super__ = funk.gui.core.events.ComponentEvent;
funk.gui.button.events.ButtonEvent.prototype = $extend(funk.gui.core.events.ComponentEvent.prototype,{
	text: null
	,icon: null
	,selected: null
	,_buttonComponent: null
	,getText: function() {
		return this._buttonComponent.getText();
	}
	,getIcon: function() {
		return this._buttonComponent.getIcon();
	}
	,getSelected: function() {
		return this._buttonComponent.getSelected();
	}
	,__class__: funk.gui.button.events.ButtonEvent
	,__properties__: $extend(funk.gui.core.events.ComponentEvent.prototype.__properties__,{get_selected:"getSelected",get_icon:"getIcon",get_text:"getText"})
});
funk.gui.core.IComponentModelObserver = function() { }
$hxClasses["funk.gui.core.IComponentModelObserver"] = funk.gui.core.IComponentModelObserver;
funk.gui.core.IComponentModelObserver.__name__ = ["funk","gui","core","IComponentModelObserver"];
funk.gui.core.IComponentModelObserver.prototype = {
	onComponentModelUpdate: null
	,__class__: funk.gui.core.IComponentModelObserver
}
funk.gui.button.observables = {}
funk.gui.button.observables.ButtonModelObserver = function(buttonComponent) {
	this._buttonComponent = buttonComponent;
	this._buttonComponentNS = buttonComponent;
};
$hxClasses["funk.gui.button.observables.ButtonModelObserver"] = funk.gui.button.observables.ButtonModelObserver;
funk.gui.button.observables.ButtonModelObserver.__name__ = ["funk","gui","button","observables","ButtonModelObserver"];
funk.gui.button.observables.ButtonModelObserver.__interfaces__ = [funk.gui.core.IComponentModelObserver];
funk.gui.button.observables.ButtonModelObserver.prototype = {
	_buttonComponent: null
	,_buttonComponentNS: null
	,onComponentModelUpdate: function(componentModel,type) {
		if(type == funk.gui.button.ButtonModel.UPDATE_SELECTION) {
			var t = this._buttonComponent.getSelected()?funk.gui.button.events.ButtonEventType.SELECT:funk.gui.button.events.ButtonEventType.DESELECT;
			this._buttonComponentNS.dispatchComponentEvent(t);
		}
	}
	,__class__: funk.gui.button.observables.ButtonModelObserver
}
funk.gui.core.ComponentStateType = $hxClasses["funk.gui.core.ComponentStateType"] = { __ename__ : ["funk","gui","core","ComponentStateType"], __constructs__ : ["UPDATE_ALL_VALUES","UPDATE_ENABLED","UPDATE_HOVERED","UPDATE_FOCUSED","UPDATE_PRESSED"] }
funk.gui.core.ComponentStateType.UPDATE_ALL_VALUES = ["UPDATE_ALL_VALUES",0];
funk.gui.core.ComponentStateType.UPDATE_ALL_VALUES.toString = $estr;
funk.gui.core.ComponentStateType.UPDATE_ALL_VALUES.__enum__ = funk.gui.core.ComponentStateType;
funk.gui.core.ComponentStateType.UPDATE_ENABLED = ["UPDATE_ENABLED",1];
funk.gui.core.ComponentStateType.UPDATE_ENABLED.toString = $estr;
funk.gui.core.ComponentStateType.UPDATE_ENABLED.__enum__ = funk.gui.core.ComponentStateType;
funk.gui.core.ComponentStateType.UPDATE_HOVERED = ["UPDATE_HOVERED",2];
funk.gui.core.ComponentStateType.UPDATE_HOVERED.toString = $estr;
funk.gui.core.ComponentStateType.UPDATE_HOVERED.__enum__ = funk.gui.core.ComponentStateType;
funk.gui.core.ComponentStateType.UPDATE_FOCUSED = ["UPDATE_FOCUSED",3];
funk.gui.core.ComponentStateType.UPDATE_FOCUSED.toString = $estr;
funk.gui.core.ComponentStateType.UPDATE_FOCUSED.__enum__ = funk.gui.core.ComponentStateType;
funk.gui.core.ComponentStateType.UPDATE_PRESSED = ["UPDATE_PRESSED",4];
funk.gui.core.ComponentStateType.UPDATE_PRESSED.toString = $estr;
funk.gui.core.ComponentStateType.UPDATE_PRESSED.__enum__ = funk.gui.core.ComponentStateType;
funk.gui.core.IComponentStateObserver = function() { }
$hxClasses["funk.gui.core.IComponentStateObserver"] = funk.gui.core.IComponentStateObserver;
funk.gui.core.IComponentStateObserver.__name__ = ["funk","gui","core","IComponentStateObserver"];
funk.gui.core.IComponentStateObserver.prototype = {
	onComponentStateUpdate: null
	,__class__: funk.gui.core.IComponentStateObserver
}
funk.gui.core.ComponentState = function() {
	this._signal = new funk.signal.Signal2();
	this.setEnabled(true);
	this.setHovered(false);
	this.setFocused(false);
	this.setPressed(false);
};
$hxClasses["funk.gui.core.ComponentState"] = funk.gui.core.ComponentState;
funk.gui.core.ComponentState.__name__ = ["funk","gui","core","ComponentState"];
funk.gui.core.ComponentState.prototype = {
	enabled: null
	,hovered: null
	,focused: null
	,pressed: null
	,_signal: null
	,addComponentStateObserver: function(observer) {
		this._signal.add(observer.onComponentStateUpdate.$bind(observer));
	}
	,removeComponentStateObserver: function(observer) {
		this._signal.remove(observer.onComponentStateUpdate.$bind(observer));
	}
	,notify: function(type) {
		this._signal.dispatch(this,type);
	}
	,setEnabled: function(value) {
		if(this.enabled != value) {
			this.enabled = value;
			this.notify(funk.gui.core.ComponentStateType.UPDATE_ENABLED);
		}
		return this.enabled;
	}
	,setHovered: function(value) {
		if(this.hovered != value) {
			this.hovered = value;
			this.notify(funk.gui.core.ComponentStateType.UPDATE_HOVERED);
		}
		return this.hovered;
	}
	,setFocused: function(value) {
		if(this.focused != value) {
			this.focused = value;
			this.notify(funk.gui.core.ComponentStateType.UPDATE_FOCUSED);
		}
		return this.focused;
	}
	,setPressed: function(value) {
		if(this.pressed != value) {
			this.pressed = value;
			this.notify(funk.gui.core.ComponentStateType.UPDATE_PRESSED);
		}
		return this.pressed;
	}
	,__class__: funk.gui.core.ComponentState
	,__properties__: {set_pressed:"setPressed",set_focused:"setFocused",set_hovered:"setHovered",set_enabled:"setEnabled"}
}
funk.gui.core.ComponentView = function() {
	this._bounds = new funk.gui.core.geom.Rectangle();
	this._innerBounds = new funk.gui.core.geom.Rectangle();
	this._outerBounds = new funk.gui.core.geom.Rectangle();
	this._margin = new funk.gui.core.geom.TRBL();
	this._padding = new funk.gui.core.geom.TRBL();
};
$hxClasses["funk.gui.core.ComponentView"] = funk.gui.core.ComponentView;
funk.gui.core.ComponentView.__name__ = ["funk","gui","core","ComponentView"];
funk.gui.core.ComponentView.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,bounds: null
	,_bounds: null
	,_innerBounds: null
	,_outerBounds: null
	,_margin: null
	,_padding: null
	,configure: function(component,config) {
		var p = config.get_padding();
		var m = config.get_margin();
		this._padding.setValues(p.top,p.right,p.bottom,p.left);
		this._margin.setValues(m.top,m.right,m.bottom,m.left);
		var w = -1;
		var h = -1;
		if(config.get_size().min.width > -1) w = config.get_size().min.width;
		if(config.get_size().min.height > -1) w = config.get_size().min.height;
		if(config.get_size().max.width > -1) w = config.get_size().max.width;
		if(config.get_size().max.height > -1) w = config.get_size().max.height;
		if(config.get_size().size.width > -1) w = config.get_size().size.width;
		if(config.get_size().size.height > -1) w = config.get_size().size.height;
		if(w > -1 && h > -1) component.resizeTo(w,h);
	}
	,moveTo: function(x,y) {
		this._bounds.x = x;
		this._bounds.y = y;
		this._innerBounds.x = this._bounds.x + this._padding.left;
		this._innerBounds.y = this._bounds.y + this._padding.top;
		this._outerBounds.x = this._bounds.x - this._margin.left;
		this._outerBounds.y = this._bounds.y - this._margin.top;
	}
	,resizeTo: function(width,height) {
		this._bounds.width = width;
		this._bounds.height = height;
		this._innerBounds.width = width - (this._padding.left + this._padding.right);
		this._innerBounds.height = height - (this._padding.top + this._padding.bottom);
		this._outerBounds.width = width + (this._margin.left + this._margin.right);
		this._outerBounds.height = height + (this._margin.top + this._margin.bottom);
	}
	,get_x: function() {
		return this._bounds.x;
	}
	,get_y: function() {
		return this._bounds.y;
	}
	,get_width: function() {
		return this._bounds.width;
	}
	,get_height: function() {
		return this._bounds.height;
	}
	,get_bounds: function() {
		return this._bounds.clone();
	}
	,__class__: funk.gui.core.ComponentView
	,__properties__: {get_bounds:"get_bounds",get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
}
funk.gui.core.IComponentObserver = function() { }
$hxClasses["funk.gui.core.IComponentObserver"] = funk.gui.core.IComponentObserver;
funk.gui.core.IComponentObserver.__name__ = ["funk","gui","core","IComponentObserver"];
funk.gui.core.IComponentObserver.prototype = {
	onComponentEvent: null
	,__class__: funk.gui.core.IComponentObserver
}
funk.gui.core.IComponentViewConfig = function() { }
$hxClasses["funk.gui.core.IComponentViewConfig"] = funk.gui.core.IComponentViewConfig;
funk.gui.core.IComponentViewConfig.__name__ = ["funk","gui","core","IComponentViewConfig"];
funk.gui.core.IComponentViewConfig.prototype = {
	size: null
	,padding: null
	,margin: null
	,__class__: funk.gui.core.IComponentViewConfig
	,__properties__: {set_margin:"set_margin",get_margin:"get_margin",set_padding:"set_padding",get_padding:"get_padding",set_size:"set_size",get_size:"get_size"}
}
funk.gui.core.IContainer = function() { }
$hxClasses["funk.gui.core.IContainer"] = funk.gui.core.IContainer;
funk.gui.core.IContainer.__name__ = ["funk","gui","core","IContainer"];
funk.gui.core.IContainer.__interfaces__ = [funk.gui.core.IComponent];
funk.gui.core.IContainer.prototype = {
	size: null
	,add: null
	,addAt: null
	,remove: null
	,removeAt: null
	,getAt: null
	,contains: null
	,getIndex: null
	,__class__: funk.gui.core.IContainer
	,__properties__: {get_size:"get_size"}
}
funk.gui.core.IContainerObserver = function() { }
$hxClasses["funk.gui.core.IContainerObserver"] = funk.gui.core.IContainerObserver;
funk.gui.core.IContainerObserver.__name__ = ["funk","gui","core","IContainerObserver"];
funk.gui.core.IContainerObserver.prototype = {
	onContainerUpdate: null
	,__class__: funk.gui.core.IContainerObserver
}
funk.gui.core.display.IComponentImageData = function() { }
$hxClasses["funk.gui.core.display.IComponentImageData"] = funk.gui.core.display.IComponentImageData;
funk.gui.core.display.IComponentImageData.__name__ = ["funk","gui","core","display","IComponentImageData"];
funk.gui.core.display.IComponentImageData.prototype = {
	enabled: null
	,hovered: null
	,pressed: null
	,disabled: null
	,focused: null
	,getIconForState: null
	,__class__: funk.gui.core.display.IComponentImageData
	,__properties__: {get_focused:"get_focused",get_disabled:"get_disabled",get_pressed:"get_pressed",get_hovered:"get_hovered",get_enabled:"get_enabled"}
}
funk.gui.core.display.IComponentRenderManager = function() { }
$hxClasses["funk.gui.core.display.IComponentRenderManager"] = funk.gui.core.display.IComponentRenderManager;
funk.gui.core.display.IComponentRenderManager.__name__ = ["funk","gui","core","display","IComponentRenderManager"];
funk.gui.core.display.IComponentRenderManager.prototype = {
	context: null
	,debug: null
	,addRenderManagerObserver: null
	,removeRenderManagerObserver: null
	,onRenderManagerInitialize: null
	,onRenderManagerCleanup: null
	,invalidate: null
	,resizeTo: null
	,__class__: funk.gui.core.display.IComponentRenderManager
	,__properties__: {set_debug:"set_debug",get_debug:"get_debug",get_context:"get_context"}
}
funk.gui.core.display.ComponentRenderManagerUpdateType = $hxClasses["funk.gui.core.display.ComponentRenderManagerUpdateType"] = { __ename__ : ["funk","gui","core","display","ComponentRenderManagerUpdateType"], __constructs__ : ["PRE_RENDER","POST_RENDER"] }
funk.gui.core.display.ComponentRenderManagerUpdateType.PRE_RENDER = ["PRE_RENDER",0];
funk.gui.core.display.ComponentRenderManagerUpdateType.PRE_RENDER.toString = $estr;
funk.gui.core.display.ComponentRenderManagerUpdateType.PRE_RENDER.__enum__ = funk.gui.core.display.ComponentRenderManagerUpdateType;
funk.gui.core.display.ComponentRenderManagerUpdateType.POST_RENDER = ["POST_RENDER",1];
funk.gui.core.display.ComponentRenderManagerUpdateType.POST_RENDER.toString = $estr;
funk.gui.core.display.ComponentRenderManagerUpdateType.POST_RENDER.__enum__ = funk.gui.core.display.ComponentRenderManagerUpdateType;
funk.gui.core.display.ImageData = function() { }
$hxClasses["funk.gui.core.display.ImageData"] = funk.gui.core.display.ImageData;
funk.gui.core.display.ImageData.__name__ = ["funk","gui","core","display","ImageData"];
funk.gui.core.display.ImageData.prototype = {
	__class__: funk.gui.core.display.ImageData
}
funk.gui.core.display.QuadTree = function(width,height) {
	funk.product.Product.call(this);
	this._nodes = (function($this) {
		var $r;
		switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.mutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	this._quad = new funk.gui.core.display._QuadTree.QuadTreeNode(new funk.gui.core.geom.Rectangle(0,0,width,height),funk.gui.core.display.QuadTree.MAX_RECURSION);
};
$hxClasses["funk.gui.core.display.QuadTree"] = funk.gui.core.display.QuadTree;
funk.gui.core.display.QuadTree.__name__ = ["funk","gui","core","display","QuadTree"];
funk.gui.core.display.QuadTree.__interfaces__ = [funk.collections.IQuadTree];
funk.gui.core.display.QuadTree.__super__ = funk.product.Product;
funk.gui.core.display.QuadTree.prototype = $extend(funk.product.Product.prototype,{
	rect: null
	,size: null
	,hasDefinedSize: null
	,toArray: null
	,_quad: null
	,_nodes: null
	,add: function(value) {
		this._nodes = this._nodes.prepend(value);
		return this;
	}
	,addAt: function(value,index) {
		if(index == 0) this._nodes = this._nodes.prepend(value); else if(index == this.get_size()) this._nodes = this._nodes.append(value); else if(index < 0 || index > this.get_size()) throw new funk.errors.RangeError(null,{ fileName : "QuadTree.hx", lineNumber : 51, className : "funk.gui.core.display.QuadTree", methodName : "addAt"}); else {
			var n = 0;
			this._nodes = this._nodes.flatMap(function(v) {
				var l = (function($this) {
					var $r;
					switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.mutable.NilType._nilList;
						break;
					}
					return $r;
				}(this));
				l.prepend(v);
				if(index == n) l.prepend(value);
				n++;
				return l;
			});
		}
		return this;
	}
	,remove: function(value) {
		this._nodes = this._nodes.filterNot(function(v) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(value),v);
		});
		return this;
	}
	,removeAt: function(index) {
		var n = 0;
		this._nodes = this._nodes.filterNot(function(v) {
			return n++ == index;
		});
		return this;
	}
	,get: function(value) {
		return this._nodes.get(this._nodes.indexOf(value));
	}
	,getAt: function(index) {
		return this._nodes.get(index);
	}
	,contains: function(value) {
		return this._nodes.contains(value);
	}
	,indexOf: function(value) {
		return this._nodes.indexOf(value);
	}
	,queryPoint: function(value) {
		return (function($this) {
			var $r;
			var $e = ($this._quad.queryPoint(value));
			switch( $e[1] ) {
			case 1:
				var x = $e[2];
				$r = x.get_nodes();
				break;
			case 0:
				$r = (function($this) {
					var $r;
					switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.mutable.NilType._nilList;
						break;
					}
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,queryRectangle: function(value) {
		return (function($this) {
			var $r;
			var $e = ($this._quad.queryRectangle(value));
			switch( $e[1] ) {
			case 1:
				var x = $e[2];
				$r = x.get_nodes();
				break;
			case 0:
				$r = (function($this) {
					var $r;
					switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
					case 0:
						$r = funk.collections.mutable.NilType._nilList;
						break;
					}
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,integrate: function() {
		this._quad.clearAll();
		var $it0 = this._nodes.iterator();
		while( $it0.hasNext() ) {
			var n = $it0.next();
			this._quad.add(n);
		}
	}
	,describe: function() {
		var buffer = new StringBuf();
		this._quad.describe(buffer,"\n");
		return buffer.b.join("");
	}
	,iterator: function() {
		return this._nodes.iterator();
	}
	,productElement: function(i) {
		return this._nodes.productElement(i);
	}
	,get_rect: function() {
		return this._quad.get_rect();
	}
	,set_rect: function(value) {
		this._quad.set_rect(value);
		return value;
	}
	,get_size: function() {
		return this._nodes.get_size();
	}
	,get_hasDefinedSize: function() {
		return this._nodes.get_hasDefinedSize();
	}
	,get_toArray: function() {
		return this._nodes.get_toArray();
	}
	,get_productArity: function() {
		return this.get_size();
	}
	,get_productPrefix: function() {
		return "QuadTree";
	}
	,__class__: funk.gui.core.display.QuadTree
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_toArray:"get_toArray",get_hasDefinedSize:"get_hasDefinedSize",get_size:"get_size",set_rect:"set_rect",get_rect:"get_rect"})
});
funk.gui.core.display._QuadTree = {}
funk.gui.core.display._QuadTree.QuadTreeNode = function(rect,level) {
	this._rect = rect;
	this._level = level;
	this._leaf = level == 0;
	this._cacheRectangle = new funk.gui.core.geom.Rectangle();
	if(!this._leaf) {
		var l = level - 1;
		var qx = this._rect.x;
		var qy = this._rect.y;
		var qw = this._rect.width * 0.5;
		var qh = this._rect.height * 0.5;
		this._q0 = new funk.gui.core.display._QuadTree.QuadTreeNode(new funk.gui.core.geom.Rectangle(qx,qy,qw,qh),l);
		this._q1 = new funk.gui.core.display._QuadTree.QuadTreeNode(new funk.gui.core.geom.Rectangle(qx + qw,qy,qw,qh),l);
		this._q2 = new funk.gui.core.display._QuadTree.QuadTreeNode(new funk.gui.core.geom.Rectangle(qx,qy + qh,qw,qh),l);
		this._q3 = new funk.gui.core.display._QuadTree.QuadTreeNode(new funk.gui.core.geom.Rectangle(qx + qw,qy + qh,qw,qh),l);
	} else this._nodes = (function($this) {
		var $r;
		switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.mutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.gui.core.display._QuadTree.QuadTreeNode"] = funk.gui.core.display._QuadTree.QuadTreeNode;
funk.gui.core.display._QuadTree.QuadTreeNode.__name__ = ["funk","gui","core","display","_QuadTree","QuadTreeNode"];
funk.gui.core.display._QuadTree.QuadTreeNode.prototype = {
	nodes: null
	,rect: null
	,_rect: null
	,_cacheRectangle: null
	,_level: null
	,_leaf: null
	,_nodes: null
	,_q0: null
	,_q1: null
	,_q2: null
	,_q3: null
	,add: function(value) {
		if(this._leaf) this._nodes = this._nodes.prepend(value); else {
			var bounds = value.get_view().get_bounds();
			if(this._q0.get_rect().intersects(bounds)) this._q0.add(value);
			if(this._q1.get_rect().intersects(bounds)) this._q1.add(value);
			if(this._q2.get_rect().intersects(bounds)) this._q2.add(value);
			if(this._q3.get_rect().intersects(bounds)) this._q3.add(value);
		}
	}
	,clearAll: function() {
		if(this._leaf) this._nodes = (function($this) {
			var $r;
			switch( (funk.collections.mutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.mutable.NilType._nilList;
				break;
			}
			return $r;
		}(this)); else {
			this._q0.clearAll();
			this._q1.clearAll();
			this._q2.clearAll();
			this._q3.clearAll();
		}
	}
	,queryPoint: function(value) {
		if(this._leaf) return this._rect.containsPoint(value)?funk.option.Option.Some(this):funk.option.Option.None; else {
			var op = funk.option.Option.None;
			if(this._q0.get_rect().containsPoint(value)) op = this._q0.queryPoint(value); else if(this._q1.get_rect().containsPoint(value)) op = this._q1.queryPoint(value); else if(this._q2.get_rect().containsPoint(value)) op = this._q2.queryPoint(value); else if(this._q3.get_rect().containsPoint(value)) op = this._q3.queryPoint(value);
			return op;
		}
	}
	,queryRectangle: function(value) {
		return this._leaf?this._rect.intersects(value)?funk.option.Option.Some(this):funk.option.Option.None:this._q0.get_rect().intersects(value)?this._q0.queryRectangle(value):this._q1.get_rect().intersects(value)?this._q1.queryRectangle(value):this._q2.get_rect().intersects(value)?this._q2.queryRectangle(value):this._q3.get_rect().intersects(value)?this._q3.queryRectangle(value):funk.option.Option.None;
	}
	,iterator: function() {
		return this._nodes.iterator();
	}
	,describe: function(buffer,indent) {
		buffer.add(indent + "Level : " + this._level + " - Rect " + this._rect.toString());
		if(!this._leaf) {
			buffer.add(indent + "Quad0:");
			this._q0.describe(buffer,indent + "\t");
			buffer.add(indent + "Quad1:");
			this._q1.describe(buffer,indent + "\t");
			buffer.add(indent + "Quad2:");
			this._q2.describe(buffer,indent + "\t");
			buffer.add(indent + "Quad3:");
			this._q3.describe(buffer,indent + "\t");
		}
	}
	,get_nodes: function() {
		return this._nodes;
	}
	,get_rect: function() {
		return this._rect;
	}
	,set_rect: function(value) {
		this._rect = value.clone();
		if(!this._leaf) {
			var qx = value.x;
			var qy = value.y;
			var qw = value.width * 0.5;
			var qh = value.height * 0.5;
			this._cacheRectangle.width = qw;
			this._cacheRectangle.height = qh;
			this._cacheRectangle.x = qx;
			this._cacheRectangle.y = qy;
			this._q0.set_rect(this._cacheRectangle);
			this._cacheRectangle.x = qx + qw;
			this._cacheRectangle.y = qy;
			this._q1.set_rect(this._cacheRectangle);
			this._cacheRectangle.x = qx;
			this._cacheRectangle.y = qy + qh;
			this._q2.set_rect(this._cacheRectangle);
			this._cacheRectangle.x = qx + qw;
			this._cacheRectangle.y + qy + qh;
			this._q3.set_rect(this._cacheRectangle);
		}
		return value;
	}
	,__class__: funk.gui.core.display._QuadTree.QuadTreeNode
	,__properties__: {set_rect:"set_rect",get_rect:"get_rect",get_nodes:"get_nodes"}
}
funk.gui.core.events.AbstractEvent = function() {
	this._signal = new funk.signal.Signal0();
};
$hxClasses["funk.gui.core.events.AbstractEvent"] = funk.gui.core.events.AbstractEvent;
funk.gui.core.events.AbstractEvent.__name__ = ["funk","gui","core","events","AbstractEvent"];
funk.gui.core.events.AbstractEvent.prototype = {
	size: null
	,_signal: null
	,add: function(func,once) {
		if(once == null) once = false;
		switch(once) {
		case false:
			this._signal.add(func);
			break;
		case true:
			this._signal.addOnce(func);
			break;
		}
	}
	,remove: function(func) {
		this._signal.remove(func);
	}
	,notify: function() {
		this._signal.dispatch();
	}
	,get_size: function() {
		return this._signal.get_size();
	}
	,__class__: funk.gui.core.events.AbstractEvent
	,__properties__: {get_size:"get_size"}
}
funk.gui.core.events.ContainerEventType = function() {
};
$hxClasses["funk.gui.core.events.ContainerEventType"] = funk.gui.core.events.ContainerEventType;
funk.gui.core.events.ContainerEventType.__name__ = ["funk","gui","core","events","ContainerEventType"];
funk.gui.core.events.ContainerEventType.prototype = {
	__class__: funk.gui.core.events.ContainerEventType
}
funk.gui.core.events.ContainerEvent = function(componentType) {
	this.reset(componentType);
};
$hxClasses["funk.gui.core.events.ContainerEvent"] = funk.gui.core.events.ContainerEvent;
funk.gui.core.events.ContainerEvent.__name__ = ["funk","gui","core","events","ContainerEvent"];
funk.gui.core.events.ContainerEvent.prototype = {
	type: null
	,_type: null
	,reset: function(value) {
		this._type = value;
	}
	,getType: function() {
		return this._type;
	}
	,__class__: funk.gui.core.events.ContainerEvent
	,__properties__: {get_type:"getType"}
}
funk.gui.core.events.IComponentEventManager = function() { }
$hxClasses["funk.gui.core.events.IComponentEventManager"] = funk.gui.core.events.IComponentEventManager;
funk.gui.core.events.IComponentEventManager.__name__ = ["funk","gui","core","events","IComponentEventManager"];
funk.gui.core.events.IComponentEventManager.prototype = {
	focus: null
	,isDown: null
	,addEventManagerObserver: null
	,removeEventManagerObserver: null
	,onEventManagerInitialize: null
	,onEventManagerCleanup: null
	,__class__: funk.gui.core.events.IComponentEventManager
	,__properties__: {get_isDown:"get_isDown",set_focus:"set_focus",get_focus:"get_focus"}
}
funk.gui.core.events.ComponentEventManagerUpdateType = $hxClasses["funk.gui.core.events.ComponentEventManagerUpdateType"] = { __ename__ : ["funk","gui","core","events","ComponentEventManagerUpdateType"], __constructs__ : ["RESIZE"] }
funk.gui.core.events.ComponentEventManagerUpdateType.RESIZE = function(width,height) { var $x = ["RESIZE",0,width,height]; $x.__enum__ = funk.gui.core.events.ComponentEventManagerUpdateType; $x.toString = $estr; return $x; }
funk.gui.core.events.IEvent = function() { }
$hxClasses["funk.gui.core.events.IEvent"] = funk.gui.core.events.IEvent;
funk.gui.core.events.IEvent.__name__ = ["funk","gui","core","events","IEvent"];
funk.gui.core.events.IEvent.prototype = {
	size: null
	,add: null
	,remove: null
	,__class__: funk.gui.core.events.IEvent
	,__properties__: {get_size:"get_size"}
}
funk.gui.core.events.UIEventType = $hxClasses["funk.gui.core.events.UIEventType"] = { __ename__ : ["funk","gui","core","events","UIEventType"], __constructs__ : ["FOCUS_OUT","FOCUS_IN","MOUSE_IN","MOUSE_DOWN","MOUSE_MOVE","MOUSE_UP","MOUSE_OUT","KEY_DOWN"] }
funk.gui.core.events.UIEventType.FOCUS_OUT = ["FOCUS_OUT",0];
funk.gui.core.events.UIEventType.FOCUS_OUT.toString = $estr;
funk.gui.core.events.UIEventType.FOCUS_OUT.__enum__ = funk.gui.core.events.UIEventType;
funk.gui.core.events.UIEventType.FOCUS_IN = function(focusOut,focusIn) { var $x = ["FOCUS_IN",1,focusOut,focusIn]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.MOUSE_IN = function(position) { var $x = ["MOUSE_IN",2,position]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.MOUSE_DOWN = function(position) { var $x = ["MOUSE_DOWN",3,position]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.MOUSE_MOVE = function(position,downPosition) { var $x = ["MOUSE_MOVE",4,position,downPosition]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.MOUSE_UP = function(position) { var $x = ["MOUSE_UP",5,position]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.MOUSE_OUT = function(position) { var $x = ["MOUSE_OUT",6,position]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEventType.KEY_DOWN = function(keyCode,ctrlKey,shiftKey,altKey) { var $x = ["KEY_DOWN",7,keyCode,ctrlKey,shiftKey,altKey]; $x.__enum__ = funk.gui.core.events.UIEventType; $x.toString = $estr; return $x; }
funk.gui.core.events.UIEvent = function(type) {
	this._type = type;
	this.bubbles = true;
};
$hxClasses["funk.gui.core.events.UIEvent"] = funk.gui.core.events.UIEvent;
funk.gui.core.events.UIEvent.__name__ = ["funk","gui","core","events","UIEvent"];
funk.gui.core.events.UIEvent.prototype = {
	target: null
	,currentTarget: null
	,lastTarget: null
	,bubbles: null
	,type: null
	,_type: null
	,getType: function() {
		return this._type;
	}
	,__class__: funk.gui.core.events.UIEvent
	,__properties__: {get_type:"getType"}
}
funk.gui.core.geom = {}
funk.gui.core.geom.LayoutSize = function() {
	this.min = new funk.gui.core.geom.Size();
	this.max = new funk.gui.core.geom.Size();
	this.size = new funk.gui.core.geom.Size();
};
$hxClasses["funk.gui.core.geom.LayoutSize"] = funk.gui.core.geom.LayoutSize;
funk.gui.core.geom.LayoutSize.__name__ = ["funk","gui","core","geom","LayoutSize"];
funk.gui.core.geom.LayoutSize.prototype = {
	min: null
	,max: null
	,size: null
	,setMinSize: function(width,height) {
		this.min.width = width;
		this.min.height = height;
	}
	,setMaxSize: function(width,height) {
		this.max.width = width;
		this.max.height = height;
	}
	,setSize: function(width,height) {
		this.size.width = width;
		this.size.height = height;
	}
	,setFixedSize: function(width,height) {
		this.setMinSize(width,height);
		this.setMaxSize(width,height);
		this.setSize(width,height);
	}
	,__class__: funk.gui.core.geom.LayoutSize
}
funk.gui.core.geom.Point = function(x,y) {
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.moveTo(x,y);
};
$hxClasses["funk.gui.core.geom.Point"] = funk.gui.core.geom.Point;
funk.gui.core.geom.Point.__name__ = ["funk","gui","core","geom","Point"];
funk.gui.core.geom.Point.prototype = {
	x: null
	,y: null
	,clone: function() {
		return new funk.gui.core.geom.Point(this.x,this.y);
	}
	,moveTo: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,normalize: function(value) {
		if(this.x == 0 && this.y == 0) this.x = value; else {
			var norm = value / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,__class__: funk.gui.core.geom.Point
}
funk.gui.core.geom.Rectangle = function(x,y,w,h) {
	if(h == null) h = 0.0;
	if(w == null) w = 0.0;
	if(y == null) y = 0.0;
	if(x == null) x = 0.0;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
};
$hxClasses["funk.gui.core.geom.Rectangle"] = funk.gui.core.geom.Rectangle;
funk.gui.core.geom.Rectangle.__name__ = ["funk","gui","core","geom","Rectangle"];
funk.gui.core.geom.Rectangle.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,left: null
	,right: null
	,top: null
	,bottom: null
	,topLeft: null
	,bottomRight: null
	,clone: function() {
		return new funk.gui.core.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,equals: function(rect) {
		return this.x == rect.x && this.y == rect.y && this.width == rect.width && this.height == rect.height;
	}
	,setValues: function(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}
	,moveTo: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,resizeTo: function(w,h) {
		this.width = w;
		this.height = h;
	}
	,containsPoint: function(point) {
		var px = point.x;
		var py = point.y;
		return px >= this.x && px < this.getRight() && py >= this.y && py < this.getBottom();
	}
	,containsRect: function(rect) {
		var rx = rect.x;
		var ry = rect.y;
		var rw = rx + rect.width;
		var rh = ry + rect.height;
		return rx >= this.x && rx < this.getRight() && ry >= this.y && ry < this.getBottom() && (rw >= this.x && rw < this.getRight() && rh >= this.y && rh < this.getBottom());
	}
	,intersects: function(rect) {
		return !(rect.x > this.getRight() || rect.getRight() < this.getLeft() || rect.getTop() > this.getBottom() || rect.getBottom() < this.getTop());
	}
	,expand: function(value) {
		this.x -= value;
		this.y -= value;
		this.width += value;
		this.height += value;
	}
	,union: function(rect) {
		var nx = this.x < rect.x?this.x:rect.x;
		var ny = this.y < rect.y?this.y:rect.y;
		var nr = this.getRight() > rect.getRight()?this.getRight():rect.getRight();
		var nb = this.getBottom() > rect.getBottom()?this.getBottom():rect.getBottom();
		return new funk.gui.core.geom.Rectangle(nx,ny,nr - nx,nb - ny);
	}
	,getLeft: function() {
		return this.x;
	}
	,setLeft: function(value) {
		this.width += this.x - value;
		this.x = value;
		return value;
	}
	,getRight: function() {
		return this.x + this.width;
	}
	,setRight: function(value) {
		this.width = Math.max(value - this.x,0);
		return value;
	}
	,getTop: function() {
		return this.y;
	}
	,setTop: function(value) {
		this.height += this.y - value;
		this.y = value;
		return value;
	}
	,getBottom: function() {
		return this.y + this.height;
	}
	,setBottom: function(value) {
		this.height = Math.max(value - this.y,0);
		return value;
	}
	,getTopLeft: function() {
		return new funk.gui.core.geom.Point(this.x,this.y);
	}
	,setTopLeft: function(value) {
		this.setLeft(value.x);
		this.setTop(value.y);
		return value;
	}
	,getBottomRight: function() {
		return new funk.gui.core.geom.Point(this.x + this.width,this.y + this.height);
	}
	,setBottomRight: function(value) {
		this.setRight(value.x);
		this.setBottom(value.y);
		return value;
	}
	,toString: function() {
		return "{x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "}";
	}
	,__class__: funk.gui.core.geom.Rectangle
	,__properties__: {set_bottomRight:"setBottomRight",get_bottomRight:"getBottomRight",set_topLeft:"setTopLeft",get_topLeft:"getTopLeft",set_bottom:"setBottom",get_bottom:"getBottom",set_top:"setTop",get_top:"getTop",set_right:"setRight",get_right:"getRight",set_left:"setLeft",get_left:"getLeft"}
}
funk.gui.core.geom.Size = function(w,h) {
	if(h == null) h = 0.0;
	if(w == null) w = 0.0;
	this.resizeTo(w,h);
};
$hxClasses["funk.gui.core.geom.Size"] = funk.gui.core.geom.Size;
funk.gui.core.geom.Size.__name__ = ["funk","gui","core","geom","Size"];
funk.gui.core.geom.Size.prototype = {
	width: null
	,height: null
	,resizeTo: function(w,h) {
		this.width = w;
		this.height = h;
	}
	,__class__: funk.gui.core.geom.Size
}
funk.gui.core.geom.TRBL = function(t,r,b,l) {
	if(l == null) l = 0.0;
	if(b == null) b = 0.0;
	if(r == null) r = 0.0;
	if(t == null) t = 0.0;
	this.setValues(t,r,b,l);
};
$hxClasses["funk.gui.core.geom.TRBL"] = funk.gui.core.geom.TRBL;
funk.gui.core.geom.TRBL.__name__ = ["funk","gui","core","geom","TRBL"];
funk.gui.core.geom.TRBL.prototype = {
	top: null
	,right: null
	,bottom: null
	,left: null
	,setValues: function(t,r,b,l) {
		this.top = t;
		this.right = r;
		this.bottom = b;
		this.left = l;
	}
	,__class__: funk.gui.core.geom.TRBL
}
funk.gui.core.observables = {}
funk.gui.core.observables.ComponentModelObserver = function(component) {
	this._component = component;
};
$hxClasses["funk.gui.core.observables.ComponentModelObserver"] = funk.gui.core.observables.ComponentModelObserver;
funk.gui.core.observables.ComponentModelObserver.__name__ = ["funk","gui","core","observables","ComponentModelObserver"];
funk.gui.core.observables.ComponentModelObserver.__interfaces__ = [funk.gui.core.IComponentModelObserver];
funk.gui.core.observables.ComponentModelObserver.prototype = {
	_component: null
	,onComponentModelUpdate: function(componentModel,type) {
		if(this._component.get_view() != null) this._component.get_view().onComponentModelUpdate(componentModel,type);
	}
	,__class__: funk.gui.core.observables.ComponentModelObserver
}
funk.gui.core.observables.ComponentStateObserver = function(component) {
	this._component = component;
	this._componentNS = component;
};
$hxClasses["funk.gui.core.observables.ComponentStateObserver"] = funk.gui.core.observables.ComponentStateObserver;
funk.gui.core.observables.ComponentStateObserver.__name__ = ["funk","gui","core","observables","ComponentStateObserver"];
funk.gui.core.observables.ComponentStateObserver.__interfaces__ = [funk.gui.core.IComponentStateObserver];
funk.gui.core.observables.ComponentStateObserver.prototype = {
	_component: null
	,_componentNS: null
	,onComponentStateUpdate: function(componentState,type) {
		if(this._component.get_view() != null) this._component.get_view().onComponentStateUpdate(componentState,type);
		switch( (type)[1] ) {
		case 1:
			this._componentNS.dispatchComponentEvent(componentState.enabled?funk.gui.core.events.ComponentEventType.ENABLE:funk.gui.core.events.ComponentEventType.DISABLE);
			break;
		case 2:
			this._componentNS.dispatchComponentEvent(componentState.hovered?funk.gui.core.events.ComponentEventType.HOVER_IN:funk.gui.core.events.ComponentEventType.HOVER_OUT);
			break;
		case 3:
			this._componentNS.dispatchComponentEvent(componentState.focused?funk.gui.core.events.ComponentEventType.FOCUS_IN:funk.gui.core.events.ComponentEventType.FOCUS_OUT);
			break;
		case 4:
			this._componentNS.dispatchComponentEvent(componentState.pressed?funk.gui.core.events.ComponentEventType.PRESS:funk.gui.core.events.ComponentEventType.RELEASE);
			break;
		default:
		}
	}
	,__class__: funk.gui.core.observables.ComponentStateObserver
}
funk.gui.core.parameter = {}
funk.gui.core.parameter.IParameterMapping = function() { }
$hxClasses["funk.gui.core.parameter.IParameterMapping"] = funk.gui.core.parameter.IParameterMapping;
funk.gui.core.parameter.IParameterMapping.__name__ = ["funk","gui","core","parameter","IParameterMapping"];
funk.gui.core.parameter.IParameterMapping.prototype = {
	map: null
	,unmap: null
	,__class__: funk.gui.core.parameter.IParameterMapping
}
funk.gui.core.parameter.IParameterObserver = function() { }
$hxClasses["funk.gui.core.parameter.IParameterObserver"] = funk.gui.core.parameter.IParameterObserver;
funk.gui.core.parameter.IParameterObserver.__name__ = ["funk","gui","core","parameter","IParameterObserver"];
funk.gui.core.parameter.IParameterObserver.prototype = {
	onParameterValueChanged: null
	,onParameterNormalisedValueChanged: null
	,__class__: funk.gui.core.parameter.IParameterObserver
}
funk.gui.core.parameter.Parameter = function(mapping,value) {
	this._mapping = mapping;
	this._value = value;
	this._defaultValue = value;
	this._valueSignal = new funk.signal.Signal2();
	this._normalisedValueSignal = new funk.signal.Signal2();
};
$hxClasses["funk.gui.core.parameter.Parameter"] = funk.gui.core.parameter.Parameter;
funk.gui.core.parameter.Parameter.__name__ = ["funk","gui","core","parameter","Parameter"];
funk.gui.core.parameter.Parameter.prototype = {
	value: null
	,_value: null
	,_defaultValue: null
	,_normalisedValue: null
	,_mapping: null
	,_valueSignal: null
	,_normalisedValueSignal: null
	,addParameterObserver: function(observer) {
		this._valueSignal.add(observer.onParameterValueChanged.$bind(observer));
		this._normalisedValueSignal.add(observer.onParameterNormalisedValueChanged.$bind(observer));
		return observer;
	}
	,removeParameterObserver: function(observer) {
		this._valueSignal.remove(observer.onParameterValueChanged.$bind(observer));
		this._normalisedValueSignal.remove(observer.onParameterNormalisedValueChanged.$bind(observer));
		return observer;
	}
	,valueChanged: function(v) {
		if(v != this._value) this._valueSignal.dispatch(v,this._value);
	}
	,normalisedValueChanged: function(v) {
		if(v != this._normalisedValue) this._normalisedValueSignal.dispatch(v,this._normalisedValue);
	}
	,getValue: function() {
		return this._value;
	}
	,setValue: function(value) {
		var v = this._value;
		var n = this._normalisedValue;
		this._value = value;
		this._normalisedValue = this._mapping.map(value);
		this.valueChanged(v);
		this.normalisedValueChanged(n);
		return this._value;
	}
	,__class__: funk.gui.core.parameter.Parameter
	,__properties__: {set_value:"setValue",get_value:"getValue"}
}
funk.gui.core.parameter.mappings = {}
funk.gui.core.parameter.mappings.MappingBoolInt = function() {
};
$hxClasses["funk.gui.core.parameter.mappings.MappingBoolInt"] = funk.gui.core.parameter.mappings.MappingBoolInt;
funk.gui.core.parameter.mappings.MappingBoolInt.__name__ = ["funk","gui","core","parameter","mappings","MappingBoolInt"];
funk.gui.core.parameter.mappings.MappingBoolInt.__interfaces__ = [funk.gui.core.parameter.IParameterMapping];
funk.gui.core.parameter.mappings.MappingBoolInt.prototype = {
	map: function(value) {
		return value?1:0;
	}
	,unmap: function(value) {
		return value >= 1;
	}
	,__class__: funk.gui.core.parameter.mappings.MappingBoolInt
}
funk.gui.js = {}
funk.gui.js.core = {}
funk.gui.js.core.display = {}
funk.gui.js.core.display.Graphics = function() {
	this._dirty = false;
	this._bounds = new funk.gui.core.geom.Rectangle(999999999.0,999999999.0,0.0,0.0);
	this._previousBounds = new funk.gui.core.geom.Rectangle();
};
$hxClasses["funk.gui.js.core.display.Graphics"] = funk.gui.js.core.display.Graphics;
funk.gui.js.core.display.Graphics.__name__ = ["funk","gui","js","core","display","Graphics"];
funk.gui.js.core.display.Graphics.prototype = {
	commands: null
	,bounds: null
	,previousBounds: null
	,isDirty: null
	,_list: null
	,_tx: null
	,_ty: null
	,_bounds: null
	,_previousBounds: null
	,_dirty: null
	,clear: function() {
		this.invalidate();
		this._tx = 0;
		this._ty = 0;
		if(this._bounds.x == 999999999.0 && this._bounds.y == 999999999.0 && this._bounds.width == 0.0 && this._bounds.height == 0.0) this._previousBounds.setValues(0,0,0,0); else this._previousBounds.setValues(this._bounds.x,this._bounds.y,this._bounds.width,this._bounds.height);
		this._list = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsClear(this._previousBounds));
		this._bounds.setValues(999999999.0,999999999.0,0.0,0.0);
	}
	,endFill: function() {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsEndFill());
	}
	,beginFill: function(color,alpha) {
		if(alpha == null) alpha = 1.0;
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsBeginFill(color,alpha));
	}
	,beginGradientFill: function(colors,alphas,ratios) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsGradientFill(colors,alphas,ratios));
	}
	,drawRect: function(x,y,width,height) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsRectangle(x,y,width,height));
		var tx = this._tx + x;
		var ty = this._ty + y;
		if(tx < this._bounds.x) this._bounds.x = tx;
		if(ty < this._bounds.y) this._bounds.y = ty;
		if(width > this._bounds.width) this._bounds.width = width;
		if(height > this._bounds.height) this._bounds.height = height;
	}
	,drawRoundRect: function(x,y,width,height,radius) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsRoundedRectangle(x,y,width,height,radius));
		var tx = this._tx + x;
		var ty = this._ty + y;
		if(tx < this._bounds.x) this._bounds.x = tx;
		if(ty < this._bounds.y) this._bounds.y = ty;
		if(width > this._bounds.width) this._bounds.width = width;
		if(height > this._bounds.height) this._bounds.height = height;
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius));
		var tx = this._tx + x;
		var ty = this._ty + y;
		if(tx < this._bounds.x) this._bounds.x = tx;
		if(ty < this._bounds.y) this._bounds.y = ty;
		if(width > this._bounds.width) this._bounds.width = width;
		if(height > this._bounds.height) this._bounds.height = height;
	}
	,drawCircle: function(x,y,radius) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsCircle(x,y,radius));
		var r = radius * 2.0;
		var tx = this._tx + x - radius;
		var ty = this._ty + y - radius;
		if(tx < this._bounds.x) this._bounds.x = tx;
		if(ty < this._bounds.y) this._bounds.y = ty;
		if(r > this._bounds.width) this._bounds.width = r;
		if(r > this._bounds.height) this._bounds.height = r;
	}
	,restore: function() {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsRestore());
	}
	,save: function() {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsSave());
	}
	,translate: function(x,y) {
		this.invalidate();
		this._list = this._list.append(new funk.gui.js.core.display.commands.GraphicsTranslate(x,y));
		this._tx = x;
		this._ty = y;
		if(x < this._bounds.x) this._bounds.x = x;
		if(y < this._bounds.y) this._bounds.y = y;
	}
	,invalidate: function() {
		this._dirty = true;
	}
	,validated: function() {
		this._dirty = false;
		this._previousBounds.setValues(this._bounds.x,this._bounds.y,this._bounds.width,this._bounds.height);
	}
	,getCommands: function() {
		return this._list;
	}
	,getBounds: function() {
		return this._bounds;
	}
	,getPreviousBounds: function() {
		return this._previousBounds;
	}
	,getDirty: function() {
		return this._dirty;
	}
	,__class__: funk.gui.js.core.display.Graphics
	,__properties__: {get_isDirty:"getDirty",get_previousBounds:"getPreviousBounds",get_bounds:"getBounds",get_commands:"getCommands"}
}
funk.gui.js.core.display.GraphicsComponentView = function(graphics) {
	funk.gui.core.ComponentView.call(this);
	if(graphics != null) this._graphics = graphics; else this._graphics = new funk.gui.js.core.display.Graphics();
};
$hxClasses["funk.gui.js.core.display.GraphicsComponentView"] = funk.gui.js.core.display.GraphicsComponentView;
funk.gui.js.core.display.GraphicsComponentView.__name__ = ["funk","gui","js","core","display","GraphicsComponentView"];
funk.gui.js.core.display.GraphicsComponentView.__super__ = funk.gui.core.ComponentView;
funk.gui.js.core.display.GraphicsComponentView.prototype = $extend(funk.gui.core.ComponentView.prototype,{
	graphics: null
	,_graphics: null
	,moveTo: function(x,y) {
		funk.gui.core.ComponentView.prototype.moveTo.call(this,x,y);
		this._graphics.invalidate();
	}
	,getGraphics: function() {
		return this._graphics;
	}
	,__class__: funk.gui.js.core.display.GraphicsComponentView
	,__properties__: $extend(funk.gui.core.ComponentView.prototype.__properties__,{get_graphics:"getGraphics"})
});
funk.gui.js.core.display.GraphicsCommandType = $hxClasses["funk.gui.js.core.display.GraphicsCommandType"] = { __ename__ : ["funk","gui","js","core","display","GraphicsCommandType"], __constructs__ : ["BEGIN_FILL","CIRCLE","CLEAR","END_FILL","MOVE_TO","LINE_TO","RECT","RESTORE","ROUNDED_RECT","SAVE","TRANSLATE"] }
funk.gui.js.core.display.GraphicsCommandType.BEGIN_FILL = function(type) { var $x = ["BEGIN_FILL",0,type]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.CIRCLE = function(x,y,radius) { var $x = ["CIRCLE",1,x,y,radius]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.CLEAR = function(bounds) { var $x = ["CLEAR",2,bounds]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.END_FILL = ["END_FILL",3];
funk.gui.js.core.display.GraphicsCommandType.END_FILL.toString = $estr;
funk.gui.js.core.display.GraphicsCommandType.END_FILL.__enum__ = funk.gui.js.core.display.GraphicsCommandType;
funk.gui.js.core.display.GraphicsCommandType.MOVE_TO = function(x,y) { var $x = ["MOVE_TO",4,x,y]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.LINE_TO = function(x,y) { var $x = ["LINE_TO",5,x,y]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.RECT = function(x,y,width,height) { var $x = ["RECT",6,x,y,width,height]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.RESTORE = ["RESTORE",7];
funk.gui.js.core.display.GraphicsCommandType.RESTORE.toString = $estr;
funk.gui.js.core.display.GraphicsCommandType.RESTORE.__enum__ = funk.gui.js.core.display.GraphicsCommandType;
funk.gui.js.core.display.GraphicsCommandType.ROUNDED_RECT = function(x,y,width,height,radius) { var $x = ["ROUNDED_RECT",8,x,y,width,height,radius]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsCommandType.SAVE = ["SAVE",9];
funk.gui.js.core.display.GraphicsCommandType.SAVE.toString = $estr;
funk.gui.js.core.display.GraphicsCommandType.SAVE.__enum__ = funk.gui.js.core.display.GraphicsCommandType;
funk.gui.js.core.display.GraphicsCommandType.TRANSLATE = function(x,y) { var $x = ["TRANSLATE",10,x,y]; $x.__enum__ = funk.gui.js.core.display.GraphicsCommandType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsFillType = $hxClasses["funk.gui.js.core.display.GraphicsFillType"] = { __ename__ : ["funk","gui","js","core","display","GraphicsFillType"], __constructs__ : ["SOLID","GRADIENT"] }
funk.gui.js.core.display.GraphicsFillType.SOLID = function(color,alpha) { var $x = ["SOLID",0,color,alpha]; $x.__enum__ = funk.gui.js.core.display.GraphicsFillType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.GraphicsFillType.GRADIENT = function(colors,alphas,ratios) { var $x = ["GRADIENT",1,colors,alphas,ratios]; $x.__enum__ = funk.gui.js.core.display.GraphicsFillType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.RoundedRectRadiusType = $hxClasses["funk.gui.js.core.display.RoundedRectRadiusType"] = { __ename__ : ["funk","gui","js","core","display","RoundedRectRadiusType"], __constructs__ : ["ALL","EACH"] }
funk.gui.js.core.display.RoundedRectRadiusType.ALL = function(radius) { var $x = ["ALL",0,radius]; $x.__enum__ = funk.gui.js.core.display.RoundedRectRadiusType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.RoundedRectRadiusType.EACH = function(topLeft,topRight,bottomLeft,bottomRight) { var $x = ["EACH",1,topLeft,topRight,bottomLeft,bottomRight]; $x.__enum__ = funk.gui.js.core.display.RoundedRectRadiusType; $x.toString = $estr; return $x; }
funk.gui.js.core.display.IGraphicsCommand = function() { }
$hxClasses["funk.gui.js.core.display.IGraphicsCommand"] = funk.gui.js.core.display.IGraphicsCommand;
funk.gui.js.core.display.IGraphicsCommand.__name__ = ["funk","gui","js","core","display","IGraphicsCommand"];
funk.gui.js.core.display.IGraphicsCommand.prototype = {
	type: null
	,__class__: funk.gui.js.core.display.IGraphicsCommand
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.Painter = function(context,debugContext,highQuality) {
	this._context = context;
	this._debugContext = debugContext;
	this._highQuality = highQuality;
	this._list = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	this._bounds = new funk.gui.core.geom.Rectangle();
	this._debug = false;
	this._overdraw = false;
	this._mergeIntersections = true;
};
$hxClasses["funk.gui.js.core.display.Painter"] = funk.gui.js.core.display.Painter;
funk.gui.js.core.display.Painter.__name__ = ["funk","gui","js","core","display","Painter"];
funk.gui.js.core.display.Painter.prototype = {
	bounds: null
	,size: null
	,debug: null
	,_context: null
	,_bounds: null
	,_list: null
	,_highQuality: null
	,_overdraw: null
	,_mergeIntersections: null
	,_debug: null
	,_debugContext: null
	,_debugClearIteration: null
	,add: function(graphics,rect) {
		if(rect.width <= 0 || rect.height <= 0) return;
		this._list = this._list.append(graphics);
	}
	,removeAll: function() {
		this._list = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,render: function() {
		var graphics;
		var invalidGraphics = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var clearRects = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		var p = this._list;
		while(p.get_nonEmpty()) {
			graphics = p.get_head();
			if(this._highQuality) graphics.invalidate(); else if(graphics.getDirty()) this.markInvalidatedGraphics(graphics,this._list);
			p = p.get_tail();
		}
		if(this._highQuality) this._context.clearRect(this._bounds.x,this._bounds.y,this._bounds.width,this._bounds.height); else {
			p = this._list;
			while(p.get_nonEmpty()) {
				graphics = p.get_head();
				if(graphics.getDirty()) {
					var preBounds = graphics.getPreviousBounds();
					clearRects = this.markIntersections(preBounds,clearRects);
				}
				p = p.get_tail();
			}
			if(this._mergeIntersections) {
				var p1 = this._list;
				while(p1.get_nonEmpty()) {
					graphics = p1.get_head();
					if(!graphics.getDirty()) this.remarkInvalidatedGraphics(graphics,clearRects);
					p1 = p1.get_tail();
				}
			}
			if(!this._overdraw) {
				var b = clearRects;
				while(b.get_nonEmpty()) {
					var rect = b.get_head();
					if(rect.width > 0 && rect.height > 0) this._context.clearRect(rect.x,rect.y,rect.width,rect.height);
					b = b.get_tail();
				}
			}
		}
		p = this._list;
		while(p.get_nonEmpty()) {
			graphics = p.get_head();
			if(graphics.getDirty()) {
				var hasFill = false;
				var hasPathOpen = false;
				var commands = graphics.getCommands();
				var $it0 = commands.iterator();
				while( $it0.hasNext() ) {
					var c = $it0.next();
					var command = c;
					var $e = (command.get_type());
					switch( $e[1] ) {
					case 0:
						var type = $e[2];
						hasFill = true;
						var $e = (type);
						switch( $e[1] ) {
						case 0:
							var alpha = $e[3], color = $e[2];
							this._context.fillStyle = StringTools.hex(color,6);
							break;
						case 1:
							var ratios = $e[4], alphas = $e[3], colors = $e[2];
							var gHeight = graphics.getBounds().height;
							var gradient = this._context.createLinearGradient(0,0,0,gHeight);
							var colorTotal = colors.length;
							var _g = 0;
							while(_g < colorTotal) {
								var k = _g++;
								var col = StringTools.hex(colors[k],6);
								gradient.addColorStop(ratios[k],col);
							}
							this._context.fillStyle = gradient;
							break;
						}
						break;
					case 1:
						var radius = $e[4], y = $e[3], x = $e[2];
						if(!hasPathOpen) {
							hasPathOpen = true;
							this._context.beginPath();
						}
						this._context.arc(x,y,radius,0,Math.PI * 2,hasFill);
						break;
					case 2:
						var bounds = $e[2];
						hasFill = false;
						hasPathOpen = false;
						break;
					case 3:
						if(hasPathOpen) {
							hasPathOpen = false;
							this._context.closePath();
						}
						this._context.fill();
						break;
					case 4:
						var y = $e[3], x = $e[2];
						this._context.moveTo(x,y);
						break;
					case 5:
						var y = $e[3], x = $e[2];
						this._context.lineTo(x,y);
						break;
					case 9:
						this._context.save();
						break;
					case 6:
						var height = $e[5], width = $e[4], y = $e[3], x = $e[2];
						this._context.fillRect(x,y,width,height);
						break;
					case 7:
						this._context.restore();
						break;
					case 8:
						var radius = $e[6], height = $e[5], width = $e[4], y = $e[3], x = $e[2];
						if(hasPathOpen) {
							hasPathOpen = false;
							this._context.closePath();
						}
						var tl, tr, bl, br;
						var $e = (radius);
						switch( $e[1] ) {
						case 0:
							var r = $e[2];
							tl = tr = bl = br = r;
							break;
						case 1:
							var brr = $e[5], blr = $e[4], trr = $e[3], tlr = $e[2];
							tl = tlr;
							tr = trr;
							bl = blr;
							br = brr;
							break;
						}
						this._context.beginPath();
						this._context.moveTo(x + tl,y);
						this._context.lineTo(x + width - tr,y);
						this._context.quadraticCurveTo(x + width,y,x + width,y + tr);
						this._context.lineTo(x + width,y + height - br);
						this._context.quadraticCurveTo(x + width,y + height,x + width - br,y + height);
						this._context.lineTo(x + bl,y + height);
						this._context.quadraticCurveTo(x,y + height,x,y + height - bl);
						this._context.lineTo(x,y + tl);
						this._context.quadraticCurveTo(x,y,x + tl,y);
						this._context.closePath();
						break;
					case 10:
						var y = $e[3], x = $e[2];
						this._context.translate(x,y);
						break;
					}
				}
				graphics.validated();
			}
			p = p.get_tail();
		}
		if(this._debug && clearRects.get_nonEmpty()) {
			this._debugContext.save();
			if(this._debugClearIteration++ % 20 == 0) this._debugContext.clearRect(this._bounds.x,this._bounds.y,this._bounds.width,this._bounds.height);
			this._debugContext.fillStyle = "rgba(255, 0, 0, 0.2)";
			var b = clearRects;
			while(b.get_nonEmpty()) {
				var cr = b.get_head();
				this._debugContext.fillRect(cr.x,cr.y,cr.width,cr.height);
				b = b.get_tail();
			}
			this._debugContext.restore();
		}
	}
	,iterator: function() {
		return this._list.iterator();
	}
	,markInvalidatedGraphics: function(graphics,list) {
		if(list.get_nonEmpty()) {
			var gb = graphics.getBounds();
			var gpb = graphics.getPreviousBounds();
			var p = list;
			while(p.get_nonEmpty()) {
				var other = p.get_head();
				if(graphics != other && !other.getDirty()) {
					var ob = other.getBounds();
					var opb = other.getPreviousBounds();
					if(!(ob.x > gb.getRight() || ob.getRight() < gb.getLeft() || ob.getTop() > gb.getBottom() || ob.getBottom() < gb.getTop()) || !(ob.x > gpb.getRight() || ob.getRight() < gpb.getLeft() || ob.getTop() > gpb.getBottom() || ob.getBottom() < gpb.getTop()) || !(opb.x > gb.getRight() || opb.getRight() < gb.getLeft() || opb.getTop() > gb.getBottom() || opb.getBottom() < gb.getTop()) || !(opb.x > gpb.getRight() || opb.getRight() < gpb.getLeft() || opb.getTop() > gpb.getBottom() || opb.getBottom() < gpb.getTop())) other.invalidate();
				}
				p = p.get_tail();
			}
		}
	}
	,remarkInvalidatedGraphics: function(graphics,list) {
		if(list.get_nonEmpty()) {
			var gb = graphics.getBounds();
			var gpb = graphics.getPreviousBounds();
			var p = list;
			while(p.get_nonEmpty()) {
				var other = p.get_head();
				if(!(other.x > gb.getRight() || other.getRight() < gb.getLeft() || other.getTop() > gb.getBottom() || other.getBottom() < gb.getTop()) || !(other.x > gpb.getRight() || other.getRight() < gpb.getLeft() || other.getTop() > gpb.getBottom() || other.getBottom() < gpb.getTop())) graphics.invalidate();
				p = p.get_tail();
			}
		}
	}
	,markIntersections: function(rect,list) {
		var result = list;
		if(this._mergeIntersections) {
			var added = false;
			var p = result;
			while(p.get_nonEmpty()) {
				var r = p.get_head();
				if(!(rect.x > r.getRight() || rect.getRight() < r.getLeft() || rect.getTop() > r.getBottom() || rect.getBottom() < r.getTop())) {
					added = true;
					this.union(r,rect);
					break;
				}
				p = p.get_tail();
			}
			if(!added) result = result.prepend(rect.clone());
		} else result = result.prepend(rect);
		return result;
	}
	,union: function(a,b) {
		var x = a.x < b.x?a.x:b.x;
		var y = a.y < b.y?a.y:b.y;
		var w = a.getRight() > b.getRight()?a.getRight():b.getRight();
		var h = a.getBottom() > b.getBottom()?a.getBottom():b.getBottom();
		a.x = x;
		a.y = y;
		a.width = w - x;
		a.height = h - y;
	}
	,getBounds: function() {
		return this._bounds;
	}
	,getSize: function() {
		return this._list.get_size();
	}
	,getDebug: function() {
		return this._debug;
	}
	,setDebug: function(value) {
		this._debug = value;
		if(this._debug) {
			this._debugClearIteration = 0;
			this._debugContext.clearRect(this._bounds.x,this._bounds.y,this._bounds.width,this._bounds.height);
		}
		return this._debug;
	}
	,__class__: funk.gui.js.core.display.Painter
	,__properties__: {set_debug:"setDebug",get_debug:"getDebug",get_size:"getSize",get_bounds:"getBounds"}
}
funk.gui.js.core.display.RenderManager = function(highQuality) {
	if(highQuality == null) highQuality = false;
	this._highQuality = highQuality;
	this._signal = new funk.signal.Signal2();
};
$hxClasses["funk.gui.js.core.display.RenderManager"] = funk.gui.js.core.display.RenderManager;
funk.gui.js.core.display.RenderManager.__name__ = ["funk","gui","js","core","display","RenderManager"];
funk.gui.js.core.display.RenderManager.__interfaces__ = [funk.gui.core.IContainerObserver,funk.gui.core.display.IComponentRenderManager];
funk.gui.js.core.display.RenderManager.prototype = {
	context: null
	,debug: null
	,_root: null
	,_window: null
	,_document: null
	,_context: null
	,_canvas2dContext: null
	,_debugContext: null
	,_debugCanvas2dContext: null
	,_painter: null
	,_signal: null
	,_highQuality: null
	,_rootModified: null
	,addRenderManagerObserver: function(observer) {
		this._signal.add(observer.onComponentRenderManagerUpdate.$bind(observer));
		return observer;
	}
	,removeRenderManagerObserver: function(observer) {
		this._signal.remove(observer.onComponentRenderManagerUpdate.$bind(observer));
		return observer;
	}
	,onRenderManagerInitialize: function(root) {
		this._root = root;
		this._root.addContainerObserver(this);
		this._window = window;
		this._document = CommonJS.getHtmlDocument();
		this._context = CommonJS.newElement("canvas",this._document);
		this._context.id = "gui-hx";
		this._context.className = "gui-hx-canvas";
		this._document.body.appendChild(this._context);
		this._canvas2dContext = this._context.getContext("2d");
		this._debugContext = CommonJS.newElement("canvas",this._document);
		this._debugContext.id = "gui-hx-debug";
		this._debugContext.className = "gui-hx-debug-canvas";
		this._debugCanvas2dContext = this._debugContext.getContext("2d");
		this._painter = new funk.gui.js.core.display.Painter(this._canvas2dContext,this._debugCanvas2dContext,this._highQuality);
		this.resizeTo(this._window.innerWidth,this._window.innerHeight);
	}
	,onRenderManagerCleanup: function() {
		this._window = null;
		this._document = null;
		this._context = null;
	}
	,invalidate: function() {
		funk.gui.js.core.event.Events.render.add(this.render.$bind(this));
	}
	,resizeTo: function(width,height) {
		var nw = width | 0;
		var nh = height | 0;
		if(this._highQuality) {
			this._context.style.width = nw + "px";
			this._context.style.height = nh + "px";
			var mw = nw * 2 | 0;
			var mh = nh * 2 | 0;
			this._canvas2dContext.canvas.width = mw;
			this._canvas2dContext.canvas.height = mh;
			this._canvas2dContext.scale(2,2);
			this._painter.getBounds().width = mw;
			this._painter.getBounds().height = mh;
		} else {
			this._canvas2dContext.canvas.width = nw;
			this._canvas2dContext.canvas.height = nh;
			this._painter.getBounds().width = nw;
			this._painter.getBounds().height = nh;
		}
		if(this._painter.getDebug()) {
			this._debugCanvas2dContext.canvas.width = nw;
			this._debugCanvas2dContext.canvas.height = nh;
		}
		var itr = this._painter.iterator();
		while( itr.hasNext() ) {
			var g = itr.next();
			g.invalidate();
		}
	}
	,onContainerUpdate: function(event) {
		switch(event.getType()) {
		case funk.gui.core.events.ContainerEventType.COMPONENT_ADDED:
			this._rootModified = true;
			break;
		}
	}
	,render: function() {
		this.notify(funk.gui.core.display.ComponentRenderManagerUpdateType.PRE_RENDER);
		if(this._rootModified) {
			this._painter.removeAll();
			var $it0 = this._root.iterator();
			while( $it0.hasNext() ) {
				var component = $it0.next();
				if(Std["is"](component.get_view(),funk.gui.js.core.display.GraphicsComponentView)) {
					var view = component.get_view();
					this._painter.add(view.getGraphics(),view.get_bounds());
				}
			}
			this._rootModified = false;
		}
		this._painter.render();
		this.notify(funk.gui.core.display.ComponentRenderManagerUpdateType.POST_RENDER);
	}
	,notify: function(type) {
		this._signal.dispatch(this,type);
	}
	,get_context: function() {
		return this._context;
	}
	,get_debug: function() {
		return this._painter.getDebug();
	}
	,set_debug: function(value) {
		this._painter.setDebug(!this._painter.getDebug());
		if(this._painter.getDebug()) this._document.body.appendChild(this._debugContext); else this._document.body.removeChild(this._debugContext);
		this.resizeTo(this._window.innerWidth,this._window.innerHeight);
		return this._painter.getDebug();
	}
	,__class__: funk.gui.js.core.display.RenderManager
	,__properties__: {set_debug:"set_debug",get_debug:"get_debug",get_context:"get_context"}
}
funk.gui.js.core.display.commands = {}
funk.gui.js.core.display.commands.GraphicsBeginFill = function(color,alpha) {
	if(alpha == null) alpha = 1.0;
	this.color = color;
	this.alpha = alpha;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsBeginFill"] = funk.gui.js.core.display.commands.GraphicsBeginFill;
funk.gui.js.core.display.commands.GraphicsBeginFill.__name__ = ["funk","gui","js","core","display","commands","GraphicsBeginFill"];
funk.gui.js.core.display.commands.GraphicsBeginFill.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsBeginFill.prototype = {
	type: null
	,color: null
	,alpha: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.BEGIN_FILL(funk.gui.js.core.display.GraphicsFillType.SOLID(this.color,this.alpha));
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsBeginFill
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsCircle = function(x,y,radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsCircle"] = funk.gui.js.core.display.commands.GraphicsCircle;
funk.gui.js.core.display.commands.GraphicsCircle.__name__ = ["funk","gui","js","core","display","commands","GraphicsCircle"];
funk.gui.js.core.display.commands.GraphicsCircle.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsCircle.prototype = {
	type: null
	,x: null
	,y: null
	,radius: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.CIRCLE(this.x,this.y,this.radius);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsCircle
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsClear = function(bounds) {
	this.bounds = bounds;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsClear"] = funk.gui.js.core.display.commands.GraphicsClear;
funk.gui.js.core.display.commands.GraphicsClear.__name__ = ["funk","gui","js","core","display","commands","GraphicsClear"];
funk.gui.js.core.display.commands.GraphicsClear.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsClear.prototype = {
	type: null
	,bounds: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.CLEAR(this.bounds);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsClear
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsEndFill = function() {
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsEndFill"] = funk.gui.js.core.display.commands.GraphicsEndFill;
funk.gui.js.core.display.commands.GraphicsEndFill.__name__ = ["funk","gui","js","core","display","commands","GraphicsEndFill"];
funk.gui.js.core.display.commands.GraphicsEndFill.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsEndFill.prototype = {
	type: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.END_FILL;
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsEndFill
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsGradientFill = function(colors,alphas,ratios) {
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsGradientFill"] = funk.gui.js.core.display.commands.GraphicsGradientFill;
funk.gui.js.core.display.commands.GraphicsGradientFill.__name__ = ["funk","gui","js","core","display","commands","GraphicsGradientFill"];
funk.gui.js.core.display.commands.GraphicsGradientFill.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsGradientFill.prototype = {
	type: null
	,colors: null
	,alphas: null
	,ratios: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.BEGIN_FILL(funk.gui.js.core.display.GraphicsFillType.GRADIENT(this.colors,this.alphas,this.ratios));
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsGradientFill
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsLineTo = function(x,y) {
	this.x = x;
	this.y = y;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsLineTo"] = funk.gui.js.core.display.commands.GraphicsLineTo;
funk.gui.js.core.display.commands.GraphicsLineTo.__name__ = ["funk","gui","js","core","display","commands","GraphicsLineTo"];
funk.gui.js.core.display.commands.GraphicsLineTo.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsLineTo.prototype = {
	type: null
	,x: null
	,y: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.LINE_TO(this.x,this.y);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsLineTo
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsMoveTo = function(x,y) {
	this.x = x;
	this.y = y;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsMoveTo"] = funk.gui.js.core.display.commands.GraphicsMoveTo;
funk.gui.js.core.display.commands.GraphicsMoveTo.__name__ = ["funk","gui","js","core","display","commands","GraphicsMoveTo"];
funk.gui.js.core.display.commands.GraphicsMoveTo.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsMoveTo.prototype = {
	type: null
	,x: null
	,y: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.MOVE_TO(this.x,this.y);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsMoveTo
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsRectangle = function(x,y,width,height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsRectangle"] = funk.gui.js.core.display.commands.GraphicsRectangle;
funk.gui.js.core.display.commands.GraphicsRectangle.__name__ = ["funk","gui","js","core","display","commands","GraphicsRectangle"];
funk.gui.js.core.display.commands.GraphicsRectangle.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsRectangle.prototype = {
	type: null
	,x: null
	,y: null
	,width: null
	,height: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.RECT(this.x,this.y,this.width,this.height);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsRectangle
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsRestore = function() {
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsRestore"] = funk.gui.js.core.display.commands.GraphicsRestore;
funk.gui.js.core.display.commands.GraphicsRestore.__name__ = ["funk","gui","js","core","display","commands","GraphicsRestore"];
funk.gui.js.core.display.commands.GraphicsRestore.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsRestore.prototype = {
	type: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.RESTORE;
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsRestore
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsRoundedRectangle = function(x,y,width,height,radius) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.radius = radius;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsRoundedRectangle"] = funk.gui.js.core.display.commands.GraphicsRoundedRectangle;
funk.gui.js.core.display.commands.GraphicsRoundedRectangle.__name__ = ["funk","gui","js","core","display","commands","GraphicsRoundedRectangle"];
funk.gui.js.core.display.commands.GraphicsRoundedRectangle.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsRoundedRectangle.prototype = {
	type: null
	,x: null
	,y: null
	,width: null
	,height: null
	,radius: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.ROUNDED_RECT(this.x,this.y,this.width,this.height,funk.gui.js.core.display.RoundedRectRadiusType.ALL(this.radius));
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsRoundedRectangle
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex = function(x,y,width,height,topLeft,topRight,bottomLeft,bottomRight) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.topLeft = topLeft;
	this.topRight = topRight;
	this.bottomLeft = bottomLeft;
	this.bottomRight = bottomRight;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex"] = funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex;
funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex.__name__ = ["funk","gui","js","core","display","commands","GraphicsRoundedRectangleComplex"];
funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex.prototype = {
	type: null
	,x: null
	,y: null
	,width: null
	,height: null
	,topLeft: null
	,topRight: null
	,bottomLeft: null
	,bottomRight: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.ROUNDED_RECT(this.x,this.y,this.width,this.height,funk.gui.js.core.display.RoundedRectRadiusType.EACH(this.topLeft,this.topRight,this.bottomLeft,this.bottomRight));
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsRoundedRectangleComplex
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsSave = function() {
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsSave"] = funk.gui.js.core.display.commands.GraphicsSave;
funk.gui.js.core.display.commands.GraphicsSave.__name__ = ["funk","gui","js","core","display","commands","GraphicsSave"];
funk.gui.js.core.display.commands.GraphicsSave.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsSave.prototype = {
	type: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.SAVE;
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsSave
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.commands.GraphicsTranslate = function(x,y) {
	this.x = x;
	this.y = y;
};
$hxClasses["funk.gui.js.core.display.commands.GraphicsTranslate"] = funk.gui.js.core.display.commands.GraphicsTranslate;
funk.gui.js.core.display.commands.GraphicsTranslate.__name__ = ["funk","gui","js","core","display","commands","GraphicsTranslate"];
funk.gui.js.core.display.commands.GraphicsTranslate.__interfaces__ = [funk.gui.js.core.display.IGraphicsCommand];
funk.gui.js.core.display.commands.GraphicsTranslate.prototype = {
	type: null
	,x: null
	,y: null
	,get_type: function() {
		return funk.gui.js.core.display.GraphicsCommandType.TRANSLATE(this.x,this.y);
	}
	,__class__: funk.gui.js.core.display.commands.GraphicsTranslate
	,__properties__: {get_type:"get_type"}
}
funk.gui.js.core.display.text = {}
funk.gui.js.core.display.text.TextBlock = function(textElement) {
	this._textElement = textElement;
	this._textLines = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.gui.js.core.display.text.TextBlock"] = funk.gui.js.core.display.text.TextBlock;
funk.gui.js.core.display.text.TextBlock.__name__ = ["funk","gui","js","core","display","text","TextBlock"];
funk.gui.js.core.display.text.TextBlock.prototype = {
	textElement: null
	,_textElement: null
	,_textLines: null
	,create: function(previousTextLine,width) {
		var line = new funk.gui.js.core.display.text.TextLine(previousTextLine);
		return line;
	}
	,removeAll: function() {
		this._textLines = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,getTextElement: function() {
		return this._textElement;
	}
	,setTextElement: function(value) {
		if(this._textElement != value) this._textElement = value;
		return this._textElement;
	}
	,__class__: funk.gui.js.core.display.text.TextBlock
	,__properties__: {set_textElement:"setTextElement",get_textElement:"getTextElement"}
}
funk.gui.js.core.display.text.TextElement = function(text) {
	if(text == null) text = "";
	this._text = text;
	this._position = 0;
};
$hxClasses["funk.gui.js.core.display.text.TextElement"] = funk.gui.js.core.display.text.TextElement;
funk.gui.js.core.display.text.TextElement.__name__ = ["funk","gui","js","core","display","text","TextElement"];
funk.gui.js.core.display.text.TextElement.prototype = {
	text: null
	,_text: null
	,_position: null
	,getText: function() {
		return this._text;
	}
	,setText: function(value) {
		if(this._text != value) {
			this._text = value;
			this._position = 0;
		}
		return this._text;
	}
	,__class__: funk.gui.js.core.display.text.TextElement
	,__properties__: {set_text:"setText",get_text:"getText"}
}
funk.gui.js.core.display.text.TextLine = function(parent) {
	this._parent = parent;
	this._bounds = new funk.gui.core.geom.Rectangle();
	this._charCount = 0;
};
$hxClasses["funk.gui.js.core.display.text.TextLine"] = funk.gui.js.core.display.text.TextLine;
funk.gui.js.core.display.text.TextLine.__name__ = ["funk","gui","js","core","display","text","TextLine"];
funk.gui.js.core.display.text.TextLine.prototype = {
	width: null
	,height: null
	,charCount: null
	,_parent: null
	,_bounds: null
	,_charCount: null
	,getWidth: function() {
		return this._bounds.width;
	}
	,getHeight: function() {
		return this._bounds.height;
	}
	,getCharCount: function() {
		return this._charCount;
	}
	,__class__: funk.gui.js.core.display.text.TextLine
	,__properties__: {get_charCount:"getCharCount",get_height:"getHeight",get_width:"getWidth"}
}
funk.gui.js.core.display.text.TextRenderer = function() {
	this._text = "";
	this._textLines = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
	this._textElement = new funk.gui.js.core.display.text.TextElement(this._text);
	this._textBlock = new funk.gui.js.core.display.text.TextBlock(this._textElement);
	this._bounds = new funk.gui.core.geom.Rectangle();
	this._boundsMax = new funk.gui.core.geom.Rectangle();
	this._boundsMeasured = new funk.gui.core.geom.Rectangle();
	this._shortend = false;
	this._autoEllipsis = false;
};
$hxClasses["funk.gui.js.core.display.text.TextRenderer"] = funk.gui.js.core.display.text.TextRenderer;
funk.gui.js.core.display.text.TextRenderer.__name__ = ["funk","gui","js","core","display","text","TextRenderer"];
funk.gui.js.core.display.text.TextRenderer.prototype = {
	text: null
	,_bounds: null
	,_boundsMax: null
	,_boundsMeasured: null
	,_textLines: null
	,_lineSpacing: null
	,_text: null
	,_textBlock: null
	,_textElement: null
	,_shortend: null
	,_autoEllipsis: null
	,update: function() {
		this.measure(this._text);
		this.render(this._text);
	}
	,measure: function(text) {
		this._bounds.resizeTo(0,0);
		this.clearTextLines();
		if(text == null || text == "") return; else {
			this._textElement.setText(text);
			this._textBlock.setTextElement(this._textElement);
			var textLine = this._textBlock.create(null,10000);
			if(textLine == null) return; else {
				var lineHeight = textLine.getHeight();
				var h = lineHeight + this._lineSpacing;
				while(textLine != null) {
					this._boundsMeasured.height += h;
					if(textLine.getWidth() > this._boundsMeasured.width) this._boundsMeasured.height = textLine.getWidth();
					textLine = this._textBlock.create(textLine,100000);
				}
				this._boundsMeasured.width = Math.ceil(this._boundsMeasured.width);
				this._boundsMeasured.height = Math.ceil(this._boundsMeasured.height - this._lineSpacing);
			}
		}
	}
	,render: function(text) {
		this._bounds.resizeTo(0,0);
		this.clearTextLines();
		if(text == null || text == "" || this._boundsMax.width < 1 || this._boundsMax.height < 1) return; else {
			this._textElement.setText(text);
			this._textBlock.setTextElement(this._textElement);
			var textLine = this._textBlock.create(null,this._boundsMax.width);
			if(textLine == null) return; else {
				var textHeight = textLine.getHeight();
				var textHeightAndSpacing = textHeight + this._lineSpacing;
				var lineHeight = textHeight;
				var index = 0;
				while(textLine != null) if(this._bounds.height + textHeight > this._boundsMax.height) {
					if(this._autoEllipsis && !this._shortend) {
						this._shortend = true;
						this.applyEllipsis(index);
						return;
					}
					this._shortend = true;
					break;
				}
				index += textLine.getCharCount();
				this._bounds.height += textHeightAndSpacing;
				if(this._bounds.width < textLine.getWidth()) this._bounds.width = textLine.getWidth();
				this._textLines = this._textLines.append(textLine);
				textLine = this._textBlock.create(textLine,this._boundsMax.width);
				this._bounds.height -= this._lineSpacing;
				var $it0 = this._textLines.iterator();
				while( $it0.hasNext() ) {
					var line = $it0.next();
					line.y += lineHeight;
					lineHeight += textHeightAndSpacing;
				}
				this._shortend = false;
			}
		}
	}
	,clearTextLines: function() {
		this._textLines = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		this._textBlock.removeAll();
	}
	,applyEllipsis: function(index) {
		if(index > 3) this.render(this._text.substr(0,index - 3) + "..."); else this.render("...");
	}
	,getText: function() {
		return this._text;
	}
	,setText: function(value) {
		if(this._text != value) {
			this._text = value;
			this.measure(this._text);
			this.render(this._text);
		}
		return this._text;
	}
	,__class__: funk.gui.js.core.display.text.TextRenderer
	,__properties__: {set_text:"setText",get_text:"getText"}
}
funk.gui.js.core.event = {}
funk.gui.js.core.event.EventManager = function() {
	this._signal = new funk.signal.Signal2();
};
$hxClasses["funk.gui.js.core.event.EventManager"] = funk.gui.js.core.event.EventManager;
funk.gui.js.core.event.EventManager.__name__ = ["funk","gui","js","core","event","EventManager"];
funk.gui.js.core.event.EventManager.__interfaces__ = [funk.gui.core.events.IComponentEventManager];
funk.gui.js.core.event.EventManager.prototype = {
	focus: null
	,isDown: null
	,_root: null
	,_context: null
	,_window: null
	,_document: null
	,_signal: null
	,_mouseDown: null
	,_mousePoint: null
	,_mouseDownPoint: null
	,_mouseLastPoint: null
	,_mouseUpPoint: null
	,_focus: null
	,_lastTarget: null
	,_hoverTarget: null
	,_hoveredChildren: null
	,addEventManagerObserver: function(observer) {
		this._signal.add(observer.onComponentEventManagerUpdate.$bind(observer));
		return observer;
	}
	,removeEventManagerObserver: function(observer) {
		this._signal.remove(observer.onComponentEventManagerUpdate.$bind(observer));
		return observer;
	}
	,onEventManagerInitialize: function(root) {
		this._root = root;
		this._mouseDown = false;
		this._mousePoint = new funk.gui.core.geom.Point(0,0);
		this._mouseDownPoint = new funk.gui.core.geom.Point(0,0);
		this._mouseLastPoint = new funk.gui.core.geom.Point(0,0);
		this._mouseUpPoint = new funk.gui.core.geom.Point(0,0);
		this._hoveredChildren = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
		this._window = window;
		this._window.onresize = this.handleEvent.$bind(this);
		this._document = CommonJS.getHtmlDocument();
		this._context = this._root.renderManager.get_context();
		this._document.body.addEventListener("mousedown",this.handleEvent.$bind(this),false);
		this._document.body.addEventListener("mousemove",this.handleEvent.$bind(this),false);
		this._document.body.addEventListener("mouseup",this.handleEvent.$bind(this),false);
		this._document.body.addEventListener("click",this.handleEvent.$bind(this),false);
		this.onResize(null);
	}
	,onEventManagerCleanup: function() {
		this._window.onresize = null;
		this._window = null;
		this._document.onkeydown = null;
		this._document = null;
		this._document.body.removeEventListener("mousedown",this.handleEvent.$bind(this),false);
		this._document.body.removeEventListener("mousemove",this.handleEvent.$bind(this),false);
		this._document.body.removeEventListener("mouseup",this.handleEvent.$bind(this),false);
		this._document.body.removeEventListener("click",this.handleEvent.$bind(this),false);
		this._document.body.removeEventListener("keydown",this.handleEvent.$bind(this),false);
		this._context = null;
		this._root = null;
	}
	,handleEvent: function(event) {
		switch(event.type) {
		case "mousedown":
			this.onMouseDown(event);
			break;
		case "mousemove":
			this.onMouseMove(event);
			break;
		case "mouseup":
			this.onMouseUp(event);
			break;
		case "resize":
			this.onResize(event);
			break;
		case "keydown":
			this.onKeyDown(event);
			break;
		}
	}
	,notify: function(type) {
		this._signal.dispatch(this,type);
	}
	,dispatchEvent: function(target,event) {
		if(target == null) {
		}
		var currentTarget = target;
		event.lastTarget = null;
		event.target = target;
		while(event.bubbles && currentTarget != null) {
			event.currentTarget = currentTarget;
			currentTarget.processEvent(event);
			event.lastTarget = currentTarget;
			if(this._root == target) break;
			currentTarget = currentTarget.get_eventParent();
		}
	}
	,getHit: function(point) {
		var currentTarget = this._root;
		var lastTarget = null;
		if(currentTarget != null) while(currentTarget != lastTarget) {
			lastTarget = currentTarget;
			currentTarget = currentTarget.captureEventTarget(point);
			if(currentTarget == null) return lastTarget;
		}
		return currentTarget;
	}
	,setFocus: function(child) {
		if(this._focus == child) return;
		if(this._focus != null) this.dispatchEvent(this._focus,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.FOCUS_OUT));
		if(child != null) this._focus = null; else {
			var focusOut = this._focus;
			var focusIn = child;
			this._focus = child;
			this.dispatchEvent(this._focus,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.FOCUS_IN(focusOut,focusIn)));
		}
	}
	,onMouseDown: function(event) {
		if(this._mouseDown) this.onMouseUp(null);
		this._mousePoint.x = event.clientX;
		this._mousePoint.y = event.clientY;
		this._mouseDownPoint.x = this._mousePoint.x;
		this._mouseDownPoint.y = this._mousePoint.y;
		var currentTarget = this.getHit(this._mousePoint);
		if(currentTarget != null) {
			this.setFocus(currentTarget);
			this.dispatchEvent(currentTarget,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.MOUSE_DOWN(this._mouseDownPoint)));
		}
		this._lastTarget = currentTarget;
	}
	,onMouseMove: function(event) {
		this._mousePoint.x = event.clientX;
		this._mousePoint.y = event.clientY;
		var currentTarget = this._mouseDown?this._lastTarget:this.getHit(this._mousePoint);
		this._hoverTarget = currentTarget;
		this.handleHovering(currentTarget);
		this.handleDragInOut();
		if(this._mouseLastPoint.x != this._mousePoint.x || this._mouseLastPoint.y != this._mousePoint.y) {
			this.dispatchEvent(currentTarget,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.MOUSE_MOVE(this._mousePoint,this._mouseDownPoint)));
			this._mouseLastPoint.x = this._mousePoint.x;
			this._mouseLastPoint.y = this._mousePoint.y;
		}
	}
	,onMouseUp: function(event) {
		this._mouseDown = false;
		this._mousePoint.x = event == null?this._mousePoint.x:event.clientX;
		this._mousePoint.y = event == null?this._mousePoint.y:event.clientY;
		this._mouseUpPoint.x = this._mousePoint.x;
		this._mouseUpPoint.y = this._mousePoint.y;
		var currentTarget = this._lastTarget;
		if(currentTarget != null) this.dispatchEvent(currentTarget,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.MOUSE_UP(this._mouseUpPoint)));
	}
	,handleHovering: function(currentTarget) {
		if(this._mouseDown) return; else {
			var exists = false;
			var child;
			var activeChild;
			var target;
			var hoverRemoves = (function($this) {
				var $r;
				switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
				case 0:
					$r = funk.collections.immutable.NilType._nilList;
					break;
				}
				return $r;
			}(this));
			var p = this._hoveredChildren;
			while(p.get_nonEmpty()) {
				child = p.get_head();
				if(currentTarget != child) {
					activeChild = currentTarget;
					while(activeChild != child) {
						if(activeChild != null) {
							hoverRemoves = hoverRemoves.prepend(child);
							this.dispatchEvent(child,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.MOUSE_OUT(this._mousePoint)));
							break;
						}
						activeChild = activeChild.get_eventParent();
					}
				} else exists = true;
				p = p.get_tail();
			}
			if(!exists && currentTarget != null) {
				this._hoveredChildren = this._hoveredChildren.prepend(currentTarget);
				this.dispatchEvent(currentTarget,new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.MOUSE_IN(this._mousePoint)));
			}
			this._hoveredChildren = this._hoveredChildren.filterNot(function(child1) {
				return hoverRemoves.contains(child1);
			});
		}
	}
	,handleDragInOut: function() {
	}
	,onKeyDown: function(event) {
		var keyCode = event.keyLocation;
		this.dispatchEvent(this.get_focus(),new funk.gui.core.events.UIEvent(funk.gui.core.events.UIEventType.KEY_DOWN(keyCode,event.ctrlKey,event.shiftKey,event.altKey)));
	}
	,onResize: function(event) {
		this.notify(funk.gui.core.events.ComponentEventManagerUpdateType.RESIZE(this._window.innerWidth,this._window.innerHeight));
	}
	,get_focus: function() {
		return this._focus;
	}
	,set_focus: function(value) {
		this._focus = value;
		return value;
	}
	,get_isDown: function() {
		return this._mouseDown;
	}
	,__class__: funk.gui.js.core.event.EventManager
	,__properties__: {get_isDown:"get_isDown",set_focus:"set_focus",get_focus:"get_focus"}
}
funk.gui.js.core.event.RenderEvent = function() {
	var me = this;
	funk.gui.core.events.AbstractEvent.call(this);
	this._window = window;
	this._invalidated = false;
	this._requestAnimationFrame = Reflect.field(this._window,"requestAnimationFrame") || Reflect.field(this._window,"mozRequestAnimationFrame") || Reflect.field(this._window,"webkitRequestAnimationFrame") || Reflect.field(this._window,"msRequestAnimationFrame");
	if(this._requestAnimationFrame == null) this._requestAnimationFrame = function(c) {
		haxe.Timer.delay(function() {
			me.render();
		},50. | 0);
	};
};
$hxClasses["funk.gui.js.core.event.RenderEvent"] = funk.gui.js.core.event.RenderEvent;
funk.gui.js.core.event.RenderEvent.__name__ = ["funk","gui","js","core","event","RenderEvent"];
funk.gui.js.core.event.RenderEvent.__interfaces__ = [funk.gui.core.events.IEvent];
funk.gui.js.core.event.RenderEvent.__super__ = funk.gui.core.events.AbstractEvent;
funk.gui.js.core.event.RenderEvent.prototype = $extend(funk.gui.core.events.AbstractEvent.prototype,{
	_window: null
	,_invalidated: null
	,_requestAnimationFrame: null
	,add: function(func,once) {
		if(once == null) once = false;
		funk.gui.core.events.AbstractEvent.prototype.add.call(this,func,once);
		if(!this._invalidated) {
			this._invalidated = true;
			this.request();
		}
	}
	,render: function() {
		this.notify();
		if(this.get_size() > 0) this.request(); else this._invalidated = false;
	}
	,request: function() {
		this._requestAnimationFrame.call(this._window,this.render.$bind(this));
	}
	,__class__: funk.gui.js.core.event.RenderEvent
});
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
funk.signal = {}
funk.signal.ISignal = function() { }
$hxClasses["funk.signal.ISignal"] = funk.signal.ISignal;
funk.signal.ISignal.__name__ = ["funk","signal","ISignal"];
funk.signal.ISignal.prototype = {
	size: null
	,removeAll: null
	,__class__: funk.signal.ISignal
	,__properties__: {get_size:"get_size"}
}
funk.signal.Signal = function() {
	funk.product.Product.call(this);
};
$hxClasses["funk.signal.Signal"] = funk.signal.Signal;
funk.signal.Signal.__name__ = ["funk","signal","Signal"];
funk.signal.Signal.__interfaces__ = [funk.signal.ISignal];
funk.signal.Signal.__super__ = funk.product.Product;
funk.signal.Signal.prototype = $extend(funk.product.Product.prototype,{
	size: null
	,removeAll: function() {
	}
	,get_size: function() {
		return -1;
	}
	,get_productPrefix: function() {
		return "Signal";
	}
	,__class__: funk.signal.Signal
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get_size:"get_size"})
});
funk.signal.ISignal0 = function() { }
$hxClasses["funk.signal.ISignal0"] = funk.signal.ISignal0;
funk.signal.ISignal0.__name__ = ["funk","signal","ISignal0"];
funk.signal.ISignal0.__interfaces__ = [funk.signal.ISignal];
funk.signal.ISignal0.prototype = {
	add: null
	,addOnce: null
	,remove: null
	,dispatch: null
	,__class__: funk.signal.ISignal0
}
funk.signal.Signal0 = function() {
	funk.signal.Signal.call(this);
	this._list = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.signal.Signal0"] = funk.signal.Signal0;
funk.signal.Signal0.__name__ = ["funk","signal","Signal0"];
funk.signal.Signal0.__interfaces__ = [funk.signal.ISignal0];
funk.signal.Signal0.__super__ = funk.signal.Signal;
funk.signal.Signal0.prototype = $extend(funk.signal.Signal.prototype,{
	_list: null
	,add: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,false));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,addOnce: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,true));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,remove: function(func) {
		var o = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (o);
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					$this._list = $this._list.filterNot(function(s) {
						return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
					});
					$r = x;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,removeAll: function() {
		this._list = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,dispatch: function() {
		var slots = this._list;
		while(slots.get_nonEmpty()) {
			slots.get_head().execute();
			slots = slots.get_tail();
		}
	}
	,registerListener: function(func,once) {
		if(this.registrationPossible(func,once)) {
			var slot = new funk.signal.Slot0(this,func,once);
			this._list = this._list.prepend(slot);
			return funk.option.Option.Some(slot);
		}
		return this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
	}
	,registrationPossible: function(func,once) {
		if(!this._list.get_nonEmpty()) return true;
		var slot = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (slot);
			switch( $e[1] ) {
			case 0:
				$r = true;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					if(x.once != once) throw new funk.errors.IllegalOperationError("You cannot addOnce() then add() the same \" +\n\t\t\t\t\t \"listener without removing the relationship first.",{ fileName : "Signal0.hx", lineNumber : 99, className : "funk.signal.Signal0", methodName : "registrationPossible"});
					$r = false;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,get_size: function() {
		return this._list.get_size();
	}
	,__class__: funk.signal.Signal0
});
funk.gui.js.core.event.Events = function() { }
$hxClasses["funk.gui.js.core.event.Events"] = funk.gui.js.core.event.Events;
funk.gui.js.core.event.Events.__name__ = ["funk","gui","js","core","event","Events"];
funk.gui.js.core.event.Events.prototype = {
	__class__: funk.gui.js.core.event.Events
}
funk.gui.js.display = {}
funk.gui.js.display.ButtonView = function(graphics) {
	funk.gui.js.core.display.GraphicsComponentView.call(this,graphics);
	this._label = new funk.gui.text.Label(new funk.gui.js.display.LabelView(graphics));
};
$hxClasses["funk.gui.js.display.ButtonView"] = funk.gui.js.display.ButtonView;
funk.gui.js.display.ButtonView.__name__ = ["funk","gui","js","display","ButtonView"];
funk.gui.js.display.ButtonView.__interfaces__ = [funk.gui.core.events.IComponentEventTargetHook,funk.gui.button.IButtonView];
funk.gui.js.display.ButtonView.__super__ = funk.gui.js.core.display.GraphicsComponentView;
funk.gui.js.display.ButtonView.prototype = $extend(funk.gui.js.core.display.GraphicsComponentView.prototype,{
	_button: null
	,_label: null
	,onComponentInitialize: function(component) {
		this._button = component;
		this._button.addCaptureHook(this);
	}
	,onComponentMove: function(x,y) {
		this.moveTo(x,y);
		this._label.moveTo(this._padding.left,this._padding.top);
		this.repaint();
	}
	,onComponentResize: function(width,height) {
		this.resizeTo(width,height);
		this._label.moveTo(this._padding.left,this._padding.top);
		width -= this._padding.left + this._padding.right;
		height -= this._padding.top + this._padding.bottom;
		this._label.resizeTo(width,height);
		this.repaint();
	}
	,onComponentModelUpdate: function(model,type) {
		switch(type) {
		case -1:
			this._label.set_text(this._button.getText());
			this.repaint();
			break;
		case funk.gui.button.ButtonModel.UPDATE_TEXT:
			this._label.set_text(this._button.getText());
			break;
		case funk.gui.button.ButtonModel.UPDATE_ICON:
			this.repaint();
			break;
		}
	}
	,onComponentStateUpdate: function(state,type) {
		switch( (type)[1] ) {
		case 0:
			break;
		case 1:
			this._label.set_enabled(state.enabled);
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		}
		this.repaint();
	}
	,onComponentCleanup: function() {
		this._button.removeCaptureHook(this);
	}
	,captureEventTarget: function(point) {
		return this.get_bounds().containsPoint(point)?this._button:null;
	}
	,repaint: function() {
		if(this._button != null) {
			var color = this._button.get_enabled()?this._button.get_hovered()?this._button.get_pressed()?16711680:255:12698049:1114129;
			var g = this.getGraphics();
			g.clear();
			g.save();
			g.translate(this.get_x(),this.get_y());
			g.beginFill(color);
			g.drawRect(0,0,this.get_width(),this.get_height());
			g.endFill();
			g.restore();
		}
	}
	,__class__: funk.gui.js.display.ButtonView
});
funk.gui.text = {}
funk.gui.text.ILabelView = function() { }
$hxClasses["funk.gui.text.ILabelView"] = funk.gui.text.ILabelView;
funk.gui.text.ILabelView.__name__ = ["funk","gui","text","ILabelView"];
funk.gui.text.ILabelView.__interfaces__ = [funk.gui.core.IComponentView];
funk.gui.text.ILabelView.prototype = {
	__class__: funk.gui.text.ILabelView
}
funk.gui.js.display.LabelView = function(graphics) {
	funk.gui.js.core.display.GraphicsComponentView.call(this,graphics);
};
$hxClasses["funk.gui.js.display.LabelView"] = funk.gui.js.display.LabelView;
funk.gui.js.display.LabelView.__name__ = ["funk","gui","js","display","LabelView"];
funk.gui.js.display.LabelView.__interfaces__ = [funk.gui.core.events.IComponentEventTargetHook,funk.gui.text.ILabelView];
funk.gui.js.display.LabelView.__super__ = funk.gui.js.core.display.GraphicsComponentView;
funk.gui.js.display.LabelView.prototype = $extend(funk.gui.js.core.display.GraphicsComponentView.prototype,{
	_label: null
	,_textRenderer: null
	,onComponentInitialize: function(component) {
		this._label = component;
		this._label.addCaptureHook(this);
		this._textRenderer = new funk.gui.js.core.display.text.TextRenderer();
	}
	,onComponentMove: function(x,y) {
		this.moveTo(x,y);
		this.repaint();
	}
	,onComponentResize: function(width,height) {
		this.resizeTo(width,height);
		width -= this._padding.left + this._padding.right;
		height -= this._padding.top + this._padding.bottom;
		this.repaint();
	}
	,onComponentModelUpdate: function(model,type) {
		switch(type) {
		case -1:
			this._textRenderer.setText(this._label.get_text());
			this.updateTextRenderer();
			this.updatePositioning();
			this.repaint();
			break;
		case funk.gui.text.LabelModel.UPDATE_TEXT:
			this._textRenderer.setText(this._label.get_text());
			this.updateTextRenderer();
			this.updatePositioning();
			this.repaint();
			break;
		case funk.gui.text.LabelModel.UPDATE_ICON:
			this.updatePositioning();
			this.repaint();
			break;
		}
		this.repaint();
	}
	,onComponentStateUpdate: function(state,type) {
		switch( (type)[1] ) {
		case 0:
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		}
	}
	,onComponentCleanup: function() {
		this._label.removeCaptureHook(this);
	}
	,captureEventTarget: function(point) {
		return this.get_bounds().containsPoint(point)?this._label:null;
	}
	,repaint: function() {
		if(this._label != null) {
		}
	}
	,updateTextRenderer: function() {
		this._textRenderer.update();
	}
	,updatePositioning: function() {
	}
	,__class__: funk.gui.js.display.LabelView
});
funk.gui.text.ITextComponent = function() { }
$hxClasses["funk.gui.text.ITextComponent"] = funk.gui.text.ITextComponent;
funk.gui.text.ITextComponent.__name__ = ["funk","gui","text","ITextComponent"];
funk.gui.text.ITextComponent.__interfaces__ = [funk.gui.core.IComponent];
funk.gui.text.ITextComponent.prototype = {
	text: null
	,__class__: funk.gui.text.ITextComponent
	,__properties__: {set_text:"set_text",get_text:"get_text"}
}
funk.gui.text.Label = function(componentView) {
	funk.gui.core.Component.call(this,componentView);
};
$hxClasses["funk.gui.text.Label"] = funk.gui.text.Label;
funk.gui.text.Label.__name__ = ["funk","gui","text","Label"];
funk.gui.text.Label.__interfaces__ = [funk.gui.text.ITextComponent];
funk.gui.text.Label.__super__ = funk.gui.core.Component;
funk.gui.text.Label.prototype = $extend(funk.gui.core.Component.prototype,{
	text: null
	,icon: null
	,_labelModel: null
	,_labelModelObserver: null
	,initModel: function() {
		this.set_model(new funk.gui.text.LabelModel());
	}
	,initEvents: function() {
		this.set_event(new funk.gui.core.events.ComponentEvent(this));
	}
	,initTypes: function() {
		this.allowViewType(funk.gui.text.ILabelView);
		this.allowModelType(funk.gui.text.LabelModel);
	}
	,set_model: function(componentModel) {
		return funk.gui.core.Component.prototype.set_model.call(this,this._labelModel = componentModel);
	}
	,get_text: function() {
		return this._labelModel.getText();
	}
	,set_text: function(value) {
		this._labelModel.setText(value);
		return this._labelModel.getText();
	}
	,getIcon: function() {
		return this._labelModel.getIcon();
	}
	,setIcon: function(value) {
		this._labelModel.setIcon(value);
		return this._labelModel.getIcon();
	}
	,__class__: funk.gui.text.Label
	,__properties__: $extend(funk.gui.core.Component.prototype.__properties__,{set_icon:"setIcon",get_icon:"getIcon",set_text:"set_text",get_text:"get_text"})
});
funk.gui.text.LabelModel = function(text,icon) {
	if(text == null) text = "";
	funk.gui.core.ComponentModel.call(this);
	this._text = text;
	this._icon = icon;
};
$hxClasses["funk.gui.text.LabelModel"] = funk.gui.text.LabelModel;
funk.gui.text.LabelModel.__name__ = ["funk","gui","text","LabelModel"];
funk.gui.text.LabelModel.__super__ = funk.gui.core.ComponentModel;
funk.gui.text.LabelModel.prototype = $extend(funk.gui.core.ComponentModel.prototype,{
	text: null
	,icon: null
	,_text: null
	,_icon: null
	,getText: function() {
		return this._text;
	}
	,setText: function(value) {
		if(value != this._text) {
			this._text = value;
			this.notify(funk.gui.text.LabelModel.UPDATE_TEXT);
		}
		return this._text;
	}
	,getIcon: function() {
		return this._icon;
	}
	,setIcon: function(value) {
		if(value != this._icon) {
			this._icon = value;
			this.notify(funk.gui.text.LabelModel.UPDATE_ICON);
		}
		return this._icon;
	}
	,__class__: funk.gui.text.LabelModel
	,__properties__: $extend(funk.gui.core.ComponentModel.prototype.__properties__,{set_icon:"setIcon",get_icon:"getIcon",set_text:"setText",get_text:"getText"})
});
funk.option = {}
funk.option.AnyType = function() { }
$hxClasses["funk.option.AnyType"] = funk.option.AnyType;
funk.option.AnyType.__name__ = ["funk","option","AnyType"];
funk.option.AnyType.get = function(type) {
	return type;
}
funk.option.AnyType.getOrElse = function(type,func) {
	return type != null?type:func();
}
funk.option.AnyType.isDefined = function(type) {
	return type != null;
}
funk.option.AnyType.isEmpty = function(type) {
	return type == null;
}
funk.option.AnyType.orElse = function(type,alt) {
	return type != null?type:alt;
}
funk.option.AnyType.asOption = function(value) {
	return value == null?funk.option.Option.None:funk.option.Option.Some(value);
}
funk.option.AnyType.toList = function(value) {
	return funk.collections.immutable.ListUtil.toList(value);
}
funk.option.AnyType.prototype = {
	__class__: funk.option.AnyType
}
funk.option.Option = $hxClasses["funk.option.Option"] = { __ename__ : ["funk","option","Option"], __constructs__ : ["None","Some"] }
funk.option.Option.None = ["None",0];
funk.option.Option.None.toString = $estr;
funk.option.Option.None.__enum__ = funk.option.Option;
funk.option.Option.Some = function(value) { var $x = ["Some",1,value]; $x.__enum__ = funk.option.Option; $x.toString = $estr; return $x; }
funk.option.OptionType = function() { }
$hxClasses["funk.option.OptionType"] = funk.option.OptionType;
funk.option.OptionType.__name__ = ["funk","option","OptionType"];
funk.option.OptionType.get = function(option) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = value;
			break;
		case 0:
			$r = (function($this) {
				var $r;
				throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.getOrElse = function(option,func) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = value;
			break;
		case 0:
			$r = func();
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.isDefined = function(option) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = true;
			break;
		case 0:
			$r = false;
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.isEmpty = function(option) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = false;
			break;
		case 0:
			$r = true;
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.filter = function(option,func) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = func((function($this) {
				var $r;
				var $e = (option);
				switch( $e[1] ) {
				case 1:
					var value1 = $e[2];
					$r = value1;
					break;
				case 0:
					$r = (function($this) {
						var $r;
						throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this)))?option:funk.option.Option.None;
			break;
		case 0:
			$r = option;
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.foreach = function(option,func) {
	var $e = (option);
	switch( $e[1] ) {
	case 1:
		var value = $e[2];
		func((function($this) {
			var $r;
			var $e = (option);
			switch( $e[1] ) {
			case 1:
				var value1 = $e[2];
				$r = value1;
				break;
			case 0:
				$r = (function($this) {
					var $r;
					throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this)));
		break;
	case 0:
		break;
	}
}
funk.option.OptionType.flatMap = function(option,func) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = func((function($this) {
				var $r;
				var $e = (option);
				switch( $e[1] ) {
				case 1:
					var value1 = $e[2];
					$r = value1;
					break;
				case 0:
					$r = (function($this) {
						var $r;
						throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this)));
			break;
		case 0:
			$r = funk.option.Option.None;
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.map = function(option,func) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = funk.option.Option.Some(func((function($this) {
				var $r;
				var $e = (option);
				switch( $e[1] ) {
				case 1:
					var value1 = $e[2];
					$r = value1;
					break;
				case 0:
					$r = (function($this) {
						var $r;
						throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
						return $r;
					}($this));
					break;
				}
				return $r;
			}($this))));
			break;
		case 0:
			$r = funk.option.Option.None;
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.orElse = function(option,func) {
	return (function($this) {
		var $r;
		var $e = (option);
		switch( $e[1] ) {
		case 1:
			var value = $e[2];
			$r = option;
			break;
		case 0:
			$r = func();
			break;
		}
		return $r;
	}(this));
}
funk.option.OptionType.instance = function(option) {
	return new funk.option.ProductOption(option);
}
funk.option.OptionType.iterator = function(option) {
	return new funk.option.ProductOption(option).iterator();
}
funk.option.OptionType.toString = function(option) {
	return new funk.option.ProductOption(option).toString();
}
funk.option.OptionType.prototype = {
	__class__: funk.option.OptionType
}
funk.option.ProductOption = function(option) {
	funk.product.Product.call(this);
	this._option = option;
};
$hxClasses["funk.option.ProductOption"] = funk.option.ProductOption;
funk.option.ProductOption.__name__ = ["funk","option","ProductOption"];
funk.option.ProductOption.__super__ = funk.product.Product;
funk.option.ProductOption.prototype = $extend(funk.product.Product.prototype,{
	_option: null
	,get_productArity: function() {
		return (function($this) {
			var $r;
			var $e = ($this._option);
			switch( $e[1] ) {
			case 1:
				var value = $e[2];
				$r = 1;
				break;
			case 0:
				$r = 0;
				break;
			}
			return $r;
		}(this));
	}
	,get_productPrefix: function() {
		return this._option[0];
	}
	,productElement: function(index) {
		return (function($this) {
			var $r;
			var $e = ($this._option);
			switch( $e[1] ) {
			case 1:
				var value = $e[2];
				$r = value;
				break;
			case 0:
				$r = (function($this) {
					var $r;
					throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,equals: function(that) {
		if(Std["is"](that,funk.option.Option)) {
			var thatOption = that;
			if((function($this) {
				var $r;
				var $e = (thatOption);
				switch( $e[1] ) {
				case 1:
					var value = $e[2];
					$r = true;
					break;
				case 0:
					$r = false;
					break;
				}
				return $r;
			}(this))) {
				var aFunk = (function($this) {
					var $r;
					var $e = ($this._option);
					switch( $e[1] ) {
					case 1:
						var value = $e[2];
						$r = value;
						break;
					case 0:
						$r = (function($this) {
							var $r;
							throw new funk.errors.NoSuchElementError(null,{ fileName : "Option.hx", lineNumber : 21, className : "funk.option.OptionType", methodName : "get"});
							return $r;
						}($this));
						break;
					}
					return $r;
				}(this));
				var bFunk = new funk.option.ProductOption(thatOption).productElement(0);
				return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(aFunk),bFunk);
			}
		}
		return false;
	}
	,__class__: funk.option.ProductOption
});
funk.product.ProductIterator = function(product) {
	funk.product.Product.call(this);
	this._index = 0;
	this._product = product;
	this._arity = product.get_productArity();
};
$hxClasses["funk.product.ProductIterator"] = funk.product.ProductIterator;
funk.product.ProductIterator.__name__ = ["funk","product","ProductIterator"];
funk.product.ProductIterator.__interfaces__ = [funk.product.IProductIterator];
funk.product.ProductIterator.__super__ = funk.product.Product;
funk.product.ProductIterator.prototype = $extend(funk.product.Product.prototype,{
	_index: null
	,_arity: null
	,_product: null
	,hasNext: function() {
		return this._index < this._arity;
	}
	,next: function() {
		return this._product.productElement(this._index++);
	}
	,equals: function(that) {
		return funk.collections.IteratorUtil.eq(this,that);
	}
	,productElement: function(index) {
		return this._product.productElement(this._index);
	}
	,get_productArity: function() {
		return this._arity;
	}
	,get_productPrefix: function() {
		return "ProductIterator";
	}
	,__class__: funk.product.ProductIterator
});
funk.signal.ISignal1 = function() { }
$hxClasses["funk.signal.ISignal1"] = funk.signal.ISignal1;
funk.signal.ISignal1.__name__ = ["funk","signal","ISignal1"];
funk.signal.ISignal1.__interfaces__ = [funk.signal.ISignal];
funk.signal.ISignal1.prototype = {
	add: null
	,addOnce: null
	,remove: null
	,dispatch: null
	,__class__: funk.signal.ISignal1
}
funk.signal.Signal1 = function() {
	funk.signal.Signal.call(this);
	this._list = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.signal.Signal1"] = funk.signal.Signal1;
funk.signal.Signal1.__name__ = ["funk","signal","Signal1"];
funk.signal.Signal1.__interfaces__ = [funk.signal.ISignal1];
funk.signal.Signal1.__super__ = funk.signal.Signal;
funk.signal.Signal1.prototype = $extend(funk.signal.Signal.prototype,{
	_list: null
	,add: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,false));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,addOnce: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,true));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,remove: function(func) {
		var o = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (o);
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					$this._list = $this._list.filterNot(function(s) {
						return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
					});
					$r = x;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,removeAll: function() {
		this._list = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,dispatch: function(a) {
		var slots = this._list;
		while(slots.get_nonEmpty()) {
			slots.get_head().execute(a);
			slots = slots.get_tail();
		}
	}
	,registerListener: function(func,once) {
		if(this.registrationPossible(func,once)) {
			var slot = new funk.signal.Slot1(this,func,once);
			this._list = this._list.prepend(slot);
			return funk.option.Option.Some(slot);
		}
		return this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
	}
	,registrationPossible: function(func,once) {
		if(!this._list.get_nonEmpty()) return true;
		var slot = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (slot);
			switch( $e[1] ) {
			case 0:
				$r = true;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					if(x.once != once) throw new funk.errors.IllegalOperationError("You cannot addOnce() then add() the same \" +\n\t\t\t\t\t \"listener without removing the relationship first.",{ fileName : "Signal1.hx", lineNumber : 99, className : "funk.signal.Signal1", methodName : "registrationPossible"});
					$r = false;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,get_size: function() {
		return this._list.get_size();
	}
	,__class__: funk.signal.Signal1
});
funk.signal.ISignal2 = function() { }
$hxClasses["funk.signal.ISignal2"] = funk.signal.ISignal2;
funk.signal.ISignal2.__name__ = ["funk","signal","ISignal2"];
funk.signal.ISignal2.__interfaces__ = [funk.signal.ISignal];
funk.signal.ISignal2.prototype = {
	add: null
	,addOnce: null
	,remove: null
	,dispatch: null
	,__class__: funk.signal.ISignal2
}
funk.signal.Signal2 = function() {
	funk.signal.Signal.call(this);
	this._list = (function($this) {
		var $r;
		switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
		case 0:
			$r = funk.collections.immutable.NilType._nilList;
			break;
		}
		return $r;
	}(this));
};
$hxClasses["funk.signal.Signal2"] = funk.signal.Signal2;
funk.signal.Signal2.__name__ = ["funk","signal","Signal2"];
funk.signal.Signal2.__interfaces__ = [funk.signal.ISignal2];
funk.signal.Signal2.__super__ = funk.signal.Signal;
funk.signal.Signal2.prototype = $extend(funk.signal.Signal.prototype,{
	_list: null
	,add: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,false));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,addOnce: function(func) {
		return (function($this) {
			var $r;
			var $e = ($this.registerListener(func,true));
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = x;
				break;
			}
			return $r;
		}(this));
	}
	,remove: function(func) {
		var o = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (o);
			switch( $e[1] ) {
			case 0:
				$r = null;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					$this._list = $this._list.filterNot(function(s) {
						return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
					});
					$r = x;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,removeAll: function() {
		this._list = (function($this) {
			var $r;
			switch( (funk.collections.immutable.NilEnum.nil)[1] ) {
			case 0:
				$r = funk.collections.immutable.NilType._nilList;
				break;
			}
			return $r;
		}(this));
	}
	,dispatch: function(a,b) {
		var slots = this._list;
		while(slots.get_nonEmpty()) {
			slots.get_head().execute(a,b);
			slots = slots.get_tail();
		}
	}
	,registerListener: function(func,once) {
		if(this.registrationPossible(func,once)) {
			var slot = new funk.signal.Slot2(this,func,once);
			this._list = this._list.prepend(slot);
			return funk.option.Option.Some(slot);
		}
		return this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
	}
	,registrationPossible: function(func,once) {
		if(!this._list.get_nonEmpty()) return true;
		var slot = this._list.find(function(s) {
			return funk.unit.ExpectType.toEqual(funk.unit.Expect.expect(s.listener),func);
		});
		return (function($this) {
			var $r;
			var $e = (slot);
			switch( $e[1] ) {
			case 0:
				$r = true;
				break;
			case 1:
				var x = $e[2];
				$r = (function($this) {
					var $r;
					if(x.once != once) throw new funk.errors.IllegalOperationError("You cannot addOnce() then add() the same \" +\n\t\t\t\t\t \"listener without removing the relationship first.",{ fileName : "Signal2.hx", lineNumber : 99, className : "funk.signal.Signal2", methodName : "registrationPossible"});
					$r = false;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this));
	}
	,get_size: function() {
		return this._list.get_size();
	}
	,__class__: funk.signal.Signal2
});
funk.signal.ISlot = function() { }
$hxClasses["funk.signal.ISlot"] = funk.signal.ISlot;
funk.signal.ISlot.__name__ = ["funk","signal","ISlot"];
funk.signal.ISlot.__interfaces__ = [funk.product.IProduct];
funk.signal.ISlot.prototype = {
	once: null
	,enabled: null
	,remove: null
	,__class__: funk.signal.ISlot
}
funk.signal.Slot = function() {
	funk.product.Product.call(this);
	this.enabled = true;
};
$hxClasses["funk.signal.Slot"] = funk.signal.Slot;
funk.signal.Slot.__name__ = ["funk","signal","Slot"];
funk.signal.Slot.__interfaces__ = [funk.signal.ISlot];
funk.signal.Slot.__super__ = funk.product.Product;
funk.signal.Slot.prototype = $extend(funk.product.Product.prototype,{
	once: null
	,enabled: null
	,remove: function() {
	}
	,get_productPrefix: function() {
		return "Slot";
	}
	,__class__: funk.signal.Slot
});
funk.signal.ISlot0 = function() { }
$hxClasses["funk.signal.ISlot0"] = funk.signal.ISlot0;
funk.signal.ISlot0.__name__ = ["funk","signal","ISlot0"];
funk.signal.ISlot0.__interfaces__ = [funk.signal.ISlot];
funk.signal.ISlot0.prototype = {
	listener: null
	,execute: null
	,__class__: funk.signal.ISlot0
}
funk.signal.Slot0 = function(signal,listener,once) {
	funk.signal.Slot.call(this);
	this._signal = signal;
	this.listener = listener;
	this.once = once;
};
$hxClasses["funk.signal.Slot0"] = funk.signal.Slot0;
funk.signal.Slot0.__name__ = ["funk","signal","Slot0"];
funk.signal.Slot0.__interfaces__ = [funk.signal.ISlot0];
funk.signal.Slot0.__super__ = funk.signal.Slot;
funk.signal.Slot0.prototype = $extend(funk.signal.Slot.prototype,{
	listener: null
	,_signal: null
	,execute: function() {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener();
	}
	,remove: function() {
		this._signal.remove(this.listener);
	}
	,__class__: funk.signal.Slot0
});
funk.signal.ISlot1 = function() { }
$hxClasses["funk.signal.ISlot1"] = funk.signal.ISlot1;
funk.signal.ISlot1.__name__ = ["funk","signal","ISlot1"];
funk.signal.ISlot1.__interfaces__ = [funk.signal.ISlot];
funk.signal.ISlot1.prototype = {
	listener: null
	,execute: null
	,__class__: funk.signal.ISlot1
}
funk.signal.Slot1 = function(signal,listener,once) {
	funk.signal.Slot.call(this);
	this._signal = signal;
	this.listener = listener;
	this.once = once;
};
$hxClasses["funk.signal.Slot1"] = funk.signal.Slot1;
funk.signal.Slot1.__name__ = ["funk","signal","Slot1"];
funk.signal.Slot1.__interfaces__ = [funk.signal.ISlot1];
funk.signal.Slot1.__super__ = funk.signal.Slot;
funk.signal.Slot1.prototype = $extend(funk.signal.Slot.prototype,{
	listener: null
	,_signal: null
	,execute: function(a) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener(a);
	}
	,remove: function() {
		this._signal.remove(this.listener);
	}
	,__class__: funk.signal.Slot1
});
funk.signal.ISlot2 = function() { }
$hxClasses["funk.signal.ISlot2"] = funk.signal.ISlot2;
funk.signal.ISlot2.__name__ = ["funk","signal","ISlot2"];
funk.signal.ISlot2.__interfaces__ = [funk.signal.ISlot];
funk.signal.ISlot2.prototype = {
	listener: null
	,execute: null
	,__class__: funk.signal.ISlot2
}
funk.signal.Slot2 = function(signal,listener,once) {
	funk.signal.Slot.call(this);
	this._signal = signal;
	this.listener = listener;
	this.once = once;
};
$hxClasses["funk.signal.Slot2"] = funk.signal.Slot2;
funk.signal.Slot2.__name__ = ["funk","signal","Slot2"];
funk.signal.Slot2.__interfaces__ = [funk.signal.ISlot2];
funk.signal.Slot2.__super__ = funk.signal.Slot;
funk.signal.Slot2.prototype = $extend(funk.signal.Slot.prototype,{
	listener: null
	,_signal: null
	,execute: function(a,b) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener(a,b);
	}
	,remove: function() {
		this._signal.remove(this.listener);
	}
	,__class__: funk.signal.Slot2
});
funk.tuple = {}
funk.tuple.ITuple = function() { }
$hxClasses["funk.tuple.ITuple"] = funk.tuple.ITuple;
funk.tuple.ITuple.__name__ = ["funk","tuple","ITuple"];
funk.tuple.ITuple.__interfaces__ = [funk.product.IProduct];
funk.tuple.ITuple.prototype = {
	__class__: funk.tuple.ITuple
}
funk.tuple.ITuple2 = function() { }
$hxClasses["funk.tuple.ITuple2"] = funk.tuple.ITuple2;
funk.tuple.ITuple2.__name__ = ["funk","tuple","ITuple2"];
funk.tuple.ITuple2.__interfaces__ = [funk.tuple.ITuple];
funk.tuple.ITuple2.prototype = {
	_1: null
	,_2: null
	,__class__: funk.tuple.ITuple2
	,__properties__: {get__2:"get__2",get__1:"get__1"}
}
funk.tuple.Tuple2 = $hxClasses["funk.tuple.Tuple2"] = { __ename__ : ["funk","tuple","Tuple2"], __constructs__ : ["tuple2"] }
funk.tuple.Tuple2.tuple2 = function(a,b) { var $x = ["tuple2",0,a,b]; $x.__enum__ = funk.tuple.Tuple2; $x.toString = $estr; return $x; }
funk.tuple.Tuple2Type = function() { }
$hxClasses["funk.tuple.Tuple2Type"] = funk.tuple.Tuple2Type;
funk.tuple.Tuple2Type.__name__ = ["funk","tuple","Tuple2Type"];
funk.tuple.Tuple2Type._1 = function(tuple) {
	return (function($this) {
		var $r;
		var $e = (tuple);
		switch( $e[1] ) {
		case 0:
			var b = $e[3], a = $e[2];
			$r = a;
			break;
		}
		return $r;
	}(this));
}
funk.tuple.Tuple2Type._2 = function(tuple) {
	return (function($this) {
		var $r;
		var $e = (tuple);
		switch( $e[1] ) {
		case 0:
			var b = $e[3], a = $e[2];
			$r = b;
			break;
		}
		return $r;
	}(this));
}
funk.tuple.Tuple2Type.instance = function(tuple) {
	return (function($this) {
		var $r;
		var $e = (tuple);
		switch( $e[1] ) {
		case 0:
			var b = $e[3], a = $e[2];
			$r = new funk.tuple.Tuple2Impl(a,b);
			break;
		}
		return $r;
	}(this));
}
funk.tuple.Tuple2Type.prototype = {
	__class__: funk.tuple.Tuple2Type
}
funk.tuple.Tuple2Impl = function(_1,_2) {
	funk.product.Product.call(this);
	this.__1 = _1;
	this.__2 = _2;
};
$hxClasses["funk.tuple.Tuple2Impl"] = funk.tuple.Tuple2Impl;
funk.tuple.Tuple2Impl.__name__ = ["funk","tuple","Tuple2Impl"];
funk.tuple.Tuple2Impl.__interfaces__ = [funk.tuple.ITuple2];
funk.tuple.Tuple2Impl.__super__ = funk.product.Product;
funk.tuple.Tuple2Impl.prototype = $extend(funk.product.Product.prototype,{
	_1: null
	,_2: null
	,__1: null
	,__2: null
	,productElement: function(index) {
		return (function($this) {
			var $r;
			switch(index) {
			case 0:
				$r = $this.__1;
				break;
			case 1:
				$r = $this.__2;
				break;
			default:
				$r = (function($this) {
					var $r;
					throw new funk.errors.NoSuchElementError(null,{ fileName : "Tuple2.hx", lineNumber : 57, className : "funk.tuple.Tuple2Impl", methodName : "productElement"});
					return $r;
				}($this));
			}
			return $r;
		}(this));
	}
	,get__1: function() {
		return this.__1;
	}
	,get__2: function() {
		return this.__2;
	}
	,get_productArity: function() {
		return 2;
	}
	,__class__: funk.tuple.Tuple2Impl
	,__properties__: $extend(funk.product.Product.prototype.__properties__,{get__2:"get__2",get__1:"get__1"})
});
funk.unit = {}
funk.unit.Expect = $hxClasses["funk.unit.Expect"] = { __ename__ : ["funk","unit","Expect"], __constructs__ : ["expect"] }
funk.unit.Expect.expect = function(x) { var $x = ["expect",0,x]; $x.__enum__ = funk.unit.Expect; $x.toString = $estr; return $x; }
funk.unit.ExpectType = function() { }
$hxClasses["funk.unit.ExpectType"] = funk.unit.ExpectType;
funk.unit.ExpectType.__name__ = ["funk","unit","ExpectType"];
funk.unit.ExpectType.toEqual = function(x,b) {
	return (function($this) {
		var $r;
		var $e = (x);
		switch( $e[1] ) {
		case 0:
			var a = $e[2];
			$r = (function($this) {
				var $r;
				var aIsFunk = Std["is"](a,funk.IFunkObject);
				var bIsFunk = Std["is"](b,funk.IFunkObject);
				$r = aIsFunk && bIsFunk?(function($this) {
					var $r;
					var aFunk = a;
					var bFunk = b;
					$r = aFunk.equals(bFunk);
					return $r;
				}($this)):Reflect.isFunction(a) && Reflect.isFunction(b)?Reflect.field(a,"scope") == Reflect.field(b,"scope") && Reflect.field(a,"method") == Reflect.field(b,"method")?true:a == b:a == b;
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
funk.unit.ExpectType.toNotEqual = function(x,b) {
	return !funk.unit.ExpectType.toEqual(x,b);
}
funk.unit.ExpectType.prototype = {
	__class__: funk.unit.ExpectType
}
funk.util = {}
funk.util.Reflect = function() { }
$hxClasses["funk.util.Reflect"] = funk.util.Reflect;
funk.util.Reflect.__name__ = ["funk","util","Reflect"];
funk.util.Reflect.here = function(info) {
	return info;
}
funk.util.Reflect["is"] = function(a,b) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](a));
		switch( $e[1] ) {
		case 7:
			var x = $e[2];
			$r = (function($this) {
				var $r;
				switch( (Type["typeof"](b))[1] ) {
				case 4:
					$r = Type.getEnumName(Type.getEnum(a)) == Type.getEnumName(b);
					break;
				default:
					$r = Type.enumEq(a,b);
				}
				return $r;
			}($this));
			break;
		default:
			$r = Std["is"](a,b);
		}
		return $r;
	}(this));
}
funk.util.Reflect.prototype = {
	__class__: funk.util.Reflect
}
funk.util.Require = $hxClasses["funk.util.Require"] = { __ename__ : ["funk","util","Require"], __constructs__ : ["require"] }
funk.util.Require.require = function(message) { var $x = ["require",0,message]; $x.__enum__ = funk.util.Require; $x.toString = $estr; return $x; }
funk.util.RequireType = function() { }
$hxClasses["funk.util.RequireType"] = funk.util.RequireType;
funk.util.RequireType.__name__ = ["funk","util","RequireType"];
funk.util.RequireType.toBe = function(req,condition) {
	if(!condition) {
		var $e = (req);
		switch( $e[1] ) {
		case 0:
			var message = $e[2];
			throw new funk.errors.ArgumentError(message,{ fileName : "Require.hx", lineNumber : 14, className : "funk.util.RequireType", methodName : "toBe"});
			break;
		}
	}
}
funk.util.RequireType.prototype = {
	__class__: funk.util.RequireType
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype = {
	__class__: haxe.Log
}
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return undefined;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	Function.prototype["$bind"] = function(o) {
		var f = function() {
			return f.method.apply(f.scope,arguments);
		};
		f.scope = o;
		f.method = this;
		return f;
	};
}
js.Boot.prototype = {
	__class__: js.Boot
}
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib["eval"] = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype = {
	__class__: js.Lib
}
js.Boot.__res = {}
js.Boot.__init();
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = $hxClasses["Date"] = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	$hxClasses["Math"] = Math;
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
{
	Object.prototype.iterator = function() {
      var o = this.instanceKeys();
      var y = this;
      return {
        cur : 0,
        arr : o,
        hasNext: function() { return this.cur < this.arr.length; },
        next: function() { return y[this.arr[this.cur++]]; }
      };
    }
	Object.prototype.instanceKeys = function(proto) {
      var keys = [];
      proto = !proto;
      for(var i in this) {
        if(proto && Object.prototype[i]) continue;
        keys.push(i);
      }
      return keys;
    }
}
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	var Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	var Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	var Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	var Bool = $hxClasses["Bool"] = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	var Enum = { };
	var Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	if(typeof document != "undefined") js.Lib.document = document;
	if(typeof window != "undefined") {
		js.Lib.window = window;
		js.Lib.window.onerror = function(msg,url,line) {
			var f = js.Lib.onerror;
			if(f == null) return false;
			return f(msg,[url + ":" + line]);
		};
	}
}
funk.collections.immutable.NilType._listFactory = new funk.collections.immutable.ListFactory();
funk.collections.immutable.NilType._nilList = new funk.collections.ListNil(funk.collections.immutable.NilType._listFactory);
funk.collections.immutable.NilType._setFactory = new funk.collections.immutable.SetFactory();
funk.collections.immutable.NilType._nilSet = new funk.collections.HashMapNil(funk.collections.immutable.NilType._setFactory);
funk.collections.mutable.NilType._listFactory = new funk.collections.mutable.ListFactory();
funk.collections.mutable.NilType._nilList = new funk.collections.ListNil(funk.collections.mutable.NilType._listFactory);
funk.collections.mutable.NilType._setFactory = new funk.collections.mutable.SetFactory();
funk.collections.mutable.NilType._nilSet = new funk.collections.HashMapNil(funk.collections.mutable.NilType._setFactory);
funk.gui.core.ComponentModel.UPDATE_ALL_VALUES = -1;
funk.gui.button.ButtonModel.UPDATE_TEXT = 1;
funk.gui.button.ButtonModel.UPDATE_ICON = 2;
funk.gui.button.ButtonModel.UPDATE_SELECTION = 3;
funk.gui.core.events.ComponentEventType.UNDEFINED = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.PRESS = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.RELEASE = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.HOVER_IN = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.HOVER_OUT = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.FOCUS_IN = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.FOCUS_OUT = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.ENABLE = new funk.gui.core.events.ComponentEventType();
funk.gui.core.events.ComponentEventType.DISABLE = new funk.gui.core.events.ComponentEventType();
funk.gui.button.events.ButtonEventType.DESELECT = new funk.gui.button.events.ButtonEventType();
funk.gui.button.events.ButtonEventType.SELECT = new funk.gui.button.events.ButtonEventType();
funk.gui.button.events.ButtonEventType.TRIGGER = new funk.gui.button.events.ButtonEventType();
funk.gui.core.display.QuadTree.MAX_RECURSION = 3;
funk.gui.core.events.ContainerEventType.COMPONENT_ADDED = new funk.gui.core.events.ContainerEventType();
funk.gui.js.core.display.Graphics.DEFAULT_MIN_VALUE = 0.0;
funk.gui.js.core.display.Graphics.DEFAULT_MAX_VALUE = 999999999.0;
funk.gui.js.core.display.RenderManager.ELEMENT_ID = "gui-hx";
funk.gui.js.core.event.RenderEvent.RENDER_TIME_STEP = 50. | 0;
funk.gui.js.core.event.RenderEvent.POST_RENDER_TIME_STEP = 1;
funk.gui.js.core.event.Events.render = new funk.gui.js.core.event.RenderEvent();
funk.gui.text.LabelModel.UPDATE_ICON = 1;
funk.gui.text.LabelModel.UPDATE_TEXT = 2;
js.Lib.onerror = null;
Main.main();
})()
//@ sourceMappingURL=Example01.js.map