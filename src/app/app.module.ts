import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransfersPageComponent } from './pages/transfers-page/transfers-page.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { GreetingComponent } from './components/modal-component/components/greeting/greeting.component';
import { TransferComponent } from './components/modal-component/components/transfer/transfer.component';
import { InfoTransferComponent } from './components/modal-component/components/info-transfer/info-transfer.component';
import { SuccessTransferComponent } from './components/modal-component/components/success-transfer/success-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    TransfersPageComponent,
    ModalComponentComponent,
    GreetingComponent,
    TransferComponent,
    InfoTransferComponent,
    SuccessTransferComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
