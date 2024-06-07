"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,t){var n,r,o,a,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return r=!(n=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return n=e.done,e},e:function(e){r=!0,o=e},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw o}}};if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),a=0,{s:t=function(){},n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var LocalSearch=function(){return _createClass(function e(t){var n=t.path,n=void 0===n?"":n,r=t.unescape,r=void 0!==r&&r,t=t.top_n_per_article,t=void 0===t?1:t;_classCallCheck(this,e),this.path=n,this.unescape=r,this.top_n_per_article=t,this.isfetched=!1,this.datas=null},[{key:"getIndexByWord",value:function(e,a){var i=this,l=2<arguments.length&&void 0!==arguments[2]&&arguments[2],c=[],s=new Set;return l||(a=a.toLowerCase()),e.forEach(function(e){i.unescape&&((t=document.createElement("div")).innerText=e,e=t.innerHTML);var t,n=e.length;if(0!==n){var r,o=0;for(l||(e=e.toLowerCase());-1<(r=a.indexOf(e,o));)c.push({position:r,word:e}),s.add(e),o=r+n}}),c.sort(function(e,t){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length}),[c,s]}},{key:"mergeIntoSlice",value:function(e,t,n){for(var r=n[0],o=r.position,a=r.word,i=[],l=new Set;o+a.length<=t&&0!==n.length;){l.add(a),i.push({position:o,length:a.length});var c=o+a.length;for(n.shift();0!==n.length&&(o=(r=n[0]).position,a=r.word,o<c);)n.shift()}return{hits:i,start:e,end:t,count:l.size}}},{key:"highlightKeyword",value:function(e,t){var n,r="",o=t.start,a=_createForOfIteratorHelper(t.hits);try{for(a.s();!(n=a.n()).done;){var i=n.value,l=i.position,c=i.length;r+=e.substring(o,l),o=l+c,r+='<mark class="search-keyword">'.concat(e.substr(l,c),"</mark>")}}catch(e){a.e(e)}finally{a.f()}return r+=e.substring(o,t.end)}},{key:"getResultItems",value:function(h){var f=this,y=[];return this.datas.forEach(function(e){var t=e.title,n=e.content,e=e.url,r=_slicedToArray(f.getIndexByWord(h,t),2),o=r[0],r=r[1],a=_slicedToArray(f.getIndexByWord(h,n),2),i=a[0],a=a[1],r=new Set([].concat(_toConsumableArray(r),_toConsumableArray(a))).size,a=o.length+i.length;if(0!==a){for(var l=[],c=(0!==o.length&&l.push(f.mergeIntoSlice(0,t.length,o)),[]);0!==i.length;){var s=i[0].position,u=Math.max(0,s-20),s=Math.min(n.length,s+100);c.push(f.mergeIntoSlice(u,s,i))}c.sort(function(e,t){return e.count!==t.count?t.count-e.count:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start});var o=parseInt(f.top_n_per_article,10),d=(0<=o&&(c=c.slice(0,o)),"");(e=new URL(e,location.origin)).searchParams.append("highlight",h.join(" ")),d+=0!==l.length?'<div class="local-search-hit-item"><a href="'.concat(e.href,'"><span class="search-result-title">').concat(f.highlightKeyword(t,l[0]),"</span>"):'<div class="local-search-hit-item"><a href="'.concat(e.href,'"><span class="search-result-title">').concat(t,"</span>"),c.forEach(function(e){d+='<p class="search-result">'.concat(f.highlightKeyword(n,e),"...</p></a>")}),d+="</div>",y.push({item:d,id:y.length,hitCount:a,includedCount:r})}}),y}},{key:"fetchData",value:function(){var t=this,n=!this.path.endsWith("json");fetch(this.path).then(function(e){return e.text()}).then(function(e){t.isfetched=!0,t.datas=n?_toConsumableArray((new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")).map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}}):JSON.parse(e),t.datas=t.datas.filter(function(e){return e.title}).map(function(e){return e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e}),window.dispatchEvent(new Event("search:loaded"))})}},{key:"highlightText",value:function(t,e,n){var r,o=t.nodeValue,a=e.start,i=[],l=_createForOfIteratorHelper(e.hits);try{for(l.s();!(r=l.n()).done;){var c=r.value,s=c.position,u=c.length,d=document.createTextNode(o.substring(a,s)),a=s+u,h=document.createElement("mark");h.className=n,h.appendChild(document.createTextNode(o.substr(s,u))),i.push(d,h)}}catch(e){l.e(e)}finally{l.f()}t.nodeValue=o.substring(a,e.end),i.forEach(function(e){t.parentNode.insertBefore(e,t)})}},{key:"highlightSearchWords",value:function(e){var n=this,t=new URL(location.href).searchParams.get("highlight"),r=t?t.split(" "):[];if(r.length&&e){for(var o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=[];o.nextNode();)o.currentNode.parentNode.matches("button, select, textarea, .mermaid")||a.push(o.currentNode);a.forEach(function(e){var t=_slicedToArray(n.getIndexByWord(r,e.nodeValue),1)[0];t.length&&(t=n.mergeIntoSlice(0,e.nodeValue.length,t),n.highlightText(e,t,"search-keyword"))})}}}])}();window.addEventListener("load",function(){function e(){var e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(y,"to_show 0.5s"),btf.animateIn(p,"titleScale 0.5s"),setTimeout(function(){c.focus()},300),f||(l.isfetched||l.fetchData(),c.addEventListener("input",h),f=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(g(),document.removeEventListener("keydown",e))}),m(),window.addEventListener("resize",m)}function t(){btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",e)}var n=GLOBAL_CONFIG.localSearch,r=n.path,o=n.top_n_per_article,a=n.unescape,i=n.languages,l=new LocalSearch({path:r,top_n_per_article:o,unescape:a}),c=document.querySelector("#local-search-input input"),s=document.getElementById("local-search-stats-wrap"),u=document.getElementById("loading-status"),d=!r.endsWith("json"),h=function(){var e,t,n,r;l.isfetched&&(r=c.value.trim().toLowerCase(),""!==(r=d?r.replace(/</g,"&lt;").replace(/>/g,"&gt;"):r)&&(u.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),n=r.split(/[-\s]+/),e=document.getElementById("local-search-results"),t=[],0<r.length&&(t=l.getResultItems(n)),1===n.length&&""===n[0]?(e.textContent="",s.textContent=""):0===t.length?(e.textContent="",(n=document.createElement("div")).className="search-result-stats",n.textContent=i.hits_empty.replace(/\$\{query}/,r),s.innerHTML=n.outerHTML):(t.sort(function(e,t){return e.includedCount!==t.includedCount?t.includedCount-e.includedCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id}),r=i.hits_stats.replace(/\$\{hits}/,t.length),e.innerHTML='<div class="search-result-list">'.concat(t.map(function(e){return e.item}).join(""),"</div>"),s.innerHTML='<hr><div class="search-result-stats">'.concat(r,"</div>"),window.pjax&&window.pjax.refresh(e)),u.textContent="")},f=!1,y=document.getElementById("search-mask"),p=document.querySelector("#local-search .search-dialog"),m=function(){window.innerWidth<768&&p.style.setProperty("--search-height",window.innerHeight+"px")},g=function(){var e=document.body.style;e.width="",e.overflow="",btf.animateOut(p,"search_close .5s"),btf.animateOut(y,"to_hide 0.5s"),window.removeEventListener("resize",m)};window.addEventListener("search:loaded",function(){var e=document.getElementById("loading-database");e.nextElementSibling.style.display="block",e.remove()}),t(),document.querySelector("#local-search .search-close-button").addEventListener("click",g),y.addEventListener("click",g),GLOBAL_CONFIG.localSearch.preload&&l.fetchData(),l.highlightSearchWords(document.getElementById("article-container")),window.addEventListener("pjax:complete",function(){btf.isHidden(y)||g(),l.highlightSearchWords(document.getElementById("article-container")),t()})});