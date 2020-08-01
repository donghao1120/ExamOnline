(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4330efa5"],{6107:function(t,i,e){},bab4:function(t,i,e){
/*!
 * Cropper.js v1.5.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-03-10T09:55:53.729Z
 */
(function(i,e){t.exports=e()})(0,function(){"use strict";function t(i){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(i)}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}function n(t){return o(t)||h(t)||r()}function o(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var s="undefined"!==typeof window,c=s?window:{},d=!!s&&"ontouchstart"in c.document.documentElement,l=!!s&&"PointerEvent"in c,p="cropper",m="all",u="crop",g="move",f="zoom",v="e",w="w",b="s",x="n",y="ne",M="nw",C="se",D="sw",k="".concat(p,"-crop"),B="".concat(p,"-disabled"),T="".concat(p,"-hidden"),E="".concat(p,"-hide"),W="".concat(p,"-invisible"),N="".concat(p,"-modal"),H="".concat(p,"-move"),L="".concat(p,"Action"),O="".concat(p,"Preview"),z="crop",Y="move",X="none",R="crop",A="cropend",S="cropmove",I="cropstart",j="dblclick",U=d?"touchstart":"mousedown",q=d?"touchmove":"mousemove",P=d?"touchend touchcancel":"mouseup",$=l?"pointerdown":U,Q=l?"pointermove":q,Z=l?"pointerup pointercancel":P,J="ready",K="resize",G="wheel",V="zoom",F="image/jpeg",_=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,tt=/^data:image\/jpeg;base64,/,it=/^img|canvas$/i,et=200,at=100,nt={viewMode:0,dragMode:z,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},ot='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',ht=Number.isNaN||c.isNaN;function rt(t){return"number"===typeof t&&!ht(t)}var st=function(t){return t>0&&t<1/0};function ct(t){return"undefined"===typeof t}function dt(i){return"object"===t(i)&&null!==i}var lt=Object.prototype.hasOwnProperty;function pt(t){if(!dt(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&lt.call(e,"isPrototypeOf")}catch(a){return!1}}function mt(t){return"function"===typeof t}var ut=Array.prototype.slice;function gt(t){return Array.from?Array.from(t):ut.call(t)}function ft(t,i){return t&&mt(i)&&(Array.isArray(t)||rt(t.length)?gt(t).forEach(function(e,a){i.call(t,e,a,t)}):dt(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)})),t}var vt=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return dt(t)&&e.length>0&&e.forEach(function(i){dt(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},wt=/\.\d*(?:0|9){12}\d*$/;function bt(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return wt.test(t)?Math.round(t*i)/i:t}var xt=/^width|height|left|top|marginLeft|marginTop$/;function yt(t,i){var e=t.style;ft(i,function(t,i){xt.test(i)&&rt(t)&&(t="".concat(t,"px")),e[i]=t})}function Mt(t,i){return t.classList?t.classList.contains(i):t.className.indexOf(i)>-1}function Ct(t,i){if(i)if(rt(t.length))ft(t,function(t){Ct(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function Dt(t,i){i&&(rt(t.length)?ft(t,function(t){Dt(t,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function kt(t,i,e){i&&(rt(t.length)?ft(t,function(t){kt(t,i,e)}):e?Ct(t,i):Dt(t,i))}var Bt=/([a-z\d])([A-Z])/g;function Tt(t){return t.replace(Bt,"$1-$2").toLowerCase()}function Et(t,i){return dt(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(Tt(i)))}function Wt(t,i,e){dt(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(Tt(i)),e)}function Nt(t,i){if(dt(t[i]))try{delete t[i]}catch(e){t[i]=void 0}else if(t.dataset)try{delete t.dataset[i]}catch(e){t.dataset[i]=void 0}else t.removeAttribute("data-".concat(Tt(i)))}var Ht=/\s\s*/,Lt=function(){var t=!1;if(s){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});c.addEventListener("test",e,a),c.removeEventListener("test",e,a)}return t}();function Ot(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(Ht).forEach(function(i){if(!Lt){var o=t.listeners;o&&o[i]&&o[i][e]&&(n=o[i][e],delete o[i][e],0===Object.keys(o[i]).length&&delete o[i],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(i,n,a)})}function zt(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(Ht).forEach(function(i){if(a.once&&!Lt){var o=t.listeners,h=void 0===o?{}:o;n=function(){delete h[i][e],t.removeEventListener(i,n,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.apply(t,r)},h[i]||(h[i]={}),h[i][e]&&t.removeEventListener(i,h[i][e],a),h[i][e]=n,t.listeners=h}t.addEventListener(i,n,a)})}function Yt(t,i,e){var a;return mt(Event)&&mt(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent"),a.initCustomEvent(i,!0,!0,e)),t.dispatchEvent(a)}function Xt(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var Rt=c.location,At=/^(\w+:)\/\/([^:\/?#]*):?(\d*)/i;function St(t){var i=t.match(At);return null!==i&&(i[1]!==Rt.protocol||i[2]!==Rt.hostname||i[3]!==Rt.port)}function It(t){var i="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+i}function jt(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,h=[];rt(n)&&0!==n&&h.push("translateX(".concat(n,"px)")),rt(o)&&0!==o&&h.push("translateY(".concat(o,"px)")),rt(i)&&0!==i&&h.push("rotate(".concat(i,"deg)")),rt(e)&&1!==e&&h.push("scaleX(".concat(e,")")),rt(a)&&1!==a&&h.push("scaleY(".concat(a,")"));var r=h.length?h.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}function Ut(t){var i=vt({},t),e=[];return ft(t,function(t,a){delete i[a],ft(i,function(i){var a=Math.abs(t.startX-i.startX),n=Math.abs(t.startY-i.startY),o=Math.abs(t.endX-i.endX),h=Math.abs(t.endY-i.endY),r=Math.sqrt(a*a+n*n),s=Math.sqrt(o*o+h*h),c=(s-r)/r;e.push(c)})}),e.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),e[0]}function qt(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:vt({startX:e,startY:a},n)}function Pt(t){var i=0,e=0,a=0;return ft(t,function(t){var n=t.startX,o=t.startY;i+=n,e+=o,a+=1}),i/=a,e/=a,{pageX:i,pageY:e}}function $t(t){var i=t.aspectRatio,e=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=st(a),h=st(e);if(o&&h){var r=e*i;"contain"===n&&r>a||"cover"===n&&r<a?e=a/i:a=e*i}else o?e=a/i:h&&(a=e*i);return{width:a,height:e}}function Qt(t){var i=t.width,e=t.height,a=t.degree;if(a=Math.abs(a)%180,90===a)return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),h=Math.cos(n),r=i*h+e*o,s=i*o+e*h;return a>90?{width:s,height:r}:{width:r,height:s}}function Zt(t,i,e,a){var o=i.aspectRatio,h=i.naturalWidth,r=i.naturalHeight,s=i.rotate,c=void 0===s?0:s,d=i.scaleX,l=void 0===d?1:d,p=i.scaleY,m=void 0===p?1:p,u=e.aspectRatio,g=e.naturalWidth,f=e.naturalHeight,v=a.fillColor,w=void 0===v?"transparent":v,b=a.imageSmoothingEnabled,x=void 0===b||b,y=a.imageSmoothingQuality,M=void 0===y?"low":y,C=a.maxWidth,D=void 0===C?1/0:C,k=a.maxHeight,B=void 0===k?1/0:k,T=a.minWidth,E=void 0===T?0:T,W=a.minHeight,N=void 0===W?0:W,H=document.createElement("canvas"),L=H.getContext("2d"),O=$t({aspectRatio:u,width:D,height:B}),z=$t({aspectRatio:u,width:E,height:N},"cover"),Y=Math.min(O.width,Math.max(z.width,g)),X=Math.min(O.height,Math.max(z.height,f)),R=$t({aspectRatio:o,width:D,height:B}),A=$t({aspectRatio:o,width:E,height:N},"cover"),S=Math.min(R.width,Math.max(A.width,h)),I=Math.min(R.height,Math.max(A.height,r)),j=[-S/2,-I/2,S,I];return H.width=bt(Y),H.height=bt(X),L.fillStyle=w,L.fillRect(0,0,Y,X),L.save(),L.translate(Y/2,X/2),L.rotate(c*Math.PI/180),L.scale(l,m),L.imageSmoothingEnabled=x,L.imageSmoothingQuality=M,L.drawImage.apply(L,[t].concat(n(j.map(function(t){return Math.floor(bt(t))})))),L.restore(),H}var Jt=String.fromCharCode;function Kt(t,i,e){var a="";e+=i;for(var n=i;n<e;n+=1)a+=Jt(t.getUint8(n));return a}var Gt=/^data:.*,/;function Vt(t){var i=t.replace(Gt,""),e=atob(i),a=new ArrayBuffer(e.length),n=new Uint8Array(a);return ft(n,function(t,i){n[i]=e.charCodeAt(i)}),a}function Ft(t,i){var e=[],a=8192,n=new Uint8Array(t);while(n.length>0)e.push(Jt.apply(null,gt(n.subarray(0,a)))),n=n.subarray(a);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}function _t(t){var i,e=new DataView(t);try{var a,n,o;if(255===e.getUint8(0)&&216===e.getUint8(1)){var h=e.byteLength,r=2;while(r+1<h){if(255===e.getUint8(r)&&225===e.getUint8(r+1)){n=r;break}r+=1}}if(n){var s=n+4,c=n+10;if("Exif"===Kt(e,s,4)){var d=e.getUint16(c);if(a=18761===d,(a||19789===d)&&42===e.getUint16(c+2,a)){var l=e.getUint32(c+4,a);l>=8&&(o=c+l)}}}if(o){var p,m,u=e.getUint16(o,a);for(m=0;m<u;m+=1)if(p=o+12*m+2,274===e.getUint16(p,a)){p+=8,i=e.getUint16(p,a),e.setUint16(p,1,a);break}}}catch(g){i=1}return i}function ti(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90;break;default:}return{rotate:i,scaleX:e,scaleY:a}}var ii={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;Ct(a,T),Dt(t,T);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};this.containerData=n,yt(a,{width:n.width,height:n.height}),Ct(t,T),Dt(a,T)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180===90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,h=n/o,r=t.width,s=t.height;t.height*h>t.width?3===e?r=t.height*h:s=t.width/h:3===e?s=t.width/h:r=t.height*h;var c={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:r,height:s};c.left=(t.width-r)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=vt({},i),this.initialCanvasData=vt({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=e.viewMode,r=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;h>1?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===h&&(d*r>c?c=d*r:d=c/r)):h>0&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&(c=o.width,d=o.height,d*r>c?c=d*r:d=c/r));var l=$t({aspectRatio:r,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if(h>(s?0:1)){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===h&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=Qt({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,h=n.height,r=e.width*(o/e.naturalWidth),s=e.height*(h/e.naturalHeight);e.left-=(r-e.width)/2,e.top-=(s-e.height)/2,e.width=r,e.height=s,e.aspectRatio=o/h,e.naturalWidth=o,e.naturalHeight=h,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,yt(this.canvas,vt({width:e.width,height:e.height},jt({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);vt(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),yt(this.image,vt({width:e.width,height:e.height},jt(vt({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=vt({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=this.limited,r=e.aspectRatio;if(t){var s=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,d=h?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=h?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),r&&(s&&c?c*r>s?c=s/r:s=c*r:s?c=s/r:c&&(s=c*r),l*r>d?l=d/r:d=l*r),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}i&&(h?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&Wt(this.face,L,e.width>=i.width&&e.height>=i.height?g:m),yt(this.cropBox,vt({width:e.width,height:e.height},jt({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Yt(this.element,R,this.getData())}},ei={initPreview:function(){var t=this.crossOrigin,i=this.options.preview,e=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=e,this.viewBox.appendChild(a),this.viewBoxImage=a,i){var n=i;"string"===typeof i?n=this.element.ownerDocument.querySelectorAll(i):i.querySelector&&(n=[i]),this.previews=n,ft(n,function(i){var a=document.createElement("img");Wt(i,O,{width:i.offsetWidth,height:i.offsetHeight,html:i.innerHTML}),t&&(a.crossOrigin=t),a.src=e,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',i.innerHTML="",i.appendChild(a)})}},resetPreview:function(){ft(this.previews,function(t){var i=Et(t,O);yt(t,{width:i.width,height:i.height}),t.innerHTML=i.html,Nt(t,O)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,a=e.width,n=e.height,o=t.width,h=t.height,r=e.left-i.left-t.left,s=e.top-i.top-t.top;this.cropped&&!this.disabled&&(yt(this.viewBoxImage,vt({width:o,height:h},jt(vt({translateX:-r,translateY:-s},t)))),ft(this.previews,function(i){var e=Et(i,O),c=e.width,d=e.height,l=c,p=d,m=1;a&&(m=c/a,p=n*m),n&&p>d&&(m=d/n,l=a*m,p=d),yt(i,{width:l,height:p}),yt(i.getElementsByTagName("img")[0],vt({width:o*m,height:h*m},jt(vt({translateX:-r*m,translateY:-s*m},t))))}))}},ai={bind:function(){var t=this.element,i=this.options,e=this.cropper;mt(i.cropstart)&&zt(t,I,i.cropstart),mt(i.cropmove)&&zt(t,S,i.cropmove),mt(i.cropend)&&zt(t,A,i.cropend),mt(i.crop)&&zt(t,R,i.crop),mt(i.zoom)&&zt(t,V,i.zoom),zt(e,$,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&zt(e,G,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&zt(e,j,this.onDblclick=this.dblclick.bind(this)),zt(t.ownerDocument,Q,this.onCropMove=this.cropMove.bind(this)),zt(t.ownerDocument,Z,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&zt(window,K,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;mt(i.cropstart)&&Ot(t,I,i.cropstart),mt(i.cropmove)&&Ot(t,S,i.cropmove),mt(i.cropend)&&Ot(t,A,i.cropend),mt(i.crop)&&Ot(t,R,i.crop),mt(i.zoom)&&Ot(t,V,i.zoom),Ot(e,$,this.onCropStart),i.zoomable&&i.zoomOnWheel&&Ot(e,G,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&Ot(e,j,this.onDblclick),Ot(t.ownerDocument,Q,this.onCropMove),Ot(t.ownerDocument,Z,this.onCropEnd),i.responsive&&Ot(window,K,this.onResize)}},ni={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||et,n=Number(t.minContainerHeight)||at;if(!(this.disabled||e.width<=a||e.height<=n)){var o,h,r=i.offsetWidth/e.width;if(1!==r||i.offsetHeight!==e.height)t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ft(o,function(t,i){o[i]=t*r})),this.setCropBoxData(ft(h,function(t,i){h[i]=t*r})))}},dblclick:function(){this.disabled||this.options.dragMode===X||this.setDragMode(Mt(this.dragBox,k)?Y:z)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||rt(i)&&1!==i||rt(e)&&0!==e||t.ctrlKey)){var a,n=this.options,o=this.pointers;t.changedTouches?ft(t.changedTouches,function(t){o[t.identifier]=qt(t)}):o[t.pointerId||0]=qt(t),a=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?f:Et(t.target,L),_.test(a)&&!1!==Yt(this.element,I,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===u&&(this.cropping=!0,Ct(this.dragBox,N)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==Yt(this.element,S,{originalEvent:t,action:i})&&(t.changedTouches?ft(t.changedTouches,function(t){vt(e[t.identifier]||{},qt(t,!0))}):vt(e[t.pointerId||0]||{},qt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?ft(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,kt(this.dragBox,N,this.cropped&&this.options.modal)),Yt(this.element,A,{originalEvent:t,action:i}))}}},oi={change:function(t){var i,e=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,h=this.pointers,r=this.action,s=e.aspectRatio,c=o.left,d=o.top,l=o.width,p=o.height,k=c+l,B=d+p,E=0,W=0,N=n.width,H=n.height,L=!0;!s&&t.shiftKey&&(s=l&&p?l/p:1),this.limited&&(E=o.minLeft,W=o.minTop,N=E+Math.min(n.width,a.width,a.left+a.width),H=W+Math.min(n.height,a.height,a.top+a.height));var O=h[Object.keys(h)[0]],z={x:O.endX-O.startX,y:O.endY-O.startY},Y=function(t){switch(t){case v:k+z.x>N&&(z.x=N-k);break;case w:c+z.x<E&&(z.x=E-c);break;case x:d+z.y<W&&(z.y=W-d);break;case b:B+z.y>H&&(z.y=H-B);break;default:}};switch(r){case m:c+=z.x,d+=z.y;break;case v:if(z.x>=0&&(k>=N||s&&(d<=W||B>=H))){L=!1;break}Y(v),l+=z.x,l<0&&(r=w,l=-l,c-=l),s&&(p=l/s,d+=(o.height-p)/2);break;case x:if(z.y<=0&&(d<=W||s&&(c<=E||k>=N))){L=!1;break}Y(x),p-=z.y,d+=z.y,p<0&&(r=b,p=-p,d-=p),s&&(l=p*s,c+=(o.width-l)/2);break;case w:if(z.x<=0&&(c<=E||s&&(d<=W||B>=H))){L=!1;break}Y(w),l-=z.x,c+=z.x,l<0&&(r=v,l=-l,c-=l),s&&(p=l/s,d+=(o.height-p)/2);break;case b:if(z.y>=0&&(B>=H||s&&(c<=E||k>=N))){L=!1;break}Y(b),p+=z.y,p<0&&(r=x,p=-p,d-=p),s&&(l=p*s,c+=(o.width-l)/2);break;case y:if(s){if(z.y<=0&&(d<=W||k>=N)){L=!1;break}Y(x),p-=z.y,d+=z.y,l=p*s}else Y(x),Y(v),z.x>=0?k<N?l+=z.x:z.y<=0&&d<=W&&(L=!1):l+=z.x,z.y<=0?d>W&&(p-=z.y,d+=z.y):(p-=z.y,d+=z.y);l<0&&p<0?(r=D,p=-p,l=-l,d-=p,c-=l):l<0?(r=M,l=-l,c-=l):p<0&&(r=C,p=-p,d-=p);break;case M:if(s){if(z.y<=0&&(d<=W||c<=E)){L=!1;break}Y(x),p-=z.y,d+=z.y,l=p*s,c+=o.width-l}else Y(x),Y(w),z.x<=0?c>E?(l-=z.x,c+=z.x):z.y<=0&&d<=W&&(L=!1):(l-=z.x,c+=z.x),z.y<=0?d>W&&(p-=z.y,d+=z.y):(p-=z.y,d+=z.y);l<0&&p<0?(r=C,p=-p,l=-l,d-=p,c-=l):l<0?(r=y,l=-l,c-=l):p<0&&(r=D,p=-p,d-=p);break;case D:if(s){if(z.x<=0&&(c<=E||B>=H)){L=!1;break}Y(w),l-=z.x,c+=z.x,p=l/s}else Y(b),Y(w),z.x<=0?c>E?(l-=z.x,c+=z.x):z.y>=0&&B>=H&&(L=!1):(l-=z.x,c+=z.x),z.y>=0?B<H&&(p+=z.y):p+=z.y;l<0&&p<0?(r=y,p=-p,l=-l,d-=p,c-=l):l<0?(r=C,l=-l,c-=l):p<0&&(r=M,p=-p,d-=p);break;case C:if(s){if(z.x>=0&&(k>=N||B>=H)){L=!1;break}Y(v),l+=z.x,p=l/s}else Y(b),Y(v),z.x>=0?k<N?l+=z.x:z.y>=0&&B>=H&&(L=!1):l+=z.x,z.y>=0?B<H&&(p+=z.y):p+=z.y;l<0&&p<0?(r=M,p=-p,l=-l,d-=p,c-=l):l<0?(r=D,l=-l,c-=l):p<0&&(r=y,p=-p,d-=p);break;case g:this.move(z.x,z.y),L=!1;break;case f:this.zoom(Ut(h),t),L=!1;break;case u:if(!z.x||!z.y){L=!1;break}i=Xt(this.cropper),c=O.startX-i.left,d=O.startY-i.top,l=o.minWidth,p=o.minHeight,z.x>0?r=z.y>0?C:y:z.x<0&&(c-=l,r=z.y>0?D:M),z.y<0&&(d-=p),this.cropped||(Dt(this.cropBox,T),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break;default:}L&&(o.width=l,o.height=p,o.left=c,o.top=d,this.action=r,this.renderCropBox()),ft(h,function(t){t.startX=t.endX,t.startY=t.endY})}},hi={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&Ct(this.dragBox,N),Dt(this.cropBox,T),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=vt({},this.initialImageData),this.canvasData=vt({},this.initialCanvasData),this.cropBoxData=vt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(vt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Dt(this.dragBox,N),Ct(this.cropBox,T)),this},replace:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,ft(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Dt(this.cropper,B)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,Ct(this.cropper,B)),this},destroy:function(){var t=this.element;return t[p]?(t[p]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=e.left,n=e.top;return this.moveTo(ct(t)?t:a+Number(t),ct(i)?i:n+Number(i))},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(rt(t)&&(e.left=t,a=!0),rt(i)&&(e.top=i,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a=this.options,n=this.canvasData,o=n.width,h=n.height,r=n.naturalWidth,s=n.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&a.zoomable){var c=r*t,d=s*t;if(!1===Yt(this.element,V,{ratio:t,oldRatio:o/r,originalEvent:e}))return this;if(e){var l=this.pointers,p=Xt(this.cropper),m=l&&Object.keys(l).length?Pt(l):{pageX:e.pageX,pageY:e.pageY};n.left-=(c-o)*((m.pageX-p.left-n.left)/o),n.top-=(d-h)*((m.pageY-p.top-n.top)/h)}else pt(i)&&rt(i.x)&&rt(i.y)?(n.left-=(c-o)*((i.x-n.left)/o),n.top-=(d-h)*((i.y-n.top)/h)):(n.left-=(c-o)/2,n.top-=(d-h)/2);n.width=c,n.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),rt(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,rt(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(rt(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(rt(t)&&(e.scaleX=t,a=!0),rt(i)&&(e.scaleY=i,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var h=a.width/a.naturalWidth;if(ft(t,function(i,e){t[e]=i/h}),i){var r=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=r-t.y}}else t={x:0,y:0,width:0,height:0};return e.rotatable&&(t.rotate=a.rotate||0),e.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&pt(t)){var o=!1;i.rotatable&&rt(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(rt(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),rt(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var h=e.width/e.naturalWidth;rt(t.x)&&(n.left=t.x*h+a.left),rt(t.y)&&(n.top=t.y*h+a.top),rt(t.width)&&(n.width=t.width*h),rt(t.height)&&(n.height=t.height*h),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?vt({},this.containerData):{}},getImageData:function(){return this.sized?vt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&ft(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&pt(t)&&(rt(t.left)&&(i.left=t.left),rt(t.top)&&(i.top=t.top),rt(t.width)?(i.width=t.width,i.height=t.width/e):rt(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&pt(t)&&(rt(t.left)&&(a.left=t.left),rt(t.top)&&(a.top=t.top),rt(t.width)&&t.width!==a.width&&(i=!0,a.width=t.width),rt(t.height)&&t.height!==a.height&&(e=!0,a.height=t.height),n&&(i?a.height=a.width/n:e&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=Zt(this.image,this.imageData,i,t);if(!this.cropped)return e;var a=this.getData(),o=a.x,h=a.y,r=a.width,s=a.height,c=e.width/Math.floor(i.naturalWidth);1!==c&&(o*=c,h*=c,r*=c,s*=c);var d=r/s,l=$t({aspectRatio:d,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=$t({aspectRatio:d,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=$t({aspectRatio:d,width:t.width||(1!==c?e.width:r),height:t.height||(1!==c?e.height:s)}),u=m.width,g=m.height;u=Math.min(l.width,Math.max(p.width,u)),g=Math.min(l.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=bt(u),f.height=bt(g),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,u,g);var w=t.imageSmoothingEnabled,b=void 0===w||w,x=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,x&&(v.imageSmoothingQuality=x);var y,M,C,D,k,B,T=e.width,E=e.height,W=o,N=h;W<=-r||W>T?(W=0,y=0,C=0,k=0):W<=0?(C=-W,W=0,y=Math.min(T,r+W),k=y):W<=T&&(C=0,y=Math.min(r,T-W),k=y),y<=0||N<=-s||N>E?(N=0,M=0,D=0,B=0):N<=0?(D=-N,N=0,M=Math.min(E,s+N),B=M):N<=E&&(D=0,M=Math.min(s,E-N),B=M);var H=[W,N,y,M];if(k>0&&B>0){var L=u/r;H.push(C*L,D*L,k*L,B*L)}return v.drawImage.apply(v,[e].concat(n(H.map(function(t){return Math.floor(bt(t))})))),f},setAspectRatio:function(t){var i=this.options;return this.disabled||ct(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===z,o=i.movable&&t===Y;t=n||o?t:X,i.dragMode=t,Wt(e,L,t),kt(e,k,n),kt(e,H,o),i.cropBoxMovable||(Wt(a,L,t),kt(a,k,n),kt(a,H,o))}return this}},ri=c.Cropper,si=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),!e||!it.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=vt({},nt,pt(a)&&a),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return a(t,[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[p]){if(i[p]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",this.originalUrl=t,!t)return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(tt.test(t))this.read(Vt(t));else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==F&&n.abort()},n.onload=function(){i.read(n.response)},n.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&St(t)&&e.crossOrigin&&(t=It(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===e.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=_t(t),n=0,o=1,h=1;if(a>1){this.url=Ft(t,F);var r=ti(a);n=r.rotate,o=r.scaleX,h=r.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=h),this.clone()}},{key:"clone",value:function(){var t,i,e=this.element,a=this.url;this.options.checkCrossOrigin&&St(a)&&(t=e.crossOrigin,t?i=a:(t="anonymous",i=It(a))),this.crossOrigin=t,this.crossOriginUrl=i;var n=document.createElement("img");t&&(n.crossOrigin=t),n.src=i||a,this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),Ct(n,E),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var t=this,i=this.isImg?this.element:this.image;i.onload=null,i.onerror=null,this.sizing=!0;var e=c.navigator&&/^(?:.(?!chrome|android))*safari/i.test(c.navigator.userAgent),a=function(i,e){vt(t.imageData,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),t.sizing=!1,t.sized=!0,t.build()};if(!i.naturalWidth||e){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),e||o.removeChild(n)},n.src=i.src,e||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(i.naturalWidth,i.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML=ot;var o=n.querySelector(".".concat(p,"-container")),h=o.querySelector(".".concat(p,"-canvas")),r=o.querySelector(".".concat(p,"-drag-box")),s=o.querySelector(".".concat(p,"-crop-box")),c=s.querySelector(".".concat(p,"-face"));this.container=a,this.cropper=o,this.canvas=h,this.dragBox=r,this.cropBox=s,this.viewBox=o.querySelector(".".concat(p,"-view-box")),this.face=c,h.appendChild(e),Ct(t,T),a.insertBefore(o,t.nextSibling),this.isImg||Dt(e,E),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,Ct(s,T),i.guides||Ct(s.getElementsByClassName("".concat(p,"-dashed")),T),i.center||Ct(s.getElementsByClassName("".concat(p,"-center")),T),i.background&&Ct(o,"".concat(p,"-bg")),i.highlight||Ct(c,W),i.cropBoxMovable&&(Ct(c,H),Wt(c,L,m)),i.cropBoxResizable||(Ct(s.getElementsByClassName("".concat(p,"-line")),T),Ct(s.getElementsByClassName("".concat(p,"-point")),T)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),mt(i.ready)&&zt(t,J,i.ready,{once:!0}),Yt(t,J)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Dt(this.element,T))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=ri,t}},{key:"setDefaults",value:function(t){vt(nt,pt(t)&&t)}}]),t}();return vt(si.prototype,ii,ei,ai,ni,oi,hi),si})}}]);