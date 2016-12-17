import { MenuComponent } from './menu.component';
import { EditdaymenuComponent } from './editdaymenu.component';
import { EditmealComponent } from './editmeal.component';
import { AuthGuard } from '../shared/auth.guard';
export var EDIT_DAY_MENU_ROUTES = [
    { path: 'menueditor', component: MenuComponent, canActivate: [AuthGuard] },
    { path: 'editdaymenu', component: EditdaymenuComponent, canActivate: [AuthGuard] },
    { path: 'editmeal', component: EditmealComponent, canActivate: [AuthGuard] },
];
//# sourceMappingURL=../../../../../src/app/editmenu/editdaymenu.routes.js.map