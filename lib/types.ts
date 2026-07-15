import type { LucideIcon } from "lucide-react";

export interface Program {
  id?: number;
  title: string;
  desc?: string;
  icon?: LucideIcon;
}

export interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface Slot {
  time: string;
  title: string;
  speakers?: string;
}

export type ScheduleData = {
  friday: Slot[];
  saturday: Slot[];
};

export type PartnerLogo = string;
