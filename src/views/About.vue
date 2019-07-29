<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Card from "@/components/Card.vue"; // @ is an alias to /src

// @Component({
//   components: {
//     Card
//   },
//   data: () => ({
//     sheet: false,
//     tiles: [
//       { img: "keep.png", title: "Keep" },
//       { img: "inbox.png", title: "Inbox" },
//       { img: "hangouts.png", title: "Hangouts" },
//       { img: "messenger.png", title: "Messenger" },
//       { img: "google.png", title: "Google+" }
//     ]
//   })
// })
export default class About extends Vue {}
</script>