import { formatHour } from "@/helpers";
import { AgendaSelected } from "./modal";

function AgendaButton({
  id,
  date,
  availability,
  onClick,
}: {
  id: string;
  date: string;
  availability: boolean;
  onClick: ({ id, date }: AgendaSelected) => void;
}) {
  return (
    <button
      className="text-sm font-semibold text-[#459487] bg-[#E3F2F1] hover:bg-[#c7f7f3] rounded-md px-3 py-1"
      onClick={() => onClick({ id, date })}
    >
      {formatHour(new Date(date))}
    </button>
  );
}

export default AgendaButton;
