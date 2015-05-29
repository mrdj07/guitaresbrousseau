/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||s.toggleClass("open"),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);;
/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend( jQuery.easing,
{
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

;
/*
 *	jQuery carouFredSel 6.1.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($) {


	//	LOCAL

	if ( $.fn.carouFredSel )
	{
		return;
	}

	$.fn.caroufredsel = $.fn.carouFredSel = function(options, configs)
	{

		//	no element
		if (this.length == 0)
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}

		//	multiple elements
		if (this.length > 1)
		{
			return this.each(function() {
				$(this).carouFredSel(options, configs);
			});
		}


		var $cfs = this,
			$tt0 = this[0],
			starting_position = false;

		if ($cfs.data('_cfs_isCarousel'))
		{
			starting_position = $cfs.triggerHandler('_cfs_triggerEvent', 'currentPosition');
			$cfs.trigger('_cfs_triggerEvent', ['destroy', true]);
		}


		$cfs._cfs_init = function(o, setOrig, start)
		{
			o = go_getObject($tt0, o);

			o.items = go_getItemsObject($tt0, o.items);
			o.scroll = go_getScrollObject($tt0, o.scroll);
			o.auto = go_getAutoObject($tt0, o.auto);
			o.prev = go_getPrevNextObject($tt0, o.prev);
			o.next = go_getPrevNextObject($tt0, o.next);
			o.pagination = go_getPaginationObject($tt0, o.pagination);
			o.swipe = go_getSwipeObject($tt0, o.swipe);
			o.mousewheel = go_getMousewheelObject($tt0, o.mousewheel);

			if (setOrig)
			{
				opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			}

			opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			opts.d = cf_getDimensions(opts);

			crsl.direction = (opts.direction == 'up' || opts.direction == 'left') ? 'next' : 'prev';

			var	a_itm = $cfs.children(),
				avail_primary = ms_getParentSize($wrp, opts, 'width');

			if (is_true(opts.cookie))
			{
				opts.cookie = 'caroufredsel_cookie_' + conf.serialNumber;
			}

			opts.maxDimension = ms_getMaxDimension(opts, avail_primary);

			//	complement items and sizes
			opts.items = in_complementItems(opts.items, opts, a_itm, start);
			opts[opts.d['width']] = in_complementPrimarySize(opts[opts.d['width']], opts, a_itm);
			opts[opts.d['height']] = in_complementSecondarySize(opts[opts.d['height']], opts, a_itm);

			//	primary size not set for a responsive carousel
			if (opts.responsive)
			{
				if (!is_percentage(opts[opts.d['width']]))
				{
					opts[opts.d['width']] = '100%';
				}
			}

			//	primary size is percentage
			if (is_percentage(opts[opts.d['width']]))
			{
				crsl.upDateOnWindowResize = true;
				crsl.primarySizePercentage = opts[opts.d['width']];
				opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				if (!opts.items.visible)
				{
					opts.items.visibleConf.variable = true;
				}
			}

			if (opts.responsive)
			{
				opts.usePadding = false;
				opts.padding = [0, 0, 0, 0];
				opts.align = false;
				opts.items.visibleConf.variable = false;
			}
			else
			{
				//	visible-items not set
				if (!opts.items.visible)
				{
					opts = in_complementVisibleItems(opts, avail_primary);
				}

				//	primary size not set -> calculate it or set to "variable"
				if (!opts[opts.d['width']])
				{
					if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d['width']]) && opts.items.filter == '*')
					{
						opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
						opts.align = false;
					}
					else
					{
						opts[opts.d['width']] = 'variable';
					}
				}
				//	align not set -> set to center if primary size is number
				if (is_undefined(opts.align))
				{
					opts.align = (is_number(opts[opts.d['width']]))
						? 'center'
						: false;
				}
				//	set variabe visible-items
				if (opts.items.visibleConf.variable)
				{
					opts.items.visible = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
			}

			//	set visible items by filter
			if (opts.items.filter != '*' && !opts.items.visibleConf.variable)
			{
				opts.items.visibleConf.org = opts.items.visible;
				opts.items.visible = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
			}

			opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
			opts.items.visibleConf.old = opts.items.visible;

			if (opts.responsive)
			{
				if (!opts.items.visibleConf.min)
				{
					opts.items.visibleConf.min = opts.items.visible;
				}
				if (!opts.items.visibleConf.max)
				{
					opts.items.visibleConf.max = opts.items.visible;
				}
				opts = in_getResponsiveValues(opts, a_itm, avail_primary);
			}
			else
			{
				opts.padding = cf_getPadding(opts.padding);

				if (opts.align == 'top')
				{
					opts.align = 'left';
				}
				else if (opts.align == 'bottom')
				{
					opts.align = 'right';
				}

				switch (opts.align)
				{
					//	align: center, left or right
					case 'center':
					case 'left':
					case 'right':
						if (opts[opts.d['width']] != 'variable')
						{
							opts = in_getAlignPadding(opts, a_itm);
							opts.usePadding = true;
						}
						break;

					//	padding
					default:
						opts.align = false;
						opts.usePadding = (
							opts.padding[0] == 0 && 
							opts.padding[1] == 0 && 
							opts.padding[2] == 0 && 
							opts.padding[3] == 0
						) ? false : true;
						break;
				}
			}

			if (!is_number(opts.scroll.duration))
			{
				opts.scroll.duration = 500;
			}
			if (is_undefined(opts.scroll.items))
			{
				opts.scroll.items = (opts.responsive || opts.items.visibleConf.variable || opts.items.filter != '*') 
					? 'visible'
					: opts.items.visible;
			}

			opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
			opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
			opts.next = $.extend(true, {}, opts.scroll, opts.next);
			opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
			//	swipe and mousewheel extend later on, per direction

			opts.auto = go_complementAutoObject($tt0, opts.auto);
			opts.prev = go_complementPrevNextObject($tt0, opts.prev);
			opts.next = go_complementPrevNextObject($tt0, opts.next);
			opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
			opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
			opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);

			if (opts.synchronise)
			{
				opts.synchronise = cf_getSynchArr(opts.synchronise);
			}


			//	DEPRECATED
			if (opts.auto.onPauseStart)
			{
				opts.auto.onTimeoutStart = opts.auto.onPauseStart;
				deprecated('auto.onPauseStart', 'auto.onTimeoutStart');
			}
			if (opts.auto.onPausePause)
			{
				opts.auto.onTimeoutPause = opts.auto.onPausePause;
				deprecated('auto.onPausePause', 'auto.onTimeoutPause');
			}
			if (opts.auto.onPauseEnd)
			{
				opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
				deprecated('auto.onPauseEnd', 'auto.onTimeoutEnd');
			}
			if (opts.auto.pauseDuration)
			{
				opts.auto.timeoutDuration = opts.auto.pauseDuration;
				deprecated('auto.pauseDuration', 'auto.timeoutDuration');
			}
			//	/DEPRECATED


		};	//	/init


		$cfs._cfs_build = function() {
			$cfs.data('_cfs_isCarousel', true);

			var a_itm = $cfs.children(),
				orgCSS = in_mapCss($cfs, ['textAlign', 'float', 'position', 'top', 'right', 'bottom', 'left', 'zIndex', 'width', 'height', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']),
				newPosition = 'relative';

			switch (orgCSS.position)
			{
				case 'absolute':
				case 'fixed':
					newPosition = orgCSS.position;
					break;
			}

			$wrp.css(orgCSS).css({
				'overflow'		: 'hidden',
				'position'		: newPosition
			});

			$cfs.data('_cfs_origCss', orgCSS).css({
				'textAlign'		: 'left',
				'float'			: 'none',
				'position'		: 'absolute',
				'top'			: 0,
				'right'			: 'auto',
				'bottom'		: 'auto',
				'left'			: 0,
				'marginTop'		: 0,
				'marginRight'	: 0,
				'marginBottom'	: 0,
				'marginLeft'	: 0
			});

			sz_storeMargin(a_itm, opts);
			sz_storeSizes(a_itm, opts);
			if (opts.responsive)
			{
				sz_setResponsiveSizes(opts, a_itm);
			}

		};	//	/build


		$cfs._cfs_bind_events = function() {
			$cfs._cfs_unbind_events();


			//	stop event
			$cfs.bind(cf_e('stop', conf), function(e, imm) {
				e.stopPropagation();

				//	button
				if (!crsl.isStopped)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('stopped', conf));
					}
				}

				//	set stopped
				crsl.isStopped = true;

				if (opts.auto.play)
				{
					opts.auto.play = false;
					$cfs.trigger(cf_e('pause', conf), imm);
				}
				return true;
			});


			//	finish event
			$cfs.bind(cf_e('finish', conf), function(e) {
				e.stopPropagation();
				if (crsl.isScrolling)
				{
					sc_stopScroll(scrl);
				}
				return true;
			});


			//	pause event
			$cfs.bind(cf_e('pause', conf), function(e, imm, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	immediately pause
				if (imm && crsl.isScrolling)
				{
					scrl.isStopped = true;
					var nst = getTime() - scrl.startTime;
					scrl.duration -= nst;
					if (scrl.pre)
					{
						scrl.pre.duration -= nst;
					}
					if (scrl.post)
					{
						scrl.post.duration -= nst;
					}
					sc_stopScroll(scrl, false);
				}

				//	update remaining pause-time
				if (!crsl.isPaused && !crsl.isScrolling)
				{
					if (res)
					{
						tmrs.timePassed += getTime() - tmrs.startTime;
					}
				}

				//	button
				if (!crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('paused', conf));
					}
				}

				//	set paused
				crsl.isPaused = true;

				//	pause pause callback
				if (opts.auto.onTimeoutPause)
				{
					var dur1 = opts.auto.timeoutDuration - tmrs.timePassed,
						perc = 100 - Math.ceil( dur1 * 100 / opts.auto.timeoutDuration );

					opts.auto.onTimeoutPause.call($tt0, perc, dur1);
				}
				return true;
			});


			//	play event
			$cfs.bind(cf_e('play', conf), function(e, dir, del, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	sort params
				var v = [dir, del, res],
					t = ['string', 'number', 'boolean'],
					a = cf_sortParams(v, t);

				dir = a[0];
				del = a[1];
				res = a[2];

				if (dir != 'prev' && dir != 'next')
				{
					dir = crsl.direction;
				}
				if (!is_number(del))
				{
					del = 0;
				}
				if (!is_boolean(res))
				{
					res = false;
				}

				//	stopped?
				if (res)
				{
					crsl.isStopped = false;
					opts.auto.play = true;
				}
				if (!opts.auto.play)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped: Not scrolling.');
				}

				//	button
				if (crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.removeClass(cf_c('stopped', conf));
						opts.auto.button.removeClass(cf_c('paused', conf));
					}
				}

				//	set playing
				crsl.isPaused = false;
				tmrs.startTime = getTime();

				//	timeout the scrolling
				var dur1 = opts.auto.timeoutDuration + del;
					dur2 = dur1 - tmrs.timePassed;
					perc = 100 - Math.ceil(dur2 * 100 / dur1);

				if (opts.auto.progress)
				{
					tmrs.progress = setInterval(function() {
						var pasd = getTime() - tmrs.startTime + tmrs.timePassed,
							perc = Math.ceil(pasd * 100 / dur1);
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], perc);
					}, opts.auto.progress.interval);
				}

				tmrs.auto = setTimeout(function() {
					if (opts.auto.progress)
					{
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
					}
					if (opts.auto.onTimeoutEnd)
					{
						opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
					}
					if (crsl.isScrolling)
					{
						$cfs.trigger(cf_e('play', conf), dir);
					}
					else
					{
						$cfs.trigger(cf_e(dir, conf), opts.auto);
					}
				}, dur2);

				//	pause start callback
				if (opts.auto.onTimeoutStart)
				{
					opts.auto.onTimeoutStart.call($tt0, perc, dur2);
				}

				return true;
			});


			//	resume event
			$cfs.bind(cf_e('resume', conf), function(e) {
				e.stopPropagation();
				if (scrl.isStopped)
				{
					scrl.isStopped = false;
					crsl.isPaused = false;
					crsl.isScrolling = true;
					scrl.startTime = getTime();
					sc_startScroll(scrl);
				}
				else
				{
					$cfs.trigger(cf_e('play', conf));
				}
				return true;
			});


			//	prev + next events
			$cfs.bind(cf_e('prev', conf)+' '+cf_e('next', conf), function(e, obj, num, clb, que) {
				e.stopPropagation();

				//	stopped or hidden carousel, don't scroll, don't queue
				if (crsl.isStopped || $cfs.is(':hidden'))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped or hidden: Not scrolling.');
				}

				//	not enough items
				var minimum = (is_number(opts.items.minimum)) ? opts.items.minimum : opts.items.visible + 1;
				if (minimum > itms.total)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');
				}

				//	get config
				var v = [obj, num, clb, que],
					t = ['object', 'number/string', 'function', 'boolean'],
					a = cf_sortParams(v, t);

				obj = a[0];
				num = a[1];
				clb = a[2];
				que = a[3];

				var eType = e.type.slice(conf.events.prefix.length);

				if (!is_object(obj))
				{
					obj = {};
				}
				if (is_function(clb))
				{
					obj.onAfter = clb;
				}
				if (is_boolean(que))
				{
					obj.queue = que;
				}
				obj = $.extend(true, {}, opts[eType], obj);

				//	test conditions callback
				if (obj.conditions && !obj.conditions.call($tt0, eType))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Callback "conditions" returned false.');
				}

				if (!is_number(num))
				{
					if (opts.items.filter != '*')
					{
						num = 'visible';
					}
					else
					{
						var arr = [num, obj.items, opts[eType].items];
						for (var a = 0, l = arr.length; a < l; a++)
						{
							if (is_number(arr[a]) || arr[a] == 'page' || arr[a] == 'visible') {
								num = arr[a];
								break;
							}
						}
					}
					switch(num) {
						case 'page':
							e.stopImmediatePropagation();
							return $cfs.triggerHandler(cf_e(eType+'Page', conf), [obj, clb]);
							break;

						case 'visible':
							if (!opts.items.visibleConf.variable && opts.items.filter == '*')
							{
								num = opts.items.visible;
							}
							break;
					}
				}

				//	resume animation, add current to queue
				if (scrl.isStopped)
				{
					$cfs.trigger(cf_e('resume', conf));
					$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel resumed scrolling.');
				}

				//	queue if scrolling
				if (obj.duration > 0)
				{
					if (crsl.isScrolling)
					{
						if (obj.queue)
						{
							if (obj.queue == 'last')
							{
								queu = [];
							}
							if (obj.queue != 'first' || queu.length == 0)
							{
								$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
							}
						}
						e.stopImmediatePropagation();
						return debug(conf, 'Carousel currently scrolling.');
					}
				}

				tmrs.timePassed = 0;
				$cfs.trigger(cf_e('slide_'+eType, conf), [obj, num]);

				//	synchronise
				if (opts.synchronise)
				{
					var s = opts.synchronise,
						c = [obj, num];

					for (var j = 0, l = s.length; j < l; j++) {
						var d = eType;
						if (!s[j][2])
						{
							d = (d == 'prev') ? 'next' : 'prev';
						}
						if (!s[j][1])
						{
							c[0] = s[j][0].triggerHandler('_cfs_triggerEvent', ['configuration', d]);
						}
						c[1] = num + s[j][3];
						s[j][0].trigger('_cfs_triggerEvent', ['slide_'+d, c]);
					}
				}
				return true;
			});


			//	prev event
			$cfs.bind(cf_e('slide_prev', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at start, scroll to end
				if (!opts.circular)
				{
					if (itms.first == 0)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('next', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.visibleConf.variable)
					{
						nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total-1);
					}
					else if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total-1, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (itms.total - nI < itms.first)
					{
						nI = itms.total - itms.first;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					if (opts.items.visible+nI <= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total-nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items backward.');


				//	save new config
				itms.first += nI;
				while (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == 0 && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'prev');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				$cfs.children().slice(itms.total-nI, itms.total).prependTo($cfs);
				if (itms.total < opts.items.visible + nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsPrev(a_itm, opts, nI),
					i_new = gi_getNewItemsPrev(a_itm, opts),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}
				var oL = (pL < 0) ? opts.padding[opts.d[3]] : 0;

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visible < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_new_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_wsz = {},
					a_cur = {},
					a_old = {},
					a_new = {},
					a_lef = {},
					a_lef_vis = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'cover':
					case 'cover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visible), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				sz_resetMargin(a_itm, opts, true);
				if (pR >= 0)
				{
					sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
				}
				if (pL >= 0)
				{
					sz_resetMargin(i_cur_l, opts, opts.padding[opts.d[3]]);
				}

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = -(i_siz - oL);
				a_lef_vis[opts.d['left']] = -(i_siz_vis - oL);
				a_wsz[opts.d['left']] = w_siz[opts.d['width']];

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingnew = function() {},
					_a_paddingnew = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'uncover':
					case 'uncover-fade':
						$cf2.children().slice(0, nI).remove();
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;

					case 'cover':
					case 'cover-fade':
						$cf2.children().slice(opts.items.visible).remove();
						$cf2.css(a_lef_vis);
						break;
				}

				$cfs.css(a_lef);

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing);

				//	animate / set carousel
				a_cfs[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					if (i_new_l.not(i_cur_l).length)
					{
			 			a_cur[opts.d['marginRight']] = i_cur_l.data('_cfs_origCssMargin');

						if (pL < 0)
						{
							i_cur_l.css(a_cur);
						}
						else
						{
							_s_paddingcur = function() {
								i_cur_l.css(a_cur);
							};
							_a_paddingcur = function() {
								scrl.anims.push([i_cur_l, a_cur]);
							};
						}
					}
					switch(sO.fx)
					{
						case 'cover':
						case 'cover-fade':
							$cf2.children().eq(nI-1).css(a_cur);
							break;
					}

					if (i_new_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
						_s_paddingold = function() {
							i_old_l.css(a_old);
						};
						_a_paddingold = function() {
							scrl.anims.push([i_old_l, a_old]);
						};
					}

					if (pR >= 0)
					{
						a_new[opts.d['marginRight']] = i_new_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]];
						_s_paddingnew = function() {
							i_new_l.css(a_new);
						};
						_a_paddingnew = function() {
							scrl.anims.push([i_new_l, a_new]);
						};
					}
				}

				//	set position
				_position = function() {
					$cfs.css(a_cfs);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
						i_old = $( $cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat( $cfs.children().slice(0, overFill).get() ) );
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						var l_itm = $cfs.children().eq(opts.items.visible+nI-1);
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'prev', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);

					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callback
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						scrl.anims.push([$cf2, a_cfs, function() {
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'cover-fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }]);
						scrl.anims.push([$cf2, a_cfs, function() {
							$cfs.css({ 'opacity': 1 });
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingnew();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	next event
			$cfs.bind(cf_e('slide_next', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at end, scroll to start
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('prev', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				var lastItemNr = (itms.first == 0) ? itms.total : itms.first;

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (opts.items.visibleConf.variable)
					{
						var vI = gn_getVisibleItemsNext(a_itm, opts, nI),
							xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr-1);
					}
					else
					{
						var vI = opts.items.visible,
							xI = opts.items.visible;
					}

					if (nI + vI > lastItemNr)
					{
						nI = lastItemNr - xI;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					while (opts.items.visible-nI >= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items forward.');


				//	save new config
				itms.first -= nI;
				while (itms.first < 0)
				{
					itms.first += itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'next');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				if (itms.total < opts.items.visible+nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsNext(a_itm, opts),
					i_new = gi_getNewItemsNext(a_itm, opts, nI),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visibleConf.old < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_old_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_cfs_vis = {},
					a_cur = {},
					a_old = {},
					a_lef = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'uncover':
					case 'uncover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visibleConf.old), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				if (opts.align)
				{
					if (opts.padding[opts.d[1]] < 0)
					{
						opts.padding[opts.d[1]] = 0;
					}
				}
				sz_resetMargin(a_itm, opts, true);
				sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
						$cfs.css('zIndex', 1);
						$cf2.css('zIndex', 0);
						break;
				}

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing);

				//	animate / set carousel
				a_cfs[opts.d['left']] = -i_siz;
				a_cfs_vis[opts.d['left']] = -i_siz_vis;

				if (pL < 0)
				{
					a_cfs[opts.d['left']] += pL;
				}

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					var i_new_l_m = i_new_l.data('_cfs_origCssMargin');
					if (pR >= 0)
					{
						i_new_l_m += opts.padding[opts.d[1]];
					}
					i_new_l.css(opts.d['marginRight'], i_new_l_m);

					if (i_cur_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
					}
					_s_paddingold = function() {
						i_old_l.css(a_old);
					};
					_a_paddingold = function() {
						scrl.anims.push([i_old_l, a_old]);
					};

					var i_cur_l_m = i_cur_l.data('_cfs_origCssMargin');
					if (pL > 0)
					{
						i_cur_l_m += opts.padding[opts.d[3]];
					}
					a_cur[opts.d['marginRight']] = i_cur_l_m;
					_s_paddingcur = function() {
						i_cur_l.css(a_cur);
					};
					_a_paddingcur = function() {
						scrl.anims.push([i_cur_l, a_cur]);
					};
				}

				//	set position
				_position = function() {
					$cfs.css(a_lef);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
					}
					var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
					if (overFill > 0)
					{
						i_new = gi_getCurrentItems(a_itm, opts);
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						if (itms.total < opts.items.visible+nI) {
							var i_cur_l = $cfs.children().eq(opts.items.visible-1);
							i_cur_l.css(opts.d['marginRight'], i_cur_l.data('_cfs_origCssMargin') + opts.padding[opts.d[3]]);
						}
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'next', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					$cfs.css('zIndex', $cfs.data('_cfs_origCss').zIndex);
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);
					
					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callbacks
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'cover-fade':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	slideTo event
			$cfs.bind(cf_e('slideTo', conf), function(e, num, dev, org, obj, dir, clb) {
				e.stopPropagation();

				var v = [num, dev, org, obj, dir, clb],
					t = ['string/number/object', 'number', 'boolean', 'object', 'string', 'function'],
					a = cf_sortParams(v, t);

				obj = a[3];
				dir = a[4];
				clb = a[5];

				num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);

				if (num == 0)
				{
					return false;
				}
				if (!is_object(obj))
				{
					obj = false;
				}

/*
				if (crsl.isScrolling)
				{
					if (!is_object(obj) || obj.duration > 0)
					{
//						return false;
					}
				}
*/

				if (dir != 'prev' && dir != 'next')
				{
					if (opts.circular)
					{
						dir = (num <= itms.total / 2) ? 'next' : 'prev';
					}
					else
					{
						dir = (itms.first == 0 || itms.first > num) ? 'next' : 'prev';
					}
				}

				if (dir == 'prev')
				{
					num = itms.total-num;
				}
				$cfs.trigger(cf_e(dir, conf), [obj, num, clb]);

				return true;
			});


			//	prevPage event
			$cfs.bind(cf_e('prevPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur-1, obj, 'prev', clb]);
			});


			//	nextPage event
			$cfs.bind(cf_e('nextPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur+1, obj, 'next', clb]);
			});


			//	slideToPage event
			$cfs.bind(cf_e('slideToPage', conf), function(e, pag, obj, dir, clb) {
				e.stopPropagation();
				if (!is_number(pag))
				{
					pag = $cfs.triggerHandler(cf_e('currentPage', conf));
				}
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total / ipp)-1;

				if (pag < 0)
				{
					pag = max;
				}
				if (pag > max)
				{
					pag = 0;
				}
				return $cfs.triggerHandler(cf_e('slideTo', conf), [pag*ipp, 0, true, obj, dir, clb]);
			});

			//	jumpToStart event
			$cfs.bind(cf_e('jumpToStart', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = gn_getItemIndex(s, 0, true, itms, $cfs);
				}
				else
				{
					s = 0;
				}

				s += itms.first;
				if (s != 0)
				{
					if (itms.total > 0)
					{
						while (s > itms.total)
						{
							s -= itms.total;
						}
					}
					$cfs.prepend($cfs.children().slice(s, itms.total));
				}
				return true;
			});


			//	synchronise event
			$cfs.bind(cf_e('synchronise', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = cf_getSynchArr(s);
				}
				else if (opts.synchronise)
				{
					s = opts.synchronise;
				}
				else
				{
					return debug(conf, 'No carousel to synchronise.');
				}

				var n = $cfs.triggerHandler(cf_e('currentPosition', conf)),
					x = true;

				for (var j = 0, l = s.length; j < l; j++)
				{
					if (!s[j][0].triggerHandler(cf_e('slideTo', conf), [n, s[j][3], true]))
					{
						x = false;
					}
				}
				return x;
			});


			//	queue event
			$cfs.bind(cf_e('queue', conf), function(e, dir, opt) {
				e.stopPropagation();
				if (is_function(dir))
				{
					dir.call($tt0, queu);
				}
				else if (is_array(dir))
				{
					queu = dir;
				}
				else if (!is_undefined(dir))
				{
					queu.push([dir, opt]);
				}
				return queu;
			});


			//	insertItem event
			$cfs.bind(cf_e('insertItem', conf), function(e, itm, num, org, dev) {
				e.stopPropagation();

				var v = [itm, num, org, dev],
					t = ['string/object', 'string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				itm = a[0];
				num = a[1];
				org = a[2];
				dev = a[3];

				if (is_object(itm) && !is_jquery(itm))
				{ 
					itm = $(itm);
				}
				else if (is_string(itm))
				{
					itm = $(itm);
				}
				if (!is_jquery(itm) || itm.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}

				if (is_undefined(num))
				{
					num = 'end';
				}

				sz_storeMargin(itm, opts);
				sz_storeSizes(itm, opts);

				var orgNum = num,
					before = 'before';

				if (num == 'end')
				{
					if (org)
					{
						if (itms.first == 0)
						{
							num = itms.total-1;
							before = 'after';
						}
						else
						{
							num = itms.first;
							itms.first += itm.length;
						}
						if (num < 0)
						{
							num = 0;
						}
					}
					else
					{
						num = itms.total-1;
						before = 'after';
					}
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
				}

				var $cit = $cfs.children().eq(num);
				if ($cit.length)
				{
					$cit[before](itm);
				}
				else
				{
					debug(conf, 'Correct insert-position not found! Appending item to the end.');
					$cfs.append(itm);
				}

				if (orgNum != 'end' && !org)
				{
					if (num < itms.first)
					{
						itms.first += itm.length;
					}
				}
				itms.total = $cfs.children().length;
				if (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				$cfs.trigger(cf_e('updateSizes', conf));
				$cfs.trigger(cf_e('linkAnchors', conf));

				return true;
			});


			//	removeItem event
			$cfs.bind(cf_e('removeItem', conf), function(e, num, org, dev) {
				e.stopPropagation();

				var v = [num, org, dev],
					t = ['string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				num = a[0];
				org = a[1];
				dev = a[2];

				var removed = false;
				if (num instanceof $ && num.length > 1)
				{
					$removed = $();
					num.each(function(i, el) {
						var $rem = $cfs.trigger(cf_e('removeItem', conf), [$(this), org, dev]);
						if ($rem) $removed = $removed.add($rem);
					});
					return $removed;
				}

				if (is_undefined(num) || num == 'end')
				{
					$removed = $cfs.children().last();
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
					var $removed = $cfs.children().eq(num);
					if ($removed.length){
						if (num < itms.first) itms.first -= $removed.length;
					}
				}
				if ($removed && $removed.length)
				{
					$removed.detach();
					itms.total = $cfs.children().length;
					$cfs.trigger(cf_e('updateSizes', conf));
				}

				return $removed;
			});


			//	onBefore and onAfter event
			$cfs.bind(cf_e('onBefore', conf)+' '+cf_e('onAfter', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length);
				if (is_array(fn))
				{
					clbk[eType] = fn;
				}
				if (is_function(fn))
				{
					clbk[eType].push(fn);
				}
				return clbk[eType];
			});


			//	currentPosition event
			$cfs.bind(cf_e('currentPosition', conf), function(e, fn) {
				e.stopPropagation();
				if (itms.first == 0)
				{
					var val = 0;
				}
				else
				{
					var val = itms.total - itms.first;
				}
				if (is_function(fn))
				{
					fn.call($tt0, val);
				}
				return val;
			});


			//	currentPage event
			$cfs.bind(cf_e('currentPage', conf), function(e, fn) {
				e.stopPropagation();
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total/ipp-1),
					nr;
				if (itms.first == 0)
				{
					nr = 0;
				}
				else if (itms.first < itms.total % ipp)
				{
					nr = 0;
				}
				else if (itms.first == ipp && !opts.circular)
				{
					nr = max;
				}
				else 
				{
					 nr = Math.round((itms.total-itms.first)/ipp);
				}
				if (nr < 0)
				{
					nr = 0;
				}
				if (nr > max)
				{
					nr = max;
				}
				if (is_function(fn))
				{
					fn.call($tt0, nr);
				}
				return nr;
			});


			//	currentVisible event
			$cfs.bind(cf_e('currentVisible', conf), function(e, fn) {
				e.stopPropagation();
				var $i = gi_getCurrentItems($cfs.children(), opts);
				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	slice event
			$cfs.bind(cf_e('slice', conf), function(e, f, l, fn) {
				e.stopPropagation();

				if (itms.total == 0)
				{
					return false;
				}

				var v = [f, l, fn],
					t = ['number', 'number', 'function'],
					a = cf_sortParams(v, t);

				f = (is_number(a[0])) ? a[0] : 0;
				l = (is_number(a[1])) ? a[1] : itms.total;
				fn = a[2];

				f += itms.first;
				l += itms.first;

				if (items.total > 0)
				{
					while (f > itms.total)
					{
						f -= itms.total;
					}
					while (l > itms.total)
					{
						l -= itms.total;
					}
					while (f < 0)
					{
						f += itms.total;
					}
					while (l < 0)
					{
						l += itms.total;
					}
				}
				var $iA = $cfs.children(),
					$i;

				if (l > f)
				{
					$i = $iA.slice(f, l);
				}
				else
				{
					$i = $( $iA.slice(f, itms.total).get().concat( $iA.slice(0, l).get() ) );
				}

				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	isPaused, isStopped and isScrolling events
			$cfs.bind(cf_e('isPaused', conf)+' '+cf_e('isStopped', conf)+' '+cf_e('isScrolling', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length),
					value = crsl[eType];
				if (is_function(fn))
				{
					fn.call($tt0, value);
				}
				return value;
			});


			//	configuration event
			$cfs.bind(cf_e('configuration', conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = false;

				//	return entire configuration-object
				if (is_function(a))
				{
					a.call($tt0, opts);
				}
				//	set multiple options via object
				else if (is_object(a))
				{
					opts_orig = $.extend(true, {}, opts_orig, a);
					if (b !== false) reInit = true;
					else opts = $.extend(true, {}, opts, a);

				}
				else if (!is_undefined(a))
				{

					//	callback function for specific option
					if (is_function(b))
					{
						var val = eval('opts.'+a);
						if (is_undefined(val))
						{
							val = '';
						}
						b.call($tt0, val);
					}
					//	set individual option
					else if (!is_undefined(b))
					{
						if (typeof c !== 'boolean') c = true;
						eval('opts_orig.'+a+' = b');
						if (c !== false) reInit = true;
						else eval('opts.'+a+' = b');
					}
					//	return value for specific option
					else
					{
						return eval('opts.'+a);
					}
				}
				if (reInit)
				{
					sz_resetMargin($cfs.children(), opts);
					$cfs._cfs_init(opts_orig);
					$cfs._cfs_bind_buttons();
					var sz = sz_setSizes($cfs, opts);
					$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				}
				return opts;
			});


			//	linkAnchors event
			$cfs.bind(cf_e('linkAnchors', conf), function(e, $con, sel) {
				e.stopPropagation();

				if (is_undefined($con))
				{
					$con = $('body');
				}
				else if (is_string($con))
				{
					$con = $($con);
				}
				if (!is_jquery($con) || $con.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}
				if (!is_string(sel))
				{
					sel = 'a.caroufredsel';
				}

				$con.find(sel).each(function() {
					var h = this.hash || '';
					if (h.length > 0 && $cfs.children().index($(h)) != -1)
					{
						$(this).unbind('click').click(function(e) {
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), h);
						});
					}
				});
				return true;
			});


			//	updatePageStatus event
			$cfs.bind(cf_e('updatePageStatus', conf), function(e, build, sizes) {
				e.stopPropagation();
				if (!opts.pagination.container)
				{
					return;
				}

				var ipp = opts.pagination.items || opts.items.visible,
					pgs = Math.ceil(itms.total/ipp);

				if (build)
				{
					if (opts.pagination.anchorBuilder)
					{
						opts.pagination.container.children().remove();
						opts.pagination.container.each(function() {
							for (var a = 0; a < pgs; a++)
							{
								var i = $cfs.children().eq( gn_getItemIndex(a*ipp, 0, true, itms, $cfs) );
								$(this).append(opts.pagination.anchorBuilder.call(i[0], a+1));
							}
						});
					}
					opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(a) {
							$(this).bind(opts.pagination.event, function(e) {
								e.preventDefault();
								$cfs.trigger(cf_e('slideTo', conf), [a*ipp, -opts.pagination.deviation, true, opts.pagination]);
							});
						});
					});
				}

				var selected = $cfs.triggerHandler(cf_e('currentPage', conf)) + opts.pagination.deviation;
				if (selected >= pgs)
				{
					selected = 0;
				}
				if (selected < 0)
				{
					selected = pgs-1;
				}
				opts.pagination.container.each(function() {
					$(this).children().removeClass(cf_c('selected', conf)).eq(selected).addClass(cf_c('selected', conf));
				});
				return true;
			});


			//	updateSizes event
			$cfs.bind(cf_e('updateSizes', conf), function(e) {
				var vI = opts.items.visible,
					a_itm = $cfs.children(),
					avail_primary = ms_getParentSize($wrp, opts, 'width');

				itms.total = a_itm.length;

				if (crsl.primarySizePercentage)
				{
					opts.maxDimension = avail_primary;
					opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				}
				else
				{
					opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
				}

				if (opts.responsive)
				{
					opts.items.width = opts.items.sizesConf.width;
					opts.items.height = opts.items.sizesConf.height;
					opts = in_getResponsiveValues(opts, a_itm, avail_primary);
					vI = opts.items.visible;
					sz_setResponsiveSizes(opts, a_itm);
				}
				else if (opts.items.visibleConf.variable)
				{
					vI = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
				else if (opts.items.filter != '*')
				{
					vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
				}

				if (!opts.circular && itms.first != 0 && vI > itms.first) {
					if (opts.items.visibleConf.variable)
					{
						var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
					}
					else if (opts.items.filter != '*')
					{
						var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first;
					}
					else
					{
						var nI = opts.items.visible - itms.first;
					}
					debug(conf, 'Preventing non-circular: sliding '+nI+' items backward.');
					$cfs.trigger(cf_e('prev', conf), nI);
				}

				opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				opts.items.visibleConf.old = opts.items.visible;
				opts = in_getAlignPadding(opts, a_itm);

				var sz = sz_setSizes($cfs, opts);
				$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				nv_showNavi(opts, itms.total, conf);
				nv_enableNavi(opts, itms.first, conf);

				return sz;
			});


			//	destroy event
			$cfs.bind(cf_e('destroy', conf), function(e, orgOrder) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				$cfs.data('_cfs_isCarousel', false);
				$cfs.trigger(cf_e('finish', conf));
				if (orgOrder)
				{
					$cfs.trigger(cf_e('jumpToStart', conf));
				}
				sz_resetMargin($cfs.children(), opts);
				if (opts.responsive)
				{
					$cfs.children().each(function() {
						$(this).css($(this).data('_cfs_origCssSizes'));
					});
				}

				$cfs.css($cfs.data('_cfs_origCss'));
				$cfs._cfs_unbind_events();
				$cfs._cfs_unbind_buttons();
				$wrp.replaceWith($cfs);

				return true;
			});


			//	debug event
			$cfs.bind(cf_e('debug', conf), function(e) {
				debug(conf, 'Carousel width: '+opts.width);
				debug(conf, 'Carousel height: '+opts.height);
				debug(conf, 'Item widths: '+opts.items.width);
				debug(conf, 'Item heights: '+opts.items.height);
				debug(conf, 'Number of items visible: '+opts.items.visible);
				if (opts.auto.play)
				{
					debug(conf, 'Number of items scrolled automatically: '+opts.auto.items);
				}
				if (opts.prev.button)
				{
					debug(conf, 'Number of items scrolled backward: '+opts.prev.items);
				}
				if (opts.next.button)
				{
					debug(conf, 'Number of items scrolled forward: '+opts.next.items);
				}
				return conf.debug;
			});


			//	triggerEvent, making prefixed and namespaced events accessible from outside
			$cfs.bind('_cfs_triggerEvent', function(e, n, o) {
				e.stopPropagation();
				return $cfs.triggerHandler(cf_e(n, conf), o);
			});
		};	//	/bind_events


		$cfs._cfs_unbind_events = function() {
			$cfs.unbind(cf_e('', conf));
			$cfs.unbind(cf_e('', conf, false));
			$cfs.unbind('_cfs_triggerEvent');
		};	//	/unbind_events


		$cfs._cfs_bind_buttons = function() {
			$cfs._cfs_unbind_buttons();
			nv_showNavi(opts, itms.total, conf);
			nv_enableNavi(opts, itms.first, conf);

			if (opts.auto.pauseOnHover)
			{
				var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				$wrp.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
					.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
			}

			//	play button
			if (opts.auto.button)
			{
				opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
					e.preventDefault();
					var ev = false,
						pC = null;

					if (crsl.isPaused)
					{
						ev = 'play';
					}
					else if (opts.auto.pauseOnEvent)
					{
						ev = 'pause';
						pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
					}
					if (ev)
					{
						$cfs.trigger(cf_e(ev, conf), pC);
					}
				});
			}

			//	prev button
			if (opts.prev.button)
			{
				opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('prev', conf));
				});
				if (opts.prev.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
					opts.prev.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	next butotn
			if (opts.next.button)
			{
				opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('next', conf));
				});
				if (opts.next.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
					opts.next.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC); 	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	pagination
			if (opts.pagination.container)
			{
				if (opts.pagination.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
					opts.pagination.container.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
											 .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));	});
				}
			}

			//	prev/next keys
			if (opts.prev.key || opts.next.key)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k == opts.next.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('next', conf));
					}
					if (k == opts.prev.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('prev', conf));
					}
				});
			}

			//	pagination keys
			if (opts.pagination.keys)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k >= 49 && k < 58)
					{
						k = (k-49) * opts.items.visible;
						if (k <= itms.total)
						{
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), [k, 0, true, opts.pagination]);
						}
					}
				});
			}


			//	DEPRECATED
			if (opts.prev.wipe || opts.next.wipe)
			{
				deprecated( 'the touchwipe-plugin', 'the touchSwipe-plugin' );
				if ($.fn.touchwipe)
				{
					var wP = (opts.prev.wipe) ? function() { $cfs.trigger(cf_e('prev', conf)) } : null,
						wN = (opts.next.wipe) ? function() { $cfs.trigger(cf_e('next', conf)) } : null;

					if (wN || wN)
					{
						if (!crsl.touchwipe)
						{
							crsl.touchwipe = true;
							var twOps = {
								'min_move_x': 30,
								'min_move_y': 30,
								'preventDefaultEvents': true
							};
							switch (opts.direction)
							{
								case 'up':
								case 'down':
									twOps.wipeUp = wP;
									twOps.wipeDown = wN;
									break;
								default:
									twOps.wipeLeft = wN;
									twOps.wipeRight = wP;
							}
							$wrp.touchwipe(twOps);
						}
					}
				}
			}
			//	/DEPRECATED


			//	swipe
			if ($.fn.swipe)
			{
				var isTouch = 'ontouchstart' in window;
				if ((isTouch && opts.swipe.onTouch) || (!isTouch && opts.swipe.onMouse))
				{
					var scP = $.extend(true, {}, opts.prev, opts.swipe),
						scN = $.extend(true, {}, opts.next, opts.swipe),
						swP = function() { $cfs.trigger(cf_e('prev', conf), [scP]) },
						swN = function() { $cfs.trigger(cf_e('next', conf), [scN]) };

					switch (opts.direction)
					{
						case 'up':
						case 'down':
							opts.swipe.options.swipeUp = swN;
							opts.swipe.options.swipeDown = swP;
							break;
						default:
							opts.swipe.options.swipeLeft = swN;
							opts.swipe.options.swipeRight = swP;
					}
					if (crsl.swipe)
					{
						$cfs.swipe('destroy');
					}
					$wrp.swipe(opts.swipe.options);
					$wrp.css('cursor', 'move');
					crsl.swipe = true;
				}
			}

			//	mousewheel
			if ($.fn.mousewheel)
			{


				//	DEPRECATED
				if (opts.prev.mousewheel)
				{
					deprecated('The prev.mousewheel option', 'the mousewheel configuration object');
					opts.prev.mousewheel = null;
					opts.mousewheel = {
						items: bt_mousesheelNumber(opts.prev.mousewheel)
					};
				}
				if (opts.next.mousewheel)
				{
					deprecated('The next.mousewheel option', 'the mousewheel configuration object');
					opts.next.mousewheel = null;
					opts.mousewheel = {
						items: bt_mousesheelNumber(opts.next.mousewheel)
					};
				}
				//	/DEPRECATED


				if (opts.mousewheel)
				{
					var mcP = $.extend(true, {}, opts.prev, opts.mousewheel),
						mcN = $.extend(true, {}, opts.next, opts.mousewheel);

					if (crsl.mousewheel)
					{
						$wrp.unbind(cf_e('mousewheel', conf, false));
					}
					$wrp.bind(cf_e('mousewheel', conf, false), function(e, delta) { 
						e.preventDefault();
						if (delta > 0)
						{
							$cfs.trigger(cf_e('prev', conf), [mcP]);
						}
						else
						{
							$cfs.trigger(cf_e('next', conf), [mcN]);
						}
					});
					crsl.mousewheel = true;
				}
			}

			if (opts.auto.play)
			{
				$cfs.trigger(cf_e('play', conf), opts.auto.delay);
			}

			if (crsl.upDateOnWindowResize)
			{
				var resizeFn = function(e) {
					$cfs.trigger(cf_e('finish', conf));
					if (opts.auto.pauseOnResize && !crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
					sz_resetMargin($cfs.children(), opts);
					$cfs.trigger(cf_e('updateSizes', conf));
				};

				var $w = $(window),
					onResize = null;

				if ($.debounce && conf.onWindowResize == 'debounce')
				{
					onResize = $.debounce(200, resizeFn);
				}
				else if ($.throttle && conf.onWindowResize == 'throttle')
				{
					onResize = $.throttle(300, resizeFn);
				}
				else
				{
					var _windowWidth = 0,
						_windowHeight = 0;

					onResize = function() {
						var nw = $w.width(),
							nh = $w.height();

						if (nw != _windowWidth || nh != _windowHeight)
						{
							resizeFn();
							_windowWidth = nw;
							_windowHeight = nh;
						}
					};
				}
				$w.bind(cf_e('resize', conf, false, true, true), onResize);
			}
		};	//	/bind_buttons


		$cfs._cfs_unbind_buttons = function() {
			var ns1 = cf_e('', conf),
				ns2 = cf_e('', conf, false);
				ns3 = cf_e('', conf, false, true, true);

			$(document).unbind(ns3);
			$(window).unbind(ns3);
			$wrp.unbind(ns2);

			if (opts.auto.button)
			{
				opts.auto.button.unbind(ns2);
			}
			if (opts.prev.button)
			{
				opts.prev.button.unbind(ns2);
			}
			if (opts.next.button)
			{
				opts.next.button.unbind(ns2);
			}
			if (opts.pagination.container)
			{
				opts.pagination.container.unbind(ns2);
				if (opts.pagination.anchorBuilder)
				{
					opts.pagination.container.children().remove();
				}
			}
			if (crsl.swipe)
			{
				$cfs.swipe('destroy');
				$wrp.css('cursor', 'default');
				crsl.swipe = false;
			}
			if (crsl.mousewheel)
			{
				crsl.mousewheel = false;
			}

			nv_showNavi(opts, 'hide', conf);
			nv_enableNavi(opts, 'removeClass', conf);

		};	//	/unbind_buttons



		//	START

		if (is_boolean(configs))
		{
			configs = {
				'debug': configs
			};
		}

		//	set vars
		var crsl = {
				'direction'		: 'next',
				'isPaused'		: true,
				'isScrolling'	: false,
				'isStopped'		: false,
				'mousewheel'	: false,
				'swipe'			: false
			},
			itms = {
				'total'			: $cfs.children().length,
				'first'			: 0
			},
			tmrs = {
				'auto'			: null,
				'progress'		: null,
				'startTime'		: getTime(),
				'timePassed'	: 0
			},
			scrl = {
				'isStopped'		: false,
				'duration'		: 0,
				'startTime'		: 0,
				'easing'		: '',
				'anims'			: []
			},
			clbk = {
				'onBefore'		: [],
				'onAfter'		: []
			},
			queu = [],
			conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
			opts = {},
			opts_orig = $.extend(true, {}, options), 
			$wrp = $cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();


		conf.selector		= $cfs.selector;
		conf.serialNumber	= $.fn.carouFredSel.serialNumber++;


		//	create carousel
		$cfs._cfs_init(opts_orig, true, starting_position);
		$cfs._cfs_build();
		$cfs._cfs_bind_events();
		$cfs._cfs_bind_buttons();

		//	find item to start
		if (is_array(opts.items.start))
		{
			var start_arr = opts.items.start;
		}
		else
		{
			var start_arr = [];
			if (opts.items.start != 0)
			{
				start_arr.push(opts.items.start);
			}
		}
		if (opts.cookie)
		{
			start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10));
		}

		if (start_arr.length > 0)
		{
			for (var a = 0, l = start_arr.length; a < l; a++)
			{
				var s = start_arr[a];
				if (s == 0)
				{
					continue;
				}
				if (s === true)
				{
					s = window.location.hash;
					if (s.length < 1)
					{
						continue;
					}
				}
				else if (s === 'random')
				{
					s = Math.floor(Math.random()*itms.total);
				}
				if ($cfs.triggerHandler(cf_e('slideTo', conf), [s, 0, true, { fx: 'none' }]))
				{
					break;
				}
			}
		}
		var siz = sz_setSizes($cfs, opts),
			itm = gi_getCurrentItems($cfs.children(), opts);

		if (opts.onCreate)
		{
			opts.onCreate.call($tt0, {
				'width': siz.width,
				'height': siz.height,
				'items': itm
			});
		}

		$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
		$cfs.trigger(cf_e('linkAnchors', conf));

		if (conf.debug)
		{
			$cfs.trigger(cf_e('debug', conf));
		}

		return $cfs;
	};



	//	GLOBAL PUBLIC

	$.fn.carouFredSel.serialNumber = 1;
	$.fn.carouFredSel.defaults = {
		'synchronise'	: false,
		'infinite'		: true,
		'circular'		: true,
		'responsive'	: false,
		'direction'		: 'left',
		'items'			: {
			'start'			: 0
		},
		'scroll'		: {
			'easing'		: 'swing',
			'duration'		: 500,
			'pauseOnHover'	: false,
			'event'			: 'click',
			'queue'			: false
		}
	};
	$.fn.carouFredSel.configs = {
		'debug'			: false,
		'onWindowResize': 'throttle',
		'events'		: {
			'prefix'		: '',
			'namespace'		: 'cfs'
		},
		'wrapper'		: {
			'element'		: 'div',
			'classname'		: 'caroufredsel_wrapper'
		},
		'classnames'	: {}
	};
	$.fn.carouFredSel.pageAnchorBuilder = function(nr) {
		return '<a href="#"><span>'+nr+'</span></a>';
	};
	$.fn.carouFredSel.progressbarUpdater = function(perc) {
		$(this).css('width', perc+'%');
	};

	$.fn.carouFredSel.cookie = {
		get: function(n) {
			n += '=';
			var ca = document.cookie.split(';');
			for (var a = 0, l = ca.length; a < l; a++)
			{
				var c = ca[a];
				while (c.charAt(0) == ' ')
				{
					c = c.slice(1);
				}
				if (c.indexOf(n) == 0)
				{
					return c.slice(n.length);
				}
			}
			return 0;
		},
		set: function(n, v, d) {
			var e = "";
			if (d)
			{
				var date = new Date();
				date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
				e = "; expires=" + date.toGMTString();
			}
			document.cookie = n + '=' + v + e + '; path=/';
		},
		remove: function(n) {
			$.fn.carouFredSel.cookie.set(n, "", -1);
		}
	};


	//	GLOBAL PRIVATE

	//	scrolling functions
	function sc_setScroll(d, e) {
		return {
			anims: [],
			duration: d,
			orgDuration: d,
			easing: e,
			startTime: getTime()
		};
	}
	function sc_startScroll(s) {

		if (is_object(s.pre))
		{
			sc_startScroll(s.pre);
		}
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			if (!b)
			{
				continue;
			}
			if (b[3])
			{
				b[0].stop();
			}
			b[0].animate(b[1], {
				complete: b[2],
				duration: s.duration,
				easing: s.easing
			});
		}
		if (is_object(s.post))
		{
			sc_startScroll(s.post);
		}
	}
	function sc_stopScroll(s, finish) {
		if (!is_boolean(finish))
		{
			finish = true;
		}
		if (is_object(s.pre))
		{
			sc_stopScroll(s.pre, finish);
		}
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			b[0].stop(true);
			if (finish)
			{
				b[0].css(b[1]);
				if (is_function(b[2]))
				{
					b[2]();
				}
			}
		}
		if (is_object(s.post))
		{
			sc_stopScroll(s.post, finish);
		}
	}
	function sc_afterScroll( $c, $c2, o ) {
		if ($c2)
		{
			$c2.remove();
		}

		switch(o.fx) {
			case 'fade':
			case 'crossfade':
			case 'cover-fade':
			case 'uncover-fade':
				$c.css('filter', '');
				break;
		}
	}
	function sc_fireCallbacks($t, o, b, a, c) {
		if (o[b])
		{
			o[b].call($t, a);
		}
		if (c[b].length)
		{
			for (var i = 0, l = c[b].length; i < l; i++)
			{
				c[b][i].call($t, a);
			}
		}
		return [];
	}
	function sc_fireQueue($c, q, c) {

		if (q.length)
		{
			$c.trigger(cf_e(q[0][0], c), q[0][1]);
			q.shift();
		}
		return q;
	}
	function sc_hideHiddenItems(hiddenitems) {
		hiddenitems.each(function() {
			var hi = $(this);
			hi.data('_cfs_isHidden', hi.is(':hidden')).hide();
		});
	}
	function sc_showHiddenItems(hiddenitems) {
		if (hiddenitems)
		{
			hiddenitems.each(function() {
				var hi = $(this);
				if (!hi.data('_cfs_isHidden'))
				{
					hi.show();
				}
			});
		}
	}
	function sc_clearTimers(t) {
		if (t.auto)
		{
			clearTimeout(t.auto);
		}
		if (t.progress)
		{
			clearInterval(t.progress);
		}
		return t;
	}
	function sc_mapCallbackArguments(i_old, i_skp, i_new, s_itm, s_dir, s_dur, w_siz) {
		return {
			'width': w_siz.width,
			'height': w_siz.height,
			'items': {
				'old': i_old,
				'skipped': i_skp,
				'visible': i_new,

				//	DEPRECATED
				'new': i_new
				//	/DEPRECATED
			},
			'scroll': {
				'items': s_itm,
				'direction': s_dir,
				'duration': s_dur
			}
		};
	}
	function sc_getDuration( sO, o, nI, siz ) {
		var dur = sO.duration;
		if (sO.fx == 'none')
		{
			return 0;
		}
		if (dur == 'auto')
		{
			dur = o.scroll.duration / o.scroll.items * nI;
		}
		else if (dur < 10)
		{
			dur = siz / dur;
		}
		if (dur < 1)
		{
			return 0;
		}
		if (sO.fx == 'fade')
		{
			dur = dur / 2;
		}
		return Math.round(dur);
	}

	//	navigation functions
	function nv_showNavi(o, t, c) {
		var minimum = (is_number(o.items.minimum)) ? o.items.minimum : o.items.visible + 1;
		if (t == 'show' || t == 'hide')
		{
			var f = t;
		}
		else if (minimum > t)
		{
			debug(c, 'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');
			var f = 'hide';
		}
		else
		{
			var f = 'show';
		}
		var s = (f == 'show') ? 'removeClass' : 'addClass',
			h = cf_c('hidden', c);

		if (o.auto.button)
		{
			o.auto.button[f]()[s](h);
		}
		if (o.prev.button)
		{
			o.prev.button[f]()[s](h);
		}
		if (o.next.button)
		{
			o.next.button[f]()[s](h);
		}
		if (o.pagination.container)
		{
			o.pagination.container[f]()[s](h);
		}
	}
	function nv_enableNavi(o, f, c) {
		if (o.circular || o.infinite) return;
		var fx = (f == 'removeClass' || f == 'addClass') ? f : false,
			di = cf_c('disabled', c);

		if (o.auto.button && fx)
		{
			o.auto.button[fx](di);
		}
		if (o.prev.button)
		{
			var fn = fx || (f == 0) ? 'addClass' : 'removeClass';
			o.prev.button[fn](di);
		}
		if (o.next.button)
		{
			var fn = fx || (f == o.items.visible) ? 'addClass' : 'removeClass';
			o.next.button[fn](di);
		}
	}

	//	get object functions
	function go_getObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		else if (is_undefined(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getItemsObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			obj	= {
				'visible': obj
			};
		}
		else if (obj == 'variable')
		{
			obj = {
				'visible': obj,
				'width': obj, 
				'height': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getScrollObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			if (obj <= 50)
			{
				obj = {
					'items': obj
				};
			}
			else
			{
				obj = {
					'duration': obj
				};
			}
		}
		else if (is_string(obj))
		{
			obj = {
				'easing': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getNaviObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_string(obj))
		{
			var temp = cf_getKeyCode(obj);
			if (temp == -1)
			{
				obj = $(obj);
			}
			else
			{
				obj = temp;
			}
		}
		return obj;
	}

	function go_getAutoObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'play': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'timeoutDuration': obj
			};
		}
		if (obj.progress)
		{
			if (is_string(obj.progress) || is_jquery(obj.progress))
			{
				obj.progress = {
					'bar': obj.progress
				};
			}
		}
		return obj;
	}
	function go_complementAutoObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (!is_boolean(obj.play))
		{
			obj.play = true;
		}
		if (!is_number(obj.delay))
		{
			obj.delay = 0;
		}
		if (is_undefined(obj.pauseOnEvent))
		{
			obj.pauseOnEvent = true;
		}
		if (!is_boolean(obj.pauseOnResize))
		{
			obj.pauseOnResize = true;
		}
		if (!is_number(obj.timeoutDuration))
		{
			obj.timeoutDuration = (obj.duration < 10)
				? 2500
				: obj.duration * 5;
		}
		if (obj.progress)
		{
			if (is_function(obj.progress.bar))
			{
				obj.progress.bar = obj.progress.bar.call($tt);
			}
			if (is_string(obj.progress.bar))
			{
				obj.progress.bar = $(obj.progress.bar);
			}
			if (obj.progress.bar)
			{
				if (!is_function(obj.progress.updater))
				{
					obj.progress.updater = $.fn.carouFredSel.progressbarUpdater;
				}
				if (!is_number(obj.progress.interval))
				{
					obj.progress.interval = 50;
				}
			}
			else
			{
				obj.progress = false;
			}
		}
		return obj;
	}

	function go_getPrevNextObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'key': obj
			};
		}
		return obj;
	}
	function go_complementPrevNextObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (is_string(obj.key))
		{
			obj.key = cf_getKeyCode(obj.key);
		}
		return obj;
	}

	function go_getPaginationObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'container': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'keys': obj
			};
		}
		return obj;
	}
	function go_complementPaginationObject($tt, obj) {
		if (is_function(obj.container))
		{
			obj.container = obj.container.call($tt);
		}
		if (is_string(obj.container))
		{
			obj.container = $(obj.container);
		}
		if (!is_number(obj.items))
		{
			obj.items = false;
		}
		if (!is_boolean(obj.keys))
		{
			obj.keys = false;
		}
		if (!is_function(obj.anchorBuilder) && !is_false(obj.anchorBuilder))
		{
			obj.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
		}
		if (!is_number(obj.deviation))
		{
			obj.deviation = 0;
		}
		return obj;
	}

	function go_getSwipeObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_undefined(obj))
		{
			obj = {
				'onTouch': false
			};
		}
		if (is_true(obj))
		{
			obj = {
				'onTouch': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		return obj;
	}
	function go_complementSwipeObject($tt, obj) {
		if (!is_boolean(obj.onTouch))
		{
			obj.onTouch = true;
		}
		if (!is_boolean(obj.onMouse))
		{
			obj.onMouse = false;
		}
		if (!is_object(obj.options))
		{
			obj.options = {};
		}
		if (!is_boolean(obj.options.triggerOnTouchEnd))
		{
			obj.options.triggerOnTouchEnd = false;
		}
		return obj;
	}
	function go_getMousewheelObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_true(obj))
		{
			obj = {};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		else if (is_undefined(obj))
		{
			obj = false;
		}
		return obj;
	}
	function go_complementMousewheelObject($tt, obj) {
		return obj;
	}

	//	get number functions
	function gn_getItemIndex(num, dev, org, items, $cfs) {
		if (is_string(num))
		{
			num = $(num, $cfs);
		}

		if (is_object(num))
		{
			num = $(num, $cfs);
		}
		if (is_jquery(num))
		{
			num = $cfs.children().index(num);
			if (!is_boolean(org))
			{
				org = false;
			}
		}
		else
		{
			if (!is_boolean(org))
			{
				org = true;
			}
		}
		if (!is_number(num))
		{
			num = 0;
		}
		if (!is_number(dev))
		{
			dev = 0;
		}

		if (org)
		{
			num += items.first;
		}
		num += dev;
		if (items.total > 0)
		{
			while (num >= items.total)
			{
				num -= items.total;
			}
			while (num < 0)
			{
				num += items.total;
			}
		}
		return num;
	}

	//	items prev
	function gn_getVisibleItemsPrev(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s; a >= 0; a--)
		{
			var j = i.eq(a);
			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}
			if (a == 0)
			{
				a = i.length;
			}
			x++;
		}
	}
	function gn_getVisibleItemsPrevFilter(i, o, s) {
		return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
	}
	function gn_getScrollItemsPrevFilter(i, o, s, m) {
		return gn_getItemsPrevFilter(i, o.items.filter, m, s);
	}
	function gn_getItemsPrevFilter(i, f, m, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length; a >= 0; a--)
		{
			x++;
			if (x == l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == 0)
			{
				a = l;
			}
		}
	}

	function gn_getVisibleOrg($c, o) {
		return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length;
	}

	//	items next
	function gn_getVisibleItemsNext(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			var j = i.eq(a);

			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}

			x++;
			if (x == l+1)
			{
				return x;
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}
	function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
		var v = gn_getVisibleItemsNext(i, o, s);
		if (!o.circular)
		{
			if (s + v > l)
			{
				v = l - s;
			}
		}
		return v;
	}
	function gn_getVisibleItemsNextFilter(i, o, s) {
		return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular);
	}
	function gn_getScrollItemsNextFilter(i, o, s, m) {
		return gn_getItemsNextFilter(i, o.items.filter, m+1, s, o.circular) - 1;
	}
	function gn_getItemsNextFilter(i, f, m, s, c) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			x++;
			if (x >= l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}

	//	get items functions
	function gi_getCurrentItems(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsPrev(i, o, n) {
		return i.slice(n, o.items.visibleConf.old+n);
	}
	function gi_getNewItemsPrev(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsNext(i, o) {
		return i.slice(0, o.items.visibleConf.old);
	}
	function gi_getNewItemsNext(i, o, n) {
		return i.slice(n, o.items.visible+n);
	}

	//	sizes functions
	function sz_storeMargin(i, o, d) {
		if (o.usePadding)
		{
			if (!is_string(d))
			{
				d = '_cfs_origCssMargin';
			}
			i.each(function() {
				var j = $(this),
					m = parseInt(j.css(o.d['marginRight']), 10);
				if (!is_number(m)) 
				{
					m = 0;
				}
				j.data(d, m);
			});
		}
	}
	function sz_resetMargin(i, o, m) {
		if (o.usePadding)
		{
			var x = (is_boolean(m)) ? m : false;
			if (!is_number(m))
			{
				m = 0;
			}
			sz_storeMargin(i, o, '_cfs_tempCssMargin');
			i.each(function() {
				var j = $(this);
				j.css(o.d['marginRight'], ((x) ? j.data('_cfs_tempCssMargin') : m + j.data('_cfs_origCssMargin')));
			});
		}
	}
	function sz_storeSizes(i, o) {
		if (o.responsive)
		{
			i.each(function() {
				var j = $(this),
					s = in_mapCss(j, ['width', 'height']);
				j.data('_cfs_origCssSizes', s);
			});
		}
	}
	function sz_setResponsiveSizes(o, all) {
		var visb = o.items.visible,
			newS = o.items[o.d['width']],
			seco = o[o.d['height']],
			secp = is_percentage(seco);

		all.each(function() {
			var $t = $(this),
				nw = newS - ms_getPaddingBorderMargin($t, o, 'Width');

			$t[o.d['width']](nw);
			if (secp)
			{
				$t[o.d['height']](ms_getPercentage(nw, seco));
			}
		});
	}
	function sz_setSizes($c, o) {
		var $w = $c.parent(),
			$i = $c.children(),
			$v = gi_getCurrentItems($i, o),
			sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, false);

		$w.css(sz);

		if (o.usePadding)
		{
			var p = o.padding,
				r = p[o.d[1]];

			if (o.align && r < 0)
			{
				r = 0;
			}
			var $l = $v.last();
			$l.css(o.d['marginRight'], $l.data('_cfs_origCssMargin') + r);
			$c.css(o.d['top'], p[o.d[0]]);
			$c.css(o.d['left'], p[o.d[3]]);
		}

		$c.css(o.d['width'], sz[o.d['width']]+(ms_getTotalSize($i, o, 'width')*2));
		$c.css(o.d['height'], ms_getLargestSize($i, o, 'height'));
		return sz;
	}

	//	measuring functions
	function ms_getSizes(i, o, wrapper) {
		return [ms_getTotalSize(i, o, 'width', wrapper), ms_getLargestSize(i, o, 'height', wrapper)];
	}
	function ms_getLargestSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]];
		}
		dim = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight';
		return ms_getTrueLargestSize(i, o, dim);
	}
	function ms_getTrueLargestSize(i, o, dim) {
		var s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var m = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s < m)
			{
				s = m;
			}
		}
		return s;
	}

	function ms_getTotalSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]] * i.length;
		}

		var d = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight',
			s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);
			s += (j.is(':visible')) ? j[o.d[d]](true) : 0;
		}
		return s;
	}
	function ms_getParentSize($w, o, d) {
		var isVisible = $w.is(':visible');
		if (isVisible)
		{
			$w.hide();
		}
		var s = $w.parent()[o.d[d]]();
		if (isVisible)
		{
			$w.show();
		}
		return s;
	}
	function ms_getMaxDimension(o, a) {
		return (is_number(o[o.d['width']])) ? o[o.d['width']] : a;
	}
	function ms_hasVariableSizes(i, o, dim) {
		var s = false,
			v = false;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var c = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s === false)
			{
				s = c;
			}
			else if (s != c)
			{
				v = true;
			}
			if (s == 0)
			{
				v = true;
			}
		}
		return v;
	}
	function ms_getPaddingBorderMargin(i, o, d) {
		return i[o.d['outer'+d]](true) - i[o.d[d.toLowerCase()]]();
	}
	function ms_getPercentage(s, o) {
		if (is_percentage(o))
		{
			o = parseInt( o.slice(0, -1), 10 );
			if (!is_number(o))
			{
				return s;
			}
			s *= o/100;
		}
		return s;
	}

	//	config functions
	function cf_e(n, c, pf, ns, rd) {
		if (!is_boolean(pf))
		{
			pf = true;
		}
		if (!is_boolean(ns))
		{
			ns = true;
		}
		if (!is_boolean(rd))
		{
			rd = false;
		}

		if (pf)
		{
			n = c.events.prefix + n;
		}
		if (ns)
		{
			n = n +'.'+ c.events.namespace;
		}
		if (ns && rd)
		{
			n += c.serialNumber;
		}

		return n;
	}
	function cf_c(n, c) {
		return (is_string(c.classnames[n])) ? c.classnames[n] : n;
	}
	function cf_mapWrapperSizes(ws, o, p) {
		if (!is_boolean(p))
		{
			p = true;
		}
		var pad = (o.usePadding && p) ? o.padding : [0, 0, 0, 0];
		var wra = {};

		wra[o.d['width']] = ws[0] + pad[1] + pad[3];
		wra[o.d['height']] = ws[1] + pad[0] + pad[2];

		return wra;
	}
	function cf_sortParams(vals, typs) {
		var arr = [];
		for (var a = 0, l1 = vals.length; a < l1; a++)
		{
			for (var b = 0, l2 = typs.length; b < l2; b++)
			{
				if (typs[b].indexOf(typeof vals[a]) > -1 && is_undefined(arr[b]))
				{
					arr[b] = vals[a];
					break;
				}
			}
		}
		return arr;
	}
	function cf_getPadding(p) {
		if (is_undefined(p))
		{
			return [0, 0, 0, 0];
		}
		if (is_number(p))
		{
			return [p, p, p, p];
		}
		if (is_string(p))
		{
			p = p.split('px').join('').split('em').join('').split(' ');
		}

		if (!is_array(p))
		{
			return [0, 0, 0, 0];
		}
		for (var i = 0; i < 4; i++)
		{
			p[i] = parseInt(p[i], 10);
		}
		switch (p.length)
		{
			case 0:
				return [0, 0, 0, 0];
			case 1:
				return [p[0], p[0], p[0], p[0]];
			case 2:
				return [p[0], p[1], p[0], p[1]];
			case 3:
				return [p[0], p[1], p[2], p[1]];
			default:
				return [p[0], p[1], p[2], p[3]];
		}
	}
	function cf_getAlignPadding(itm, o) {
		var x = (is_number(o[o.d['width']])) ? Math.ceil(o[o.d['width']] - ms_getTotalSize(itm, o, 'width')) : 0;
		switch (o.align)
		{
			case 'left': 
				return [0, x];
			case 'right':
				return [x, 0];
			case 'center':
			default:
				return [Math.ceil(x/2), Math.floor(x/2)];
		}
	}
	function cf_getDimensions(o) {
		var dm = [
				['width'	, 'innerWidth'	, 'outerWidth'	, 'height'	, 'innerHeight'	, 'outerHeight'	, 'left', 'top'	, 'marginRight'	, 0, 1, 2, 3],
				['height'	, 'innerHeight'	, 'outerHeight'	, 'width'	, 'innerWidth'	, 'outerWidth'	, 'top'	, 'left', 'marginBottom', 3, 2, 1, 0]
			];

		var dl = dm[0].length,
			dx = (o.direction == 'right' || o.direction == 'left') ? 0 : 1;

		var dimensions = {};
		for (var d = 0; d < dl; d++)
		{
			dimensions[dm[0][d]] = dm[dx][d];
		}
		return dimensions;
	}
	function cf_getAdjust(x, o, a, $t) {
		var v = x;
		if (is_function(a))
		{
			v = a.call($t, v);

		}
		else if (is_string(a))
		{
			var p = a.split('+'),
				m = a.split('-');

			if (m.length > p.length)
			{
				var neg = true,
					sta = m[0],
					adj = m[1];
			}
			else
			{
				var neg = false,
					sta = p[0],
					adj = p[1];
			}

			switch(sta)
			{
				case 'even':
					v = (x % 2 == 1) ? x-1 : x;
					break;
				case 'odd':
					v = (x % 2 == 0) ? x-1 : x;
					break;
				default:
					v = x;
					break;
			}
			adj = parseInt(adj, 10);
			if (is_number(adj))
			{
				if (neg)
				{
					adj = -adj;
				}
				v += adj;
			}
		}
		if (!is_number(v) || v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getItemsAdjust(x, o, a, $t) {
		return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf);
	}
	function cf_getItemAdjustMinMax(v, i) {
		if (is_number(i.min) && v < i.min)
		{
			v = i.min;
		}
		if (is_number(i.max) && v > i.max)
		{
			v = i.max;
		}
		if (v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getSynchArr(s) {
		if (!is_array(s))
		{
			s = [[s]];
		}
		if (!is_array(s[0]))
		{
			s = [s];
		}
		for (var j = 0, l = s.length; j < l; j++)
		{
			if (is_string(s[j][0]))
			{
				s[j][0] = $(s[j][0]);
			}
			if (!is_boolean(s[j][1]))
			{
				s[j][1] = true;
			}
			if (!is_boolean(s[j][2]))
			{
				s[j][2] = true;
			}
			if (!is_number(s[j][3]))
			{
				s[j][3] = 0;
			}
		}
		return s;
	}
	function cf_getKeyCode(k) {
		if (k == 'right')
		{
			return 39;
		}
		if (k == 'left')
		{
			return 37;
		}
		if (k == 'up')
		{
			return 38;
		}
		if (k == 'down')
		{
			return 40;
		}
		return -1;
	}
	function cf_setCookie(n, $c, c) {
		if (n)
		{
			var v = $c.triggerHandler(cf_e('currentPosition', c));
			$.fn.carouFredSel.cookie.set(n, v);
		}
	}
	function cf_getCookie(n) {
		var c = $.fn.carouFredSel.cookie.get(n);
		return (c == '') ? 0 : c;
	}

	//	init function
	function in_mapCss($elem, props) {
		var css = {}, prop;
		for (var p = 0, l = props.length; p < l; p++)
		{
			prop = props[p];
			css[prop] = $elem.css(prop);
		}
		return css;
	}
	function in_complementItems(obj, opt, itm, sta) {
		if (!is_object(obj.visibleConf))
		{
			obj.visibleConf = {};
		}
		if (!is_object(obj.sizesConf))
		{
			obj.sizesConf = {};
		}

		if (obj.start == 0 && is_number(sta))
		{
			obj.start = sta;
		}

		//	visible items
		if (is_object(obj.visible))
		{
			obj.visibleConf.min = obj.visible.min;
			obj.visibleConf.max = obj.visible.max;
			obj.visible = false;
		}
		else if (is_string(obj.visible))
		{
			//	variable visible items
			if (obj.visible == 'variable')
			{
				obj.visibleConf.variable = true;
			}
			//	adjust string visible items
			else
			{
				obj.visibleConf.adjust = obj.visible;
			}
			obj.visible = false;
		}
		else if (is_function(obj.visible))
		{
			obj.visibleConf.adjust = obj.visible;
			obj.visible = false;
		}

		//	set items filter
		if (!is_string(obj.filter))
		{
			obj.filter = (itm.filter(':hidden').length > 0) ? ':visible' : '*';
		}

		//	primary item-size not set
		if (!obj[opt.d['width']])
		{
			//	responsive carousel -> set to largest
			if (opt.responsive)
			{
				debug(true, 'Set a '+opt.d['width']+' for the items!');
				obj[opt.d['width']] = ms_getTrueLargestSize(itm, opt, 'outerWidth');
			}
			//	 non-responsive -> measure it or set to "variable"
			else
			{
				obj[opt.d['width']] = (ms_hasVariableSizes(itm, opt, 'outerWidth')) 
					? 'variable' 
					: itm[opt.d['outerWidth']](true);
			}
		}

		//	secondary item-size not set -> measure it or set to "variable"
		if (!obj[opt.d['height']])
		{
			obj[opt.d['height']] = (ms_hasVariableSizes(itm, opt, 'outerHeight')) 
				? 'variable' 
				: itm[opt.d['outerHeight']](true);
		}

		obj.sizesConf.width = obj.width;
		obj.sizesConf.height = obj.height;
		return obj;
	}
	function in_complementVisibleItems(opt, avl) {
		//	primary item-size variable -> set visible items variable
		if (opt.items[opt.d['width']] == 'variable')
		{
			opt.items.visibleConf.variable = true;
		}
		if (!opt.items.visibleConf.variable) {
			//	primary size is number -> calculate visible-items
			if (is_number(opt[opt.d['width']]))
			{
				opt.items.visible = Math.floor(opt[opt.d['width']] / opt.items[opt.d['width']]);
			}
			//	measure and calculate primary size and visible-items
			else
			{
				opt.items.visible = Math.floor(avl / opt.items[opt.d['width']]);
				opt[opt.d['width']] = opt.items.visible * opt.items[opt.d['width']];
				if (!opt.items.visibleConf.adjust)
				{
					opt.align = false;
				}
			}
			if (opt.items.visible == 'Infinity' || opt.items.visible < 1)
			{
				debug(true, 'Not a valid number of visible items: Set to "variable".');
				opt.items.visibleConf.variable = true;
			}
		}
		return opt;
	}
	function in_complementPrimarySize(obj, opt, all) {
		//	primary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerWidth');
		}
		return obj;
	}
	function in_complementSecondarySize(obj, opt, all) {
		//	secondary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerHeight');
		}
		//	secondary size not set -> set to secondary item-size
		if (!obj)
		{
			obj = opt.items[opt.d['height']];
		}
		return obj;
	}
	function in_getAlignPadding(o, all) {
		var p = cf_getAlignPadding(gi_getCurrentItems(all, o), o);
		o.padding[o.d[1]] = p[1];
		o.padding[o.d[3]] = p[0];
		return o;
	}
	function in_getResponsiveValues(o, all, avl) {

		var visb = cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']] / o.items[o.d['width']]), o.items.visibleConf);
		if (visb > all.length)
		{
			visb = all.length;
		}

		var newS = Math.floor(o[o.d['width']]/visb);

		o.items.visible = visb;
		o.items[o.d['width']] = newS;
		o[o.d['width']] = visb * newS;
		return o;
	}


	//	buttons functions
	function bt_pauseOnHoverConfig(p) {
		if (is_string(p))
		{
			var i = (p.indexOf('immediate') > -1) ? true : false,
				r = (p.indexOf('resume') 	> -1) ? true : false;
		}
		else
		{
			var i = r = false;
		}
		return [i, r];
	}
	function bt_mousesheelNumber(mw) {
		return (is_number(mw)) ? mw : null
	}

	//	helper functions
	function is_null(a) {
		return (a === null);
	}
	function is_undefined(a) {
		return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined');
	}
	function is_array(a) {
		return (a instanceof Array);
	}
	function is_jquery(a) {
		return (a instanceof jQuery);
	}
	function is_object(a) {
		return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a));
	}
	function is_number(a) {
		return ((a instanceof Number || typeof a == 'number') && !isNaN(a));
	}
	function is_string(a) {
		return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a));
	}
	function is_function(a) {
		return (a instanceof Function || typeof a == 'function');
	}
	function is_boolean(a) {
		return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a));
	}
	function is_true(a) {
		return (a === true || a === 'true');
	}
	function is_false(a) {
		return (a === false || a === 'false');
	}
	function is_percentage(x) {
		return (is_string(x) && x.slice(-1) == '%');
	}


	function getTime() {
		return new Date().getTime();
	}

	function deprecated( o, n ) {
		debug(true, o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');
	}
	function debug(d, m) {
		if (is_object(d))
		{
			var s = ' ('+d.selector+')';
			d = d.debug;
		}
		else
		{
			var s = '';
		}
		if (!d)
		{
			return false;
		}

		if (is_string(m))
		{
			m = 'carouFredSel'+s+': ' + m;
		}
		else
		{
			m = ['carouFredSel'+s+':', m];
		}

		if (window.console && window.console.log)
		{
			
		}
		return false;
	}



	//	EASING FUNCTIONS

	$.extend($.easing, {
		'quadratic': function(t) {
			var t2 = t * t;
			return t * (-t2 * t + 4 * t2 - 6 * t + 4);
		},
		'cubic': function(t) {
			return t * (4 * t * t - 9 * t + 6);
		},
		'elastic': function(t) {
			var t2 = t * t;
			return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15);
		}
	});


})(jQuery);;
/*global jQuery */
/*! 
* FitMaps 1.0
*
* Date: 2012
*/

