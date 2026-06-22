import Partners from "./Partners";
import type { PartnerLogo } from "../../lib/types";

export default function PartnersGrid({ logos }: { logos?: PartnerLogo[] }) {
  return <Partners logos={logos} />;
}
