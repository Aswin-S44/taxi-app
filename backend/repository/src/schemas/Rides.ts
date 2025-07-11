import {
  bigint,
  int,
  mysqlTable,
  timestamp,
  varchar,
  decimal,
  json,
} from "drizzle-orm/mysql-core";

export const Rides = mysqlTable("Rides", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  riderId: bigint("rider_id", { mode: "number", unsigned: true }).notNull(),
  pickupLocation: json("pickup_location").notNull(),
  destination: json("destination").notNull(),
  vehicleType: varchar("vehicle_type", { length: 10 }).notNull(),
  fareEstimate: decimal("fare_estimate", { precision: 10, scale: 2 }).notNull(),
  surgeMultiplier: decimal("surge_multiplier", {
    precision: 4,
    scale: 2,
  }).notNull(),
  status: varchar("status", { length: 15 }).notNull(),
  assignedDriverId: bigint("assigned_driver_id", {
    mode: "number",
    unsigned: true,
  }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
