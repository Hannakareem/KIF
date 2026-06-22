import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-40 bg-transparent text-white">
      <div className="nav-inner">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/nav/kif-logo.png" alt="KIF Logo" width={170} height={50} priority />
          </Link>
        </div>
        <div className="hidden md:block" style={{ position: 'absolute', left: '70%', transform: 'translateX(-50%)' }}>
          <div className="nav__links">
            <Link href="/">Home</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/speakers">Speakers</Link>
            <Link href="/partners">Partners</Link>
          </div>
        </div>

        <div className="flex items-center">
          <a href="https://tickets.startupmission.in/kerala-innovation-festival" target="_blank" rel="noreferrer" className="btn btn--primary">Register Now</a>
        </div>
      </div>
    </nav>
  );
}
