
export enum PartCondition {
  NEW = 'NEW',
  USED = 'USED',
  REMANUFACTURED = 'REMAN'
}

export enum PartLocation {
  FRONT = 'Front',
  REAR = 'Rear',
  LEFT = 'Left',
  RIGHT = 'Right',
  INTERIOR = 'Interior',
  ENGINE_BAY = 'Engine Bay'
}

export interface Compatibility {
  yearStart: number;
  yearEnd: number;
  make: string;
  model: string;
  engine: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  oemNumber: string;
  interchangeNumber?: string;
  description: string;
  price: number;
  condition: PartCondition;
  categoryId: string;
  stock: number;
  location: PartLocation;
  images: string[];
  compatibility: Compatibility[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}
