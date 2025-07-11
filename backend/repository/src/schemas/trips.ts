import {
  bigint,
  decimal,
  int,
  json,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const Trips = mysqlTable("Trips", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  riderId: bigint("rider_id", { mode: "number", unsigned: true }).notNull(),
  driverId: bigint("driver_id", { mode: "number", unsigned: true }).notNull(),
  startLocation: json("start_location").notNull(),
  endLocation: json("end_location").notNull(),
  distanceKm: decimal("distance_km", { precision: 6, scale: 2 }).notNull(),
  durationMinutes: int("duration_minutes").notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  fare: decimal("fare", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: varchar("payment_method", { length: 10 }).notNull(),
  status: varchar("status", { length: 15 }).notNull(),
  riderRating: decimal("rider_rating", { precision: 2, scale: 1 }),
  driverRating: decimal("driver_rating", { precision: 2, scale: 1 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
