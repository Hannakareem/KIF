import ScheduleView from "../../components/schedule/ScheduleView";
import schedule from "../../data/schedule.json";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <ScheduleView friday={schedule.friday} saturday={schedule.saturday} />
    </main>
  );
}
