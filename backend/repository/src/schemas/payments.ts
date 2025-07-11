import {
  bigint,
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const Payments = mysqlTable("payments", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  tripId: bigint("trip_id", { mode: "number", unsigned: true }).notNull(),
  riderId: bigint("rider_id", { mode: "number", unsigned: true }).notNull(),
  driverId: bigint("driver_id", { mode: "number", unsigned: true }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  commission: decimal("commission", { precision: 10, scale: 2 }).notNull(),
  driverEarning: decimal("driver_earning", {
    precision: 10,
    scale: 2,
  }).notNull(),
  method: varchar("method", { length: 10 }).notNull(),
  status: varchar("status", { length: 10 }).notNull(),
  transactionId: varchar("transaction_id", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
