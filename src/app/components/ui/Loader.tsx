const dashboardCards = [
  {
    name: "nav",
    className: "col-[1/-1] flex items-center rounded-lg bg-[#282828] px-1.5",
  },
  {
    name: "profile",
    className:
      "col-[1/3] row-[2/5] bg-gradient-to-br from-[#2b2b2b] to-[#202020]",
  },
  { name: "experience", className: "col-[3/5] row-[2/4] bg-[#282828]" },
  {
    name: "projects",
    className: "col-[5/7] row-[2/5] bg-spotify-green/25",
  },
  { name: "reads", className: "col-[3/5] row-[4/5] bg-[#282828]" },
  {
    name: "contributions",
    className:
      "col-[1/5] row-[5/6] bg-[repeating-linear-gradient(90deg,rgba(29,185,84,0.45)_0_5px,#242424_5px_8px)]",
  },
  { name: "spotify", className: "col-[5/7] row-[5/6] bg-[#34474f]" },
] as const;

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-spotify-black"
      role="status"
      aria-label="Loading portfolio"
    >
      <div
        className="grid w-[200px] grid-cols-[repeat(6,30px)] grid-rows-[16px_34px_34px_22px_18px] gap-1"
        aria-hidden="true"
      >
        {dashboardCards.map((card, index) => (
          <div
            className={`min-w-0 translate-y-1 scale-[0.97] rounded bg-[#282828] opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] animate-dashboard-card motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:animate-none motion-reduce:opacity-100 ${card.className}`}
            style={{ animationDelay: `${index * 25}ms` }}
            key={card.name}
          >
            {card.name === "nav" && (
              <span className="text-[7px] font-bold tracking-[-0.08em] text-spotify-green">
                &lt;/&gt;
              </span>
            )}
          </div>
        ))}
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}
