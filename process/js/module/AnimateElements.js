class AnimateElements{
    constructor(){


    };

    animate(animationName, domElement, animateTime, alphaValueStart, alphaValueEnd, yValueStart, yValueStay, yValueEnd, skewYStart, skewYEnd, rotationXStart, rotationXEnd, ease, delayTime, staggerTime){


        console.log('hiiii testing');

         let timeline = new TimelineLite();
             timeline
                 .set(domElement, {autoAlpha: alphaValueStart, opacity: alphaValueStart, y: yValueStart, skewY: skewYStart, rotationX: rotationXStart})
                 .staggerTo(domElement, animateTime, {opacity: alphaValueEnd, autoAlpha: alphaValueEnd, y: yValueStay, skewY: skewYEnd, rotationX: rotationXEnd, ease: ease}, staggerTime)
                 .staggerFrom(domElement, animateTime, {delay: delayTime, opacity: alphaValueStart, autoAlpha: alphaValueStart, y: yValueEnd, skewY: skewYEnd, rotationX: rotationXStart, ease: ease}, staggerTime);


        return timeline;


    };
};

export default AnimateElements;

