import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { InstanceComponent } from './components/instance/instance.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        component: LoginComponent
    }, {
        path: 'forgotPassword',
        component: LoginComponent
    }, {
        path: 'instance',
        component: InstanceComponent
    }
];
