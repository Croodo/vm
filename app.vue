<script setup>
useSchemaOrg({
  "@type": "Organization",
  name: "VidMate",
  url: "https://www.vidmatevideos.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.vidmatevideos.in/_ipx/_/images/vidmate-new-icon.png",
  },
});
</script>

<template>
  <SchemaOrgWebSite
    name="VidMateVideos.in"
    alternateName="VidMate"
    image="https://www.vidmatevideos.in/_ipx/_/images/vidmate-new-icon.png"
    description="VidMate - No.1 Video Downloading App for Android"
  />

  <NuxtLayout><NuxtPage /></NuxtLayout>
</template>
