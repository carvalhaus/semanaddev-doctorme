import AgendaButton from "./agenda-button";
import { AgendaSelected } from "./modal";

type AgendaProps = {
  id: string;
  date: string;
  availability: boolean;
};

function Agenda({
  agenda,
  onSelectAgenda,
}: {
  agenda: AgendaProps[];
  onSelectAgenda: ({ id, date }: AgendaSelected) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {agenda.map((item) => (
        <AgendaButton key={item.id} {...item} onClick={onSelectAgenda} />
      ))}
    </div>
  );
}

export default Agenda;
