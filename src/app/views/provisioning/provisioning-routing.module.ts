import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProvisioningComponent } from './provisioning.component';

const routes: Routes = [
  {
    path: '',
    component: ProvisioningComponent,
    data: {
      title: "Provisioning"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvisioningRoutingModule {
}
