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
  public imageClass: string = 'modal-container__mic';
  public greeting: boolean = true;
  public transfer: boolean = false;
  public infoTransfer: boolean = false;
  public successTransfer: boolean = false;
  public voucherDisplay: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeModalElements = () => {
    this.id = this.id + 1;
    this.image = 'waves.png';
    this.imageClass = 'modal-container__waves';
    setTimeout(() => {
      this.handleId();
      this.imageClass = 'modal-container__mic';
      this.image = 'mic-icon.svg';
    }, 2000);
  };
  onClose = () => {
    this.changeVisibility();
  };
  handleId = () => {
    switch (this.id) {
      case 0:
        this.transfer = false;
        this.infoTransfer = false;
        this.successTransfer = false;
        this.voucherDisplay = false;
        this.greeting = true;
        break;
      case 1:
        this.greeting = false;
        this.transfer = true;
        break;
      case 2:
        this.transfer = false;
        this.infoTransfer = true;
        break;
      case 3:
        this.infoTransfer = false;
        this.successTransfer = true;
        break;

      case 4:
        this.voucherDisplay = true;
        break;
      case 5:
        this.changeVisibility();
        this.voucherDisplay = false;
        this.successTransfer = false;
        this.greeting = true;
        this.id = 0;
        break;
      default:
        this.changeVisibility();
        break;
    }
  };
  get modalClass() {
    if (!this.visibility) {
      return 'hidden';
    }
    return 'modal';
  }
}
