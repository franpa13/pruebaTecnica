export interface Order {
    orderId: string;
    product: string;
    amount: number;
    date: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    age: number;
    registeredAt: string;
    isActive: boolean;
    orders: Order[];
    comments : number ;
    friends:number ;
}

// tableTypes
export interface TableColumn {
    header: string;
    accessor: string;
  }
  
  export interface TableRow {
    id:number;
    name: string;
    email: string;
  }
  
  export interface TableProps {
    columns: TableColumn[];
    data: TableRow[];
    actions?: (row: TableRow) => React.ReactNode;
  }