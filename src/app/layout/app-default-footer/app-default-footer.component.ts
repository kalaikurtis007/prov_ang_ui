import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-footer',
  templateUrl: './app-default-footer.component.html',
  styleUrls: ['./app-default-footer.component.scss']
})
export class AppDefaultFooterComponent extends FooterComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
