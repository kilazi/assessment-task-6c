import { Routes } from '@angular/router';
import { AngularProblemComponent } from './tasks/angular-problem/angular-problem.component';
import { CameraProblemComponent } from './tasks/camera-problem/camera-problem.component';

export const routes: Routes = [
    { path: '', redirectTo: '/angular-problem', pathMatch: 'full' },
    { path: 'angular-problem', component: AngularProblemComponent },
    { path: 'camera-problem', component: CameraProblemComponent }
];
