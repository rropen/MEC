<template>
  <Menu
    name="DropDown"
    as="div"
    class="relative inline-block text-left"
    v-model="DropDown"
  >
    <label for="DropDown" class="block text-md font-medium text-gray-700 mr-6"
      >Purpose:
      <div>
        <MenuButton
          class="
            inline-flex
            justify-center
            w-full
            rounded-md
            border border-gray-300
            px-6
            py-2
            bg-white
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
          "
        >
          {{ this.MeetingPurpose }}
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="
            origin-top-right
            absolute
            right-0
            mt-2
            w-56
            rounded-md
            shadow-lg
            bg-white
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
        >
          <div class="py-1">
            <MenuItem
              @click="this.MeetingPurpose = `Decision`"
              v-slot="{ active }"
            >
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Decision</a
              >
            </MenuItem>
            <MenuItem
              @click="this.MeetingPurpose = `Informative`"
              v-slot="{ active }"
            >
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Informative</a
              >
            </MenuItem>
            <MenuItem
              @click="this.MeetingPurpose = `Course Of Action`"
              v-slot="{ active }"
            >
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Course Of Action</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </label>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

export default {
  name: "DropDown",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
  setup(props) {
    let MeetingPurpose = ref("Meeting Purpose");
    return {
      MeetingPurpose,
    };
  },
};
</script>
