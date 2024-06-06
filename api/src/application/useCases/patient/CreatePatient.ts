import DatabaseService from "@/infra/DatabaseService";
import { BusinessError } from "@/infra/helpers/Errors";
import { hashPassword } from "@/infra/helpers/SecurityHelper";

export default class CreatePatientUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(name: string, phone: string, password: string) {
    const patient = await this.database.getPatientByPhone(phone);

    if (patient) {
      throw new BusinessError("Patient already exists with this phone number");
    }

    const hashedPassword = hashPassword(password);

    const user = await this.database.createUser(phone, hashedPassword);

    const newPatient = await this.database.createPatient(name, phone, user.id);

    return newPatient;
  }
}
