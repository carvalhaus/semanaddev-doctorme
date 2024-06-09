import { formatHour } from "@/helpers";
import Image from "next/image";

type AppointmentProps = {
  id: string;
  firstName: string;
  photo: string;
  speciality: string;
  date: string;
  made: boolean;
};

function Card(appointment: AppointmentProps) {
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex flex-col">
        {formatHour(new Date(appointment.date))}
        <span className="border-b border-dashed"></span>
        {formatHour(new Date(appointment.date), true)}
      </div>

      <div className="flex p-4 rounded-lg bg-green-50 w-full items-center relative gap-4">
        <span className="absolute -m-4 w-[2px] h-[60px] bg-[#50A499] rounded-r-lg"></span>
        <div>
          <Image
            src={`/photos/${appointment.photo}`}
            alt={appointment.firstName}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{appointment.firstName}</h2>
          <p className="text-[#151A21]">{appointment.speciality}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
