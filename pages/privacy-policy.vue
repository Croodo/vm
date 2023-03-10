<script setup>
import MainHeader from "~~/components/ui/MainHeader.vue";

components: {
  MainHeader;
}
useHead({
  title: "Privacy Policy - VidMate",
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content: "Terms & Privacy Policy - VidMate",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/privacy-policy" },
  ],
});
</script>
<template>
  <MainHeader />
  <div class="lg:w-[90%] px-6 lg:px-0 m-auto">
    <div class="prose-base md:prose-xl py-12 max-w-4xl">
      <p>
        At VidMateVideos.in we consider privacy as a priority because we
        understand how important a user personal information can be. We assure
        you that all the information we collect from you will be kept private
        and away from spammers. We had created this privacy page so that user
        can better know about the information we collect and why do we collect
        them.
      </p>

      <p>What Information Do we Collect?</p>
      <ul>
        <li>
          <strong>1) COOKIES</strong>
          <br />
          Yes, we do store cookies sometimes to provide the user with the
          quality experience. Cookies are small text files that are sent by
          VidMateVideos.in to user's device to identify browsers. These text
          files help in delivering you relevant content and hence better
          browsing experience. Cookies don't harm your device in any manner as
          they are generated with the sole intention of better content and ads
          delivery. Please note that VidMateVideos.in automatically erases all
          the cookies every 24 hours.
        </li>
        <li>
          <strong>2) LOG FILES</strong>
          <br />
          We may also utilize the data located in the log file. A Log File may
          consist of user's Internet Protocol Address(IP Address), Internet
          Service Provider (ISP), Web Browser. Log File may also include the
          time user visited VidMateVideos.in and the pages visited by them.
        </li>
        <li>
          <strong>3) DEVICE INFORMATION</strong>
          <br />
          We also collect user's device information by which they visit
          VidMateVideos.in, So that we may deliver the specific web page we had
          optimized for their device.
        </li>
      </ul>
      <p>
        VidMateVideos.in only gathers the above-listed information from users.
        Now the question arises that Why Do We Need To Collect Users
        Information? Or What We Do With This Information?
      </p>
      <p>
        Well, even we don't like to store someone's personal information
        unnecessarily unless it becomes too important. Read out below to know
        more.
      </p>
      <br />
      <p>Why Do We Collect User Information?</p>
      <ul>
        <li>1. To deliver users the best-optimized page for their device.</li>
        <li>
          2. To help VidMateVideos.in identify the returning users and hence
          providing them cached version for faster page load.
        </li>
        <li>3. To increase the user interaction to the site.</li>
        <li>4. To update users with site maintenance and issues.</li>
        <li>
          5. To deliver better ad content or we can say relevant ads that keep
          users interests in mind.
        </li>
      </ul>
      <p>
        For Any Other Information You Can Contact Us at: help@vidmatevideos.in
      </p>
    </div>
  </div>
</template>