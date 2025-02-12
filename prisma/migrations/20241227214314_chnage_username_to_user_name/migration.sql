/*
  Warnings:

  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_username_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "username",
ADD COLUMN     "userName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");
