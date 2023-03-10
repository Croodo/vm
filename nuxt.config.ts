// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vite: {
  //  build: {
  //    cssCodeSplit: false
  //  }
  // },
  css: ['~/assets/css/main.css'],

  postcss: { 
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  modules: ['nuxt-icon', 'nuxt-schema-org', 'nuxt-unhead',  '@nuxt/content',],
  

  //      delayHydration: {
  //    mode: 'init',
  //   // enables nuxt-delay-hydration in dev mode for testing  
  //   debug: process.env.NODE_ENV === 'development'
  // },

  unhead: {

  },
      
     nitro: {
      plugins: ["~/server/api/db/index.ts"],
 
  },
       schemaOrg: {
         host: 'https://www.vidmatevideos.in',
          tagPosition: 'head', 
  },
  app: {
       head: {
      htmlAttrs: {
    lang: "en",
     },
      meta: [
         { name: "google-site-verification", content: "Q2Uc7nu2l1JcQy1NOugeew30pIu7ylrWY9oBBvhIMS0" },
 { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover"}
], link: [
       { rel: "apple-touch-icon", sizes: "180x180", href: "/images/ic/apple-touch-icon.png" },
       { rel: "icon", type:"image/png", sizes: "32x32", href: "/images/ic/favicon-32x32.png" },{ rel: "icon", type:"image/png", sizes:"16x16", href: "/images/ic/favicon-16x16.png" },{
      rel: "icon",  type: "image/x-icon", href: "/images/ic/favicon.ico"
    },
     ],
    
}  
  }, 

})
