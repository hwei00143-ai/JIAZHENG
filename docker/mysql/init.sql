-- Initialize database with default settings
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS community_group_buying CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE community_group_buying;

-- Ensure application user has sufficient privileges for dev tooling
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- Add any additional initialization SQL here if needed

SET FOREIGN_KEY_CHECKS = 1;