import { EditmealComponent } from './editmeal.component';
import { AuthGuard } from '../shared/auth.guard';
export var EDIT_MEAL_ROUTES = [
    { path: 'editmeal', component: EditmealComponent, canActivate: [AuthGuard] },
];
//# sourceMappingURL=../../../../../src/app/editmenu/editmeal.routes.js.map