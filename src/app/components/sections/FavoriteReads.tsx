import Image from "next/image";

const favoriteReads = [
  {
    title: "On Earth We're Briefly Gorgeous",
    author: "Ocean Vuong",
    cover: "/books/on-earth-were-briefly-gorgeous.webp",
  },
  {
    title: "Dune Messiah",
    author: "Frank Herbert",
    cover: "/books/dune-messiah.webp",
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    cover: "/books/outliers.webp",
  },
  {
    title: "Insanely Simple",
    author: "Ken Segall",
    cover: "/books/insanely-simple.webp",
  },
  {
    title: "Trên Đường Băng",
    author: "Tony Buổi Sáng",
    cover: "/books/tren-duong-bang.webp",
  },
  {
    title: "All the Pretty Horses",
    author: "Cormac McCarthy",
    cover: "/books/all-the-pretty-horses.webp",
  },
] as const;

export default function FavoriteReads() {
  return (
    <section
      className="h-[222px] col-span-1 row-span-1 col-start-2 row-start-2 xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="favorite-reads"
      aria-labelledby="favorite-reads-heading"
    >
      <div className="flex h-full min-w-0 flex-col p-4">
        <div className="mb-3 flex items-center">
          <h2 id="favorite-reads-heading" className="text-xl font-bold">
            Favorite Reads
          </h2>
        </div>

        <ul
          className="flex min-h-0 min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 pr-2 cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spotify-green"
          aria-label="Favorite books"
          tabIndex={0}
        >
          {favoriteReads.map((book) => (
            <li className="group w-16 shrink-0 snap-start" key={book.title}>
              <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-black/20 shadow-lg shadow-black/20 ring-1 ring-white/10 transition-colors group-hover:ring-white/25">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 line-clamp-2 text-xs font-semibold leading-4 text-spotify-white transition-colors group-hover:text-spotify-green">
                {book.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
