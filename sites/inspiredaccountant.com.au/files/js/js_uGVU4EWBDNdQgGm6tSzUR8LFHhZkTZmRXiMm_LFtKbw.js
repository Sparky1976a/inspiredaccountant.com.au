/*!
 * jQuery Fraction Slider v1.0
 * http://fractionslider.jacksbox.de
 *
 * Author: Mario Jäckle
 * eMail: support@jacksbox.de
 *
 * Copyright 2013, jacksbox.design
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Special thanks to: Lietzi (https://github.com/lietzi) for contributing
 */
!function(t){var e=null,n={init:function(n){var a=t.extend({slideTransition:"none",slideTransitionSpeed:2e3,slideEndAnimation:!0,position:"0,0",transitionIn:"left",transitionOut:"left",fullWidth:!1,delay:0,timeout:2e3,speedIn:2500,speedOut:1e3,easeIn:"easeOutExpo",easeOut:"easeOutCubic",controls:!1,pager:!1,autoChange:!0,pauseOnHover:!1,backgroundAnimation:!1,backgroundElement:null,backgroundX:500,backgroundY:500,backgroundSpeed:2500,backgroundEase:"easeOutCubic",responsive:!1,increase:!1,dimensions:"",startCallback:null,startNextSlideCallback:null,stopCallback:null,pauseCallback:null,resumeCallback:null,nextSlideCallback:null,prevSlideCallback:null,pagerCallback:null},n);return this.each(function(){e=new i(this,a)})},pause:function(){e.pause(!0)},resume:function(){e.resume()},stop:function(){e.stop()},start:function(){e.start()},startNextSlide:function(){e.startNextSlide()}},i=function(e,n){function i(){if(n.controls&&(G.append('<a href="#" class="prev"></a><a href="#" class="next" ></a>'),G.find(".next").bind("click",function(){return b()}),G.find(".prev").bind("click",function(){return h()})),n.pauseOnHover&&G.bind({mouseenter:function(){l(!1)},mouseleave:function(){o()}}),n.fullWidth?G.css({overflow:"visible"}):G.css({overflow:"hidden"}),n.pager){var e="boolean"!=typeof n.pager;J=e?n.pager:t('<div class="fs-pager-wrapper"></div>'),e?J.addClass("fs-custom-pager-wrapper"):G.append(J)}G.children(".slide").each(function(i){var a=t(this);if(a.children().attr("rel",i).addClass("fs_obj"),a.children("[data-fixed]").addClass("fs_fixed_obj"),n.pager||e){var r=t('<a rel="'+i+'" href="#"></a>').bind("click",function(){return f(this)});J.append(r)}}),n.pager&&(J=t(J).children("a")),n.responsive&&W(),G.find(".fs_loader").length>0&&G.find(".fs_loader").remove(),a()}function a(){P.stop=!1,P.pause=!1,P.running=!0,g("slide"),p(n.startCallback)}function r(){P.stop=!1,P.pause=!1,P.running=!0,c(),p(n.startNextSlideCallback)}function s(){P.stop=!0,P.running=!1,G.find(".slide").stop(!0,!0),G.find(".fs_obj").stop(!0,!0).removeClass("fs-animation"),z(X),p(n.stopCallback)}function l(t){P.pause=!0,P.running=!1,t&&G.find(".fs-animation").finish(),p(n.pauseCallback)}function o(){P.stop=!1,P.pause=!1,P.running=!0,P.slideComplete?g("slide"):P.stepComplete?g("step"):P.finishedObjs<P.maxObjs||g(P.currentStep<P.maxStep?"step":"slide"),p(n.resumeCallback)}function c(){P.lastSlide=P.currentSlide,P.currentSlide+=1,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.nextSlideCallback)}function u(){P.lastSlide=P.currentSlide,P.currentSlide-=1,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.prevSlideCallback)}function d(t){P.lastSlide=P.currentSlide,P.currentSlide=t,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.pagerCallback)}function p(e){t.isFunction(e)&&e.call(this,G,P.currentSlide,P.lastSlide,P.currentStep)}function f(e){var n=parseInt(t(e).attr("rel"));return n!=P.currentSlide&&(s(),d(n)),!1}function h(){return s(),u(),!1}function b(){return s(),c(),!1}function g(t){if(!P.pause&&!P.stop&&P.running)switch(t){case"slide":P.slideComplete=!1,m();break;case"step":P.stepComplete=!1,O();break;case"obj":j()}}function m(){var t=n.timeout;P.init?(P.init=!1,v(!0)):X.push(setTimeout(function(){0==P.maxSlide&&1==P.running||(P.lastSlide=P.currentSlide,P.currentSlide+=1,v())},t))}function v(t){if(G.find(".active-slide").removeClass("active-slide"),P.currentSlide>P.maxSlide&&(P.currentSlide=0),P.currentSlide<0&&(P.currentSlide=P.maxSlide),F.currentSlide=G.children(".slide:eq("+P.currentSlide+")").addClass("active-slide"),0==F.currentSlide.length&&(P.currentSlide=0,F.currentSlide=G.children(".slide:eq("+P.currentSlide+")")),null!=P.lastSlide&&(P.lastSlide<0&&(P.lastSlide=P.maxSlide),F.lastSlide=G.children(".slide:eq("+P.lastSlide+")")),t?F.animation="none":(F.animation=F.currentSlide.attr("data-in"),null==F.animation&&(F.animation=n.slideTransition)),n.slideEndAnimation&&null!=P.lastSlide)E();else switch(F.animation){case"none":S(),x();break;case"scrollLeft":S(),x();break;case"scrollRight":S(),x();break;case"scrollTop":S(),x();break;case"scrollBottom":S(),x();break;default:S()}}function S(){n.backgroundAnimation&&R(),n.pager&&(J.removeClass("active"),J.eq(P.currentSlide).addClass("active")),C(),F.currentSlide.children().hide(),P.currentStep=0,P.currentObj=0,P.maxObjs=0,P.finishedObjs=0,F.currentSlide.children("[data-fixed]").show(),N()}function k(t){null!=F.lastSlide&&F.lastSlide.hide(),t.hasClass("active-slide")&&g("step")}function x(){null!=F.lastSlide&&"none"!=F.animation&&M()}function w(){}function C(){var e=F.currentSlide.children(),n=0;e.each(function(){var e=parseFloat(t(this).attr("data-step"));n=e>n?e:n}),P.maxStep=n}function O(){var t;t=0==P.currentStep?F.currentSlide.children('*:not([data-step]):not([data-fixed]), *[data-step="'+P.currentStep+'"]:not([data-fixed])'):F.currentSlide.children('*[data-step="'+P.currentStep+'"]:not([data-fixed])'),P.maxObjs=t.length,Y=t,P.maxObjs>0?(P.currentObj=0,P.finishedObjs=0,g("obj")):y()}function y(){return P.stepComplete=!0,P.currentStep+=1,P.currentStep>P.maxStep?void(n.autoChange&&(P.currentStep=0,P.slideComplete=!0,g("slide"))):void g("step")}function j(){var e=t(Y[P.currentObj]);e.addClass("fs-animation");var i=e.attr("data-position"),a=e.attr("data-in"),r=e.attr("data-delay"),s=e.attr("data-time"),l=e.attr("data-ease-in"),o=e.attr("data-special");i=null==i?n.position.split(","):i.split(","),null==a&&(a=n.transitionIn),null==r&&(r=n.delay),null==l&&(l=n.easeIn),L(e,i,a,r,s,l,o),P.currentObj+=1,P.currentObj<P.maxObjs?g("obj"):P.currentObj=0}function I(t){t.removeClass("fs-animation"),t.attr("rel")==P.currentSlide&&(P.finishedObjs+=1,P.finishedObjs==P.maxObjs&&y())}function E(){var e=F.lastSlide.children(":not([data-fixed])");e.each(function(){var e=t(this),i=e.position(),a=e.attr("data-out"),r=e.attr("data-ease-out");null==a&&(a=n.transitionOut),null==r&&(r=n.easeOut),T(e,i,a,null,r)}).promise().done(function(){x(),S()})}function N(){var t=F.currentSlide,e={},i={},a=n.slideTransitionSpeed,r=F.animation;switch(n.responsive?unit="%":unit="px",r){case"slideLeft":e.left=K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideTop":e.left="0"+unit,e.top=-Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideBottom":e.left="0"+unit,e.top=Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideRight":e.left=-K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"fade":e.left="0"+unit,e.top="0"+unit,e.display="block",e.opacity=0,i.opacity=1;break;case"none":e.left="0"+unit,e.top="0"+unit,e.display="block",a=0;break;case"scrollLeft":e.left=K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollTop":e.left="0"+unit,e.top=-Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollBottom":e.left="0"+unit,e.top=Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollRight":e.left=-K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit}t.css(e).animate(i,a,"linear",function(){k(t)})}function M(){var t={},e=n.slideTransitionSpeed,i=null,a=F.animation;switch(i=n.responsive?"%":"px",a){case"scrollLeft":t.left=-K+i,t.top="0"+i;break;case"scrollTop":t.left="0"+i,t.top=Z+i;break;case"scrollBottom":t.left="0"+i,t.top=-Z+i;break;case"scrollRight":t.left=K+i,t.top="0"+i;break;default:e=0}F.lastSlide.animate(t,e,"linear",function(){w()})}function L(e,i,a,r,s,l,o){var c={},u={},d=n.speedIn,p=null;switch(p=n.responsive?"%":"px",null!=s&&""!=s&&(d=s-r),c.opacity=1,a){case"left":c.top=i[0],c.left=K;break;case"bottomLeft":c.top=Z,c.left=K;break;case"topLeft":c.top=-1*e.outerHeight(),c.left=K;break;case"top":c.top=-1*e.outerHeight(),c.left=i[1];break;case"bottom":c.top=Z,c.left=i[1];break;case"right":c.top=i[0],c.left=-V-e.outerWidth();break;case"bottomRight":c.top=Z,c.left=-V-e.outerWidth();break;case"topRight":c.top=-1*e.outerHeight(),c.left=-V-e.outerWidth();break;case"fade":c.top=i[0],c.left=i[1],c.opacity=0,u.opacity=1;break;case"none":c.top=i[0],c.left=i[1],c.display="none",d=0}u.top=i[0],u.left=i[1],u.left=u.left+p,u.top=u.top+p,c.left=c.left+p,c.top=c.top+p,X.push(setTimeout(function(){if("cycle"==o&&e.attr("rel")==P.currentSlide){var i=e.prev();if(i.length>0){var a=t(i).attr("data-position").split(",");a={top:a[0],left:a[1]};var r=t(i).attr("data-out");null==r&&(r=n.transitionOut),T(i,a,r,d)}}e.css(c).show().animate(u,d,l,function(){I(e)}).addClass("fs_obj_active")},r))}function T(t,e,i,a,r){var s={},l={},o=null;a=n.speedOut,o=n.responsive?"%":"px";var c=t.outerWidth(),u=t.outerHeight();switch(n.responsive&&(c=q(c,$),u=q(u,D)),i){case"left":l.left=-V-100-c;break;case"bottomLeft":l.top=Z,l.left=-V-100-c;break;case"topLeft":l.top=-u,l.left=-V-100-c;break;case"top":l.top=-u;break;case"bottom":l.top=Z;break;case"right":l.left=K;break;case"bottomRight":l.top=Z,l.left=K;break;case"topRight":l.top=-u,l.left=K;break;case"fade":s.opacity=1,l.opacity=0;break;case"hide":l.display="none",a=0;break;default:l.display="none",a=0}"undefined"!=typeof l.top&&l.top.toString().indexOf("px")>0&&(l.top=l.top.substring(0,l.top.length-2),n.responsive&&(l.top=q(l.top,D))),"undefined"!=typeof l.left&&l.left.toString().indexOf("px")>0&&(l.left=l.left.substring(0,l.left.length-2),n.responsive&&(l.left=q(l.left,$))),l.left=l.left+o,l.top=l.top+o,t.css(s).animate(l,a,r,function(){t.hide()}).removeClass("fs_obj_active")}function R(){var e;e=null==n.backgroundElement||""==n.backgroundElement?G.parent():t(n.backgroundElement);var i=e.css("background-position");i=i.split(" ");var a=n.backgroundX,r=n.backgroundY,s=Number(i[0].replace(/[px,%]/g,""))+Number(a),l=Number(i[1].replace(/[px,%]/g,""))+Number(r);e.animate({backgroundPositionX:s+"px",backgroundPositionY:l+"px"},n.backgroundSpeed,n.backgroundEase)}function W(){var i=n.dimensions.split(","),a=Q();$=i[0],D=i[1],n.increase||t(e).css({maxWidth:$+"px"});var r=G.children(".slide").find("*");r.each(function(){var e=t(this),n=null,i=null,r=null;if(null!=e.attr("data-position")){var s=e.attr("data-position").split(",");n=q(s[1],$),i=q(s[0],D),e.attr("data-position",i+","+n)}null!=e.attr("width")&&""!=e.attr("width")?(r=e.attr("width"),n=q(r,$),e.attr("width",n+"%"),e.css("width",n+"%")):"0px"!=e.css("width")?(r=e.css("width"),r.indexOf("px")>0&&(r=r.substring(0,r.length-2),n=q(r,$),e.css("width",n+"%"))):"img"==e.prop("tagName").toLowerCase()&&-1!=a?(r=_(e),n=q(r,$),e.css("width",n+"%").attr("width",n+"%")):"img"==e.prop("tagName").toLowerCase()&&(r=e.get(0).width,n=q(r,$),e.css("width",n+"%")),null!=e.attr("height")&&""!=e.attr("height")?(r=e.attr("height"),i=q(r,D),e.attr("height",i+"%"),e.css("height",i+"%")):"0px"!=e.css("height")?(r=e.css("height"),r.indexOf("px")>0&&(r=r.substring(0,r.length-2),i=q(r,D),e.css("height",i+"%"))):"img"==e.prop("tagName").toLowerCase()&&-1!=a?(r=H(e),i=q(r,D),e.css("height",i+"%").attr("height",i+"%")):"img"==e.prop("tagName").toLowerCase()&&(r=e.get(0).height,i=q(r,D),e.css("height",i+"%")),e.attr("data-fontsize",e.css("font-size")),e.attr("data-letterspacing",e.css("letter-spacing"))}),G.css({width:"auto",height:"auto"}).append('<div class="fs-stretcher" style="width:'+$+"px; height:"+D+'px"></div>'),A(),t(window).bind("resize",function(){A()})}function _(t){var e=new Image;return e.src=t.attr("src"),e.width}function H(t){var e=new Image;return e.src=t.attr("src"),e.height}function A(){var e=G.innerWidth();G.innerHeight();if($>=e||n.increase){var i=$/D,a=e/i;G.find(".fs-stretcher").css({width:e+"px",height:a+"px"})}U=t("body").width();var r=G.width();V=q((U-r)/2,$),K=100,n.fullWidth&&(K=100+2*V),Z=100,(0==P.init||$>e)&&B()}function B(){var e=null,n=G.children(".slide").find("*");n.each(function(){obj=t(this);var n=obj.attr("data-fontsize");n.indexOf("px")>0&&(n=n.substring(0,n.length-2),e=q(n,D)*(G.find(".fs-stretcher").height()/100),obj.css("fontSize",e+"px"),obj.css("lineHeight","100%"));var i=obj.attr("data-letterspacing");i.indexOf("px")>0&&(i=i.substring(0,i.length-2),e=q(i,D)*(G.find(".fs-stretcher").height()/100),obj.css("letterSpacing",e+"px"))})}function q(t,e){return t/(e/100)}function z(e){var n=e.length;t.each(e,function(t){clearTimeout(this),t==n-1&&(e=[])})}function Q(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}return t}var P={init:!0,running:!1,pause:!1,stop:!1,slideComplete:!1,stepComplete:!1,controlsActive:!0,currentSlide:0,lastSlide:null,maxSlide:0,currentStep:0,maxStep:0,currentObj:0,maxObjs:0,finishedObjs:0},F={currentSlide:null,lastSlide:null,animationkey:"none"},X=[],Y=null,$=null,D=null;t(e).wrapInner('<div class="fraction-slider" />');var G=t(e).find(".fraction-slider"),J=null;P.maxSlide=G.children(".slide").length-1;var K=G.width(),U=t("body").width(),V=0;n.fullWidth&&(V=(U-K)/2,K=U);var Z=G.height();i(),this.start=function(){a()},this.startNextSlide=function(){r()},this.stop=function(){s()},this.pause=function(){l(!1)},this.resume=function(){o()}};t.fn.fractionSlider=function(e){return n[e]?n[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.tooltip"):n.init.apply(this,arguments)};var a={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,e){a[e]=function(e){return Math.pow(e,t+2)}}),t.extend(a,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0==t||1==t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(a,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?n(2*t)/2:1-n(-2*t+2)/2}})}(jQuery);;
(function($){
/**
 * Toggle the visibility of the scroll to top link.
 */
 
Drupal.behaviors.scroll_to_top = {
  attach: function (context, settings) {
	// append  back to top link top body if it is not
	var exist= jQuery('#back-top').length; // exist = 0 if element doesn't exist
	if(exist == 0){ // this test is for fixing the ajax bug 
		$("body").append("<p id='back-top'><a href='#top'><span id='button'></span><span id='link'>" + settings.scroll_to_top.label + "</span></a></p>");
	}
	// Preview function
	$("input").change(function () {
		// building the style for preview
		var style="<style>#scroll-to-top-prev-container #back-top-prev span#button-prev{ background-color:"+$("#edit-scroll-to-top-bg-color-out").val()+";} #scroll-to-top-prev-container #back-top-prev span#button-prev:hover{ background-color:"+$("#edit-scroll-to-top-bg-color-hover").val()+" }</style>"
		// building the html content of preview
		var html="<p id='back-top-prev' style='position:relative;'><a href='#top'><span id='button-prev'></span><span id='link'>";
		// if label enabled display it
		if($("#edit-scroll-to-top-display-text").attr('checked')){
		html+=$("#edit-scroll-to-top-label").val();
		}
		html+="</span></a></p>";
		// update the preview
		$("#scroll-to-top-prev-container").html(style+html);
	});
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
		// Adding IE8 support
		  var scrollTop = 0;
		  if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		  }
      if ($(this).scrollTop() > 100 || scrollTop > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	}
};
})(jQuery);
;
/**
 * @file
 * Javascript for views-accordion.
 */
Drupal.behaviors.views_accordion = {
  attach: function(context) {
    if(Drupal.settings.views_accordion){
      (function ($) {
        $.each(Drupal.settings.views_accordion, function(id) {
          /* Our view settings */
          var usegroupheader = this.usegroupheader;
          var viewname = this.viewname;
          var display = this.display;

          /* Our panel heightStyle setting */
          var heightStyle = (this.autoheight == 1) ? 'auto' : (this.fillspace == 1 ? 'fill' : 'content');

          /* the selectors we have to play with */
          var displaySelector = '.view-id-' + viewname + '.view-display-id-' + display + ' > .view-content';
          var headerSelector = this.header;

          /* The row count to be used if Row to display opened on start is set to random */
          var row_count = 0;

          /* Prepare our markup for jquery ui accordion */
          $(displaySelector + ' ' + headerSelector + ':not(.ui-accordion-header)').each(function(i){
            // Hash to use for accordion navigation option.
            var hash = "#" + viewname + "-" + display + "-" + i;
            var $this = $(this);
            var $link = $this.find('a');
            // if the header is not already using an anchor tag, add one
            if($link.length == 0){
              // setup anchor tag for navigation
              $this.wrapInner('<a href="' + hash + '"></a>');
            }
            // if there are already, they wont be clickable with js enabled, we'll use them for accordion navigation
            else{
              // @FIXME ?
              // We are currently destroying the original link, though search crawlers will stil see it.
              // Links in accordions are NOT clickable and leaving them would kill deep linking.
              $link.get(0).href = hash;
            }

            // Wrap the accordion content within a div if necessary
            if (!usegroupheader) {
              $this.siblings().wrapAll('<div></div>');
            }
            row_count++;
          });

          if (this.rowstartopen == 'random') {
            this.rowstartopen = Math.floor(Math.random() * row_count);
          }

          var options = {};

          if (this.newoptions) {
            // Slide was removed from jQuery UI easings, provide sensible fallbacks.
            if (this.animated === 'slide' || this.animated === 'bounceslide') {
              this.animated = 'swing';
            }

            /* jQuery UI accordion options format changed for jquery >= 1.9 */
            options = {
              header: headerSelector,
              active: this.rowstartopen,
              collapsible: this.collapsible,
              event: this.event,
              heightStyle: this.autoheight ? 'auto' : this.fillspace ? 'fill' : 'content',
            };
            if (this.animated === false) {
              options.animate = false;
            }
            else {
              options.animate = {
                easing: this.animated,
                duration: this.duration,
              }
            }
          }
          else {
            options = {
              header: headerSelector,
              animated: this.animated,
              active: this.rowstartopen,
              collapsible: this.collapsible,
              autoHeight: this.autoheight,
              heightStyle: heightStyle,
              event: this.event,
              fillSpace: this.fillspace,
              navigation: this.navigation,
              clearstyle: this.clearstyle
            };
          }
          /* jQuery UI accordion call */
          $(displaySelector + ':not(.ui-accordion)').accordion(options);
        });
      })(jQuery);
    }
  }
};
;
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, https://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - https://mydomain.com/node/1 -> /node/1
 * - https://example.com/foo/bar -> https://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
