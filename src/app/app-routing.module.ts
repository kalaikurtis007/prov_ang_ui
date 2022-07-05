import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    children: [
        {
            path: '',
            loadChildren: () =>
                import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
        }
    ]
}, {
    path: 'provisioning',
    children:[
        {
            path:'',
            loadChildren:()=>
            import('./views/provisioning/provisioning.module').then((m)=>m.ProvisioningModule)
        }
    ]

}
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            anchorScrolling: 'enabled',
            initialNavigation: 'enabledBlocking'
            // relativeLinkResolution: 'legacy'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
