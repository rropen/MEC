<template>
  <div>
    <Statistics :rows="rows" />
    <div @keyup.esc="PastMeetingModal = false" class="flex justify-center">
      <!-- <div class="">
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
          @click="PastMeetingModal = !PastMeetingModal"
        >
          <teleport to="#modals">
            <PastMeetingForm
              v-if="PastMeetingModal"
              @close="hideModal()"
              @updateTable="updateTable()"
            >
            </PastMeetingForm>
          </teleport>
          Enter Past Meeting
        </button>
      </div> -->

      <label
        for="employeeNumber"
        class="block text-md font-medium text-gray-700 justify-center mr-6"
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
      <label for="title" class="block text-md font-medium text-gray-700 mr-6">
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
      <label
        for="numSlides"
        class="block text-md font-medium text-gray-700 mr-6"
      >
        Powerpoint Slides: &nbsp;
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
      <DropDown />

      <!-- This creates our start and stop button for the counter -->
    </div>
    <div class="flex justify-center">
      <label for="comment" class="text-md font-medium text-gray-700 mr-6 w-1/3">
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
        @click="play()"
      >
        Start
      </button>
      <button
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
        @click="pause()"
      >
        Stop
      </button>
      <button
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
        @click="reset()"
      >
        Clear
      </button>
    </div>
    <div class="flex justify-center mt-10">
      <button
        class="
          delay-100
          duration-200
          bg-rrblue-400
          hover:bg-rrblue-200
          text-white
          font-semibold
          py-3
          px-12
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

  <!-- This is the charts that are rendered in the home page -->
  <!-- <Charts :cost-calc="this.costCalc.toFixed(2)" /> -->
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

// import Lower from "../components/Lower.vue";
import PastMeetingForm from "../components/PastMeetingForm.vue";
import Statistics from "../components/Statistics.vue";
import Toggle from "../components/Toggle.vue";
import Table from "../components/Table.vue";
import DropDown from "../components/DropDown.vue";

export default {
  name: "Home",

  components: {
    PastMeetingForm,
    Statistics,
    Toggle,
    Table,
    DropDown,
  },

  setup(props) {
    const powerpoint = ref(false);
    const numSlides = ref(0);
    const rows = ref([]);
    const comment = ref("");
    const title = ref("");

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
        employeeNumber: parseInt(props.employeeNumber),
        time: parseInt(props.minutes),
        powerpoint: powerpoint.value,
        powerpointSlides: parseInt(numSlides.value),
        totalCost: parseFloat(props.cost.toFixed(2)),
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
    };
  },
  data() {
    return {
      timerEnabled: false,
      PastMeetingModal: false,
      costCalc: 0,
      date: "",
      employeeNumber: 0,
      costHr: "",
      seconds: 50,
    };
  },
  computed: {
    // a computed getter
    minutes: function () {
      // `this` points to the vm instance
      return Math.floor(this.seconds / 60);
    },
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        // The value is calculated by 1000 = 1 sec. And the .039 is the cost per signle employe at $135 per hr
        setTimeout(() => {
          this.costCalc = this.costCalc + 0.039;
          this.seconds = this.seconds + 1 / this.employeeNumber;
        }, 1000 / this.employeeNumber);
      }
    },
    costCalc: {
      handler(value) {
        if (value > 0.0 && this.timerEnabled) {
          setTimeout(() => {
            this.costCalc = this.costCalc + 0.039;
            this.seconds = this.seconds + 1 / this.employeeNumber;
          }, 1000 / this.employeeNumber);
          // this.seconds = this.seconds + 1;
        }
      },
      // This ensures the watcher is triggered upon creation
      immediate: true,
    },
  },

  methods: {
    // This is how you start and stop the cost calculation
    play() {
      this.timerEnabled = true;
    },
    pause() {
      this.timerEnabled = false;
    },
    reset() {
      this.costCalc = 0;
      this.seconds = 0;
      this.minutes = 0;
    },
    hideModal() {
      this.PastMeetingModal = false;
    },
    updateTable() {
      this.$refs.fetchTablefromHome.fetchTable();
    },
  },
};
</script>