(function( $ ){
    
	$.fn.fitMaps = function( options ) {
		var settings = {
			customSelector: null,
			h: '100%',
			w: '100%'
		}
		
		if ( options ) { 
			$.extend( settings, options );
		}
		
		var div = document.createElement('div'),
		ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
		
		div.className = 'fit-maps-style';
		div.innerHTML = '&shy;<style>         \
			.fluid-width-map-wrapper {        \
				position: relative;           \
				width: ' + settings.w + ';    \
				height: ' + settings.h + ';   \
				padding: 0;                   \
    			margin: 0px auto;           \
			}                                 \
			\
			.fluid-width-map-wrapper iframe {  \
				width: 100%;                  \
				height: 100%;                  \
				top: 0;                       \
				left: 0;                      \
			}                                 \
			</style>';
		
		ref.parentNode.insertBefore(div,ref);

		return this.each(function(){
			var selectors = [
				"iframe[src*='maps.google']"
			];
		
			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}
			
			var $allMaps = $(this).find(selectors.join(','));
			
			$allMaps.each(function(){
				var $this = $(this);
				if ($this.parent('.fluid-width-map-wrapper').length) return;
				
				if(!$this.attr('id')){
					var mapID = 'fitmap' + Math.floor(Math.random()*999999);
					$this.attr('id', mapID);
				}
				
				$this.wrap('<div class="fluid-width-map-wrapper"></div>');
				$this.removeAttr('height').removeAttr('width');
			});
		});
		
	}
})( jQuery );;
/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);;
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// Modified by Stan Scates for https://github.com/StanScates/Tweet.js-Mod

