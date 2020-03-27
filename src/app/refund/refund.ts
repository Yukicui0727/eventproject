export class Refund {
    constructor(
      public refund_id: number,
      public oorder_id: number,
      public refund_updated_time: string,
      public refund_status: string
    ) {  }
  
  }