$(document).ready(function(){ // Appel via jQuery

// Initiation controlleur ScrollMagic 
    
var controller = new ScrollMagic.Controller();
    
    
var DecollageFuseeTween = TweenMax.to("#Trainees", 0.4, {scale: 1.7, ease: Linear.easeNone
});
    
var DecollageFusee = new ScrollMagic.Scene({
    triggerElement: ".svg-decollagefusee",
    duration: 3000,
    triggerHook: 0.1
})
.setTween(DecollageFuseeTween)
.addIndicators({name:"Scale Élements"})
.addTo(controller);

var DecollageFuseeTween = TweenMax.to("#Fusée", 0.4, {scale: 1.7, ease: Linear.easeNone
});
    
var DecollageFusee = new ScrollMagic.Scene({
    triggerElement: ".svg-decollagefusee",
    duration: 3000,
    triggerHook: 0.1
})
.setTween(DecollageFuseeTween)
.addIndicators({name:"Scale Élements"})
.addTo(controller);



var tween = TweenMax.fromTo('#nuages', 2,
    {
        opacity: 0.1,
    },
    {
        opacity: 1,
		repeat:-1,
		yoyo:true,
		
   
        
    }
);


    })(jQuery);