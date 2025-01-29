import {
    integer,
    numeric,
    pgTable,
    serial,
    varchar,
  } from "drizzle-orm/pg-core";
  
  // Defining the Budgets table with type annotations
  export const Budgets = pgTable("budgets", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(),
    icon: varchar("icon"),
  });
  
  // Defining the Incomes table with type annotations
  export const Incomes = pgTable("incomes", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(),
  });
  
  // Defining the Expenses table with type annotations
  export const Expenses = pgTable("expenses", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: numeric("amount").notNull(),
    budgetId: integer("budgetId").references(() => Budgets.id),
  });
  