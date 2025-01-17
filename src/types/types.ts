import { ChangeEventHandler, ReactNode } from "react";
import { SxProps, Theme } from '@mui/system';
import { SvgIconComponent } from '@mui/icons-material';
// INPUT PROPS
export interface InputTextProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'number' | string;
  name?: string;
  id?: string;
  icon?: ReactNode;
}
// BUTTON PROPS


export interface ButtonProps {
  text?: string;
  icon: SvgIconComponent;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  fontWeight?: string;
  color?: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning";

}
// DATA TYPES
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
  comments: number;
  friends: number;
}

// tableTypes
export interface TableColumn {
  header: string;
  accessor: string;
}

export interface TableRow {
  id: number;
  name: string;
  email: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
  actions?: (row: TableRow) => React.ReactNode;
  filterValue: string
}