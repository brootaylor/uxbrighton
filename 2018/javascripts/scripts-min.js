function scrollTo(t,e,i){function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}var n=o(),r=t-n,a=0,l=20;i=void 0===i?500:i;var c=function(){var t;a+=20,s(Math.easeOutCubic(a,n,r,i)),a<i?requestAnimFrame(c):e&&"function"==typeof e&&e()};c()}!function(t){"use strict";function e(i,s){this.$body=t(document.body),this.$scrollElement=t(i).is(document.body)?t(window):t(i),this.options=t.extend({},e.DEFAULTS,s),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var s=t(this),o=s.data("bs.scrollspy"),n="object"==typeof i&&i;o||s.data("bs.scrollspy",o=new e(this,n)),"string"==typeof i&&o[i]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",s=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",s=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),o=e.data("target")||e.attr("href"),n=/^#./.test(o)&&t(o);return n&&n.length&&n.is(":visible")&&[[n[i]().top+s,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),s=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,n=this.targets,r=this.activeTarget,a,l,c;if(this.scrollHeight!=i&&this.refresh(),e>=s)return r!=(a=n[n.length-1])&&this.activate(a);if(r&&e<o[0])return this.activeTarget=null,this.clear();for(a=o.length;a--;)r!=n[a]&&e>=o[a]&&(void 0===o[a+1]||e<o[a+1])&&this.activate(n[a]);t(document).scrollTop()>190?t("body").addClass("scroll-started"):t("body").removeClass("scroll-started"),0==t(".nav--in-page")[0].getBoundingClientRect().top?(t("body").addClass("nav--in-page-is-stuck"),t("body").attr("data-overlay-active","false")):t("body").removeClass("nav--in-page-is-stuck")},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',s=t(i).parents("li").addClass("active");s.parent(".dropdown-menu").length&&(s=s.closest("li.dropdown").addClass("active")),s.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var s=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=s,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var s=document.head||document.getElementsByTagName("head")[0],o=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">'+o+"</style>",s.appendChild(n.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="slideshare.net"]',".embed-container iframe",'iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var s=".fitvidsignore";i.ignore&&(s=s+", "+i.ignore);var o=t(this).find(e.join(","));(o=(o=o.not("object object")).not(s)).each(function(){var e=t(this);if(!(e.parents(s).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var i,o,n=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var r="fitvid"+t.fn.fitVids._count;e.attr("name",r),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto),Math.easeInOutQuad=function(t,e,i,s){return(t/=s/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},Math.easeInCubic=function(t,e,i,s){var o;return e+i*((t/=s)*t*t)},Math.easeOutCubic=function(t,e,i,s){var o=(t/=s)*t,n;return e+i*(o*t+-3*o+3*t)},Math.inOutQuintic=function(t,e,i,s){var o=(t/=s)*t,n=o*t;return e+i*(6*n*o+-15*o*o+10*n)};var requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.6
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";function t(t,i){return new e(t,i)}var e=function(){function t(t,e){var i=void 0!==e?e:{};this.version="3.6.6",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:i.customStickyChangeNumber||null,noStyles:i.noStyles||!1,stickyBitStickyOffset:i.stickyBitStickyOffset||0,parentClass:i.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof i.scrollEl?document.querySelector(i.scrollEl):i.scrollEl||window,stickyClass:i.stickyClass||"js-is-sticky",stuckClass:i.stuckClass||"js-is-stuck",stickyChangeClass:i.stickyChangeClass||"js-is-sticky--change",useStickyClasses:i.useStickyClasses||!1,useFixed:i.useFixed||!1,useGetBoundingClientRect:i.useGetBoundingClientRect||!1,verticalPosition:i.verticalPosition||"top"},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var s=this.props,o=s.positionVal,n=s.verticalPosition,r=s.noStyles,a=s.stickyBitStickyOffset,l="top"!==n||r?"":a+"px",c="fixed"!==o?o:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var h=0;h<this.els.length;h++){var d=this.els[h];d.style[n]=l,d.style.position=c,this.instances.push(this.addInstance(d,this.props))}}var e=t.prototype;return e.definePosition=function t(){var e;if(this.props.useFixed)e="fixed";else{for(var i=["","-o-","-webkit-","-moz-","-ms-"],s=document.head.style,o=0;o<i.length;o+=1)s.position=i[o]+"sticky";e=s.position?s.position:"fixed",s.position=""}return e},e.addInstance=function t(e,i){var s=this,o={el:e,parent:e.parentNode,props:i};if("fixed"===i.positionVal||i.useStickyClasses){this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(o.el,o.props.scrollEl);this.computeScrollOffsets(o),o.parent.className+=" "+i.parentClass,o.state="default",o.stateContainer=function(){return s.manageState(o)},n.addEventListener("scroll",o.stateContainer)}return o},e.getClosestParent=function t(e,i){var s=i,o=e;if(o.parentElement===s)return s;for(;o.parentElement!==s;)o=o.parentElement;return s},e.getTopPosition=function t(e){if(this.props.useGetBoundingClientRect)return e.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);var i=0;do{i=e.offsetTop+i}while(e=e.offsetParent);return i},e.computeScrollOffsets=function t(e){var i=e,s=i.props,o=i.el,n=i.parent,r=!this.isWin&&"fixed"===s.positionVal,a="bottom"!==s.verticalPosition,l=r?this.getTopPosition(s.scrollEl):0,c=r?this.getTopPosition(n)-l:this.getTopPosition(n),h=null!==s.customStickyChangeNumber?s.customStickyChangeNumber:o.offsetHeight,d=c+n.offsetHeight;i.offset=l+s.stickyBitStickyOffset,i.stickyStart=a?c-i.offset:0,i.stickyChange=i.stickyStart+h,i.stickyStop=a?d-(o.offsetHeight+i.offset):d-window.innerHeight},e.toggleClasses=function t(e,i,s){var o=e,n=o.className.split(" ");s&&-1===n.indexOf(s)&&n.push(s);var r=n.indexOf(i);-1!==r&&n.splice(r,1),o.className=n.join(" ")},e.manageState=function t(e){var i=e,s=i.el,o=i.props,n=i.state,r=i.stickyStart,a=i.stickyChange,l=i.stickyStop,c=s.style,h=o.noStyles,d=o.positionVal,u=o.scrollEl,f=o.stickyClass,p=o.stickyChangeClass,g=o.stuckClass,m=o.verticalPosition,v="bottom"!==m,w=function t(e){e()},y=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||w,b=this.toggleClasses,C=this.isWin?window.scrollY||window.pageYOffset:u.scrollTop,k,E=v&&C<=r&&("sticky"===n||"stuck"===n),$=C>=l&&"sticky"===n;C>r&&C<l&&("default"===n||"stuck"===n)?(i.state="sticky",y(function(){b(s,g,f),c.position=d,h||(c.bottom="",c[m]=o.stickyBitStickyOffset+"px")})):E?(i.state="default",y(function(){b(s,f),b(s,g),"fixed"===d&&(c.position="")})):$&&(i.state="stuck",y(function(){b(s,f,g),"fixed"!==d||h||(c.top="",c.bottom="0",c.position="absolute")}));var S=C>=a&&C<=l,j,T="stub";C<a/2||C>l?y(function(){b(s,p)}):S&&y(function(){b(s,T,p)})},e.update=function t(e){void 0===e&&(e=null);for(var i=0;i<this.instances.length;i+=1){var s=this.instances[i];if(this.computeScrollOffsets(s),e)for(var o in e)s.props[o]=e[o]}return this},e.removeInstance=function t(e){var i=e.el,s=e.props,o=this.toggleClasses;i.style.position="",i.style[s.verticalPosition]="",o(i,s.stickyClass),o(i,s.stuckClass),o(i.parentNode,s.parentClass)},e.cleanup=function t(){for(var e=0;e<this.instances.length;e+=1){var i=this.instances[e];i.stateContainer&&i.props.scrollEl.removeEventListener("scroll",i.stateContainer),this.removeInstance(i)}this.manageState=!1,this.instances=[]},t}();if("undefined"!=typeof window){var i=window.$||window.jQuery||window.Zepto;i&&(i.fn.stickybits=function e(i){return t(this,i)})}}),$(function(){function t(t){var e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:null}if(t("showJobs")&&(root.className+=" showJobs"),$(document).on("click tap","[data-overlay-trigger]",function(t){t.preventDefault();var e=$("body").attr("data-overlay-active"),i=$(this).attr("data-overlay-trigger");i==e?$("body").attr("data-overlay-active","false"):($("body").attr("data-overlay-active",i),"menu"==i&&$(".archive-nav__search").focus(),"slack"==i&&$("#email").focus(),"newsletter"==i&&$("#fieldEmail").focus())}),$("form.newletter-signup").submit(function(t){var e=t.target;t.preventDefault(),$.post(e.action,$(e).serialize()),$(this).parent().find(".js-signup-confirmation").show(),$(this).remove()}),$(".container").fitVids(),$(window).width()>699)var e=$(".masthead").height()-1;else var e=0;var i=e+1,s=300;$(".nav--in-page").length>0&&$("#top").scrollspy({target:".nav--in-page",offset:i}),$(document).on("click tap",'a[href^="#"]:not([href="#"])',function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash),i=(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).offset().top-e;t.length&&scrollTo(i,null,300)}}),$(document).on("click tap",".js-show-talk-details",function(t){t.preventDefault(),$(this).toggleClass("is-active").closest(".talk").toggleClass("if-conference-day-talk-toggled")}),hashFragment&&(_target=$(hashFragment).find(".job-info"),_width=_target.width(),_height=_target.height(),_top=_target[0].getBoundingClientRect().top,_left=_target[0].getBoundingClientRect().left,_target.css({height:_height,width:_width,top:_top,left:_left,position:"fixed"}).closest(".job").addClass("job-target").closest("body").addClass("job-open")),$(".job-open").on("click",function(t){if(this.tagName!=='A')return;t.preventDefault(),window.the_pos=$(document).scrollTop(),$(this).closest(".job").hasClass("job-target")?($(this).closest(".job").removeClass("job-target"),$("body").removeClass("job-open"),$(this).closest(".job").find(".job-info").attr("style","")):(_job="#"+$(this).closest(".job").attr("id"),history.pushState(null,null,_job),_target=$(this).closest(".job").find(".job-info"),_width=_target.width(),_height=_target.height(),_top=_target[0].getBoundingClientRect().top,_left=_target[0].getBoundingClientRect().left,_target.css({height:_height,width:_width,top:_top,left:_left,position:"fixed"}).closest(".job").addClass("job-target").closest("body").addClass("job-open"))}),$(".job-close").on("click",function(t){if(this.tagName!=='A')return;history.pushState(null,null,'#'),t.preventDefault(),t.stopPropagation(),$(this).closest(".job").removeClass("job-target"),$("body").removeClass("job-open"),$(this).closest(".job").find(".job-info").attr("style",""),setTimeout(function(){window.scrollTo(the_pos,0)},1)});var o="<nav role='navigation' class='table-of-contents'><strong>On this page</strong><ul class='nav'>",n,r,a,l;$("#info h3[id]").each(function(){r=$(this),a=r.text(),l="#"+r.attr("id"),o+=n="<li class='nav-item'><a href='"+l+"'>"+a+"</a></li>"}),o+="</ul></nav>",$("[data-toc]").after(o)}),
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
function(){if("undefined"!=typeof window&&window.addEventListener){var t=Object.create(null),e,i=function(){clearTimeout(e),e=setTimeout(r,100)},s=function(){},o=function(){if(window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),window.MutationObserver){var t=new MutationObserver(i);t.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),s=function(){try{t.disconnect(),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}catch(t){}}}else document.documentElement.addEventListener("DOMSubtreeModified",i,!1),s=function(){document.documentElement.removeEventListener("DOMSubtreeModified",i,!1),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}},n=function(t){function e(t){if(void 0!==t.protocol)var e=t;else(e=document.createElement("a")).href=t;return e.protocol.replace(/:/g,"")+e.host}if(window.XMLHttpRequest){var i=new XMLHttpRequest,s=e(location);t=e(t),i=void 0===i.withCredentials&&""!==t&&t!==s?XDomainRequest||void 0:XMLHttpRequest}return i},r=function(){function e(){0===--h&&(s(),o())}function i(e){return function(){!0!==t[e.base]&&(e.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function r(t){return function(){var i=document.body,s=document.createElement("x");t.onload=null,s.innerHTML=t.responseText,(s=s.getElementsByTagName("svg")[0])&&(s.setAttribute("aria-hidden","true"),s.style.position="absolute",s.style.width=0,s.style.height=0,s.style.overflow="hidden",i.insertBefore(s,i.firstChild)),e()}}function a(t){return function(){t.onerror=null,t.ontimeout=null,e()}}var l,c,h=0;s();var d=document.getElementsByTagName("use");for(c=0;c<d.length;c+=1){try{var u=d[c].getBoundingClientRect()}catch(t){u=!1}var f=(l=d[c].getAttribute("href")||d[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||d[c].getAttribute("xlink:href"))&&l.split?l.split("#"):["",""],p=f[0];f=f[1];var g=u&&0===u.left&&0===u.right&&0===u.top&&0===u.bottom;u&&0===u.width&&0===u.height&&!g?(p.length||!f||document.getElementById(f)||(p=""),d[c].hasAttribute("href")&&d[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l),p.length&&(!0!==(l=t[p])&&setTimeout(i({useEl:d[c],base:p,hash:f}),0),void 0===l&&(void 0!==(f=n(p))&&(l=new f,t[p]=l,l.onload=r(l),l.onerror=a(l),l.ontimeout=a(l),l.open("GET",p),l.send(),h+=1)))):g?p.length&&t[p]&&setTimeout(i({useEl:d[c],base:p,hash:f}),0):void 0===t[p]?t[p]=!0:t[p].onload&&(t[p].abort(),delete t[p].onload,t[p]=!0)}d="",h+=1,e()},a=function(){window.removeEventListener("load",a,!1),e=setTimeout(r,0)};"complete"!==document.readyState?window.addEventListener("load",a,!1):a()}}();
//# sourceMappingURL=scripts-min.js.map