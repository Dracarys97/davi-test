import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export class ModalComponentComponent implements OnInit {
  @Input() visibility: boolean = false;
  @Input() changeVisibility: any;
  private id: number = 0;
  public image: string = 'mic-icon.svg';
  public greeting: boolean = true;
  public transfer: boolean = false;
  public infoTransfer: boolean = false;
  public successTransfer: boolean = false;
  public voucherDisplay: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeModalElements = () => {
    this.image = this.image === 'waves.png' ? 'mic-icon.svg' : 'waves.png';
    this.id = this.id + 1;
    if (this.id === 0) {
      this.transfer = false;
      this.infoTransfer = false;
      this.successTransfer = false;
      this.voucherDisplay = false;
      this.greeting = true;
    }
    if (this.id === 1) {
      this.greeting = false;
      this.transfer = true;
    }
    if (this.id === 2) {
      this.transfer = false;
      this.infoTransfer = true;
    }
    if (this.id === 3) {
      this.infoTransfer = false;
      this.successTransfer = true;
    }
    if (this.id === 4) {
      this.voucherDisplay = true;
    }
    if (this.id === 5) {
      this.visibility = false;
    }
  };
  onClose = () => {
    this.changeVisibility();
  };
  get modalClass() {
    if (!this.visibility) {
      return 'hidden';
    }
    return 'modal';
  }
  get imgClass() {
    if (this.image !== 'mic-icon.svg') {
      return 'modal-container__waves';
    }
    return 'modal-container__mic';
  }
}
