
/*
*
* OBJECTIVE:
*
*  A MASTER TIME-LINE WILL CONTROL/HOLD ALL OTHER TIME-LINES:
*  tlLetters FROM LETTERANIMATIONS.JS
*  tlCaptions FROM CAPTIONSANIMATION.JS
*
*
*
*
* */
import SplitText from './SplitText';
// import { TimelineLite } from 'gsap';

class IntroAnimations{
    constructor(){

        this.videoSmoke = document.querySelector('#smoke-video');
        this.masterTimeline();

    };


    playVideo(that){

        that.videoSmoke.playbackRate = 1;
        that.videoSmoke.play();

    }

    titleTimeline(){


        let splitVal = new SplitText().implementDomElement(document.querySelector('.js-company-name'));

        let timeline = new TimelineLite();
        timeline
            .set(splitVal, {autoAlpha: 0, opacity: 0, y: 40})
            .staggerTo(splitVal, .8, {opacity: 1, autoAlpha: 1, y: 0, ease: Power4.easeInOut}, 0.05)
            .staggerTo(splitVal, .8, {delay: 1, opacity: 0, autoAlpha: 0, y: -40, ease: Power4.easeInOut}, 0.05);

        return timeline;


    };

    captionsTimeline(){

        let captions = document.querySelectorAll('.js-loading-captions'),
            timeline = new TimelineLite();

        timeline
            .set(captions, {autoAlpha: 0, opacity: 0, y: 40})
            .staggerTo(captions, 1.2, {opacity: 1, autoAlpha: 1, y: 0, ease: Power4.easeInOut}, 0.05)
            .staggerTo(captions, 1.2, {delay: 3, opacity: 0, autoAlpha: 0, y: -40, ease: Power4.easeInOut}, 0.05);

        return timeline;

    }

    landTimeline(){

        let that              = this,
            jsNavigation      = document.querySelector('#js-navigation'),
            jsScrollCta       = document.querySelector('#js-scroll-cta'),
            jsLandingCaptions = document.querySelectorAll('.js-landing-captions'),
            jsLandingCta      = document.querySelector('#js-purchase-tickets-cta');


        let tlLand = new TimelineLite()
            .set([jsNavigation, jsScrollCta], {opacity: 0, autoAlpha: 0})
            .set([jsLandingCaptions, jsLandingCta], {opacity: 0, autoAlpha: 0, y: 40, skewY: '8deg'})
            .call(that.playVideo, [that])
            .add(function(){

                that.videoSmoke.addEventListener('ended', function(e) {

                    e.preventDefault();
                    document.querySelector('.loading-section').parentNode.removeChild(document.querySelector('.loading-section'));

                });
            })
            .set([document.querySelector('.hero-section'), document.querySelector('.hero-section__bg-img')], {opacity: 1, autoAlpha: 1})
            .addLabel('video-done')
            .to(document.querySelector('.hero-section__bg-img'), 3, {scale: 1, ease: Power2.easeOut}, 'video-done')
            .staggerTo(jsLandingCaptions, 1, {opacity: 1, autoAlpha: 1, y: 0, skewY: '0deg', ease: Power4.easeOut}, '.2', '-=1.55')
            .to(jsLandingCta, .6, {opacity: 1, autoAlpha: 1, y: 0, skewY: '0deg', ease: Power4.easeInOut}, '-=1.4')
            .to([jsNavigation, jsScrollCta], 1, {opacity: 1, autoAlpha: 1}, '-=.9');

        return tlLand;
    };

    masterTimeline(){


        new TimelineMax()
            .add(this.titleTimeline())
            .add(this.captionsTimeline(), '-=.5')
            .add(this.landTimeline(), '-=1.2');
    };
};

export default IntroAnimations;