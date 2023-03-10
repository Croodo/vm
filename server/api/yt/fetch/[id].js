import ytdl from "ytdl-core";
import Post from "~/server/api/models/shorts";
import list from "~~/shortsIds";
import fs from "fs";
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  for (let item in list) {
    if (list[item].includes(id)) {
      list[item] = list[item].filter((e) => e !== id);
    }
  }
  const newList = `const list = 
  ${JSON.stringify(list)}
  module.exports = list`;
  fs.writeFile("shortsIds.js", newList, "utf-8", (err) => {
    if (err) {
      return err;
    }
  });

  console.log("req sent");
  const videoID = "https://www.youtube.com/shorts/" + event.context.params.id;
  let info = await ytdl.getInfo(videoID);
  let format = ytdl.chooseFormat(info.formats, {
    container: "mp4",
    hasAudio: true,
    hasVideo: true,
    // quality: "22",
  });
  const details = {
    seourl: info.videoDetails.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/-+/g, "-"),
    videoId: info.videoDetails.videoId,
    title: info.videoDetails.title,
    // keywords: info.videoDetails.keywords,
    channelId: info.videoDetails.channelId,
    description: info.videoDetails.description,
    lengthSeconds: info.videoDetails.lengthSeconds,
    thumbnail: info.videoDetails.thumbnails
      .find((o) => o.width === 1920)
      .url.replace(/\?.*/g, ""),
    category: info.videoDetails.category,
    viewCount: info.videoDetails.viewCount,
    author: info.videoDetails.author,
    format,
  };
  const post = new Post(details);
  post.save(function (err) {
    if (err) {
      if (err.code === 11000) {
        // Duplicate username
        return { success: false };
      }
      // Some other error
      console.log(err);

      return { err: true };
    }
  });
  return post;
});
