import { Button } from "./button";

export interface AgendaSelected {
  id: string;
  date: string;
}

function Modal({
  isVisible,
  onClose,
  agendaSelected,
}: {
  isVisible: boolean;
  onClose: () => void;
  agendaSelected: AgendaSelected | null;
}) {
  if (!isVisible) return null;

  const handleOutSideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-end"
      onClick={handleOutSideClick}
    >
      <div className="bg-white rounded-t-3xl w-full h-full max-h-72 max-w-96 mx-auto text-center flex flex-col gap-8 p-8">
        <h2 className="font-semibold text-2xl">Confirmar o agendamento</h2>
        <p className="text-sm text-[#878787]">
          Agendamento para o dia{" "}
          <span className="font-semibold">03/06/2024 as 15:00</span>
        </p>
        <Button>Sim, quero confirmar</Button>
      </div>
    </div>
  );
}

export default Modal;
