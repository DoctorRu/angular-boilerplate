import { PaymentService } from './services/payment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AssociadosComponent } from './secretaria/associados/associados.component';
import { TheendComponent } from './theend/theend.component';
import { PaymentFormComponent } from './secretaria/payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssociadosComponent,
    TheendComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PaymentFormComponent
  ]
})
export class AppModule { }
