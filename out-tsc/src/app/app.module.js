var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { ShowMenuComponent } from './menu/showmenu.component';
import { MenuComponent } from './editmenu/menu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { EditdaymenuComponent } from './editmenu/editdaymenu.component';
import { EditmealComponent } from './editmenu/editmeal.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';
import { MealService } from './services/meal.service';
import { DaymenuService } from './services/daymenu.service';
import { MealitemService } from './services/mealitem.service';
import { AuthGuard } from './shared/auth.guard';
import { routing } from './app.routing';
import { ShowdaymenuComponent } from './menu/showdaymenu.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            ShowMenuComponent,
            EditmenuComponent,
            EditdaymenuComponent,
            EditmealComponent,
            SigninComponent,
            SignupComponent,
            MenuComponent,
            ShowdaymenuComponent,
        ],
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            HttpModule,
            routing,
            DatepickerModule,
            AngularFireModule.initializeApp(firebaseConfig)
        ],
        providers: [AuthService,
            AuthGuard,
            DaymenuService,
            MealService,
            MealitemService],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../src/app/app.module.js.map