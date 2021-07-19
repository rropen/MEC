<template>
  <div class="mt-10 loginForm self-center flex flex-col">
    <form class="" @submit.prevent="onSubmit">
      <input
        class="
          border border-rrgrey-400
          pl-10
          pr-2
          bg-no-repeat
          py-1
          focus:outline-none
          rounded-md
          mb-2
          text-rrgrey-800
        "
        label="Username"
        type="text"
        placeholder=""
        alt="username"
        name="username"
        style="
          background-image: url(/img/user.svg);
          background-size: 25px;
          background-position: 3% center;
        "
        v-model="userDetails.username"
      /><br />
      <input
        class="
          border border-rrgrey-400
          pl-10
          pr-2
          bg-no-repeat
          py-1
          focus:outline-none
          rounded-md
          mb-2
          text-rrgrey-800
        "
        label="Password"
        type="password"
        placeholder=""
        alt="password"
        name="passord"
        style="
          background-image: url(/img/pw.svg);
          background-size: 25px;
          background-position: 3% center;
        "
        v-model="userDetails.password"
      /><br />
      <input
        class="ml-2 focus:outline-none"
        type="checkbox"
        name="rememberMe"
        v-model="userDetails.rememberMe"
      />
      <span class="ml-4 pl-1 text-rrgrey-800">Remember Me<br /></span>
      <button
        class="
          bg-rrblue-400
          text-white
          py-2
          rounded-lg
          mt-4
          text-lg
          px-20
          focus:outline-none
        "
        type="submit"
      >
        Log In
      </button>
    </form>
    <!-- <div class="validationBox flex flex-col">
        <ul>
            <li>https://codepen.io/rauldronca/pen/OwKMGX</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
import router from "../router/index";

import { reactive, defineComponent } from "vue";
import { useStore } from "../store/store";
import { ActionTypes } from "../types";

export default defineComponent({
  name: "LoginForm",
  components: {},
  setup() {
    const store = useStore();
    const userDetails = reactive({
      username: "eve.holt@reqres.in",
      password: "cityslicka",
      rememberMe: false,
    });

    function onSubmit() {
      store
        .dispatch(ActionTypes.retrieveToken, {
          username: userDetails.username,
          password: userDetails.password,
        })
        .then((response) => {
          router.push({ name: "Home" });
          console.log("LoginForm: ", response);
        })
        .catch((response) => {
          console.log("Error: ", response);
        });
    }
    return { userDetails, onSubmit };
  },
});
</script>
