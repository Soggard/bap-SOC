$(document).ready(function(){ // Appel via jQuery

// Initiation controlleur ScrollMagic 
    
var controller = new ScrollMagic.Controller();
    
    
var IntroTween = TweenMax.to("#tableau_centre", 1, {scale: 1.3, ease: Linear.easeNone
});
    
var Intro = new ScrollMagic.Scene({
    triggerElement: ".svg-wrapper",
    duration: 300,
    triggerHook: 0.5
})
.setTween(IntroTween)
.addIndicators({name:"Scale Élements"})
.addTo(controller);





    })(jQuery);
