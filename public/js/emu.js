!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([,function(e,n,t){(function(e){function t(e,n){for(var t=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return r.exec(e).slice(1)};function i(e,n){if(e.filter)return e.filter(n);for(var t=[],r=0;r<e.length;r++)n(e[r],r,e)&&t.push(e[r]);return t}n.resolve=function(){for(var n="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var u=o>=0?arguments[o]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(n=u+"/"+n,r="/"===u.charAt(0))}return n=t(i(n.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+n||"."},n.normalize=function(e){var r=n.isAbsolute(e),o="/"===u(e,-1);return(e=t(i(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(i(e,function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var o=r(e.split("/")),i=r(t.split("/")),u=Math.min(o.length,i.length),a=u,f=0;f<u;f++)if(o[f]!==i[f]){a=f;break}var s=[];for(f=a;f<o.length;f++)s.push("..");return(s=s.concat(i.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var n=o(e),t=n[0],r=n[1];return t||r?(r&&(r=r.substr(0,r.length-1)),t+r):"."},n.basename=function(e,n){var t=o(e)[2];return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){return o(e)[3]};var u="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t(2))},function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var f,s=[],c=!1,l=-1;function p(){c&&f&&(c=!1,f.length?s=f.concat(s):l=-1,s.length&&m())}function m(){if(!c){var e=a(p);c=!0;for(var n=s.length;n;){for(f=s,s=[];++l<n;)f&&f[l].run();l=-1,n=s.length}f=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function d(e,n){this.fun=e,this.array=n}function _(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new d(e,n)),1!==s.length||c||a(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=_,o.addListener=_,o.once=_,o.off=_,o.removeListener=_,o.removeAllListeners=_,o.emit=_,o.prependListener=_,o.prependOnceListener=_,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,n,t){(function(n,r,o){var i,u=(i=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||n,function(e){var n,u,a;e=e||{},n||(n=void 0!==e?e:{}),n.ready=new Promise(function(e,n){u=e,a=n});var f,s={};for(f in n)n.hasOwnProperty(f)&&(s[f]=n[f]);var c,l,p=!1,m=!1;p="object"==typeof window,m="function"==typeof importScripts,c="object"==typeof r&&"object"==typeof r.versions&&"string"==typeof r.versions.node,l=!p&&!c&&!m;var d,_,g,y,h="";c?(h=m?t(1).dirname(h)+"/":o+"/",d=function(e,n){return g||(g=function(){throw new Error("cant use fs in browser")}()),y||(y=t(1)),e=y.normalize(e),g.readFileSync(e,n?null:"utf8")},_=function(e){return(e=d(e,!0)).buffer||(e=new Uint8Array(e)),e.buffer||N("Assertion failed: undefined"),e},1<r.argv.length&&r.argv[1].replace(/\\/g,"/"),r.argv.slice(2),r.on("uncaughtException",function(e){throw e}),r.on("unhandledRejection",N),n.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(d=function(e){return read(e)}),_=function(e){return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):("object"==typeof(e=read(e,"binary"))||N("Assertion failed: undefined"),e)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(p||m)&&(m?h=self.location.href:document.currentScript&&(h=document.currentScript.src),i&&(h=i),h=0!==h.indexOf("blob:")?h.substr(0,h.lastIndexOf("/")+1):"",d=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},m&&(_=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var w,A=n.print||console.log.bind(console),v=n.printErr||console.warn.bind(console);for(f in s)s.hasOwnProperty(f)&&(n[f]=s[f]);s=null,n.wasmBinary&&(w=n.wasmBinary),n.noExitRuntime&&n.noExitRuntime,"object"!=typeof WebAssembly&&N("no native wasm support detected");var b,B,V=!1,T="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function S(e,n,t){var r=n+t;for(t=n;e[t]&&!(t>=r);)++t;if(16<t-n&&e.subarray&&T)return T.decode(e.subarray(n,t));for(r="";n<t;){var o=e[n++];if(128&o){var i=63&e[n++];if(192==(224&o))r+=String.fromCharCode((31&o)<<6|i);else{var u=63&e[n++];65536>(o=224==(240&o)?(15&o)<<12|i<<6|u:(7&o)<<18|i<<12|u<<6|63&e[n++])?r+=String.fromCharCode(o):(o-=65536,r+=String.fromCharCode(55296|o>>10,56320|1023&o))}}else r+=String.fromCharCode(o)}return r}function R(e){return e?S(O,e,void 0):""}function I(e){for(var n=0,t=0;t<e.length;++t){var r=e.charCodeAt(t);55296<=r&&57343>=r&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++t)),127>=r?++n:n=2047>=r?n+2:65535>=r?n+3:n+4}var o=n+1;if((n=ue(o))&&(t=n,r=E,0<o)){o=t+o-1;for(var i=0;i<e.length;++i){var u=e.charCodeAt(i);if(55296<=u&&57343>=u&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i)),127>=u){if(t>=o)break;r[t++]=u}else{if(2047>=u){if(t+1>=o)break;r[t++]=192|u>>6}else{if(65535>=u){if(t+2>=o)break;r[t++]=224|u>>12}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63}r[t++]=128|u>>6&63}r[t++]=128|63&u}}r[t]=0}return n}var M,E,O,x,z,F=n.INITIAL_MEMORY||83886080;(b=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:F/65536,maximum:F/65536}))&&(M=b.buffer),F=M.byteLength;var C=M;M=C,n.HEAP8=E=new Int8Array(C),n.HEAP16=new Int16Array(C),n.HEAP32=x=new Int32Array(C),n.HEAPU8=O=new Uint8Array(C),n.HEAPU16=new Uint16Array(C),n.HEAPU32=new Uint32Array(C),n.HEAPF32=new Float32Array(C),n.HEAPF64=z=new Float64Array(C);var D=[],j=[],k=[],P=[];function U(){var e=n.preRun.shift();D.unshift(e)}var W=0,H=null,L=null;function N(e){throw n.onAbort&&n.onAbort(e),v(e),V=!0,e=new WebAssembly.RuntimeError("abort("+e+"). Build with -s ASSERTIONS=1 for more info."),a(e),e}function Y(e){var n=q;return String.prototype.startsWith?n.startsWith(e):0===n.indexOf(e)}function G(){return Y("data:application/octet-stream;base64,")}n.preloadedImages={},n.preloadedAudios={};var q="emu.wasm";if(!G()){var J=q;q=n.locateFile?n.locateFile(J,h):h+J}function X(){try{if(w)return new Uint8Array(w);if(_)return _(q);throw"both async and sync fetching of the wasm failed"}catch(e){N(e)}}var $,K,Z={1024:function(e){return window.VBAInterface.getJoypad(e)},1097:function(e){return window.VBAInterface.renderFrame(e)},1149:function(e,n){return window.VBAInterface.dbgOutput(e,n)},1205:function(){return window.VBAInterface.getRomSize()},1282:function(){return window.VBAInterface.getAudioSampleRate()},74176:function(){return window.VBAInterface.initSound()},74223:function(){return window.VBAInterface.pauseSound()},74271:function(){return window.VBAInterface.resetSound()},74319:function(){return window.VBAInterface.resumeSound()},74368:function(e,n){return window.VBAInterface.writeSound(e,n)},74422:function(e){return window.VBAInterface.setThrottleSound(e)},76184:function(){},76208:function(e,n){return window.VBAInterface.commitFlash(e,n)},76263:function(e,n){return window.VBAInterface.commitEeprom(e,n)},76319:function(){return window.VBAInterface.getSaveSize()},76368:function(e,n){return window.VBAInterface.restoreSaveMemory(e,n)},76505:function(e){return window.VBAInterface.copyRomToMemory(e)},97684:function(){window.VBAInterface.NYI("EReader scan card")},97921:function(e){return window.VBAInterface.copyRomToMemory(e)}};function Q(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t(n);else{var r=t.N;"number"==typeof r?void 0===t.M?B.get(r)():B.get(r)(t.M):r(void 0===t.M?null:t.M)}}}function ee(){function e(e){return(e=e.toTimeString().match(/\(([A-Za-z ]+)\)$/))?e[1]:"GMT"}if(!$){$=!0,x[se()>>2]=60*(new Date).getTimezoneOffset();var n=(new Date).getFullYear(),t=new Date(n,0,1);n=new Date(n,6,1),x[fe()>>2]=Number(t.getTimezoneOffset()!=n.getTimezoneOffset());var r=e(t),o=e(n);r=I(r),o=I(o),n.getTimezoneOffset()<t.getTimezoneOffset()?(x[ae()>>2]=r,x[ae()+4>>2]=o):(x[ae()>>2]=o,x[ae()+4>>2]=r)}}K=c?function(){var e=r.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof dateNow?dateNow:function(){return performance.now()};var ne=[null,[],[]],te=[];j.push({N:function(){oe()}});var re={b:function(e,n,t,r){N("Assertion failed: "+R(e)+", at: "+[n?R(n):"unknown filename",t,r?R(r):"unknown function"])},i:function(e,n){ee(),e=new Date(1e3*x[e>>2]),x[n>>2]=e.getSeconds(),x[n+4>>2]=e.getMinutes(),x[n+8>>2]=e.getHours(),x[n+12>>2]=e.getDate(),x[n+16>>2]=e.getMonth(),x[n+20>>2]=e.getFullYear()-1900,x[n+24>>2]=e.getDay();var t=new Date(e.getFullYear(),0,1);x[n+28>>2]=(e.getTime()-t.getTime())/864e5|0,x[n+36>>2]=-60*e.getTimezoneOffset();var r=new Date(e.getFullYear(),6,1).getTimezoneOffset();return e=0|(r!=(t=t.getTimezoneOffset())&&e.getTimezoneOffset()==Math.min(t,r)),x[n+32>>2]=e,e=x[ae()+(e?4:0)>>2],x[n+40>>2]=e,n},h:function(){N()},c:function(e,n,t){var r;for(te.length=0,t>>=2;r=O[n++];)(r=105>r)&&1&t&&t++,te.push(r?z[t++>>1]:x[t]),++t;return Z[e].apply(null,te)},k:K,f:function(e,n,t){O.copyWithin(e,n,n+t)},g:function(){N("OOM")},e:function(e,n,t,r){for(var o=0,i=0;i<t;i++){for(var u=x[n+8*i>>2],a=x[n+(8*i+4)>>2],f=0;f<a;f++){var s=O[u+f],c=ne[e];0===s||10===s?((1===e?A:v)(S(c,0)),c.length=0):c.push(s)}o+=a}return x[r>>2]=o,0},a:b,j:function(e){ee();var n=new Date(x[e+20>>2]+1900,x[e+16>>2],x[e+12>>2],x[e+8>>2],x[e+4>>2],x[e>>2],0),t=x[e+32>>2],r=n.getTimezoneOffset(),o=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),6,1).getTimezoneOffset(),u=o.getTimezoneOffset(),a=Math.min(u,i);return 0>t?x[e+32>>2]=Number(i!=u&&a==r):0<t!=(a==r)&&(i=Math.max(u,i),n.setTime(n.getTime()+6e4*((0<t?a:i)-r))),x[e+24>>2]=n.getDay(),x[e+28>>2]=(n.getTime()-o.getTime())/864e5|0,n.getTime()/1e3|0},d:function(e){var n=Date.now()/1e3|0;return e&&(x[e>>2]=n),n}};!function(){function e(e){n.asm=e.exports,B=n.asm.l,W--,n.monitorRunDependencies&&n.monitorRunDependencies(W),0==W&&(null!==H&&(clearInterval(H),H=null),L&&(e=L,L=null,e()))}function t(n){e(n.instance)}function r(e){return(w||!p&&!m||"function"!=typeof fetch||Y("file://")?Promise.resolve().then(X):fetch(q,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+q+"'";return e.arrayBuffer()}).catch(function(){return X()})).then(function(e){return WebAssembly.instantiate(e,o)}).then(e,function(e){v("failed to asynchronously prepare wasm: "+e),N(e)})}var o={a:re};if(W++,n.monitorRunDependencies&&n.monitorRunDependencies(W),n.instantiateWasm)try{return n.instantiateWasm(o,e)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}!function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||G()||Y("file://")||"function"!=typeof fetch)return r(t);fetch(q,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,o).then(t,function(e){return v("wasm streaming compile failed: "+e),v("falling back to ArrayBuffer instantiation"),r(t)})})}()}();var oe=n.___wasm_call_ctors=function(){return(oe=n.___wasm_call_ctors=n.asm.m).apply(null,arguments)};n._VBA_start=function(){return(n._VBA_start=n.asm.n).apply(null,arguments)},n._VBA_get_emulating=function(){return(n._VBA_get_emulating=n.asm.o).apply(null,arguments)},n._VBA_stop=function(){return(n._VBA_stop=n.asm.p).apply(null,arguments)},n._VBA_do_cycles=function(){return(n._VBA_do_cycles=n.asm.q).apply(null,arguments)},n._VBA_get_bios=function(){return(n._VBA_get_bios=n.asm.r).apply(null,arguments)},n._VBA_get_rom=function(){return(n._VBA_get_rom=n.asm.s).apply(null,arguments)},n._VBA_get_internalRAM=function(){return(n._VBA_get_internalRAM=n.asm.t).apply(null,arguments)},n._VBA_get_workRAM=function(){return(n._VBA_get_workRAM=n.asm.u).apply(null,arguments)},n._VBA_get_paletteRAM=function(){return(n._VBA_get_paletteRAM=n.asm.v).apply(null,arguments)},n._VBA_get_vram=function(){return(n._VBA_get_vram=n.asm.w).apply(null,arguments)},n._VBA_get_pix=function(){return(n._VBA_get_pix=n.asm.x).apply(null,arguments)},n._VBA_get_oam=function(){return(n._VBA_get_oam=n.asm.y).apply(null,arguments)},n._VBA_get_ioMem=function(){return(n._VBA_get_ioMem=n.asm.z).apply(null,arguments)},n._VBA_get_systemColorMap16=function(){return(n._VBA_get_systemColorMap16=n.asm.A).apply(null,arguments)},n._VBA_get_systemColorMap32=function(){return(n._VBA_get_systemColorMap32=n.asm.B).apply(null,arguments)},n._VBA_get_systemFrameSkip=function(){return(n._VBA_get_systemFrameSkip=n.asm.C).apply(null,arguments)},n._VBA_set_systemFrameSkip=function(){return(n._VBA_set_systemFrameSkip=n.asm.D).apply(null,arguments)},n._VBA_get_systemSaveUpdateCounter=function(){return(n._VBA_get_systemSaveUpdateCounter=n.asm.E).apply(null,arguments)},n._VBA_reset_systemSaveUpdateCounter=function(){return(n._VBA_reset_systemSaveUpdateCounter=n.asm.F).apply(null,arguments)},n._VBA_emuWriteBattery=function(){return(n._VBA_emuWriteBattery=n.asm.G).apply(null,arguments)},n._VBA_agbPrintFlush=function(){return(n._VBA_agbPrintFlush=n.asm.H).apply(null,arguments)};var ie,ue=n._malloc=function(){return(ue=n._malloc=n.asm.I).apply(null,arguments)},ae=n.__get_tzname=function(){return(ae=n.__get_tzname=n.asm.J).apply(null,arguments)},fe=n.__get_daylight=function(){return(fe=n.__get_daylight=n.asm.K).apply(null,arguments)},se=n.__get_timezone=function(){return(se=n.__get_timezone=n.asm.L).apply(null,arguments)};function ce(){function e(){if(!ie&&(ie=!0,n.calledRun=!0,!V)){if(Q(j),Q(k),u(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;){var e=n.postRun.shift();P.unshift(e)}Q(P)}}if(!(0<W)){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)U();Q(D),0<W||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),e()},1)):e())}}if(L=function e(){ie||ce(),ie||(L=e)},n.run=ce,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);0<n.preInit.length;)n.preInit.pop()();return ce(),e.ready});e.exports=u}).call(this,"/index.js",t(2),"/")},function(e,n,t){window.gbaninja=t(3)(window.gbaninja)}]);