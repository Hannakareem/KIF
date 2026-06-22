import SpeakersList from "../../components/speakers/SpeakersList";
import speakers from "../../data/speakers.json";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <SpeakersList speakersData={speakers} />
    </main>
  );
}
