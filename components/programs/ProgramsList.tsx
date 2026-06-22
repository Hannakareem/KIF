import Programs from "./Programs";
import type { Program } from "../../lib/types";

export default function ProgramsList({ items }: { items?: Program[] }) {
  return <Programs items={items} />;
}
