import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let page = query.page >= 1 ? query.page : 1;
  page = page - 1;
  const post = await Post.find(
    {},
    {
      title: 1,
      seourl: 1,
      thumbnail: 1,
      videoId: 1,
    }
  )
    .sort({ _id: -1 })
    .limit(8);
  return {
    posts: post,
  };
});
