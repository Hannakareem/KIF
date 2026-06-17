import { CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-[36px] pt-[150px] pb-[20px]">
      <div
        className="text-white uppercase"
        style={{ fontFamily: "Futura PT, Futura, sans-serif" }}
      >
        <h1 className="text-[110px] leading-[0.88] tracking-[-4px] font-normal">
          SHAPING
        </h1>

        <h1 className="text-[110px] leading-[0.88] tracking-[-4px] font-normal">
          THE <span className="text-[#FF3B30]">FUTURE</span>
        </h1>

        <h1 className="text-[110px] leading-[0.88] tracking-[-4px] font-normal">
          OF INNOVATION
        </h1>
      </div>

      <div
        className="flex items-center gap-16 mt-8 text-white"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="flex items-center gap-3">
          <CalendarDays size={24} strokeWidth={1.7} />
          <span className="text-[18px]">
            25–26 September 2026
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={24} strokeWidth={1.7} />
          <span className="text-[18px]">
            Kerala Startup Mission, Kochi
          </span>
        </div>
      </div>
    </section>
  );
}