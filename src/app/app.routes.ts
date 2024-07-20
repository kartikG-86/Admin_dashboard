import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { InstanceComponent } from './components/instance/instance.component';
import { CloudUserComponent } from './components/cloud-user/cloud-user.component';
import { ResellerComponent } from './components/reseller/reseller.component';
import { AddResellerComponent } from './components/add-reseller/add-reseller.component';
import { ManageLabelComponent } from './components/manage-label/manage-label.component';
import { ServerComponent } from './components/server/server.component';
import { TallyReleaseComponent } from './components/tally-release/tally-release.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubscriptionDetailsComponent } from './components/subscription-details/subscription-details.component';

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
    }, {
        path: 'cloud_user',
        component: CloudUserComponent
    }, {
        path: 'reseller',
        component: ResellerComponent
    }, {
        path: 'add_reseller',
        component: AddResellerComponent
    }, {
        path: 'manage_label/:data',
        component: ManageLabelComponent
    }, {
        path: 'servers',
        component: ServerComponent
    }, {
        path: 'tally_release',
        component: TallyReleaseComponent
    }, {
        path: 'subscription',
        component: SubscriptionsComponent
    }, {
        path: 'subscription-details/:id',
        component: SubscriptionDetailsComponent
    }
];
