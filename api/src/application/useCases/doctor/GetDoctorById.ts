import DatabaseService from "@/infra/DatabaseService";
import { BusinessError } from "@/infra/helpers/Errors";

export default class GetDoctorByIdUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(id: number) {
    const INCLUDE_AGENDA = true;
    const doctor = await this.database.getDoctorById(id, INCLUDE_AGENDA);

    if (!doctor) {
      throw new BusinessError("No doctor found");
    }

    return doctor;
  }
}
