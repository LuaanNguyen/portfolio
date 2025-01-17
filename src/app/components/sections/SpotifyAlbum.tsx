import React, { useEffect, useState } from "react";

const SpotifyAlbum: React.FC = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black border-t-2 rounded-xl">
      {loading ? (
        <div className="bg-spotify-gray rounded-xl p-4 max-w-lg w-full mx-auto h-[140px]">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-spotify-black rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-spotify-black rounded col-span-2"></div>
                  <div className="h-2 bg-spotify-black rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-spotify-black rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full rounded-xl"
          src="https://open.spotify.com/embed/album/7txGsnDSqVMoRl6RQ9XyZP?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ height: "100%", width: "100%" }}
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyAlbum;
