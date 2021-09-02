<template>
  <div
    @keyup.esc="onCancel"
    class="
      modal-bg
      flex
      items-center
      justify-center
      fixed
      bg-opacity-80
      left-0
      bottom-0
      w-full
      h-full
      bg-rrgrey-900
      py-12
    "
    tabindex="0"
  >
    <div
      class="
        bg-white
        rounded-lg
        w-1/4
        px-4
        py-4
        flex flex-col
        items-center
        overflow-auto
      "
    >
      <div class="mx-auto h-full w-10/12">
        <header class="text-rrgrey-900 font-medium text-2xl mb-2 mt-12">
          <h3 class="text-center">Confirm</h3>
          <p class="text-rrgrey-600 text-lg text-center">
            Are you sure you want to delete the row?
          </p>
        </header>
        <main class="text-rrgrey-800 text-lg flex justify-center mt-12">
          <button
            id="confirmDelete"
            class="
              delay-100
              duration-200
              bg-rrpink-400
              hover:bg-rrpink-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
            "
            @click="confirmed"
          >
            Confirm
          </button>
          <button
            class="
              delay-100
              duration-200
              ml-3
              bg-transparent
              hover:bg-rrpink-400
              text-rrpink-400 text-lg
              hover:text-white
              py-2
              px-4
              ring-1 ring-rrpink-400
              hover:border-transparent
              rounded-md
              focus:outline-none
              mr-8
            "
            @click="onCancel"
          >
            Cancel
          </button>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DeleteDialog",
  components: {},
  setup(_, { emit }) {
    // Cancel button is clicked
    const onCancel = () => {
      emit("close");
    };
    // Confirm button is clicked
    const confirmed = () => {
      emit("confirmed");
    };
    return { onCancel, confirmed };
  },
});
</script>
