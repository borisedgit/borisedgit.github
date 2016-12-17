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
import { DaymenuService, MealitemService } from '../services';
import { Router } from '@angular/router';
import * as Moment from 'moment';
var MenuComponent = (function () {
    function MenuComponent(daymenuService, mealitemService, router) {
        var _this = this;
        this.daymenuService = daymenuService;
        this.mealitemService = mealitemService;
        this.router = router;
        this.selectedDate = '';
        this.daymenuService.weekMenuLoaded.subscribe(function (weekNumber) {
            _this.weekMenu = _this.daymenuService.weekMenu;
        });
        if (typeof this.daymenuService.weekMenu == 'undefined') {
            this.weekMenu = this.daymenuService.weekMenu;
            this.daymenuService.getWeekMenu('1');
        }
        else {
            this.weekMenu = this.daymenuService.weekMenu;
        }
    }
    MenuComponent.prototype.ngOnDestroy = function () {
    };
    MenuComponent.prototype.ngOnInit = function () {
        if (!this.mealitemService.wereArraysInitialized()) {
            this.mealitemService.getMealArrays();
        }
    };
    MenuComponent.prototype.onSelectDate = function () {
        var m = Moment(this.selectedDate);
        this.daymenuService.getWeekMenu(this.selectedDate);
    };
    MenuComponent.prototype.onEditMeal = function (meal, day) {
        console.log(meal + ' ' + day);
        this.router.navigate(['../editdaymenu']);
    };
    MenuComponent.prototype.weekDayMeal = function (weekDay, meal) {
        this.daymenuService.weekDay = weekDay;
        this.daymenuService.meal = meal;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    }),
    __metadata("design:paramtypes", [DaymenuService,
        MealitemService,
        Router])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=../../../../../src/app/editmenu/menu.component.js.map