(function (factory) {
	if (typeof define === 'function' && define.amd)
	define(['jquery'], factory); // AMD support for RequireJS etc.
	else
	factory(jQuery);
}(function ($) {
	$.fn.tweet = function(o){
		var s = $.extend({
			modpath: "/twitter/",                     // [string]   relative URL to Tweet.js mod (see https://github.com/StanScates/Tweet.js-Mod)
			username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
			list_id: null,                            // [integer]  ID of list to fetch when using list functionality
			list: null,                               // [string]   optional slug of list belonging to username
			favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
			query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
			avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
			count: 3,                                 // [integer]  how many tweets to display?
			fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
			page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
			retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
			intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
			outro_text: null,                         // [string]   do you want text AFTER your tweets?
			join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
			auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
			auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
			auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
			auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
			auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
			loading_text: null,                       // [string]   optional loading text, displayed while tweets load
			refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
			twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
			twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
			twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
			template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
			comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
				return tweet2["tweet_time"] - tweet1["tweet_time"];
			},
			filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
				return true;
			}
		// You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
		//   "loaded" -- triggered when tweets have been fetched and rendered
		}, o);

		// See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
		var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

		// Expand values inside simple string templates with {placeholders}
		function t(template, info) {
			if (typeof template === "string") {
				var result = template;
				for(var key in info) {
					var val = info[key];
					result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
				}
				return result;
			} else return template(info);
		}
		// Export the t function for use when passing a function as the 'template' option
		$.extend({tweet: {t: t}});

		function replacer (regex, replacement) {
			return function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(regex, replacement));
				});
				return $(returning);
			};
		}

		function escapeHTML(s) {
			return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
		}

		$.fn.extend({
			linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
			// Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
			linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
				' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'" class="tweet_hashtag">#$1</a>'),
			makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
		});

		function linkURLs(text, entities) {
			return text.replace(url_regexp, function(match) {
				var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
				var text = match;
				for(var i = 0; i < entities.length; ++i) {
					var entity = entities[i];
					if (entity.url == url && entity.expanded_url) {
						url = entity.expanded_url;
						text = entity.display_url;
						break;
					}
				}
				return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
			});
		}

		function parse_date(date_str) {
			// The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
			// cannot handle in IE. We therefore perform the following transformation:
			// "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
			return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
		}

		function relative_time(date) {
			var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
			var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
			var r = '';
			if (delta < 1) {
				r = 'just now';
			} else if (delta < 60) {
				r = delta + ' seconds ago';
			} else if(delta < 120) {
				r = 'about a minute ago';
			} else if(delta < (45*60)) {
				r = 'about ' + (parseInt(delta / 60, 10)).toString() + ' minutes ago';
			} else if(delta < (2*60*60)) {
				r = 'about an hour ago';
			} else if(delta < (24*60*60)) {
				r = 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
			} else if(delta < (48*60*60)) {
				r = 'about a day ago';
			} else {
				r = 'about ' + (parseInt(delta / 86400, 10)).toString() + ' days ago';
			}
			return r;
		}

		function build_auto_join_text(text) {
			if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
				return s.auto_join_text_reply;
			} else if (text.match(url_regexp)) {
				return s.auto_join_text_url;
			} else if (text.match(/^((\w+ed)|just) .*/im)) {
				return s.auto_join_text_ed;
			} else if (text.match(/^(\w*ing) .*/i)) {
				return s.auto_join_text_ing;
			} else {
				return s.auto_join_text_default;
			}
		}

		function build_api_request() {
			var modpath = s.modpath,
				count = (s.fetch === null) ? s.count : s.fetch,
				defaults = {
					include_entities: 1
				};

			if (s.list) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/lists/statuses.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						slug: s.list,
						owner_screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else if (s.favorites) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/favorites/list.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						screen_name: s.username,
						page: s.page,
						count: count
					})
				};
			} else if (s.query === null && s.username.length === 1) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/statuses/user_timeline.json",
					parameters: $.extend({}, defaults, {
						screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else {
				var query = (s.query || 'from:'+s.username.join(' OR from:'));
				return {
					host: s.twitter_search_url,
					url: "/search.json",
					parameters: $.extend({}, defaults, {
						page: s.page,
						q: query,
						rpp: count
					})
				};
			}
		}

		function extract_avatar_url(item, secure) {
			if (secure) {
				return ('user' in item) ?
					item.user.profile_image_url_https :
					extract_avatar_url(item, false).
					replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
			} else {
				return item.profile_image_url || item.user.profile_image_url;
			}
		}

		// Convert twitter API objects into data available for
		// constructing each tweet <li> using a template
		function extract_template_data(item) {
			var o = {};
			o.item = item;
			o.source = item.source;
			// The actual user name is not returned by all Twitter APIs, so please do not file an issue if it is empty.
			o.name = item.from_user_name || item.user.name;
			o.screen_name = item.from_user || item.user.screen_name;
			o.avatar_size = s.avatar_size;
			o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
			o.retweet = typeof(item.retweeted_status) != 'undefined';
			o.tweet_time = parse_date(item.created_at);
			o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
			o.tweet_id = item.id_str;
			o.twitter_base = "http://"+s.twitter_url+"/";
			o.user_url = o.twitter_base+o.screen_name;
			o.tweet_url = o.user_url+"/status/"+o.tweet_id;
			o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
			o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
			o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
			o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
			o.tweet_relative_time = relative_time(o.tweet_time);
			o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
			o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
			o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
			o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

			// Default spans, and pre-formatted blocks for common layouts
			o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
			o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
			o.avatar = o.avatar_size ?
				t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
			o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
			o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
			o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
			o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
			o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
			return o;
		}

		return this.each(function(i, widget){
			var list = $('<ul class="tweet_list">');
			var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
			var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
			var loading = $('<p class="loading">'+s.loading_text+'</p>');

			if(s.username && typeof(s.username) == "string"){
				s.username = [s.username];
			}

			$(widget).unbind("tweet:load").bind("tweet:load", function(){
				if (s.loading_text) $(widget).empty().append(loading);

				$.ajax({
					dataType: "json",
					type: "post",
					async: false,
					url: s.modpath || "/twitter/",
					data: { request: build_api_request() },
					success: function(data, status) {

						if(data.message) {
							console.log(data.message);
						}

						var response = data.response;
						$(widget).empty().append(list);
						if (s.intro_text) list.before(intro);
						list.empty();

						if(response.statuses !== undefined) {
							resp = response.statuses;
						} else if(response.results !== undefined) {
							resp = response.results;
						} else {
							resp = response;
						}

						var tweets = $.map(resp, extract_template_data);
							tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);

						list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
							children('li:first').addClass('tweet_first').end().
							children('li:odd').addClass('tweet_even').end().
							children('li:even').addClass('tweet_odd');

						if (s.outro_text) list.after(outro);
						$(widget).trigger("loaded").trigger((tweets ? "empty" : "full"));
						if (s.refresh_interval) {
							window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
						}
					}
				});
			}).trigger("tweet:load");
		});
	};
}));
;
/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.2 by Matt Varone
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
    			text: 'To Top',
    			min: 200,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).fadeIn(settings.inDelay);
			else 
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);;
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):false;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){if(location.href.indexOf("#prettyPhoto")!==-1)location.hash="prettyPhoto"}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos["scrollTop"]+(d/2-a["containerHeight"]/2);if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a["contentHeight"],width:a["contentWidth"]},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a["containerWidth"]/2<0?0:v/2-a["containerWidth"]/2,width:a["containerWidth"]},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(settings.allow_expand){if(a["resized"]){e("a.pp_expand,a.pp_contract").show()}else{e("a.pp_expand").hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=true});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=false;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=true,fitting=false;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=true}h=imageHeight,p=imageWidth}if(p>v||h>d){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){if(e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)){return"youtube"}else if(e.match(/vimeo\.com/i)){return"vimeo"}else if(e.match(/\b.mov\b/i)){return"quicktime"}else if(e.match(/\b.swf\b/i)){return"flash"}else if(e.match(/\biframe=true\b/i)){return"iframe"}else if(e.match(/\bajax=true\b/i)){return"ajax"}else if(e.match(/\bcustom=true\b/i)){return"custom"}else if(e.substr(0,1)=="#"){return"inline"}else{return"image"}}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos["scrollTop"]-contentHeight/2;if(projectedTop<0)projectedTop=0;if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos["scrollLeft"]-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a["containerWidth"]-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else{$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return false});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){if(!settings.modal)e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return false});if(settings.allow_expand){e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=false}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=true}y(function(){e.prettyPhoto.open()});return false})}$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return false});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:false,opacity:.8,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:false,wmode:"opaque",autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=false,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=true,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});if(s.keyboard_shortcuts){e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:if(!settings.modal)e.prettyPhoto.close();t.preventDefault();break}}}})}e.prettyPhoto.initialize=function(){settings=s;if(settings.theme=="pp_default")settings.horizontal_padding=16;theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?true:false;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);if(settings.allow_resize)e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return false};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?true:false;set_position=arguments[3]?arguments[3]:0;k(t.target)}if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();if(settings.deeplinking)n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}if($ppt.is(":hidden"))$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());if(typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""){$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))}else{$pp_pic_holder.find(".pp_description").hide()}movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=false;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=true}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=true}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");imgPreloader="";skipInjection=false;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;if(isSet&&set_position<e(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image;if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/");movie_id=movie_id[1];if(movie_id.indexOf("?")>0)movie_id=movie_id.substr(0,movie_id.indexOf("?"));if(movie_id.indexOf("&")>0)movie_id=movie_id.substr(0,movie_id.indexOf("&"))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;var n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0";if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=a["width"]+"/embed/?moog_width="+a["width"];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a["height"]).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a["height"]+=15;a["contentHeight"]+=15;a["containerHeight"]+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{path}/g,frame_url);break;case"ajax":doresize=false;a=w(movie_width,movie_height);doresize=true;skipInjection=true;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=false;a=w(e(myClone).width(),e(myClone).height());doresize=true;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html());break}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return false};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;if(set_position<0)set_position=e(pp_images).size()-1}else if(t=="next"){set_position++;if(set_position>e(pp_images).size()-1)set_position=0}else{set_position=t}rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")}y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0}else if(e=="previous"){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage}else{currentGalleryPage=e}slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return false});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else{e.prettyPhoto.changePage("next")}};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return false});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=true;f=false;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=true;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)};})(jQuery);var pp_alreadyInitialized=false;
/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.0(31-OCT-2011)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 * 	 http://github.com/mambows/mobilemenu
 */
