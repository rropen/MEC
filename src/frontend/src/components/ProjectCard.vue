<template>
  <!-- component -->
  <!-- <div class="cardWrapper"> -->
  <div
    class="max-w-xs bg-white text-rrblue shadow-md rounded-sm mt-4 mb-16 mx-4 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    style="border-left: 1px solid #efeff4; border-right: 1px solid #efeff4; border-top: 1px solid #efeff4; border-bottom: 5px solid #10069f;"
  >
    <img
      :class="{
        'border-rrpurple-400': project.projectType == 'DDAP',
        'border-rrteal-400': project.projectType == 'Application',
        'border-rrorange-400': project.projectType == 'Idea'
      }"
      class="h-auto bg-cover mb-2 border-b-6"
      :src="project.image"
      alt="avatar"
    />
    <div class="flex items-center px-6">
      <svg
        class="h-8 w-8 text-rrgrey-600 fill-current"
        version="1.1"
        viewBox="0 0 128 128"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="st0"
          d="m105.27 79.79v-42.39c0-5.09-4.1-9.07-9.34-9.07h-64.71c-5.1 0-8.67 3.73-8.67 9.07v42.4h-6.81v3.5c0 6.72 5.42 12.61 11.59 12.61h73.15c6.18 0 11.59-5.89 11.59-12.61v-3.5h-6.8zm-78.71-42.39c0-2.45 1.23-5.07 4.67-5.07h64.71c2.99 0 5.34 2.23 5.34 5.07v42.4h-74.72v-42.4zm73.93 54.5h-73.15c-4.17 0-7.33-4.18-7.58-8.11h88.31c-0.26 3.93-3.42 8.11-7.58 8.11z"
        />
        <rect class="st0" x="57.29" y="85.85" width="13.25" height="4" />
        <polygon
          class="st0"
          points="30.54 76.37 34.54 76.37 34.54 39.88 93.28 39.88 93.28 76.37 97.28 76.37 97.28 35.88 30.54 35.88"
        />
        <path
          class="st0"
          d="m82.07 66.39l3.69-5-6.63-6.83-5.11 3.6c-1.32-0.75-2.7-1.34-4.14-1.78l-0.92-6.15-9.52-0.11-1.07 6.13c-1.45 0.4-2.85 0.97-4.19 1.68l-5-3.69-6.83 6.63 3.6 5.1c-0.75 1.32-1.34 2.71-1.78 4.15l-6.15 0.92-0.05 4.76 4 0.05 0.02-1.35 5.43-0.82 0.31-1.33c0.44-1.9 1.21-3.71 2.3-5.36l0.75-1.14-3.17-4.5 1.94-1.88 4.42 3.26 1.15-0.72c1.67-1.05 3.49-1.78 5.41-2.17l1.33-0.28 0.94-5.41 2.71 0.03 0.81 5.43 1.33 0.31c1.9 0.44 3.71 1.21 5.36 2.3l1.14 0.75 4.5-3.17 1.89 1.94-3.26 4.42 0.72 1.15c1.05 1.68 1.78 3.5 2.18 5.41l0.28 1.33 5.39 0.95-0.02 1.35 4 0.05 0.05-4.76-6.13-1.07c-0.4-1.45-0.96-2.85-1.68-4.18z"
        />
        <path
          class="st0"
          d="m64.03 66.71c-2.59 0-4.98 0.94-6.8 2.73-1.83 1.79-2.85 4.18-2.88 6.74l4 0.04c0.02-1.49 0.61-2.88 1.68-3.92 1.05-1.03 2.43-1.59 3.9-1.59h0.07c3.07 0.04 5.55 2.56 5.51 5.64l4 0.04c0.05-5.27-4.2-9.62-9.48-9.68z"
        />
      </svg>
      <h1 class="mx-3 text-rrgrey-600 uppercase font-semibold text-xs">
        {{ project.projectType }}
      </h1>
    </div>
    <div class="py-1 px-6">
      <h1 class="text-2xl font-semibold text-rrgrey-800">
        {{ project.title }}
      </h1>
      <p class="py-1 text-md text-rrgrey-600">
        {{ project.cardSummary }}
      </p>
      <div class="flex items-center mt-2 text-rrgrey-600">
        <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512">
          <path
            d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"
          />
          <g>
            <path
              d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"
            />
          </g>
        </svg>
        <h1 class="px-2 text-sm">{{ project.team }}</h1>
      </div>
      <div class="flex items-center mt-2 text-rrgrey-600">
        <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512">
          <path
            d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"
          />
        </svg>
        <h1 class="px-2 text-sm">
          {{ project.location }}
        </h1>
      </div>
      <div class="flex justify-center">
        <router-link
          :to="{
            name: 'Project',
            params: {
              id: project.id
            }
          }"
        >
          <button
            class="bg-transparent mx-auto hover:bg-rrgrey-400 text-rrgrey-600 focus:outline-none focus:border-rrgrey-800 hover:text-rrgrey-800 py-2 px-4 mt-4 mb-2 border-2 border-rrgrey-400 hover:border-rrgrey-800 rounded-md"
          >
            {{ project.callButtonText }}
          </button></router-link
        >
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      default() {
        return {
          errorMessage: "No project sent to card."
        };
      }
    }
  },
  setup() {
    // const closeAlert = ref(false);
    return {};
  }
});
</script>
