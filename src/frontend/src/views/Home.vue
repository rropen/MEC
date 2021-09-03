<template>
  <div @keyup.esc="pastMeetingModal = false">
    <Statistics :rows="rows" />
    <div class="flex justify-center">
      <label
        for="employeeNumber"
        class="block text-md font-medium text-gray-700 justify-center mr-6"
      >
        Employees: &nbsp;
        <input
          id="employeeNumber"
          type="text"
          name="employeeNumber"
          v-model="employeeNumber"
          placeholder="0"
          class="
            mb-6
            shadow-sm
            focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
            block
            w-30
            sm:text-sm
            border-gray-300
            rounded-md
          "
          :class="{ '': employeeNumber == 0 }"
        />
      </label>
      <label for="title" class="block text-md font-medium text-gray-700 mr-6">
        Meeting Title: &nbsp;
        <input
          id="meetingTitle"
          type="text"
          name="title"
          v-model="title"
          placeholder="Discuss Things..."
          class="
            mb-6
            shadow-sm
            focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </label>
      <label
        for="numSlides"
        class="block text-md font-medium text-gray-700 mr-6"
      >
        Powerpoint Slides: &nbsp;
        <input
          id="numSlides"
          type="text"
          name="numSlides"
          v-model="numSlides"
          placeholder="Discuss Things..."
          class="
            mb-6
            shadow-sm
            focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </label>
      <label
        for="Meeting Group"
        class="block text-md font-medium text-gray-700 mr-6"
      >
        Meeting Group: &nbsp;
        <input
          id="meetingGroup"
          type="text"
          name="meetingGroup"
          v-model="meetingGroup"
          placeholder="Group..."
          class="
            mb-6
            shadow-sm
            focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </label>

      <!-- This creates our start and stop button for the counter -->
    </div>
    <div class="flex justify-center">
      <label for="comment" class="text-md font-medium text-gray-700 mr-6 w-1/3">
        Comment: &nbsp;
        <input
          id="comment"
          type="text"
          name="comment"
          v-model="comment"
          placeholder="What was discussed..."
          class="
            mb-6
            shadow-sm
            focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
            block
            w-full
            h-16
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </label>
    </div>
    <!-- Outputs the cost calculation -->
    <div class="flex justify-center mb-10 mt-6 text-lg">
      <p>
        <span>
          Cost $
          <span class="text-red-500 font-semibold">{{
            costCalc.toFixed(2)
          }}</span></span
        ><br />
        <span class="" v-show="seconds < 60 && seconds != 0"
          >Seconds
          <span class="text-red-500 w-14 font-semibold">{{
            seconds.toFixed(0)
          }}</span></span
        >
        <span class="" v-show="minutes >= 1"
          >Minutes
          <span class="text-red-500 font-semibold">{{ minutes }}</span></span
        >
      </p>
    </div>

    <div class="flex justify-center">
      <button
        id="start"
        v-if="employeeNumber != 0"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          rounded-l-md
          border border-gray-300
          bg-rrblue-400
          text-md
          font-medium
          text-white
          hover:bg-rrblue-200
        "
        @click="timerEnabled = true"
      >
        Start
      </button>
      <button
        id="stop"
        v-if="employeeNumber != 0"
        class="
          -ml-px
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          bg-red-500
          text-md
          font-medium
          text-white
          hover:bg-red-400
        "
        @click="timerEnabled = false"
      >
        Stop
      </button>
      <button
        id="clear"
        class="
          -ml-px
          relative
          inline-flex
          items-center
          px-4
          py-2
          rounded-r-md
          border border-gray-300
          bg-rrblue-400
          text-md
          font-medium
          text-white
          hover:bg-rrblue-200
        "
        @click="(costCalc = 0), (seconds = 0)"
      >
        Clear
      </button>
    </div>
    <div class="flex justify-center mt-10">
      <button
        id="pastMeeting"
        class="
          mr-6
          delay-100
          duration-200
          bg-rrblue-400
          hover:bg-rrblue-200
          text-white
          font-semibold
          py-3
          px-4
          rounded-md
          text-lg
          focus:outline-none
        "
        @click="pastMeetingModal = !pastMeetingModal"
        v-if="employeeNumber < 1"
      >
        <teleport to="#modals">
          <PastMeetingForm
            v-if="pastMeetingModal"
            @close="pastMeetingModal = false"
            @updateTable="fetchTable()"
          >
          </PastMeetingForm>
        </teleport>
        Enter Past Meeting
      </button>

      <button
        id="submit"
        class="
          mr-2
          delay-100
          duration-200
          bg-rrblue-400
          hover:bg-rrblue-200
          text-white
          font-semibold
          py-3
          px-6
          rounded-md
          text-lg
          focus:outline-none
        "
        @click.prevent="onSubmit"
      >
        Submit Meeting
      </button>
    </div>

    <Table class="mt-6" :rows="rows" @fetchTableAfterDelete="fetchTable()" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import PastMeetingForm from "../components/PastMeetingForm.vue";
import Statistics from "../components/Statistics.vue";
import Table from "../components/Table.vue";
import { nanoid } from "nanoid";

const HOURLYRATE = 135;
const meetingGroup = ref("");
const numSlides = ref(0);
const rows = ref([]);
const comment = ref("");
const title = ref("");
const timerEnabled = ref(false);
const costCalc = ref(0);
const groupCost = ref(0);
const seconds = ref(0);
const pastMeetingModal = ref(false);
const employeeNumber = ref(0);
let minutes = computed(() => {
  return Math.floor(seconds.value / 60);
});

function resetForm() {
  employeeNumber.value = 0;
  title.value = "";
  comment.value = "";
  numSlides.value = 0;
}

// if the timer is going, increment cost
watch(timerEnabled, () => {
  if (timerEnabled) {
    costCalc.value += 0.000001;
  }
});

// do the cost calculation
watch(
  costCalc,
  () => {
    if (costCalc.value > 0 && timerEnabled.value) {
      setTimeout(() => {
        costCalc.value = costCalc.value + HOURLYRATE / 60 / 60;
        seconds.value += 1 / employeeNumber.value;
      }, 1000 / employeeNumber.value);
    }
  },
  { immediate: true }
);

// Fetch table data from the API
function fetchTable() {
  axios
    // .get("/meetings")
    .get("/meetings", {})

    .then(function (response) {
      let data = response.data;
      rows.value = data;
    })
    .catch(function (error) {
      console.log("Get Error: ", error);
    });
}

// Send data for a new row to the api
function sendRow(rowVals) {
  axios
    .post("/meetings", rowVals, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      fetchTable();
      resetForm();
    })
    .catch(function (error) {
      console.log("Post Error: ", error);
    });
}

// Gather info upon form submit and call the api post request to push data to api
function onSubmit() {
  const rowVals = {
    meetingId: nanoid(),
    date: Date.now(),
    employeeNumber: employeeNumber.value,
    time: minutes.value,
    totalCost: parseFloat(costCalc.value.toFixed(2)),
    meetingGroup: meetingGroup.value,
    powerpointSlides: numSlides.value,
    comment: comment.value,
    title: title.value,
    groupCost: groupCost.value,
  };
  sendRow(rowVals);
}

onMounted(() => {
  fetchTable();
});
</script>