(function($){
$.fn.mobileMenu = function(options) {
	
	var defaults = {
			defaultText: 'Navigate to...',
			className: 'mobile-menu',
			subMenuClass: 'sub-menu',
			subMenuDash: '&ndash;'
		},
		settings = $.extend( defaults, options ),
		el = $(this);
	
	this.each(function(){
		// ad class to submenu list
		el.find('ul').addClass(settings.subMenuClass);

		// Create base menu
		$('<select />',{
			'class' : settings.className
		}).insertAfter( el );

		// Create default option
		$('<option />', {
			"value"		: '#',
			"text"		: settings.defaultText
		}).appendTo( '.' + settings.className );

		// Create select option from menu
		el.find('a').each(function(){
			var $this 	= $(this),
					optText	= '&nbsp;' + $this.text(),
					optSub	= $this.parents( '.' + settings.subMenuClass ),
					len			= optSub.length,
					dash;
			
			// if menu has sub menu
			if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
				dash = Array( len+1 ).join( settings.subMenuDash );
				optText = dash + optText;
			}

			// Now build menu and append it
			$('<option />', {
				"value"	: this.href,
				"html"	: optText,
				"selected" : (this.href == window.location.href)
			}).appendTo( '.' + settings.className );

		}); // End el.find('a').each

		// Change event on select element
		$('.' + settings.className).change(function(){
			var locations = $(this).val();
			if( locations !== '#' ) {
				window.location.href = $(this).val();
			};
		});

	}); // End this.each

	return this;

};
})(jQuery);;
/* jquery.nicescroll 3.4.1 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var D=!1,G=!1,N=5E3,O=2E3,C=0,J,u=document.getElementsByTagName("script"),u=u[u.length-1].src.split("?")[0];J=0<u.split("/").length?u.split("/").slice(0,-1).join("/")+"/":"";Array.prototype.forEach||(Array.prototype.forEach=function(e,d){for(var k=0,s=this.length;k<s;++k)e.call(d,this[k],k,this)});var w=window.requestAnimationFrame||!1,x=window.cancelAnimationFrame||!1;["ms","moz","webkit","o"].forEach(function(e){w||(w=window[e+"RequestAnimationFrame"]);x||(x=window[e+"CancelAnimationFrame"]||
window[e+"CancelRequestAnimationFrame"])});var E=window.MutationObserver||window.WebKitMutationObserver||!1,K={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,
railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},H=!1,P=function(j,d){function k(){var c=
b.win;if("zIndex"in c)return c.zIndex();for(;0<c.length&&9!=c[0].nodeType;){var g=c.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);c=c.parent()}return!1}function s(c,g,p){g=c.css(g);c=parseFloat(g);return isNaN(c)?(c=B[g]||0,p=3==c?p?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&c&&(c+=1),p?c:0):c}function n(c,g,p,d){b._bind(c,g,function(b){b=b?b:window.event;var d={original:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==
b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==g?(d.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(d.deltaX=-0.025*b.wheelDeltaX)):d.deltaY=b.detail;return p.call(c,d)},d)}function v(c,g,d){var f,e;0==c.deltaMode?(f=-Math.floor(c.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(c.deltaY*(b.opt.mousescrollstep/
54))):1==c.deltaMode&&(f=-Math.floor(c.deltaX*b.opt.mousescrollstep),e=-Math.floor(c.deltaY*b.opt.mousescrollstep));g&&(0==f&&e)&&(f=e,e=0);f&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=f,b.debounced("mousewheelx",function(){var c=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(c)},120));if(e){if(b.opt.nativeparentscrolling&&d&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=
e;b.debounced("mousewheely",function(){var c=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(c)},120)}c.stopImmediatePropagation();return c.preventDefault()}var b=this;this.version="3.4.0";this.name="nicescroll";this.me=d;this.opt={doc:e("body"),win:!1};e.extend(this.opt,K);this.opt.snapbackspeed=80;if(j)for(var m in b.opt)"undefined"!=typeof j[m]&&(b.opt[m]=j[m]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:
this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=
this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+O++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=
this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;if(H)m=H;else{m=document.createElement("DIV");var h={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};h.isopera="opera"in window;h.isopera12=h.isopera&&
"getUserMedia"in navigator;h.isie="all"in document&&"attachEvent"in m&&!h.isopera;h.isieold=h.isie&&!("msInterpolationMode"in m.style);h.isie7=h.isie&&!h.isieold&&(!("documentMode"in document)||7==document.documentMode);h.isie8=h.isie&&"documentMode"in document&&8==document.documentMode;h.isie9=h.isie&&"performance"in window&&9<=document.documentMode;h.isie10=h.isie&&"performance"in window&&10<=document.documentMode;h.isie9mobile=/iemobile.9/i.test(navigator.userAgent);h.isie9mobile&&(h.isie9=!1);
h.isie7mobile=!h.isie9mobile&&h.isie7&&/iemobile/i.test(navigator.userAgent);h.ismozilla="MozAppearance"in m.style;h.iswebkit="WebkitAppearance"in m.style;h.ischrome="chrome"in window;h.ischrome22=h.ischrome&&h.haspointerlock;h.ischrome26=h.ischrome&&"transition"in m.style;h.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;h.hasmstouch=window.navigator.msPointerEnabled||!1;h.ismac=/^mac$/i.test(navigator.platform);h.isios=h.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);
h.isios4=h.isios&&!("seal"in Object);h.isandroid=/android/i.test(navigator.userAgent);h.trstyle=!1;h.hastransform=!1;h.hastranslate3d=!1;h.transitionstyle=!1;h.hastransition=!1;h.transitionend=!1;for(var q=["transform","msTransform","webkitTransform","MozTransform","OTransform"],r=0;r<q.length;r++)if("undefined"!=typeof m.style[q[r]]){h.trstyle=q[r];break}h.hastransform=!1!=h.trstyle;h.hastransform&&(m.style[h.trstyle]="translate3d(1px,2px,3px)",h.hastranslate3d=/translate3d/.test(m.style[h.trstyle]));
h.transitionstyle=!1;h.prefixstyle="";h.transitionend=!1;for(var q="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),A=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),u="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),r=0;r<q.length;r++)if(q[r]in m.style){h.transitionstyle=q[r];h.prefixstyle=A[r];h.transitionend=u[r];break}h.ischrome26&&(h.prefixstyle=A[1]);h.hastransition=
h.transitionstyle;b:{q=["-moz-grab","-webkit-grab","grab"];if(h.ischrome&&!h.ischrome22||h.isie)q=[];for(r=0;r<q.length;r++)if(A=q[r],m.style.cursor=A,m.style.cursor==A){q=A;break b}q="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}h.cursorgrabvalue=q;h.hasmousecapture="setCapture"in m;h.hasMutationObserver=!1!==E;m=null;m=H=h}this.detected=m;var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=
!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&(this.istouchcapable=!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(c,g,d,f){var e=b.delaylist[c],h=(new Date).getTime();if(!f&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+d>h&&!e.tt)b.delaylist[c]={last:h+d,tt:setTimeout(function(){b.delaylist[c].tt=0;g.call()},d)};else if(!e||!e.tt)b.delaylist[c]=
{last:h,tt:0},setTimeout(function(){g.call()},0)};this.debounced=function(c,g,d){var e=b.delaylist[c];(new Date).getTime();b.delaylist[c]=g;e||setTimeout(function(){var g=b.delaylist[c];b.delaylist[c]=!1;g.call()},d)};this.synched=function(c,g){b.synclist[c]=g;b.onsync||(w(function(){b.onsync=!1;for(c in b.synclist){var g=b.synclist[c];g&&g.call(b);b.synclist[c]=!1}}),b.onsync=!0);return c};this.unsynched=function(c){b.synclist[c]&&(b.synclist[c]=!1)};this.css=function(c,g){for(var d in g)b.saved.css.push([c,
d,c.css(d)]),c.css(d,g[d])};this.scrollTop=function(c){return"undefined"==typeof c?b.getScrollTop():b.setScrollTop(c)};this.scrollLeft=function(c){return"undefined"==typeof c?b.getScrollLeft():b.setScrollLeft(c)};BezierClass=function(b,g,d,e,f,h,k){this.st=b;this.ed=g;this.spd=d;this.p1=e||0;this.p2=f||1;this.p3=h||0;this.p4=k||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-
b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*g)},update:function(b,g){this.st=this.getNow();this.ed=b;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var z=function(){var c=b.doc.css(f.trstyle);return c&&"matrix"==
c.substr(0,6)?c.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(c){if(!c){if(c=z())return 16==c.length?-c[13]:-c[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(c){if(!c){if(c=z())return 16==c.length?-c[12]:-c[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var g=document.createEvent("UIEvents");
g.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(g)}:document.fireEvent?function(b){var g=document.createEventObject();b.fireEvent("onscroll");g.cancelBubble=!0}:function(){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+
"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
function(){return b.docscroll.scrollTop()},this.setScrollTop=function(c){return b.docscroll.scrollTop(c)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(c){return b.docscroll.scrollLeft(c)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,g){if(!b)return!1;for(var d=b.target||b.srcElement||b||!1;d&&d.id!=g;)d=d.parentNode||!1;return!1!==d};var B={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var c=b.win.offset(),g=b.viewport.offset();return{top:c.top-g.top+b.viewport.scrollTop(),left:c.left-g.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(c){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var g=b.getOffset(),d=g.top,e=g.left,d=d+s(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var e=e+(b.rail.align?b.win.outerWidth()-
s(b.win,"border-right-width")-b.rail.width:s(b.win,"border-left-width")),f=b.opt.railoffset;f&&(f.top&&(d+=f.top),b.rail.align&&f.left&&(e+=f.left));b.locked||b.rail.css({top:d,left:e,height:c?c.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:d+1,left:1==b.rail.align?e-20:e+b.rail.width+4});b.railh&&!b.locked&&(d=g.top,e=g.left,c=b.railh.align?d+s(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:d+s(b.win,"border-top-width",!0),e+=s(b.win,"border-left-width"),b.railh.css({top:c,left:e,
width:b.railh.width}))}};this.doRailClick=function(c,g,d){var e;b.locked||(b.cancelEvent(c),g?(g=d?b.doScrollLeft:b.doScrollTop,e=d?(c.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(c.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,g(e)):(g=d?b.doScrollLeftBy:b.doScrollBy,e=d?b.scroll.x:b.scroll.y,c=d?c.pageX-b.railh.offset().left:c.pageY-b.rail.offset().top,d=d?b.view.w:b.view.h,e>=c?g(d):g(-d)))};b.hasanimationframe=w;b.hascancelanimationframe=x;b.hasanimationframe?b.hascancelanimationframe||
(x=function(){b.cancelAnimationFrame=!0}):(w=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},x=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?k()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>C&&(C=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&!f.isieold&&
!f.isie9mobile){var c=b.docscroll;b.ispage&&(c=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(c,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var g=e(document.createElement("div"));g.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.hborder=parseFloat(g.outerHeight()-g.innerHeight());b.cursor=g;var d=e(document.createElement("div"));d.attr("id",b.id);d.addClass("nicescroll-rails");var h,j,y=["left","right"],s;for(s in y)j=y[s],(h=b.opt.railpadding[j])?d.css("padding-"+j,h+"px"):b.opt.railpadding[j]=0;d.append(g);d.width=Math.max(parseFloat(b.opt.cursorwidth),
g.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;d.css({width:d.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});d.visibility=!0;d.scrollable=!0;d.align="left"==b.opt.railalign?0:1;b.rail=d;g=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(g=document.createElement("div"),b.bind(g,"click",b.doZoom),b.zoom=e(g),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+J+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&
b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(c){1.5<c.scale&&b.doZoomIn(c);0.8>c.scale&&b.doZoomOut(c);return b.cancelEvent(c)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(c,{"overflow-x":"hidden"});g=e(document.createElement("div"));g.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,
"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.wborder=parseFloat(g.outerWidth()-g.innerWidth());b.cursorh=g;var l=e(document.createElement("div"));l.attr("id",b.id+"-hr");l.addClass("nicescroll-rails");l.height=Math.max(parseFloat(b.opt.cursorwidth),g.outerHeight());l.css({height:l.height+"px",zIndex:b.zindex,background:b.opt.background});l.append(g);l.visibility=!0;l.scrollable=!0;l.align="top"==b.opt.railvalign?0:1;b.railh=l;b.railh.drag=!1}b.ispage?
(d.css({position:"fixed",top:"0px",height:"100%"}),d.align?d.css({right:"0px"}):d.css({left:"0px"}),b.body.append(d),b.railh&&(l.css({position:"fixed",left:"0px",width:"100%"}),l.align?l.css({bottom:"0px"}):l.css({top:"0px"}),b.body.append(l))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),c="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":d.width+4}),c.append(b.zoom)),d.css({position:"absolute",top:0}),
d.align?d.css({right:0}):d.css({left:0}),c.append(d),l&&(l.css({position:"absolute",left:0,bottom:0}),l.align?l.css({bottom:0}):l.css({top:0}),c.append(l))):(b.isfixed="fixed"==b.win.css("position"),c=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),d.css({position:c}),b.zoom&&b.zoom.css({position:c}),b.updateScrollBar(),b.body.append(d),b.zoom&&
b.body.append(b.zoom),b.railh&&(l.css({position:c}),b.body.append(l))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):!0===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&
(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new L(b),b.onmangotouch=
function(){var c=b.getScrollTop(),d=b.getScrollLeft();if(c==b.scrollmom.lastscrolly&&d==b.scrollmom.lastscrollx)return!0;var g=c-b.mangotouch.sy,e=d-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(g,2)))){var f=0>g?-1:1,p=0>e?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=f||b.mangotouch.drx!=p?(b.scrollmom.stop(),b.scrollmom.reset(d,c),b.mangotouch.sy=c,b.mangotouch.ly=c,b.mangotouch.sx=d,b.mangotouch.lx=d,b.mangotouch.dry=
f,b.mangotouch.drx=p,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-e,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-c),Math.abs(b.mangotouch.lx-d)),b.mangotouch.ly=c,b.mangotouch.lx=d,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},d=b.getScrollTop(),l=b.getScrollLeft(),b.mangotouch={sy:d,ly:d,dry:0,sx:l,lx:l,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,
"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new L(b);b.ontouchstart=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(!b.locked){if(f.hasmstouch)for(var d=c.target?c.target:!1;d;){var g=e(d).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==d.nodeName&&d.id==b.id)break;d=d.parentNode?d.parentNode:!1}b.cancelScroll();if((d=b.getTarget(c))&&/INPUT/i.test(d.nodeName)&&/range/i.test(d.type))return b.stopPropagation(c);
!("clientX"in c)&&"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);b.forcescreen&&(g=c,c={original:c.original?c.original:c},c.clientX=g.screenX,c.clientY=g.screenY);b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl="f";else{var g=e(window).width(),p=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),p=Math.max(0,k-p),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<p?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(c.clientX,c.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!d||
!/INPUT|SELECT|TEXTAREA/i.test(d.nodeName))return!b.ispage&&f.hasmousecapture&&d.setCapture(),b.cancelEvent(c);/SUBMIT|CANCEL|BUTTON/i.test(e(d).attr("type"))&&(pc={tg:d,click:!1},b.preventclick=pc)}}};b.ontouchend=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(c)};var n=b.opt.touchbehavior&&
b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(c,d){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof c.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);c=e.extend({original:c},c);"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);if(b.forcescreen){var g=c;c={original:c.original?
c.original:c};c.clientX=g.screenX;c.clientY=g.screenY}g=ofy=0;if(n&&!d){var p=b.win.position(),g=-p.left;ofy=-p.top}var h=c.clientY+ofy,p=h-b.rail.drag.y,k=c.clientX+g,j=k-b.rail.drag.x,t=b.rail.drag.st-p;b.ishwscroll&&b.opt.bouncescroll?0>t?t=Math.round(t/2):t>b.page.maxh&&(t=b.page.maxh+Math.round((t-b.page.maxh)/2)):(0>t&&(h=t=0),t>b.page.maxh&&(t=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var l=b.rail.drag.sl-j;b.ishwscroll&&b.opt.bouncescroll?0>l?l=Math.round(l/2):l>b.page.maxw&&(l=b.page.maxw+
Math.round((l-b.page.maxw)/2)):(0>l&&(k=l=0),l>b.page.maxw&&(l=b.page.maxw,k=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?l=b.rail.drag.sl:"h"==b.rail.drag.dl&&(t=b.rail.drag.st);else{var p=Math.abs(p),j=Math.abs(j),y=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(p>y&&j<=0.3*p)return b.rail.drag=!1,!0;j>y&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(j>y&&p<=0.3*az)return b.rail.drag=!1,!0;p>y&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",
function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(t),b.scrollmom.update(k,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(l),b.showCursor(t,l)):b.showCursor(t),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(c)}}}b.onmousedown=function(c,d){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(c);b.cancelScroll();b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,
sy:b.scroll.y,pt:1,hr:!!d};var g=b.getTarget(c);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(c)}};b.onmouseup=function(c){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(c)};b.onmousemove=function(c){if(b.rail.drag&&
1==b.rail.drag.pt){if(f.ischrome&&0==c.which)return b.onmouseup(c);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(c.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var d=b.scrollvaluemaxw;b.scroll.x>d&&(b.scroll.x=d)}else b.scroll.y=b.rail.drag.sy+(c.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),d=b.scrollvaluemax,b.scroll.y>d&&(b.scroll.y=d);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*
b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(c)}};if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(c){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(c)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(c){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(c)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var m=function(c){if(b.selectiondrag){if(c){var d=b.win.outerHeight();c=c.pageY-b.selectiondrag.top;0<c&&c<d&&(c=0);c>=d&&(c-=d);b.selectiondrag.df=c}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){m()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=
document.selection.type}:function(){return!1};b.onselectionstart=function(){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(){b.selectiondrag=!1};b.onselectiondrag=function(c){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){m(c)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",
b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(c){b.onmousedown(c,!0)}),b.bind(b.cursorh,
"mouseup",function(c){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(c)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&
(b.bind(b.rail,"click",function(c){b.doRailClick(c,!1,!1)}),b.bind(b.rail,"dblclick",function(c){b.doRailClick(c,!0,!1)}),b.bind(b.cursor,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursor,"dblclick",function(c){b.cancelEvent(c)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(c){b.doRailClick(c,
!1,!0)}),b.bind(b.railh,"dblclick",function(c){b.doRailClick(c,!0,!0)}),b.bind(b.cursorh,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursorh,"dblclick",function(c){b.cancelEvent(c)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),
b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&
(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",b.onmousedown),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:N++}),
b.jqbind(b.win,"focus",function(c){D=b.getTarget(c).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(){D=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(c){G=b.getTarget(c).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){G=!1;b.hasmousefocus=!1}))}b.onkeypress=function(c){if(b.locked&&0==b.page.maxh)return!0;c=c?c:window.e;var d=b.getTarget(c);if(d&&/INPUT|TEXTAREA|SELECT|OPTION/.test(d.nodeName)&&
(!d.getAttribute("type")&&!d.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!D||b.ispage&&!D&&!G){d=c.keyCode;if(b.locked&&27!=d)return b.cancelEvent(c);var g=c.ctrlKey||!1,e=c.shiftKey||!1,f=!1;switch(d){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;
case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(e?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(c)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&
!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var r=b.win.attr("style"),d=parseFloat(b.win.css("width"))+1;b.win.css("width",d);b.synched("chromefix",function(){b.win.attr("style",r)})}b.onAttributeChange=function(){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==E?(b.observer=new E(function(c){c.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],
{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new E(function(c){c.forEach(function(c){if(0<c.removedNodes.length)for(var d in c.removedNodes)if(c.removedNodes[d]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",
function(c){c.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var q=function(){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(d){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&
(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));if(!f.isios&&b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);b.doc.height("");var g=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight);b.doc.height(g)}b.lazyResize(30);f.isie7&&
b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.onmousedown),b.bind(c,"mousemove",function(c){b.onmousemove(c,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&
b.css(e(c.body),{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){q.call(b.doc[0],!1)},500);b.bind(this.doc,"load",q)}};this.showCursor=function(c,d){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),
b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof c&&!1!==c&&(b.scroll.y=Math.round(1*c/b.scrollratio.y)),"undefined"!=typeof d&&(b.scroll.x=Math.round(1*d/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=
function(c){!b.cursortimeout&&(b.rail&&b.autohidedom)&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},c||b.opt.hidecursordelay))};this.noticeCursor=function(c,d,e){b.showCursor(d,e);b.rail.active||b.hideCursor(c)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(c,d){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&
b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var e=b.page.maxh,f=b.page.maxw,h=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=d?d:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==e&&b.page.maxw==f&&b.view.w==h){if(b.ispage)return b;e=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==e.top&&f.left==
e.left))return b;b.lastposition=e}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():
!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=
b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),
b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(c){c=isNaN(c)?30:c;b.delayed("resize",b.resize,c);return b};this._bind=function(c,d,e,f){b.events.push({e:c,n:d,f:e,b:f,q:!1});c.addEventListener?c.addEventListener(d,e,f||!1):c.attachEvent?c.attachEvent("on"+d,e):c["on"+d]=e};this.jqbind=function(c,d,f){b.events.push({e:c,
n:d,f:f,q:!0});e(c).bind(d,f)};this.bind=function(c,d,e,h){var k="jquery"in c?c[0]:c;"mousewheel"==d?"onwheel"in b.win?b._bind(k,"wheel",e,h||!1):(c="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(k,c,e,h||!1),"DOMMouseScroll"==c&&n(k,"MozMousePixelScroll",e,h||!1)):k.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(d)&&b._bind(k,"mousedown"==d?"touchstart":"mouseup"==d?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var c=b.touches.length?
b.touches[0]:b;c.original=b;e.call(this,c)}}else b.changedTouches&&(c=b.changedTouches[0],c.original=b,e.call(this,c))},h||!1),b._bind(k,d,e,h||!1),f.cantouch&&"mouseup"==d&&b._bind(k,"touchcancel",e,h||!1)):b._bind(k,d,function(c){if((c=c||window.event||!1)&&c.srcElement)c.target=c.srcElement;"pageY"in c||(c.pageX=c.clientX+document.documentElement.scrollLeft,c.pageY=c.clientY+document.documentElement.scrollTop);return!1===e.call(k,c)||!1===h?b.cancelEvent(c):!0})};this._unbind=function(b,d,e,f){b.removeEventListener?
b.removeEventListener(d,e,f):b.detachEvent?b.detachEvent("on"+d,e):b["on"+d]=!1};this.unbindAll=function(){for(var c=0;c<b.events.length;c++){var d=b.events[c];d.q?d.e.unbind(d.n,d.f):b._unbind(d.e,d.n,d.f,d.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=
function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=
function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();
b.unbindAll();!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=[];b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var c=0;c<b.saved.css.length;c++){var d=b.saved.css[c];d[0].css(d[1],"undefined"==typeof d[2]?"":d[2])}b.saved=!1;b.me.data("__nicescroll","");e.nicescroll.remove(b);for(var f in b)b[f]=null,delete b[f];b=null};this.scrollstart=function(c){this.onscrollstart=
c;return b};this.scrollend=function(c){this.onscrollend=c;return b};this.scrollcancel=function(c){this.onscrollcancel=c;return b};this.zoomin=function(c){this.onzoomin=c;return b};this.zoomout=function(c){this.onzoomout=c;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),d=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(d))return b.clientHeight!=b.scrollHeight;
b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),f=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(f)&&b.clientHeight!=b.scrollHeight||0<d.getNiceScroll().length)return d;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(c){if(b.locked)return!0;if(b.rail.drag)return b.cancelEvent(c);if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?
b.onmousewheelhr(c):!0;var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;if(b.nativescrollingarea)return!0;if(c=v(c,!1,e))b.checkarea=0;return c};this.onmousewheelhr=function(c){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(c);var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;return b.nativescrollingarea?
!0:b.locked?b.cancelEvent(c):v(c,!0,e)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var d=Math.round(10*b.opt.scrollspeed);c=Math.min(d,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,d){var e=d?20<c?c:0:b.getTransitionSpeed(c),
h=e?f.prefixstyle+"transform "+e+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return e},this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*
(c-k))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&d==b.newscrolly)return!1;b.newscrolly=d;b.newscrollx=c;b.newscrollspeed=e||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var e=b.getScrollTop(),h=b.getScrollLeft(),k,p;k=c-h;p=d-e;k=Math.round(Math.sqrt(Math.pow(k,2)+Math.pow(p,2)));k=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(k);b.newscrollspeed&&
1>=b.newscrollspeed&&(k*=b.newscrollspeed);b.prepareTransition(k,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);0<k&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:e},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:k}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,
k)),b.timerscroll={bz:new BezierClass(e,b.newscrolly,k,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,k,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),
d=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,d);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&
b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),d=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.noticeCursor(!1,c,d);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>d?d=0:d>b.page.maxw&&(d=b.page.maxw);if(c!=b.newscrolly||d!=b.newscrollx)return b.doScrollPos(d,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:d,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=
!1}):(this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){function f(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(n=1-n)return b.timer=w(f)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,e=d-sy;if(0>e&&d<b.newscrolly||0<e&&d>b.newscrolly)d=
b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var g=sx=b.getScrollLeft();if(b.dst.ax){g=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;e=g-sx;if(0>e&&g<b.newscrollx||0<e&&g>b.newscrollx)g=b.newscrollx;b.setScrollLeft(g);g==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>g?g=0:g>b.page.maxw&&(g=b.page.maxw),g!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(g,d):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=w(f)||1}d="undefined"==typeof d||!1===d?b.getScrollTop(!0):d;if(b.timer&&b.newscrolly==d&&b.newscrollx==c)return!0;b.timer&&x(b.timer);b.timer=0;var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*(c-k))&&b.cancelScroll();b.newscrolly=d;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||
!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-k;b.dst.y=d-h;b.dst.px=k;b.dst.py=h;var j=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/j;b.dst.ay=b.dst.y/j;var l=0,s=j;0==b.dst.x?(l=h,s=d,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(l=k,s=c,b.dst.ax=1,b.dst.px=0);j=b.getTransitionSpeed(j);e&&1>=e&&(j*=e);b.bzscroll=0<j?b.bzscroll?b.bzscroll.update(s,j):new BezierClass(l,s,j,0,1,0,1):!1;if(!b.timer){(h==
b.page.maxh&&d>=b.page.maxh||k==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var n=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:k,y:h},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:j});f();(h==b.page.maxh&&d>=h||k==b.page.maxw&&c>=k)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&x(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,
d){var e=b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var f=d>b.page.maxh?b.page.maxh:d;0>f&&(f=0);b.synched("scroll",function(){b.setScrollTop(f);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var f=
Math.round(b.view.h/2);e<-f?e=-f:e>b.page.maxh+f&&(e=b.page.maxh+f)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>e&&0>=py)return b.noticeCursor();if(e>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(e)};this.doScrollLeftBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var f=Math.round(b.view.w/2);e<-f?e=-f:e>b.page.maxw+f&&(e=b.page.maxw+f)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);
if(0>e&&0>=px||e>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(e)};this.doScrollTo=function(c,d){d&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));
b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=!0;b.zoomrestore={style:{}};var d="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),h=b.win[0].style,k;for(k in d){var j=d[k];b.zoomrestore.style[j]="undefined"!=typeof h[j]?h[j]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-
b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":C+100,margin:"0px"});d=b.win.css("backgroundColor");(""==d||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":C+101});b.zoom.css({"z-index":C+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=
function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-
b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},L=function(e){var d=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,j){d.stop();var n=d.time();d.steptime=
0;d.lasttime=n;d.speedx=0;d.speedy=0;d.lastx=e;d.lasty=j;d.lastscrollx=-1;d.lastscrolly=-1};this.update=function(e,j){var n=d.time();d.steptime=n-d.lasttime;d.lasttime=n;var n=j-d.lasty,v=e-d.lastx,b=d.nc.getScrollTop(),m=d.nc.getScrollLeft(),b=b+n,m=m+v;d.snapx=0>m||m>d.nc.page.maxw;d.snapy=0>b||b>d.nc.page.maxh;d.speedx=v;d.speedy=n;d.lastx=e;d.lasty=j};this.stop=function(){d.nc.unsynched("domomentum2d");d.timer&&clearTimeout(d.timer);d.timer=0;d.lastscrollx=-1;d.lastscrolly=-1};this.doSnapy=function(e,
j){var n=!1;0>j?(j=0,n=!0):j>d.nc.page.maxh&&(j=d.nc.page.maxh,n=!0);0>e?(e=0,n=!0):e>d.nc.page.maxw&&(e=d.nc.page.maxw,n=!0);n&&d.nc.doScrollPos(e,j,d.nc.opt.snapbackspeed)};this.doMomentum=function(e){var j=d.time(),n=e?j+e:d.lasttime;e=d.nc.getScrollLeft();var v=d.nc.getScrollTop(),b=d.nc.page.maxh,m=d.nc.page.maxw;d.speedx=0<m?Math.min(60,d.speedx):0;d.speedy=0<b?Math.min(60,d.speedy):0;n=n&&50>=j-n;if(0>v||v>b||0>e||e>m)n=!1;e=d.speedx&&n?d.speedx:!1;if(d.speedy&&n&&d.speedy||e){var h=Math.max(16,
d.steptime);50<h&&(e=h/50,d.speedx*=e,d.speedy*=e,h=50);d.demulxy=0;d.lastscrollx=d.nc.getScrollLeft();d.chkx=d.lastscrollx;d.lastscrolly=d.nc.getScrollTop();d.chky=d.lastscrolly;var q=d.lastscrollx,r=d.lastscrolly,u=function(){var e=600<d.time()-j?0.04:0.02;if(d.speedx&&(q=Math.floor(d.lastscrollx-d.speedx*(1-d.demulxy)),d.lastscrollx=q,0>q||q>m))e=0.1;if(d.speedy&&(r=Math.floor(d.lastscrolly-d.speedy*(1-d.demulxy)),d.lastscrolly=r,0>r||r>b))e=0.1;d.demulxy=Math.min(1,d.demulxy+e);d.nc.synched("domomentum2d",
function(){d.speedx&&(d.nc.getScrollLeft()!=d.chkx&&d.stop(),d.chkx=q,d.nc.setScrollLeft(q));d.speedy&&(d.nc.getScrollTop()!=d.chky&&d.stop(),d.chky=r,d.nc.setScrollTop(r));d.timer||(d.nc.hideCursor(),d.doSnapy(q,r))});1>d.demulxy?d.timer=setTimeout(u,h):(d.stop(),d.nc.hideCursor(),d.doSnapy(q,r))};u()}else d.doSnapy(d.nc.getScrollLeft(),d.nc.getScrollTop())}},z=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(j){var d=e.data(j,"__nicescroll")||!1;return d&&d.ishwscroll?d.getScrollTop():z.call(j)},
set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollTop(parseInt(d)):z.call(j,d);return this}};e.fn.scrollTop=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollTop():z.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollTop(parseInt(j)):z.call(e(this),j)})};var B=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(j){var d=e.data(j,"__nicescroll")||
!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(j)},set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollLeft(parseInt(d)):B.call(j,d);return this}};e.fn.scrollLeft=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollLeft(parseInt(j)):B.call(e(this),j)})};for(var F=function(j){var d=this;
this.length=0;this.name="nicescrollarray";this.each=function(e){for(var j=0,k=0;k<d.length;k++)e.call(d[k],j++);return d};this.push=function(e){d[d.length]=e;d.length++};this.remove=function(e){d.each(function(j){this.id===e.id&&(delete d[j],d.length--)})};this.eq=function(e){return d[e]};if(j)for(a=0;a<j.length;a++){var k=e.data(j[a],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this},u=F.prototype,M="show hide toggle onResize resize remove stop doScrollPos".split(" "),Q=function(e,
d){e[d]=function(){var e=arguments;return this.each(function(){this[d].apply(this,e)})}},I=0;I<M.length;I++)Q(u,M[I]);e.fn.getNiceScroll=function(j){return"undefined"==typeof j?new F(this):e.data(this[j],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(j){return e.data(j,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(j,d){"undefined"==typeof d&&("object"==typeof j&&!("jquery"in j))&&(d=j,j=!1);var k=new F;"undefined"==typeof d&&(d={});j&&(d.doc=e(j),d.win=e(this));var s=!("doc"in
d);!s&&!("win"in d)&&(d.win=e(this));this.each(function(){var j=e(this).data("__nicescroll")||!1;j||(d.doc=s?e(this):d.doc,j=new P(d,e(this)),e(this).data("__nicescroll",j));k.push(j)});return 1==k.length?k[0]:k};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new F,e.nicescroll.options=K)})(jQuery);
;
/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.3.3
*/

