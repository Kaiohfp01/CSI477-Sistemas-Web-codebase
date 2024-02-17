/*
  Warnings:

  - Added the required column `complemento` to the `LocalColeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `LocalColeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `LocalColeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `LocalColeta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LocalColeta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cidade_id" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LocalColeta_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LocalColeta" ("cidade_id", "id") SELECT "cidade_id", "id" FROM "LocalColeta";
DROP TABLE "LocalColeta";
ALTER TABLE "new_LocalColeta" RENAME TO "LocalColeta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
