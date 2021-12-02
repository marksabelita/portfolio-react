CREATE TABLE `ews_fields` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `uuid` char(36) NOT NULL DEFAULT uuid(),
 `name` varchar(100) NOT NULL,
 `type` varchar(110) NOT NULL,
 `required` tinyint(1) NOT NULL DEFAULT 0,
 `allow_multiple` tinyint(1) NOT NULL DEFAULT 0,
 `updated_by` int(11) DEFAULT NULL,
 `created_by` int(11) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
 `updated_at` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_fields_options` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `fields_id` int(11) NOT NULL,
 `label` varchar(100) NOT NULL,
 `value` varchar(100) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `fk_fields` (`fields_id`),
 CONSTRAINT `fk_fields` FOREIGN KEY (`fields_id`) REFERENCES `ews_fields` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=852 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_table` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `field_id` int(11) DEFAULT NULL,
 `type` varchar(100) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
 `updated_at` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_table_column` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `table_id` int(11) NOT NULL,
 `name` varchar(100) NOT NULL,
 `arrangement` int(11) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
 `updated_at` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `fk_table_connection` (`table_id`),
 CONSTRAINT `fk_table_connection` FOREIGN KEY (`table_id`) REFERENCES `ews_table` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_table_row` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `table_id` int(11) NOT NULL,
 `name` varchar(100) NOT NULL,
 `arrangement` int(11) NOT NULL,
 `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
 `updated_at` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `fk_table_row` (`table_id`),
 CONSTRAINT `fk_table_row` FOREIGN KEY (`table_id`) REFERENCES `ews_table` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_forms` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `uuid` char(36) NOT NULL DEFAULT uuid(),
 `name` text NOT NULL,
 `created_by` int(11) NOT NULL,
 `updated_by` int(11) DEFAULT NULL,
 `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
 `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4

CREATE TABLE `ews_answers` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `ews_forms` int(11) DEFAULT NULL,
 `field_id` int(11) NOT NULL,
 `type` varchar(100) NOT NULL DEFAULT 'text',
 `label` text NOT NULL,
 `value` text DEFAULT NULL,
 `row_id` int(11) DEFAULT NULL,
 `col_id` int(11) DEFAULT NULL,
 `created_by` int(11) NOT NULL,
 `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
 `created_at` timestamp NOT NULL DEFAULT current_timestamp()
ENGINE=InnoDB AUTO_INCREMENT=88040 DEFAULT CHARSET=utf8mb4