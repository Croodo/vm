import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const post = await Post.find(
    {},
    {
      title: 1,
      seourl: 1,
      description: 1,
      videoId: 1,
      lengthSeconds: 1,
      date: 1,
      category: 1,
      author: 1,
    }
  ).sort({ _id: -1 });
  return {
    posts: post,
  };
});
