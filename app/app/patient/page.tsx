import Card from "@/components/card";
import Header from "@/components/header";

function Patient() {
  return (
    <>
      <Header href="/" title="Meus agendamentos" iconClassName="w-4 h-4" />

      <div className="border border-gray-100 p-3 rounded-lg mt-5 flex justify-between">
        <button className="font-semibold bg-[#459487] hover:bg-[#54a396] text-white px-9 py-2 rounded-md transition-all">
          Próximos
        </button>
        <button className="font-semibold px-9 py-2 rounded-md text[#3F3F3F] hover:bg-slate-50 transition-all">
          Realizados
        </button>
      </div>

      <div>
        <h2 className="font-semibold text-lg my-4">Hoje</h2>

        <Card
          date="2024-05-15T11:00:00.000Z"
          firstName="Daniel"
          id="1"
          made={false}
          photo="photo-3.png"
          speciality="Clinico Geral"
        />

        <h2>Amanha</h2>
      </div>
    </>
  );
}

export default Patient;
