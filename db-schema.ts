
/**
 * DRIZZLE ORM SCHEMA (POSTGRESQL)
 * Use this in your Next.js project with Neon DB.
 */

/*
import { 
  pgTable, 
  serial, 
  text, 
  timestamp, 
  integer, 
  decimal, 
  varchar, 
  jsonb, 
  primaryKey 
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  image: text('image'),
  role: varchar('role', { length: 20 }).default('buyer'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  icon: text('icon'),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  oemNumber: varchar('oem_number', { length: 50 }).notNull(),
  interchangeNumber: varchar('interchange_number', { length: 50 }),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  condition: varchar('condition', { length: 20 }).notNull(),
  categoryId: integer('category_id').references(() => categories.id),
  stock: integer('stock').notNull().default(0),
  location: varchar('location', { length: 50 }),
  images: jsonb('images').$type<string[]>(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const compatibilityMap = pgTable('compatibility_map', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  make: varchar('make', { length: 50 }).notNull(),
  model: varchar('model', { length: 100 }).notNull(),
  engine: varchar('engine', { length: 100 }),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});
*/
