export class Order {

    constructor(
      public customerID: number,
      public customerOrderID: number,
      public orderTime: string,
      public orderStatus: string,
      public stripeStatus: string,
      public stripeChargeID: string
    ) {  }
  
  }
