import Speakers from "./Speakers";
import type { Speaker } from "../../lib/types";

export default function SpeakersList({
  speakersData,
}: {
  speakersData?: Speaker[];
}) {
  return <Speakers speakersData={speakersData} />;
}