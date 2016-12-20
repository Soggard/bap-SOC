/*
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
*/
$(document).ready(function(){ // Appel via jQuery

// Initiation controlleur ScrollMagic

    var controller = new ScrollMagic.Controller();





    var IntroTween = TweenMax.from("#planète, #fusée-seule, #personne", 1, {scale: 0.7, ease: Expo.easeOut
    });
    var Intro = new ScrollMagic.Scene({
        triggerElement: ".svg-wrapper",
        duration: 300,
        triggerHook: 0.2,
    })
        .setTween(IntroTween)
        .addIndicators({name:"Scale Élements"})
        .addTo(controller);



    var TitleFadeIn = TweenMax.from(".titles-wrapper", 7, {autoAlpha: 0
    });
    var TitleFadeInScene = new ScrollMagic.Scene({
        triggerElement: "#titles-wrapper",
        duration: 400,
        triggerHook: 0.2,
    })
        .setTween(TitleFadeIn)
        .addTo(controller);



    var FuséeTL= TweenMax.from(".droite-fusée", 7, {x: +200, autoAlpha: 0});
    var FuséeTLScene = new ScrollMagic.Scene({
        triggerElement: '.fusee',
        triggerHook: 0.6,
        duration: 500
    })
        .setTween(FuséeTL)
        .addIndicators()
        .addTo(controller);

    var FuséeTL= TweenMax.from(".gauche-fusée", 7, {x: -200, autoAlpha: 0});
    var FuséeTLScene = new ScrollMagic.Scene({
        triggerElement: '.fusee',
        triggerHook: 0.6,
        duration: 500
    })
        .setTween(FuséeTL)
        .addIndicators()
        .addTo(controller);

    var FuséeTL= TweenMax.from(".haut-fusée", 7, {y: -200, autoAlpha: 0});
    var FuséeTLScene = new ScrollMagic.Scene({
        triggerElement: '.fusee',
        triggerHook: 0.6,
        duration: 500
    })
        .setTween(FuséeTL)
        .addIndicators()
        .addTo(controller);






})(jQuery);
