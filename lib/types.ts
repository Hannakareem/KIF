export interface Program {
  id: number;
  title: string;
  desc: string;
}

export interface Speaker {
  id: number;
  name: string;
  title?: string;
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
