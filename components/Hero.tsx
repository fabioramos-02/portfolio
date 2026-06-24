import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="avatar-ring relative h-28 w-28 overflow-hidden rounded-full">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          sizes="112px"
          className="rounded-full border-2 border-bg object-cover scale-150 object-[50%_20%]"
        />
      </div>

      <h1 className="mt-5 font-display text-[2rem] font-bold leading-10">
        {profile.name}
      </h1>
      <p className="mt-1 text-base font-semibold text-accent">{profile.role}</p>
      <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
    </header>
  );
}
