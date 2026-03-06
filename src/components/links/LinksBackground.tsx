import logoSmr from "@/assets/logo-smr-alta.jpeg";

export function LinksBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light blue base */}
      <div className="absolute inset-0 bg-[hsl(195_40%_92%)]" />

      {/* Repeating logo pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${logoSmr})`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(195_40%_92%/0.3)] to-[hsl(195_40%_92%/0.6)]" />
    </div>
  );
}
