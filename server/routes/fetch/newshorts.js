export default defineEventHandler(async (event) => {
  const response = await fetch(`` + event.context.params.video);
  const result = response;
});
