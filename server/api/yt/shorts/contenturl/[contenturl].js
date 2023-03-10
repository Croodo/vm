import ytdl from "ytdl-core";
import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const uri =
    "https://vidmatevideos.vercel.app/api/yt/mongo/" +
    event.context.params.contenturl;
  const response = await fetch(uri);
  const body = await response.json();
  // return body;
  let info = await ytdl.getInfo(
    "https://www.youtube.com/shorts/" + body.details.videoId
  );
  return {
    contentUrl: info.formats.find(
      (o) => o.hasVideo === true && o.hasAudio === true && o.container === "mp4"
    ).url,
  };
});
