<script setup>
import accordionItem from "../accordion/accordion-item.vue";
import accordion from "../accordion/accordion.vue";

components: {
  accordion, accordionItem;
}

const faqs = [
  {
    q: "How to Install VidMate?",
    a: "<p>To install Vidmate you need to download the latest version of Vidmate Apk and follow Android unknown sources installation prosses, as It can't be install directly from PlayStore.</p>",
  },
  {
    q: "How to Install VidMate App on iPhone, iPad, or PC?",
    a: "<p>Vidmate has not been published for Windows and Mac Users. It’s Only Available for Android Users</p>",
  },
  {
    q: "How to download YouTube Videos?",
    a: `<p>Downloading YouTube videos with vidmate is pretty simple. Just follow these steps -</p>
 <ul class="list-decimal">
  <li>Open the vidmate app and open YoTube in it by clicking on the Youtube icon or writing Youtube URL in the home screen search navigation.</li>
 <li>Browse for the video you wish to download and then click on the download button.
 Choose the quality format of video or audio to start downloading content in your desired format.</li>
 <li>Once the Download is completed, click on the download icon from the top right corner to locate all your downloads</li></ul>`,
  },
  {
    q: "How to download movies?",
    a: `<p>To download movies with vidmate follow these steps - </p>
 <ul class="list-decimal">
  <li>Open the Vidmate app and click on the movies tab.</li>
 <li>Tap on Filter and search for your desired movies with movie name or you can filter out movies by browsing them with different tags like Bollywood Movies, Hollywood Movies, and Tollywood Movies, and even you can filter out all the latest and old movies with language and genre.</li>
 <li>Once you found your desired movie, click on the download button to start downloading (or you can play movies online).</li>
 <li>Select Movies format from 144p, 360p, 480p, 720p, or Full HD (in whatever format you wish to download the movies) then click on download.</li>
<li>Once downloaded, click on the download icon from the top right corner to locate and play.
 You can also stream movies online by just clicking on them.</li></ul>`,
  },
  {
    q: "How to download Facebook videos?",
    a: `<p>To Download Facebook Videos with Vidmate follow these steps -</p> 
<ul class="list-decimal"><li>First, open the app, click on the Facebook icon(or just go facebook site from the home page search navigation), and log in with your Facebook account.</li>
 <li>Browse and found the video you wish to download and click on the download button and choose the video quality.</li>
<li>Once Downloaded, navigate to the download page where all of your downloaded content is listed.</li></ul>`,
  },
  {
    q: "How to download FREE music?",
    a: `<p>Steps to download Free Music with Vidmate app -</p> 
<ul class="list-decimal"><li>Open the app and click on Music Channel from the home screen site navigation bar.
Choose the music genre you want to download.</li>
<li>Open the song by clicking on it and then clicking on the download button.</li>
 <li>Choose the quality in which you wish to download your favorite song.</li>
<li>Once Downloaded, click on the download icon located in the top right corner to play music.</li></ul>`,
  },
  {
    q: "How to download Instagram Videos?",
    a: `<p>Follow these steps to download Instagram videos with vidmate -</p> 
 <ul class="list-decimal"><li>Open the Instagram app and go to the Instagram site from the home screen search navigation.</li>
 <li>Log into your Instagram account and then open the video you wish to download.
Click on the download button.</li>
<li>Once Downloading is finished. Navigate to the download page and click on play.</li></ul>`,
  },
];
</script>
<template>
  <accordion head="FAQ About Vidmate">
    <accordion-item v-for="(faq, index) in faqs" :key="index">
      <template v-slot:accordion-trigger> {{ faq.q }} </template>
      <template v-slot:accordion-content>
        <div v-html="faq.a"></div>
      </template>
    </accordion-item>
  </accordion>
</template>