(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 200,
		animation	: {height:'show'},
		speed		: 'fast',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: true,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
	
})(jQuery);;
/**
 * Isotope v1.5.21
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",t&&clearTimeout(t),t=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){w("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;
/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);;
jQuery(document).ready(function ($) {

  $(window).load(function(){

	  $('.search-api-sorts li a').addClass('btn');
	  
	  $('header input[type="submit"]').addClass('btn');
	  
	  $('#scroll-menu input[type="submit"]').addClass('btn');
	  
	  $('.search-api-sort-active a:last').removeClass('btn');
	
	  $('.node-wrap .flexslider').flexslider({
	    controlNav: false, 
	    animation: "slide",
	    touch: true
	  });
	  
	  $('.flexslider').flexslider({
	    animation: "slide",  
	    touch: true,
	    controlsContainer: ".slider",
	
	    start: function(slider) {
	      slider.removeClass('flex-loading');
	    }  
	  });
	 
	  var $container = $('#isotope_test');
	
	  $container.isotope({
	    itemSelector : '.switch'
	  });
	  
	  var $optionSets = $('#options .option-set'),
	      $optionLinks = $optionSets.find('a');
	
	  $optionLinks.click(function(){
	    var $this = $(this);
	    // don't proceed if already selected
	    if ( $this.hasClass('selected') ) {
	      return false;
	    }
	    var $optionSet = $this.parents('.option-set');
	    $optionSet.find('.selected').removeClass('selected');
	    $this.addClass('selected');
	
	    // make option object dynamically, i.e. { filter: '.my-filter-class' }
	    var options = {},
	        key = $optionSet.attr('data-option-key'),
	        value = $this.attr('data-option-value');
	    // parse 'false' as false boolean
	    value = value === 'false' ? false : value;
	    options[ key ] = value;
	    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	      // changes in layout modes need extra logic
	      changeLayoutMode( $this, options )
	    } else {
	      // otherwise, apply new options
	      $container.isotope( options );
	    }
	    
	    return false;
	  });
	  
	});  
  
  jQuery("ul.accordion li").each(function(){
	  if(jQuery(this).index() > 0){
	  jQuery(this).children(".accordion-content").css('display','none');
	  }
	  else{
	  jQuery(this).find(".accordion-head-image").addClass('active');
	  }
	
	  jQuery(this).children(".accordion-head").bind("click", function(){
	  jQuery(this).children().addClass(function(){
	  if(jQuery(this).hasClass("active")) return "";
	    return "active";
	  });
	  jQuery(this).siblings(".accordion-content").slideDown();
	  jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
	  jQuery(this).parent().siblings("li").find(".active").removeClass("active");
	  });
	});

  var flag = true;

	$(window).bind('load resize',function() {
		if($(window).width() > 768) {	
			$(window).scroll(function() {
				var vPos = $(window).scrollTop();
				var totalH = $('.before-content').offset().top;
				var finalSize = totalH - vPos;
				var scrolled = $(window).scrollTop(); //Parallax window scroll height
					
				if(finalSize <= 10) {
					if(flag){
					$('#scroll-menu').animate({'top':'0'},150);
					$('nav.main').hide();
					}	
					flag=false;	
				} else if(finalSize > 10) {
					if(!flag){
					$('#scroll-menu').animate({'top':'-45'},150);
					$('nav.main').show();
					}
					flag=true;
				}
			});
		} else {
			$(window).unbind('scroll');
		}
	});
	
	$('header .main-menu-nav').mobileMenu();
	
	$("html").niceScroll();
	
	$('.search-api-sorts a').removeClass('active');
	
	$('.checkout-review').addClass('table');
  
  $('.dropdown-toggle').dropdown()
  
  $('input[type="submit"]').addClass('btn');
  
  $('ul.menu').superfish({delay	: 100});
  
  $(".cart-empty-block").html("<button class='btn btn-small'><i class='icon-shopping-cart'></i>0 Items</div>");

  $("a[rel^='prettyPhoto']").prettyPhoto();
  
  $().UItoTop({ easingType: 'easeOutQuart' });

  $('#recent_projects').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#next",
	      key	: "right"
	    },
	    prev : {
	      button : "#prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: false
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });
	  
	  $('#store-carousel-list-wrap').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#store-next",
	      key	: "right"
	    },
	    prev : {
	      button : "#store-prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: true
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });
	  
	  $('#store-featured-carousel-list-wrap').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#store-featured-next",
	      key	: "right"
	    },
	    prev : {
	      button : "#store-featured-prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: true
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });

});;
  jQuery(document).ready(function ($) {
    
    $("#color-nav li ").click(function() { 
      $("link.switch").attr("href",$(this).attr('rel'));
    });
   
	  $('#slideout').hover(function() {
	    $(this).animate({left:'0px'}, {queue:false, duration: 500});
	  }, 
	  function() {
	    $(this).animate({left:'-185px'}, {queue:false, duration: 500});
	  });
	  
    $("#color-nav li").click(function() { 
      $("link.switch").attr("href",$(this).attr('class'));
    });
    
    $(".grunge-wall").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/grunge_wall.png)");
    });
    
    $(".brushed-alu").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/brushed_alu.png)");
    });
    
    $(".retina-wood").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/retina_wood.png)");
    });
    
    $(".noisy-grid").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/noisy_grid.png)");
    });
    
    $(".nistri").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/nistri.png)");
    });
    
    $(".cartographer").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/cartographer.png)");
    });
    
    $(".illusion").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/illusion.png)");
    });

    $(".dark-wood").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/dark_wood.png)");
    });
        
    $(".switch_wide").click(function() {
      $('#content-wrap').css({ 'max-width': '100%', 'margin': '0 auto', 'margin-top': '0px', 'padding': '20px 20px 0px 20px' });
      $('#footer-wrap').css({ 'max-width': '100%', 'margin-bottom': '0px'});
      $('.bg_patterns_wrap').css({ 'display': 'none'});
    });

    $(".switch_boxed").click(function() {
      $('#content-wrap').css({ 'max-width': '1200px', 'margin': '0 auto', 'margin-top': '20px', 'padding': '20px 20px 0px 20px'});
      $('#footer-wrap').css({ 'max-width': '1240px'});
      $('.bg_patterns_wrap').css({ 'display': 'block'});

    });
      
  });;
