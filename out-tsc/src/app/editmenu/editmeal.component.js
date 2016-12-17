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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MealitemService } from '../services/mealitem.service';
var EditmealComponent = (function () {
    function EditmealComponent(mealitemService) {
        var _this = this;
        this.mealitemService = mealitemService;
        this.removeB = true;
        this.removeBS = true;
        this.removeL = true;
        this.removeLS = true;
        this.removeD = true;
        this.removeDS = true;
        this.removeBArray = [];
        this.removeBSArray = [];
        this.removeLArray = [];
        this.removeLSArray = [];
        this.removeDArray = [];
        this.removeDSArray = [];
        this.breakfast = [];
        this.breakfastSpecial = [];
        this.lunch = [];
        this.lunchSpecial = [];
        this.dinner = [];
        this.dinnerSpecial = [];
        this.breakfastForm = new FormGroup({
            'item': new FormControl('', [Validators.required])
        });
        this.breakfastSpecialForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.lunchForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.lunchSpecialForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.dinnerForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.dinnerSpecialForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.breakfastItemsForm = new FormGroup({
            'item': new FormControl('', Validators.required)
        });
        this.mealitemService.onMealChanged.subscribe(function (meal) {
            _this.getUpdatedMeal(meal);
        });
        this.getUpdatedMeal('breakfast');
        this.getUpdatedMeal('breakfastSpecial');
        this.getUpdatedMeal('lunch');
        this.getUpdatedMeal('lunchSpecial');
        this.getUpdatedMeal('dinner');
        this.getUpdatedMeal('dinnerSpecial');
    }
    EditmealComponent.prototype.ngOnInit = function () { };
    EditmealComponent.prototype.onSubmit = function (meal, mealForm) {
        this.mealitemService.addMealItem(meal, mealForm.value);
        mealForm.reset();
    };
    EditmealComponent.prototype.onSelectForRemoval = function (item, meal, removeArray) {
        this.onAddRemoveFromArray(item, removeArray);
        this.onToggleAddRemoveButtons(meal);
    };
    EditmealComponent.prototype.onDeleteItem = function (items, meal) {
        for (var key in items) {
            this.mealitemService.deleteMealItem(meal, items[key]);
        }
        this.resetRemovalArray(meal);
        this.onToggleAddRemoveButtons(meal);
    };
    EditmealComponent.prototype.onAddRemoveFromArray = function (item, removeArray) {
        var index = removeArray.indexOf(item);
        if (index == -1) {
            removeArray.push(item);
        }
        else {
            removeArray.splice(index, 1);
        }
    };
    EditmealComponent.prototype.onToggleAddRemoveButtons = function (meal) {
        switch (meal) {
            case 'breakfast':
                this.removeB = (this.removeBArray.length > 0) ? false : true;
                break;
            case 'breakfastSpecial':
                this.removeBS = (this.removeBSArray.length > 0) ? false : true;
                break;
            case 'lunch':
                this.removeL = (this.removeLArray.length > 0) ? false : true;
                break;
            case 'lunchSpecial':
                this.removeLS = (this.removeLSArray.length > 0) ? false : true;
                break;
            case 'dinner':
                this.removeD = (this.removeDArray.length > 0) ? false : true;
                break;
            case 'dinnerSpecial':
                this.removeDS = (this.removeDSArray.length > 0) ? false : true;
                break;
        }
    };
    EditmealComponent.prototype.getUpdatedMeal = function (meal) {
        switch (meal) {
            case 'breakfast':
                this.breakfast = this.mealitemService.breakfast;
                this.breakfast.sort();
                break;
            case 'breakfastSpecial':
                this.breakfastSpecial = this.mealitemService.breakfastSpecial;
                this.breakfastSpecial.sort();
                break;
            case 'lunch':
                this.lunch = this.mealitemService.lunch;
                this.lunch.sort();
                break;
            case 'lunchSpecial':
                this.lunchSpecial = this.mealitemService.lunchSpecial;
                this.lunchSpecial.sort();
                break;
            case 'dinner':
                this.dinner = this.mealitemService.dinner;
                this.dinner.sort();
                break;
            case 'dinnerSpecial':
                this.dinnerSpecial = this.mealitemService.dinnerSpecial;
                this.dinnerSpecial.sort();
                break;
        }
    };
    EditmealComponent.prototype.resetRemovalArray = function (meal) {
        switch (meal) {
            case 'breakfast':
                this.removeBArray = [];
                break;
            case 'breakfastSpecial':
                this.removeBSArray = [];
                break;
            case 'lunch':
                this.removeLArray = [];
                break;
            case 'lunchSpecial':
                this.removeLSArray = [];
                break;
            case 'dinner':
                this.removeDArray = [];
                break;
            case 'dinnerSpecial':
                this.removeDSArray = [];
                break;
        }
    };
    return EditmealComponent;
}());
EditmealComponent = __decorate([
    Component({
        selector: 'app-editmeal',
        templateUrl: './editmeal.component.html',
        styleUrls: ['./editmeal.component.css']
    }),
    __metadata("design:paramtypes", [MealitemService])
], EditmealComponent);
export { EditmealComponent };
//# sourceMappingURL=../../../../../src/app/editmenu/editmeal.component.js.map