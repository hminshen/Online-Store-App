/*
  Warnings:

  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StoreToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StoreItems" DROP CONSTRAINT "StoreItems_item_id_fkey";

-- DropForeignKey
ALTER TABLE "StoreItems" DROP CONSTRAINT "StoreItems_store_id_fkey";

-- DropForeignKey
ALTER TABLE "_StoreToUser" DROP CONSTRAINT "_StoreToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_StoreToUser" DROP CONSTRAINT "_StoreToUser_B_fkey";

-- DropTable
DROP TABLE "Store";

-- DropTable
DROP TABLE "StoreItems";

-- DropTable
DROP TABLE "_StoreToUser";
