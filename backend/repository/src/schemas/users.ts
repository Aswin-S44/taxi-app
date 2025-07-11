import {
  bigint,
  boolean,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const Users = mysqlTable("Users", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  role: varchar("role", { length: 20 }).notNull(),
  profileImage: varchar("profileImage", { length: 255 }),
  password: varchar("password", { length: 255 }).notNull(),
  languagePreference: varchar("languagePreference", { length: 50 }).notNull(),
  isVerified: boolean().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
