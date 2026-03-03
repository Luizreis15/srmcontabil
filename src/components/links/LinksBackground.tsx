import logoSmr from "@/assets/logo-smr.png";

export function LinksBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/95" />

      {/* Floating orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/15 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[120px] animate-float-medium" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/8 blur-[80px] animate-float-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-primary/6 blur-[60px] animate-float-medium" style={{ animationDelay: "5s" }} />

      {/* Large watermark logo with breathing animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-logo-breathe">
        <img
          src={logoSmr}
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] object-contain opacity-[0.04]"
        />
      </div>
    </div>
  );
}
