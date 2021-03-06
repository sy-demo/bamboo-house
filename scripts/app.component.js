var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var carousel_1 = require('./components/ng2-bootstrap/carousel');
var router_1 = require('angular2/router');
var courses_component_1 = require('./components/menu/courses.component');
var course_component_1 = require('./components/menu/course.component');
var order_component_1 = require('./components/menu/order.component');
var soon_component_1 = require('./components/menu/soon.component');
var confirm_component_1 = require('./components/confirm.component');
var toast_component_1 = require('./components/toast.component');
var menu_service_1 = require('./services/menu.service');
var toast_service_1 = require('./services/toast.service');
var confirm_service_1 = require('./services/confirm.service');
var AppComponent = (function () {
    function AppComponent(window, toastService) {
        this.window = window;
        this.toastService = toastService;
        this.interval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        this.addSlide();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.toastService.activate("Application initialization completed.");
    };
    AppComponent.prototype.addSlide = function () {
        if (this.isMobile()) {
            this.slides.push({ image: 'images/meatball.m.jpg', text: 'Meatball' });
            this.slides.push({ image: 'images/pork.m.jpg', text: 'Pork' });
            this.slides.push({ image: 'images/lobster.m.jpg', text: 'Lobster' });
            this.slides.push({ image: 'images/sweet-sour-pork.m.jpg', text: 'Sweet Sour Pork' });
            this.slides.push({ image: 'images/duck.m.jpg', text: 'Duck' });
            this.slides.push({ image: 'images/egg-roll.m.jpg', text: 'Egg-roll' });
            this.slides.push({ image: 'images/brown-sauce-pork.m.jpg', text: 'Brown Sauce Pork' });
            this.slides.push({ image: 'images/chicken.m.jpg', text: 'Chicken' });
            this.slides.push({ image: 'images/chicken-shrimp.m.jpg', text: 'Chicken Shrimp' });
            this.slides.push({ image: 'images/combination.m.jpg', text: 'Combination' });
            this.slides.push({ image: 'images/crab-pot.m.jpg', text: 'Crab Pot' });
        }
        else {
            this.slides.push({ image: 'images/meatball.jpg', text: 'Meatball' });
            this.slides.push({ image: 'images/pork.jpg', text: 'Pork' });
            this.slides.push({ image: 'images/lobster.jpg', text: 'Lobster' });
            this.slides.push({ image: 'images/sweet-sour-pork.jpg', text: 'Sweet Sour Pork' });
            this.slides.push({ image: 'images/duck.jpg', text: 'Duck' });
            this.slides.push({ image: 'images/egg-roll.jpg', text: 'Egg-roll' });
            this.slides.push({ image: 'images/brown-sauce-pork.jpg', text: 'Brown Sauce Pork' });
            this.slides.push({ image: 'images/chicken.jpg', text: 'Chicken' });
            this.slides.push({ image: 'images/chicken-shrimp.jpg', text: 'Chicken Shrimp' });
            this.slides.push({ image: 'images/combination.jpg', text: 'Combination' });
            this.slides.push({ image: 'images/crab-pot.jpg', text: 'Crab Pot' });
        }
    };
    AppComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    AppComponent.prototype.isMobile = function () {
        var t = (navigator.userAgent || navigator.vendor);
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))
            return true && (!navigator.userAgent.match(/Opera|OPR\//));
        else
            return false;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/app.html',
            directives: [courses_component_1.CoursesComponent, course_component_1.CourseComponent, toast_component_1.ToastComponent, confirm_component_1.ConfirmComponent, carousel_1.CAROUSEL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.TOOLTIP_DIRECTIVES],
            providers: [menu_service_1.MenuService, toast_service_1.ToastService, confirm_service_1.ConfirmService]
        }),
        router_1.RouteConfig([
            { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent, useAsDefault: true },
            { path: '/course/:id', name: 'Course', component: course_component_1.CourseComponent },
            { path: '/order', name: 'Order', component: order_component_1.OrderComponent },
            { path: '/soon', name: 'Soon', component: soon_component_1.SoonComponent }
        ]),
        __param(0, core_1.Inject(Window)), 
        __metadata('design:paramtypes', [Window, toast_service_1.ToastService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map