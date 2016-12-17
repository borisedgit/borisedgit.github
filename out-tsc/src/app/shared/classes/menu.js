import { Meal } from './meal';
export var Menu = (function () {
    function Menu(weekNumber, dayNumber, date) {
        this.weekNumber = weekNumber;
        this.dayNumber = dayNumber;
        this.date = date;
        this.breakfast = new Meal();
        this.breakfastSpecial = new Meal();
        this.lunch = new Meal();
        this.lunchSpecial = new Meal();
        this.dinner = new Meal();
        this.dinnerSpecial = new Meal();
    }
    return Menu;
}());
//# sourceMappingURL=../../../../../../src/app/shared/classes/menu.js.map