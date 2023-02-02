import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent {

  @Input() title: string | undefined;
  @Input() list = [{}];

  constructor() {
  }

  ngoninit() {
  }

}
