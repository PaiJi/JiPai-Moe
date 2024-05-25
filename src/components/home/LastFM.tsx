import clsx from "clsx";
import { ContainerStyle } from "@utils/define";
import Loading from "@components/Loading";
import type { LastFM as ILastFM } from "../../types/api";
import { FaSpotify } from "react-icons/fa";

export default function LastFM({
  recentlyListen,
  loading,
}: {
  loading: boolean;
  recentlyListen: ILastFM;
}) {
  if (loading || !recentlyListen) {
    return (
      <div
        className={clsx(
          "text-right bg-red-100 flex justify-between",
          ContainerStyle
        )}
      >
        <Loading />
      </div>
    );
  }
  const track = recentlyListen.recenttracks.track[0];
  const { url, name } = track;
  const trackLargeCover = track.image[2];

  return (
    <a
      href={url}
      className={clsx("bg-red-100 flex justify-between", ContainerStyle)}
    >
      <div className="p-4 flex items-center">
        {trackLargeCover["#text"] ? (
          <img
            className="max-w-[150px] max-h-[150px] w-full"
            src={trackLargeCover["#text"]}
          />
        ) : (
          <div className="w-[150px] h-[150px] flex items-center justify-center bg-gray-200 rounded-lg">
            <FaSpotify className="text-4xl text-green-500" />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between p-4 pl-0 text-gray-400 overflow-hidden text-right flex-shrink">
        <span className="text-xs">Recently Listening</span>
        <div className="text-right">
          <h3 className="text-slate-600">{name}</h3>
          <p className="text-xs text-slate-400">{track.album["#text"]}</p>
        </div>
      </div>
    </a>
  );
}
