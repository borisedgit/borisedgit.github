var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DaymenuService } from '../services';
var ShowMenuComponent = (function () {
    function ShowMenuComponent(daymenuService) {
        var _this = this;
        this.daymenuService = daymenuService;
        this.weekNumber = 1;
        this.day1 = false;
        this.day2 = false;
        this.day3 = false;
        this.day4 = false;
        this.day5 = false;
        this.day6 = true;
        this.day7 = false;
        this.daymenuService.weekMenuLoaded.subscribe(function (weekNumber) {
            _this.weekMenu = _this.daymenuService.weekMenu;
        });
    }
    ShowMenuComponent.prototype.toggleDays = function (day) {
        this.day1 = false;
        this.day2 = false;
        this.day3 = false;
        this.day4 = false;
        this.day5 = false;
        this.day6 = false;
        this.day7 = false;
        switch (day) {
            case 'day1':
                this.day1 = true;
                break;
            case 'day2':
                this.day2 = true;
                break;
            case 'day3':
                this.day3 = true;
                break;
            case 'day4':
                this.day4 = true;
                break;
            case 'day5':
                this.day5 = true;
                break;
            case 'day6':
                this.day6 = true;
                break;
            case 'day7':
                this.day7 = true;
                break;
        }
    };
    ShowMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.daymenuService.getWeekMenuObservable('2')
            .do(function () { return console.log('here...'); })
            .subscribe(function (weekMenu) { return _this.weekMenu = weekMenu.json(); });
    };
    return ShowMenuComponent;
}());
ShowMenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './showmenu.component.html',
        styleUrls: ['./showmenu.component.css']
    }),
    __metadata("design:paramtypes", [DaymenuService])
], ShowMenuComponent);
export { ShowMenuComponent };
//# sourceMappingURL=../../../../../src/app/menu/showmenu.component.js.map