<template>
  <Switch
    v-model="powerpoint"
    :class="[
      powerpoint ? 'bg-rrblue-600' : '!bg-rrgrey-600',
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rrblue-200',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="[
        powerpoint ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    />
  </Switch>
</template>

<script>
// import { ref } from "vue";
import { Switch } from "@headlessui/vue";

export default {
  props: {
    powerpoint: Boolean,
  },
  components: {
    Switch,
  },
  setup(props, context) {
    return {};
  },
};
</script>
