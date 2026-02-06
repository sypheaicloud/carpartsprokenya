
import React from 'react';
import {
  Wrench,
  Cpu,
  Tractor as Wheel,
  Lamp as Light,
  Layers,
  Wind,
  Gauge,
  Zap
} from 'lucide-react';
import { Category, Product, PartCondition, PartLocation } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Engine Components', icon: 'Wrench' },
  { id: '2', name: 'Electronics & Sensors', icon: 'Cpu' },
  { id: '3', name: 'Wheels & Suspension', icon: 'Wheel' },
  { id: '4', name: 'Lighting & Body', icon: 'Light' },
  { id: '5', name: 'Transmission', icon: 'Layers' },
  { id: '6', name: 'Intake & Turbo', icon: 'Wind' },
  { id: '7', name: 'Performance Tuning', icon: 'Gauge' },
  { id: '8', name: 'Ignition Systems', icon: 'Zap' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'High-Performance Drilled & Slotted Brake Rotors',
    slug: 'performance-brake-rotors',
    oemNumber: 'BRK-992-001',
    interchangeNumber: '880693-ROTOR',
    description: 'Precision engineered carbon-steel rotors for superior heat dissipation and consistent braking performance under extreme conditions.',
    price: 349.99,
    condition: PartCondition.NEW,
    categoryId: '3',
    stock: 8,
    location: PartLocation.FRONT,
    images: [
      '/assets/images/rotor.jpg',
      'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=800'
    ],
    compatibility: [
      { yearStart: 2015, yearEnd: 2024, make: 'Universal', model: 'Performance', engine: 'All' }
    ]
  },
  {
    id: 'p2',
    name: 'Heavy Duty 180 Amp High-Output Alternator',
    slug: 'high-output-alternator',
    oemNumber: 'ALT-BOS-202',
    description: 'Direct-fit high amperage alternator designed to support complex aftermarket electronics and high-performance ignition systems.',
    price: 285.00,
    condition: PartCondition.NEW,
    categoryId: '2',
    stock: 4,
    location: PartLocation.ENGINE_BAY,
    images: [
      '/assets/images/alternator image.jpg'
    ],
    compatibility: [
      { yearStart: 2018, yearEnd: 2024, make: 'Toyota', model: 'Land Cruiser', engine: '4.5L V8' }
    ]
  },
  {
    id: 'p3',
    name: 'Dual-Core Aluminum Performance Radiator',
    slug: 'aluminum-performance-radiator',
    oemNumber: 'RAD-ALU-773',
    description: 'All-aluminum lightweight radiator with 30% more cooling capacity than OEM. Perfect for Kenyan roads and high-temperature environments.',
    price: 415.00,
    condition: PartCondition.NEW,
    categoryId: '1',
    stock: 6,
    location: PartLocation.FRONT,
    images: [
      '/assets/images/rad.jpg'
    ],
    compatibility: [
      { yearStart: 2010, yearEnd: 2020, make: 'Subaru', model: 'Impreza STI', engine: 'EJ25' }
    ]
  },
  {
    id: 'p4',
    name: 'Toyota Camry White Left Side Mirror',
    slug: 'toyota-camry-white-left-mirror',
    oemNumber: 'MIR-CAM-001',
    description: 'Genuine driver-side power mirror for Toyota Camry. White finish, includes integrated turn signal and blind-spot monitoring glass.',
    price: 185.00,
    condition: PartCondition.USED,
    categoryId: '4',
    stock: 2,
    location: PartLocation.LEFT,
    images: [
      '/assets/images/mirror.JPG'
    ],
    compatibility: [
      { yearStart: 2018, yearEnd: 2023, make: 'Toyota', model: 'Camry', engine: 'All' }
    ]
  }
];
