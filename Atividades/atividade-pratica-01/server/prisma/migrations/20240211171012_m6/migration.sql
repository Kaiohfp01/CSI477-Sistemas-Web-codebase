-- CreateTable
CREATE TABLE "Pessoas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Pessoas_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pessoas_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "Tipos_Sanguineos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tipos_Sanguineos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_Id" INTEGER NOT NULL,
    "local_Id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Doacoes_local_Id_fkey" FOREIGN KEY ("local_Id") REFERENCES "locais_coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Doacoes_pessoa_Id_fkey" FOREIGN KEY ("pessoa_Id") REFERENCES "Pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Doacoes" ("created_at", "data", "id", "local_Id", "pessoa_Id", "updated_at") SELECT "created_at", "data", "id", "local_Id", "pessoa_Id", "updated_at" FROM "Doacoes";
DROP TABLE "Doacoes";
ALTER TABLE "new_Doacoes" RENAME TO "Doacoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
