import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";

type DoctorProps = {
  name: string;
  doctorId: string;
  speciality: string;
  location: string;
};

function Doctor({
  name,
  doctorId,
  speciality,
  location,
}: Readonly<DoctorProps>) {
  return (
    <Link
      href={`doctor/4{doctorId}`}
      className="border border-gray-200 p-4 rounded-xl inline-flex gap-3 flex-col w-full max-w-[150px]"
    >
      <Image
        src={`/photos/photo-${doctorId}.png`}
        alt={name}
        width={76}
        height={76}
        className="rounded-lg"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{name}</h3>
        <p className="font-roboto text-gray-500">{speciality}</p>
      </div>
      <p>
        <Icon name="map" className="w-4 h-4 text-[#FFBB63]">
          {location}
        </Icon>
      </p>
    </Link>
  );
}

export default Doctor;
