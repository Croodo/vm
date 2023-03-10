import list from "~~/shortsIds";

export default defineEventHandler(async (event) => {
  const ids = [];
  Object.keys(list).forEach((e) => {
    ids.push(...list[e].splice(0, 1));
  });
  const randomizedIds = ids
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  let count = 0;
  const IntvlId = setInterval(async () => {
    const response = await fetch(
      "http://192.168.1.5:58585/api/yt/fetch/" + randomizedIds[count]
    );
    if (count === randomizedIds.length - 1) {
      clearInterval(IntvlId);
    }
    count++;
  }, 26000);
  return randomizedIds;
});
