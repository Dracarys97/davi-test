import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers-page',
  templateUrl: './transfers-page.component.html',
  styleUrls: ['./transfers-page.component.scss'],
})
export class TransfersPageComponent implements OnInit {
  public visibility = false;
  constructor() {}

  ngOnInit(): void {}
  changeVisibility = () => {
    this.visibility = !this.visibility;
    console.log(this.visibility);
  };
}
