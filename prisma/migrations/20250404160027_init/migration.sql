/*
  Warnings:

  - You are about to drop the column `accreditationReason` on the `Invertors_Info` table. All the data in the column will be lost.
  - You are about to drop the column `accredited` on the `Invertors_Info` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Invertors_Info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invertors_Info" DROP COLUMN "accreditationReason",
DROP COLUMN "accredited",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'ENTREPRENEUR';

-- AddForeignKey
ALTER TABLE "Invertors_Info" ADD CONSTRAINT "Invertors_Info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
