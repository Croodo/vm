// var request = require("request");

export default defineEventHandler(async (event) => {
  const id =
    "https://apk-dym.v-mate.mobi/data/apk/vidmate_v5.0715_20230117115140.apk";
  fetch(id).pipe(event.node.res);
});
