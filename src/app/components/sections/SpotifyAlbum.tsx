import React from "react";

const SpotifyAlbum: React.FC = () => {
  return (
    <div className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black rounded-xl">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/album/3Dx1IXTwJVIMkEzVMSSSrp?utm_source=generator"
        title="Spotify album player"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "100%", width: "100%" }}
      ></iframe>
    </div>
  );
};

export default SpotifyAlbum;
