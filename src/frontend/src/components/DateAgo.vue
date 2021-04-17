<template>
  <time-ago refresh long locale="en" :datetime="date">
    <template #default="{ timeago }">
      <span class="text-rrgray-600 text-sm">
        {{ timeago }}
      </span>
    </template>
  </time-ago>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeAgo from "vue3-timeago";

export default defineComponent({
  name: "DateAgo",
  components: { TimeAgo },
  props: {
    date: {
      type: Date,
      default: new Date()
    }
  }
});
</script>
