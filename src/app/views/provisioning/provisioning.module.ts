import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProvisioningRoutingModule } from './provisioning-routing.module';
import { ProvisioningComponent } from './provisioning.component';
import {
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
  } from '@coreui/angular';


@NgModule({
    imports: [
      ProvisioningRoutingModule,
      CommonModule,AvatarModule,
      BadgeModule,
      BreadcrumbModule,
      ButtonGroupModule,
      ButtonModule,
      CardModule,
      DropdownModule,
      FooterModule,
      FormModule,
      GridModule,
      HeaderModule,
      ListGroupModule,
      NavModule,
      ProgressModule,
      SharedModule,
      SidebarModule,
      TabsModule,
      UtilitiesModule,
    ],
    declarations: [ProvisioningComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class ProvisioningModule {
  }
  