import {
  bigint,
  boolean,
  decimal,
  int,
  json,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const Drivers = mysqlTable("drivers", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  userId: bigint("user_id", { mode: "number", unsigned: true }).notNull(),
  licenseNumber: varchar("license_number", { length: 50 }),
  licensePhotoUrl: varchar("license_photo_url", { length: 255 }).notNull(),
  vehicleModel: varchar("vehicle_model", { length: 100 }).notNull(),
  vehicleNumber: varchar("vehicle_number", { length: 50 }).notNull(),
  vehicleColor: varchar("vehicle_color", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).notNull(),
  currentLocation: json("current_location").notNull(),
  isAvailable: boolean("is_available").notNull(),
  ratingsAverage: decimal("ratings_average", {
    precision: 3,
    scale: 2,
  }).notNull(),
  totalTrips: int("total_trips").notNull(),
  earnings: decimal("earnings", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow().notNull(),
});
