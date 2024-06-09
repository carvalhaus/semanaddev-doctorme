"use client";

import Agenda from "@/components/agenda";
import Header from "@/components/header";
import Icon from "@/components/icon";
import Modal, { AgendaSelected } from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

function Doctor({ params }: Readonly<{ params: { id: string } }>) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [agendaSelected, setAgendaSelected] = useState<AgendaSelected | null>(
    null
  );

  const closeModal = () => setIsModalVisible(false);

  const handleSelectAgenda = ({ id, date }: AgendaSelected) => {
    setAgendaSelected({
      id,
      date,
    });

    setIsModalVisible(true);
  };

  const doctor = {
    firstName: "Vinicius",
    lastName: "Campos",
    speciality: "Oftalmologista",
    state: "RS",
    city: "Porto Alegre",
    photo: "photo-4.png",
    bio: "Médico formado pela FMU com especialidade em Oftalmologista",
    price: "200",
    attendances: "150",
    experience: "8 anos",
    availability: "Segunda à Sexta das 10:00 às 16:00",
    address: "8538 Welch Vista",
    agenda: [
      {
        id: "1",
        date: "2024-05-15T11:00:00.000Z",
        availability: true,
      },
      {
        id: "2",
        date: "2024-05-15T14:00:00.000Z",
        availability: true,
      },
      {
        id: "3",
        date: "2024-05-15T15:00:00.000Z",
        availability: true,
      },
      {
        id: "4",
        date: "2024-05-15T18:00:00.000Z",
        availability: true,
      },
    ],
  };
  return (
    <>
      <Header href="/" title="Agenda" iconClassName="w-4 h-4" />
      <div className="bg-[#459487] flex gap-4 text-white px-3 py-4 rounded-xl my-5">
        <Image
          src={`/photos/${doctor.photo}`}
          alt={doctor.firstName}
          width={76}
          height={76}
          className="rounded-xl"
        />

        <div>
          <h1 className="font-semibold">
            Dr. {doctor.firstName} {doctor.lastName}
          </h1>
          <p className="text-xs">{doctor.speciality}</p>
          <p className="text-xs">
            <Icon name="map" className="w-3 h-3 text-white">
              {doctor.city}, {doctor.state}
            </Icon>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-sm font-semibold p-3 border border-gray-100">
          {doctor.bio}
        </p>

        <div className="border-b border-b-gray-100 flex justify-center">
          <div className="w-1/2">
            <h2 className="text-[#9F9F9F]">Valor consulta</h2>
            <p className="font-semibold">R${doctor.price},00</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-[#9F9F9F]">Atendimentos</h2>
            <p className="font-semibold">+{doctor.attendances}</p>
          </div>
        </div>

        <div className="border-b border-b-gray-100 flex justify-center">
          <div className="w-1/2">
            <h2 className="text-[#9F9F9F]">Formação</h2>
            <p className="font-semibold">Doutor</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-[#9F9F9F]">Experiência</h2>
            <p className="font-semibold">+{doctor.experience}</p>
          </div>
        </div>

        <div className="border-b border-b-gray-100 flex">
          <div>
            <h2 className="text-[#9F9F9F]">Disponibilidade</h2>
            <p className="font-semibold">{doctor.availability}</p>
          </div>
        </div>

        <div className="border-b border-b-gray-100 flex">
          <div>
            <h2 className="text-[#9F9F9F]">Localização</h2>
            <p className="font-semibold">
              {doctor.address}, {doctor.city}-{doctor.state}
            </p>
          </div>
        </div>

        <h2 className="border border-gray-100 p-2 text-center font-semibold">
          Horários disponíveis
        </h2>

        <div className="flex justify-between px-4">
          <p>Hoje</p>
          <Agenda agenda={doctor.agenda} onSelectAgenda={handleSelectAgenda} />
        </div>

        <div className="flex justify-between px-4">
          <p>Amanha</p>
          <Agenda agenda={doctor.agenda} onSelectAgenda={handleSelectAgenda} />
        </div>

        <Modal
          isVisible={isModalVisible}
          onClose={closeModal}
          agendaSelected={agendaSelected}
        />
      </div>
    </>
  );
}

export default Doctor;
