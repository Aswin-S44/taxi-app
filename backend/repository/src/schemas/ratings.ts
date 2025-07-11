import {
  bigint,
  decimal,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const Ratings = mysqlTable("ratings", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  fromUserId: bigint("from_user_id", {
    mode: "number",
    unsigned: true,
  }).notNull(),
  toUserId: bigint("to_user_id", { mode: "number", unsigned: true }).notNull(),
  tripId: bigint("trip_id", { mode: "number", unsigned: true }).notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
  comment: varchar("comment", { length: 500 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
