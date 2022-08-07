import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTransferComponent } from './info-transfer.component';

describe('InfoTransferComponent', () => {
  let component: InfoTransferComponent;
  let fixture: ComponentFixture<InfoTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
