-- SQLBook: Code
BEGIN;

DROP TABLE IF EXISTS "role" CASCADE;
DROP TABLE IF EXISTS "avatar" CASCADE;
DROP TABLE IF EXISTS "collaborator" CASCADE;
DROP TABLE IF EXISTS "information" CASCADE;
DROP TABLE IF EXISTS "action" CASCADE;
DROP TABLE IF EXISTS "phone" CASCADE;
DROP TABLE IF EXISTS "notification_date" CASCADE;
DROP TABLE IF EXISTS "sector" CASCADE;



CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL
);

CREATE TABLE "avatar" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

CREATE TABLE "collaborator" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "acces" BOOLEAN NOT NULL DEFAULT FALSE,
    "secret_key" TEXT,
    "role_id" INTEGER REFERENCES "role" ("id"),
    "avatar_id" INTEGER REFERENCES "avatar" ("id")
);

CREATE TABLE "sector" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "color_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "code_zip" INT NOT NULL,
    "collaborator_id" INTEGER NOT NULL REFERENCES "collaborator" ("id")
);

CREATE TABLE "information" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" TEXT NOT NULL,
    "owner_name" TEXT,
    "owner_email" TEXT,
    "address_number" INT NOT NULL,
    "address_street" TEXT NOT NULL,
    "code_zip" INT NOT NULL,
    "address_city" TEXT NOT NULL,
    "address_info" TEXT,
    "source" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "comment" TEXT,
    "date" DATE NOT NULL,
    "collaborator_id" INTEGER NOT NULL REFERENCES "collaborator" ("id"),
    "sector_id" INTEGER NOT NULL REFERENCES "sector" ("id")
);

CREATE TABLE "action" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    --"etat" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "information_id" INTEGER NOT NULL REFERENCES "information" ("id") ON DELETE CASCADE
);
CREATE TABLE "phone" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "phone_number" TEXT NOT NULL,
    "information_id" INTEGER NOT NULL REFERENCES "information" ("id") ON DELETE CASCADE
);

CREATE TABLE "notification_date" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "date_of_notifcation" DATE,
    "action_id" INTEGER NOT NULL REFERENCES "action" ("id") ON DELETE CASCADE
);

COMMIT;