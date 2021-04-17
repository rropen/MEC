<template>
  <div class="wrapper">
    <nav
      class="font-sans flex flex-row justify-start text-center sm:flex-row sm:text-left sm:justify-start bg-rrblue-800  w-h h-16 leading-16"
    >
      <div class="mr-2 ml-6">
        <a href="/"><img class="w-8 mt-3" src="@/assets/img/monogram.jpg"/></a>
      </div>
      <div class="h-16">
        <router-link :to="{ name: 'Home' }"
          ><div
            class=" text-xl no-underline text-white hover:text-white mr-6 font-sans"
          >
            <span class="text-rrpink-400" v-if="env == 'development'">dev</span
            >Software Factory
          </div></router-link
        >
      </div>
      <div class="h-16">
        <router-link :to="{ name: 'Projects' }"
          ><div
            class="h-full w-auto px-6 inline-block no-underline text-white hover:text-white hover:bg-rrblue-400"
          >
            Projects
          </div></router-link
        >
      </div>
      <div class="h-16">
        <router-link :to="{ name: 'Architectures' }">
          <div
            class="h-full w-auto px-6 inline-block no-underline text-white hover:text-white hover:bg-rrblue-400"
          >
            Architectures
          </div></router-link
        >
      </div>
      <div class="h-16">
        <router-link :to="{ name: 'Members' }"
          ><div
            class="h-full w-auto px-6 inline-block no-underline text-white hover:text-white hover:bg-rrblue-400"
          >
            Members
          </div></router-link
        >
      </div>
      <div class="h-16">
        <router-link :to="{ name: 'Skills' }">
          <div
            class="h-full w-auto px-6 inline-block no-underline text-white hover:text-white hover:bg-rrblue-400"
          >
            Skills
          </div></router-link
        >
      </div>
      <div class="h-16">
        <a
          href="http://docs.uscdz.local"
          class="h-full w-auto px-6 inline-block no-underline text-white hover:text-white hover:bg-rrblue-400"
          >Documentation</a
        >
      </div>

      <!-- <div
        @click="toggleUserDropdown"
        @mouseenter="showUserDropdown = true"
        @mouseleave="showUserDropdown = false"
        class="h-16 ml-auto cursor-pointer select-none z-50"
      >
        <a
          id="avatarLink"
          class="h-full w-auto inline-block no-underline text-white hover:text-white select-none"
          >Josh Haines</a
        >
        <img
          id="avatarImage"
          class="rounded-full inline-block h-12 w-12 mr-6 ml-4 select-none"
          alt="A"
          src="/img/josh_small3.jpg"
        />
        <transition name="userDropDownFade">
          <div
            id="userDropdown"
            v-if="showUserDropdown"
            class="userDropDown absolute border-rrgrey-300 border font-sans bg-white mt-0 rounded-md"
            style="width: 12rem; right: 1rem; top: 3.8rem;"
          >
            <div class="flex flex-col justify-start leading-loose">
              <a
                class="self-center h-10 leading-10 border-b-2 border-rrblue-200"
                >Profile</a
              >
              <a
                class="self-center h-10 leading-10 border-b-2 border-rrblue-200"
                >Settings</a
              >
              <a
                class="self-center h-10 leading-10 border-b-2 border-rrblue-200"
                >My Projects</a
              >
              <div v-if="!isAuth" class="self-center h-10 leading-10">
                <router-link :to="{ name: 'Login' }">Log In</router-link>
              </div>
              <div
                v-if="isAuth"
                class="self-center h-10 leading-10"
                @click="logOut"
              >
                <router-link :to="{ name: 'Logout' }">Log Out</router-link>
              </div>
            </div>
          </div>
        </transition>
      </div> -->
    </nav>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useStore } from "../store/store";
import { ActionTypes } from "../types";

export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const store = useStore();
    const showUserDropdown = ref(false);
    const isAuth = computed(() => store.getters.isAuth);
    const env = process.env.VUE_APP_ENV;

    function toggleUserDropdown() {
      showUserDropdown.value = !showUserDropdown.value;
    }

    function logOut() {
      store.dispatch(ActionTypes.logOut, null);
    }

    return {
      showUserDropdown,
      toggleUserDropdown,
      isAuth,
      logOut,
      env
    };
  }
});
</script>

<style scoped>
.userDropDownFade-enter-active,
.userDropDownFade-leave-active {
  transition: all 0.1s ease-in-out;
}

.userDropDownFade-enter-from,
.userDropDownFade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
