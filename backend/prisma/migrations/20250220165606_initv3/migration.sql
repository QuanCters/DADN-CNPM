/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "access_token" VARCHAR(255) DEFAULT '',
    "salt" VARCHAR(255) DEFAULT '',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_control_device" (
    "user_email" VARCHAR(255) NOT NULL,
    "device_id" INTEGER NOT NULL,
    "control_time" TIMESTAMP(6),

    CONSTRAINT "user_control_device_pkey" PRIMARY KEY ("user_email","device_id")
);

-- CreateTable
CREATE TABLE "device" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "power_rating" VARCHAR(50) NOT NULL,
    "room_name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "measurement" (
    "id" SERIAL NOT NULL,
    "usage_time" TIMESTAMP(6) NOT NULL,
    "consumption" INTEGER,
    "device_id" INTEGER,

    CONSTRAINT "measurement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "device_id" INTEGER NOT NULL,
    "time_action" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("time_action","device_id")
);

-- CreateTable
CREATE TABLE "log_event" (
    "id" SERIAL NOT NULL,
    "time_in" TIMESTAMP(6),
    "time_out" TIMESTAMP(6),
    "action" VARCHAR(255),
    "device_id" INTEGER,

    CONSTRAINT "log_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "content" TEXT,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_have_notification" (
    "notification_id" INTEGER NOT NULL,
    "device_id" INTEGER NOT NULL,
    "notification_time" TIMESTAMP(6),

    CONSTRAINT "device_have_notification_pkey" PRIMARY KEY ("notification_id","device_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "idx_user_email" ON "user"("email");

-- CreateIndex
CREATE INDEX "idx_device_roomname" ON "device"("room_name");

-- AddForeignKey
ALTER TABLE "user_control_device" ADD CONSTRAINT "user_control_device_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_control_device" ADD CONSTRAINT "user_control_device_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "measurement" ADD CONSTRAINT "measurement_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_event" ADD CONSTRAINT "log_event_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_have_notification" ADD CONSTRAINT "device_have_notification_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_have_notification" ADD CONSTRAINT "device_have_notification_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
