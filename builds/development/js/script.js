/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _IntroAnimations = __webpack_require__(1);

var _IntroAnimations2 = _interopRequireDefault(_IntroAnimations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vendor from 'Vendor';
//
// new Vendor();
new _IntroAnimations2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
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


var _SplitText = __webpack_require__(2);

var _SplitText2 = _interopRequireDefault(_SplitText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { TimelineLite } from 'gsap';

var IntroAnimations = function () {
    function IntroAnimations() {
        _classCallCheck(this, IntroAnimations);

        this.videoSmoke = document.querySelector('#smoke-video');
        this.masterTimeline();
    }

    _createClass(IntroAnimations, [{
        key: 'playVideo',
        value: function playVideo(that) {

            that.videoSmoke.playbackRate = 1;
            that.videoSmoke.play();
        }
    }, {
        key: 'titleTimeline',
        value: function titleTimeline() {

            var splitVal = new _SplitText2.default().implementDomElement(document.querySelector('.js-company-name'));

            var timeline = new TimelineLite();
            timeline.set(splitVal, { autoAlpha: 0, opacity: 0, y: 40 }).staggerTo(splitVal, .8, { opacity: 1, autoAlpha: 1, y: 0, ease: Power4.easeInOut }, 0.05).staggerTo(splitVal, .8, { delay: 1, opacity: 0, autoAlpha: 0, y: -40, ease: Power4.easeInOut }, 0.05);

            return timeline;
        }
    }, {
        key: 'captionsTimeline',
        value: function captionsTimeline() {

            var captions = document.querySelectorAll('.js-loading-captions'),
                timeline = new TimelineLite();

            timeline.set(captions, { autoAlpha: 0, opacity: 0, y: 40 }).staggerTo(captions, 1.2, { opacity: 1, autoAlpha: 1, y: 0, ease: Power4.easeInOut }, 0.05).staggerTo(captions, 1.2, { delay: 3, opacity: 0, autoAlpha: 0, y: -40, ease: Power4.easeInOut }, 0.05);

            return timeline;
        }
    }, {
        key: 'landTimeline',
        value: function landTimeline() {

            var that = this,
                jsNavigation = document.querySelector('#js-navigation'),
                jsScrollCta = document.querySelector('#js-scroll-cta'),
                jsLandingCaptions = document.querySelectorAll('.js-landing-captions'),
                jsLandingCta = document.querySelector('#js-purchase-tickets-cta');

            var tlLand = new TimelineLite().set([jsNavigation, jsScrollCta], { opacity: 0, autoAlpha: 0 }).set([jsLandingCaptions, jsLandingCta], { opacity: 0, autoAlpha: 0, y: 40, skewY: '8deg' }).call(that.playVideo, [that]).add(function () {

                that.videoSmoke.addEventListener('ended', function (e) {

                    e.preventDefault();
                    document.querySelector('.loading-section').parentNode.removeChild(document.querySelector('.loading-section'));
                });
            }).set([document.querySelector('.hero-section'), document.querySelector('.hero-section__bg-img')], { opacity: 1, autoAlpha: 1 }).addLabel('video-done').to(document.querySelector('.hero-section__bg-img'), 3, { scale: 1, ease: Power2.easeOut }, 'video-done').staggerTo(jsLandingCaptions, 1, { opacity: 1, autoAlpha: 1, y: 0, skewY: '0deg', ease: Power4.easeOut }, '.2', '-=1.55').to(jsLandingCta, .6, { opacity: 1, autoAlpha: 1, y: 0, skewY: '0deg', ease: Power4.easeInOut }, '-=1.4').to([jsNavigation, jsScrollCta], 1, { opacity: 1, autoAlpha: 1 }, '-=.9');

            return tlLand;
        }
    }, {
        key: 'masterTimeline',
        value: function masterTimeline() {

            new TimelineMax().add(this.titleTimeline()).add(this.captionsTimeline(), '-=.5').add(this.landTimeline(), '-=1.2');
        }
    }]);

    return IntroAnimations;
}();

;

exports.default = IntroAnimations;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import $ from 'jquery';
// import gsap from 'greensock';

/*
*
* OBJECTIVE: Retrieve h1 tag from user and break h1 text value into chars
*            and then animate each char onto the screen.
*            *Make it robust/provide options*
*
*            Task:
*            1. retrieve h1 tag/dom element
*            2. place the chars into the h1 via a span tag
*
* */

var SplitText = function () {
    function SplitText() {

        // this.implementDomElement(domElement);

        _classCallCheck(this, SplitText);
    }

    _createClass(SplitText, [{
        key: 'implementDomElement',
        value: function implementDomElement(domElement) {

            var localvar = domElement;

            var splitDomElement = localvar.textContent.split(''),
                span = void 0;
            var spans = [];

            localvar.textContent = '';
            var length = splitDomElement.length;
            for (var i = 0; i < length; i++) {
                span = document.createElement('span');
                span.textContent = splitDomElement[i];
                span.className = 'char-heading-primary';
                span.id = 'span' + (i + 1);

                if (i == 6 || i == 9 || i == 13) {
                    span.style.paddingRight = "2rem";
                }

                localvar.appendChild(span);
                spans.push(span);
            };

            // this.styleChars(spans);

            return spans;
        }
    }]);

    return SplitText;
}();

;

exports.default = SplitText;

/***/ })
/******/ ]);