export type ProjectStatus =
  | "Live"
  | "Winner"
  | "Research"
  | "Open Source"
  | "Hackathon"
  | "Case Study";

export default function ProjectStatusBadge({
  status,
}: {
  status: ProjectStatus;
}) {
  const isLive = status === "Live";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide shadow-sm backdrop-blur-sm ${
        isLive
          ? "bg-spotify-green/90 text-spotify-black"
          : "bg-[#242424]/90 text-spotify-light-gray ring-1 ring-white/10"
      }`}
    >
      {isLive ? (
        <span
          className="h-1.5 w-1.5 rounded-full bg-spotify-black/70"
          aria-hidden="true"
        />
      ) : null}
      {status}
    </span>
  );
}
