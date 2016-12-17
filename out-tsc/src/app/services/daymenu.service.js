var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as Moment from 'moment';
import { AngularFire } from 'angularfire2';
var DaymenuService = (function () {
    function DaymenuService(http, af) {
        this.http = http;
        this.af = af;
        this.menuUrl = 'https://cafe451-2419a.firebaseio.com/menu2017/';
        this.weekDay = '';
        this.meal = '';
        this.onDaymenuChanged = new EventEmitter();
        this.weekMenuLoaded = new EventEmitter();
    }
    DaymenuService.prototype.saveDayMeal = function (dayMenu, meal) {
        var body = JSON.stringify(dayMenu[meal]);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.menuUrl + dayMenu.weekNumber + '/' + 'day' + dayMenu.dayNumber + '/' + meal + '.json', body, { headers: headers })
            .map(function (data) { return data.json(); })
            .subscribe(function () { return console.log('done'); });
    };
    DaymenuService.prototype.saveDayMenu = function (dayMenu) {
        var body = JSON.stringify(dayMenu);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.menuUrl + dayMenu.weekNumber + '/' + 'day' + dayMenu.dayNumber + '.json', body, { headers: headers })
            .map(function (data) { return data.json(); });
    };
    DaymenuService.prototype.getWeekMenu = function (weekNumber) {
        var _this = this;
        var wn = this.correctWeekNumber(weekNumber);
        this.http.get(this.menuUrl + wn + '.json')
            .subscribe(function (response) {
            _this.weekMenu = response.json();
            _this.weekMenuLoaded.emit(weekNumber);
        });
    };
    DaymenuService.prototype.getWeekMenuObservable = function (wn) {
        console.log('this is running');
        return this.af.database.list('menu2017' + wn);
    };
    DaymenuService.prototype.correctWeekNumber = function (selectedDate) {
        var m = Moment(selectedDate);
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
    return DaymenuService;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], DaymenuService.prototype, "onDaymenuChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DaymenuService.prototype, "weekMenuLoaded", void 0);
DaymenuService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, AngularFire])
], DaymenuService);
export { DaymenuService };
//# sourceMappingURL=../../../../../src/app/services/daymenu.service.js.map