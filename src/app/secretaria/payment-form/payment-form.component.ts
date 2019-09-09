import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { reduce } from 'rxjs/operators';

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
              public dialogRef: MatDialogRef<PaymentFormComponent>) {
               }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      associatedID: '1',
      totalAmount: '',
      payments: this.fb.array([])
    });
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
    // http post
    this.closeDialog();
  }

  closeDialog() {
    // form reset

    console.log('close value', this.paymentForm.value);
    this.sumPaymentMethods();
    this.dialogRef.close(this.paymentForm.value);
  }

  sumPaymentMethods() {
   const totalAmount = this.paymentForm.get('payments').value.reduce((a, b) => +a + +b.amount, 0);
   console.log('result sum result', totalAmount);
   console.log('total ammount', +this.paymentForm.get('totalAmount').value);
   console.log('diferença', +this.paymentForm.get('totalAmount').value - totalAmount);
   return totalAmount;
  }

  differenceAmount() {
    const diffAmount = +this.paymentForm.get('totalAmount').value - this.sumPaymentMethods();
    console.log('diff', diffAmount);
    return diffAmount;
    // return +this.paymentForm.get('totalAmount').value - +this.sumPaymentMethods();
  }

}
