import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const resultsPerPage = 30;
  let page = query.page >= 1 ? query.page : 1;
  page = page - 1;
  const post = await Post.find(
    {},
    { title: 1, seourl: 1, thumbnail: 1, videoId: 1, author: 1 }
  )
    .sort({ _id: -1 })
    .limit(resultsPerPage)
    .skip(resultsPerPage * page);

  const total = await Post.find({}).countDocuments();
  return {
    posts: post,
    total_pages: Math.ceil(total / resultsPerPage),
  };
});
