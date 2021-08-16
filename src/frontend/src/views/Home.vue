<template>
  <div>
    <Statistics :rows="rows" />
    <div @keyup.esc="pastMeetingModal = false" class="flex">
      <div class="ml-8 w-screen">
        <div class="flex justify-end mr-8">
          <button
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
            "
            @click="pastMeetingModal = !pastMeetingModal"
          >
            <teleport to="#modals">
              <PastMeetingForm
                v-if="pastMeetingModal"
                @close="pastMeetingModal = false"
                @updateTable="updateTable()"
              >
              </PastMeetingForm>
            </teleport>
            Enter Past Meeting
          </button>
        </div>
        <label
          for="employeeNumber"
          class="block text-md font-medium text-gray-700"
        >
          Employees: &nbsp;
          <input
            type="text"
            name="employeeNumber"
            v-model="employeeNumber"
            placeholder="0"
            class="
              mb-6
              shadow-sm
              focus:ring-bg-rrblue-400
              focus:border-bg-rrblue-400
              block
              w-30
              sm:text-sm
              border-gray-300
              rounded-md
            "
            :class="{ '': employeeNumber == 0 }"
          />
        </label>

        <!-- This creates our start and stop button for the counter -->
        <div class="flex-auto">
          <button
            v-if="employeeNumber != 0"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
              mr-8
            "
            @click="timerEnabled = true"
          >
            Start
          </button>
          <button
            v-if="employeeNumber != 0"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
              mr-8
            "
            @click="timerEnabled = false"
          >
            Stop
          </button>
          <button
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
            "
            @click="(costCalc = 0), (seconds = 0)"
          >
            Clear
          </button>
        </div>
        <!-- Outputs the cost calculation -->
        <div class="mt-4 text-md">
          <p>
            <span>
              Cost $
              <span class="text-rrpink-600 font-semibold">{{
                costCalc.toFixed(2)
              }}</span></span
            ><br />
            <span class="" v-show="seconds < 60 && seconds != 0"
              >Seconds
              <span class="text-rrpink-600 w-14 font-semibold">{{
                seconds.toFixed(0)
              }}</span></span
            >
            <span class="" v-show="minutes >= 1"
              >Minutes
              <span class="text-rrpink-600 font-semibold">{{
                minutes
              }}</span></span
            >
          </p>
        </div>
      </div>
    </div>
    <!-- This is the Table rendered in the home page -->
    <!-- <Lower
      class="mt-4"
      :cost="costCalc"
      :employeeNumber="parseInt(employeeNumber)"
      :minutes="minutes"
      ref="fetchTablefromHome"
    /> -->
    <div class="mt-4">
      <table class="ml-8">
        <tbody>
          <tr>
            <label for="title" class="block text-md font-medium text-gray-700">
              Meeting Title: &nbsp;
              <input
                type="text"
                name="title"
                v-model="title"
                placeholder="Discuss Things..."
                class="
                  mb-6
                  shadow-sm
                  focus:ring-bg-rrblue-400
                  focus:border-bg-rrblue-400
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </tr>
          <tr>
            <label
              for="comment"
              class="block text-md font-medium text-gray-700"
            >
              Comment: &nbsp;
              <input
                type="text"
                name="comment"
                v-model="comment"
                placeholder="What was discussed..."
                class="
                  mb-6
                  shadow-sm
                  focus:ring-bg-rrblue-400
                  focus:border-bg-rrblue-400
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </tr>
          <tr>
            <td class="text-md font-medium text-gray-700">
              <p>Was PowerPoint Used?</p>
            </td>
            <td class="py-2">
              <Toggle
                @click="powerpoint = !powerpoint"
                :toggleValue="powerpoint"
              ></Toggle>
            </td>
          </tr>
          <tr v-show="powerpoint">
            <label
              for="numSlides"
              class="block text-md font-medium text-gray-700"
            >
              Number of Slides: &nbsp;
              <input
                type="text"
                name="numSlides"
                v-model="numSlides"
                placeholder="Discuss Things..."
                class="
                  mb-6
                  shadow-sm
                  focus:ring-bg-rrblue-400
                  focus:border-bg-rrblue-400
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </tr>
        </tbody>
      </table>

      <div class="mt-4 ml-8">
        <button
          class="
            delay-100
            duration-200
            bg-rrblue-400
            hover:bg-rrblue-200
            text-white
            font-semibold
            py-2
            px-4
            rounded-md
            text-lg
            focus:outline-none
          "
          @click.prevent="onSubmit"
        >
          Submit
        </button>
      </div>
      <Table class="mt-6" :rows="rows" @fetchTableAfterDelete="fetchTable()" />
    </div>
  </div>

  <!-- This is the charts that are rendered in the home page -->
  <!-- <Charts :cost-calc="this.costCalc.toFixed(2)" /> -->
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";

// import Lower from "../components/Lower.vue";
import PastMeetingForm from "../components/PastMeetingForm.vue";
import Statistics from "../components/Statistics.vue";
import Toggle from "../components/Toggle.vue";
import Table from "../components/Table.vue";
import { nanoid } from "nanoid";

export default {
  name: "Home",

  components: {
    PastMeetingForm,
    Statistics,
    Toggle,
    Table,
  },

  setup(props) {
    const HOURLYRATE = 135;
    const powerpoint = ref(false);
    const numSlides = ref(0);
    const rows = ref([]);
    const comment = ref("");
    const title = ref("");
    const timerEnabled = ref(false);
    const costCalc = ref(0);
    const seconds = ref(0);
    const pastMeetingModal = ref(false);
    const employeeNumber = ref(0);

    let minutes = computed(() => {
      return Math.floor(seconds.value / 60);
    });

    watch(timerEnabled, () => {
      if (timerEnabled) {
        costCalc.value += 0.000001;
      }
    });

    watch(
      costCalc,
      () => {
        if (costCalc.value > 0 && timerEnabled.value) {
          setTimeout(() => {
            costCalc.value = costCalc.value + HOURLYRATE / 60 / 60;
            Math.floor((seconds.value += 1 / employeeNumber.value));
          }, 1000 / employeeNumber.value);
        }
      },
      { immediate: true }
    );

    // Fetch table data from the API
    function fetchTable() {
      axios
        .get("/meetings")
        .then(function (response) {
          let data = response.data;
          // console.log("fetching from Lower");
          rows.value = data;
          // console.log("Rows before fetch: ", rows.value);
          // rows.push(response.data);
          // console.log("response: ", response.data);
          // console.log("rows: ", rows);
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
          // console.log("Successful Response: ", response);
          // console.log("Rows before fetch: ", rows.value);
          fetchTable();
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
        employeeNumber: parseInt(employeeNumber.value),
        time: parseInt(minutes.value),
        powerpoint: powerpoint.value,
        powerpointSlides: parseInt(numSlides.value),
        totalCost: parseFloat(costCalc.value.toFixed(2)),
        comment: comment.value,
        title: title.value,
      };
      console.log("rowvals: ", rowVals);
      sendRow(rowVals);
    }

    onMounted(() => {
      fetchTable();
    });

    return {
      powerpoint,
      numSlides,
      fetchTable,
      rows,
      onSubmit,
      sendRow,
      title,
      comment,
      timerEnabled,
      costCalc,
      minutes,
      seconds,
      pastMeetingModal,
      employeeNumber,
    };
  },
};
</script>
