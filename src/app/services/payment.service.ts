import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentAssociate, PaymentMethod } from '../interfaces/payment-associate';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
   }

   create(payment: PaymentMethod) {
     console.log('payment', payment);
     
     const Url = 'http://localhost:3000/api/payment';
     
    // Waiting for API ENDPOINT
    //  this.http.post<{message: string}>(Url, payment)
    //  .subscribe( res => {
    //    console.log(res.message);
    //  });
   }

}
