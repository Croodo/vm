import ytpl from "ytpl";
import fs from "fs";
import list from "~~/shortsIds";
export default defineEventHandler(async (event) => {
  const id = event.context.params.cid;
  const playlist = await ytpl(id, { pages: 10 });

  if (!Object.keys(list).includes(id)) {
    list[id] = playlist.items.map((item) => {
      return item.id;
    });
    const newList = `const list = 
  ${JSON.stringify(list)}
  module.exports = list`;
    fs.writeFile("shortsIds.js", newList, "utf-8", (err) => {
      if (err) {
        return err;
      }
    });
    return list[id];
  } else {
    return "Data Already Exist";
  }
});
