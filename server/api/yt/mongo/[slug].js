import Post from "~/server/api/models/shorts";
export default defineEventHandler(async (event) => {
  const post = await Post.findOne({
    seourl: event.context.params.slug,
  });

  const next = await Post.findOne(
    {
      _id: { $lt: post._id },
    },
    {
      _id: 0,
      seourl: 1,
    }
  );

  return {
    details: post,
    next: next,
  };
});
