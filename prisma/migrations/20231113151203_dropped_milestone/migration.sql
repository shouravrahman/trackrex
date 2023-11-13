/*
  Warnings:

  - You are about to drop the column `milestoneId` on the `Issue` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Issue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the `Milestone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Issue` DROP FOREIGN KEY `Issue_milestoneId_fkey`;

-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `milestoneId`,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN';

-- DropTable
DROP TABLE `Milestone`;
