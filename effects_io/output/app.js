/** @constructor */
var i$VM = function() {
  this.valstack = {};
  this.valstack_top = 0;
  this.valstack_base = 0;

  this.ret = null;

  this.callstack = [];
}

var i$vm;
var i$valstack;
var i$valstack_top;
var i$valstack_base;
var i$ret;
var i$callstack;

var i$Int = {};
var i$String = {};
var i$Integer = {};
var i$Float = {};
var i$Char = {};
var i$Ptr = {};
var i$Forgot = {};

/** @constructor */
var i$CON = function(tag,args,app,ev) {
  this.tag = tag;
  this.args = args;
  this.app = app;
  this.ev = ev;
}

/** @constructor */
var i$POINTER = function(addr) {
  this.addr = addr;
}

var i$SCHED = function(vm) {
  i$vm = vm;
  i$valstack = vm.valstack;
  i$valstack_top = vm.valstack_top;
  i$valstack_base = vm.valstack_base;
  i$ret = vm.ret;
  i$callstack = vm.callstack;
}

var i$SLIDE = function(args) {
  for (var i = 0; i < args; ++i)
    i$valstack[i$valstack_base + i] = i$valstack[i$valstack_top + i];
}

var i$PROJECT = function(val,loc,arity) {
  for (var i = 0; i < arity; ++i)
    i$valstack[i$valstack_base + i + loc] = val.args[i];
}

var i$CALL = function(fun,args) {
  i$callstack.push(args);
  i$callstack.push(fun);
}

var i$ffiWrap = function(fid,oldbase,myoldbase) {
  return function() {
    var oldstack = i$callstack;
    i$callstack = [];

    var res = fid;

    for(var i = 0; i < (arguments.length ? arguments.length : 1); ++i) {
      while (res instanceof i$CON) {
        i$valstack_top += 1;
        i$valstack[i$valstack_top] = res;
        i$valstack[i$valstack_top + 1] = arguments[i];
        i$SLIDE(2);
        i$valstack_top = i$valstack_base + 2;
        i$CALL(_idris__123_APPLY0_125_,[oldbase])
        while (i$callstack.length) {
          var func = i$callstack.pop();
          var args = i$callstack.pop();
          func.apply(this,args);
        }
        res = i$ret;
      }
    }

    i$callstack = oldstack;

    return i$ret;
  }
}

