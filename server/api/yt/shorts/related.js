import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const resultsPerPage = 30;
  const post = await Post.aggregate([{ $sample: { size: 30 } }]);
  return {
    posts: post,
  };
});
