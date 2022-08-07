import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-transfer',
  templateUrl: './success-transfer.component.html',
  styleUrls: ['./success-transfer.component.scss'],
})
export class SuccessTransferComponent implements OnInit {
  @Input() finalized: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
