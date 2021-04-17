<template>
  <div id="cost-Counter">Cost $ {{ costCalc }}</div>
</template>
<script>
// your vue component
export default {
  props: ['costCalc'],
  data() {
    return {
      timerEnabled: false,
      costCalc: 0,
    };
  },

  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.costCalc++;
        }, 1000);
      }
    },

    costCalc: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.costCalc++;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  methods: {
    play() {
      this.timerEnabled = true;
    },

    pause() {
      this.timerEnabled = false;
    },
  },
};
</script>
