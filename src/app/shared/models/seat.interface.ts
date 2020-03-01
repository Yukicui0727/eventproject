export interface Seat {
    Seat_ID?: number;
	Room_ID?: number;
	Category_ID?: number;
	Row_Number: string;
	Col_Number: string;
	Availability: string;
	Category_Name: string;
	Price: number;
}

export interface SeatRow {
    rowNumber: number;
    rowContents: Seat[];
}

export interface SeatTable {
    seatTableName: string;
    seatRows: SeatRow[];
}
