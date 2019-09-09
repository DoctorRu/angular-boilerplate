export interface PaymentAssociate {
    associateID: string,
    totalAmount: number,
    payment: PaymentMethod [],
}


export interface PaymentMethod {
    category: string,
    amount: number
}