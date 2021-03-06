var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var core_1 = require("angular2/core");
var router_1 = require('angular2/router');
//import {Http, HTTP_PROVIDERS} from 'angular2/http'
core_1.enableProdMode();
browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    core_1.provide(Window, { useValue: window })]).then(function () {
    var toggle = document.getElementsByClassName('navbar-toggle')[0];
    var collapse = document.getElementsByClassName('navbar-collapse')[0];
    var anchors = document.querySelectorAll('.navbar-nav a');
    var toggleMenu = function (e) {
        collapse.classList.toggle('collapse');
        collapse.classList.toggle('in');
        if (e.srcElement instanceof HTMLAnchorElement) {
            for (var i2 = 0; i2 < anchors.length; i2++) {
                var a = anchors[i2];
                a.parentElement.classList.remove('active');
                if (a.hash === e.srcElement.hash && e.srcElement.hash !== "#")
                    a.parentElement.classList.add('active');
            }
        }
    };
    toggle.addEventListener('click', toggleMenu, false);
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', toggleMenu, false);
    }
    window.onscroll = function () {
        var featureEl = document.getElementById('featured');
        var style = window.getComputedStyle(featureEl);
        var anchors = document.querySelectorAll('.navbar-nav a');
        for (var i = 0; i < anchors.length; i++) {
            var a = anchors[i];
            var ref = a.getAttribute("href").substr(1);
            if (ref.trim() !== '') {
                var e = document.getElementById(ref);
                if (e.offsetTop <= (window.scrollY || window.pageYOffset) && e.offsetTop + e.clientHeight > (window.scrollY || window.pageYOffset)) {
                    a.parentElement.classList.add('active');
                }
                else {
                    a.parentElement.classList.remove('active');
                }
            }
        }
        var el = document.querySelector('header nav');
        //console.log(' ==> ' + (window.scrollY || window.pageYOffset) + ' | ' + Number(style.getPropertyValue('height').replace('px', '')));
        if ((window.scrollY || window.pageYOffset) >= Number(style.getPropertyValue('height').replace('px', ''))) {
            el.setAttribute('style', 'padding: 0');
            el.classList.add("mini-bar");
        }
        else {
            document.querySelector('header nav').setAttribute('style', 'padding: 30px 0');
            el.classList.remove("mini-bar");
        }
    };
    // safai shim
    //var lastTime = 0;
    //var vendors = ['ms', 'moz', 'webkit', 'o'];
    //for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    //    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    //    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    //}
    //if (!window.requestAnimationFrame) {
    //    window.requestAnimationFrame = <(callback: FrameRequestCallback) => number>((callback: any, element: any) : any => {
    //        var currTime = new Date().getTime();
    //        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    //        var id = window.setTimeout(() => { callback(currTime + timeToCall); }, timeToCall);
    //        lastTime = currTime + timeToCall;
    //        return id;
    //    });
    //};
    //if (!window.cancelAnimationFrame)
    //    window.cancelAnimationFrame = (id) => {
    //        clearTimeout(id);
    //    };
});
//# sourceMappingURL=main.js.map