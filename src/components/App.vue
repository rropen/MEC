<template>
  <div class="bg-rrblue-800 min-h-full overflow-auto">
    <div
      id="app"
      class="h-full font-sans bg-rrgrey-200"
      :class="{
        homeImage: pathName == 'Home'
      }"
      style="top: 50%;"
    >
      <Header />
      <!-- <Breadcrumbs /> -->
      <!-- <div v-if="pathName === 'Home'" class="homeImage h-screen bg-cover"></div> -->
      <div
        class="page mx-20 my-8"
        :class="{
          'bg-white rounded-md h-full p-4': pathName !== 'Home'
        }"
      >
        <router-view />
      </div>
      <div class="footer_push"></div>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute();
    const pathName = computed(() => route.name);
    return { pathName };
  }
});
</script>
<style>
.homeImage {
  background-image: url("/img/temp.jpg");
  background-position: 0px -4em;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
