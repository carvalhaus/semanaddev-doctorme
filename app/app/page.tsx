import Doctor from "@/components/doctor";
import Header from "@/components/header";
import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header
        title="Home"
        href="/sign-in"
        iconName="appointment"
        iconClassName="w-6 h-6"
      >
        <div className="inline-flex gap-2 items-center">
          <Image
            src="/logo-doctorme.png"
            alt="DoctorMe"
            width={48}
            height={48}
          />
          <span className="font-bold text-3xl">DoctorMe</span>
        </div>
      </Header>
      <h1 className="font-bold text-xl">
        Assistente pessoal{" "}
        <span className="w-full flex">para agendar consultas</span>
      </h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-4">
            <div className="bg-[#459487] inline-flex p-3 rounded-xl">
              <div className="text-white font-roboto">
                <h2 className="font-semibold text-sm">Agendamento Hoje</h2>
                <p className="text-xs truncate w-28">100:00 - Clinico Geral</p>
              </div>
            </div>
            <div className="bg-[#459487] inline-flex p-3 rounded-xl">
              <div className="text-white font-roboto">
                <h2 className="font-semibold text-sm">Agendamento Amanhã</h2>
                <p className="text-xs truncate w-28">100:00 - Clinico Geral</p>
              </div>
            </div>
          </div>
          <div className="inline-flex">
            <Link
              href="/sign-in"
              className="inline-flex gap-2 items-center rounded-2xl bg-[#69B6AC] text-white text-xs px-1 py-2"
            >
              <span className="bg-white text-[#69B6AC] w-5 h-5 font-semibold font-roboto rounded-full flex items-center justify-center">
                3
              </span>
              Meus agendamentos
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Médicos disponíveis</h2>
          <div className="flex justify-between">
            <Doctor
              name="Johan"
              doctorId="1"
              speciality="Neurologista"
              location="Porto Alegre"
            />

            <Doctor
              name="Raul"
              doctorId="2"
              speciality="Neurologista"
              location="Porto Alegre"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
