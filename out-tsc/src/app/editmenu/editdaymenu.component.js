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
import { Router } from '@angular/router';
import { MealService, MealitemService } from '../services';
import { DaymenuService } from '../services/daymenu.service';
var EditdaymenuComponent = (function () {
    function EditdaymenuComponent(router, mealService, mealItemService, daymenuService) {
        this.router = router;
        this.mealService = mealService;
        this.mealItemService = mealItemService;
        this.daymenuService = daymenuService;
        this.weekDay = '';
        this.meal = '';
        this.weekDay = this.daymenuService.weekDay;
        this.meal = this.daymenuService.meal;
        this.availableMeals = this.mealItemService[this.meal];
        this.menu = this.daymenuService.weekMenu[this.weekDay];
        if (typeof this.menu[this.meal].mealItems === 'undefined') {
            this.menu[this.meal].mealItems = [];
        }
        this.selectedMeals = this.menu[this.meal].mealItems;
    }
    EditdaymenuComponent.prototype.isSelected = function (item) {
        if (this.selectedMeals.indexOf(item.item) > -1)
            return true;
        return false;
    };
    EditdaymenuComponent.prototype.addMealItem = function (item) {
        this.selectedMeals.push(item.target.textContent);
    };
    EditdaymenuComponent.prototype.removeMealItem = function (item) {
        this.selectedMeals.splice(this.selectedMeals.indexOf(item.target.textContent), 1);
    };
    EditdaymenuComponent.prototype.ngOnDestroy = function () {
        this.daymenuService.saveDayMeal(this.daymenuService.weekMenu[this.weekDay], this.meal);
    };
    EditdaymenuComponent.prototype.saveDayMenu = function () {
    };
    EditdaymenuComponent.prototype.correctWeekNumber = function (m) {
        var n = Number(m.format('W'));
        if (m.day() == 0) {
            if (n == 52) {
                return 1;
            }
            else {
                return 1 + Number(m.format('W'));
            }
        }
        else {
            return n;
        }
    };
    return EditdaymenuComponent;
}());
EditdaymenuComponent = __decorate([
    Component({
        selector: 'app-editdaymenu',
        templateUrl: './editdaymenu.component.html',
        styleUrls: ['./editdaymenu.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        MealService,
        MealitemService,
        DaymenuService])
], EditdaymenuComponent);
export { EditdaymenuComponent };
//# sourceMappingURL=../../../../../src/app/editmenu/editdaymenu.component.js.map