var i$charCode = function(str) {
  if (typeof str == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var i$fromCharCode = function(chr) {
  if (typeof chr == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}

var i$RUN = function () {
  for (var i = 0; i < 10000 && i$callstack.length; i++) {
    var func = i$callstack.pop();
    var args = i$callstack.pop();
    func.apply(this,args);
  };

  if (i$callstack.length)
    setTimeout(i$RUN, 0);
}
var i$getLine = function() {
    return prompt("Prelude.getLine");
}

var i$putStr = function(s) {
  console.log(s);
};

var i$systemInfo = function(index) {
  switch(index) {
    case 0:
      return "javascript";
    case 1:
      return navigator.platform;
  }
  return "";
}
var _idris_PE_95_map_95_622baa6c = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 3];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_Main_46_app$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$65682;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_app = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = "What is your name?\n";
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_app$0,[oldbase,myoldbase]);
  i$CALL(_idris_Effect_46_StdIO_46_putStr,[myoldbase]);
}
var _idris_call_95__95_IO = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Prelude_46_Chars_46_chr$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$ret = "\u0000";
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$fromCharCode(i$valstack[i$valstack_base]);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Chars_46_chr$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
}
var _idris_Prelude_46_Chars_46_chr$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$CALL(_idris_Prelude_46_Chars_46_chr$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 1] = i$CON$0;
      break;
    case 1:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris_Prelude_46_Chars_46_chr$2,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Chars_46__123_chr_95_0_125_,[myoldbase]);
      break;
  };
}
var _idris_Prelude_46_Chars_46_chr = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = 0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Chars_46_chr$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0,[myoldbase]);
}
var _idris_Effects_46_dropEnv$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_dropEnv$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$PROJECT(i$valstack[i$valstack_base + 10],11,2);
  i$valstack[i$valstack_base + 13] = undefined;
  i$valstack[i$valstack_base + 14] = undefined;
  i$valstack[i$valstack_base + 15] = undefined;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Effects_46_dropEnv$1,[oldbase,myoldbase]);
  i$CALL(_idris_Effects_46_dropEnv,[myoldbase]);
}
var _idris_Effects_46_dropEnv = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 11;
  switch(i$valstack[i$valstack_base + 4].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
      switch(i$valstack[i$valstack_base + 3].tag){
        case 1:
          i$PROJECT(i$valstack[i$valstack_base + 3],7,2);
          i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
          i$valstack[i$valstack_base + 10] = undefined;
          i$valstack[i$valstack_base + 11] = undefined;
          i$valstack[i$valstack_base + 12] = undefined;
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
          myoldbase.addr = i$valstack_base;
          i$valstack_base = i$valstack_top;
          i$valstack_top += 5;
          i$CALL(_idris_Effects_46_dropEnv$0,[oldbase,myoldbase]);
          i$CALL(_idris_Effects_46_envElem,[myoldbase]);
          break;
        case 0:
          i$ret = undefined;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
    case 0:
      switch(i$valstack[i$valstack_base + 3].tag){
        case 1:
          i$PROJECT(i$valstack[i$valstack_base + 3],5,2);
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 0:
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
  };
}
var _idris_Effects_46_eff$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_base + 15] = new i$CON(65669,[i$valstack[i$valstack_base + 7]],_idris__123_APPLY_95_0_125_$65669,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 15];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Effects_46_eff,[oldbase]);
}
var _idris_Effects_46_eff$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_base + 16] = new i$CON(65673,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 5]],_idris__123_APPLY_95_0_125_$65673,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 16];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Effects_46_eff,[oldbase]);
}
var _idris_Effects_46_eff$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46_eff = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  switch(i$valstack[i$valstack_base + 6].tag){
    case 5:
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 6].args[0];
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_Effects_46_eff$0,[oldbase,myoldbase]);
      i$CALL(_idris_Effects_46_unlabel,[myoldbase]);
      break;
    case 2:
      i$PROJECT(i$valstack[i$valstack_base + 6],8,2);
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 7];
      i$SLIDE(11);
      i$valstack_top = i$valstack_base + 11;
      i$CALL(_idris_Effects_46_execEff,[oldbase]);
      break;
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 6],8,2);
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = new i$CON(65671,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 7]],_idris__123_APPLY_95_0_125_$65671,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 15];
      i$SLIDE(8);
      i$valstack_top = i$valstack_base + 8;
      i$CALL(_idris_Effects_46_eff,[oldbase]);
      break;
    case 3:
      i$PROJECT(i$valstack[i$valstack_base + 6],8,2);
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_Effects_46_eff$1,[oldbase,myoldbase]);
      i$CALL(_idris_Effects_46_dropEnv,[myoldbase]);
      break;
    case 4:
      i$PROJECT(i$valstack[i$valstack_base + 6],8,2);
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 5]],null,null);
      i$valstack[i$valstack_base + 16] = new i$CON(65674,[i$valstack[i$valstack_base + 7]],_idris__123_APPLY_95_0_125_$65674,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 16];
      i$SLIDE(8);
      i$valstack_top = i$valstack_base + 8;
      i$CALL(_idris_Effects_46_eff,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 8] = i$valstack[i$valstack_base + 6].args[0];
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Effects_46_eff$2,[oldbase,myoldbase]);
      i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
      break;
  };
}
var _idris_Effects_46_envElem = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 3].args[0];
      i$PROJECT(i$valstack[i$valstack_base + 4],6,2);
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      ;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
      i$SLIDE(5);
      i$valstack_top = i$valstack_base + 5;
      i$CALL(_idris_Effects_46_envElem,[oldbase]);
      break;
    case 0:
      i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
      i$valstack[i$valstack_base + 7] = i$CON$0;
      i$ret = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 7]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Effects_46_execEff$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = new i$CON(65676,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY_95_0_125_$65676,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46_execEff$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_execEff$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46_execEff$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_execEff$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46_execEff = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 11;
  switch(i$valstack[i$valstack_base + 8].tag){
    case 0:
      i$PROJECT(i$valstack[i$valstack_base + 7],11,2);
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_base + 18] = undefined;
      ;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 18];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 7;
      i$CALL(_idris_Effects_46_execEff$0,[oldbase,myoldbase]);
      i$CALL(_idris_Effects_46_handle,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 11] = i$valstack[i$valstack_base + 8].args[0];
      i$PROJECT(i$valstack[i$valstack_base + 7],12,2);
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_base + 18] = undefined;
      i$valstack[i$valstack_base + 19] = undefined;
      i$valstack[i$valstack_base + 20] = undefined;
      i$valstack[i$valstack_base + 21] = new i$CON(65678,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 12]],_idris__123_APPLY_95_0_125_$65678,null);
      ;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 14];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 15];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 16];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 17];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 18];
      i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 19];
      i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 20];
      i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 13];
      i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 21];
      i$SLIDE(11);
      i$valstack_top = i$valstack_base + 11;
      i$CALL(_idris_Effects_46_execEff,[oldbase]);
      break;
  };
}
var _idris_Prelude_46_Interactive_46_getChar = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = undefined;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = i$CON$65694;
  i$valstack[i$valstack_base + 3] = i$CON$65695;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_PE_95_map_95_622baa6c,[oldbase]);
}
var _idris_Prelude_46_Interactive_46_getLine_39_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = i$CON$65696;
  i$valstack[i$valstack_base + 5] = i$CON$65697;
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effect_46_StdIO_46_getStr = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_base + 2] = i$CON$1;
  i$ret = new i$CON(2,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_handle$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46_handle$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_handle$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46_handle$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_handle$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46_handle = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_handle$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_io_95_bind$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_io_95_bind$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_io_95_bind = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_io_95_bind$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind_95_2_125_,[myoldbase]);
}
var _idris_io_95_pure = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_main$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = i$CON$65691;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Effects_46_run,[oldbase]);
}
var _idris_Main_46_main = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 8;
  i$valstack[i$valstack_base] = undefined;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = i$CON$65684;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_main$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_app,[myoldbase]);
}
var _idris_prim_95_write = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$putStr(i$valstack[i$valstack_base + 1]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46_pure = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Prelude_46_Interactive_46_putChar = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = i$charCode(i$valstack[i$valstack_base]);
  i$ret = putchar;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effect_46_StdIO_46_putStr = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base]],null,null);
  i$ret = new i$CON(2,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Interactive_46_putStr_39_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 5] = new i$CON(65701,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 1]],_idris__123_APPLY_95_0_125_$65701,null);
  i$valstack[i$valstack_base + 6] = i$CON$65698;
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_rebuildEnv$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 18];
  i$SLIDE(9);
  i$valstack_top = i$valstack_base + 9;
  i$CALL(_idris_Effects_46_replaceEnvAt,[oldbase]);
}
var _idris_Effects_46_rebuildEnv = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 15;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 5],7,2);
      switch(i$valstack[i$valstack_base + 4].tag){
        case 1:
          i$PROJECT(i$valstack[i$valstack_base + 4],9,2);
          i$valstack[i$valstack_base + 11] = undefined;
          i$valstack[i$valstack_base + 12] = undefined;
          i$valstack[i$valstack_base + 13] = undefined;
          i$valstack[i$valstack_base + 14] = undefined;
          i$valstack[i$valstack_base + 15] = undefined;
          i$valstack[i$valstack_base + 16] = undefined;
          i$valstack[i$valstack_base + 17] = undefined;
          i$valstack[i$valstack_base + 18] = undefined;
          i$valstack[i$valstack_base + 19] = undefined;
          i$valstack[i$valstack_base + 20] = undefined;
          i$valstack[i$valstack_base + 21] = undefined;
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 19];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 20];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 21];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 10];
          i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 8];
          i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
          myoldbase.addr = i$valstack_base;
          i$valstack_base = i$valstack_top;
          i$valstack_top += 7;
          i$CALL(_idris_Effects_46_rebuildEnv$0,[oldbase,myoldbase]);
          i$CALL(_idris_Effects_46_rebuildEnv,[myoldbase]);
          break;
        case 0:
          i$ret = i$valstack[i$valstack_base + 6];
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
    case 0:
      switch(i$valstack[i$valstack_base + 4].tag){
        case 1:
          i$PROJECT(i$valstack[i$valstack_base + 4],7,2);
          i$ret = i$valstack[i$valstack_base + 6];
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 0:
          i$ret = i$valstack[i$valstack_base + 6];
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
  };
}
var _idris_Effects_46_relabel$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_relabel = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  switch(i$valstack[i$valstack_base + 4].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_Effects_46_relabel$0,[oldbase,myoldbase]);
      i$CALL(_idris_Effects_46_relabel,[myoldbase]);
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Effects_46_replaceEnvAt$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_replaceEnvAt = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 10;
  switch(i$valstack[i$valstack_base + 8].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 8],9,2);
      switch(i$valstack[i$valstack_base + 7].tag){
        case 1:
          i$valstack[i$valstack_base + 11] = i$valstack[i$valstack_base + 7].args[0];
          i$valstack[i$valstack_base + 12] = undefined;
          i$valstack[i$valstack_base + 13] = undefined;
          i$valstack[i$valstack_base + 14] = undefined;
          i$valstack[i$valstack_base + 15] = undefined;
          i$valstack[i$valstack_base + 16] = undefined;
          i$valstack[i$valstack_base + 17] = undefined;
          i$valstack[i$valstack_base + 18] = undefined;
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
          i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
          i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 14];
          i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 15];
          i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 16];
          i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 17];
          i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 18];
          i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 11];
          i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
          myoldbase.addr = i$valstack_base;
          i$valstack_base = i$valstack_top;
          i$valstack_top += 9;
          i$CALL(_idris_Effects_46_replaceEnvAt$0,[oldbase,myoldbase]);
          i$CALL(_idris_Effects_46_replaceEnvAt,[myoldbase]);
          break;
        case 0:
          i$ret = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
    case 0:
      switch(i$valstack[i$valstack_base + 7].tag){
        case 1:
          i$valstack[i$valstack_base + 9] = i$valstack[i$valstack_base + 7].args[0];
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 0:
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
  };
}
var _idris_Effects_46_run = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_base + 10] = undefined;
  i$valstack[i$valstack_base + 11] = undefined;
  i$valstack[i$valstack_base + 12] = new i$CON(65680,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY_95_0_125_$65680,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 12];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Effects_46_eff,[oldbase]);
}
var _idris_Prelude_46_Strings_46_strM$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base][0];
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base].substr(1,i$valstack[i$valstack_base].length - 1);
      i$ret = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Strings_46_strM$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$CON$1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Strings_46_strM$2,[oldbase,myoldbase]);
  i$CALL(_idris_Decidable_46_Equality_46_Decidable_46_Equality_46__64_Decidable_46_Equality_46_DecEq_36_Bool_58__33_decEq_58_0,[myoldbase]);
}
var _idris_Prelude_46_Strings_46_strM$0 = function(oldbase,myoldbase){
  i$CALL(_idris_Prelude_46_Strings_46_strM$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 1] = i$CON$1;
      break;
    case 1:
      i$valstack[i$valstack_base + 1] = i$CON$0;
      break;
  };
}
var _idris_Prelude_46_Strings_46_strM = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = "";
  i$valstack[i$valstack_base + 1] = +(i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1]);
  i$CALL(_idris_Prelude_46_Strings_46_strM$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 1] == 0) {
    i$valstack[i$valstack_base + 1] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 1] = i$CON$1;
  };
}
var _idris_Effects_46_unlabel = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY_95_0_125_$65663 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,14);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 10] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 11] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 12] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 13] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 14] = i$valstack[i$valstack_base + 1];
  i$SLIDE(15);
  i$valstack_top = i$valstack_base + 15;
  i$CALL(_idris_Effects_46_eff_95_Effects_95__95_idr_95_364_95_30_95_case,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65664 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65665 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65666 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_2_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65667 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_3_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65668 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Effects_46__123_eff_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_eff_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65670 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Effects_46__123_eff_95_2_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65671 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Effects_46__123_eff_95_3_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65672 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Effects_46__123_eff_95_4_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65673 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Effects_46__123_eff_95_5_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65674 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_eff_95_6_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65675 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Effects_46__123_execEff_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65676 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Effects_46__123_execEff_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65677 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Effects_46__123_execEff_95_2_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65678 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Effects_46__123_execEff_95_3_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65679 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Effects_46__123_run_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65680 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effects_46__123_run_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_app_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_app_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65685 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main_95_2_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65686 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_3_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65687 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_4_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_5_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65689 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_6_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65690 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_7_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95_8_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Interactive_46_putChar,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getChar_95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getChar_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getLine_39__95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_putStr_39__95_0_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65699 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_io_95_bind,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65700 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_io_95_pure,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65701 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_prim_95_write,[oldbase]);
}
var _idris__123_APPLY_95_0_125_$65702 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris__123_io_95_bind_95_1_125_,[oldbase]);
}
var _idris__123_APPLY_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 14;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].app) {
    i$valstack[i$valstack_base].app(oldbase,myoldbase);
  } else {
    i$ret = undefined;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_EVAL_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].ev) {
    i$valstack[i$valstack_base].ev(oldbase,myoldbase);
  } else {
    i$ret = i$valstack[i$valstack_base];
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Prelude_46_Interfaces_46__123_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0_95_lam_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = +(i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$ret = i$CON$0;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$ret = i$CON$1;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = new i$CON(65700,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY_95_0_125_$65700,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Main_46__123_app_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = "Hello!";
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 1] + i$valstack[i$valstack_base];
  i$valstack[i$valstack_base + 2] = "\n";
  i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base + 1] + i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Effect_46_StdIO_46_putStr,[oldbase]);
}
var _idris_Prelude_46_Chars_46__123_chr_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    default:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_Prelude_46_Chars_46__123_chr_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = 1114112;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Chars_46__123_chr_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_eff_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Effects_46__123_eff_95_0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Effects_46_relabel,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_eff_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46__123_execEff_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_execEff_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_execEff_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Prelude_46_Interactive_46__123_getChar_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Chars_46_chr,[oldbase]);
}
var _idris_Prelude_46_Interactive_46__123_getLine_39__95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$getLine();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Main_46__123_main_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65700,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY_95_0_125_$65700,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Interactive_46__123_putStr_39__95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$ret = new i$CON(65700,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY_95_0_125_$65700,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_run_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_run_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Effects_46__123_run_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris__123_runMain_95_0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_EVAL_95_0_125_,[oldbase]);
}
var _idris__123_runMain_95_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_runMain_95_0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris__123_runMain_95_0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_runMain_95_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_main,[myoldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Main_46__123_app_95_1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$65681;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_app_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_app_95_1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Effect_46_StdIO_46_getStr,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65668,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY_95_0_125_$65668,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_execEff_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65675,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY_95_0_125_$65675,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Interactive_46__123_getChar_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = getchar;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 3].split('').reverse().join('');
  i$ret = new i$CON(65700,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY_95_0_125_$65700,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      if (i$valstack[i$valstack_base + 4] == "\n") {
        i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 5];
      } else {
        i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4].concat(i$valstack[i$valstack_base + 5]);
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 3] = "";
      break;
  };
}
var _idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base].split('').reverse().join('');
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Prelude_46_Interactive_46__123_getLine_39__95_1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Strings_46_strM,[myoldbase]);
}
var _idris__123_io_95_bind_95_1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris__123_io_95_bind_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris__123_io_95_bind_95_1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind_95_0_125_,[myoldbase]);
}
var _idris_Main_46__123_main_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65683;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_run_95_1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65679,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY_95_0_125_$65679,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 2];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Effects_46_eff,[oldbase]);
}
var _idris_Effects_46__123_eff_95_2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_eff_95_2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46__123_execEff_95_2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_execEff_95_2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_execEff_95_2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris__123_io_95_bind_95_2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65702,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY_95_0_125_$65702,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0,[oldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0_95_lam_95_3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65670,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY_95_0_125_$65670,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_execEff_95_3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65677,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY_95_0_125_$65677,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65685,[i$valstack[i$valstack_base]],_idris__123_APPLY_95_0_125_$65685,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_eff_95_4_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46__123_eff_95_4_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris_Effects_46__123_eff_95_4_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Effects_46_rebuildEnv,[myoldbase]);
}
var _idris_Effects_46__123_eff_95_4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46__123_eff_95_4_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Main_46__123_main_95_4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65686;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_eff_95_5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65672,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY_95_0_125_$65672,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65687;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46__123_eff_95_6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 12;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_base + 10] = undefined;
  i$valstack[i$valstack_base + 11] = undefined;
  i$valstack[i$valstack_base + 12] = undefined;
  i$valstack[i$valstack_base + 13] = undefined;
  i$ret = new i$CON(65663,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 13]],_idris__123_APPLY_95_0_125_$65663,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65688;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65689;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95_8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65690;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Decidable_46_Equality_46_Decidable_46_Equality_46__64_Decidable_46_Equality_46_DecEq_36_Bool_58__33_decEq_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      switch(i$valstack[i$valstack_base].tag){
        case 0:
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 1:
          i$ret = i$CON$1;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
    case 1:
      switch(i$valstack[i$valstack_base].tag){
        case 0:
          i$ret = i$CON$1;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
        case 1:
          i$ret = i$CON$0;
          i$valstack_top = i$valstack_base;
          i$valstack_base = oldbase.addr;
          break;
      };
      break;
  };
}
var _idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = new i$CON(65692,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY_95_0_125_$65692,null);
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 8]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = new i$CON(65664,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY_95_0_125_$65664,null);
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = new i$CON(65665,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY_95_0_125_$65665,null);
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = new i$CON(65667,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY_95_0_125_$65667,null);
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY_95_0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 3:
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$CALL(_idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Interactive_46_getChar,[myoldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 1;
      i$CALL(_idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$1,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Interactive_46_getLine_39_,[myoldbase]);
      break;
    case 2:
      i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 5].args[0];
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = new i$CON(65693,[i$valstack[i$valstack_base + 7]],_idris__123_APPLY_95_0_125_$65693,null);
      i$valstack[i$valstack_base + 12] = new i$CON(65666,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY_95_0_125_$65666,null);
      i$ret = new i$CON(65699,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],_idris__123_APPLY_95_0_125_$65699,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 7] = i$valstack[i$valstack_base + 5].args[0];
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Effects_46_Effect_46_StdIO_46__64_Effects_46_Handler_36_StdIO_58_IO_58__33_handle_58_0$2,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Interactive_46_putStr_39_,[myoldbase]);
      break;
  };
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Prelude_46_Interfaces_46__123_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0_95_lam_95_0_125_,[oldbase]);
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0$1,[oldbase,myoldbase]);
  switch(i$valstack[i$valstack_base + 2].tag){
    case 2:
      i$valstack[i$valstack_base + 2] = i$CON$1;
      break;
    default:
      i$valstack[i$valstack_base + 2] = i$CON$0;
  };
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33__62__61__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0,[myoldbase]);
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0$1 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 3].tag){
    case 0:
      i$ret = i$CON$2;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 1:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0$0 = function(oldbase,myoldbase){
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = +(i$valstack[i$valstack_base] < i$valstack[i$valstack_base + 1]);
      i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0$1,[oldbase,myoldbase]);
      if (i$valstack[i$valstack_base + 3] == 0) {
        i$valstack[i$valstack_base + 3] = i$CON$0;
      } else {
        i$valstack[i$valstack_base + 3] = i$CON$1;
      };
      break;
    case 1:
      i$ret = i$CON$1;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = +(i$valstack[i$valstack_base] == i$valstack[i$valstack_base + 1]);
  i$CALL(_idris_Prelude_46_Interfaces_46_Prelude_46_Interfaces_46__64_Prelude_46_Interfaces_46_Ord_36_Int_58__33_compare_58_0$0,[oldbase,myoldbase]);
  if (i$valstack[i$valstack_base + 2] == 0) {
    i$valstack[i$valstack_base + 2] = i$CON$0;
  } else {
    i$valstack[i$valstack_base + 2] = i$CON$1;
  };
}
var _idris_Effects_46_dropEnv_95_Effects_95__95_idr_95_156_95_7_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 16]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Effects_46_eff_95_Effects_95__95_idr_95_364_95_30_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 17] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 16];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var _idris_Effects_46_eff_95_Effects_95__95_idr_95_364_95_30_95_case = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 14],15,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Effects_46_eff_95_Effects_95__95_idr_95_364_95_30_95_case$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY_95_0_125_,[myoldbase]);
}
var _idris_Effects_46_eff_95_Effects_95__95_idr_95_364_95_30_95_case_95_Effects_95__95_idr_95_364_95_34_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY_95_0_125_,[oldbase]);
}
var i$CON$0 = new i$CON(0,[],null,null);
var i$CON$1 = new i$CON(1,[],null,null);
var i$CON$2 = new i$CON(2,[],null,null);
var i$CON$65681 = new i$CON(65681,[],_idris__123_APPLY_95_0_125_$65681,null);
var i$CON$65682 = new i$CON(65682,[],_idris__123_APPLY_95_0_125_$65682,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY_95_0_125_$65683,null);
var i$CON$65684 = new i$CON(65684,[],_idris__123_APPLY_95_0_125_$65684,null);
var i$CON$65686 = new i$CON(65686,[],_idris__123_APPLY_95_0_125_$65686,null);
var i$CON$65687 = new i$CON(65687,[],_idris__123_APPLY_95_0_125_$65687,null);
var i$CON$65688 = new i$CON(65688,[],_idris__123_APPLY_95_0_125_$65688,null);
var i$CON$65689 = new i$CON(65689,[],_idris__123_APPLY_95_0_125_$65689,null);
var i$CON$65690 = new i$CON(65690,[],_idris__123_APPLY_95_0_125_$65690,null);
var i$CON$65691 = new i$CON(65691,[],_idris__123_APPLY_95_0_125_$65691,null);
var i$CON$65694 = new i$CON(65694,[],_idris__123_APPLY_95_0_125_$65694,null);
var i$CON$65695 = new i$CON(65695,[],_idris__123_APPLY_95_0_125_$65695,null);
var i$CON$65696 = new i$CON(65696,[],_idris__123_APPLY_95_0_125_$65696,null);
var i$CON$65697 = new i$CON(65697,[],_idris__123_APPLY_95_0_125_$65697,null);
var i$CON$65698 = new i$CON(65698,[],_idris__123_APPLY_95_0_125_$65698,null);
var main = function(){
if (typeof (document) != "undefined" && (document.readyState == "complete" || document.readyState == "loaded")) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain_95_0_125_(new i$POINTER(0));
    i$RUN();
  } else if (typeof (window) != "undefined") {
    window.addEventListener("DOMContentLoaded",function(){
  var vm = new i$VM();
  i$SCHED(vm);
  _idris__123_runMain_95_0_125_(new i$POINTER(0));
  i$RUN();
}
,false);
  } else if (true) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain_95_0_125_(new i$POINTER(0));
    i$RUN();
  }
}
main()