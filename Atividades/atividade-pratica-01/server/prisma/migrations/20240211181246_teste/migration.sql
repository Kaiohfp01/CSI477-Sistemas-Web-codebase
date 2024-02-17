-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_Id" INTEGER NOT NULL,
    "local_Id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Doacoes_local_Id_fkey" FOREIGN KEY ("local_Id") REFERENCES "locais_coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Doacoes" ("created_at", "data", "id", "local_Id", "pessoa_Id", "updated_at") SELECT "created_at", "data", "id", "local_Id", "pessoa_Id", "updated_at" FROM "Doacoes";
DROP TABLE "Doacoes";
ALTER TABLE "new_Doacoes" RENAME TO "Doacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
