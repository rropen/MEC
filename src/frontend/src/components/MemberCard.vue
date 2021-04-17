<template>
  <!-- component -->
  <!-- <div class="wrapper"> -->
  <div
    class="max-w-sm bg-white text-rrblue shadow-md rounded-sm mt-4 mb-16 mx-6"
    style="border-left: 1px solid #efeff4; border-right: 1px solid #efeff4; border-top: 1px solid #efeff4; border-bottom: 5px solid #10069f;"
  >
    <img
      :class="{
        'border-rrteal-400': card.title == 'Maintainer',
        'border-rrpink-400': card.title == 'Developer',
        'border-rrpurple-400': card.title == 'Contributor'
      }"
      class="h-auto bg-cover border-b-6 mb-2"
      :src="card.image"
      alt="avatar"
    />
    <!-- <div class="relative">
        <img
          class="absolute border-white border-4 rounded-full"
          style="xl:bottom: 1.4rem; left: 1.7rem; width: 6.2rem;"
          :src="'../assets/img/' + card.image"
        />
      </div> -->
    <div class="flex items-center px-6">
      <svg class="h-4 w-4 text-rrgrey-600 fill-current" viewBox="0 0 512 512">
        <path
          d="m24.086 266.75l124.39-161.58c3.584-4.672 2.709-11.371-1.963-14.955-4.672-3.605-11.349-2.731-14.955 1.941l-129.34 168c-2.923 3.797-2.965 9.067-0.085 12.907l128 170.67c2.091 2.795 5.312 4.267 8.533 4.267 2.219 0 4.48-0.704 6.4-2.133 4.715-3.541 5.675-10.219 2.155-14.933l-123.14-164.18z"
        />
        <path
          d="m509.87 260.26l-128-170.67c-3.541-4.736-10.219-5.675-14.933-2.133-4.715 3.541-5.675 10.219-2.155 14.933l123.2 164.27-123.2 164.27c-3.52 4.715-2.56 11.392 2.155 14.933 1.92 1.429 4.181 2.133 6.4 2.133 3.221 0 6.443-1.472 8.533-4.267l128-170.67c2.837-3.797 2.837-9.002 0-12.799z"
        />
        <path
          d="m312.26 21.737c-5.781-1.6-11.584 1.664-13.184 7.339l-128 448c-1.621 5.653 1.643 11.563 7.317 13.184 0.981 0.277 1.984 0.405 2.944 0.405 4.651 0 8.917-3.051 10.24-7.744l128-448c1.622-5.654-1.642-11.563-7.317-13.184z"
        />
      </svg>
      <h1 class="mx-3 text-rrgrey-600 uppercase font-semibold text-xs">
        {{ card.title }}
      </h1>
    </div>
    <div class="py-1 px-6">
      <h1 class="text-2xl font-semibold text-rrgrey-800">
        {{ card.firstname }}&nbsp;{{ card.lastname }}
      </h1>
      <p class="py-1 text-md text-rrgrey-600">
        {{ card.tagline }}
      </p>
      <div class="my-6">
        <div class="flex flex-row justify-evenly">
          <!-- arch section -->
          <div class="arch_box mr-2 pr-2">
            <h2 class="text-rrgrey-400">
              Architectures
            </h2>
            <ul>
              <li
                v-for="item in card.architectures"
                :key="item.id"
                class="ml-4 text-rrgrey-600 text-s pb-1"
              >
                <div class="bg-no-repeat">
                  <a class="underline" :href="item.link">{{ item.title }}</a
                  ><red-battery v-if="item.ability == 1"></red-battery>
                  <yellow-battery v-if="item.ability == 2"></yellow-battery>
                  <green-battery v-if="item.ability == 3"></green-battery>
                </div>
              </li>
            </ul>
          </div>
          <!-- languages section -->
          <div
            :class="{
              'border-rrteal-400 border-l-2': card.title == 'Maintainer',
              'border-rrpink-400 border-l-2': card.title == 'Developer',
              'border-rrpurple-400 border-l-2': card.title == 'Contributor'
            }"
            class="language_box pl-4 ml-2"
            style=""
          >
            <h2 class="text-rrgrey-400">
              Languages
            </h2>
            <ul>
              <li
                v-for="item in card.languages"
                :key="item.id"
                class="ml-4 text-rrgrey-600 text-s pb-1"
              >
                <div class="bg-no-repeat">
                  <a class="underline" :href="item.link">{{ item.title }}</a
                  ><red-battery v-if="item.ability == 1"></red-battery>
                  <yellow-battery v-if="item.ability == 2"></yellow-battery>
                  <green-battery v-if="item.ability == 3"></green-battery>
                  <!-- <img class="ml-2 w-6 inline" src="/img/RedBattery.svg" /> -->
                </div>

                <!-- style="background-image: url(/img/RedBattery.svg); background-size: 20px; background-position: 110% center" -->
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-row mt-4 -ml-3">
          <!-- skills section -->
          <div
            :class="{
              'border-rrteal-400': card.title == 'Maintainer',
              'border-rrpink-400': card.title == 'Developer',
              'border-rrpurple-400': card.title == 'Contributor'
            }"
            class="language_box ml-4"
            style=""
          >
            <h2 class="text-rrgrey-400">
              Skills
            </h2>
            <ul>
              <li
                v-for="item in card.skills"
                :key="item.id"
                class="ml-4 text-rrgrey-600 text-s pb-1 pr-4"
              >
                <div class="bg-no-repeat">
                  <a class="underline" :href="item.link">{{ item.title }}</a
                  ><red-battery v-if="item.ability == 1"></red-battery>
                  <yellow-battery v-if="item.ability == 2"></yellow-battery>
                  <green-battery v-if="item.ability == 3"></green-battery>
                  <!-- <img class="ml-2 w-6 inline" src="/img/RedBattery.svg" /> -->
                </div>

                <!-- style="background-image: url(/img/RedBattery.svg); background-size: 20px; background-position: 110% center" -->
              </li>
            </ul>
          </div>
        </div>
      </div>
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
        <h1 class="px-2 text-sm">
          <a :href="card.teamLink">{{ card.team }}</a>
        </h1>
      </div>
      <div class="flex items-center mt-2 text-rrgrey-600">
        <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512">
          <path
            d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"
          />
        </svg>
        <h1 class="px-2 text-sm">
          <a :href="`http://maps.google.com/?q=` + card.location">{{
            card.location
          }}</a>
        </h1>
      </div>
      <div class="flex items-center mt-2 text-rrgrey-600">
        <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512">
          <path
            d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"
          />
        </svg>
        <h1 class="px-2 text-xs">
          <a :href="`mailto:` + card.email">{{ card.email }}</a>
        </h1>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RedBattery from "../components/RedBattery.vue";
import YellowBattery from "../components/YellowBattery.vue";
import GreenBattery from "../components/GreenBattery.vue";
export default defineComponent({
  name: "MemberCard",
  components: { GreenBattery, YellowBattery, RedBattery },
  props: {
    card: {
      type: Object,
      default: function() {
        return {
          id: Number,
          firstname: String,
          lastname: String,
          email: String,
          location: String,
          image: String,
          title: String,
          team: String,
          tagline: String,
          architectures: []
        };
      }
    }
  }
});
</script>

<style></style>
