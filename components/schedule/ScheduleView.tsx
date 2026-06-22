import Schedule from "./Schedule";
import type { Slot } from "../../lib/types";

export default function ScheduleView({ friday, saturday }: { friday?: Slot[]; saturday?: Slot[] }) {
  return <Schedule friday={friday} saturday={saturday} />;
}
