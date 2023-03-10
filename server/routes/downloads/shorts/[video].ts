import ytdl  from "ytdl-core";
export default defineEventHandler(async (event) => {
    const id = event.context.params.video;
  const videoID = `https://www.youtube.com/watch?v=` + id;

  // let myReadStream = ytdl(videoID, {
  //   filter: (format) =>
  //     format.container === "mp4" &&
  //     format.hasAudio == true &&
  //     format.hasVideo == true,
  // });
  //  event.node.res.writeHead(200, {
  //   "Content-Type": "video/mp4",
  // });
  // myReadStream.pipe(event.node.res);
})
