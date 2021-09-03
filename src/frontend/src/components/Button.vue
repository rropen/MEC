<template>
  <button
    type="button"
    class="shadow-lg"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import "./button.css";
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
});

const emits = defineEmits(["click"]);

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

function onClick() {
  emits("click");
}
</script>
