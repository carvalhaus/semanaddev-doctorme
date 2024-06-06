import DatabaseService from "@/infra/DatabaseService";
import { BusinessError } from "@/infra/helpers/Errors";

export default class CreateAppointmentUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(patientId: number, agendaId: number) {
    const patient = await this.database.getPatientById(patientId);

    if (!patient) {
      throw new Error("Patient not found");
    }

    const agenda = await this.database.getAgendaById(agendaId);

    if (!agenda?.available) {
      throw new BusinessError("Agenda is not available for this date");
    }

    await this.database.updateAgenda(agenda.id, { available: false });

    const appointment = await this.database.createAppointment(
      patient.id,
      agenda.doctorId,
      agenda.date
    );

    return appointment;
  }
}
