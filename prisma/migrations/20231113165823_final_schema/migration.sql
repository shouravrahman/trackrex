/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('ADMIN', 'PROJECT_OWNER', 'PROJECT_MEMBER', 'REPORTER', 'ASSIGNEE', 'VIEWER', 'GUEST') NOT NULL;
