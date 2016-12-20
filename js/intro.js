$(document).ready(function(){ // Appel via jQuery

// Initiation controlleur ScrollMagic 
    
var controller = new ScrollMagic.Controller();
    
    
var IntroTween = TweenMax.to("#tableau_centre", 1, {scale: 0.5, ease: Linear.easeNone
});
    
    // Attachement des différents élements du SVG au scroll 
    var Intro = new ScrollMagic.Scene({
        triggerElement: "#Fond", // Test target : tableau central
        duration: $(window).height() // Durée = taille de l'écran
        triggerHook: 0,
        reverse: true,
    })
    .setTween(IntroTween)
    .addTo(controller);






    })(jQuery);
