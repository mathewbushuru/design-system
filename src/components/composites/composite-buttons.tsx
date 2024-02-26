import Button from "@/components/primitives/button";

export function BrandButtons() {
  return (
    <div className="mx-auto grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-4 sm:gap-8  lg:grid-cols-5">
      <Button
        variant="base"
        className="duration-400 rounded-lg bg-foreground text-background transition hover:-translate-y-1"
        size="lg"
      >
        Figma
      </Button>
      <Button
        variant="base"
        className="bg-[#1a73e8] font-normal text-white hover:bg-[#1b66cc]"
        size="lg"
      >
        Google
      </Button>
      <Button
        variant="base"
        className="border border-foreground font-light transition duration-200 hover:shadow-[4px_4px_0px_0px]"
        size="lg"
      >
        Sketch
      </Button>
      <Button
        variant="base"
        className="rounded-full bg-[#1ed760] uppercase tracking-widest text-white hover:brightness-105"
        size="lg"
      >
        Spotify
      </Button>
      <Button
        variant="base"
        className="bg-foreground text-base font-normal text-background hover:opacity-80"
        size="lg"
      >
        Vercel
      </Button>
      {/* <Button variant="base" className="" size="lg">
        Base
      </Button> */}
    </div>
  );
}
