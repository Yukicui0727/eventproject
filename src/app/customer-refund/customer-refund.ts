export class Refund {
    constructor(
      public crefund_id: number,
      public corder_id: number,
      public crefund_description: string,
      public crefund_updated_time: string,
      public crefund_status: string,
      public stripe_status: string,
      public stripe_refund_id: string
    ) {  }
  
  }