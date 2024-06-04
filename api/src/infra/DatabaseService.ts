import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    //logica de acesso ao db

    return this.connection.doctor.findMany();
  }
}

export const database = new DatabaseService(new PrismaClient());
