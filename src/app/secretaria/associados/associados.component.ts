import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

import { PaymentFormComponent } from './../payment-form/payment-form.component';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-associados',
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.css']
})
export class AssociadosComponent implements OnInit {

public person = {
  imageProfile: 'https://picsum.photos/140/140', name: 'Bruce Dickson', document: '457.972.167-50'
};

public people = [
  { imageProfile: 'http://lorempixel.com/75/75/people/', name: 'Lea Princess', },
  { imageProfile: 'http://lorempixel.com/75/75/people/', name: 'Luke Sky Walker', },
  { imageProfile: 'http://lorempixel.com/75/75/people/', name: 'Black Phoenix', },
];

  constructor(public modalDialog: MatDialog) { }

  ngOnInit() {
  }

  modalPaymentOpen() {
    console.log('call open');

    // Pendent :  initialize form

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = '70%';
    const modalDialogPayment = this.modalDialog.open(PaymentFormComponent, dialogConfig);

    modalDialogPayment.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
    });

  }
}
