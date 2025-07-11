CREATE TABLE `drivers` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`user_id` bigint unsigned NOT NULL,
	`license_number` varchar(50),
	`license_photo_url` varchar(255) NOT NULL,
	`vehicle_model` varchar(100) NOT NULL,
	`vehicle_number` varchar(50) NOT NULL,
	`vehicle_color` varchar(50) NOT NULL,
	`status` varchar(20) NOT NULL,
	`current_location` json NOT NULL,
	`is_available` boolean NOT NULL,
	`ratings_average` decimal(3,2) NOT NULL,
	`total_trips` int NOT NULL,
	`earnings` decimal(10,2) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `drivers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`trip_id` bigint unsigned NOT NULL,
	`rider_id` bigint unsigned NOT NULL,
	`driver_id` bigint unsigned NOT NULL,
	`amount` decimal(10,2) NOT NULL,
	`commission` decimal(10,2) NOT NULL,
	`driver_earning` decimal(10,2) NOT NULL,
	`method` varchar(10) NOT NULL,
	`status` varchar(10) NOT NULL,
	`transaction_id` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `payments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ratings` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`from_user_id` bigint unsigned NOT NULL,
	`to_user_id` bigint unsigned NOT NULL,
	`trip_id` bigint unsigned NOT NULL,
	`rating` decimal(2,1) NOT NULL,
	`comment` varchar(500) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `ratings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Rides` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`rider_id` bigint unsigned NOT NULL,
	`pickup_location` json NOT NULL,
	`destination` json NOT NULL,
	`vehicle_type` varchar(10) NOT NULL,
	`fare_estimate` decimal(10,2) NOT NULL,
	`surge_multiplier` decimal(4,2) NOT NULL,
	`status` varchar(15) NOT NULL,
	`assigned_driver_id` bigint unsigned,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`expires_at` timestamp NOT NULL,
	CONSTRAINT `Rides_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Trips` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`rider_id` bigint unsigned NOT NULL,
	`driver_id` bigint unsigned NOT NULL,
	`start_location` json NOT NULL,
	`end_location` json NOT NULL,
	`distance_km` decimal(6,2) NOT NULL,
	`duration_minutes` int NOT NULL,
	`start_time` timestamp NOT NULL,
	`end_time` timestamp NOT NULL,
	`fare` decimal(10,2) NOT NULL,
	`payment_method` varchar(10) NOT NULL,
	`status` varchar(15) NOT NULL,
	`rider_rating` decimal(2,1),
	`driver_rating` decimal(2,1),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `Trips_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`email` varchar(100) NOT NULL,
	`role` varchar(20) NOT NULL,
	`profileImage` varchar(255),
	`password` varchar(255) NOT NULL,
	`languagePreference` varchar(50) NOT NULL,
	`isVerified` boolean DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `Users_id` PRIMARY KEY(`id`),
	CONSTRAINT `Users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `test` MODIFY COLUMN `name` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `test` MODIFY COLUMN `email` varchar(100) NOT NULL;