var _loadedImages = 0;
	_imageArray = new Array('bgDark.jpg','bgEF.jpg','bgGamer.jpg','bgGirl.jpg','bgGirl2.jpg','bgMan.jpg','bgRobot.jpg','bgSky.jpg','clicktag.png','cisco_logo.svg','copy1.svg','copy2.svg','copy3.svg','copy4_1.svg','copy4_2.svg','copy4_3.svg','copy4_4.svg','copy4.svg','copy5.svg','cta.svg','ctaOver.svg');

var _tl = new TimelineMax(),
    _p0N = Power0.easeNone,
    _p1I = Power1.easeIn,
    _p1O = Power1.easeOut,
    _p1IO = Power1.easeInOut,
    _p2IO = Power2.easeInOut,
    _p4IO = Power4.easeOut
    ;

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) init();
}

function init(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

    css.addEventListener('load', initAnimations, false);
}

function elem(id){return document.querySelector(id)};

function actionButtons(){
	elem('#clicktag').addEventListener('mouseover', function(){
	        TweenMax.set('#cta', {backgroundImage:'url(ctaOver.svg)'});
	});

	elem('#clicktag').addEventListener('mouseout',function(){
		TweenMax.set('#cta', {backgroundImage:'url(cta.svg)'});
	});
}

function initAnimations(){
	// console.time('cloudsStop');
    _tl
  	// .timeScale(10)
    .addLabel('f1')
	.fromTo('.copy1',.25,{opacity:0},{opacity:1,ease:_p1IO},'f1')//.addPause()
	.fromTo('#bgRobot',1.5,{scale:1},{scale:1.1,x:10,ease:_p0N,onStart:function(){
		TweenMax.to('#bgSky',1.5,{x:150,ease:_p0N})
	}},'f1+=.25')

	.addLabel('f2','-=.25')
	.to('.f1',.25,{x:-310,ease:_p2IO},'f2')
	.fromTo('.f2',.2,{x:300},{x:0,ease:_p2IO},'f2')
	.fromTo('.copy2',.25,{opacity:0},{opacity:1,ease:_p1IO},'f2+=.5')
	.fromTo('#bgGirl',2,{scale:1,x:0},{scale:1.1,x:10,ease:_p0N,onStart:function(){
		TweenMax.to('#bgGirl2SVG',.5,{opacity:1,repeat:5,repeatDelay:.25,yoyo:true,ease:_p0N})
	}},'f2+=.25')

	.addLabel('f3','-=.25')
	.to('.f2',.25,{x:-310,ease:_p2IO},'f3')
	.fromTo('.f3',.2,{x:300},{x:0,ease:_p2IO},'f3')
	.fromTo('.copy3',.25,{opacity:0},{opacity:1,ease:_p1IO},'f3+=.25')
	.fromTo('#bgMan',2,{scale:1,x:0},{scale:1.05,x:10,ease:_p1IO},'f3+=.25')
	.fromTo('#bgGamer',2,{scale:1},{scale:1.05,y:5,onStart:function(){
		TweenMax.to('#gamerArmSVG',1.25,{x:15,y:-10,rotation:5,ease:_p0N})
	}},'f3+=.25')

	.addLabel('f4','-=.25')
	.to('.f3',.25,{x:-310,ease:_p2IO},'f4')
	.fromTo('#bgEF',.2,{x:370},{x:0,ease:_p2IO},'f4')
	.set(['#bg1','#bg2','#bg3'],{opacity:0})
	.fromTo('.copy4',.25,{opacity:0},{opacity:1,ease:_p1IO,onStart:function(){
		TweenMax.to('#bgEF',6.25,{y:250,ease:_p0N,onComplete:function(){
		// console.timeLog('cloudsStop');
		}})
	}},'f4+=.25')
	.to('#copy4_1',.05,{opacity:0,x:-40,ease:_p2IO},'f4+=1.25')
	.staggerFromTo('.copy4_t',.05,{opacity:0,x:-40,},{opacity:1,x:0,ease:_p2IO,repeat:1,repeatDelay:.75,yoyo:true},1,'f4+=1.35')
	.fromTo('#copy4_4',.05,{opacity:0,x:-40,},{opacity:1,x:0,ease:_p2IO},'+=.1')
	.to('.f4',.25,{opacity:0,ease:_p2IO},'+=1.25')

	.fromTo('.copy5',.25,{opacity:0},{opacity:1,ease:_p2IO},'+=.15')
	
	.addLabel('f5')
	.fromTo('.EF',.25,{opacity:0,ease:_p1IO},{opacity:1,ease:_p1IO},'+=.15')
	.to('#bgEF',2.25,{opacity:0,ease:_p1IO,onComplete:actionButtons},'-=2.25')

	time = _tl.totalDuration();
    console.log('AnimationTime:',time);
}
