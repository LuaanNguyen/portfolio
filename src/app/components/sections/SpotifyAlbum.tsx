import React from "react";

const SpotifyAlbum: React.FC = () => {
  return (
    <div className="max-md:hidden col-span-1 row-span-1 col-start-2 animate-card-reveal [animation-delay:350ms] motion-reduce:animate-none xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-7 bg-spotify-black rounded-xl min-h-[152px]">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/track/0a32EBPjqAe47cYDPE5Ia5?utm_source=generator&si=4c7e752b6e1b4ac1"
        title="Spotify track player"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "100%", width: "100%" }}
      ></iframe>
    </div>
  );
};

export default SpotifyAlbum;
