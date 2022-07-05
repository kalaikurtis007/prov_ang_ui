import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
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
      DashboardRoutingModule,
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
    declarations: [DashboardComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DashboardModule {
  }
  