$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });
    // get all slides
    var slides = document.querySelectorAll("div.slides");
    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i],
        })
            .setPin(slides[i])
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
   /* var test = new TimelineMax();
    test
        .from('.cls-14',0.5,{x:-200,autoAlpha: 0, ease:Power0.easeNone})
        .from('.test',0.5,{y:200, autoAlpha:0},{y:100,autoAlpha:1,ease:Back.easeInOut})
        .from('.cls-8',0.5,{y:-200,autoAlpha: 0, ease:Power0.easeNone})
        .from('.cls-4', 0.5, {autoAlpha: 0, ease:Power0.easeNone})
        .from('.cls-2', 0.5, {autoAlpha: 0, ease:Power0.easeNone})
        /!* .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)*!/
    ;
    var teste = new ScrollMagic.Scene({
        triggerElement:"div.slides",
        duration: '100%',
    })
        .setTween(test)
        .addIndicators
        .addTo(controller);*/
    
    
console.log('test');
    
    

});