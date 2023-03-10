import ytdl from "ytdl-core";
import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const uri =
    "https://vidmatevideos.vercel.app/api/yt/mongo/" +
    event.context.params.video;
  const response = await fetch(uri);
  const body = await response.json();
  // return body;
  const next = await Post.find(
    {
      _id: { $lt: body._id },
    },
    {
      _id: 0,
      seourl: 1,
    }
  )
    .sort({ _id: -1 })
    .limit(1);
  let info = await ytdl.getInfo(
    "https://www.youtube.com/shorts/" + body.videoId
  );
  return {
    details: {
      videoId: info.videoDetails.videoId,
      title: info.videoDetails.title,
      keywords: info.videoDetails.keywords,
      channelId: info.videoDetails.channelId,
      description: info.videoDetails.description,
      lengthSeconds: info.videoDetails.lengthSeconds,
      thumbnail: info.videoDetails.thumbnails.find((o) => o.width === 1920),
      category: info.videoDetails.category,
      viewCount: info.videoDetails.viewCount,
      author: info.videoDetails.author,
      date: body.date,
    },
    formats: info.formats,
    next,
  };
});
