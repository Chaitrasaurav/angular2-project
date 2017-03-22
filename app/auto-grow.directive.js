System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective() {
                    /* constructor(private el:ElementRef, private renderer:Renderer){
                     }
                 
                     onFocus(){
                         this.renderer.setElementStyle(this.el, 'width', '200')
                     }
                 
                     onBlur(){
                         this.renderer.setElementStyle(this.el, 'width', '100')
                     } */
                    this.width = 120;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.width = 500;
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.width = 120;
                };
                __decorate([
                    core_1.HostBinding('style.width.px'), 
                    __metadata('design:type', Number)
                ], AutoGrowDirective.prototype, "width", void 0);
                __decorate([
                    core_1.HostListener('focus'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoGrowDirective.prototype, "onFocus", null);
                __decorate([
                    core_1.HostListener('blur'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AutoGrowDirective.prototype, "onBlur", null);
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]' /*,
                        host:{
                            '(focus)':'onFocus()',
                            '(blur)': 'onBlur()'
                        } */
                    }), 
                    __metadata('design:paramtypes', [])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map