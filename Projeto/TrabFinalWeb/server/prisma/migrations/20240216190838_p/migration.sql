-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "raca" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "dono_id" INTEGER NOT NULL,
    CONSTRAINT "Pet_dono_id_fkey" FOREIGN KEY ("dono_id") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
