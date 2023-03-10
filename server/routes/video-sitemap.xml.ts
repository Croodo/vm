import { SitemapStream, streamToPromise } from 'sitemap'
import axios from 'axios'
export default defineEventHandler(async (event) => {
  // Fetch all documents
      let docs = await axios.get("http://www.vidmatevideos.in/api/yt/mongo/all")
      console.log( docs.data.posts);
      
  const sitemap = new SitemapStream({
    hostname: 'https://www.vidmatevideos.in'
  })
  let mainUrls = {
    url: "https://www.vidmatevideos.in",
    changefreq: 'daily',
}

    for (const doc of docs.data.posts) {
    sitemap.write({
      url: "/shorts/" + doc.seourl,
        video: [
      {
       thumbnail_loc: `http://www.vidmatevideos.in/_ipx/s_400x720/thumbnail/vi/${doc.videoId}/maxres2.jpg`,
      title: `${doc.title} by ${doc.author.name}`,
                    description: `${doc.title} ${doc.category} - Short Video by ${doc.author.name}`,
                    content_loc: `https://vid.vidmatevideos.in/stream/${doc.videoId}`,
                    publication_date: doc.date,
                    category: doc.category,
      duration: doc.lengthSeconds, family_friendly: 'YES', live: 'NO'
    },

  ],
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
