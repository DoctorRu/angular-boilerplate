import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from './../../services/payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm: FormGroup;

  paymentCategory = [
    { name: 'Cartão de crédito', value: 'credit-card' },
    { name: 'Cartão de débito', value: 'debit-card' },
    { name: 'Cheque', value: 'check'},
    { name: 'Dinheiro', value: 'money'},
    { name: 'Nubank', value: 'nubank'}
  ];

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<PaymentFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public paymentServ: PaymentService ) {
               }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      associatedID: this.data.associatedID,
      totalAmount: this.data.totalAmount,
      payments: this.fb.array([])
    });
    
    console.log('data: ', this.data);
  }

  get paymentMethodForms() {
    return this.paymentForm.get('payments') as FormArray;
  }

  addPaymentMethod() {
    const paymentMethod = this.fb.group({
      category: [],
      amount: []
    });

    this.paymentMethodForms.push(paymentMethod);
  }

  deletePayment(i) {
    this.paymentMethodForms.removeAt(i);
  }

  processPayment() {
    console.log('Processando pagamento');

    // Pending: Service

    // if (form.invalid) {
    //   return;
    // }
   // form.resetForm();
   
    this.paymentServ.create(this.paymentForm.value);

    this.closeDialog();
  }

  closeDialog() {
    // form reset

    // console.log('close value', this.paymentForm.value);
    this.sumPaymentMethods();
    this.dialogRef.close(this.paymentForm.value);
  }

  sumPaymentMethods() {
   const totalAmount = this.paymentForm.get('payments').value.reduce((a, b) => +a + +b.amount, 0);

   return totalAmount;
  }

  differenceAmount() {
    const diffAmount = +this.paymentForm.get('totalAmount').value - this.sumPaymentMethods();
    // console.log('diff', diffAmount);
    return diffAmount;
    // return +this.paymentForm.get('totalAmount').value - +this.sumPaymentMethods();
  }

}
